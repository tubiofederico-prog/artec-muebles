"use client";

import Link from "next/link";
import { CheckCircle, Package, Truck, Home } from "lucide-react";

export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Success Message */}
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center mb-8">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            ¡Pedido Confirmado!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Gracias por tu compra. Tu mueble está siendo fabricado con cuidado.
          </p>

          {/* Order Number */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-600 mb-2">Número de pedido</p>
            <p className="text-3xl font-bold text-violet-600">ORD-2026-001</p>
          </div>

          {/* Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-lg text-gray-900 mb-4">
              Detalles de tu pedido
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">1x Mesa de Sala Premium</span>
                <span className="font-bold text-gray-900">$2,100</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Personalización: Roble • Natural</span>
                <span></span>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-3">
                <span className="text-gray-600">Envío Estándar</span>
                <span className="font-bold text-gray-900">$150</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total pagado</span>
                <span className="font-bold text-2xl text-violet-600">$2,250</span>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-12">
            <h2 className="font-bold text-lg text-gray-900 mb-6">
              Seguimiento de tu pedido
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-gray-900">Pago confirmado</p>
                  <p className="text-sm text-gray-600">26 de mayo de 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-gray-500" />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-gray-900">En producción</p>
                  <p className="text-sm text-gray-600">Próxima etapa: 27 de mayo</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="w-6 h-6 text-gray-500" />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-gray-900">Listo para enviar</p>
                  <p className="text-sm text-gray-600">Estimado: 2 de junio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Home className="w-6 h-6 text-gray-500" />
                </div>
                <div className="pt-1">
                  <p className="font-bold text-gray-900">Entregado</p>
                  <p className="text-sm text-gray-600">Estimado: 5 de junio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-blue-900 mb-2">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-sm text-blue-700 mb-3">
              Puedes hacer seguimiento a tu pedido desde tu cuenta o contactarnos por WhatsApp.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700"
              >
                Ver seguimiento completo
              </a>
              <a
                href="https://wa.me/34912345678"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-3">
            <Link
              href="/catalogo"
              className="inline-block bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center"
            >
              Continuar comprando
            </Link>
            <Link
              href="/"
              className="inline-block bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
