export default function Home() {
  return (
    <main className="bg-white text-[#111111]">

      {/* HERO */}
      <section className="min-h-screen flex items-center border-b border-black/10">

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">

          <div className="max-w-4xl">

            {/* TOP LABEL */}
            <div className="mb-8 text-sm tracking-[0.25em] uppercase text-black/40">
              MAOR DAVID ENGINEERING
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
              ניהול ופיקוח בנייה
              <br />
              בגישה מדויקת,
              <br />
              מקצועית ואחראית
            </h1>

            {/* SUBTEXT */}
            <p className="mt-10 text-xl text-black/60 leading-relaxed max-w-2xl">
              ליווי מקצועי לפרויקטים פרטיים ומוסדיים,
              עם שליטה מלאה על תהליך הבנייה,
              הקפדה על איכות הביצוע וניהול נכון של כל שלב בדרך.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition"
              >
                יצירת קשר
              </a>

              <a
                href="/projects"
                className="border border-black/20 px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
              >
                פרויקטים
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">

          <div>
            <div className="text-4xl font-semibold mb-4">
              דיוק
            </div>

            <p className="text-black/60 leading-relaxed">
              ירידה לפרטים הקטנים ביותר לאורך כל שלבי הביצוע והפיקוח.
            </p>
          </div>

          <div>
            <div className="text-4xl font-semibold mb-4">
              שקיפות
            </div>

            <p className="text-black/60 leading-relaxed">
              עבודה מסודרת וברורה מול הלקוח, עם בקרה מלאה על כל תהליך.
            </p>
          </div>

          <div>
            <div className="text-4xl font-semibold mb-4">
              מקצועיות
            </div>

            <p className="text-black/60 leading-relaxed">
              ניסיון מעשי בשטח לצד גישה ניהולית מדויקת ואחראית.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}