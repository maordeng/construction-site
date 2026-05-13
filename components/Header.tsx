"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? theme.bg.header.scrolled : theme.bg.header.normal}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        {/* NAV */}
        <nav
          className={`hidden md:flex gap-8 text-sm tracking-wide order-2 transition-colors ${
            scrolled ? theme.headerText.scrolled : theme.headerText.normal
          }`}
        >
          <Link href="/contact" className={isActive("/contact") ? "font-semibold text-current" : "text-current/70 hover:text-current"}>
            יצירת קשר
          </Link>

          <Link href="/services" className={isActive("/services") ? "font-semibold text-current" : "text-current/70 hover:text-current"}>
            שירותים
          </Link>

          <Link href="/projects" className={isActive("/projects") ? "font-semibold text-current" : "text-current/70 hover:text-current"}>
            פרויקטים
          </Link>

          <Link href="/vision" className={isActive("/vision") ? "font-semibold text-current" : "text-current/70 hover:text-current"}>
            חזון
          </Link>

          <Link href="/about" className={isActive("/about") ? "font-semibold text-current" : "text-current/70 hover:text-current"}>
            אודות
          </Link>
        </nav>

        {/* HOME */}
        <div className="flex items-center gap-5 order-1">
          <Link
            href="/"
            className={`group flex items-center justify-center w-10 h-10 rounded-full border transition ${
              scrolled ? "border-black/20" : "border-white/20"
            }`}
          >
            <span className="text-lg group-hover:scale-110 transition">
              ⌂
            </span>
          </Link>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-[65px] w-auto object-contain"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}