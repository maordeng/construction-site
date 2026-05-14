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

      {/* DIVIDER SPACE */}
      <div className="h-28 md:h-36" />

      {/* CORE STATEMENT */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl font-light leading-relaxed text-[#2A2A2A]">
          אנחנו לא “מפקחים על בנייה” — אנחנו מנהלים את כל המערכת שמאחורי הפרויקט שלך.
        </p>
      </section>

      {/* SPACING */}
      <div className="h-28 md:h-40" />

      {/* SERVICES LIST (MINIMAL + TYPOGRAPHY) */}
      <section className="max-w-4xl mx-auto px-6 space-y-16">

        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            ניהול פרויקטי בנייה
          </h2>
          <p className={`mt-4 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
            ניהול כולל של כל שלבי הפרויקט — תיאום, בקרה, קבלנים ולוחות זמנים —
            תוך שמירה על יציבות ודיוק ביצוע.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            פיקוח בנייה פרטית
          </h2>
          <p className={`mt-4 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
            פיקוח צמוד על בתים פרטיים ודירות, עם דגש על איכות ביצוע,
            תקנים ועמידה בתכנון האדריכלי.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            פיקוח בנייה מוסדית
          </h2>
          <p className={`mt-4 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
            ניהול ופיקוח פרויקטים ציבוריים ומוסדיים מורכבים,
            עם שליטה הנדסית מלאה בכל שלב.
          </p>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight">
            ליווי יזמים וקבלנים
          </h2>
          <p className={`mt-4 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
            ליווי מקצועי לקבלנים ויזמים לשיפור תהליכים,
            קבלת החלטות נכונה וניהול ביצוע מדויק.
          </p>
        </div>

      </section>

      {/* SPACING */}
      <div className="h-32 md:h-44" />

      {/* VALUE SECTION */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl md:text-3xl font-light tracking-tight">
          שליטה בפרויקט = שקט אמיתי
        </h3>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} leading-relaxed`}>
          כשיש ניהול נכון — אין הפתעות, אין חריגות, ואין טעויות יקרות.
          רק תהליך ברור ותוצאה מדויקת.
        </p>
      </section>

      {/* SPACING */}
      <div className="h-32 md:h-44" />

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center pb-32">
        <h3 className="text-3xl md:text-4xl font-light tracking-tight">
          בוא נבנה את הפרויקט נכון
        </h3>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary}`}>
          שיחה ראשונית קצרה — להבין את הפרויקט ולתת כיוון מקצועי ברור.
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