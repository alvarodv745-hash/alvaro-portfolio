import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@alvarodv745",
    href: "https://github.com/alvarodv745-hash",
    color: "hover:text-white",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Álvaro Durán Valor",
    href: "https://www.linkedin.com/in/álvaro-durán-valor",
    color: "hover:text-[#0A66C2]",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "alvarodv745@gmail.com",
    href: "mailto:alvarodv745@gmail.com",
    color: "hover:text-[oklch(0.82_0.22_145)]",
  },
];

// Formulario con Formspree integrado en el componente



interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mjgljrqv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (res.ok) {
        setSent(true);
        toast.success("¡Mensaje enviado! Te responderé lo antes posible.");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      } else {
        toast.error("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch (error) {
      toast.error("Error de conexión. Revisa tu internet.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[oklch(0.09_0.005_285)]">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <form action="https://formspree.io/f/mjgljrqv" method="POST" onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input type="text" name="_gotcha" style={{ display: "none" }} />
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[oklch(0.65_0.01_285)] tracking-wider uppercase">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.25_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-mono text-[oklch(0.65_0.01_285)] tracking-wider uppercase">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.25_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-mono text-[oklch(0.65_0.01_285)] tracking-wider uppercase">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  rows={6}
                  className="bg-[oklch(0.12_0.006_285)] border border-[oklch(0.25_0.008_285)] rounded-sm px-4 py-3 text-sm text-white placeholder-[oklch(0.35_0.01_285)] focus:outline-none focus:border-[oklch(0.82_0.22_145/0.6)] focus:ring-1 focus:ring-[oklch(0.82_0.22_145/0.2)] transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || sent}
                className={`btn-neon px-8 py-3.5 rounded-sm text-sm font-medium flex items-center justify-center gap-2 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed ${sent ? "border-[oklch(0.82_0.22_145)] text-[oklch(0.82_0.22_145)]" : ""
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
          </motion.div>

          {/* Social links */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
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
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 p-4 rounded-sm border border-[oklch(0.18_0.007_285)] bg-[oklch(0.12_0.006_285)] hover:border-[oklch(0.30_0.008_285)] transition-all duration-200 ${social.color}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2 rounded-sm bg-[oklch(0.16_0.007_285)] group-hover:bg-[oklch(0.20_0.008_285)] transition-colors duration-200">
                      <Icon size={18} className="text-[oklch(0.65_0.01_285)] group-hover:text-current transition-colors duration-200" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">{social.label}</div>
                      <div className="text-xs text-[oklch(0.50_0.01_285)] font-mono">{social.handle}</div>
                    </div>
                  </motion.a>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
