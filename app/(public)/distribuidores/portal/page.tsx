"use client";

import Link from "next/link";
import { ArrowRight, Download, FileText, Package, TrendingUp, Users } from "lucide-react";
import { MOCK_PRODUCTS, MOCK_DISTRIBUTORS } from "@/data/mockData";

export default function DistributorPortalPage() {
  const distributor = MOCK_DISTRIBUTORS[0];
  const [orders] = ["ORD-2026-101", "ORD-2026-102", "ORD-2026-103"];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-4xl font-bold mb-2">{distributor.companyName}</h1>
              <p className="text-violet-100">
                Bienvenido, {distributor.contact}
              </p>
            </div>
            <button className="bg-white text-violet-600 px-6 py-2 rounded-lg font-semibold hover:bg-violet-50 transition-colors">
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              label: "Órdenes este mes",
              value: "12",
              icon: Package,
              color: "violet",
            },
            {
              label: "Monto total",
              value: "$32,500",
              icon: TrendingUp,
              color: "blue",
            },
            {
              label: "Descuento aplicado",
              value: `${(distributor.discount * 100).toFixed(0)}%`,
              icon: FileText,
              color: "green",
            },
            {
              label: "Productos disponibles",
              value: `${MOCK_PRODUCTS.length}`,
              icon: Users,
              color: "orange",
            },
          ].map((kpi, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-violet-200 hover:shadow-lg transition-all"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  {
                    violet: "bg-violet-100 text-violet-600",
                    blue: "bg-blue-100 text-blue-600",
                    green: "bg-green-100 text-green-600",
                    orange: "bg-orange-100 text-orange-600",
                  }[kpi.color]
                }`}
              >
                <kpi.icon size={24} />
              </div>
              <p className="text-sm text-gray-600 mb-1">{kpi.label}</p>
              <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price List */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Lista de precios mayorista
                </h2>
                <button className="flex items-center gap-2 text-violet-600 hover:text-violet-700 font-semibold">
                  <Download size={20} />
                  Descargar
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Producto
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Precio público
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Precio mayorista
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Margen
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Stock
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_PRODUCTS.map((product) => {
                      const wholesalePrice = Math.round(
                        product.price * (1 - distributor.discount)
                      );
                      const margin = product.price - wholesalePrice;
                      return (
                        <tr
                          key={product.id}
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="py-3 px-4 font-medium text-gray-900">
                            {product.name}
                          </td>
                          <td className="py-3 px-4 text-gray-700">
                            ${product.price}
                          </td>
                          <td className="py-3 px-4 font-semibold text-violet-600">
                            ${wholesalePrice}
                          </td>
                          <td className="py-3 px-4 text-green-600 font-semibold">
                            ${margin}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                product.stock > 5
                                  ? "bg-green-100 text-green-700"
                                  : "bg-yellow-100 text-yellow-700"
                              }`}
                            >
                              {product.stock}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Pedidos recientes
                </h2>
                <Link
                  href="/distribuidores/portal/pedido"
                  className="flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  Nuevo pedido
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Número
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Fecha
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Monto
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Estado
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        number: "ORD-2026-101",
                        date: "2026-05-25",
                        amount: "$4,250",
                        status: "Enviado",
                        statusColor: "bg-green-100 text-green-700",
                      },
                      {
                        number: "ORD-2026-102",
                        date: "2026-05-24",
                        amount: "$6,800",
                        status: "En producción",
                        statusColor: "bg-blue-100 text-blue-700",
                      },
                      {
                        number: "ORD-2026-103",
                        date: "2026-05-23",
                        amount: "$3,500",
                        status: "Pagado",
                        statusColor: "bg-purple-100 text-purple-700",
                      },
                    ].map((order) => (
                      <tr
                        key={order.number}
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="py-3 px-4 font-medium text-violet-600">
                          {order.number}
                        </td>
                        <td className="py-3 px-4 text-gray-700">{order.date}</td>
                        <td className="py-3 px-4 font-semibold text-gray-900">
                          {order.amount}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${order.statusColor}`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-violet-600 hover:text-violet-700 font-semibold text-sm">
                            Ver →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Account Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Datos de cuenta
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Contacto</p>
                  <p className="font-medium text-gray-900">{distributor.contact}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Email</p>
                  <p className="font-medium text-gray-900">{distributor.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Teléfono</p>
                  <p className="font-medium text-gray-900">{distributor.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Ciudad</p>
                  <p className="font-medium text-gray-900">{distributor.city}</p>
                </div>
              </div>
            </div>

            {/* Plan Info */}
            <div className="bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Tu plan</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-600 mb-1">Plan actual</p>
                  <p className="text-xl font-bold text-violet-600">Oro</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Descuento</p>
                  <p className="text-2xl font-bold text-violet-600">
                    {(distributor.discount * 100).toFixed(0)}%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 mb-1">Volumen anual</p>
                  <p className="font-medium text-gray-900">
                    ${distributor.estimatedVolume.toLocaleString()}
                  </p>
                </div>
                <button className="w-full mt-4 text-violet-600 hover:text-violet-700 font-semibold text-sm border border-violet-200 rounded-lg py-2">
                  Upgradear plan
                </button>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">
                Documentos
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Contrato", file: "distributor-contract.pdf" },
                  { name: "Catálogo 2024", file: "catalog-2024.pdf" },
                  { name: "Términos comerciales", file: "terms.pdf" },
                ].map((doc, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition-colors text-left"
                  >
                    <FileText size={18} className="text-violet-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-900">
                      {doc.name}
                    </span>
                    <Download size={16} className="ml-auto text-gray-400" />
                  </button>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg text-blue-900 mb-2">¿Necesitas ayuda?</h3>
              <p className="text-sm text-blue-700 mb-4">
                Nuestro equipo de soporte está disponible para responder tus preguntas.
              </p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm">
                Contactar soporte
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
