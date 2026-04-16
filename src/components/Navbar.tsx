/*
 * SLATE ARCHITECT — Navbar
 * Navegación fija con indicador de sección activa y efecto blur
 * V1.2: glassmorphism polish — stronger blur, border reacts to scroll, shadow
 */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Stack", href: "#stack" },
  { label: "Proyectos", href: "#projects" },
  { label: "Proceso", href: "#process" },
  { label: "Casos", href: "#case-studies" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        /**
         * V1.2 glassmorphism:
         * - Always has a dark semi-transparent base (prevents white flicker)
         * - Blur increases from 12px → 20px on scroll
         * - Border goes from invisible → visible on scroll
         * - Shadow appears only when scrolled
         */
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(12px)",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "blur(12px)",
        backgroundColor: scrolled
          ? "oklch(0.09 0.005 285 / 0.92)"
          : "oklch(0.09 0.005 285 / 0.55)",
        borderBottom: scrolled
          ? "1px solid oklch(0.28 0.009 285 / 0.70)"
          : "1px solid oklch(0.22 0.008 285 / 0.20)",
        boxShadow: scrolled
          ? "0 4px 30px oklch(0 0 0 / 0.40), 0 1px 0 oklch(0.82 0.22 145 / 0.06)"
          : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="font-display font-bold text-lg tracking-tight text-white hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
          >
            <span className="neon-text">&lt;</span>
            ADV
            <span className="neon-text">/&gt;</span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-sm relative ${
                      isActive
                        ? "text-[oklch(0.82_0.22_145)]"
                        : "text-[oklch(0.65_0.01_285)] hover:text-white"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-px bg-[oklch(0.82_0.22_145)]" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="hidden md:flex btn-neon px-5 py-2 text-sm rounded-sm"
          >
            <span>Contactar</span>
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-b border-[oklch(0.22_0.008_285)]"
          style={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            backgroundColor: "oklch(0.09 0.005 285 / 0.97)",
          }}
        >
          <ul className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm text-[oklch(0.65_0.01_285)] hover:text-white hover:bg-[oklch(0.15_0.006_285)] transition-all duration-150 rounded-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
