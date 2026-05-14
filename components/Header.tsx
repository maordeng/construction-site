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

  const handleScrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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

          {/* LOGO */}
          <Link href="/" className="text-white font-light tracking-wide">
            ⌂
          </Link>

          {/* DESKTOP NAV */}
          <nav
            className="hidden md:flex gap-8 text-sm"
            style={{ color: textColor }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScrollTo(item.href)}
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

      {/* MOBILE MENU OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleScrollTo(item.href)}
              className="text-white text-2xl font-light tracking-wide"
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-white/60"
          >
            סגור
          </button>
        </div>
      )}
    </>
  );
}