import {
    Smartphone,
    BarChart3,
    MessageSquare,
    Bot,
    CalendarClock,
    Store,
    Layers,
    Zap,
    Target,
    Code2,
    TrendingUp,
    Users,
    ShieldCheck,
    Database,
    Workflow,
    Brain,
    Search,
    LineChart,
    Globe,
    Megaphone,
    Palette,
    DollarSign,
    Shield,
    Gauge,
    MapPin,
    type LucideIcon,
} from "lucide-react";

/* ─── Tipos ─── */
export interface ProjectModule {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface ProjectDetail {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    icon: LucideIcon;
    status: string;
    link: string;
    color: string;
    bg: string;
    longDescription: string;
    problem?: string;
    solution?: string;
    images?: string[];
    demoNotice?: string;
    stack?: { category: string; items: string[] }[];
    modules: ProjectModule[];
    value: { icon: LucideIcon; title: string; description: string }[];
    highlights: string[];
}

/* ─── Data completa de los proyectos ─── */
export const projects: ProjectDetail[] = [
    {
        title: "GoPark",
        subtitle: "Marketplace de Cocheras",
        description:
            "Marketplace asset-light que conecta conductores con cocheras privadas. Modelo tipo Airbnb/Uber para estacionamiento urbano con pricing dinámico, IA anti-fraude y matching inteligente.",
        tags: ["Marketplace", "Asset-Light", "Pricing Dinámico", "IA", "Two-Sided"],
        icon: Smartphone,
        status: "Co-fundador",
        link: "#",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
        longDescription:
            "GoPark es un marketplace de estacionamiento (modelo asset-light) que conecta conductores que necesitan estacionar de forma segura, rápida y predecible, con dueños de cocheras privadas que quieren monetizar espacios ociosos. Transforma cocheras subutilizadas en oferta activa de estacionamiento urbano, resolviendo un problema cotidiano con alta frecuencia de uso. No compra ni alquila cocheras: escala sin inmovilizar capital en infraestructura física.",
        problem: "Hay miles de cocheras privadas vacías en la ciudad y, al mismo tiempo, gente dando vueltas 20 minutos para estacionar. Los dueños de esos espacios no tienen forma simple de alquilarlos, y los conductores no saben que existen.",
        solution: "Conecté ambos lados en un marketplace: el conductor busca, reserva y paga desde el celular; el dueño de la cochera publica su espacio, configura precio y disponibilidad, y cobra sin hacer nada. La plataforma ajusta precios automáticamente según demanda y previene fraudes con IA.",
        modules: [
            {
                icon: Search,
                title: "Búsqueda y Reserva en Tiempo Real",
                description: "Mapa con cocheras disponibles, comparación por precio/horario/ubicación/reputación, reserva por franja o por día, y pago in-app seguro.",
            },
            {
                icon: Gauge,
                title: "Pricing Dinámico con IA",
                description: "Ajuste automático de precios según demanda, franja horaria, eventos, ubicación y anticipación de reserva. En eventos masivos, tarifas pueden llegar a $15.000/hora.",
            },
            {
                icon: Shield,
                title: "Prevención de Fraude y No-Show",
                description: "IA progresiva para validación de identidad, detección de patrones sospechosos, scoring de comportamiento y reducción de cancelaciones.",
            },
            {
                icon: Users,
                title: "Marketplace Two-Sided",
                description: "Experiencia diferenciada: conductores buscan/reservan/pagan; anfitriones crean perfil, configuran disponibilidad, gestionan precios y monitorean ingresos.",
            },
            {
                icon: Brain,
                title: "Matching Inteligente",
                description: "Algoritmos que priorizan opciones con mayor probabilidad de reserva efectiva, satisfacción del usuario y menor fricción (precio + cercanía + historial).",
            },
            {
                icon: DollarSign,
                title: "Modelo de Monetización",
                description: "Take rate del 25% por reserva + fee de servicio en alta demanda (eventos, última hora, pico). Complemento con planes premium, servicios corporativos y seguros.",
            },
        ],
        value: [
            { icon: TrendingUp, title: "Asset-Light Escalable", description: "Sin comprar ni alquilar cocheras. Escala rápido con mejor estructura de costos, replicable a cualquier ciudad." },
            { icon: DollarSign, title: "Unit Economics Sólidos", description: "Ticket promedio $9.000, comisión $2.250 por reserva, margen de contribución ~$1.900. Monetización clara desde el día 1." },
            { icon: MapPin, title: "Enfoque Hiperlocal", description: "Foco inicial en CABA y Córdoba Capital. Zonas con alta densidad vehicular, demanda concentrada y rápida validación." },
            { icon: Globe, title: "Potencial de Mercado", description: "GMV anual potencial de $52.330M en etapa de madurez, con proyección de EBITDA 30-45% en 3-5 ciudades maduras." },
        ],
        highlights: [
            "Respaldo del Cluster Tecnológico de Tandil e incubadoras",
            "Recordatorios inteligentes (T-30, T-15, T-5 min) y extensión automática",
            "Sistema de calificaciones y reputación mutuo",
            "Identidad verificada + historial + trazabilidad de reservas/pagos",
            "Roadmap: aeropuertos, estadios, eventos, terminales y ecosistema de espacios ociosos",
            "Arquitectura modular preparada para escalar ciudades y casos de uso",
        ],
    },
    {
        title: "VerData",
        subtitle: "Gestión para Verduleros Mayoristas",
        description:
            "Solución integral mobile-first para mercados de abasto. Control de inventario, caja diaria, cuentas corrientes y ventas rápidas en entorno operativo real.",
        tags: ["Flutter", "SaaS", "ERP", "Offline-First", "Multi-tenant"],
        icon: BarChart3,
        status: "En producción",
        link: "#",
        color: "text-green-500",
        bg: "bg-green-500/10",
        longDescription:
            "VerData es un sistema integral de gestión y Punto de Venta (POS) diseñado para puesteros mayoristas y comercios similares. Está estructurado en una arquitectura moderna separada en dos partes principales: una aplicación cliente (frontend móvil/web) y una API centralizada (backend). Permite registrar ventas, manejar entregas parciales/totales, aplicar descuentos, cancelar pedidos y llevar trazabilidad completa del impacto en stock.",
        problem: "En un puesto de mercado mayorista todo pasa rápido: se vende, se fía, se entrega a medias, se descuenta stock a mano. Al final del día nadie sabe bien cuánto se vendió, cuánto se cobró y cuánto se debe. Y muchas veces ni hay WiFi estable.",
        solution: "Diseñé un sistema de caja y gestión que funciona incluso sin conexión. Registra cada venta, descuenta stock automáticamente, lleva las cuentas corrientes de cada cliente y permite abrir y cerrar caja con todo cuadrado. Todo desde el celular, pensado para el ritmo real de un mercado de abasto.",
        stack: [
            { category: "Frontend", items: ["Flutter", "Dart", "Provider", "Go Router"] },
            { category: "Backend", items: ["Node.js", "Express", "Prisma ORM"] },
            { category: "Infraestructura", items: ["PostgreSQL", "Swagger Docs", "REST API"] },
        ],
        modules: [
            {
                icon: Store,
                title: "Ventas (POS)",
                description:
                    "Registra ventas con múltiples medios de pago (efectivo, transferencia, fiado), entregas parciales/totales, descuentos y cancelaciones con trazabilidad de stock.",
            },
            {
                icon: Database,
                title: "Stock e Inventario",
                description:
                    "Registro en tiempo real de productos (almacén central y puestos). Descuento automático de stock al concretar ventas y registro de movimientos.",
            },
            {
                icon: BarChart3,
                title: "Gestión de Caja",
                description:
                    "Apertura y cierre de turnos/cajas, registro de ingresos o extracciones manuales y cuadraturas diarias.",
            },
            {
                icon: Users,
                title: "Cuentas Corrientes",
                description:
                    "Administración de clientes y deuda/saldo a favor. Las ventas 'fiado' impactan automáticamente en el balance del cliente.",
            },
            {
                icon: ShieldCheck,
                title: "Auditoría y Correcciones",
                description:
                    "Funcionalidades para auditoría o correcciones manuales de caja e inventario físico cuando hay desfases.",
            },
        ],
        value: [
            { icon: Zap, title: "Operación Real", description: "Diseñado desde el terreno, entendiendo las dinámicas caóticas de un mercado mayorista." },
            { icon: ShieldCheck, title: "Anti-errores", description: "Validación estricta de reglas como evitar el doble descuento de stock." },
            { icon: TrendingUp, title: "Trazabilidad Total", description: "Cada venta, movimiento de stock y transacción queda registrada para auditoría." },
        ],
        highlights: [
            "Diseño mobile-first para uso en campo",
            "Sistema offline-first para mercados sin WiFi estable",
            "UI moderna con Google Fonts, Lucide Icons y shimmer",
            "Documentación de API con Swagger",
            "Multi-tenant para múltiples puestos",
        ],
    },
    {
        title: "Bottom Bar",
        subtitle: "Bot y Sistema de Gestión",
        description:
            "Sistema integral de reservas combinando automatización 24/7 por WhatsApp con un panel web de gestión en tiempo real, maximizando cupos y evitando sobre-reservas.",
        tags: ["WhatsApp Bot", "Reservas", "Panel Web", "Automatización"],
        icon: CalendarClock,
        status: "Implementado",
        link: "#",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        longDescription:
            "El proyecto consistía en crear un sistema integral de reservas para el bar/boliche Bottom Bar, combinando automatización por WhatsApp con un panel web de gestión, pensado específicamente para el funcionamiento nocturno. El bot responde automáticamente 24/7, guía al usuario paso a paso para tomar la reserva, valida disponibilidad en tiempo real y registra cada reserva en una base de datos centralizada.",
        problem: "El dueño del bar recibía cientos de mensajes de WhatsApp por noche pidiendo reservas. Respondía a mano, se confundía con los horarios, aceptaba de más y terminaba con el local desbordado o con gente enojada porque no tenía mesa.",
        solution: "Armé un bot de WhatsApp que atiende 24/7: toma los datos, verifica si hay lugar y confirma la reserva solo si hay cupo real. Todo se sincroniza con un panel web donde el staff ve las reservas en vivo. Si un horario se llena, el bot deja de aceptar automáticamente.",
        stack: [
            { category: "Bot", items: ["WhatsApp API", "Node.js", "Automatización 24/7"] },
            { category: "Panel Web", items: ["React", "Dashboard en tiempo real"] },
            { category: "Backend", items: ["Base de datos centralizada", "API REST", "Validación de cupos"] },
        ],
        modules: [
            {
                icon: Bot,
                title: "Bot de WhatsApp",
                description:
                    "Responde 24/7, guía al usuario paso a paso, solicita datos clave (nombre, cantidad, fecha, horario), valida disponibilidad y confirma o informa cupo.",
            },
            {
                icon: Layers,
                title: "Panel Web de Gestión",
                description:
                    "Visualización en tiempo real de reservas, filtros por fecha/horario/estado, control de cupos ocupados vs disponibles e historial operativo.",
            },
            {
                icon: Workflow,
                title: "Sincronización Bot ↔ Panel",
                description:
                    "El bot carga reservas automáticamente, el panel las refleja en tiempo real. Si un horario se llena, el bot deja de aceptar automáticamente.",
            },
        ],
        value: [
            { icon: Users, title: "Menos Staff Necesario", description: "Reducción drástica del personal atendiendo WhatsApp manualmente." },
            { icon: Zap, title: "Respuestas Instantáneas", description: "Atención consistente las 24 horas, sin demoras ni errores humanos." },
            { icon: Target, title: "Cero Sobre-reservas", description: "Sistema centralizado que evita aceptar más reservas de las que el local soporta." },
        ],
        highlights: [
            "Automatización completa del flujo de reservas",
            "Detección automática de cupos agotados",
            "Historial de reservas para control operativo",
            "Información organizada para gestión de ingreso",
            "Base escalable para eventos, listas VIP o sucursales",
        ],
    },
    {
        title: "Los Cabritos de Oro",
        subtitle: "Estrategia Digital y Presencia Web",
        description:
            "Profesionalización digital con desarrollo web completo, optimización UX/UI y estrategia activa de performance y ads (Meta & Google) para captación de clientes.",
        tags: ["Desarrollo Web", "Ads & Performance", "Social Media", "UX/UI"],
        icon: Store,
        status: "En proceso",
        link: "https://loscabritosdeoro.com",
        color: "text-yellow-500",
        bg: "bg-yellow-500/10",
        images: ["/images/projects/loscabritsdeoro.webp"],
        longDescription:
            "El proyecto consiste en la profesionalización digital completa del restaurante Los Cabritos de Oro, migrando de una gestión tradicional a un ecosistema conectado que abarca desde la infraestructura web hasta la captación activa de clientes mediante pauta publicitaria. La web funciona como el centro de operaciones digitales del restaurante.",
        problem: "El restaurante tenía buena comida y buena reputación local, pero no existía en internet. No tenía web, no aparecía en Google, y dependía 100% del boca a boca y de que alguien pasara por la puerta. Los turistas —su mayor oportunidad— no lo encontraban.",
        solution: "Creé toda la presencia digital desde cero: una web con la carta accesible desde el celular, botones directos para reservar por WhatsApp, y campañas de publicidad en Google y Meta segmentadas para turistas y locales. Ahora el restaurante no espera clientes: los busca activamente con datos reales.",
        stack: [
            { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
            { category: "Marketing", items: ["Meta Ads", "Google Ads", "Google Analytics"] },
            { category: "SEO & Performance", items: ["SEO Técnico", "Core Web Vitals", "Tracking avanzado"] },
        ],
        modules: [
            {
                icon: Globe,
                title: "Desarrollo Web",
                description:
                    "Identidad visual digital, menú dinámico optimizado para móviles, CTAs estratégicos para reservas y WhatsApp, e infraestructura escalable.",
            },
            {
                icon: Megaphone,
                title: "Performance & Ads",
                description:
                    "Campañas segmentadas geográficamente (Meta & Google Ads), embudo de ventas gastronómico y tracking con métricas de ROI.",
            },
            {
                icon: Palette,
                title: "Redes Sociales & Branding",
                description:
                    "Curación de contenido visual, community management activo y estrategias de humanización de marca (Stories/Reels).",
            },
        ],
        value: [
            { icon: Target, title: "Centralización", description: "Toda la información oficial vive en un solo lugar controlado (la web), evitando confusiones." },
            { icon: TrendingUp, title: "Previsibilidad", description: "El negocio deja de esperar clientes y pasa a buscarlos activamente con datos reales." },
            { icon: ShieldCheck, title: "Profesionalismo", description: "Eleva el estatus de la marca frente a la competencia con una experiencia digital premium." },
        ],
        highlights: [
            "Menú digital dinámico optimizado para móviles",
            "Botones de acción estratégica (CTA) para reservas",
            "Campañas segmentadas para público local y turistas",
            "Embudo de ventas gastronómico completo",
            "Base tecnológica para promociones y eventos futuros",
        ],
    },
    {
        title: "Hotel Killa",
        subtitle: "Sistema de Gestión Hotelera",
        description:
            "Sistema integral de administración web para Hotel Killa Cafayate. Dashboard, calendario interactivo, motor de precios y sincronización con bot de WhatsApp vía n8n.",
        tags: ["Next.js", "Supabase", "n8n", "Dashboard", "Shadcn/UI"],
        icon: MessageSquare,
        status: "Implementado",
        link: "https://killareservas.vercel.app",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        images: [
            "/images/projects/killadashboard1.webp",
            "/images/projects/killa_dashboard.webp",
            "/images/projects/killacalendario1.webp",
            "/images/projects/killa_calendario2.webp"
        ],
        demoNotice: "Este es el sistema hotelero tal cual como funciona y esta navegable pero contiene datos mocks que esta bien aclarar que son simulados, no reales.",
        longDescription:
            "Sistema integral de administración web diseñado específicamente para el Hotel Killa Cafayate. Facilita al personal del hotel el control del calendario de disponibilidad, la gestión de reservas, la fijación de precios y la configuración de las políticas del establecimiento en tiempo real. Actúa como el panel de control que alimenta y se sincroniza con un bot automatizado de n8n para interacciones con clientes vía WhatsApp y Web.",
        problem: "El hotel manejaba precios, disponibilidad y reservas en planillas sueltas. Cuando un cliente preguntaba por WhatsApp, el recepcionista tenía que buscar en el Excel, calcular el precio a mano según la temporada, y responder minutos después. A veces ya habían reservado en otro lado.",
        solution: "Construí un sistema web donde el hotel carga habitaciones, define temporadas y precios, y gestiona reservas desde un solo lugar. Ese sistema alimenta un bot de WhatsApp automático que responde al instante con precios reales y disponibilidad actualizada, sin intervención humana.",
        stack: [
            { category: "Framework", items: ["Next.js 14 (App Router)", "TypeScript"] },
            { category: "UI", items: ["Tailwind CSS", "Radix UI", "Shadcn/UI", "Recharts"] },
            { category: "Backend", items: ["PostgreSQL", "Supabase", "n8n Webhooks"] },
        ],
        modules: [
            {
                icon: LineChart,
                title: "Dashboard",
                description:
                    "Métricas en tiempo real de ocupación hotelera e ingresos con gráficos interactivos de Recharts.",
            },
            {
                icon: CalendarClock,
                title: "Calendario Interactivo",
                description:
                    "Visualización y edición de disponibilidad con modificación de precios por día de forma intuitiva.",
            },
            {
                icon: Database,
                title: "Gestión de Reservas",
                description:
                    "Listar, filtrar, crear y editar reservas activas con cálculo automático de precios según temporada.",
            },
            {
                icon: TrendingUp,
                title: "Motor de Precios",
                description:
                    "Promociones (3x2, descuentos), temporadas (Alta, Media, Baja) con factores multiplicadores automáticos.",
            },
            {
                icon: Workflow,
                title: "Integración n8n",
                description:
                    "Sincronización en tiempo real con bot de WhatsApp vía Supabase + Webhooks, respondiendo con precios y disponibilidad actual.",
            },
        ],
        value: [
            { icon: Zap, title: "Tiempo Real", description: "Cualquier cambio (tarifas, disponibilidad) se refleja al instante en el bot de atención." },
            { icon: Brain, title: "Automatización Inteligente", description: "Los flujos de n8n leen datos actualizados para respuestas precisas a clientes." },
            { icon: ShieldCheck, title: "Datos Precisos", description: "Precios con temporada aplicada, políticas y disponibilidad 100% reales." },
        ],
        highlights: [
            "Políticas de Check-in/out configurables",
            "Alertas por Email y WhatsApp",
            "Gestión de amenities por habitación",
            "Política de cancelación editable",
            "Gráficos interactivos de ocupación e ingresos",
        ],
    },
    {
        title: "SellPilot AI",
        subtitle: "Automatización de Prospección",
        description:
            "Sistema avanzado de automatización de prospección y conversaciones en Instagram con RAG, scraping inteligente y personalización basada en datos.",
        tags: ["Python", "RAG", "Selenium", "IA", "Anti-detección"],
        icon: Bot,
        status: "Proyecto Finalizado",
        link: "#",
        color: "text-orange-500",
        bg: "bg-orange-500/10",
        longDescription:
            "SellPilot AI fue un proyecto avanzado de automatización de prospección y conversaciones en Instagram, desarrollado íntegramente con código, antes del boom de plataformas low-code como n8n. El sistema detectaba, analizaba y contactaba prospectos de forma inteligente, y respondía conversaciones automáticamente guiando al usuario según su perfil, mensajes y nivel de interés. Incorporaba un sistema RAG (Retrieval Augmented Generation) con embeddings, base de datos vectorial y contexto histórico.",
        problem: "Prospectar clientes en Instagram a mano es lento y repetitivo: revisar perfiles uno por uno, pensar qué escribirles, mandar mensajes genéricos que nadie responde. Para escalar ventas outbound, hacía falta automatizar sin perder la personalización.",
        solution: "Desarrollé un sistema que analiza automáticamente cada perfil de Instagram (bio, rubro, estilo), y genera mensajes personalizados usando inteligencia artificial con contexto real del prospecto. También respondía conversaciones de forma autónoma, derivando al humano en el momento justo. Todo con código propio, antes de que existieran herramientas como n8n para esto.",
        stack: [
            { category: "Core", items: ["Python", "Selenium", "Playwright"] },
            { category: "IA", items: ["RAG", "Embeddings", "Base de datos vectorial"] },
            { category: "Infraestructura", items: ["Sistema de métricas", "Dashboard", "Anti-detección"] },
        ],
        modules: [
            {
                icon: Brain,
                title: "Inteligencia RAG",
                description:
                    "Embeddings + base vectorial + contexto histórico + scraping de perfil para generar mensajes ultra-personalizados.",
            },
            {
                icon: Search,
                title: "Scraping Inteligente",
                description:
                    "Análisis automático del perfil de Instagram (bio, nombre, keywords, tipo de negocio) antes de cualquier contacto.",
            },
            {
                icon: MessageSquare,
                title: "Automatización Conversacional",
                description:
                    "Primer mensaje automático, respuestas inteligentes, lógica por estados (nuevo lead, interesado, seguimiento, derivación).",
            },
            {
                icon: ShieldCheck,
                title: "Anti-detección",
                description:
                    "Simulación de comportamiento humano con pausas, scroll y variaciones para evitar bloqueos de la plataforma.",
            },
        ],
        value: [
            { icon: Brain, title: "RAG Aplicado a Ventas", description: "Pionero en aplicar Retrieval Augmented Generation al outreach comercial." },
            { icon: Target, title: "Personalización Real", description: "Cada mensaje se genera basado en datos concretos del prospecto, no templates genéricos." },
            { icon: Code2, title: "100% Código Propio", description: "Desarrollo end-to-end sin depender de SaaS externos ni herramientas low-code." },
        ],
        highlights: [
            "Arquitectura RAG aplicada a ventas",
            "Scraping inteligente de perfiles de Instagram",
            "Lógica de estados para gestión de leads",
            "Derivación automática a humano en momento óptimo",
            "Adelantado a su época: resolvía problemas que hoy recién se popularizaron",
        ],
    },
];
