export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-50">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          מאור דוד הנדסה
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl">
          ניהול ופיקוח בנייה מקצועי לפרויקטים פרטיים ומוסדיים – משלב התכנון ועד מסירה
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
          >
            לתיאום פגישה
          </a>

          <a
            href="https://wa.me/972XXXXXXXXX"
            className="border border-black px-6 py-3 rounded-xl hover:bg-black hover:text-white transition"
          >
            וואטסאפ מהיר
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          למה מאור דוד הנדסה?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold text-xl">פיקוח קפדני</h3>
            <p className="text-gray-600 mt-2">
              בקרה מלאה על כל שלב בפרויקט עד לרמת הביצוע בשטח
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">ניסיון בשטח</h3>
            <p className="text-gray-600 mt-2">
              שילוב בין ידע הנדסי להבנה עמוקה של עבודת קבלנים
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">שקיפות מלאה</h3>
            <p className="text-gray-600 mt-2">
              הלקוח תמיד יודע בדיוק מה קורה בפרויקט
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 px-6 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          שירותים
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            ניהול פרויקטי בנייה
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            פיקוח בנייה פרטית
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            פיקוח בנייה מוסדית
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            ליווי יזמים וקבלנים
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">
          בואו נבנה את הפרויקט הבא שלכם נכון
        </h2>

        <p className="text-gray-600 mt-4">
          השאירו פרטים ונחזור אליכם בהקדם
        </p>

        <div className="mt-8">
          <a
            href="https://wa.me/972549762390"
            className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            שלח הודעה בוואטסאפ
          </a>
        </div>
      </section>

    </main>
  );
}