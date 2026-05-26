"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, ShoppingBag } from "lucide-react";
import { MOCK_CUSTOMERS, MOCK_ORDERS } from "@/data/mockData";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function CustomerDetailPage({ params }: { params: { id: string } }) {
  const customer = MOCK_CUSTOMERS.find((c) => c.id === params.id) || MOCK_CUSTOMERS[0];
  const customerOrders = MOCK_ORDERS.filter((o) => o.customer?.id === customer.id);

  return (
    <div className="space-y-8">
      <Link
        href="/admin/clientes"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        Volver a clientes
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Customer Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {customer.firstName} {customer.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Información de contacto
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Teléfono</p>
                      <p className="font-medium text-gray-900">
                        {customer.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Dirección</h3>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">{customer.address.street}</p>
                    <p className="text-gray-900">
                      {customer.address.zipCode} {customer.address.city}
                    </p>
                    <p className="text-gray-900">
                      {customer.address.state}, {customer.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Purchase History */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Historial de compras
            </h2>
            {customerOrders.length === 0 ? (
              <p className="text-gray-600">No hay pedidos registrados</p>
            ) : (
              <div className="space-y-4">
                {customerOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <Link
                        href={`/admin/pedidos/${order.id}`}
                        className="font-semibold text-violet-600 hover:text-violet-700"
                      >
                        {order.orderNumber}
                      </Link>
                      <p className="text-sm text-gray-600 mt-1">
                        {order.createdAt} • {order.items.length} artículo(s)
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-gray-900">
                        ${order.total.toLocaleString()}
                      </p>
                      <StatusBadge status={order.status} type="order" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Stats */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Estadísticas</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-600 mb-1">Gasto total</p>
                <p className="text-3xl font-bold text-violet-600">
                  ${customer.totalSpent.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Total de pedidos</p>
                <p className="text-3xl font-bold text-gray-900">
                  {customer.orderCount}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Ticket promedio</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${Math.round(customer.totalSpent / Math.max(customer.orderCount, 1)).toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Segment */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Segmento</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-1">Clasificación</p>
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                    {
                      new: "bg-blue-100 text-blue-700",
                      recurring: "bg-purple-100 text-purple-700",
                      vip: "bg-yellow-100 text-yellow-700",
                    }[customer.segment]
                  }`}
                >
                  {customer.segment.charAt(0).toUpperCase() + customer.segment.slice(1)}
                </span>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Última actividad</p>
                <p className="font-medium text-gray-900">{customer.lastActivity}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">Miembro desde</p>
                <p className="font-medium text-gray-900">{customer.createdAt}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Acciones</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-900">
                Enviar mensaje
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-900">
                Crear nota
              </button>
              <button className="w-full px-4 py-2 border border-violet-300 rounded-lg hover:bg-violet-50 transition-colors text-sm font-semibold text-violet-600">
                Cambiar segmento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
