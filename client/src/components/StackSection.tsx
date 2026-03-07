/*
 * SLATE ARCHITECT — Stack Section
 * Tecnologías agrupadas por categoría con niveles cualitativos
 * Niveles: Avanzado, Intermedio, Familiarizado
 */
import { useEffect, useRef, useState } from "react";

type SkillLevel = "Avanzado" | "Intermedio" | "Familiarizado";

interface SkillItem {
  name: string;
  level: SkillLevel;
  color: string;
}

interface Category {
  label: string;
  number: string;
  items: SkillItem[];
}

const categories: Category[] = [
  {
    label: "Frontend",
    number: "01",
    items: [
      { name: "React", level: "Avanzado", color: "#61DAFB" },
      { name: "TypeScript", level: "Avanzado", color: "#3178C6" },
      { name: "Tailwind CSS", level: "Avanzado", color: "#38BDF8" },
      { name: "HTML / CSS", level: "Avanzado", color: "#E34F26" },
    ],
  },
  {
    label: "Backend",
    number: "02",
    items: [
      { name: "Node.js", level: "Avanzado", color: "#68A063" },
      { name: "Python", level: "Avanzado", color: "#FFD43B" },
      { name: "Java", level: "Intermedio", color: "#F89820" },
      { name: "Spring Boot", level: "Intermedio", color: "#6DB33F" },
    ],
  },
  {
    label: "Móvil",
    number: "03",
    items: [
      { name: "Flutter", level: "Avanzado", color: "#54C5F8" },
      { name: "Dart", level: "Avanzado", color: "#0175C2" },
      { name: "Android (Kotlin)", level: "Intermedio", color: "#A97BFF" },
      { name: "React Native", level: "Intermedio", color: "#61DAFB" },
    ],
  },
  {
    label: "Bases de Datos",
    number: "04",
    items: [
      { name: "MySQL", level: "Avanzado", color: "#4479A1" },
      { name: "PostgreSQL", level: "Avanzado", color: "#336791" },
      { name: "MongoDB", level: "Intermedio", color: "#47A248" },
      { name: "Firebase", level: "Avanzado", color: "#FFCA28" },
    ],
  },
  {
    label: "Herramientas",
    number: "05",
    items: [
      { name: "Git / GitHub", level: "Avanzado", color: "#F05032" },
      { name: "Docker", level: "Intermedio", color: "#2496ED" },
      { name: "Figma", level: "Intermedio", color: "#F24E1E" },
      { name: "VS Code", level: "Avanzado", color: "#007ACC" },
    ],
  },
];

function getLevelColor(level: SkillLevel): string {
  switch (level) {
    case "Avanzado":
      return "text-[oklch(0.82_0.22_145)]"; // Neon green
    case "Intermedio":
      return "text-[oklch(0.70_0.12_70)]"; // Yellow/amber
    case "Familiarizado":
      return "text-[oklch(0.60_0.08_250)]"; // Blue
    default:
      return "text-[oklch(0.55_0.01_285)]";
  }
}

function getLevelBgColor(level: SkillLevel): string {
  switch (level) {
    case "Avanzado":
      return "bg-[oklch(0.82_0.22_145/0.08)] border-[oklch(0.82_0.22_145/0.2)]";
    case "Intermedio":
      return "bg-[oklch(0.70_0.12_70/0.08)] border-[oklch(0.70_0.12_70/0.2)]";
    case "Familiarizado":
      return "bg-[oklch(0.60_0.08_250/0.08)] border-[oklch(0.60_0.08_250/0.2)]";
    default:
      return "bg-[oklch(0.18_0.007_285)] border-[oklch(0.22_0.008_285)]";
  }
}

interface SkillCardProps {
  name: string;
  level: SkillLevel;
  color: string;
}

function SkillCard({ name, level, color }: SkillCardProps) {
  return (
    <div className="group">
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="text-sm text-[oklch(0.75_0.01_285)] group-hover:text-white transition-colors duration-200 font-medium flex-1">
          {name}
        </span>
        <div
          className={`px-2.5 py-1 rounded-sm border text-xs font-semibold whitespace-nowrap transition-all duration-200 ${getLevelBgColor(
            level
          )} ${getLevelColor(level)}`}
        >
          {level}
        </div>
      </div>
      {/* Subtle color indicator line */}
      <div className="h-0.5 bg-[oklch(0.18_0.007_285)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: "100%",
            background: color,
            opacity: 0.3,
          }}
        />
      </div>
    </div>
  );
}

export default function StackSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="stack" className="py-24 bg-[oklch(0.09_0.005_285)]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 01</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Stack Tecnológico
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-xl">
            Tecnologías con las que trabajo en el día a día, desde el diseño
            hasta el despliegue en producción.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.label}
              className="card-glow p-6 rounded-sm bg-[oklch(0.12_0.006_285)] border border-[oklch(0.18_0.007_285)] hover:border-[oklch(0.22_0.008_285)] transition-all duration-300"
              style={{
                transitionDelay: `${catIdx * 80}ms`,
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${catIdx * 80}ms, transform 0.6s ease ${catIdx * 80}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="section-number text-lg">{cat.number}</span>
                <h3 className="font-display font-bold text-white text-lg">
                  {cat.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-4">
                {cat.items.map((item) => (
                  <SkillCard
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Extra card: Certificaciones / Formación */}
          <div
            className="card-glow p-6 rounded-sm bg-[oklch(0.12_0.006_285)] border border-[oklch(0.18_0.007_285)] flex flex-col justify-between hover:border-[oklch(0.22_0.008_285)] transition-all duration-300"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 0.6s ease 400ms, transform 0.6s ease 400ms, border-color 0.3s ease, box-shadow 0.3s ease`,
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="section-number text-lg">06</span>
                <h3 className="font-display font-bold text-white text-lg">
                  Formación
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "DAM — Desarrollo de Aplicaciones Multiplataforma",
                  "Desarrollo Web Full Stack",
                  "Flutter & Dart — Aplicaciones Móviles",
                  "Clean Architecture & SOLID",
                  "Bases de Datos Relacionales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="neon-text mt-0.5 text-xs">▸</span>
                    <span className="text-sm text-[oklch(0.65_0.01_285)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-[oklch(0.18_0.007_285)]">
              <span className="tech-tag">En constante aprendizaje</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-12 pt-8 border-t border-[oklch(0.15_0.006_285)]">
          <p className="text-xs text-[oklch(0.45_0.01_285)] mb-4 font-mono uppercase tracking-wider">
            Niveles de competencia
          </p>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.22_145)]" />
              <span className="text-sm text-[oklch(0.65_0.01_285)]">
                Avanzado — Experiencia profesional extensa
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.70_0.12_70)]" />
              <span className="text-sm text-[oklch(0.65_0.01_285)]">
                Intermedio — Proyectos completados
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[oklch(0.60_0.08_250)]" />
              <span className="text-sm text-[oklch(0.65_0.01_285)]">
                Familiarizado — Conocimiento sólido
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
