import { theme } from "@/styles/theme";

export default function ProjectsPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold">
          פרויקטים נבחרים
        </h1>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} max-w-2xl mx-auto`}>
          מבחר פרויקטים בהם לקחנו חלק בניהול ופיקוח בנייה, תוך הקפדה על איכות, דיוק ועמידה בלוחות זמנים.
        </p>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-8">

        <div className="border rounded-xl overflow-hidden">
          <div className="h-40 bg-gray-200"></div>

          <div className="p-5">
            <h2 className="font-semibold text-lg">
              פרויקט מגורים פרטי
            </h2>

            <p className={`text-sm mt-2 ${theme.text.darkSecondary}`}>
              פיקוח מלא על בניית בית פרטי משלב שלד ועד גמרים.
            </p>
          </div>
        </div>

        <div className="border rounded-xl overflow-hidden">
          <div className="h-40 bg-gray-200"></div>

          <div className="p-5">
            <h2 className="font-semibold text-lg">
              בניין מגורים
            </h2>

            <p className={`text-sm mt-2 ${theme.text.darkSecondary}`}>
              ניהול ופיקוח על פרויקט בניין מגורים רב קומות.
            </p>
          </div>
        </div>

        <div className="border rounded-xl overflow-hidden">
          <div className="h-40 bg-gray-200"></div>

          <div className="p-5">
            <h2 className="font-semibold text-lg">
              פרויקט מסחרי
            </h2>

            <p className={`text-sm mt-2 ${theme.text.darkSecondary}`}>
              ליווי הנדסי לפרויקט מסחרי כולל תיאום קבלנים.
            </p>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h2 className="text-3xl font-semibold">
          רוצים לראות איך אנחנו עובדים אצלכם?
        </h2>

        <p className={`mt-4 ${theme.text.darkSecondary}`}>
          נשמח ללוות את הפרויקט הבא שלכם
        </p>

        <a
          href="https://wa.me/972549762390"
          className="inline-block mt-8 px-8 py-4 rounded-xl transition bg-black text-white hover:bg-gray-800"
        >
          דברו איתנו בוואטסאפ
        </a>
      </section>

    </main>
  );
}