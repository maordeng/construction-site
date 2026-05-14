"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { theme } from "@/styles/theme";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isActive = (path: string) => pathname === path;

  // 🧠 scroll
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🚨 FIX 1: מצב ברור (לא intensity)
  const isHero = isHome && scrollY < 60;

  // 🎯 FIX 2: intensity רק לאנימציה
  const intensity = Math.min(scrollY / 250, 1);

  // 🎨 HEADER BACKGROUND
  const backgroundColor = isHero
    ? `rgba(237, 237, 231, 0.15)`
    : `rgba(255, 255, 255, ${0.75 + intensity * 0.2})`;

  // 🎨 BORDER
  const borderColor = `rgba(0,0,0,${0.05 + intensity * 0.12})`;

  // 🎨 TEXT COLOR (יציב ולא מתנדנד)
  const textColor = isHero ? "#ffffff" : "#1C1C1C";

  // 🎨 SHADOW
  const shadow =
    intensity > 0.6 ? "0 10px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl"
      style={{
        backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: shadow,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-7 md:py-8 relative">

        {/* HOME BUTTON */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300"
            style={{
              borderColor: isHero
                ? "rgba(255,255,255,0.3)"
                : "rgba(0,0,0,0.2)",
            }}
          >
            <span
              className="text-lg group-hover:scale-110 transition"
              style={{ color: textColor }}
            >
              ⌂
            </span>
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav
          className="hidden md:flex gap-8 text-sm tracking-wide transition-colors"
          style={{ color: textColor }}
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
              style={{ color: textColor }}
            >
              {item.label}

              <span
                className="absolute left-0 -bottom-1 h-[1px] bg-current transition-all duration-300"
                style={{
                  width: isActive(item.href) ? "100%" : "0%",
                }}
              />
            </Link>
          ))}
        </nav>

        {/* CENTER LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <Link href="/">
            <img
              src={
                isHero
                  ? "/images/logo.png"
                  : "/images/logo.png"
              }
              alt="Logo"
              className="h-[90px] w-auto object-contain transition-all duration-300"
            />
          </Link>
        </div>

      </div>
    </header>
  );
}