import { theme } from "@/styles/theme";

export default function ContactPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-28 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          יצירת קשר
        </h1>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} max-w-2xl mx-auto leading-relaxed`}>
          נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold tracking-tight">
            פרטי קשר
          </h2>

          <p className={`${theme.text.darkSecondary} leading-relaxed`}>
            טלפון: 054-9762390
          </p>

          <p className={`${theme.text.darkSecondary} leading-relaxed`}>
            וואטסאפ: לחץ על הכפתור למענה מהיר
          </p>

          <p className={`${theme.text.darkSecondary} leading-relaxed`}>
            מייל: office@maordeng.com
          </p>
        </div>

        {/* FORM */}
        <div className="border border-black/10 rounded-2xl p-8 space-y-5 shadow-sm">

          <h2 className="text-xl font-semibold tracking-tight">
            השאירו פרטים
          </h2>

          <input
            type="text"
            placeholder="שם מלא"
            className="w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <input
            type="tel"
            placeholder="טלפון"
            className="w-full border border-black/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <textarea
            placeholder="תיאור קצר של הפרויקט"
            className="w-full border border-black/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          <button className={theme.components.button.primary}>
            שליחת פנייה
          </button>

        </div>

      </section>

      {/* CTA WHATSAPP */}
      <section className={`${theme.bg.section.muted} px-6 py-28 text-center`}>

        <h2 className="text-3xl font-semibold tracking-tight">
          רוצים מענה מהיר?
        </h2>

        <a
          href="https://wa.me/972549762390"
          className={`inline-block mt-8 ${theme.components.button.whatsapp}`}
        >
          וואטסאפ עכשיו
        </a>

      </section>

    </main>
  );
}