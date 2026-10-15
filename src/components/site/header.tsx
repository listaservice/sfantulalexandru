"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Acasă" },
  { href: "/cine-suntem", label: "Cine suntem" },
  { href: "/viata-spirituala", label: "Viață spirituală" },
  { href: "/proiecte", label: "Proiecte" },
  { href: "/evenimente", label: "Evenimente" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-ink/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/brand/logo.png"
              alt="Sigla Asociației Sfântul Ierarh Alexandru și Sfânta Cuvioasă Parascheva"
              width={44}
              height={44}
              className="rounded-full"
              priority
            />
            <span className="font-heading font-semibold text-ink text-[15px] leading-tight">
              Asociația Sf. Ierarh Alexandru
              <span className="block font-sans font-normal text-[11px] text-ink/60">
                și Sfânta Cuvioasă Parascheva
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink/80 hover:text-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/doneaza"
              className="hidden sm:inline-flex items-center bg-ink text-paper px-5 py-2.5 rounded-sm text-sm font-semibold hover:bg-gold transition-colors"
            >
              Donează
            </Link>

            {/* Mobile menu button */}
            <button
              className="xl:hidden p-2 text-ink"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Meniu"
            >
              {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="xl:hidden overflow-hidden border-t border-ink/10 bg-white"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-3 text-sm font-medium text-ink hover:text-gold transition-colors border-b border-ink/5"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/doneaza"
                className="mt-2 inline-flex items-center justify-center bg-ink text-paper px-5 py-2.5 rounded-sm text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                Donează
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
