import products from "../../products";
import { notFound } from "next/navigation";
import ProductContent from "./ProductContent";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  const { slug } = params;

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== slug,
  );

  return <ProductContent product={product} relatedProducts={relatedProducts} />;
}
