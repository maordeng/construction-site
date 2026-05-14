"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHero = isHome && scrollY < 60;
  const intensity = Math.min(scrollY / 250, 1);

  const backgroundColor = isHome
    ? `rgba(237, 237, 231, ${0.15 + intensity * 0.75})`
    : `rgba(18, 18, 18, 0.96)`;

  const borderColor = isHome
    ? `rgba(0,0,0,${0.05 + intensity * 0.12})`
    : "rgba(255,255,255,0.08)";

  const textColor = isHome
    ? isHero
      ? "#ffffff"
      : "#1C1C1C"
    : "#ffffff";

  const navItems = [
    { href: "#services", label: "שירותים" },
    { href: "#projects", label: "פרויקטים" },
    { href: "#vision", label: "חזון" },
    { href: "#about", label: "אודות" },
    { href: "#contact", label: "יצירת קשר" },
  ];

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor,
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-7 md:py-8">

          {/* HOME ICON */}
          <Link href="/" className="text-2xl">
            <span
              style={{
                color: isHero ? "#ffffff" : textColor,
              }}
              className="transition"
            >
              ⌂
            </span>
          </Link>

          {/* LOGO (הוחזר!) */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-[80px] md:h-[90px] w-auto object-contain"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex gap-8 text-sm"
            style={{ color: textColor }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="opacity-70 hover:opacity-100 transition"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-sm"
            style={{ color: textColor }}
            onClick={() => setMenuOpen(true)}
          >
            תפריט
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } bg-black/95 backdrop-blur-xl border-l border-white/10`}
      >
        <div className="p-6 flex flex-col gap-6">

          <button
            onClick={() => setMenuOpen(false)}
            className="text-white/60 text-sm mb-6 text-left"
          >
            סגור
          </button>

          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-white text-lg text-right hover:opacity-70 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* BACKDROP */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40"
        />
      )}
    </>
  );
}