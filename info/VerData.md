¿Qué es VerData?
VerData es un sistema integral de gestión y Punto de Venta (POS) diseñado para puesteros mayoristas y comercios similares. Está estructurado en una arquitectura moderna separada en dos partes principales: una aplicación cliente (frontend móvil/web) y una API centralizada (backend).

🛠️ Stack Tecnológico y Arquitectura
Frontend (verdata_front / directorio verdata)

Tecnología: Flutter / Dart.
Propósito: Es la aplicación interactiva que utilizan los vendedores y administradores.
Herramientas Clave: Utiliza provider para el manejo de estado, go_router para la navegación, y consume la API a través de http. Cuenta con un diseño moderno (usa google_fonts, lucide_icons y animaciones/skeletons con shimmer).
Backend (verdata_back)

Tecnología: Node.js, Express y Prisma (ORM) conectado a lo que probablemente sea una base de datos PostgreSQL o MySQL.
Propósito: Actúa como el motor del sistema. Se encarga de la lógica de negocios, la persistencia de datos (productos, ventas, clientes) y la validación estricta de reglas (como evitar el doble descuento de stock).
Documentación: Cuenta con documentación de API estructurada mediante Swagger.
📦 Módulos Principales (Funcionalidades)
El sistema está dividido en módulos de negocio bien definidos (según los archivos de planificación PLAN_*.md presentes en el directorio raíz):

Ventas (POS): El módulo central. Permite registrar ventas a clientes (con distintos medios de pago: efectivo, transferencia, fiado), manejar entregas parciales/totales (entrega ahora o luego), aplicar descuentos, y cancelar pedidos. Incluye trazabilidad completa del impacto en stock.
Stock e Inventario: Lleva un registro en tiempo real de los productos (tanto en almacén central como en puestos). Automáticamente descuenta stock al concretar transacciones en la caja y lleva un registro de movimientos (StockMovement).
Gestión de Caja: Apertura y cierre de turnos/cajas, registro de ingresos o extracciones de dinero manuales y cuadraturas.
Clientes (Cuentas Corrientes): Administra la base de clientes y la deuda o saldo a favor de cada uno (las ventas marcadas como "fiado" impactan aquí).
Correcciones / Auditoría: Funcionalidades para auditoría o correcciones manuales tanto de la caja como del inventario físico cuando hay desfases.