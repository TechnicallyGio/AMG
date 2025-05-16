"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { comicStrip } from "../../fonts/fonts"; // or relative path if no alias

interface NavigationProps {
  links: Array<{
    name: string;
    url: string;
    children?: Array<{
      name: string;
      url: string;
    }>;
  }>;
}

export default function Navigation({ links }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      setScrolled(true);
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, top: -50, left: "5%", right: "5%", width: "90%" }}
      animate={{
        opacity: 1,
        y: 0,
        top: scrolled ? 0 : 20,
        left: scrolled ? 0 : "5%",
        right: scrolled ? 0 : "5%",
        width: scrolled ? "100%" : "90%",
        borderRadius: scrolled ? "0rem" : "1rem",

        boxShadow: scrolled
          ? "0 4px 20px rgba(0, 0, 0, 0.2)"
          : "0 0px 0px rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 0.5, // Smooth transition for high refresh displays
        ease: [0.4, 0, 0.2, 1], // Equivalent to CSS ease-in-out
      }}
      className={`fixed z-50 flex h-16 items-center justify-between px-5 ${
        scrolled
          ? "bg-base-300 top-0 w-full rounded-none shadow-2xl backdrop-blur-3xl"
          : "bg-base-300 top-5 right-5 left-5 mx-auto w-auto rounded-2xl shadow-none md:w-4/5"
      }`}
    >
      {/* Left Section - Links */}
      <div className="flex flex-1 items-center">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <button tabIndex={0} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box bg-base-100 mt-3 w-52 p-2 shadow"
          >
            {links.map((link) =>
              link.children ? (
                <li key={link.name}>
                  <details>
                    <summary>{link.name}</summary>
                    <ul className="p-2">
                      {link.children.map((child) => (
                        <li key={child.name}>
                          <Link href={child.url}>{child.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={link.name}>
                  <Link href={link.url}>{link.name}</Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Desktop Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="menu menu-horizontal hidden gap-4 px-1 text-white uppercase lg:flex"
        >
          {links.map((link) =>
            link.children ? (
              <li key={link.name}>
                <details>
                  <summary>{link.name}</summary>
                  <ul className="bg-base-100 w-48 p-2">
                    {link.children.map((child) => (
                      <li key={child.name}>
                        <Link href={child.url}>{child.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ) : (
              <li key={link.name}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ),
          )}
        </motion.ul>
      </div>

      {/* Center Section - Brand */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className={`flex-none ${comicStrip.variable}`}
        style={{ fontFamily: "var(--font-comicstrip)" }}
      >
        <Link href="/" className="text-xl font-bold text-white md:text-3xl">
          AMIRACLE&apos;CO.
        </Link>
      </motion.div>

      {/* Right Section - Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-1 justify-end"
      >
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn btn-outline px-5 py-2 text-base text-white uppercase hover:text-purple-400"
          >
            Visit Store
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
