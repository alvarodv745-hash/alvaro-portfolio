import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ExternalLink, ShieldCheck } from "lucide-react";

interface Certification {
  name: string;
  issuer: Issuer;
  hours: number;
  date: string;
  /**
   * OpenWebinars: código de verificación pública (openwebinars.net/cert/{code}).
   * Otros emisores sin verificación online: ruta a la imagen del certificado en /public.
   */
  code?: string;
  file?: string;
  tags?: string[];
}

type Issuer = "OpenWebinars" | "BIG school";

/**
 * Horas = las que muestra la verificación oficial de OpenWebinars (no el PDF descargado:
 * "Agentes de IA Generativa" se emitió con 60 h por error y la web lo corrigió a 6 h).
 */
const certLink = (c: Certification) =>
  c.code ? `https://openwebinars.net/cert/${c.code}` : (c.file ?? "#");

const ow = (name: string, hours: number, date: string, code: string, tags?: string[]): Certification => ({
  name, issuer: "OpenWebinars", hours, date, code, tags,
});

/** Los más técnicos y relevantes para el perfil (se muestran como tarjetas). */
const featured: Certification[] = [
  ow("Agentes de IA Generativa", 6, "Abr 2026", "brgf", ["LangChain", "LangGraph", "RAG", "FastAPI"]),
  {
    name: "Desarrollo con IA: de 0 a Producción",
    issuer: "BIG school",
    hours: 6,
    date: "Mar 2026",
    file: "/certificados/big-school-desarrollo-con-ia.jpg",
    tags: ["Desarrollo con IA", "Producción"],
  },
  ow("Fundamentos de Spring AI", 8, "May 2026", "KvYc", ["Java", "Spring AI"]),
  ow("Integración de Aplicaciones en Flutter con Firebase", 8, "May 2026", "PCrD", ["Flutter", "Firebase"]),
  ow("Prompt Engineering para Desarrolladores", 7, "Abr 2026", "1TV5", ["Prompts", "LLM"]),
  ow("Asistentes de código", 7, "Abr 2026", "fN5v", ["IA", "Productividad"]),
  ow("Fundamentos IA para Desarrolladores", 7, "Abr 2026", "RCbi", ["IA", "Desarrollo"]),
  ow("Integración Eficaz de APIs en IA Generativa", 6, "Abr 2026", "kiEf", ["APIs", "LLM"]),
  ow("Flujo de Trabajo Inteligente: Automatización con n8n en IA", 5, "May 2026", "W2mS", ["n8n", "Automatización"]),
];

/** Resto de cursos completados (lista desplegable). */
const others: Certification[] = [
  ow("Full Stack con IA integrada", 4, "Abr 2026", "yRhm"),
  ow("Fundamentos de la Inteligencia Artificial", 7, "Mar 2026", "LZgZ"),
  ow("Angular Multiplataforma", 8, "May 2026", "STCZ"),
  ow("Introducción a la monitorización de seguridad", 7, "Mar 2026", "0TZv"),
  ow("Servidores Web", 6, "May 2026", "SF9Q"),
  ow("Introducción al procesamiento de datos con NumPy", 6, "May 2026", "Dpq2"),
  ow("Introducción a la Accesibilidad Web", 5, "May 2026", "9IKB"),
  ow("Aprendiendo MCP (Model Context Protocol)", 3, "Mar 2026", "pi1R"),
  ow("Dominando Claude Code: Aplicaciones y Estrategias", 2, "Mar 2026", "HYo6"),
  ow("Descubriendo ChatGPT Atlas y Perplexity Comet", 2, "Abr 2026", "85Wx"),
  ow("Inteligencia Artificial: Introducción", 1, "Mar 2026", "yvow"),
  ow("Introducción a la IA, Machine Learning y Deep Learning", 1, "May 2026", "Qklh"),
  ow("Fundamentos de Machine Learning para empresas", 1, "Mar 2026", "vTg7"),
  ow("La IA Generativa y su impacto en empresas", 1, "May 2026", "NoIp"),
  ow("Ética y Cumplimiento Normativo en IA", 1, "May 2026", "TV1G"),
  ow("Google AI Studio para empresas", 1, "May 2026", "lw8y"),
  ow("NotebookLM para empresas", 1, "Abr 2026", "VvEB"),
  ow("Microsoft 365 Copilot: productividad con IA", 1, "Abr 2026", "pyuM"),
  ow("Domina la IA Visual: de imágenes a vídeo profesional", 1, "Abr 2026", "bYib"),
  ow("IA para Recursos Humanos: estrategia y uso seguro", 1, "May 2026", "I9iH"),
  ow("El manager aumentado: trabajar con Claude", 1, "Jul 2026", "XFK5"),
];

const totalCourses = featured.length + others.length;
const totalHours = [...featured, ...others].reduce((sum, c) => sum + c.hours, 0);
const issuers = Array.from(new Set([...featured, ...others].map((c) => c.issuer)));

export default function CertificationsSection() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="certifications" className="py-24 bg-[oklch(0.07_0.004_285)]">
      <div className="container">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 05</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Certificaciones
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-xl">
            Formación continua centrada en IA aplicada al desarrollo. Los
            certificados de OpenWebinars se pueden verificar en su web oficial.
          </p>

          {/* Summary */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mt-8">
            {[
              { value: totalCourses, label: "cursos completados" },
              { value: `${totalHours} h`, label: "de formación" },
              { value: issuers.length, label: `emisores (${issuers.join(" · ")})` },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-2">
                <span className="font-display font-bold text-2xl text-[oklch(0.82_0.22_145)]">
                  {stat.value}
                </span>
                <span className="font-mono text-xs text-[oklch(0.50_0.01_285)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
          {featured.map((cert, idx) => (
            <motion.article
              key={cert.name}
              className="card-glow group border border-[oklch(0.18_0.007_285)] bg-[oklch(0.12_0.006_285)] rounded-sm p-6 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 24px oklch(0.82 0.22 145 / 0.18)",
                borderColor: "oklch(0.82 0.22 145 / 0.4)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <Award size={16} className="text-[oklch(0.82_0.22_145)]" />
                <span className="font-mono text-[0.65rem] text-[oklch(0.82_0.22_145)] px-2 py-0.5 rounded-sm border border-[oklch(0.82_0.22_145/0.3)] bg-[oklch(0.82_0.22_145/0.06)]">
                  {cert.hours} h
                </span>
              </div>

              <h3 className="font-display font-bold text-white text-base leading-snug mb-2">
                {cert.name}
              </h3>

              <p className="font-mono text-xs text-[oklch(0.45_0.01_285)] mb-4">
                {cert.issuer} — {cert.date}
              </p>

              {cert.tags && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {cert.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.65rem] px-2 py-0.5 rounded-sm border border-[oklch(0.22_0.008_285)] text-[oklch(0.65_0.01_285)] bg-[oklch(0.10_0.005_285)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <a
                href={certLink(cert)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 self-start font-mono text-xs text-[oklch(0.60_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
                aria-label={`${cert.code ? "Verificar" : "Ver"} certificado: ${cert.name}`}
              >
                {cert.code ? <ShieldCheck size={13} /> : <Award size={13} />}
                {cert.code ? "Verificar" : "Ver certificado"}
                <ExternalLink size={11} />
              </a>
            </motion.article>
          ))}
        </div>

        {/* All certificates toggle */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            aria-controls="all-certifications"
            className="btn-neon px-8 py-3 rounded-sm text-sm"
          >
            <span className="flex items-center gap-2">
              {showAll ? "Ocultar" : `Ver los ${totalCourses} certificados`}
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              />
            </span>
          </button>

          <AnimatePresence initial={false}>
            {showAll && (
              <motion.ul
                id="all-certifications"
                className="w-full mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-[oklch(0.15_0.006_285)] overflow-hidden"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {others.map((cert) => (
                  <li key={cert.name} className="border-b border-[oklch(0.15_0.006_285)]">
                    <a
                      href={certLink(cert)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-3"
                    >
                      <span className="text-sm text-[oklch(0.70_0.01_285)] group-hover:text-white transition-colors duration-200">
                        {cert.name}
                      </span>
                      <span className="flex items-center gap-2 shrink-0 font-mono text-[0.65rem] text-[oklch(0.45_0.01_285)] group-hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200">
                        {cert.hours} h · {cert.date}
                        <ExternalLink size={11} />
                      </span>
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
