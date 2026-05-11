import { theme } from "@/styles/theme";

export default function VisionPage() {
  return (
    <main className={`min-h-screen ${theme.bg.section.light} ${theme.text.dark} pt-28`}>

      {/* HERO */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h1 className="text-4xl md:text-5xl font-bold">
          החזון שלנו
        </h1>

        <p className={`mt-6 text-lg ${theme.text.darkSecondary} max-w-3xl mx-auto`}>
          ליצור סטנדרט חדש של ניהול ופיקוח בנייה המבוסס על מקצועיות,
          שקיפות, אחריות מלאה וירידה לפרטים הקטנים ביותר.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-16">

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            בנייה מתוך אחריות
          </h2>

          <p className={`leading-relaxed ${theme.text.darkSecondary}`}>
            אנו מאמינים שכל פרויקט בנייה הוא אחריות אמיתית כלפי הלקוח,
            התקציב, לוחות הזמנים ואיכות הביצוע. לכן אנו פועלים בגישה
            יסודית וקפדנית לאורך כל שלבי הפרויקט.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            שקיפות מלאה מול הלקוח
          </h2>

          <p className={`leading-relaxed ${theme.text.darkSecondary}`}>
            החזון שלנו מבוסס על תקשורת ברורה ושקיפות מלאה מול הלקוח,
            מתוך הבנה שאמון הוא אחד המרכיבים החשובים ביותר בכל תהליך בנייה.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            מצוינות בשטח
          </h2>

          <p className={`leading-relaxed ${theme.text.darkSecondary}`}>
            המטרה שלנו היא להבטיח שכל פרויקט יתבצע ברמת גימור גבוהה,
            תוך שמירה על סדר, איכות עבודה ותיאום מלא בין כל הגורמים המעורבים.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className={`${theme.bg.section.muted} px-6 py-20 text-center`}>
        <h2 className="text-3xl font-semibold">
          בואו נבנה נכון מהיסוד
        </h2>

        <p className={`mt-4 ${theme.text.darkSecondary}`}>
          נשמח ללוות גם את הפרויקט שלכם בצורה מקצועית ואחראית
        </p>

        <a
          href="https://wa.me/972549762390"
          className="inline-block mt-8 px-8 py-4 rounded-xl transition bg-black text-white hover:bg-gray-800"
        >
          צרו קשר
        </a>
      </section>

    </main>
  );
}