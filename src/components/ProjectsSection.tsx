import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const PROJ_1 = "/Logo_LyricBeats.png";
const PROJ_2 = "/Panel_tarjetasRegalo.png";
const PROJ_3 = "/Interfaz-sistema-biblioteca.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  repo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "LyricBeats",
    description:
      "Aplicación web, diseñada como herramienta de creación musical, para generar letras de canciones con inteligencia artificial y melodías básicas.",
    image: PROJ_1,
    tags: ["React + Vite", "JavaScript", "GroqAI", "Firebase"],
    category: "Web App",
    repo: "https://github.com/alvarodv745-hash/lyricbeats-tfg",
  },
  {
    id: 2,
    title: "Generador de Código de Barras",
    description:
      "Panel web interno para crear, consultar y gestionar tarjetas regalo con códigos de barras, historial de movimientos y control de saldo en tiempo real.",
    image: PROJ_2,
    tags: ["Python", "JavaScript", "Firebase"],
    category: "PWA",
    repo: "#",
  },
  {
    id: 3,
    title: "Sistema Biblioteca ",
    description:
      "Sistema cliente‑servidor para gestionar biblioteca mediante API REST en PHP/MySQL y cliente en Python con Tkinter, escáner QR y control de préstamos y usuarios.",
    image: PROJ_3,
    tags: ["XAMPP", "Python", "PHP", "REST API", "Tkinter", "MySQL"],
    category: "Backend App",
    repo: "https://github.com/alvarodv745-hash/sistema-biblioteca",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    /*
     * V1.2 hover polish:
     * - scale 1.02 on hover via whileHover
     * - green glow box-shadow via CSS transition (respects .card-glow)
     * - square corners kept (rounded-sm)
     * - transition duration-300
     */
    <motion.article
      className="group card-glow rounded-sm bg-[oklch(0.12_0.006_285)] overflow-hidden flex flex-col cursor-default"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 28px oklch(0.82 0.22 145 / 0.18), 0 0 0 1px oklch(0.82 0.22 145 / 0.30)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[oklch(0.09_0.005_285/0.4)] group-hover:bg-[oklch(0.09_0.005_285/0.2)] transition-all duration-300" />

        {/* Category badge */}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-[0.65rem] px-2 py-1 rounded-sm bg-[oklch(0.09_0.005_285/0.8)] text-[oklch(0.55_0.01_285)] border border-[oklch(0.22_0.008_285)]">
            {project.category}
          </span>
        </div>

        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-[oklch(0.12_0.006_285/0.9)] border border-[oklch(0.82_0.22_145/0.5)] text-[oklch(0.82_0.22_145)] text-xs font-semibold rounded-sm hover:bg-[oklch(0.82_0.22_145/0.1)] transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={12} />
              Repo
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-bold text-white text-lg leading-tight group-hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200">
            {project.title}
          </h3>
          <ArrowUpRight
            size={16}
            className="text-[oklch(0.35_0.01_285)] group-hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200 shrink-0 mt-0.5"
          />
        </div>

        <p className="text-[oklch(0.55_0.01_285)] text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tech-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[oklch(0.07_0.004_285)]">
      <div className="container">
        {/* Header — fade in from below */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 02</span>
            <div className="neon-line w-12" />
          </div>
          <div>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-3">
              Proyectos Destacados
            </h2>
            <p className="text-[oklch(0.55_0.01_285)] text-base max-w-lg">
              Selección de proyectos reales que demuestran mis habilidades
              técnicas y capacidad de resolución de problemas.
            </p>
          </div>
        </motion.div>

        {/* Grid — staggered reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/alvarodv745-hash?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-neon px-8 py-3 rounded-sm text-sm"
          >
            <span className="flex items-center gap-2">
              <Github size={15} />
              Ver todos en GitHub
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
