"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-[65px] w-auto object-contain transition"
          />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-white/80 text-sm tracking-wide">

          <Link href="/vision" className="hover:text-white transition">
            חזון
          </Link>

          <Link href="/about" className="hover:text-white transition">
            אודות
          </Link>

          <Link href="/projects" className="hover:text-white transition">
            פרויקטים
          </Link>

          <Link href="/services" className="hover:text-white transition">
            שירותים
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            יצירת קשר
          </Link>

        </nav>

        {/* MOBILE CTA (אופציונלי) */}
        <Link
          href="/contact"
          className="md:hidden bg-white text-black px-4 py-2 rounded-full text-sm"
        >
          יצירת קשר
        </Link>

      </div>

    </header>
  );
}