/*
 * SLATE ARCHITECT — Footer
 * Pie de página minimalista con links y copyright
 */
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[oklch(0.07_0.004_285)] border-t border-[oklch(0.15_0.006_285)]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-lg text-white">
              <span className="neon-text">&lt;</span>
              ADV
              <span className="neon-text">/&gt;</span>
            </span>
            <span className="text-xs text-[oklch(0.40_0.01_285)] font-mono">
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
                  className="text-xs text-[oklch(0.45_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
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
              className="text-[oklch(0.40_0.01_285)] hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/alvaroduranvalor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[oklch(0.40_0.01_285)] hover:text-[#0A66C2] transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:alvaro@duranvalor.dev"
              className="text-[oklch(0.40_0.01_285)] hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <div className="w-px h-4 bg-[oklch(0.22_0.008_285)]" />

            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-sm border border-[oklch(0.22_0.008_285)] text-[oklch(0.40_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-all duration-200"
              aria-label="Volver arriba"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-[oklch(0.12_0.005_285)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[oklch(0.35_0.01_285)] font-mono">
            © {new Date().getFullYear()} Álvaro Durán Valor. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[oklch(0.30_0.01_285)] font-mono">
            Diseñado & desarrollado con{" "}
            <span className="neon-text">♥</span>{" "}
            usando React + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
