"use client";
import Image from "next/image";
import Link from "next/link";
import products from "../products";

export default function ProductsPage() {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48">
      <h1 className="mb-12 text-center text-3xl font-bold sm:text-4xl">
        Our Products
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {products.map((product, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white/5 p-6 text-center shadow-lg backdrop-blur transition hover:scale-105"
            onClick={() => null}
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
              key={idx}
              href={`products/${product.slug}`}
              className="btn btn-outline mt-5"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
