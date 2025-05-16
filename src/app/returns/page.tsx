"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Returns() {
  return (
    <>
      <header className="relative flex min-h-screen flex-col items-center justify-center px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48">
        <h1 className="mb-6 max-w-3xl text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Returns Policy
        </h1>
        <p className="mb-12 max-w-2xl text-center text-lg text-gray-300">
          Placeholder text describing the returns policy summary.
        </p>

        <Link
          href="/contact"
          className="btn-outline btn-lg btn"
          aria-label="Contact Support"
        >
          Contact Support
        </Link>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="bg-black px-6 py-16 text-white md:px-20 lg:px-32 xl:px-48"
      >
        <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed">
          <section>
            <h2 className="mb-3 text-2xl font-semibold">Return Window</h2>
            <p>Placeholder text about the return window.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">How to Return</h2>
            <p>Placeholder text explaining how to return items.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Refund Timeline</h2>
            <p>Placeholder text about refund timing.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Exchanges</h2>
            <p>Placeholder text about exchanges policy.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold">Need Help?</h2>
            <p>Placeholder text with contact info or help instructions.</p>
          </section>
        </div>
      </motion.section>
    </>
  );
}
