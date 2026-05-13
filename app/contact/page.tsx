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

        {/* CONTACT ICONS */}
        <div className="space-y-10">

          <h2 className="text-2xl font-semibold tracking-tight">
            פרטי קשר
          </h2>

          <div className="flex gap-6 text-gray-600">
            <Phone className="w-6 h-6 hover:text-black transition cursor-pointer" />
            <MessageCircle className="w-6 h-6 hover:text-black transition cursor-pointer" />
            <Mail className="w-6 h-6 hover:text-black transition cursor-pointer" />
          </div>

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
/* CLIENT COMPONENT          */
/* ========================= */

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    alert("הפנייה נשלחה");

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