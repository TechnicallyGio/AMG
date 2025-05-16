"use client";

import { useState, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import products, { type Product } from "../../products";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";

// Filter with explicit typing
const juiceProducts: Product[] = products.filter(
  (p): p is Product => p.category === "beverage",
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function JuiceProductInfoPage() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const product: Product | undefined = juiceProducts[currentIndex];
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [imageContainerHeight, setImageContainerHeight] = useState(0);

  useLayoutEffect(() => {
    if (imageContainerRef.current) {
      setImageContainerHeight(imageContainerRef.current.offsetHeight);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-gray-900">
        <p className="text-xl text-gray-700">No juice products found.</p>
      </div>
    );
  }

  const handlePrev = (): void =>
    setCurrentIndex((i) => (i === 0 ? juiceProducts.length - 1 : i - 1));
  const handleNext = (): void =>
    setCurrentIndex((i) => (i === juiceProducts.length - 1 ? 0 : i + 1));

  return (
    <div className="min-h-screen justify-between text-gray-900">
      <motion.section
        className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center justify-center gap-16 px-6 py-16 md:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={product.id}
      >
        {/* Left side: promo images slider */}
        <div
          ref={imageContainerRef}
          className="relative w-full max-w-md md:max-w-lg"
          style={{ minHeight: imageContainerHeight }}
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="bg-white"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel controls */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-3">
            <button
              onClick={handlePrev}
              aria-label="Previous product"
              className="bg-base-200 rounded-full p-2 text-white shadow-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            >
              <Icon icon="mdi:chevron-left" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next product"
              className="bg-base-200 rounded-full p-2 text-white shadow-md hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
            >
              <Icon icon="mdi:chevron-right" />
            </button>
          </div>
        </div>

        {/* Right side: details */}
        <motion.div
          className="sticky top-20 max-w-xl min-w-1/2 space-y-8"
          variants={itemVariants}
          style={{ minHeight: imageContainerHeight }} // <-- dynamically matching left side height
        >
          <h2 className="tracking-tigh text-5xl font-extrabold">
            {product.name}
          </h2>
          <p className="text-xl leading-relaxed text-gray-700">
            {product.description}
          </p>

          {product.characteristics && (
            <ul className="list-inside list-disc space-y-3 text-lg text-gray-600">
              {product.characteristics.map((char, idx) => (
                <li key={idx}>{char}</li>
              ))}
            </ul>
          )}

          <button
            disabled={product.price === 0}
            className={`w-full rounded-xl py-5 text-xl font-semibold transition focus:ring-2 focus:ring-black focus:outline-none ${
              product.price === 0
                ? "cursor-not-allowed bg-gray-300 text-gray-600"
                : "bg-black text-white hover:bg-gray-900"
            } `}
          >
            {product.price === 0
              ? "Coming Soon"
              : `Buy Now - $${product.price.toFixed(2)}`}
          </button>
        </motion.div>
      </motion.section>
    </div>
  );
}
