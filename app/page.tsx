import Header from "@/components/Header";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white antialiased">

      <Header />

      {/* FLOAT CTA */}
      <a
        href="https://wa.me/972549762390"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={22} />
      </a>

      {/* HERO — לא נוגעים */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            className="w-full h-full object-cover scale-110"
            alt="hero"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <p className="text-white/60 tracking-[0.3em] uppercase text-xs mb-6">
            Maor David Engineering
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
            ניהול פרויקטים.
            <br />
            דיוק הנדסי מוחלט.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-[1.8]">
            אנחנו מלווים פרויקטים מהתכנון ועד המסירה — עם שליטה מלאה, שקיפות מלאה ותוצאה מדויקת.
          </p>

        </div>
      </section>

      {/* SMOOTH TRANSITION (חשוב) */}
      <div className="h-32 bg-gradient-to-b from-black/0 to-black"></div>

      {/* CTA ONLY SECTION (נקי במקום רעש) */}
      <section className="bg-black py-40 px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight max-w-3xl mx-auto">
          אנחנו הופכים תוכניות למציאות — בלי פשרות, בלי רעש, בלי טעויות.
        </h2>

        <a
          href="/contact"
          className="inline-block mt-14 bg-white text-black px-10 py-4 rounded-full hover:scale-105 transition"
        >
          יצירת קשר
        </a>

      </section>

      {/* FINAL SPACING BREATH */}
      <div className="h-24 bg-black"></div>

    </main>
  );
}