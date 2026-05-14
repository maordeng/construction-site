"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path: string) => pathname === path;

  // 🧠 האם זה דף הבית
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isHome
          ? scrolled
            ? theme.bg.header.scrolled
            : theme.bg.header.normal
          : "bg-white/90 backdrop-blur-xl border-b border-black/10 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5 relative">

        {/* HOME BUTTON */}
        <div className="flex items-center">
          <Link
            href="/"
            className={`group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
              isHome
                ? scrolled
                  ? "border-black/20"
                  : "border-white/30"
                : "border-black/20"
            }`}
          >
            <span
              className={`text-lg group-hover:scale-110 transition ${
                isHome
                  ? scrolled
                    ? "text-[#1C1C1C]"
                    : "text-white"
                  : "text-[#1C1C1C]"
              }`}
            >
              ⌂
            </span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav
          className={`hidden md:flex gap-8 text-sm tracking-wide transition-colors ${
            isHome
              ? scrolled
                ? "text-[#1C1C1C]"
                : "text-white"
              : "text-[#1C1C1C]"
          }`}
        >
          {[
            { href: "/contact", label: "יצירת קשר" },
            { href: "/services", label: "שירותים" },
            { href: "/projects", label: "פרויקטים" },
            { href: "/vision", label: "חזון" },
            { href: "/about", label: "אודות" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition-all duration-300 ${
                isActive(item.href)
                  ? "font-medium opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {item.label}

              {/* ACTIVE UNDERLINE */}
              <span
                className={`absolute left-0 -bottom-1 h-[1px] bg-current transition-all duration-300 ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-[90px] w-auto object-contain transition-all duration-300"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}