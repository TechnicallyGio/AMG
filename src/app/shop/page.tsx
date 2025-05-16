"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import products from "../products";

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.1 },
  },
};

const titleVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const searchFilterVariants = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const productVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  hover: { scale: 1.05 },
};

const emptyStateVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.3 } },
};

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Memoize filtered products to optimize filtering
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const nameMatch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const categoryMatch =
        selectedCategory === "All" || product.category === selectedCategory;
      return nameMatch && categoryMatch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1
        className="mb-8 text-center text-3xl font-bold sm:text-4xl"
        variants={titleVariants}
      >
        Our Products
      </motion.h1>

      <motion.div
        className="mb-8 flex w-full max-w-md gap-4"
        variants={searchFilterVariants}
      >
        <input
          type="text"
          placeholder="Search products..."
          className="input bg-base-300 text-base-content w-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          className="select bg-base-300 text-base-content w-32"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
              style={{ backgroundColor: "#1f2937", color: "#fff" }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </motion.div>

      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-2 gap-6 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-base-200 flex flex-col items-center justify-between rounded-xl p-6 text-center shadow-md transition-transform duration-200"
              variants={productVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              whileHover="hover"
            >
              <div className="mb-4 flex flex-col items-center">
                <div className="relative h-24 w-24 overflow-hidden shadow-inner">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 className="text-base-content mt-3 line-clamp-2 text-xl font-semibold">
                  {product.name}
                </h3>
              </div>
              <div className="flex flex-col space-y-2">
                <Link
                  href={`/shop/${product.slug}`}
                  className="btn btn-outline btn-sm"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <motion.p
          className="mt-8 text-center text-gray-400"
          variants={emptyStateVariants}
          initial="initial"
          animate="animate"
        >
          No products found matching your criteria.
        </motion.p>
      )}
    </motion.div>
  );
}
