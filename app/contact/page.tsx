"use client";

import { theme } from "@/styles/theme";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

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

        {/* CONTACT CARDS */}
        <div className="space-y-4">

          <h2 className="text-2xl font-semibold tracking-tight mb-6">
            פרטי קשר
          </h2>

          {/* PHONE */}
          <a
            href="tel:+972549762390"
            className="flex items-center justify-between p-4 rounded-xl border border-black/10 bg-white hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700">טלפון</span>
            </div>
            <span className="text-gray-500 text-sm">050-976-2390</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/972549762390"
            target="_blank"
            className="flex items-center justify-between p-4 rounded-xl border border-black/10 bg-white hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700">וואטסאפ</span>
            </div>
            <span className="text-gray-500 text-sm">שלח הודעה</span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:yourmail@example.com"
            className="flex items-center justify-between p-4 rounded-xl border border-black/10 bg-white hover:shadow-md transition"
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-gray-700" />
              <span className="font-medium text-gray-700">מייל</span>
            </div>
            <span className="text-gray-500 text-sm">שליחת מייל</span>
          </a>

        </div>

        {/* FORM */}
        <ContactForm />

      </section>

      {/* CTA */}
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

/* ========================= */
/* CLIENT FORM               */
/* ========================= */

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const text = `הודעה חדשה מהאתר:%0A
שם: ${name}%0A
טלפון: ${phone}%0A
הודעה: ${message}`;

    const url = `https://wa.me/972549762390?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setName("");
    setPhone("");
    setMessage("");
  };

  return (
    <div className="bg-white border border-black/10 rounded-2xl p-8 shadow-sm space-y-6">

      <h2 className="text-xl font-semibold tracking-tight">
        השאירו פרטים
      </h2>

      <input
        type="text"
        placeholder="שם מלא"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border border-black/10 rounded-xl px-4 py-3"
      />

      <input
        type="tel"
        placeholder="טלפון"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border border-black/10 rounded-xl px-4 py-3"
      />

      <textarea
        placeholder="תיאור קצר של הפרויקט"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border border-black/10 rounded-xl px-4 py-3 h-32"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className={theme.components.button.primary}
      >
        שליחת פנייה
      </button>

    </div>
  );
}