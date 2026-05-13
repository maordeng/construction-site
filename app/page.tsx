import Header from "@/components/Header";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}
      <Header />

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/972549762390"
        target="_blank"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14
          flex items-center justify-center
          bg-[#25D366]
          text-white
          rounded-full
          shadow-lg
          hover:shadow-2xl
          hover:scale-110
          transition-all duration-300
        "
      >
        <MessageCircle size={22} />
      </a>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Construction"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

          <div className="max-w-4xl">

            <div className="mb-6 flex items-center gap-3 text-white/60 text-sm tracking-[0.25em] uppercase">
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              Maor David Engineering
            </div>

            <h1 className="text-5xl md:text-7xl font-light leading-[1.05]">
              ניהול ופיקוח בנייה
              <br />
              ברמת דיוק של הנדסה
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl">
              ליווי פרויקטים פרטיים ומוסדיים משלב התכנון ועד מסירה,
              תוך שליטה מלאה וסטנדרט ביצוע גבוה.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full hover:bg-white/90 transition"
              >
                יצירת קשר
              </a>

              <a
                href="/projects"
                className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
              >
                פרויקטים
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white text-black py-24 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

          <div>
            <div className="text-3xl font-medium mb-4">📏 דיוק</div>
            <p className="text-black/60">ירידה לפרטים הקטנים ביותר.</p>
          </div>

          <div>
            <div className="text-3xl font-medium mb-4">🔍 שקיפות</div>
            <p className="text-black/60">שליטה מלאה מול הלקוח.</p>
          </div>

          <div>
            <div className="text-3xl font-medium mb-4">🏗️ מקצועיות</div>
            <p className="text-black/60">ניסיון שטח וניהול הנדסי.</p>
          </div>

        </div>

      </section>

    </main>
  );
}