# 🪑 Artec Muebles - Instrucciones de Uso

## ▶️ Levantar el proyecto

El servidor está corriendo en **http://localhost:3001**

Si se detiene, ejecuta:
```bash
cd /Users/federicotubio/artec-muebles
npm run dev
```

---

## 🎮 FLUJOS DE EXPLORACIÓN RECOMENDADOS

### **1️⃣ FLUJO CLIENTE FINAL (E-commerce)**

Simula el proceso de compra de un cliente:

1. **Página de inicio** `http://localhost:3001`
   - Landing page premium
   - Click en "Diseñar mi mueble" o "Ver catálogo"

2. **Configurador 3D** `/configurador`
   - Selecciona tipo de mueble (Mesa, Escritorio, etc.)
   - Personaliza medidas (alto, ancho, profundidad)
   - Selecciona material y color
   - Observa precio dinámico
   - Click "Agregar al carrito"

3. **Catálogo** `/catalogo`
   - Explora 15 productos disponibles
   - Usa filtros por categoría, color, precio
   - Click "Personalizar" para ir al configurador
   - Click "Ver detalle" para más información

4. **Detalle de Producto** `/catalogo/[id]`
   - Especificaciones completas
   - Galería de imágenes
   - Materiales disponibles
   - CTA para personalizar

5. **Carrito** `/carrito`
   - Revisa productos agregados
   - Modifica cantidades
   - Ve el resumen de precios
   - Click "Proceder al checkout"

6. **Checkout** `/checkout`
   - Completa datos de envío (simulado)
   - Selecciona método de pago (simulado)
   - Click "Confirmar Compra"

7. **Confirmación** `/confirmacion`
   - Número de orden generado
   - Timeline de entrega
   - Detalles de pago
   - Opciones de seguimiento

---

### **2️⃣ FLUJO DISTRIBUIDOR (Portal B2B)**

Acceso especial para distribuidores mayoristas:

1. **Landing Distribuidores** `/distribuidores`
   - Beneficios comerciales
   - Precios mayoristas
   - Condiciones especiales
   - Formulario de solicitud
   - Click "Soy distribuidor"

2. **Login** `/distribuidores/acceso`
   - Formulario de login (simulado)
   - Credenciales de demo disponibles
   - Click "Entrar al portal"

3. **Portal Distribuidor** `/distribuidores/portal`
   - Dashboard con KPIs mayoristas
   - Tabla de precios especiales
   - Historial de pedidos
   - Condiciones comerciales
   - Click "Nuevo Pedido"

4. **Nuevo Pedido Mayorista** `/distribuidores/portal/pedido`
   - Selecciona productos
   - Define cantidades
   - Ve descuentos automáticos
   - Calcula total con impuestos
   - Simula confirmación

---

### **3️⃣ FLUJO ADMINISTRATIVO (Panel B2B)**

Panel de control interno para gestión empresarial:

#### **Dashboard Principal** `/admin`
- 6 KPIs principales (ventas, pedidos, clientes, etc.)
- Gráficos interactivos:
  - Ventas mensuales (línea)
  - Top 5 productos (barras)
  - Estado de pedidos (pie)
- Accesos rápidos a alertas
- Tabla de pedidos recientes

#### **Gestión de Pedidos** `/admin/pedidos`
- Lista completa de órdenes
- Filtros por estado, cliente, fecha
- Estado visual con badges de color
- Click en cualquier orden → detalle

#### **Detalle de Pedido** `/admin/pedidos/[id]`
- Datos del cliente
- Productos y configuración personalizada
- Precio desglosado
- Timeline visual:
  - ✓ Nuevo
  - ✓ Pago confirmado
  - ✓ En producción
  - ✓ Ensamblado
  - ✓ Listo para envío
  - ✓ Enviado
  - (Entregado)

#### **Gestión de Clientes** `/admin/clientes`
- CRM con 4 clientes de ejemplo
- Segmentación: Nuevo, Recurrente, VIP
- Valor total gastado
- Última actividad
- Click en cliente → perfil

#### **Perfil de Cliente** `/admin/clientes/[id]`
- Datos personales
- Historial de compras
- Muebles diseñados
- Total gastado
- Segmento

#### **Distribuidores** `/admin/distribuidores`
- Red de distribuidores
- Estado: Activo, Pendiente, Inactivo
- Condiciones de descuento
- Volumen estimado

#### **Inventario** `/admin/inventario`
- Stock de materiales:
  - Maderas (Roble, Caoba, Pino, Nogal)
  - Tableros (MDF, Contrachapado)
  - Herrajes (Bisagras, Manijas)
  - Acabados (Laca, Tinte, Chapas)
- Alertas de stock bajo/crítico
- Tabla con cantidad, mínimo, costo
- Click en material → detalle

#### **Detalle de Material** `/admin/inventario/[id]`
- Información del material
- Stock actual vs mínimo
- Movimientos históricos
- Botones: Registrar ingreso/egreso

#### **Producción** `/admin/produccion`
- Tablero Kanban visual con 6 columnas:
  1. Pendiente
  2. Materiales Reservados
  3. En Fabricación
  4. En Ensamblaje
  5. Control de Calidad
  6. Listo para Envío
- Tarjetas de órdenes de producción
- Información: Cliente, mueble, materiales, responsable

#### **Atención IA** `/admin/ia`
- Inbox de conversaciones
- Canales: WhatsApp, Web Chat, Formulario
- Estados: Nueva, En curso, IA respondió, Escalada, Cerrada
- Vista de conversación con mensajes
- Información detectada: Producto de interés, presupuesto, ciudad
- Botones: Responder con IA, Derivar a humano
- Métricas: Consultas, tiempo respuesta, leads

#### **Finanzas** `/admin/finanzas`
- Dashboard financiero:
  - Ingresos totales
  - Egresos por categoría
  - Utilidad estimada
  - Ticket promedio
- Tabla de movimientos:
  - Ingresos: Ventas online, mayorista
  - Egresos: Materiales, producción, envíos
- Filtros por fecha y categoría
- Botón "Generar Reporte Contable"

#### **Reportes** `/admin/reportes`
- Reportes ejecutivos:
  - Reporte de Ventas
  - Productos Más Vendidos
  - Clientes
  - Distribuidores
  - Stock
  - Atención al Cliente
- Cards de insights:
  - "Canal directo creció 18%"
  - "Escritorios tienen mayor margen"
  - "6 materiales en stock crítico"
- Gráficos y filtros por fecha
- Exportación a PDF simulada

#### **Configuración** `/admin/configuracion`
- Datos de empresa:
  - Nombre (Artec Muebles)
  - Logo
  - País, zona horaria
- Gestión de usuarios y roles:
  - Admin
  - Ventas
  - Producción
  - Inventario
  - Finanzas
- Configuración de:
  - Catálogo y materiales
  - Precios y costos
  - Métodos de pago
  - Métodos de envío
  - Agente IA
  - Integraciones

---

## 🎯 PUNTOS CLAVE PARA DEMOSTRAR

### **Diseño Premium**
- Colores: Violeta + Indigo (profesional, moderno)
- Espacios en blanco generosos
- Cards con sombras suaves
- Tipografía limpia y moderna
- Responsive perfecto (prueba en mobile)

### **Funcionalidades**
- Configurador visual con precio dinámico
- Gráficos interactivos con Recharts
- Tablas con filtros y búsqueda
- Estados visuales con badges de color
- Timeline de pedidos
- Kanban de producción

### **Datos Realistas**
- 15 productos con especificaciones
- 12 materiales con stock
- 4 clientes con historial
- 30+ pedidos en diferentes estados
- 2+ órdenes de producción
- Conversaciones de IA simuladas
- 6 meses de datos financieros

### **Navegación Completa**
- Todos los botones funcionan
- Redirecciones a páginas reales
- Rutas anidadas ([id])
- Búsqueda y filtros operativos

---

## 💡 CONSEJOS PARA DEMOSTRAR

1. **Empieza por la landing** - Muestra diseño premium
2. **Prueba el configurador** - Mueve los sliders, ve cambios dinámicos
3. **Agrega al carrito** - Simula compra completa
4. **Accede al admin** - Muestra KPIs y gráficos
5. **Haz click en pedido** - Timeline visual impacta
6. **Explora inventario** - Muestra alertas de stock
7. **Prueba en mobile** - Responsive funciona perfecto

---

## 📁 ESTRUCTURA DEL PROYECTO

```
/Users/federicotubio/artec-muebles/
├── app/
│   ├── (public)/          ← Rutas públicas
│   ├── (admin)/admin/     ← Rutas administrativas
│   ├── layout.tsx         ← Layout raíz
│   └── globals.css        ← Estilos Tailwind
├── components/
│   ├── layout/            ← Nav, Sidebar, Header
│   └── ui/                ← KPICard, StatusBadge, etc.
├── types/index.ts         ← Tipos TypeScript
├── data/mockData.ts       ← Datos mockeados
└── package.json
```

---

## 🔧 CAMBIOS IMPORTANTES

- **Node version**: v20.11.0
- **Next.js**: 16.2.6
- **React**: 19.2.4
- **Tailwind CSS**: v4
- **Recharts**: v3.8.1

---

## ⚠️ NOTAS

- ✅ Todos los formularios son visuales (sin backend)
- ✅ Todos los datos son mockeados
- ✅ Todas las 22+ páginas están creadas
- ✅ La navegación es 100% funcional
- ✅ El diseño es responsive
- ⚠️ No hay autenticación real
- ⚠️ No hay pagos reales
- ⚠️ No hay base de datos

---

## 📞 CONTACTO / AYUDA

Si necesitas:
- Cambiar colores → Edita `globals.css` y colores Tailwind
- Agregar más productos → Edita `/data/mockData.ts`
- Cambiar textos → Edita las páginas `.tsx`
- Agregar nuevas páginas → Crea en `/app/(public)` o `/app/(admin)/admin`

---

**¡Estás listo para explorar Artec Muebles!** 🚀

Dirígete a: **http://localhost:3001**
