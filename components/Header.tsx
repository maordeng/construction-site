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

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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

          {/* HOME ICON (FIXED) */}
          <button onClick={scrollTop} className="text-2xl">
            <span
              style={{
                color: isHero ? "#ffffff" : textColor,
              }}
              className="transition hover:scale-110"
            >
              ⌂
            </span>
          </button>

          {/* LOGO */}
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
            className="md:hidden text-2xl font-light transition"
            style={{ color: textColor }}
            onClick={() => setMenuOpen(true)}
          >
            ≡
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR MENU */}
      <div
        className={`
          fixed top-5 right-5 z-50
          w-56 rounded-3xl
          border border-white/10
          bg-black/80 backdrop-blur-2xl
          transition-all duration-300
          overflow-hidden
          ${menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"}
        `}
      >
        <div className="flex flex-col py-3">

          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="
                text-right
                px-5 py-3
                text-[15px]
                font-light
                tracking-[0.08em]
                text-white/75
                hover:text-white
                hover:bg-white/[0.04]
                transition-all duration-200
              "
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
          className="fixed inset-0 z-40"
        />
      )}
    </>
  );
}