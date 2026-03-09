/*
 * SLATE ARCHITECT — Case Studies Section
 * Estudios de caso profundos de proyectos reales
 * Estructura: Problema → Solución → Tecnologías → Resultado
 */
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Code2, Target, Zap, TrendingUp } from "lucide-react";

interface CaseStudy {
  id: number;
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  result: string;
  impact: string;
  category: "Web" | "Móvil" | "Backend";
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Dashboard Analytics en Tiempo Real",
    category: "Web",
    problem:
      "Una plataforma de e-commerce necesitaba visualizar métricas de ventas en tiempo real. Los reportes se actualizaban cada hora, generando decisiones basadas en datos desactualizados. Los vendedores perdían oportunidades de optimización inmediata.",
    solution:
      "Desarrollé un dashboard interactivo con WebSockets que actualiza métricas cada 5 segundos. Implementé gráficos interactivos con Recharts, caché en cliente con React Query y sincronización bidireccional con el backend. El sistema maneja 10k+ eventos/segundo sin degradación de performance.",
    technologies: ["React", "TypeScript", "WebSocket", "Recharts", "Node.js", "Redis"],
    result:
      "Los vendedores ahora toman decisiones en tiempo real. Se redujo el tiempo de respuesta ante cambios de mercado de 1 hora a segundos.",
    impact: "Incremento de 23% en conversiones, reducción de 40% en tiempo de análisis",
  },
  {
    id: 2,
    title: "App Móvil de Gestión de Tareas Offline-First",
    category: "Móvil",
    problem:
      "Usuarios en zonas con conexión intermitente no podían usar la app de productividad. Cada desconexión perdía datos o generaba conflictos de sincronización. La experiencia era frustrante y la retención era baja.",
    solution:
      "Construí una arquitectura offline-first con SQLite local y sincronización inteligente. Implementé conflict resolution automático, compresión de datos y queue de operaciones pendientes. La app funciona completamente sin conexión y sincroniza cuando hay red disponible.",
    technologies: ["Flutter", "SQLite", "Firebase Realtime", "Dart", "Provider"],
    result:
      "La app ahora funciona sin conexión con sincronización automática. Los usuarios pueden trabajar en cualquier lugar sin perder datos.",
    impact: "Retención aumentó 35%, 50k+ descargas en primer mes, rating 4.8/5",
  },
  {
    id: 3,
    title: "API REST Escalable para Marketplace",
    category: "Backend",
    problem:
      "El backend monolítico no escalaba durante picos de tráfico. Los tiempos de respuesta se degradaban de 200ms a 5s. Black Friday causaba caídas del servicio. No había forma de hacer deploys sin downtime.",
    solution:
      "Migré a una arquitectura de microservicios con Node.js y Docker. Implementé load balancing con Nginx, caché distribuido con Redis, base de datos replicada y CI/CD con GitHub Actions. Zero-downtime deployments con blue-green strategy.",
    technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    result:
      "El sistema ahora maneja 100x más tráfico sin degradación. Deploys automáticos sin downtime cada 2 horas.",
    impact: "99.99% uptime, latencia p95 de 150ms, 1M+ requests/día",
  },
  {
    id: 4,
    title: "Sistema de Recomendaciones con Machine Learning",
    category: "Backend",
    problem:
      "El algoritmo de recomendaciones era genérico y no personalizaba. Los usuarios veían siempre los mismos productos. Las recomendaciones no generaban conversiones. CTR de solo 2%.",
    solution:
      "Implementé un sistema de recomendaciones con collaborative filtering y content-based filtering. Entrenamiento de modelos con Python/scikit-learn, serving en tiempo real con FastAPI. A/B testing para validar mejoras.",
    technologies: ["Python", "scikit-learn", "FastAPI", "PostgreSQL", "Redis", "Docker"],
    result:
      "Recomendaciones personalizadas basadas en comportamiento del usuario. Sistema de A/B testing integrado para validación continua.",
    impact: "CTR aumentó a 8.5%, AOV +18%, tiempo en sitio +45%",
  },
  {
    id: 5,
    title: "Plataforma de Streaming de Video Adaptativo",
    category: "Web",
    problem:
      "Los usuarios experimentaban buffering frecuente en conexiones lentas. No había adaptación automática de calidad. El consumo de datos era excesivo. Experiencia inconsistente entre dispositivos.",
    solution:
      "Implementé streaming adaptativo con HLS y DASH. Detección automática de ancho de banda, switching dinámico de bitrate, caché de segmentos y optimización de codec. Player personalizado con controles avanzados.",
    technologies: ["React", "HLS.js", "FFmpeg", "Node.js", "AWS S3", "CloudFront"],
    result:
      "Reproducción fluida en cualquier conexión. Adaptación automática de calidad sin intervención del usuario.",
    impact: "Reducción de buffering 95%, consumo de datos -40%, satisfacción +92%",
  },
  {
    id: 6,
    title: "App de Fitness con Seguimiento Biométrico",
    category: "Móvil",
    problem:
      "Integración con múltiples sensores biométricos era compleja. Datos inconsistentes entre dispositivos. Sincronización lenta. Batería se agotaba rápidamente.",
    solution:
      "Desarrollé drivers nativos para múltiples sensores, sincronización inteligente con batching, compresión de datos y algoritmos de optimización de energía. Integración con HealthKit (iOS) y Google Fit (Android).",
    technologies: ["Flutter", "Dart", "Native Android", "Swift", "HealthKit", "Google Fit"],
    result:
      "Integración perfecta con sensores. Sincronización eficiente sin impacto en batería. Datos consistentes en todos los dispositivos.",
    impact: "Precisión 98%, autonomía +8 horas, 100k+ usuarios activos",
  },
];

interface ExpandedState {
  [key: number]: boolean;
}

export default function CaseStudiesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState<ExpandedState>({});

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

  const toggleExpanded = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Web":
        return "text-blue-400";
      case "Móvil":
        return "text-purple-400";
      case "Backend":
        return "text-green-400";
      default:
        return "text-gray-400";
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-[oklch(0.09_0.005_285)]" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="section-number">// 04</span>
            <div className="neon-line w-12" />
          </div>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white mb-4">
            Casos de Estudio
          </h2>
          <p className="text-[oklch(0.55_0.01_285)] text-base max-w-2xl">
            Proyectos reales donde he resuelto problemas complejos de ingeniería
            de software. Cada caso muestra el problema, la solución técnica y el
            impacto en el negocio.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((study, idx) => {
            const isExpanded = expanded[study.id];
            return (
              <div
                key={study.id}
                className="group"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.6s ease ${idx * 80}ms, transform 0.6s ease ${idx * 80}ms`,
                }}
              >
                <div className="relative h-full">
                  {/* Card */}
                  <div
                    className={`border border-[oklch(0.18_0.007_285)] bg-[oklch(0.12_0.006_285)] rounded-sm p-6 transition-all duration-300 cursor-pointer ${isExpanded
                        ? "border-[oklch(0.82_0.22_145/0.4)] bg-[oklch(0.15_0.007_285)]"
                        : "hover:border-[oklch(0.22_0.008_285)] hover:bg-[oklch(0.13_0.006_285)]"
                      }`}
                    onClick={() => toggleExpanded(study.id)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`text-xs font-mono font-semibold px-2 py-1 rounded-sm border ${getCategoryColor(
                              study.category
                            )} border-current/30 bg-current/5`}
                          >
                            {study.category}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-white leading-tight">
                          {study.title}
                        </h3>
                      </div>
                      <button
                        className={`p-1.5 rounded-sm border border-[oklch(0.22_0.008_285)] text-[oklch(0.50_0.01_285)] hover:border-[oklch(0.82_0.22_145/0.4)] hover:text-[oklch(0.82_0.22_145)] transition-all duration-200 flex-shrink-0 ${isExpanded ? "border-[oklch(0.82_0.22_145/0.4)] text-[oklch(0.82_0.22_145)]" : ""
                          }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpanded(study.id);
                        }}
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                    </div>

                    {/* Problem - Always visible */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={14} className="text-[oklch(0.82_0.22_145)]" />
                        <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                          Problema
                        </span>
                      </div>
                      <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="space-y-4 pt-4 border-t border-[oklch(0.18_0.007_285)]">
                        {/* Solution */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Zap size={14} className="text-[oklch(0.82_0.22_145)]" />
                            <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                              Solución
                            </span>
                          </div>
                          <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed">
                            {study.solution}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Code2 size={14} className="text-[oklch(0.82_0.22_145)]" />
                            <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                              Tecnologías
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 rounded-sm text-xs font-mono bg-[oklch(0.82_0.22_145/0.08)] text-[oklch(0.82_0.22_145)] border border-[oklch(0.82_0.22_145/0.2)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Result */}
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp size={14} className="text-[oklch(0.82_0.22_145)]" />
                            <span className="font-mono text-xs text-[oklch(0.55_0.01_285)] tracking-wider uppercase">
                              Resultado
                            </span>
                          </div>
                          <p className="text-[oklch(0.52_0.01_285)] text-sm leading-relaxed mb-3">
                            {study.result}
                          </p>
                          <div className="p-3 rounded-sm bg-[oklch(0.82_0.22_145/0.05)] border border-[oklch(0.82_0.22_145/0.15)]">
                            <p className="font-mono text-xs text-[oklch(0.82_0.22_145)]">
                              <span className="text-[oklch(0.55_0.01_285)]">→ Impacto: </span>
                              {study.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-[oklch(0.82_0.22_145/0)] via-[oklch(0.82_0.22_145/0.1)] to-[oklch(0.82_0.22_145/0)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    style={{
                      filter: "blur(8px)",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-12 border-t border-[oklch(0.15_0.006_285)]">
          <p className="text-[oklch(0.45_0.01_285)] text-sm text-center">
            ¿Tienes un proyecto similar? Estoy disponible para consultoría y
            desarrollo de soluciones complejas.{" "}
            <button
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-[oklch(0.82_0.22_145)] hover:underline transition-colors duration-200"
            >
              Hablemos
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
