"use client";

import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import { MOCK_PRODUCTS } from "@/data/mockData";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Muebles Premium
              <span className="block text-violet-600">Personalizados</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Diseña el mueble perfecto para tu espacio. Cientos de combinaciones de materiales, colores y medidas. Envío rápido y garantía de calidad.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/configurador"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Diseñar mi mueble
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Ver catálogo
              </Link>
            </div>

            <div className="mt-12 flex gap-8 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-gray-900">10+</p>
                <p className="text-sm text-gray-600 mt-1">Años de experiencia</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5000+</p>
                <p className="text-sm text-gray-600 mt-1">Clientes satisfechos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600 mt-1">Personalizable</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-violet-100 to-indigo-100 rounded-2xl flex items-center justify-center text-8xl">
              🪑
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border-2 border-gray-200 rounded-lg p-4 shadow-lg">
              <p className="text-sm font-semibold text-gray-900">Tecnología 3D</p>
              <p className="text-xs text-gray-600 mt-1">Visualiza tu diseño</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Artec Muebles?
            </h2>
            <p className="text-xl text-gray-600">
              Ofrecemos la mejor experiencia en muebles personalizados
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Diseño a tu medida",
                description:
                  "Personaliza cada detalle: materiales, colores, medidas exactas.",
              },
              {
                title: "Materiales premium",
                description:
                  "Roble, caoba, nogal y otros materiales de la más alta calidad.",
              },
              {
                title: "Fabricación local",
                description:
                  "Producción en España con estándares de calidad europeos.",
              },
              {
                title: "Entrega rápida",
                description:
                  "Entre 10-15 días desde la confirmación del pedido.",
              },
              {
                title: "Garantía completa",
                description:
                  "2 años de garantía en todos nuestros productos.",
              },
              {
                title: "Asesoría experta",
                description:
                  "Equipo de diseño listo para ayudarte 24/7 por WhatsApp.",
              },
            ].map((benefit, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-gray-200 hover:border-violet-200 transition-colors"
              >
                <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mb-4">
                  <Check className="text-violet-600" size={24} />
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

      {/* How it Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600">
            4 pasos simples para obtener tu mueble personalizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Elige tipo",
              description: "Selecciona el mueble que deseas personalizar",
            },
            {
              step: 2,
              title: "Personaliza",
              description:
                "Elige materiales, colores y medidas exactas para tu espacio",
            },
            {
              step: 3,
              title: "Visualiza",
              description:
                "Visualiza tu diseño en 3D antes de comprar",
            },
            {
              step: 4,
              title: "Compra",
              description: "Confirma tu pedido y recíbelo en días",
            },
          ].map((step) => (
            <div key={step.step} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Muebles destacados
              </h2>
              <p className="text-gray-600">
                Nuestras opciones más populares y elegantes
              </p>
            </div>
            <Link
              href="/catalogo"
              className="text-violet-600 hover:text-violet-700 font-semibold flex items-center gap-1"
            >
              Ver todos
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold text-violet-600 mb-2">
                    Personalizable
                  </p>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <Link
                      href={`/catalogo/${product.id}`}
                      className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
                    >
                      Ver detalle →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distributors CTA */}
      <section className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Eres distribuidor?</h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Accede a precios mayoristas, condiciones comerciales especiales y un
            portal de gestión dedicado.
          </p>
          <Link
            href="/distribuidores"
            className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 px-8 py-4 rounded-lg font-semibold hover:bg-violet-50 transition-colors"
          >
            Soy distribuidor
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Confianza y experiencia
              </h2>
              <div className="space-y-6">
                {[
                  "Más de 10 años en el mercado",
                  "5000+ clientes satisfechos",
                  "100% productos personalizables",
                  "Garantía de 2 años",
                  "Soporte 24/7 por WhatsApp",
                  "Fabricación local en España",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="text-violet-600" size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-900 font-semibold mb-4">
                  "Excelente servicio de personalización"
                </p>
                <p className="text-gray-600 mb-6">
                  "He comprado varios muebles a Artec y siempre me sorprende la calidad y atención. El equipo de diseño es muy profesional y responden rápido a todas mis consultas."
                </p>
                <div>
                  <p className="font-bold text-gray-900">Juan Martínez</p>
                  <p className="text-sm text-gray-600">Cliente desde 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
