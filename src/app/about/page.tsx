"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center px-6 py-20 text-white md:px-16 lg:px-32"
    >
      <section className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">
          About AMIRACLE&apos;CO
        </h1>
        <p className="mb-10 text-lg leading-relaxed text-gray-300">
          AMIRACLE&apos;CO is a brand that embodies the spirit of resilience and
          strength. Our products are designed to empower you to embrace your
          true self and live life to the fullest.
        </p>
        <p className="mb-12 text-lg leading-relaxed text-gray-300">
          Nourish your body with nature’s superfood — shop our carefully crafted
          juices, gels, and capsules made to support your health and lifestyle.
        </p>
      </section>

      <section className="w-full max-w-3xl">
        <h2 className="mb-6 text-center text-3xl font-semibold tracking-tight">
          Our Mission
        </h2>
        <p className="mb-12 text-center text-gray-300">
          At AMIRACLE&apos;CO, we believe strength comes from within. Our
          mission is to provide natural, high-quality products that fuel your
          body and inspire confidence. We are committed to supporting your
          journey towards wellness and vitality through nature’s best
          ingredients.
        </p>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-semibold tracking-tight">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {[
            {
              title: "Juices",
              desc: "Fresh, nutrient-packed juices designed to refresh and energize.",
              icon: (
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 17l4-4-4-4m5 8h4"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Gels",
              desc: "Easy-to-consume gels packed with natural superfoods for on-the-go energy.",
              icon: (
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ),
            },
            {
              title: "Capsules",
              desc: "Concentrated, potent capsules made with premium natural ingredients.",
              icon: (
                <svg
                  className="mx-auto mb-4 h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="7"
                    width="16"
                    height="10"
                    rx="2"
                    ry="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }) => (
            <div
              key={title}
              className="rounded-2xl bg-white/5 p-6 text-center shadow-md backdrop-blur-sm transition"
            >
              {icon}
              <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 w-full max-w-2xl text-center">
        <p className="mb-6 text-gray-300">
          Ready to embrace your strength and nourish your body naturally?
          Explore our range and experience the AMIRACLE&apos;CO difference.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-full bg-white px-8 py-3 font-semibold text-black transition hover:bg-gray-100"
        >
          Shop Now
        </Link>
      </section>
    </motion.main>
  );
}
