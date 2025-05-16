import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

import { TRPCReactProvider } from "~/trpc/react";
import { HydrateClient } from "~/trpc/server";

export const metadata: Metadata = {
  title: "AMILAGROS | Sea Moss Wellness",
  description: "Premium Sea Moss Gels, Juices & Supplements",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerLinks = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Shop", url: "/shop" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <html lang="en" className={geist.variable}>
      <body className="flex min-h-screen flex-col bg-gradient-to-br from-purple-900 via-slate-500 to-black text-white">
        {/* Sticky Navigation */}
        <Navigation links={headerLinks} />

        {/* Main content area */}
        <TRPCReactProvider>
          <HydrateClient>
            <main className="flex-grow pt-24">{children}</main>
          </HydrateClient>
        </TRPCReactProvider>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
