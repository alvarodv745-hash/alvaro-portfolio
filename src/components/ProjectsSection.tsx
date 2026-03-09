/*
 * SLATE ARCHITECT — Projects Section
 * Grid de proyectos destacados con tarjetas interactivas
 * Versión simplificada sin filtros
 */
import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const PROJ_1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409244183/gDgPsEnWTTNS5RbR5A8hnT/project-preview-1-i5yf3YNM3k79sPHADBqj8u.webp";
const PROJ_2 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409244183/gDgPsEnWTTNS5RbR5A8hnT/project-preview-2-fG4X9fnCbiRJge9RPeJ35K.webp";
const PROJ_3 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409244183/gDgPsEnWTTNS5RbR5A8hnT/project-preview-3-AHXSraLB4PHNV86zkuK97c.webp";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demo?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard Analytics",
    description:
      "Panel de control con visualización de datos en tiempo real, gráficas interactivas y gestión de métricas para equipos de desarrollo.",
    image: PROJ_1,
    tags: ["React", "TypeScript", "Recharts", "Node.js"],
    category: "Web",
    demo: "#",
    repo: "#",
  },
  {
    id: 2,
    title: "TaskFlow Mobile",
    description:
      "Aplicación móvil de gestión de tareas con sincronización en la nube, notificaciones push y modo offline para Android e iOS.",
    image: PROJ_2,
    tags: ["Flutter", "Dart", "Firebase", "Provider"],
    category: "Móvil",
    demo: "#",
    repo: "#",
  },
  {
    id: 3,
    title: "API REST E-Commerce",
    description:
      "API REST completa para plataforma de comercio electrónico con autenticación JWT, documentación Swagger y tests unitarios.",
    image: PROJ_3,
    tags: ["Java", "Spring Boot", "MySQL", "Docker"],
    category: "Backend",
    demo: "#",
    repo: "#",
  },
];

function ProjectCard({ project, visible }: { project: Project; visible: boolean }) {
  return (
    <article
      className="group card-glow rounded-sm bg-[oklch(0.12_0.006_285)] overflow-hidden flex flex-col"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
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
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-[oklch(0.82_0.22_145)] text-[oklch(0.09_0.005_285)] text-xs font-semibold rounded-sm hover:bg-white transition-colors duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={12} />
              Demo
            </a>
          )}
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
    </article>
  );
}

export default function ProjectsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section
      id="projects"
      className="py-24 bg-[oklch(0.07_0.004_285)]"
      ref={ref}
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12">
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
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              <ProjectCard project={project} visible={visible} />
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://github.com/alvaroduranvalor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 btn-neon px-8 py-3 rounded-sm text-sm"
          >
            <span className="flex items-center gap-2">
              <Github size={15} />
              Ver todos en GitHub
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
