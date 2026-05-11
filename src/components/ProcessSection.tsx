import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Code2, TestTube, Rocket } from "lucide-react";

import ProcessTerminal from "./ProcessTerminal";

const steps = [
  {
    number: "01",
    icon: Palette,
    title: "Diseño",
    description:
      "Analizo los requisitos y diseño la arquitectura de la solución. Creo wireframes y prototipos para validar la experiencia de usuario antes de escribir una sola línea de código.",
    tools: ["Figma", "Excalidraw", "User Stories"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Desarrollo",
    description:
      "Implemento la solución con código limpio, siguiendo principios SOLID y patrones de diseño. Priorizo la legibilidad, mantenibilidad y rendimiento del código.",
    tools: ["Git Flow", "Clean Code", "SOLID", "Design Patterns"],
  },
  {
    number: "03",
    icon: TestTube,
    title: "Testing",
    description:
      "Escribo tests unitarios e integración para garantizar la calidad del software. Realizo pruebas de rendimiento y revisión de código antes de cada entrega.",
    tools: ["JUnit", "Jest", "Flutter Test", "Postman", "Thunder Client"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy",
    description:
      "Despliego la aplicación en entornos de producción con CI/CD automatizado. Monitorizo el rendimiento y aplico mejoras continuas basadas en métricas reales.",
    tools: ["Docker", "GitHub Actions", "Vercel", "Firebase", "Supabase"],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-[oklch(0.09_0.005_285)]">
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 03</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Cómo Trabajo
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-xl">
            Un proceso iterativo y metódico que garantiza calidad en cada fase
            del desarrollo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps — staggered reveal */}
          <div className="flex flex-col gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-sm border transition-all duration-300 ${isActive
                    ? "border-[oklch(0.82_0.22_145/0.5)] bg-[oklch(0.12_0.006_285)] shadow-[0_0_20px_oklch(0.82_0.22_145/0.08)]"
                    : "border-[oklch(0.18_0.007_285)] bg-[oklch(0.10_0.005_285)] hover:border-[oklch(0.28_0.008_285)]"
                    }`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`p-2.5 rounded-sm shrink-0 transition-all duration-300 ${isActive
                        ? "bg-[oklch(0.82_0.22_145/0.15)] text-[oklch(0.82_0.22_145)]"
                        : "bg-[oklch(0.15_0.006_285)] text-[oklch(0.45_0.01_285)]"
                        }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="section-number">{step.number}</span>
                        <h3
                          className={`font-display font-bold text-base transition-colors duration-200 ${isActive ? "text-white" : "text-[oklch(0.70_0.01_285)]"
                            }`}
                        >
                          {step.title}
                        </h3>
                      </div>

                      {isActive && (
                        <div className="mt-2">
                          <p className="text-sm text-[oklch(0.60_0.01_285)] leading-relaxed mb-3">
                            {step.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {step.tools.map((tool) => (
                              <span key={tool} className="tech-tag text-[0.65rem]">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-sm overflow-hidden border border-[oklch(0.22_0.008_285)] bg-[oklch(0.08_0.004_285)]">
              <ProcessTerminal activeStep={activeStep} />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[oklch(0.09_0.005_285/0.4)] via-transparent to-transparent" />

              {/* Stats overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-1">
                  {[
                    { value: "5+", label: "Proyectos" },
                    { value: "100%", label: "Dedicación" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display font-extrabold text-2xl neon-text">
                        {stat.value}
                      </div>
                      <div className="text-xs text-[oklch(0.55_0.01_285)] mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative corners */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-[oklch(0.82_0.22_145/0.4)]" />
            <div className="absolute -bottom-2 -left-2 w-16 h-16 border-b-2 border-l-2 border-[oklch(0.82_0.22_145/0.4)]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
