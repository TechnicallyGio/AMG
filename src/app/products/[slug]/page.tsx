// src/app/products/[slug]/page.tsx
import products from "../../products";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

type ProductPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) return notFound();

  return (
    // On the left, there will be 3 images of the product
    // On the right, there will be the name of the product, description, and a button to amazon. there will be a divider and below the divider there will be characteristics of the product.
    // the right side will be fixed and the left side will be scrollable
    <div className="flex flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48">
      <div className="flex w-full flex-col gap-8 md:flex-row">
        {/* Left Side - Scrolls normally with page */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center space-y-6">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src={product.imageUrl}
                alt={`${product.name} image ${i + 1}`}
                width={400}
                height={400}
                className="h-96 w-96 object-contain"
              />
            ))}
          </div>
        </div>

        {/* Right Side - Sticky until bottom */}
        <div className="w-full md:w-1/2">
          <div className="sticky top-24">
            <div className="flex flex-col items-start justify-start rounded-xl bg-black/30 p-6 shadow-lg backdrop-blur">
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="mt-4 text-gray-300">{product.description}</p>
              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline mt-5"
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

      {/* Related Products Section */}
      {products.filter(
        (p) => p.category === product.category && p.slug !== product.slug,
      ).length > 0 && (
        <div className="mt-16 flex w-full flex-col items-center">
          <h2 className="mb-8 text-center text-2xl font-bold">
            Related Products
          </h2>
          <div className="flex flex-row flex-wrap justify-evenly gap-10">
            {products
              .filter(
                (p) =>
                  p.category === product.category && p.slug !== product.slug,
              )
              .map((relatedProduct, idx) => (
                <div
                  key={idx}
                  className="w-1/5 rounded-2xl bg-white/5 p-6 text-center shadow-lg backdrop-blur transition hover:scale-105"
                >
                  <Image
                    src={relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    width={96}
                    height={96}
                    className="mx-auto mb-4 h-24 w-24 object-contain"
                  />
                  <h3 className="text-lg font-semibold">
                    {relatedProduct.name}
                  </h3>

                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="btn btn-outline mt-5"
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
