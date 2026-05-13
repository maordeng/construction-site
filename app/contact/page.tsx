import { theme } from "@/styles/theme";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-28 text-center`}>
        <h1 className="text-5xl md:text-6xl font-light tracking-tight">
          יצירת קשר
        </h1>

        <p className={`mt-6 text-lg md:text-xl ${theme.text.darkSecondary} max-w-2xl mx-auto leading-relaxed`}>
          נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

        {/* CONTACT INFO */}
        <div className="space-y-10">

          <h2 className="text-2xl font-semibold tracking-tight">
            פרטי קשר
          </h2>

          <div className="space-y-6">

            {/* PHONE */}
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="font-medium">טלפון</p>
                <p className={theme.text.darkSecondary}>054-9762390</p>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="flex items-start gap-4">
              <MessageCircle className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="font-medium">וואטסאפ</p>
                <p className={theme.text.darkSecondary}>מענה מהיר בכל שעות היום</p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gray-500 mt-1" />
              <div>
                <p className="font-medium">מייל</p>
                <p className={theme.text.darkSecondary}>office@maordeng.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm space-y-6">

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

        <h2 className="text-3xl md:text-4xl font-light tracking-tight">
          רוצים מענה מהיר?
        </h2>

        <p className={`mt-4 ${theme.text.darkSecondary}`}>
          דברו איתנו ישירות בוואטסאפ ונחזור אליכם מיד
        </p>

        <a
          href="https://wa.me/972549762390"
          className={`inline-flex items-center gap-2 mt-8 ${theme.components.button.whatsapp}`}
        >
          <MessageCircle size={20} />
          וואטסאפ עכשיו
        </a>

      </section>

    </main>
  );
}