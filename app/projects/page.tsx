export default function ProjectsPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900">
  
        {/* HERO */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            פרויקטים נבחרים
          </h1>
  
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            מבחר פרויקטים בהם לקחנו חלק בניהול ופיקוח בנייה, תוך הקפדה על איכות, דיוק ועמידה בלוחות זמנים.
          </p>
        </section>
  
        {/* PROJECTS GRID */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">
  
          <div className="border rounded-xl overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-5">
              <h2 className="font-semibold text-lg">פרויקט מגורים פרטי</h2>
              <p className="text-gray-600 text-sm mt-2">
                פיקוח מלא על בניית בית פרטי משלב שלד ועד גמרים.
              </p>
            </div>
          </div>
  
          <div className="border rounded-xl overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-5">
              <h2 className="font-semibold text-lg">בניין מגורים</h2>
              <p className="text-gray-600 text-sm mt-2">
                ניהול ופיקוח על פרויקט בניין מגורים רב קומות.
              </p>
            </div>
          </div>
  
          <div className="border rounded-xl overflow-hidden">
            <div className="h-40 bg-gray-200"></div>
            <div className="p-5">
              <h2 className="font-semibold text-lg">פרויקט מסחרי</h2>
              <p className="text-gray-600 text-sm mt-2">
                ליווי הנדסי לפרויקט מסחרי כולל תיאום קבלנים.
              </p>
            </div>
          </div>
  
        </section>
  
        {/* CTA */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">
            רוצים לראות איך אנחנו עובדים אצלכם?
          </h2>
  
          <p className="text-gray-600 mt-4">
            נשמח ללוות את הפרויקט הבא שלכם
          </p>
  
          <a
            href="https://wa.me/972549762390"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            דברו איתנו בוואטסאפ
          </a>
        </section>
  
      </main>
    );
  }