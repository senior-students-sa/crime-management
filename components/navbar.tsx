"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import darkModeLogo from "@/app/assets/images/dark-mode-logo.png";

const navLinks = [
  { label: "Modules", href: "#" },
  { label: "Intelligence", href: "#" },
  { label: "Operations", href: "#" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0a0a0a]/90 backdrop-blur-md transition-colors duration-300">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 flex-shrink-0">
            <Image
              src={darkModeLogo}
              alt="InvestiAI"
              className="h-6 sm:h-7 w-auto dark:brightness-100 brightness-0"
              priority
            />
            <span className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              InvestiAI
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-600 dark:text-white/90 hover:text-[#dc2626] transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Theme toggle, Access System, Hamburger (hamburger last) */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
<Link
            href="/auth"
            className="rounded-md bg-[#dc2626] px-3 py-2 sm:px-4 text-xs sm:text-sm font-semibold text-white uppercase tracking-wide hover:bg-[#b91c1c] transition-all duration-200 glow-crimson whitespace-nowrap"
          >
            Access System
          </Link>
            {/* Hamburger menu button - last on the right (visible on mobile/tablet only) */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/20 bg-transparent hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <svg className="h-5 w-5 text-slate-700 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile menu - covers entire viewport */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] flex flex-col">
          {/* Top bar with close button */}
          <div className="flex items-center justify-between px-4 sm:px-6 h-14 sm:h-16 border-b border-slate-200 dark:border-white/10 flex-shrink-0">
            <span className="text-lg font-semibold text-slate-900 dark:text-white">Menu</span>
            {/* Close button */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav links - centered vertically */}
          <nav className="flex-1 flex flex-col justify-center items-center px-6 py-8 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block w-full max-w-xs py-4 px-6 rounded-xl text-xl font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-[#dc2626] transition-colors uppercase tracking-wide text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
