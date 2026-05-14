import Header from "@/components/Header";
import { MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-black text-white antialiased">

      <Header />

      {/* FLOAT CTA */}
      <a
        href="https://wa.me/972549762390"
        target="_blank"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 flex items-center justify-center bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle size={22} />
      </a>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.jpg"
            className="w-full h-full object-cover scale-110"
            alt="hero"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/60 tracking-[0.3em] uppercase text-xs mb-6">
            Maor David Engineering
          </p>

          <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
            ניהול פרויקטים.
            <br />
            דיוק הנדסי מוחלט.
          </h1>

          <p className="mt-10 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-[1.8]">
            אנחנו מלווים פרויקטים מהתכנון ועד המסירה — עם שליטה מלאה, שקיפות מלאה ותוצאה מדויקת.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black border-t border-white/10 py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-center mb-20">
            שירותים
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              ["ניהול פרויקטים", "ליווי מלא של הפרויקט מתחילתו ועד סופו."],
              ["פיקוח בנייה פרטית", "בקרה הנדסית צמודה לבתים פרטיים."],
              ["פיקוח מוסדי", "ניהול ופיקוח פרויקטים ציבוריים."],
              ["ליווי יזמים", "ייעול תהליכים ושיפור ביצוע בשטח."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="p-8 border border-white/10 rounded-2xl hover:border-white/30 transition"
              >
                <h3 className="text-xl font-medium mb-3">{title}</h3>
                <p className="text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-black border-t border-white/10 py-40 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-10">
            פרויקטים
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto">
            כאן יוצגו פרויקטים נבחרים שממחישים שליטה הנדסית, דיוק וביצוע ברמה גבוהה.
          </p>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="bg-black border-t border-white/10 py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-10">
            חזון
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            ליצור סטנדרט חדש בעולם הבנייה — כזה שמבוסס על שקיפות, שליטה הנדסית ואחריות מלאה.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-black border-t border-white/10 py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-10">
            אודות
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            מאור דוד הנדסה מתמחה בניהול ופיקוח פרויקטים מורכבים,
            עם דגש על איכות ביצוע, לוחות זמנים ודיוק הנדסי.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black border-t border-white/10 py-40 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-light mb-10">
          יצירת קשר
        </h2>

        <p className="text-white/60 mb-10">
          נשמח לשמוע על הפרויקט שלכם
        </p>

        <a
          href="https://wa.me/972549762390"
          target="_blank"
          className="bg-[#25D366] text-white px-10 py-4 rounded-full hover:scale-105 transition"
        >
          וואטסאפ
        </a>
      </section>

    </main>
  );
}