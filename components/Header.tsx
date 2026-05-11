"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10 transition">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

        {/* NAV */}
        <nav className="hidden md:flex gap-8 text-sm tracking-wide order-2">

          {[
            { href: "/vision", label: "חזון" },
            { href: "/about", label: "אודות" },
            { href: "/projects", label: "פרויקטים" },
            { href: "/services", label: "שירותים" },
            { href: "/contact", label: "צור קשר" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative transition text-white/80 hover:text-white
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[1px] after:bg-white after:transition-all after:duration-300
                after:w-0 hover:after:w-full
                ${isActive(item.href) ? "text-white after:w-full" : ""}
              `}
            >
              {item.label}
            </Link>
          ))}

        </nav>

        {/* LOGO + HOME */}
        <div className="flex items-center gap-4 order-1">

          <Link
            href="/"
            className="text-white/80 hover:text-white transition text-xl"
          >
            🏠
          </Link>

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