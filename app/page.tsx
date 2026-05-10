export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Maor David Engineering"
            className="w-full h-full object-cover scale-110"
          />

          {/* OVERLAY (cinematic dark layer) */}
          <div className="absolute inset-0 bg-black/60" />

          {/* subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

          <div className="max-w-4xl">

            {/* LABEL */}
            <div className="mb-6 text-sm tracking-[0.3em] uppercase text-white/60">
              MAOR DAVID ENGINEERING
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              ניהול ופיקוח בנייה
              <br />
              מתוך דיוק,
              <br />
              אחריות ושליטה מלאה
            </h1>

            {/* SUBTITLE */}
            <p className="mt-8 text-xl text-white/75 leading-relaxed max-w-2xl">
              ליווי מקצועי לפרויקטים פרטיים ומוסדיים,
              עם הקפדה בלתי מתפשרת על איכות הביצוע,
              תיאום מלא בין כלל הגורמים וניהול מדויק של כל שלב בפרויקט.
            </p>

            {/* BUTTONS */}
            <div className="mt-10 flex flex-wrap gap-4">

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

        {/* subtle scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm">
          גלול למטה
        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white text-black py-24 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

          <div>
            <div className="text-4xl font-semibold mb-5">
              דיוק
            </div>
            <p className="text-black/60 leading-relaxed">
              ירידה לפרטים הקטנים ביותר לאורך כל שלבי הביצוע והפיקוח.
            </p>
          </div>

          <div>
            <div className="text-4xl font-semibold mb-5">
              שקיפות
            </div>
            <p className="text-black/60 leading-relaxed">
              עבודה מסודרת וברורה מול הלקוח, עם שליטה מלאה על הפרויקט.
            </p>
          </div>

          <div>
            <div className="text-4xl font-semibold mb-5">
              מקצועיות
            </div>
            <p className="text-black/60 leading-relaxed">
              ניסיון מעשי בשטח לצד ניהול הנדסי אחראי ומדויק.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}