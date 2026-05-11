export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900 pt-28">
  
        {/* HERO */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">
            אודות מאור דוד הנדסה
          </h1>
  
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            ניהול ופיקוח בנייה מקצועי לפרויקטים פרטיים ומוסדיים, עם דגש על דיוק, שקיפות ואחריות מלאה לכל אורך הדרך.
          </p>
        </section>
  
        {/* CONTENT */}
        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">מי אנחנו</h2>
            <p className="text-gray-600 leading-relaxed">
              מאור דוד הנדסה מתמחה בניהול ופיקוח פרויקטי בנייה משלב התכנון ועד מסירה.
              החברה פועלת מתוך הבנה עמוקה של עולם הביצוע בשטח, תוך שילוב בין ידע הנדסי,
              ניסיון מעשי ויכולת ניהול גבוהה.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">הגישה שלנו</h2>
            <p className="text-gray-600 leading-relaxed">
              אנו מאמינים בפיקוח הדוק, שקיפות מלאה מול הלקוח, ועמידה בלתי מתפשרת
              בלוחות זמנים ובאיכות הביצוע. כל פרויקט מנוהל כאילו היה שלנו.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">הניסיון שלנו</h2>
            <p className="text-gray-600 leading-relaxed">
              ניסיון בשטח בפרויקטים פרטיים ומוסדיים מאפשר לנו לזהות בעיות מראש,
              למנוע טעויות ולשמור על רצף עבודה מקצועי לאורך כל שלבי הפרויקט.
            </p>
          </div>
  
          <div>
            <h2 className="text-2xl font-semibold mb-4">המטרה שלנו</h2>
            <p className="text-gray-600 leading-relaxed">
              להבטיח ללקוחות שלנו שקט נפשי, שליטה מלאה על הפרויקט ותוצאה סופית
              ברמה הגבוהה ביותר.
            </p>
          </div>
  
        </section>
  
        {/* CTA */}
        <section className="bg-gray-50 px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold">
            רוצים ליווי מקצועי לפרויקט שלכם?
          </h2>
  
          <p className="text-gray-600 mt-4">
            אנחנו כאן כדי לוודא שהפרויקט שלכם יתבצע נכון מההתחלה ועד הסוף
          </p>
  
          <a
            href="https://wa.me/972XXXXXXXXX"
            className="inline-block mt-8 bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition"
          >
            דברו איתנו בוואטסאפ
          </a>
        </section>
  
      </main>
    );
  }