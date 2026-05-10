export default function ServicesPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
  
        {/* HERO */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            שירותים
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            מאור דוד הנדסה מספקת שירותי ניהול ופיקוח בנייה מקצועיים לפרויקטים פרטיים ומוסדיים,
            עם ליווי מלא משלב התכנון ועד מסירה.
          </p>
        </section>
  
        {/* SERVICES GRID */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">
  
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">ניהול פרויקטי בנייה</h2>
            <p className="text-gray-600">
              ניהול כולל של הפרויקט, תיאום בין כל הגורמים, וליווי צמוד עד סיום העבודה.
            </p>
          </div>
  
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">פיקוח בנייה פרטית</h2>
            <p className="text-gray-600">
              פיקוח מקצועי לבתים פרטיים ודירות, תוך שמירה על איכות ביצוע ועמידה בתקנים.
            </p>
          </div>
  
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">פיקוח בנייה מוסדית</h2>
            <p className="text-gray-600">
              פיקוח על פרויקטים ציבוריים ומוסדיים עם בקרה הנדסית מלאה.
            </p>
          </div>
  
          <div className="border rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-3">ליווי יזמים וקבלנים</h2>
            <p className="text-gray-600">
              תמיכה מקצועית ליזמים וקבלנים לשיפור ביצועים, תכנון וביצוע בשטח.
            </p>
          </div>
  
        </section>
  
        {/* CTA */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">
            צריכים ליווי לפרויקט שלכם?
          </h2>
  
          <p className="text-gray-600 mt-4">
            דברו איתנו לקבלת ייעוץ ראשוני ללא התחייבות
          </p>
  
          <a
            href="https://wa.me/972549762390"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            וואטסאפ עכשיו
          </a>
        </section>
  
      </main>
    );
  }