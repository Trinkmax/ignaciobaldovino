🏨 Hotel Killa - Sistema de Gestión
Es un sistema integral de administración web diseñado específicamente para el Hotel Killa Cafayate. Su objetivo principal es facilitar al personal del hotel el control del calendario de disponibilidad, la gestión de reservas, la fijación de precios y la configuración de las políticas del establecimiento en tiempo real.

Además, sirve como el panel de control o "backend de gestión" (Dashboard) que alimenta y se sincroniza con un bot automatizado de n8n, el cual, al parecer, se encarga de las interacciones con los clientes (por ejemplo, vía WhatsApp o Web) consultando la base de datos centralizada.

Principales características y módulos del sistema:

Dashboard (Panel Principal): Muestra métricas en tiempo real de la ocupación hotelera y los ingresos, incluyendo gráficos interactivos.
Calendario Interactivo: Permite ver y editar de manera visual la disponibilidad y modificar los precios específicos por día.
Gestión de Reservas: Para listar, fíltrar, crear y editar todas las reservas activas, calculando precios automáticamente.
Gestión de Habitaciones: Control del inventario, características y amenities de las distintas opciones de alojamiento.
Motor de Precios y Temporadas:
Promociones: Para configurar ofertas (ej. 3x2, descuentos por porcentaje).
Temporadas: Definición de temporadas (Alta, Media, Baja) con factores multiplicadores automáticos (ej. cobrar 30% más en ciertas fechas).
Políticas y Configuración: Administración de horarios de Check-in/out, políticas de cancelación, datos del hotel, alertas (Emails/Whatsapp) e integraciones (Webhooks de n8n).
💻 Stack Tecnológico (Con qué está construido): Es una aplicación web moderna, rápida y escalable.

Framework: Next.js 14 (usando App Router).
Lenguaje: TypeScript (para mayor seguridad y limpieza en el código).
Estilos y Diseño: Tailwind CSS junto a componentes pre-diseñados y accesibles de Radix UI y Shadcn/ui.
Base de Datos y Backend: PostgreSQL gestionado a través de Supabase.
Gráficos: Recharts (para el dashboard).
🔗 El rol clave de "n8n": Cualquier cambio que se haga en este sistema web (ej. el recepcionista actualiza una tarifa o marca una habitación como ocupada) se guarda en minutos en Supabase. Esto permite que tus flujos de n8n lean en tiempo real esos datos actualizados para responder a los clientes con información precisa (precios vigentes con temporada aplicada, políticas y disponibilidad 100% reales).

¿Te gustaría que revisemos alguna sección del código en particular o que nos enfoquemos en agregarle alguna funcionalidad nueva al proyecto?