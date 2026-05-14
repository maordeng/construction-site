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

      {/* SMOOTH TRANSITION */}
      <div className="h-32 bg-gradient-to-b from-black/0 to-black"></div>

      {/* CTA SECTION */}
      <section className="bg-black py-40 px-6 text-center">

        <h2 className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight max-w-3xl mx-auto">
          אנחנו הופכים תוכניות למציאות — בלי פשרות, בלי רעש, בלי טעויות.
        </h2>

        <p className="mt-8 text-white/60 max-w-xl mx-auto">
          כל פרויקט מנוהל בקפדנות הנדסית מלאה עם ליווי אישי משלב התכנון ועד המסירה.
        </p>
      </section>

      {/* SERVICES SECTION (חדש) */}
      <section
        id="services"
        className="bg-black border-t border-white/10 py-40 px-6"
      >
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-20">
            <p className="text-white/50 tracking-[0.3em] uppercase text-xs">
              Services
            </p>

            <h2 className="mt-4 text-4xl md:text-6xl font-light tracking-tight">
              ניהול ופיקוח בנייה ברמה הנדסית גבוהה
            </h2>

            <p className="mt-6 text-white/60 max-w-2xl mx-auto">
              פתרונות ניהול ופיקוח לפרויקטים פרטיים ומוסדיים — משלב התכנון ועד המסירה.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition">
              <h3 className="text-xl font-medium mb-3">ניהול פרויקטים</h3>
              <p className="text-white/60 leading-relaxed">
                ליווי מלא של הפרויקט, שליטה בלוחות זמנים ותקציב ותיאום בין כל הגורמים.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition">
              <h3 className="text-xl font-medium mb-3">פיקוח בנייה פרטית</h3>
              <p className="text-white/60 leading-relaxed">
                פיקוח צמוד לבתים פרטיים תוך שמירה על איכות ביצוע וסטנדרט גבוה.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition">
              <h3 className="text-xl font-medium mb-3">פיקוח מוסדי</h3>
              <p className="text-white/60 leading-relaxed">
                בקרה הנדסית מלאה על פרויקטים ציבוריים ומוסדיים.
              </p>
            </div>

            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition">
              <h3 className="text-xl font-medium mb-3">ליווי יזמים וקבלנים</h3>
              <p className="text-white/60 leading-relaxed">
                שיפור ביצועים, תיאום וניהול תהליכי עבודה בשטח.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="bg-black border-t border-white/10 py-32 px-6 text-center"
      >
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-light tracking-tight">
            בואו נדבר על הפרויקט שלכם
          </h2>

          <p className="mt-6 text-white/60 text-lg leading-relaxed">
            נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות.
          </p>

          <a
            href="https://wa.me/972549762390"
            target="_blank"
            className="inline-block mt-10 bg-[#25D366] text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            וואטסאפ ישיר
          </a>

        </div>
      </section>

      {/* FINAL SPACING */}
      <div className="h-24 bg-black"></div>

    </main>
  );
}