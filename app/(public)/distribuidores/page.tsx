"use client";

import Link from "next/link";
import { ArrowRight, Check, TrendingUp, Users, Zap } from "lucide-react";

export default function DistributorsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Programa para
            <span className="block text-violet-600">Distribuidores</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Accede a condiciones comerciales premium, precios mayoristas y un portal de gestión dedicado. Crece tu negocio de muebles con los mejores productos de Artec.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/distribuidores/acceso"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Iniciar sesión
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#solicitar"
              className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Solicitar acceso
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Ventajas para distribuidores
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Descuentos Mayoristas",
                description:
                  "Accede a precios especiales desde el 20% al 30% dependiendo de tu volumen de compra anual.",
              },
              {
                icon: Zap,
                title: "Portal Dedicado",
                description:
                  "Gestiona tus pedidos, consulta precios en tiempo real, historial de compras y cartera de clientes.",
              },
              {
                icon: Users,
                title: "Apoyo Comercial",
                description:
                  "Equipo dedicado para asesoramiento, estrategias de venta y materiales promocionales.",
              },
              {
                icon: Check,
                title: "Condiciones Flexibles",
                description:
                  "Plazos de pago extendidos hasta 60 días y opciones de financiación especiales.",
              },
              {
                icon: Check,
                title: "Productos Premium",
                description:
                  "Acceso a nuestro catálogo completo de muebles personalizables de alta gama.",
              },
              {
                icon: Check,
                title: "Prioridad en Entregas",
                description:
                  "Entregas rápidas y seguimiento en tiempo real de tus pedidos mayoristas.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="text-violet-600" size={24} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Planes de distribución
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Distribuidor Plata",
              volume: "Hasta $50,000/año",
              discount: "20%",
              features: [
                "Portal de pedidos",
                "Catálogo completo",
                "Soporte por email",
                "Paymet terms 30 días",
              ],
              cta: "Solicitar",
              highlight: false,
            },
            {
              name: "Distribuidor Oro",
              volume: "$50,000 - $150,000/año",
              discount: "25%",
              features: [
                "Todo de Plata +",
                "Gestor dedicado",
                "Soporte prioritario",
                "Payment terms 45 días",
                "Materiales de marketing",
              ],
              cta: "Solicitar",
              highlight: true,
            },
            {
              name: "Distribuidor Platino",
              volume: "Más de $150,000/año",
              discount: "30%",
              features: [
                "Todo de Oro +",
                "Acceso a nuevos productos",
                "Financiación disponible",
                "Payment terms 60 días",
                "Estrategia comercial personalizada",
              ],
              cta: "Contactar",
              highlight: false,
            },
          ].map((tier, i) => (
            <div
              key={i}
              className={`rounded-lg border-2 p-8 transition-all ${
                tier.highlight
                  ? "border-violet-600 bg-violet-50 shadow-lg scale-105"
                  : "border-gray-200 bg-white hover:border-violet-200"
              }`}
            >
              {tier.highlight && (
                <div className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                  Recomendado
                </div>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {tier.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{tier.volume}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-violet-600">
                  {tier.discount}
                </span>
                <span className="text-gray-600 ml-2">descuento</span>
              </div>

              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <Check size={20} className="text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  tier.highlight
                    ? "bg-violet-600 text-white hover:bg-violet-700"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Cómo comenzar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Solicita acceso",
                description:
                  "Completa el formulario con los datos de tu empresa y volumen estimado.",
              },
              {
                step: 2,
                title: "Aprobación",
                description:
                  "Nuestro equipo revisa tu solicitud y confirma el plan que mejor se ajusta.",
              },
              {
                step: 3,
                title: "Acceso al portal",
                description:
                  "Obtén credenciales para ingresar a tu panel distribuidor personalizado.",
              },
              {
                step: 4,
                title: "Comienza a vender",
                description:
                  "Gestiona pedidos, accede a precios mayoristas y reportes detallados.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="solicitar" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Solicita acceso hoy
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Únete a nuestra red de distribuidores exitosos y crece tu negocio de muebles con los mejores productos premium.
            </p>

            <div className="space-y-6">
              {[
                "Respuesta en 24 horas",
                "Equipo dedicado a tu servicio",
                "Condiciones comerciales competitivas",
                "Soporte continuo",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-violet-600" size={16} />
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre de empresa
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="Tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Contacto
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="Nombre completo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="+34 XXX XXX XXX"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Ciudad/Región
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="Tu ciudad"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Volumen estimado anual
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600">
                  <option>Selecciona rango</option>
                  <option>Menos de $50,000</option>
                  <option>$50,000 - $150,000</option>
                  <option>Más de $150,000</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Enviar solicitud
              </button>

              <p className="text-sm text-gray-600 text-center">
                Nos pondremos en contacto dentro de 24 horas hábiles
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Preguntas frecuentes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "¿Cuál es el volumen mínimo?",
                a: "Puedes comenzar con nuestro plan Plata a partir de $5,000 anuales. No hay máximo.",
              },
              {
                q: "¿Cómo funciona el descuento?",
                a: "El descuento se aplica directamente en todos tus pedidos según tu plan.",
              },
              {
                q: "¿Qué plazos de pago ofrecen?",
                a: "Plata: 30 días, Oro: 45 días, Platino: 60 días. También financiación disponible.",
              },
              {
                q: "¿Puedo subir de plan?",
                a: "Sí, tu plan se ajusta automáticamente según tu volumen de compra.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
