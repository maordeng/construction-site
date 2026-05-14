import Header from "@/components/Header";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white antialiased">

      {/* HEADER */}
      <Header />

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/972549762390"
        target="_blank"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          flex items-center justify-center
          bg-[#25D366]
          rounded-full
          shadow-lg
          hover:shadow-2xl hover:scale-110
          transition-all duration-300
        "
      >
        <MessageCircle size={22} />
      </a>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Construction"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

          <div className="max-w-3xl">

            {/* SMALL LABEL */}
            <div className="mb-8 flex items-center gap-3 text-white/60 text-xs tracking-[0.35em] uppercase">
              <span className="w-2 h-2 bg-white/50 rounded-full"></span>
              Maor David Engineering
            </div>

            {/* HEADLINE */}
            <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.05]">
              ניהול ופיקוח בנייה
              <br />
              ברמת דיוק הנדסית
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-10 text-lg md:text-xl text-white/70 leading-[1.8] max-w-2xl">
              ליווי פרויקטים פרטיים ומוסדיים משלב התכנון ועד מסירה,
              עם שליטה מלאה, שקיפות מלאה וסטנדרט ביצוע גבוה.
            </p>

            {/* CTA */}
            <div className="mt-14 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="
                  bg-white text-black
                  px-8 py-4 rounded-full
                  font-medium
                  hover:bg-white/90
                  transition-all duration-300
                "
              >
                יצירת קשר
              </a>

              <a
                href="/projects"
                className="
                  border border-white/20
                  px-8 py-4 rounded-full
                  text-white/90
                  hover:bg-white hover:text-black
                  transition-all duration-300
                "
              >
                פרויקטים
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="bg-white text-black py-32 px-6 md:px-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">

          <div className="space-y-3">
            <div className="text-2xl font-medium tracking-tight">דיוק</div>
            <p className="text-black/60 leading-relaxed">
              ירידה לפרטים הקטנים ביותר בכל שלב בפרויקט.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-2xl font-medium tracking-tight">שקיפות</div>
            <p className="text-black/60 leading-relaxed">
              שליטה מלאה בתהליך מול הלקוח והצוותים בשטח.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-2xl font-medium tracking-tight">מקצועיות</div>
            <p className="text-black/60 leading-relaxed">
              ניסיון הנדסי וניהול פרויקטים ברמה גבוהה.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}