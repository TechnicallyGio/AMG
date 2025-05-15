"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type SocialLink = {
  icon: string;
  href: string;
  label?: string;
};

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="bg-black px-6 py-10 text-white shadow-2xl backdrop-blur-3xl"
    >
      {/* Top Row: 4 Columns */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.1, delayChildren: 0.2 },
          },
        }}
        className="mb-8 flex flex-wrap justify-between gap-y-8"
      >
        <FooterBrandColumn
          title="AMILAGROS BRAND"
          description={`AMILAGROS'CO is a brand that embodies the spirit of resilience and strength. Our products are designed to empower individuals to embrace their true selves and live life to the fullest.`}
          socialLinks={[
            { icon: "mdi:instagram", href: "https://instagram.com/amilagros" },
            { icon: "mdi:facebook", href: "https://facebook.com/amilagros" },
          ]}
        />

        <FooterColumn
          title="Shop"
          links={[
            "Sea Moss Gel",
            "Sea Moss Capsules",
            "Sea Moss Juice",
            "Bundles",
          ]}
        />

        <FooterColumn
          title="Support"
          links={["Contact", "FAQs", "Shipping Info", "Returns"]}
        />

        <FooterColumn title="Company" links={["About Us", "Our Story"]} />
      </motion.div>

      {/* Bottom Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="flex flex-col items-center justify-between border-t border-gray-700 pt-6 text-sm md:flex-row"
      >
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} AMILAGROS&apos;CO. All rights
          reserved.
        </div>
        <div className="flex space-x-6">
          <FooterLink href="/terms">Terms of Use</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/refunds">Refunds</FooterLink>
        </div>
      </motion.div>
    </motion.footer>
  );
}

// Reusable Components
function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="min-w-[150px]"
    >
      <h4 className="mb-4 text-lg font-semibold">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map((text, idx) => (
          <li key={idx}>
            <Link href="/" className="hover:text-purple-400">
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function FooterBrandColumn({
  title,
  description,
  socialLinks,
}: {
  title: string;
  description: string;
  socialLinks: SocialLink[];
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
      }}
      className="max-w-xs min-w-[200px]"
    >
      <h4 className="mb-4 text-lg font-semibold">{title}</h4>
      <p className="mb-4 text-sm leading-relaxed text-gray-300">
        {description}
      </p>

      <ul className="flex space-x-4 text-xl">
        {socialLinks.map(({ icon, href, label }, idx) => (
          <li key={idx}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label ?? icon}
              className="transition-colors hover:text-purple-400"
            >
              <Icon icon={icon} />
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="hover:text-purple-400">
      {children}
    </Link>
  );
}
