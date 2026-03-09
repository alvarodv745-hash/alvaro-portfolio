/*
 * SLATE ARCHITECT — Hero Section
 * Pantalla completa, nombre en display grande, stack de iconos
 * Fondo con imagen generada + overlay oscuro + grid sutil
 */
import { useEffect, useState } from "react";
import { Github, Download, ArrowDown, ExternalLink, Terminal } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409244183/gDgPsEnWTTNS5RbR5A8hnT/hero-bg-UYKMePmPr9B43D6hXBr8dE.webp";

const techStack = [
  { name: "React", emoji: "⚛" },
  { name: "Flutter", emoji: "◈" },
  { name: "Python", emoji: "Py" },
  { name: "Java", emoji: "☕" },
  { name: "Node.js", emoji: "⬡" },
  { name: "MySQL", emoji: "DB" },
  { name: "TypeScript", emoji: "TS" },
  { name: "Docker", emoji: "🐳" },
];

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(startDelay);
  }, []);

  useEffect(() => {
    if (!started) return;
    if (idx < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx]);
        setIdx((prev) => prev + 1);
      }, 55);
      return () => clearTimeout(timeout);
    }
  }, [idx, text, started]);

  return (
    <span>
      {displayed}
      <span className="animate-blink text-[oklch(0.82_0.22_145)]">|</span>
    </span>
  );
}

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.09_0.005_285/0.75)] via-[oklch(0.09_0.005_285/0.80)] to-[oklch(0.09_0.005_285/0.95)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.09_0.005_285/0.6)] via-transparent to-transparent" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.82_0.22_145) 1px, transparent 1px), linear-gradient(90deg, oklch(0.82_0.22_145) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Neon glow accent bottom-left */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, oklch(0.82_0.22_145 / 0.4) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Main content */}
          <div className="lg:col-span-8">
            {/* Terminal badge */}
            <div
              className={`inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-sm border border-[oklch(0.82_0.22_145/0.25)] bg-[oklch(0.82_0.22_145/0.05)] transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Terminal size={12} className="text-[oklch(0.82_0.22_145)]" />
              <span className="font-mono text-xs text-[oklch(0.82_0.22_145)] tracking-wider">
                portfolio.tsx
              </span>
              <span className="font-mono text-xs text-[oklch(0.45_0.01_285)]">— Álvaro Durán Valor</span>
            </div>

            {/* Name */}
            <h1
              className={`font-display font-extrabold leading-[0.9] tracking-tight mb-6 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              <span className="text-white block">Álvaro</span>
              <span className="text-white block">Durán</span>
              <span
                className="block"
                style={{
                  color: "oklch(0.82 0.22 145)",
                  textShadow: "0 0 40px oklch(0.82 0.22 145 / 0.35)",
                }}
              >
                Valor
              </span>
            </h1>

            {/* Subtitle */}
            <div
              className={`mb-5 transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="font-display text-xl md:text-2xl font-semibold text-[oklch(0.72_0.01_285)]">
                <TypewriterText text="Desarrollador de Aplicaciones Multiplataforma" />
              </p>
            </div>

            {/* Description */}
            <p
              className={`text-[oklch(0.58_0.01_285)] text-base md:text-lg max-w-2xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Construyo aplicaciones web y móviles con foco en rendimiento,
              experiencia de usuario y código limpio. Apasionado por las nuevas
              tecnologías y el desarrollo de soluciones reales.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 mb-12 transition-all duration-700 delay-400 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={() => handleScroll("projects")}
                className="btn-neon px-7 py-3.5 rounded-sm text-sm font-semibold flex items-center gap-2"
              >
                <span className="flex items-center gap-2">
                  <ExternalLink size={14} />
                  Ver proyectos
                </span>
              </button>

              <a
                href="/cv-alvaro-duran.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-sm text-sm font-medium border border-[oklch(0.28_0.008_285)] text-[oklch(0.70_0.01_285)] hover:border-white hover:text-white transition-all duration-200"
              >
                <Download size={14} />
                Descargar CV
              </a>

              <a
                href="https://github.com/alvaroduranvalor"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 rounded-sm text-sm font-medium border border-[oklch(0.20_0.007_285)] text-[oklch(0.50_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-all duration-200"
              >
                <Github size={15} />
                GitHub
              </a>
            </div>

            {/* Tech stack pills */}
            <div
              className={`transition-all duration-700 delay-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="font-mono text-xs text-[oklch(0.40_0.01_285)] mb-3 tracking-wider uppercase">
                Stack principal
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-[oklch(0.20_0.007_285)] bg-[oklch(0.12_0.006_285/0.7)] hover:border-[oklch(0.82_0.22_145/0.35)] hover:bg-[oklch(0.82_0.22_145/0.05)] transition-all duration-200 group cursor-default"
                    style={{
                      transitionDelay: `${500 + i * 40}ms`,
                      opacity: visible ? 1 : 0,
                      transform: visible ? "scale(1)" : "scale(0.9)",
                    }}
                  >
                    <span className="font-mono text-[0.65rem] font-medium text-[oklch(0.82_0.22_145)] group-hover:text-white transition-colors duration-200">
                      {tech.emoji}
                    </span>
                    <span className="font-mono text-xs text-[oklch(0.52_0.01_285)] group-hover:text-[oklch(0.75_0.01_285)] transition-colors duration-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Decorative stats card */}
          <div
            className={`hidden lg:flex lg:col-span-4 justify-end transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="border border-[oklch(0.22_0.008_285)] bg-[oklch(0.12_0.006_285/0.8)] backdrop-blur-sm rounded-sm p-6 w-64">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 rounded-full bg-[oklch(0.82_0.22_145)] animate-pulse-neon" />
                  <span className="font-mono text-xs text-[oklch(0.55_0.01_285)]">status.json</span>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    { label: "Estado", value: "Disponible", accent: true },
                    { label: "Ubicación", value: "España" },
                    { label: "Experiencia", value: "2+ años" },
                    { label: "Proyectos", value: "10+ completados" },
                    { label: "Especialidad", value: "Multiplataforma" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-start gap-2">
                      <span className="font-mono text-xs text-[oklch(0.40_0.01_285)]">
                        {item.label}:
                      </span>
                      <span
                        className={`font-mono text-xs text-right ${
                          item.accent
                            ? "text-[oklch(0.82_0.22_145)]"
                            : "text-[oklch(0.72_0.01_285)]"
                        }`}
                      >
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[oklch(0.18_0.007_285)]">
                  <div className="font-mono text-[0.65rem] text-[oklch(0.35_0.01_285)]">
                    <span className="text-[oklch(0.82_0.22_145)]">const</span>{" "}
                    <span className="text-white">dev</span>{" "}
                    <span className="text-[oklch(0.55_0.01_285)]">= </span>
                    <span className="text-[oklch(0.82_0.22_145)]">&#123;</span>
                    <br />
                    <span className="pl-3 text-[oklch(0.55_0.01_285)]">passion: </span>
                    <span className="text-[oklch(0.72_0.01_285)]">"∞"</span>
                    <br />
                    <span className="text-[oklch(0.82_0.22_145)]">&#125;</span>
                  </div>
                </div>
              </div>

              {/* Corner decorations */}
              <div className="absolute -top-2 -right-2 w-12 h-12 border-t-2 border-r-2 border-[oklch(0.82_0.22_145/0.4)]" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-2 border-l-2 border-[oklch(0.82_0.22_145/0.4)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll("stack")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.35_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200 animate-float"
      >
        <span className="text-[0.65rem] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
