const experiences = [
  {
    period: "March 2025 - Present",
    role: "Senior Frontend Engineer",
    company: "Uber",
    description:
      "Working on the Uber Eats web application, focusing on enhancing user experience and performance across various devices.<br>Leading a team of frontend developers to implement new features and optimize existing ones.",
    technologies: ["React", "TypeScript", "JavaScript", "Redux"],
    current: true,
  },
  {
    period: "January 2023 - March 2025",
    role: "Senior Software Developer",
    company: "Reliance Jio, Navi Mumbai",
    description:
      "Worked on Web application of JioHealthHub Application on PME, Book a test features.<br>Actively worked on APK Analyzer, app performance optimization, heap dump analysis, and memory profiling to improve app stability and eﬃciency",
    technologies: ["React Native", "Kotlin", "Java", "Javascript"],
    current: false,
  },
  {
    period: "January 2022 - January 2023",
    role: "Senior Software Developer",
    company: "MPhasis Limited, Bangalore",
    description:
      "Led the developer team while working on the FedEx Retailship Mobile Android app, using Kotlin and Java programming languages. and worked to improve code coverage to 85%.",
    technologies: ["React Native", "Kotlin", "Java", "Javascript"],
    current: false,
  },
  {
    period: "August 2019 - December 2021",
    role: "Mobile App Developer",
    company: "Applaunch, Bangalore",
    description:
      "Developed the CloudHawk Android app, which allows a robotic grass-cutting machine to be controlled via mobile Bluetooth connectivity.",
    technologies: ["Android", "Kotlin", "Room DB", "Retrofit"],
    current: false,
  },
  {
    period: "Jun, 2017 — Jun, 2019",
    role: "Android app developer",
    company: "KB Groups India, Delhi",
    description:
      "Delivered custom web solutions for small businesses and startups. Worked on JK Umber android applications, handling everything from design to deployment.",
    technologies: ["Android", "Core Java", "Retrofit", "Room DB"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
