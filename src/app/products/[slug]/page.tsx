import products from "../../products";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// Define the Product type to match your data structure
type Product = {
  slug: string;
  name: string;
  description: string;
  imageUrl: string;
  amazonLink: string;
  category: string;
  characteristics?: string[];
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Static path generation for product slugs
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage(props: PageProps) {
  const params = await props.params;
  // Remove the async keyword from the component function
  const { slug } = params;

  const product = products.find((p) => p.slug === slug) as Product | undefined;
  if (!product) return notFound();

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.slug !== slug,
  ) as Product[];

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-45">
      <div className="flex w-full flex-col gap-8 md:flex-row">
        {/* Left - Product Image */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-6">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="h-96 w-96 object-contain"
              priority
            />
            <Image
              src="https://placehold.co/1000x1000?text=Placeholder-2" // Changed to local placeholder image
              alt={`${product.name} alternate view`}
              width={400}
              height={400}
              className="h-96 w-96 object-contain"
              priority
            />
            <Image
              src="https://placehold.co/1000x1000?text=Placeholder-3" // Changed to local placeholder image
              alt={`${product.name} additional view`}
              width={400}
              height={400}
              className="h-96 w-96 object-contain"
              priority
            />
          </div>
        </div>

        {/* Right - Sticky Product Info */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-24">
            <div className="flex flex-col items-start justify-start rounded-xl bg-black/30 p-6 shadow-lg backdrop-blur">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="mt-4 text-gray-300">{product.description}</p>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block rounded-md border border-white px-4 py-2 text-white transition hover:bg-white hover:text-black"
              >
                Buy on Amazon
              </a>

              <hr className="my-6 w-full border-gray-600" />

              <h3 className="text-lg font-semibold">Characteristics</h3>
              <ul className="mt-4 list-disc pl-5">
                {product.characteristics?.map((char, idx) => (
                  <li key={idx} className="text-gray-300">
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 flex w-full flex-col items-center">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <div
                key={relatedProduct.slug}
                className="rounded-2xl bg-white/5 p-6 text-center shadow-lg backdrop-blur transition hover:scale-105"
              >
                <Image
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  width={96}
                  height={96}
                  className="mx-auto mb-4 h-24 w-24 object-contain"
                />
                <h3 className="text-lg font-semibold">{relatedProduct.name}</h3>
                <Link
                  href={`/products/${relatedProduct.slug}`}
                  className="mt-4 inline-block rounded-md border border-white px-3 py-1 text-sm transition hover:bg-white hover:text-black"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
