export default function Home() {
  return (
    <main className="bg-[#f5f5f3] text-[#1a1a1a] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center border-b border-black/5">

        {/* Background Accent */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="inline-block border border-black/10 px-4 py-2 text-sm tracking-[0.2em] uppercase text-black/60">
              Maor David Engineering
            </div>

            <h1 className="text-5xl md:text-7xl leading-tight font-semibold tracking-tight">
              ניהול ופיקוח
              <br />
              בנייה ברמה
              <br />
              אחרת
            </h1>

            <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-xl">
              ליווי מקצועי לפרויקטים פרטיים ומוסדיים,
              עם הקפדה בלתי מתפשרת על איכות,
              דיוק, תיאום ובקרה לאורך כל הדרך.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">

              <a
                href="/contact"
                className="bg-black text-white px-8 py-4 rounded-full hover:bg-black/80 transition"
              >
                לתיאום פגישה
              </a>

              <a
                href="/projects"
                className="border border-black/20 px-8 py-4 rounded-full hover:bg-black hover:text-white transition"
              >
                פרויקטים
              </a>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">

            <div className="aspect-[4/5] rounded-[32px] overflow-hidden bg-[#d9d6d1] shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                alt="Construction Project"
                className="w-full h-full object-cover"
              />

            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-black/5 max-w-xs">

              <div className="text-4xl font-semibold">
                100%
              </div>

              <p className="text-sm text-black/60 mt-2 leading-relaxed">
                מחויבות מלאה לאיכות הביצוע,
                תיאום מקצועי ופיקוח קפדני בשטח.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}