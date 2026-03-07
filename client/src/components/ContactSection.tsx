/*
 * SLATE ARCHITECT — Contact Section
 * Formulario de contacto + links sociales
 */
import { useState, useRef, useEffect } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@alvaroduranvalor",
    href: "https://github.com/alvaroduranvalor",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Álvaro Durán Valor",
    href: "https://linkedin.com/in/alvaroduranvalor",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "alvaro@duranvalor.dev",
    href: "mailto:alvaro@duranvalor.dev",
    color: "hover:text-[oklch(0.82_0.22_145)]",
  },
];

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Por favor, introduce un email válido.");
      return;
    }

    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    toast.success("¡Mensaje enviado! Te responderé lo antes posible.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-[oklch(0.09_0.005_285)]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 05</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Hablemos
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-xl">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy disponible
            para nuevas oportunidades y colaboraciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div
            className="lg:col-span-3"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.22_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.22_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={6}
                  className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.22_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || sent}
                className={`btn-neon px-8 py-3.5 rounded-sm text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed ${
                  sent ? "border-[oklch(0.82_0.22_145)] text-[oklch(0.82_0.22_145)]" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {sending ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : sent ? (
                    <>
                      <CheckCircle size={15} />
                      ¡Enviado!
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Enviar mensaje
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Social links */}
          <div
            className="lg:col-span-2 flex flex-col gap-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            <div>
              <h3 className="font-display font-bold text-white text-xl mb-2">
                Conecta conmigo
              </h3>
              <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed">
                También puedes encontrarme en estas plataformas. Respondo en
                menos de 24 horas.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-sm border border-[oklch(0.18_0.007_285)] bg-[oklch(0.12_0.006_285)] hover:border-[oklch(0.30_0.008_285)] transition-all duration-200 ${social.color}`}
                  >
                    <div className="p-2 rounded-sm bg-[oklch(0.16_0.007_285)] group-hover:bg-[oklch(0.20_0.008_285)] transition-colors duration-200">
                      <Icon size={18} className="text-[oklch(0.65_0.01_285)] group-hover:text-current transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{social.label}</div>
                      <div className="text-xs text-[oklch(0.50_0.01_285)] font-mono">{social.handle}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Availability badge */}
            <div className="mt-4 p-4 rounded-sm border border-[oklch(0.82_0.22_145/0.2)] bg-[oklch(0.82_0.22_145/0.04)]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[oklch(0.82_0.22_145)] animate-pulse-neon" />
                <span className="text-sm font-semibold text-[oklch(0.82_0.22_145)]">
                  Disponible
                </span>
              </div>
              <p className="text-xs text-[oklch(0.52_0.01_285)]">
                Abierto a nuevas oportunidades laborales y proyectos freelance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
