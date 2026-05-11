import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Code2, Target, Zap, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  impact: string;
  category: "Web" | "PWA" | "Desktop";
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "LyricBeats",
    category: "Web",
    problem:
      "Crear letras musicales con IA y sincronizarlas con beats era un proceso manual y fragmentado. Los productores necesitaban herramientas separadas para componer letras, crear bases rítmicas y reproducir el resultado. No existía una plataforma que unificara IA generativa, edición de beats y reproducción sincronizada en un solo flujo de trabajo.",
    solution:
      "Desarrollé una plataforma web full-stack que integra Groq API (LLaMA 3.1 8B) para generación de letras con IA, un secuenciador de beats de 16 pasos × 6 instrumentos construido sobre Web Audio API, y sincronización en tiempo real entre letra e instrumentación. Firebase gestiona autenticación y persistencia de proyectos musicales.",
    technologies: ["React 19", "Groq API", "Firebase", "Tailwind CSS"],
    result:
      "Plataforma funcional que unifica IA generativa y producción musical en un solo flujo de trabajo. Los usuarios generan letras, crean beats y escuchan el resultado sin salir de la aplicación.",
    impact: "Herramienta usable por músicos sin conocimientos técnicos, stack moderno de producción",
  },
  {
    id: 2,
    title: "Panel Tarjetas Regalo",
    category: "PWA",
    problem:
      "La gestión manual de tarjetas regalo generaba errores frecuentes en saldos sin trazabilidad de movimientos. Sin historial de transacciones ni códigos de barras estandarizados, era imposible auditar consumos. Los procesos de canje se hacían en papel, con riesgo de duplicados y pérdida de datos.",
    solution:
      "Desarrollé una PWA con Vanilla JS y Firebase Firestore que gestiona tarjetas con formato GC-XXXXXXXX, genera códigos de barras CODE128 con JsBarcode y registra cada movimiento de carga y consumo con historial inmutable. Permite descargar etiquetas térmicas e instalarse como app nativa sin tienda de aplicaciones.",
    technologies: ["Vanilla JS", "Firebase", "JsBarcode", "PWA", "HTML/CSS"],
    result:
      "Sistema de control completo con historial inmutable de movimientos, generación automática de códigos de barras y trazabilidad total de cada tarjeta desde su creación.",
    impact: "Eliminación de errores manuales, auditoría completa de transacciones, instalable como app nativa",
  },
  {
    id: 3,
    title: "Sistema de Biblioteca",
    category: "Desktop",
    problem:
      "La gestión de libros, préstamos y usuarios se realizaba sin automatización ni control de roles. No había visibilidad de disponibilidad en tiempo real y los retrasos en devoluciones no se detectaban automáticamente, generando pérdida de inventario y procesos ineficientes para el personal bibliotecario.",
    solution:
      "Construí una arquitectura cliente-servidor completa: API REST en PHP con MySQL que usa triggers automáticos para controlar disponibilidad, cliente de escritorio Python con Tkinter, sistema de roles Bibliotecario/Lector con autenticación, y módulo QR para identificar libros y usuarios mediante webcam.",
    technologies: ["PHP", "MySQL", "Python", "Tkinter", "REST API"],
    result:
      "Sistema integral con control de inventario en tiempo real, detección automática de préstamos retrasados y escaneo QR para agilizar el ciclo completo de préstamo y devolución.",
    impact: "Automatización completa del ciclo préstamo-devolución, trazabilidad total, cero errores manuales",
  },
];

interface ExpandedState {
  [key: number]: boolean;
}

function getCategoryColor(category: string): string {
  switch (category) {
    case "Web":
      return "text-blue-400";
    case "PWA":
      return "text-purple-400";
    case "Desktop":
      return "text-green-400";
    default:
      return "text-gray-400";
  }
}

export default function CaseStudiesSection() {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const toggleExpanded = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="case-studies" className="py-24 bg-[oklch(0.09_0.005_285)]">
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
            <span className="section-number">// 04</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Casos de Estudio
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-2xl">
            Proyectos reales donde he aplicado distintas tecnologías para
            resolver problemas concretos. Cada caso muestra el problema,
            la solución técnica y el resultado final.
          </p>
        </motion.div>

        {/* Case Studies Grid — 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => {
            const isExpanded = expanded[study.id];
            return (
              <motion.div
                key={study.id}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="relative h-full">
                  {/* Card */}
                  <div
                    className={`border border-[oklch(0.18_0.007_285)] bg-[oklch(0.12_0.006_285)] rounded-sm p-6 transition-all duration-300 cursor-pointer ${isExpanded
                      ? "border-[oklch(0.82_0.22_145/0.4)] bg-[oklch(0.15_0.007_285)]"
                      : "hover:border-[oklch(0.22_0.008_285)] hover:bg-[oklch(0.13_0.006_285)]"
                      }`}
                    onClick={() => toggleExpanded(study.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-mono font-semibold px-2 py-1 rounded-sm border ${getCategoryColor(
                              study.category
                            )} border-current/30 bg-current/5`}
                          >
                            {study.category}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                          {study.title}
                        </h3>
                      </div>
                      <button
                        aria-label={isExpanded ? "Cerrar" : "Expandir"}
                        className={`p-1.5 rounded-sm border border-[oklch(0.22_0.008_285)] text-[oklch(0.50_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-all duration-200 flex-shrink-0 ${isExpanded ? "border-[oklch(0.82_0.22_145/0.4)] text-[oklch(0.82_0.22_145)]" : ""
                          }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(study.id);
                        }}
                      >
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>
                    </div>

                    {/* Problem — always visible */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={14} className="text-[oklch(0.82_0.22_145)]" />
                        <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                          Problema
                        </span>
                      </div>
                      <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="space-y-4 pt-4 border-t border-[oklch(0.18_0.007_285)]">
                            {/* Solution */}
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Zap size={14} className="text-[oklch(0.82_0.22_145)]" />
                                <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                                  Solución
                                </span>
                              </div>
                              <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed">
                                {study.solution}
                              </p>
                            </div>

                            {/* Technologies */}
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Code2 size={14} className="text-[oklch(0.82_0.22_145)]" />
                                <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                                  Tecnologías
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {study.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 py-1 rounded-sm text-xs font-mono bg-[oklch(0.82_0.22_145/0.08)] text-[oklch(0.82_0.22_145)] border border-[oklch(0.82_0.22_145/0.2)]"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Result */}
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <TrendingUp size={14} className="text-[oklch(0.82_0.22_145)]" />
                                <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                                  Resultado
                                </span>
                              </div>
                              <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed mb-3">
                                {study.result}
                              </p>
                              <div className="p-3 rounded-sm bg-[oklch(0.82_0.22_145/0.05)] border border-[oklch(0.82_0.22_145/0.15)]">
                                <p className="font-mono text-xs text-[oklch(0.82_0.22_145)]">
                                  <span className="text-[oklch(0.55_0.01_285)]">→ Impacto: </span>
                                  {study.impact}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[oklch(0.82_0.22_145/0)] via-[oklch(0.82_0.22_145/0.1)] to-[oklch(0.82_0.22_145/0)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{ filter: "blur(8px)" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-12 border-t border-[oklch(0.15_0.006_285)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-[oklch(0.45_0.01_285)] text-sm text-center">
            ¿Tienes un proyecto en mente? Estoy disponible para nuevos
            desarrollos y colaboraciones.{" "}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[oklch(0.82_0.22_145)] hover:underline transition-colors duration-200"
            >
              Hablemos
            </button>
          </p>
        </motion.div>
      </div>
    </section>
  );
}