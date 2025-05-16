"use client";

import { motion } from "framer-motion";

export default function FAQs() {
  const faqs = [
    {
      question: "What is Sea Moss?",
      answer:
        "Sea Moss is a natural superfood harvested from the ocean, rich in minerals and nutrients that support overall health.",
    },
    {
      question: "How do I use the Sea Moss Gel?",
      answer:
        "Sea Moss Gel can be added to smoothies, teas, or used as a natural thickener in recipes. Use about 1-2 tablespoons daily for best results.",
    },
    {
      question: "Are your products organic?",
      answer:
        "We source the highest quality natural ingredients and strive to offer organic options whenever possible.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary by location but typically take between 3-7 business days within the US.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer returns within 30 days of purchase for unopened products. Please see our Returns page for full details.",
    },
  ];

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
          Frequently Asked Questions
        </h1>
        <p className="mb-12 text-lg leading-relaxed text-gray-300">
          Have questions? We’ve got answers. If you don’t see your question
          here, feel free to contact us.
        </p>
      </section>

      <section className="w-full max-w-3xl space-y-8">
        {faqs.map(({ question, answer }) => (
          <article
            key={question}
            className="rounded-2xl bg-white/5 p-6 shadow-md backdrop-blur-sm"
          >
            <h2 className="mb-3 text-xl font-semibold">{question}</h2>
            <p className="text-gray-300">{answer}</p>
          </article>
        ))}
      </section>
    </motion.main>
  );
}
