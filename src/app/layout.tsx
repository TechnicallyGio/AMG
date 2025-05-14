import "~/styles/globals.css";

import { Geist } from "next/font/google";
import type { Metadata } from "next";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

// Font configuration
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Metadata
export const metadata: Metadata = {
  title: "AMILAGROS | Sea Moss Wellness",
  description: "Premium Sea Moss Gels, Juices & Supplements",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

// Layout component
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    {
      name: "Products",
      url: "/products",
      children: [
        { name: "Sea Moss Gel", url: "/products/gel" },
        { name: "Juices", url: "/products/juice" },
      ],
    },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <html lang="en" className={geist.variable}>
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 via-slate-500 to-black text-white">
        {/* Sticky Navigation */}
        <Navigation links={headerLinks} />

        {/* Main content area */}
        <main className="flex-grow pt-24">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
