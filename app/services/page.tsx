import { theme } from "@/styles/theme";

export default function ServicesPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-32`}>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight">
          שירותים
        </h1>

        <p className={`mt-8 text-lg md:text-xl ${theme.text.darkSecondary} leading-relaxed`}>
          ניהול ופיקוח בנייה ברמה גבוהה — שליטה מלאה בפרויקט,
          מהתכנון ועד המסירה, עם דיוק, שקט ובקרה מלאה.
        </p>
      </section>

      <div className="h-28 md:h-40" />

      {/* PROOF SECTION */}
      <section className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 text-center">

          <div>
            <p className="text-4xl font-light">+120</p>
            <p className={`mt-2 ${theme.text.darkSecondary}`}>
              פרויקטים שנוהלו
            </p>
          </div>

          <div>
            <p className="text-4xl font-light">98%</p>
            <p className={`mt-2 ${theme.text.darkSecondary}`}>
              עמידה בלוחות זמנים
            </p>
          </div>

          <div>
            <p className="text-4xl font-light">0</p>
            <p className={`mt-2 ${theme.text.darkSecondary}`}>
              חריגות שלא נוהלו
            </p>
          </div>

        </div>
      </section>

      <div className="h-32 md:h-44" />

      {/* CORE STATEMENT */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl font-light leading-relaxed">
          ניהול נכון לא מתחיל באתר — הוא מתחיל בשליטה.
        </p>
      </section>

      <div className="h-32 md:h-44" />

      {/* SERVICES SPLIT LAYOUT */}
      <section className="max-w-5xl mx-auto px-6 space-y-32">

        {/* ITEM 1 */}
        <div className="md:flex md:items-center md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight">
              ניהול פרויקטי בנייה
            </h2>
            <p className={`mt-6 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
              שליטה מלאה על כל שלבי הפרויקט — תיאום, קבלנים,
              תקציב ולוחות זמנים בצורה מסודרת וברורה.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 border-l md:pl-10 border-black/10">
            <p className={`text-sm ${theme.text.darkSecondary}`}>
              • תכנון ובקרה<br />
              • ניהול קבלנים<br />
              • מעקב תקציב<br />
              • לוחות זמנים
            </p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="md:flex md:flex-row-reverse md:items-center md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight">
              פיקוח בנייה פרטית
            </h2>
            <p className={`mt-6 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
              פיקוח צמוד על בתים פרטיים ודירות —
              שמירה על איכות ביצוע ועמידה מלאה בתכנון.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 border-l md:pl-10 border-black/10">
            <p className={`text-sm ${theme.text.darkSecondary}`}>
              • בדיקות שטח<br />
              • בקרת איכות<br />
              • מניעת טעויות<br />
              • סטנדרט ביצוע
            </p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="md:flex md:items-center md:gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light tracking-tight">
              פיקוח בנייה מוסדית
            </h2>
            <p className={`mt-6 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
              ניהול פרויקטים ציבוריים ומורכבים עם בקרה הנדסית מלאה
              משלב התחלה ועד מסירה.
            </p>
          </div>

          <div className="md:w-1/2 mt-10 md:mt-0 border-l md:pl-10 border-black/10">
            <p className={`text-sm ${theme.text.darkSecondary}`}>
              • פרויקטים גדולים<br />
              • בקרה הנדסית<br />
              • ניהול מורכבויות<br />
              • תיאום מערכות
            </p>
          </div>
        </div>

      </section>

      <div className="h-32 md:h-44" />

      {/* VALUE */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-light tracking-tight">
          שליטה היא לא אופציה — היא הבסיס
        </h3>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
          כשיש ניהול נכון, אין הפתעות. יש תהליך ברור ותוצאה מדויקת.
        </p>
      </section>

      <div className="h-32 md:h-44" />

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center pb-32">
        <h3 className="text-4xl font-light tracking-tight">
          נתחיל את זה נכון
        </h3>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary}`}>
          שיחה קצרה להבנת הפרויקט שלך ולתכנון נכון מההתחלה.
        </p>

        <a
          href="https://wa.me/972549762390"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-black text-white hover:bg-[#1a1a1a] transition"
        >
          וואטסאפ עכשיו
        </a>
      </section>

    </main>
  );
}