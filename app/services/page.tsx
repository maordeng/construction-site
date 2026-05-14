import { theme } from "@/styles/theme";

export default function ServicesPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-24 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold">
          שירותי ניהול ופיקוח בנייה
        </h1>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} max-w-3xl mx-auto`}>
          שליטה מלאה בפרויקט שלך — מהתכנון ועד מסירה, בלי הפתעות, בלי חריגות תקציב ובלי כאבי ראש.
          <br /><br />
          אנחנו דואגים שכל שלב יתבצע בדיוק כמו שצריך — בזמן, בתקציב ובאיכות הגבוהה ביותר.
        </p>
      </section>

      {/* EXPLANATION */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          לא רק פיקוח — ניהול מלא של הפרויקט
        </h2>

        <p className={theme.text.darkSecondary}>
          ניהול ופיקוח בנייה הוא לא רק נוכחות באתר.
          זה שליטה מלאה בתקציב, קבלנים, איכות ביצוע ולוחות זמנים —
          כדי להבטיח שהפרויקט יבוצע בדיוק כפי שתוכנן.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-8">

        <div className="border border-[#E6E6E0] rounded-2xl p-6 bg-white/60 hover:bg-white transition">
          <h2 className="text-xl font-semibold mb-3">
            ניהול פרויקטי בנייה
          </h2>
          <p className={theme.text.darkSecondary}>
            ניהול כולל של הפרויקט, תיאום בין כל הגורמים וליווי צמוד עד סיום העבודה.
          </p>
        </div>

        <div className="border border-[#E6E6E0] rounded-2xl p-6 bg-white/60 hover:bg-white transition">
          <h2 className="text-xl font-semibold mb-3">
            פיקוח בנייה פרטית
          </h2>
          <p className={theme.text.darkSecondary}>
            פיקוח מקצועי לבתים פרטיים ודירות, תוך שמירה על איכות ביצוע ועמידה בתקנים.
          </p>
        </div>

        <div className="border border-[#E6E6E0] rounded-2xl p-6 bg-white/60 hover:bg-white transition">
          <h2 className="text-xl font-semibold mb-3">
            פיקוח בנייה מוסדית
          </h2>
          <p className={theme.text.darkSecondary}>
            פיקוח על פרויקטים ציבוריים ומוסדיים עם בקרה הנדסית מלאה מהשטח ועד המסירה.
          </p>
        </div>

        <div className="border border-[#E6E6E0] rounded-2xl p-6 bg-white/60 hover:bg-white transition">
          <h2 className="text-xl font-semibold mb-3">
            ליווי יזמים וקבלנים
          </h2>
          <p className={theme.text.darkSecondary}>
            ליווי מקצועי ליזמים וקבלנים לשיפור ביצועים, תכנון חכם וניהול נכון של ביצוע בשטח.
          </p>
        </div>

      </section>

      {/* VALUE SECTION */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h2 className="text-3xl font-semibold">
          למה זה קריטי בפרויקט שלך?
        </h2>

        <p className={`mt-6 ${theme.text.darkSecondary} max-w-3xl mx-auto`}>
          בלי פיקוח מקצועי — פרויקטים נוטים לחרוג בתקציב, להתעכב ולהתבסס על טעויות יקרות.
          <br /><br />
          עם ניהול נכון — אתה מקבל שקט, שליטה ותוצאה מדויקת כמו שתוכננה מראש.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold">
          רוצים להתחיל פרויקט בצורה נכונה?
        </h2>

        <p className={`mt-4 ${theme.text.darkSecondary}`}>
          ייעוץ ראשוני ללא התחייבות — להבין את הפרויקט לפני שמתחילים.
        </p>

        <a
          href="https://wa.me/972549762390"
          className="inline-block mt-8 px-8 py-4 rounded-2xl transition bg-black text-white hover:bg-gray-800"
        >
          וואטסאפ עכשיו
        </a>
      </section>

    </main>
  );
}