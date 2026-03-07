# Ideas de Diseño — Portfolio Álvaro Durán Valor

## Tres Enfoques de Diseño

---

<response>
<idea>

### Opción A: "Terminal Noir"
**Design Movement:** Cyberpunk minimalista / Dark Terminal Aesthetic

**Core Principles:**
1. Fondo negro profundo con texto verde neón como acento principal
2. Tipografía monoespaciada para detalles técnicos, sans-serif moderna para cuerpo
3. Efectos de scanline y glitch sutiles en hover
4. Bordes con glow verde neón en cards y elementos interactivos

**Color Philosophy:**
- Fondo: #0a0a0a (negro casi puro)
- Superficies: #111111 / #1a1a1a
- Acento primario: #00ff88 (verde neón brillante)
- Acento secundario: #00cc6a
- Texto: #e0e0e0 / #ffffff
- Muted: #666666
Intención emocional: Transmite dominio técnico, precisión y carácter hacker/dev

**Layout Paradigm:**
- Hero asimétrico con nombre a la izquierda y stack tecnológico flotando a la derecha
- Grid de proyectos con cards de tamaño variable (masonry-like)
- Línea de tiempo horizontal para el proceso de trabajo
- Navegación lateral fija con indicadores de sección activa

**Signature Elements:**
1. Cursor parpadeante animado junto al nombre en el hero
2. Bordes con glow verde en hover sobre cards
3. Prefijos de terminal (`>_`, `//`, `#`) en subtítulos y etiquetas

**Interaction Philosophy:**
- Hover revela información adicional con transición de opacidad
- Cards se elevan con sombra de glow al hacer hover
- Scroll suave con indicadores de progreso lateral

**Animation:**
- Entrada del hero con efecto de typing/typewriter
- Cards con fade-in escalonado al entrar en viewport
- Glow pulse en el acento verde (keyframe suave)
- Transiciones de 200-300ms con ease-out

**Typography System:**
- Display: Space Grotesk Bold (títulos principales)
- Body: DM Sans Regular/Medium (texto de cuerpo)
- Code: JetBrains Mono (etiquetas técnicas, código)
- Jerarquía: 72px hero → 48px h1 → 32px h2 → 20px h3 → 16px body

</idea>
<probability>0.08</probability>
</response>

---

<response>
<idea>

### Opción B: "Slate Architect" ← SELECCIONADA
**Design Movement:** Swiss Modernism aplicado al Tech / Neo-Brutalist Refinado

**Core Principles:**
1. Estructura de cuadrícula estricta con rupturas deliberadas para crear tensión visual
2. Contraste extremo entre negro profundo y verde neón como único acento cromático
3. Tipografía con carácter fuerte: display condensada para impacto, sans-serif limpia para legibilidad
4. Espaciado generoso que hace respirar cada sección

**Color Philosophy:**
- Fondo: oklch(0.08 0.005 285) — negro pizarra profundo
- Superficies card: oklch(0.12 0.006 285) — gris oscuro
- Borde sutil: oklch(0.18 0.008 285)
- Acento neón: oklch(0.85 0.22 145) — verde neón vibrante
- Acento secundario: oklch(0.65 0.18 145) — verde más apagado
- Texto principal: oklch(0.95 0 0)
- Texto secundario: oklch(0.65 0.005 285)
Intención: Profesionalismo técnico con personalidad. No genérico, no frío.

**Layout Paradigm:**
- Hero de pantalla completa con nombre en tipografía display grande a izquierda
- Sección de stack con iconos en fila horizontal con labels
- Proyectos en grid 2-3 columnas con cards de igual altura
- Proceso en pasos numerados horizontales
- Blog en lista editorial con fecha y categoría

**Signature Elements:**
1. Línea horizontal de acento verde que separa secciones
2. Números de sección en verde neón (01, 02, 03...)
3. Tags de tecnología con fondo semitransparente y borde verde

**Interaction Philosophy:**
- Hover en cards: borde izquierdo verde + elevación sutil
- Botones con efecto fill de izquierda a derecha
- Scroll reveal con slide-up suave

**Animation:**
- Hero: nombre aparece con stagger por letra (framer-motion)
- Secciones: fade + translateY(20px) al entrar en viewport
- Cards: scale(1.02) + glow en hover
- Duración: 400ms ease-out para entradas, 200ms para hover

**Typography System:**
- Display: Syne ExtraBold (títulos de sección y hero)
- Body: Inter Variable (texto corrido)
- Mono: Fira Code (etiquetas de tecnología)
- Escala: 80px hero → 52px h1 → 36px h2 → 24px h3 → 16px body

</idea>
<probability>0.09</probability>
</response>

---

<response>
<idea>

### Opción C: "Neon Grid"
**Design Movement:** Vaporwave Técnico / Futurismo Geométrico

**Core Principles:**
1. Grid visible como elemento decorativo de fondo (líneas muy sutiles)
2. Gradientes de verde a azul como acento (duotono tecnológico)
3. Cards con glassmorphism sobre fondo oscuro
4. Geometría angular en divisores y decoraciones

**Color Philosophy:**
- Fondo: #050510 (negro azulado)
- Acento: gradiente #00ff88 → #00aaff
- Glassmorphism: rgba(255,255,255,0.05) con blur
- Texto: blanco puro

**Layout Paradigm:**
- Hero centrado con partículas animadas de fondo
- Stack en hexágonos o círculos con iconos
- Proyectos en carousel horizontal
- Línea de tiempo vertical para proceso

**Signature Elements:**
1. Grid de puntos animado en el fondo del hero
2. Cards con efecto glass y borde gradiente
3. Partículas flotantes en secciones clave

**Interaction Philosophy:**
- Parallax en el hero
- Cards con rotación 3D sutil en hover
- Cursor personalizado

**Animation:**
- Partículas en canvas (Three.js o CSS puro)
- Rotación 3D en cards
- Gradiente animado en bordes

**Typography System:**
- Display: Orbitron (futurista)
- Body: Exo 2
- Escala estándar

</idea>
<probability>0.07</probability>
</response>

---

## Decisión Final

**Se selecciona la Opción B: "Slate Architect"**

Razón: Combina el rigor visual del Swiss Modernism con la estética tecnológica. Es la opción más profesional y diferenciada — no cae en clichés de portfolios de desarrolladores (ni demasiado "terminal hacker" ni demasiado "vaporwave"). El uso de Syne como tipografía display da personalidad sin sacrificar legibilidad. El verde neón como único acento cromático crea coherencia visual fuerte.
