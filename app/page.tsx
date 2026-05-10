export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* WHATSAPP FLOAT BUTTON (קבוע) */}
      <a
        href="https://wa.me/972500000000"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        💬
      </a>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            alt="Construction"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* TOP BAR (LOGO במקום וואטסאפ) */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-6">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">

          <div className="max-w-4xl">

            {/* BRAND TEXT */}
            <div className="mb-6 flex items-center gap-3 text-white/60 text-sm tracking-[0.25em] uppercase">
              <span className="w-2 h-2 bg-white/60 rounded-full"></span>
              Maor David Engineering
            </div>

            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
              ניהול ופיקוח בנייה
              <br />
              ברמת דיוק של הנדסה
            </h1>

            {/* SUBTITLE */}
            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
              ליווי פרויקטים פרטיים ומוסדיים משלב התכנון ועד מסירה,
              תוך שליטה מלאה, תיאום בין כלל הגורמים וסטנדרט ביצוע בלתי מתפשר.
            </p>

            {/* ICONS */}
            <div className="mt-10 flex flex-wrap gap-6 text-white/70 text-sm">

              <div className="flex items-center gap-2">📐 תכנון ובקרה</div>
              <div className="flex items-center gap-2">🏗️ פיקוח שטח</div>
              <div className="flex items-center gap-2">📊 ניהול פרויקטים</div>

            </div>

            {/* BUTTONS */}
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

        {/* SCROLL HINT */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-sm">
          ↓ גלול להמשך
        </div>

      </section>

      {/* TRUST SECTION */}
      <section className="bg-white text-black py-24 px-6 md:px-10">

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">

          <div>
            <div className="text-3xl font-medium mb-4">📏 דיוק</div>
            <p className="text-black/60 leading-relaxed">
              ירידה לפרטים הקטנים ביותר לאורך כל שלבי הביצוע והפיקוח.
            </p>
          </div>

          <div>
            <div className="text-3xl font-medium mb-4">🔍 שקיפות</div>
            <p className="text-black/60 leading-relaxed">
              עבודה מסודרת וברורה מול הלקוח עם שליטה מלאה בפרויקט.
            </p>
          </div>

          <div>
            <div className="text-3xl font-medium mb-4">🏗️ מקצועיות</div>
            <p className="text-black/60 leading-relaxed">
              ניסיון שטח לצד ניהול הנדסי מוקפד ואחראי.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}