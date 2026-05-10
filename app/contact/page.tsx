export default function ContactPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
  
        {/* HERO */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            יצירת קשר
          </h1>
  
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            נשמח לשמוע על הפרויקט שלכם ולתת ייעוץ ראשוני ללא התחייבות
          </p>
        </section>
  
        {/* CONTACT INFO */}
        <section className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
  
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">פרטי קשר</h2>
  
            <p className="text-gray-600">
              טלפון: 05X-XXX-XXXX
            </p>
  
            <p className="text-gray-600">
              וואטסאפ: לחץ על הכפתור למענה מהיר
            </p>
  
            <p className="text-gray-600">
              מייל: info@maor-engineering.co.il
            </p>
          </div>
  
          {/* SIMPLE FORM (לא מחובר עדיין לשרת — זה שלב הבא) */}
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
  
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
              שליחת פנייה
            </button>
  
          </div>
  
        </section>
  
        {/* CTA WHATSAPP */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">
            רוצים מענה מהיר?
          </h2>
  
          <a
            href="https://wa.me/972549762390"
            className="inline-block mt-8 bg-green-500 text-white px-8 py-4 rounded-xl hover:bg-green-600 transition"
          >
            וואטסאפ עכשיו
          </a>
        </section>
  
      </main>
    );
  }