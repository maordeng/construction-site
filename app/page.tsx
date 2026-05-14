import Header from "@/components/Header";
import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="bg-black text-white antialiased overflow-x-hidden">

      <Header />

      {/* FLOAT CTA */}
      <a
        href="https://wa.me/972549762390"
        target="_blank"
        className="
          fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50
          w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          bg-[#25D366]
          rounded-full shadow-lg
          hover:scale-110 transition
        "
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

          <ScrollReveal>
            <p className="text-white/60 tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-6">
              Maor David Engineering
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
  <h1
    className="
      text-3xl sm:text-5xl md:text-6xl lg:text-7xl
      font-light leading-[1.05] tracking-tight
    "
  >
    ניהול ופיקוח בנייה
    <br />
    לבנות נכון. בראש שקט.
  </h1>
</ScrollReveal>

<ScrollReveal delay={0.2}>
  <p
    className="
      mt-6 sm:mt-8 md:mt-10
      text-base sm:text-lg md:text-xl
      text-white/70
      max-w-xl sm:max-w-2xl mx-auto
      leading-[1.6] sm:leading-[1.8]
      px-2 sm:px-0
    "
  >
    ליווי אישי ומדויק לפרויקטים פרטיים ומוסדיים —
    משלב התכנון ועד למסירה.
  </p>
</ScrollReveal>
          </ScrollReveal>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <h2 className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl
              font-light text-center mb-12 sm:mb-16 md:mb-20 tracking-tight
            ">
              שירותים
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

            {[
              ["ניהול פרויקטים", "ליווי מלא של הפרויקט מתחילתו ועד סופו."],
              ["פיקוח בנייה פרטית", "בקרה הנדסית צמודה לבתים פרטיים."],
              ["פיקוח מוסדי", "ניהול ופיקוח פרויקטים ציבוריים."],
              ["ליווי יזמים", "ייעול תהליכים ושיפור ביצוע בשטח."],
            ].map(([title, desc], i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="
                  p-6 sm:p-7 md:p-8
                  border border-white/10 rounded-2xl
                  hover:border-white/30 hover:translate-y-[-4px]
                  transition-all duration-300
                ">
                  <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">

          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-10 tracking-tight">
              פרויקטים
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              כאן יוצגו פרויקטים נבחרים שממחישים שליטה הנדסית, דיוק וביצוע ברמה גבוהה.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-10 tracking-tight">
              חזון
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed px-2 sm:px-0">
              ליצור סטנדרט חדש בעולם הבנייה — כזה שמבוסס על שקיפות, שליטה הנדסית ואחריות מלאה.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">

          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-10 tracking-tight">
              אודות
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed px-2 sm:px-0">
              מאור דוד הנדסה מתמחה בניהול ופיקוח פרויקטים מורכבים,
              עם דגש על איכות ביצוע, לוחות זמנים ודיוק הנדסי.
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6 text-center">

        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-10 tracking-tight">
            יצירת קשר
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-10">
            נשמח לשמוע על הפרויקט שלכם
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href="https://wa.me/972549762390"
            target="_blank"
            className="
              bg-[#25D366] text-white
              px-6 sm:px-8 md:px-10
              py-3 sm:py-4
              rounded-full
              hover:scale-105 transition
              text-sm sm:text-base
            "
          >
            וואטסאפ
          </a>
        </ScrollReveal>

      </section>

    </main>
  );
}