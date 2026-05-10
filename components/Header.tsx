import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="font-bold text-xl tracking-tight">
          מאור דוד הנדסה
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm text-gray-700">
          <Link href="/">בית</Link>
          <Link href="/about">אודות</Link>
          <Link href="/services">שירותים</Link>
          <Link href="/projects">פרויקטים</Link>
          <Link href="/vision">חזון</Link>
          <Link href="/contact">יצירת קשר</Link>
        </nav>

        {/* CTA Button */}
        <a
          href="https://wa.me/972549762390"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
        >
          וואטסאפ
        </a>

      </div>
    </header>
  );
}