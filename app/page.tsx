"use client";

import Header from "@/components/Header";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const [openService, setOpenService] = useState<string | null>(null);

  const PROJECTS = [
    {
      title: "מעונות סטודנטים - אוניברסיטת בן גוריון",
      location: "באר שבע",
      desc: "כמהנדס ביצוע בחברת ״מנרב״ - 14 מבנים משולב מסחר ומגורים",
      images: [
        "/projects/project1/1.jpg",
        "/projects/project1/2.jpg",
        "/projects/project1/3.jpg",
        "/projects/project1/4.jpg",
      ],
    },
    {
      title: "שכונת ״התמרים״",
      location: "קיבוץ חצרים",
      desc: "מנהל פרויקט ופיקוח תחת חברת ״ב.קידר הנדסה״ - 52 יח״ד",
      images: [
        "/images/project2.jpg",
        "/images/project2-2.jpg",
      ],
    },
    {
      title: "מאזני גשר - מפעלי יח״מ",
      location: "קיבוץ מגן",
      desc: "ליווי הנדסי של בניית מאזני גשר",
      images: [
        "/projects/project3/1.jpg",
        "/projects/project3/2.jpg",
        "/projects/project3/3.jpg",
        "/projects/project3/4.jpg",
      ],
    },
  ];

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
            <p className="text-white/60 tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[10px] sm:text-xs mb-4 sm:mb-8">
              <span className="inline-block scale-[1.5] origin-center">
                מאור דוד הנדסה
              </span>
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="
              text-3xl sm:text-5xl md:text-6xl lg:text-7xl
              font-light leading-[1.05] tracking-tight
            ">
              ניהול ופיקוח בנייה
              <br />
              .לבנות נכון, בראש שקט
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="
              mt-6 sm:mt-8 md:mt-10
              text-base sm:text-lg md:text-xl
              text-white/70
              max-w-xl sm:max-w-2xl mx-auto
              leading-[1.6] sm:leading-[1.8]
              px-2 sm:px-0
            ">
              ליווי אישי לפרויקטים פרטיים ומוסדיים -
              משלב התכנון ועד המסירה
            </p>
          </ScrollReveal>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-12 sm:mb-16 md:mb-20 tracking-tight">
              שירותים
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">

            {[
              {
                title: "ניהול פרויקטים",
                desc: "ליווי מלא של הפרויקט מתחילתו ועד סופו.",
                content:
                  "ניהול כולל של פרויקטים משלב התכנון ועד המסירה. תיאום בין יועצים, קבלנים וספקים, בקרה על לוחות זמנים, תקציב ואיכות ביצוע.",
              },
              {
                title: "פיקוח בנייה פרטית",
                desc: "בקרה הנדסית צמודה לבתים פרטיים.",
                content:
                  "פיקוח הנדסי צמוד לבנייה פרטית משלב התכנון ועד סיום הביצוע. בדיקות תכניות, מניעת טעויות, פיקוח קבלנים ותיאום מלא בשטח.",
              },
              {
                title: "פיקוח מוסדי",
                desc: "ניהול ופיקוח פרויקטים ציבוריים.",
                content:
                  "ניהול ופיקוח פרויקטים מוסדיים עם עמידה בתקנים ובקרה הנדסית מלאה.",
              },
              {
                title: "ליווי יזמים",
                desc: "ייעול תהליכים ושיפור ביצוע בשטח.",
                content:
                  "ליווי יזמים משלב הרעיון ועד המסירה כולל ניתוחים כלכליים ותכנון מוקדם.",
              },
            ].map(({ title, desc, content }) => (
              <div
                key={title}
                onClick={() =>
                  setOpenService(openService === title ? null : title)
                }
                className="
                  p-6 sm:p-7 md:p-8
                  border border-white/10 rounded-2xl
                  cursor-pointer hover:border-white/30
                  transition-all duration-500
                "
              >
                <h3 className="text-lg sm:text-xl font-medium mb-2">
                  {title}
                </h3>

                <p className="text-sm sm:text-base text-white/60">
                  {desc}
                </p>

                {openService === title && (
                  <div className="
                    mt-6 pt-6 border-t border-white/10
                    text-white/60 text-sm sm:text-base leading-loose
                    animate-in fade-in duration-500
                  ">
                    {content}
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6">

        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            פרויקטים
          </h2>

          <p className="text-white/60">
            לחצו על פרויקט לפתיחת גלריה
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto px-2 snap-x snap-mandatory scroll-smooth">

          {PROJECTS.map((project) => (
            <div
              key={project.title}
              onClick={() => {
                setActiveProject(project);
                setActiveIndex(0);
                setLightboxOpen(true);
              }}
              className="
                min-w-[80%] md:min-w-[45%]
                snap-center
                cursor-pointer
                group
                border border-white/10
                rounded-3xl
                overflow-hidden
                bg-white/[0.02]
                hover:border-white/20
                transition-all duration-500
              "
            >

              <div className="relative overflow-hidden">

                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="
                    w-full
                    h-[300px]
                    object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <div className="p-6 text-right">

                <div className="flex justify-between mb-2">
                  <span className="text-white/40 text-sm">
                    {project.location}
                  </span>

                  <h3 className="text-xl font-light">
                    {project.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* LIGHTBOX */}
        {lightboxOpen && activeProject && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            onClick={() => setLightboxOpen(false)}
          >

            <div
              className="relative max-w-6xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={activeProject.images[activeIndex]}
                className="w-full max-h-[85vh] object-contain rounded-2xl"
                alt=""
              />

              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    prev === 0
                      ? activeProject.images.length - 1
                      : prev - 1
                  )
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  setActiveIndex((prev) =>
                    (prev + 1) % activeProject.images.length
                  )
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-3xl"
              >
                ›
              </button>

              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white"
              >
                ✕
              </button>

              {/* ✅ THUMBNAILS RESTORED */}
              <div className="flex justify-center gap-3 mt-6">
                {activeProject.images.map((img: string, index: number) => (
                  <button
                    key={img}
                    onClick={() => setActiveIndex(index)}
                    className={`overflow-hidden rounded-xl border ${
                      activeIndex === index
                        ? "border-white"
                        : "border-white/20 opacity-60"
                    }`}
                  >
                    <img src={img} className="w-20 h-20 object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </div>
        )}

      </section>

      {/* VISION */}
      <section id="vision" className="bg-black border-t border-white/10 py-20 px-4 sm:px-6 text-center">

        <h2 className="text-4xl font-light mb-10">חזון</h2>

        <div className="max-w-3xl mx-auto text-white/60 space-y-6 leading-relaxed text-right">

          <p>
            .אנחנו מאמינים שאיכות, מקצועיות ותקשורת בריאה הן הבסיס לכל פרויקט בנייה מוצלח
          </p>

          <p className="mb-6">
            מתוך אמונה זו, “מאור דוד הנדסה” פועלת להבטיח שכל פרויקט מתנהל בסטנדרט מקצועי גבוה -
            עם תכנון מוקפד, בקרה הנדסית מדויקת ופתרונות איכותיים לכל אתגר שמופיע בדרך
          </p>

          <p className="mb-6">
            .תהליכי עבודה ברורים, פגישות מסודרות ועדכונים שוטפים ללקוח מאפשרים שיתוף פעולה פורה בין כל הגורמים המעורבים
          </p>

          <p>
            .החזון שלנו הוא ליצור חברה יציבה ובעלת מבנה ארגוני חזק
          </p>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="bg-black border-t border-white/10 py-20 px-4 sm:px-6 text-center">

        <h2 className="text-4xl font-light mb-6">אודות</h2>

        <p className="text-white/60 max-w-2xl mx-auto">
          מאור דוד הנדסה מתמחה בניהול ופיקוח פרויקטים מורכבים.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-black border-t border-white/10 py-24 px-4 sm:px-6 text-center">

        <h2 className="text-4xl font-light mb-6">יצירת קשר</h2>

        <a
          href="mailto:office@maordeng.com"
          className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-xl"
        >
          <Mail size={18} />
          שליחת מייל
        </a>

      </section>

    </main>
  );
}