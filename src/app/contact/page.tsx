"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col items-center justify-center px-6 py-20 text-white md:px-16 lg:px-32"
    >
      <section className="max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mb-12 text-lg leading-relaxed text-gray-300">
          Have questions or need assistance? Reach out to us and we’ll get back
          to you as soon as possible.
        </p>
      </section>

      <section className="w-full max-w-md">
        <form className="flex flex-col space-y-6 rounded-2xl bg-white/5 p-8 shadow-md backdrop-blur-sm">
          <label className="flex flex-col text-left text-gray-300">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="paceholder-gray-200 mt-2 rounded-md border border-gray-600 bg-transparent px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col text-left text-gray-300">
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="paceholder-gray-200 mt-2 rounded-md border border-gray-600 bg-transparent px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            />
          </label>

          <label className="flex flex-col text-left text-gray-300">
            Message
            <textarea
              name="message"
              rows={5}
              placeholder="Write your message here"
              required
              className="paceholder-gray-200 mt-2 resize-none rounded-md border border-gray-600 bg-transparent px-4 py-2 text-white focus:border-purple-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            className="btn btn-outline btn-lg mt-4 font-semibold text-white hover:text-purple-400"
          >
            Send Message
          </button>
        </form>
      </section>
    </motion.main>
  );
}
