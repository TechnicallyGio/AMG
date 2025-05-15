"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import products from "../products";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories from the products array
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    return nameMatch && categoryMatch;
  });

  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48">
      <h1 className="mb-8 text-center text-3xl font-bold sm:text-4xl">
        Our Products
      </h1>

      {/* Search and Filter Controls */}
      <div className="mb-8 flex w-full max-w-md gap-4">
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
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="flex h-80 flex-col justify-between rounded-2xl bg-white/5 p-6 text-center shadow-lg backdrop-blur transition hover:scale-105"
          >
            <div className="flex flex-col items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={96}
                height={96}
                className="mx-auto mb-4 h-24 w-24 object-contain"
              />
              <h3 className="line-clamp-2 text-lg font-semibold">
                {product.name}
              </h3>
            </div>
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="btn btn-outline mt-3 self-center"
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-8 text-center text-gray-400">
          No products found matching your criteria.
        </p>
      )}
    </div>
  );
}
