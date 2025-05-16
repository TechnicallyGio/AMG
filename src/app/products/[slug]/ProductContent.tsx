"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../products";

type ProductContentProps = {
  product: Product;
  relatedProducts: Product[];
};

export default function ProductContent({
  product,
  relatedProducts,
}: ProductContentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center px-4 py-10 text-white sm:px-6 md:px-16 lg:px-32"
    >
      <div className="flex w-full flex-col gap-12 md:flex-row">
        {/* Left - Product Images */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {product.promoImageUrl?.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                alt={`${product.name} promo ${idx + 1}`}
                width={400}
                height={400}
                className="w-full max-w-sm rounded-xl object-contain shadow-xl"
              />
            ))}
          </div>
        </motion.div>

        {/* Right - Product Info */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7, ease: "easeInOut" }}
        >
          <div className="relative md:sticky md:top-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex flex-col gap-6 rounded-3xl bg-white/5 p-6 shadow-xl ring-1 ring-white/10 backdrop-blur-md transition-all hover:ring-white/30 sm:p-8">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-xl object-contain"
                />
                <div className="text-center sm:text-left">
                  <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    {product.name}
                  </h1>
                  <p className="mt-1 text-sm text-gray-400">
                    {product.category}
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white">Overview</h2>
                <p className="mt-2 text-base leading-relaxed text-gray-300">
                  {product.description}
                </p>
              </div>

              <a
                href={product.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M..." />
                </svg>
                Buy on Amazon
              </a>

              <hr className="my-6 border-white/20" />

              <div>
                <h3 className="text-md font-semibold text-white">
                  Key Features
                </h3>
                <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-gray-300">
                  {product.characteristics?.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <motion.div
          className="mt-16 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
        >
          <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight sm:text-3xl">
            You Might Also Like
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.slug}
                whileHover={{ scale: 1.03 }}
                className="rounded-2xl bg-white/5 p-6 text-center shadow-md backdrop-blur-sm transition"
              >
                <Image
                  src={relatedProduct.imageUrl}
                  alt={relatedProduct.name}
                  width={100}
                  height={100}
                  className="mx-auto mb-4 h-24 w-24 object-contain"
                />
                <h3 className="text-base font-medium text-white">
                  {relatedProduct.name}
                </h3>
                <Link
                  href={`/products/${relatedProduct.slug}`}
                  className="mt-4 inline-block rounded-full border border-white px-4 py-1 text-sm transition hover:bg-white hover:text-black"
                >
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
