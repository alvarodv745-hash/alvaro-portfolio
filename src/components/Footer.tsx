/*
 * SLATE ARCHITECT — Footer
 * Pie de página minimalista con links y copyright
 * V1.2: animated gradient neon scan line at top edge
 */
import { Github, Linkedin, Mail, ArrowUp, Atom, Wind } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[oklch(0.07_0.004_285)] border-t border-[oklch(0.15_0.006_285)] overflow-hidden">
      {/* V1.2 — Animated neon scan line: subtle green gradient that sweeps left→right */}
      <motion.div
        aria-hidden="true"
        className="absolute top-0 left-0 h-px pointer-events-none"
        style={{
          width: "40%",
          background:
            "linear-gradient(90deg, transparent 0%, oklch(0.82 0.22 145 / 0.7) 50%, transparent 100%)",
        }}
        animate={{ x: ["0%", "160%", "0%"] }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-lg text-white">
              <span className="neon-text">&lt;</span>
              ADV
              <span className="neon-text">/&gt;</span>
            </span>
            <span className="text-xs text-[oklch(0.65_0.01_285)] font-mono">
              Álvaro Durán Valor
            </span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Inicio", "Stack", "Proyectos", "Proceso", "Casos", "Contacto"].map((item) => {
              const idMap: Record<string, string> = {
                "Inicio": "hero",
                "Stack": "stack",
                "Proyectos": "projects",
                "Proceso": "process",
                "Casos": "case-studies",
                "Contacto": "contact",
              };
              return (
                <button
                  key={item}
                  onClick={() => {
                    const id = idMap[item];
                    const el = document.getElementById(id);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs text-[oklch(0.65_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
                >
                  {item}
                </button>
              );
            })}
          </nav>

          {/* Social + scroll top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/alvaroduranvalor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.55_0.01_285)] hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/alvaroduranvalor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.55_0.01_285)] hover:text-[#0A66C2] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:alvaro@duranvalor.dev"
              className="text-[oklch(0.55_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <div className="w-px h-4 bg-[oklch(0.22_0.008_285)]" />

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-sm border border-[oklch(0.22_0.008_285)] text-[oklch(0.55_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-all duration-200"
              aria-label="Volver arriba"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[oklch(0.12_0.005_285)] flex flex-col sm:flex-row items-center justify-between gap-y-4 gap-x-2 text-center sm:text-left">
          <p className="text-xs text-[oklch(0.55_0.01_285)] font-mono">
            © {new Date().getFullYear()} Álvaro Durán Valor. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[oklch(0.60_0.01_285)] font-mono flex items-center justify-center sm:justify-end gap-1.5 flex-wrap">
            Desarrollado para un alto rendimiento, construido con
            <Atom size={12} className="text-[oklch(0.82_0.22_145)] ml-0.5" aria-label="React" />
            <span>+</span>
            <Wind size={12} className="text-[oklch(0.82_0.22_145)]" aria-label="Tailwind" />
          </p>
        </div>
      </div>
    </footer>
  );
}
