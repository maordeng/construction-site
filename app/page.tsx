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

      {/* HERO (cinematic) */}
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

      {/* STATEMENT SECTION */}
      <section className="bg-black py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight">
            בנייה היא לא רק ביצוע —
            <br />
            היא שליטה במורכבות.
          </h2>

        </div>
      </section>

      {/* PROOF / VALUE */}
      <section className="bg-black/95 py-40 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 text-center">

          <div>
            <div className="text-4xl mb-4">📏</div>
            <h3 className="text-xl font-medium mb-2">דיוק</h3>
            <p className="text-white/60 leading-relaxed">
              כל פרט נבדק, כל שלב מנוהל.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-medium mb-2">שקיפות</h3>
            <p className="text-white/60 leading-relaxed">
              שליטה מלאה בזמן אמת.
            </p>
          </div>

          <div>
            <div className="text-4xl mb-4">🏗️</div>
            <h3 className="text-xl font-medium mb-2">ביצוע</h3>
            <p className="text-white/60 leading-relaxed">
              סטנדרט הנדסי גבוה ללא פשרות.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-black py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-light mb-16">
            שירותים
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-left">

            {[
              "ניהול פרויקטים",
              "פיקוח בנייה פרטית",
              "פיקוח מוסדי",
              "ליווי יזמים"
            ].map((item) => (
              <div key={item} className="border border-white/10 p-8 rounded-2xl hover:border-white/30 transition">
                <p className="text-lg">{item}</p>
                <p className="text-white/50 mt-3 leading-relaxed text-sm">
                  ליווי מקצועי משלב התכנון ועד מסירה.
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-black py-44 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          בוא נבנה את זה נכון.
        </h2>

        <a
          href="/contact"
          className="inline-block mt-12 bg-white text-black px-10 py-4 rounded-full hover:scale-105 transition"
        >
          יצירת קשר
        </a>
      </section>

    </main>
  );
}