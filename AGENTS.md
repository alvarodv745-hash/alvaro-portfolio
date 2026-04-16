# AGENTS.md — alvaro-portfolio

> Archivo de contexto para agentes e IAs que trabajen en este proyecto.
> Leer este archivo ANTES de hacer cualquier cambio de código.

---

## 1. Identidad del proyecto

**Repo:** `alvarodv745-hash/alvaro-portfolio`
**Owner:** Álvaro Durán Valor — Desarrollador de Aplicaciones Multiplataforma (DAM), Sevilla/Extremadura, España.
**Agencia:** Syntrix (syntrix.es) — servicios digitales: webs, apps, automatizaciones con IA.
**Portfolio URL (local dev):** `http://localhost:3000`

---

## 2. Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 7 |
| Estilos | Tailwind CSS 4 (vía `@tailwindcss/vite`) |
| Animaciones | Framer Motion 12 |
| Routing | Wouter |
| Toasts | Sonner |
| UI primitivos | Radix UI (solo `@radix-ui/react-slot` y `@radix-ui/react-tooltip`) |
| Utilidades CSS | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Iconos | `lucide-react` |
| Fuentes | Syne (display) + DM Sans (body) + Fira Code (mono) via Google Fonts |

**No hay backend.** Es un portfolio estático. No usar Express, APIs propias ni SSR.

---

## 3. Design System — "Slate Architect"

### Paleta de colores (oklch)

```css
--background:   oklch(0.09 0.005 285)   /* Negro pizarra */
--foreground:   oklch(0.94 0.005 285)   /* Blanco casi puro */
--primary:      oklch(0.82 0.22 145)    /* Verde neón — único acento */
--card:         oklch(0.12 0.006 285)   /* Fondo de cards */
--muted:        oklch(0.55 0.01 285)    /* Texto secundario */
--border:       oklch(0.22 0.008 285)   /* Bordes sutiles */
```

### Reglas de diseño (NO romper estas)
- **Fondo siempre oscuro** — nunca modo light activo.
- **Un único color de acento**: verde neón `oklch(0.82 0.22 145)`. No introducir otros acentos.
- **Tipografía display**: `font-family: 'Syne'` para h1–h6 y logotipo.
- **Tipografía mono**: `font-family: 'Fira Code'` para badges, section numbers y código.
- **Bordes con esquinas rectas** (`rounded-sm`, no `rounded-xl`).
- Efectos de glow se hacen con `box-shadow` usando `oklch(0.82 0.22 145 / 0.X)`.
- Grid sutil en el hero: `backgroundImage` de líneas con la misma variable verde a `opacity: 0.025`.

### Clases CSS custom (definidas en `src/index.css`)
```
.neon-line      — línea de acento gradiente verde
.neon-text      — texto verde con text-shadow
.card-glow      — card con hover glow verde
.section-number — número de sección en Fira Code verde
.tech-tag       — badge de tecnología verde semitransparente
.btn-neon       — botón con fill slide animation verde
```

---

## 4. Estructura del proyecto

```
alvaro-portfolio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── AGENTS.md               ← este archivo
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css           ← Design system completo aquí
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── StackSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── CaseStudiesSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── sonner.tsx
│   │       └── tooltip.tsx
│   ├── contexts/
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   ├── useComposition.ts
│   │   └── usePersistFn.ts
│   ├── lib/
│   │   └── utils.ts
│   └── pages/
│       ├── Home.tsx
│       └── NotFound.tsx
```

### Alias de importación
```
@/* → ./src/*
```
Ejemplo: `import { cn } from "@/lib/utils"`

---

## 5. Secciones del portfolio

| ID HTML | Componente | Número | Descripción |
|---|---|---|---|
| `#hero` | HeroSection.tsx | — | Pantalla completa, nombre, typewriter, CTA, stack pills, status card |
| `#stack` | StackSection.tsx | `// 01` | Grid de categorías técnicas con niveles cualitativos |
| `#projects` | ProjectsSection.tsx | `// 02` | Cards de proyectos destacados, sin filtros |
| `#process` | ProcessSection.tsx | `// 03` | 4 pasos del flujo de trabajo (Diseño→Dev→Test→Deploy) |
| `#case-studies` | CaseStudiesSection.tsx | `// 04` | Acordeón de casos: Problema→Solución→Tecnologías→Resultado |
| `#contact` | ContactSection.tsx | `// 05` | Formulario + links sociales + badge de disponibilidad |

---

## 6. Versionado y estado actual

### Historial de versiones
- **V1.0** — Generado con Manus AI (manus.im). Estructura full-stack con Express, 50+ componentes shadcn, runtime de Manus.
- **V1.1 — "Refactor First Version"** ✅ ACTUAL — Portfolio estático limpio. Backend eliminado, Manus runtime eliminado, dependencias reducidas de 70+ a ~15.

### Próxima versión planificada
- **V1.2 — "Visual Polish"** — Mejoras visuales: hero background glow, hover cards mejorado, scroll reveal más pulido, animaciones Framer Motion, foto real en hero, corrección general de detalles visuales.
- **V1.3 — "Real Content"** — Sustituir proyectos ficticios por reales (LyricBeats, Sistema de Tarjetas Regalo), datos de contacto reales, imágenes propias en lugar de CDN de Manus.

---

## 7. Contenido pendiente de reemplazar (⚠️ NO es real todavía)

### Imágenes (vienen de CDN de Manus — pueden romperse)
```
HeroSection.tsx   → HERO_BG (Cloudfront de Manus)
ProjectsSection.tsx → PROJ_1, PROJ_2, PROJ_3 (Cloudfront de Manus)
ProcessSection.tsx  → ABOUT_IMG (Cloudfront de Manus)
```

### Proyectos ficticios (generados por Manus — no son proyectos de Álvaro)
- "Dashboard Analytics en Tiempo Real" — FICTICIO
- "App Móvil de Gestión de Tareas Offline-First" — FICTICIO
- "API REST Escalable para Marketplace" — FICTICIO
- "Sistema de Recomendaciones con ML" — FICTICIO
- "Plataforma de Streaming de Video Adaptativo" — FICTICIO
- "App de Fitness con Seguimiento Biométrico" — FICTICIO

### Proyectos reales a añadir (en V1.3)
1. **LyricBeats** — Web app con secuenciador de 6 sonidos + generación de letras con IA (llama-3.1-8b-instant) + Firebase auth + biblioteca de beats. Stack: React, Firebase/Firestore, WebAudio API.
2. **Sistema de Tarjetas Regalo** — Sistema digital con generación y lectura de códigos de barras para controlar saldo y uso en negocio físico. Stack: Web app + base de datos.

### URLs y datos de contacto ficticios
```
GitHub:   github.com/alvaroduranvalor        → reemplazar con real
LinkedIn: linkedin.com/in/alvaroduranvalor   → reemplazar con real
Email:    alvaro@duranvalor.dev              → reemplazar con real
CV:       /cv-alvaro-duran.pdf              → añadir archivo real
```

---

## 8. Convenciones de código

### Nomenclatura
- Componentes: PascalCase (`HeroSection`, `ProjectCard`)
- Hooks: camelCase con prefijo `use` (`useComposition`, usePersistFn`)
- Variables CSS: `--kebab-case`
- Clases Tailwind: preferir clases utility directas; usar `cn()` para condicionales

### Estilos
- Usar siempre `oklch()` para colores (no hex, no hsl)
- Animaciones de entrada: `opacity + translateY/translateX` con `IntersectionObserver`
- NO usar `useEffect` para animaciones que se puedan hacer con CSS puro
- Transiciones de hover: siempre `duration-200` o `duration-300`

### Componentes
- Cada sección tiene su propio `ref` + `IntersectionObserver` para el scroll reveal
- El patrón de animación es:
```tsx
style={{
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(20px)",
  transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
}}
```
- `stagger delay`: `idx * 80ms` para elementos en grid

### Imports
- Siempre usar alias `@/` para imports internos
- Lucide icons: importar por nombre exacto `import { Github, Mail } from "lucide-react"`

---

## 9. Comandos

```bash
npm install          # instalar dependencias
npm run dev          # servidor local en localhost:3000
npm run build        # build producción en /dist
npm run preview      # preview del build
npm run check        # TypeScript check sin emitir
```

---

## 10. Reglas absolutas para agentes

1. **No introducir nuevas dependencias sin justificación explícita.** El `package.json` ya está muy limpio.
2. **No romper el design system.** No cambiar la paleta de colores, no añadir modos light, no cambiar las fuentes.
3. **No cambiar la estructura de secciones** ni el orden en `Home.tsx` sin instrucción explícita.
4. **No reemplazar contenido ficticio** hasta que llegue V1.3 — en V1.2 solo visual.
5. **Código completo, nunca truncado.** Si se modifica un archivo, entregar el archivo completo.
6. **TypeScript estricto.** No usar `any`, no ignorar errores de tipo con comentarios.
7. **Framer Motion para animaciones complejas.** Ya está instalado — usarlo en vez de reinventar con CSS keyframes cuando la animación tenga estado o sea interactiva.
8. **Cada cambio debe tener un mensaje de commit claro** con el patrón `feat:`, `fix:`, `style:`, `refactor:`.

---

## 11. Guía de agentes por tarea

| Tarea | Agente recomendado | Razón |
|---|---|---|
| Visual polish, componentes React, CSS animations | **Claude Sonnet 4.6 (Thinking)** | Mejor UX/UI y lógica de componentes |
| Refactor grande, arquitectura, múltiples archivos | **Claude Opus 4.6 (Thinking)** | Contexto largo, decisiones complejas |
| Fixes rápidos, bugs concretos, snippets | **Claude Sonnet 4.6** | Velocidad suficiente para tareas simples |
| Generación masiva de contenido / copy | **Gemini Pro 3.1** | Bueno con texto largo en español |
| Exploración rápida / brainstorming | **Gemini Flash** | Velocidad, bajo coste |

---

## 12. Notas de Syntrix

Este portfolio es también escaparate de las capacidades de Álvaro como desarrollador de Syntrix. El tono y la calidad del código refleja directamente la imagen profesional de la agencia. Mantener nivel de código de producción en todo momento.