# Artec Muebles - Plataforma B2B Premium 🪑

Prototipo visual completo y funcional de una plataforma de venta de muebles personalizados en Next.js 16.

## 🚀 Inicio Rápido

```bash
cd /Users/federicotubio/artec-muebles
npm run dev
```

Accede a **http://localhost:3001** en tu navegador.

---

## 📋 Estructura del Proyecto

### Carpetas principales:
- `app/` - Páginas y rutas de Next.js
  - `(public)/` - Sección pública (landing, catálogo, configurador, carrito)
  - `(admin)/` - Sección administrativa (dashboard, pedidos, inventario, etc.)
- `components/` - Componentes reutilizables (layouts, UI)
- `types/` - Definiciones TypeScript
- `data/` - Datos mock realistas
- `lib/` - Funciones utilitarias

---

## 🎨 Diseño y Estética

**Colores principales:**
- Primario: Violet-600 (#7C3AED)
- Acento: Indigo-500 (#6366F1)
- Fondos: White, Gray-50, Gray-100
- Texto: Gray-900, Gray-600, Gray-400

**Características de diseño:**
- Premium B2B minimalista
- Mucho espacio en blanco
- Cards con bordes redondeados (rounded-lg)
- Sombras suaves (shadow-sm)
- Tipografía moderna (Inter)
- Responsive (mobile-first)
- Animaciones sutiles con Framer Motion

---

## 📄 Páginas y Rutas

### SECCIÓN PÚBLICA

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page con hero, beneficios, cómo funciona, muebles destacados |
| `/configurador` | Configurador 3D visual - seleccionar tipo, material, color, medidas |
| `/catalogo` | Catálogo de productos con filtros por categoría, color, precio |
| `/catalogo/[id]` | Detalle de producto con especificaciones completas |
| `/carrito` | Carrito de compras con cantidad, precios, total |
| `/checkout` | Formulario de checkout con dirección y método de pago |
| `/confirmacion` | Confirmación de pedido con número de orden y timeline |
| `/distribuidores` | Landing para distribuidores con beneficios y solicitud |
| `/distribuidores/acceso` | Login para distribuidores |
| `/distribuidores/portal` | Dashboard del distribuidor con precios y pedidos |
| `/distribuidores/portal/pedido` | Formulario de nuevo pedido mayorista |

### SECCIÓN ADMINISTRATIVA

| Ruta | Descripción |
|------|-------------|
| `/admin` | Dashboard con KPIs, gráficos, accesos rápidos |
| `/admin/pedidos` | Lista de pedidos con filtros y búsqueda |
| `/admin/pedidos/[id]` | Detalle de pedido con timeline y acciones |
| `/admin/clientes` | CRM de clientes finales |
| `/admin/clientes/[id]` | Perfil de cliente con historial |
| `/admin/distribuidores` | Gestión de distribuidores |
| `/admin/inventario` | Stock de materiales y componentes |
| `/admin/inventario/[id]` | Detalle de material con movimientos |
| `/admin/produccion` | Kanban de fabricación (6 estados) |
| `/admin/ia` | Inbox de conversaciones con agente IA |
| `/admin/finanzas` | Dashboard financiero con gráficos |
| `/admin/reportes` | Reportes ejecutivos y analítica |
| `/admin/configuracion` | Configuración del sistema |

---

## 💾 Datos Mock

El proyecto incluye datos realistas mockeados para:

- **15 Productos** - Mesas, escritorios, bibliotecas, muebles TV
- **12 Materiales** - Maderas premium, tableros, herrajes, pinturas
- **4 Clientes** - Con historial de compras y segmentación
- **3 Distribuidores** - Con condiciones comerciales
- **2+ Órdenes** - En diferentes estados de producción
- **2+ Órdenes de Producción** - Con timeline de fabricación
- **2+ Conversaciones IA** - Simulación de chatbot
- **6+ Transacciones financieras** - Ingresos y egresos
- **6 KPIs** - Métricas principales del negocio
- **12 Meses de datos** - Series de ventas para gráficos

Ubicación: `/data/mockData.ts`

---

## 🔧 Tecnologías Utilizadas

| Tecnología | Propósito |
|------------|-----------|
| **Next.js 16** | Framework web/SSR |
| **React 19** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Estilos responsive |
| **Recharts** | Gráficos y visualizaciones |
| **Framer Motion** | Animaciones sutiles |
| **Lucide React** | Iconografía |
| **shadcn/ui** (setup listo) | Componentes base |

---

## 🎯 Funcionalidades Implementadas

✅ **Navegación completa** - Todos los botones redirigen a rutas reales
✅ **Configurador visual** - Seleccionar tipo, material, color, medidas
✅ **Precios dinámicos** - Cambian según configuración
✅ **Carrito funcional** - Agregar, eliminar, actualizar cantidad
✅ **Checkout visual** - Formularios de dirección y pago
✅ **Dashboard admin** - KPIs, gráficos, accesos rápidos
✅ **Tablas de datos** - Órdenes, clientes, inventario, etc.
✅ **Filtros y búsqueda** - En catálogo y gestión
✅ **Estado visual** - Badges de estado con colores
✅ **Timeline** - Historial de pedidos y producción
✅ **Gráficos Recharts** - Ventas, productos, estado de pedidos
✅ **Responsive design** - Mobile, tablet, desktop
✅ **Modo distribuidor** - Portal separado con precios mayoristas

---

## 📊 Componentes Reutilizables

### En `/components/ui/`:
- **KPICard** - Tarjetas de métricas con tendencias
- **StatusBadge** - Badges coloreados por estado
- **ProductCard** - Tarjeta de producto con CTA
- Más disponibles para expandir

### En `/components/layout/`:
- **PublicNav** - Navegación pública responsive
- **PublicFooter** - Footer con enlaces
- **AdminSidebar** - Navegación sidebar del admin
- **AdminHeader** - Header con búsqueda y notificaciones

---

## 🎮 Cómo Explorar el Prototipo

1. **Flujo de Cliente Final:**
   - `/` (Landing) → `/configurador` → `/catalogo` → `/carrito` → `/checkout` → `/confirmacion`

2. **Flujo de Distribuidor:**
   - `/distribuidores` → `/distribuidores/acceso` → `/distribuidores/portal` → `/distribuidores/portal/pedido`

3. **Panel Administrativo:**
   - `/admin` (Dashboard) → Explora cada módulo en el sidebar
   - `/admin/pedidos` → Click en un pedido para ver detalle
   - `/admin/clientes` → Ver perfil de cliente
   - `/admin/inventario` → Ver materiales y stock
   - `/admin/produccion` → Ver Kanban
   - `/admin/ia` → Ver conversaciones
   - `/admin/finanzas` → Ver gráficos financieros

---

## ✨ Características Especiales

### Configurador 3D
- Selección interactiva de tipo de mueble
- Vista previa con emoji como simulación
- Controles deslizantes para medidas
- Precio dinámico que actualiza en tiempo real
- Validación de stock

### Dashboard Admin
- 6 KPIs principales con tendencias
- Gráficos de línea para ventas
- Gráfico de barras para productos top
- Gráfico de pie para estado de pedidos
- Accesos rápidos a alertas
- Tabla de pedidos recientes
- Sticky header para fácil navegación

### Portal Distribuidores
- Precios especiales con descuento
- Tabla de precios actualizable
- Historial de pedidos
- Condiciones comerciales
- Formulario de nuevo pedido mayorista

---

## 🔄 Estado de Páginas

| Página | Estado | Notas |
|--------|--------|-------|
| Todas las 22+ páginas | ✅ COMPLETAS | Navegables, con datos, funcionales |
| Formularios | ✅ VISUALES | Sin envío real (frontend-only) |
| Datos | ✅ MOCKEADOS | En /data/mockData.ts |
| Gráficos | ✅ ACTIVOS | Con Recharts |
| Responsive | ✅ SÍ | Mobile-first, tested |
| Animaciones | ⚠️ SETUP | Framer Motion instalado, ready |

---

## 🚀 Próximos Pasos (Opcional)

Para continuar el desarrollo:

1. **Conectar a backend real** - Cambiar calls de mock por API
2. **Implementar autenticación** - Login real con JWT
3. **Agregar pago real** - Stripe, PayPal, etc.
4. **Mejorar 3D** - Integrar Three.js para 3D real
5. **AI real** - Integrar Claude API para chatbot
6. **Base de datos** - PostgreSQL, Supabase, etc.
7. **Hosting** - Vercel, AWS, etc.

---

## 📝 Notas Importantes

- Todos los formularios son **visuales only** (sin backend)
- Los datos son **100% mockeados** pero realistas
- El proyecto es **100% responsive**
- Las rutas usan **Next.js App Router** moderno
- El diseño es **premium B2B** con atención al detalle
- El código sigue **mejores prácticas** de Next.js 16

---

## 🎯 Objetivo Cumplido

✅ **Prototipo visual completo** para presentar a cliente
✅ **Todas las vistas** solicitadas están implementadas
✅ **Navegación fluida** entre todas las secciones
✅ **Diseño premium** y profesional
✅ **Datos realistas** que simulan un sistema real
✅ **Responsive** en todos los dispositivos
✅ **Listo para** demos y presentaciones

---

Disfrutá explorando la plataforma Artec Muebles! 🎉
