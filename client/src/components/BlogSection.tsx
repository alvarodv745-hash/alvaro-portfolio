/*
 * SLATE ARCHITECT — Blog Section
 * Artículos técnicos en layout editorial con fecha y categoría
 */
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Clean Architecture en Flutter: Separando capas para escalar",
    excerpt:
      "Cómo estructurar proyectos Flutter usando Clean Architecture para mantener el código mantenible, testeable y escalable a largo plazo.",
    date: "Feb 2025",
    readTime: "8 min",
    category: "Arquitectura",
    tags: ["Flutter", "Clean Architecture", "SOLID"],
    featured: true,
  },
  {
    id: 2,
    title: "De REST a GraphQL: ¿Cuándo hacer el cambio?",
    excerpt:
      "Análisis práctico de las diferencias entre REST y GraphQL, con casos de uso reales y criterios para elegir la mejor opción según el proyecto.",
    date: "Ene 2025",
    readTime: "6 min",
    category: "Backend",
    tags: ["GraphQL", "REST", "API Design"],
    featured: true,
  },
  {
    id: 3,
    title: "TypeScript avanzado: Tipos condicionales y utilidades",
    excerpt:
      "Explorando las características más potentes del sistema de tipos de TypeScript para escribir código más seguro y expresivo.",
    date: "Dic 2024",
    readTime: "10 min",
    category: "Frontend",
    tags: ["TypeScript", "Types", "Advanced"],
  },
  {
    id: 4,
    title: "Docker para desarrolladores: De cero a producción",
    excerpt:
      "Guía práctica para contenedorizar aplicaciones con Docker y Docker Compose, desde el entorno de desarrollo hasta el despliegue.",
    date: "Nov 2024",
    readTime: "12 min",
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containers"],
  },
  {
    id: 5,
    title: "Estado global en React: Context vs Zustand vs Redux",
    excerpt:
      "Comparativa honesta de las principales soluciones de gestión de estado en React, con ejemplos prácticos y criterios de selección.",
    date: "Oct 2024",
    readTime: "7 min",
    category: "Frontend",
    tags: ["React", "State Management", "Zustand"],
  },
];

function ArticleCard({ article, idx, visible }: { article: Article; idx: number; visible: boolean }) {
  return (
    <article
      className="group card-glow rounded-sm bg-[oklch(0.12_0.006_285)] p-6 flex flex-col gap-4 cursor-pointer"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${idx * 80}ms, transform 0.5s ease ${idx * 80}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {/* Meta */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-[oklch(0.82_0.22_145/0.08)] border border-[oklch(0.82_0.22_145/0.2)] text-[oklch(0.82_0.22_145)] text-[0.65rem]">
            {article.category}
          </span>
          {article.featured && (
            <span className="font-mono text-[0.6rem] text-[oklch(0.55_0.01_285)]">
              ★ Destacado
            </span>
          )}
        </div>
        <ArrowUpRight
          size={15}
          className="text-[oklch(0.30_0.01_285)] group-hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200"
        />
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-[oklch(0.82_0.22_145)] transition-colors duration-200 line-clamp-2">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed line-clamp-3 flex-1">
        {article.excerpt}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {article.tags.map((tag) => (
          <span key={tag} className="tech-tag text-[0.6rem]">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center gap-4 pt-3 border-t border-[oklch(0.18_0.007_285)]">
        <div className="flex items-center gap-1.5 text-[oklch(0.45_0.01_285)] text-xs">
          <Clock size={11} />
          <span>{article.readTime} lectura</span>
        </div>
        <div className="flex items-center gap-1.5 text-[oklch(0.45_0.01_285)] text-xs">
          <BookOpen size={11} />
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
    <section id="blog" className="py-24 bg-[oklch(0.07_0.004_285)]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 04</span>
            <div className="neon-line w-12" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-3">
                Blog & Artículos
              </h2>
              <p className="text-[oklch(0.55_0.01_285)] text-base max-w-lg">
                Reflexiones técnicas, tutoriales y aprendizajes del día a día
                como desarrollador.
              </p>
            </div>
            <button
              className="btn-neon px-6 py-2.5 rounded-sm text-sm shrink-0"
              onClick={() => {
                toast("Blog completo próximamente", {
                  description: "Estoy preparando más contenido técnico.",
                });
              }}
            >
              <span>Ver todos los artículos</span>
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <ArticleCard key={article.id} article={article} idx={idx} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
