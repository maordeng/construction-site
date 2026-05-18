import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <section
      id="projects"
      className="bg-black border-t border-white/10 py-20 sm:py-28 md:py-36 lg:py-40 px-4 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        <ScrollReveal>
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-white/40 tracking-[0.25em] uppercase text-xs mb-4">
              Selected Projects
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
              פרויקטים
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

          {[
            {
              image: "/images/project1.jpg",
              title: "בית פרטי יוקרתי",
              location: "אשקלון",
              desc: "ניהול ופיקוח מלא משלב התכנון ועד מסירת המפתח.",
            },
            {
              image: "/images/project2.jpg",
              title: "מבנה מסחרי",
              location: "באר שבע",
              desc: "ליווי ביצוע, בקרה הנדסית ותיאום מלא בין כלל הגורמים.",
            },
            {
              image: "/images/project3.jpg",
              title: "פרויקט מוסדי",
              location: "מרכז הארץ",
              desc: "ניהול שטח ופיקוח קפדני תוך עמידה בלוחות זמנים.",
            },
            {
              image: "/images/project4.jpg",
              title: "וילת מגורים",
              location: "שדרות",
              desc: "שליטה מלאה בתהליך הבנייה עם דגש על איכות וגימור.",
            },
          ].map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.08}>

              <div className="
                group
                border border-white/10
                rounded-3xl
                overflow-hidden
                bg-white/[0.02]
                hover:border-white/20
                transition-all duration-500
              ">

                <div className="relative overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      w-full
                      h-[260px] sm:h-[320px]
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

                </div>

                <div className="p-6 sm:p-8 text-right">

                  <div className="flex items-center justify-between mb-4">

                    <span className="text-white/40 text-sm">
                      {project.location}
                    </span>

                    <h3 className="text-xl sm:text-2xl font-light tracking-tight">
                      {project.title}
                    </h3>

                  </div>

                  <p className="text-white/60 leading-relaxed text-sm sm:text-base">
                    {project.desc}
                  </p>

                </div>

              </div>

            </ScrollReveal>
          ))}

        </div>
      </div>
    </section>
  );
}