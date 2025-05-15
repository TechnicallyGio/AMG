"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 flex h-16 items-center justify-between px-5 shadow-xl backdrop-blur-3xl transition-all duration-200 ease-in-out ${
        scrolled
          ? "bg-base-300 top-0 w-full rounded-none shadow-md"
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
        <ul className="menu menu-horizontal hidden gap-4 px-1 text-white uppercase lg:flex">
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
        </ul>
      </div>

      {/* Center Section - Brand */}
      <div className="flex-none">
        <Link href="/" className="text-xl font-bold text-white md:text-3xl">
          AMIRACLE&apos;CO.
        </Link>
      </div>

      {/* Right Section - Button (hidden on mobile) */}
      <div className="flex flex-1 justify-end">
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="btn btn-outline px-5 py-2 text-base text-white uppercase hover:text-purple-400"
          >
            Visit Store
          </Link>
        </div>
      </div>
    </nav>
  );
}
