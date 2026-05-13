"use client";

import { theme } from "@/styles/theme";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const PHONE = "+972549762390";
  const EMAIL = "office@maordeng.com";

  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className="px-6 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight">
          יצירת קשר
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות
        </p>
      </section>

      {/* MAIN */}
      <section className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-20">

        {/* LEFT - INFO */}
        <div className="space-y-12">

          <div>
            <h2 className="text-2xl font-light tracking-wide text-gray-800 mb-6">
              פרטי קשר
            </h2>

            <div className="space-y-6 text-gray-600">

              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-black transition">
                <Phone className="w-5 h-5" />
                <span>054-976-2390</span>
              </a>

              <a href={`https://wa.me/972549762390`} target="_blank" className="flex items-center gap-3 hover:text-black transition">
                <MessageCircle className="w-5 h-5" />
                <span>וואטסאפ — שלח הודעה מיידית</span>
              </a>

              <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-black transition">
                <Mail className="w-5 h-5" />
                <span>office@maordeng.com</span>
              </a>

            </div>
          </div>

          {/* CTA BLOCK */}
          <div className="pt-10 border-t border-black/5">
            <p className="text-sm text-gray-500 leading-relaxed">
              מענה מהיר בוואטסאפ לרוב תוך זמן קצר.  
              ניתן לשלוח פרטים ראשוניים ואנחנו נחזור אליכם.
            </p>
          </div>

        </div>

        {/* RIGHT - FORM (CLEAN FLOAT STYLE) */}
        <ContactForm />

      </section>

      {/* FULL WIDTH CTA */}
      <section className="mt-28 px-6 py-24 text-center bg-white/60 border-t border-black/5">

        <h2 className="text-3xl font-light tracking-tight">
          רוצים להתחיל פרויקט?
        </h2>

        <a
          href="https://wa.me/972549762390"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-black text-white hover:opacity-90 transition"
        >
          <MessageCircle size={18} />
          וואטסאפ ישיר
        </a>

      </section>

    </main>
  );
}

/* ========================= */
/* FORM - MINIMAL FLOAT      */
/* ========================= */

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const text = `הודעה חדשה מהאתר:%0Aשם: ${name}%0Aטלפון: ${phone}%0Aהודעה: ${message}`;
    const url = `https://wa.me/972549762390?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="space-y-6">

      <h2 className="text-2xl font-light tracking-wide text-gray-800">
        השאירו פרטים
      </h2>

      <div className="space-y-4">

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="שם מלא"
          className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition bg-transparent"
        />

        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="טלפון"
          className="w-full border-b border-black/10 py-3 focus:outline-none focus:border-black transition bg-transparent"
        />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="ספרו לנו על הפרויקט"
          className="w-full border-b border-black/10 py-3 h-28 focus:outline-none focus:border-black transition bg-transparent"
        />

      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full py-3 bg-black text-white rounded-full hover:opacity-90 transition"
      >
        שליחת פנייה
      </button>

    </div>
  );
}