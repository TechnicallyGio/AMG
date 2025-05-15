import Link from "next/link";
import Image from "next/image";

import products from "./products";

export default function Home() {
  const juiceProducts = products.filter(
    (product) => product.featured === true && product.category === "beverage",
  );

  return (
    <>
      <header className="relative top-0 flex min-h-screen flex-col-reverse items-center justify-center gap-12 overflow-hidden px-6 py-16 md:flex-row md:px-20 lg:px-32 xl:px-48">
        <div className="text-center md:w-1/2 md:text-left">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover the Power of Sea Moss
          </h1>
          <p className="mb-8 max-w-md text-lg text-gray-300">
            Nourish your body with nature’s superfood — shop juices, gels, and
            capsules crafted for your health and lifestyle.
          </p>

          <button className="btn-outline btn-lg btn">
            <Link href="/products">Shop Now</Link>
          </button>
        </div>{" "}
      </header>
      <section className="px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
          Explore Our Flavors
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {juiceProducts.map((product, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white/5 p-6 text-center shadow-lg backdrop-blur transition hover:scale-105"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={96}
                height={96}
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>

              <Link
                href={`/products/${product.slug}`}
                className="btn btn-outline mt-3"
              >
                <span>Learn More</span>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
