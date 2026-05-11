import { theme } from "@/styles/theme";

export default function ContactPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold">
          יצירת קשר
        </h1>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} max-w-2xl mx-auto`}>
          נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות
        </p>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">פרטי קשר</h2>

          <p className={theme.text.darkSecondary}>
            טלפון: 054-9762390
          </p>

          <p className={theme.text.darkSecondary}>
            וואטסאפ: לחץ על הכפתור למענה מהיר
          </p>

          <p className={theme.text.darkSecondary}>
            מייל: office@maordeng.com
          </p>
        </div>

        {/* FORM */}
        <div className="border rounded-xl p-6 space-y-4">

          <h2 className="text-xl font-semibold">השאירו פרטים</h2>

          <input
            type="text"
            placeholder="שם מלא"
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="tel"
            placeholder="טלפון"
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            placeholder="תיאור קצר של הפרויקט"
            className="w-full border rounded-lg px-4 py-2 h-32"
          />

          <button className={`w-full py-3 rounded-lg transition bg-black text-white hover:bg-gray-800`}>
            שליחת פנייה
          </button>

        </div>

      </section>

      {/* CTA WHATSAPP */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h2 className="text-3xl font-semibold">
          רוצים מענה מהיר?
        </h2>

        <a
          href="https://wa.me/972549762390"
          className="inline-block mt-8 px-8 py-4 rounded-xl transition bg-green-500 text-white hover:bg-green-600"
        >
          וואטסאפ עכשיו
        </a>
      </section>

    </main>
  );
}