"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [hash, setHash] = useState("");

  const isActive = (href: string) => {
    if (!isHome) return pathname === href;
    return href === `/#${hash}`;
  };

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    const handleHash = () => {
      setHash(window.location.hash.replace("#", ""));
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHash);
    };
  }, []);

  const isHero = isHome && scrollY < 60;
  const intensity = Math.min(scrollY / 250, 1);

  // 🎨 BACKGROUND
  const backgroundColor = isHome
    ? `rgba(237, 237, 231, ${0.15 + intensity * 0.75})`
    : `rgba(18, 18, 18, 0.96)`;

  // 🎨 BORDER
  const borderColor = isHome
    ? `rgba(0,0,0,${0.05 + intensity * 0.12})`
    : "rgba(255,255,255,0.08)";

  // 🎨 TEXT
  const textColor = isHome
    ? isHero
      ? "#ffffff"
      : "#1C1C1C"
    : "#ffffff";

  // 🎨 SHADOW
  const shadow = isHome
    ? intensity > 0.6
      ? "0 10px 30px rgba(0,0,0,0.08)"
      : "0 0 0 rgba(0,0,0,0)"
    : "0 10px 40px rgba(0,0,0,0.35)";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor,
        borderBottom: `1px solid ${borderColor}`,
        boxShadow: shadow,
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-7 md:py-8 relative">

        {/* HOME */}
        <div className="flex items-center">
          <Link
            href="/"
            className="group flex items-center justify-center w-10 h-10 rounded-full border transition"
            style={{
              borderColor: isHero
                ? "rgba(255,255,255,0.3)"
                : "rgba(255,255,255,0.12)",
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
          className="hidden md:flex gap-8 text-sm tracking-wide"
          style={{ color: textColor }}
        >
          {[
            { href: "/#contact", label: "יצירת קשר" },
            { href: "/#services", label: "שירותים" },
            { href: "/#projects", label: "פרויקטים" },
            { href: "/#vision", label: "חזון" },
            { href: "/#about", label: "אודות" },
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

        {/* LOGO */}
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