## Plan Integral: Corregir carga lenta y “pantalla en blanco/animación colgada” en iPhone Safari

### 1. Resumen de diagnóstico (basado en código actual)
1. La home hidrata demasiada UI cliente desde el primer render: casi toda la página está en componentes `use client`, con `framer-motion` en múltiples secciones y bundles pesados de motion.  
   Evidencia: [page client manifest](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/.next/dev/server/app/page_client-reference-manifest.js), [home](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/app/page.tsx).
2. El `Hero` arranca vacío por diseño SSR (`displayedLine1=""`, `displayedLine2=""`, `showContent=false`), así que si la hidratación tarda, el usuario ve una pantalla casi vacía con cursor “cargando”.  
   Evidencia: [hero.tsx](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/components/hero.tsx:17).
3. La sección `projects` es muy grande (texto + UI + modal/drawer/carousel) y está en el bundle inicial, aumentando parse/hydration en móvil Safari.  
   Evidencia: [projects.tsx](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/components/projects.tsx), `57,965` bytes fuente.
4. `useMediaQuery` usa `addEventListener("change")` sin fallback legacy y además empieza en `false`, provocando render inicial “desktop” y rerender posterior en mobile (trabajo extra).  
   Evidencia: [use-media-query.ts](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/hooks/use-media-query.ts:4).
5. Hay uso intenso de `whileInView`, `backdrop-blur` y `filter: blur`, que en iOS Safari suele penalizar más.

### 2. Objetivo de éxito
1. El usuario iPhone Safari ve contenido útil inmediatamente (sin hero vacío).
2. Tiempo hasta contenido estable del hero `< 1.2s` en iPhone Safari real (red 4G buena o WiFi normal).
3. Reducir trabajo JS inicial en home y eliminar esperas largas post-carga.
4. Medir en producción con telemetría completa para confirmar mejora.

### 3. Cambios de implementación (decision-complete)

#### 3.1 Quick wins de UX (mismo día)
1. En [hero.tsx](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/components/hero.tsx):
   1. Inicializar SSR con texto completo visible (`displayedLine1/2` ya completos).
   2. Hacer typewriter “enhancement” opcional solo si `canAnimateHero === true`.
   3. Definir `showContent=true` por defecto en mobile y Safari iOS.
   4. Agregar fail-safe: si la animación no termina en `900ms`, mostrar contenido completo.
2. Mantener la estética, pero sin bloquear lectura por estado inicial vacío.

#### 3.2 Reducir carga/hidratación inicial de home
1. En [app/page.tsx](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/app/page.tsx):
   1. Cargar `Projects`, `Skills`, `Contact`, `Footer` con `next/dynamic` + `suspense` (dejar `Hero` y navbar primero).
   2. Priorizar above-the-fold (`Navbar`, `Hero`) y diferir resto.
2. En [components/projects.tsx](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/components/projects.tsx):
   1. Extraer `projects` a módulo separado (`lib/projects-data.ts`) o JSON tipado.
   2. Cargar detalle pesado (drawer/dialog/galería) bajo demanda al abrir.
   3. Evitar renderizar ramas mobile+desktop completas en secuencia por `isMobile` inicial incorrecto.
3. Revisar imágenes:
   1. Confirmar que no se pide `cabritos-web.png` (4.3MB) en ruta principal.
   2. Para galerías: `sizes` explícito, `loading="lazy"` y evitar decode simultáneo masivo.

#### 3.3 Hardening Safari iOS
1. En [hooks/use-media-query.ts](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/hooks/use-media-query.ts):
   1. Compatibilidad `addEventListener`/`addListener`.
   2. Patrón con `useSyncExternalStore` para evitar flash desktop→mobile.
2. En [lib/motion-presets.ts](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/lib/motion-presets.ts):
   1. Reemplazar animaciones con `filter: blur(...)` por `opacity + transform`.
3. En [app/globals.css](/Users/ignaciobaldovino/ignaciobaldovino/portfolio/app/globals.css):
   1. Reducir `backdrop-blur` en mobile Safari con variante por soporte/performance.
   2. Mantener fallback visual sin blur.

#### 3.4 Telemetría completa en producción (sin Web Inspector)
1. Agregar `@vercel/analytics` y `@vercel/speed-insights`.
2. Crear endpoint `POST /api/client-metrics`:
   1. Archivo nuevo: `/Users/ignaciobaldovino/ignaciobaldovino/portfolio/app/api/client-metrics/route.ts`.
   2. Payload tipado:
      - `event`: `page_boot | hero_ready | hero_fallback | hydration_done`
      - `path`, `ua`, `iosSafari:boolean`, `timeSinceNavStartMs`
      - `webVitals` (`TTFB`, `FCP`, `LCP`, `CLS`, `INP` cuando esté disponible)
      - `deviceHints` (`hardwareConcurrency`, `deviceMemory` si existe)
3. Registrar timestamps desde cliente:
   1. `navigationStart`
   2. `hero_text_visible`
   3. `hero_content_visible`
4. Muestreo recomendado `30%` para no llenar logs.

### 4. Cambios en APIs/interfaces públicas
1. Nuevo endpoint HTTP:
   1. `POST /api/client-metrics`
   2. Request JSON tipado (evento + métricas + metadata de navegador).
   3. Response `204` (sin body).
2. Nuevo tipo compartido:
   1. `type ClientPerfEvent` (en `lib/types/perf.ts` o equivalente).

### 5. Validación y pruebas
1. Pruebas funcionales manuales:
   1. iPhone Safari cold start (primera visita).
   2. iPhone Safari warm cache (segunda visita).
   3. iPhone Safari modo privado.
   4. iPhone Edge/Chrome control comparativo.
2. Pruebas de no regresión UI:
   1. Hero visible inmediato.
   2. Navegación y scroll progress correctos.
   3. Modal/drawer de proyectos abre sin stutter severo.
3. Pruebas técnicas:
   1. `npm run lint`
   2. `npm run build` en entorno con red habilitada (para validar fuentes y bundle final).
4. Criterios de aceptación:
   1. No más pantalla vacía prolongada.
   2. `hero_content_visible` p95 iOS Safari < `1200ms`.
   3. Mejora clara de LCP/FCP en Vercel Speed Insights para Safari iOS.

### 6. Rollout
1. Deploy a preview con telemetría activa.
2. Verificar 24h de eventos Safari iOS.
3. Deploy a producción.
4. Revisar 48h de métricas; si p95 sigue alto, segunda iteración: reducir aún más JS inicial y motion en mobile.

### 7. Supuestos y defaults fijados
1. Alcance: **integral**.
2. Compatibilidad objetivo: **iOS Safari 15+**.
3. Observabilidad: **completa**.
4. No hay acceso a Safari Web Inspector remoto; validación principal por RUM + pruebas manuales.
5. Se asume que este repo corresponde al deployment afectado en Vercel.
