"use client";

import Link from "next/link";
import { ArrowLeft, Download, MapPin, Phone, Mail, Package, CheckCircle, Truck, Clock } from "lucide-react";
import { MOCK_ORDERS } from "@/data/mockData";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = MOCK_ORDERS.find((o) => o.id === params.id) || MOCK_ORDERS[0];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/admin/pedidos"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
        >
          <ArrowLeft size={20} />
          Volver a pedidos
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {order.orderNumber}
            </h1>
            <p className="text-gray-600 mt-2">
              Creado el {order.createdAt}
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download size={18} />
              Descargar PDF
            </button>
            <StatusBadge status={order.status} type="order" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Customer Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información del cliente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  {order.customer?.firstName} {order.customer?.lastName}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Email</p>
                      <p className="font-medium text-gray-900">
                        {order.customer?.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600">Teléfono</p>
                      <p className="font-medium text-gray-900">
                        {order.customer?.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-4">
                  Dirección de envío
                </h3>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-900">
                      {order.shippingAddress?.street}
                    </p>
                    <p className="text-gray-900">
                      {order.shippingAddress?.zipCode}{" "}
                      {order.shippingAddress?.city}
                    </p>
                    <p className="text-gray-900">
                      {order.shippingAddress?.state},{" "}
                      {order.shippingAddress?.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Artículos del pedido
            </h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-6 pb-4 border-b border-gray-200 last:border-0 last:pb-0"
                >
                  <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {item.product.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">
                      {item.product.name}
                    </h3>
                    {item.customization && (
                      <p className="text-sm text-gray-600">
                        {item.customization.color} • {item.customization.material}
                      </p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600 mb-1">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="font-bold text-gray-900">
                      ${item.subtotal.toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Línea de tiempo
            </h2>
            <div className="space-y-6">
              {order.timeline.map((event, i) => (
                <div key={i} className="flex gap-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-10 h-10 bg-violet-100 border-4 border-white rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle size={18} className="text-violet-600" />
                    </div>
                    {i < order.timeline.length - 1 && (
                      <div className="w-1 h-12 bg-gray-200 my-2"></div>
                    )}
                  </div>
                  <div className="pt-1 pb-6">
                    <p className="font-bold text-gray-900">
                      {event.description}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Resumen financiero</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold text-gray-900">
                  ${order.subtotal.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span className="font-semibold text-gray-900">
                  ${order.shipping.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-2xl text-violet-600">
                  ${order.total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Truck size={20} className="text-gray-400" />
              Envío
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600">Método</p>
                <p className="font-medium text-gray-900">Envío Estándar</p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Entrega estimada</p>
                <p className="font-medium text-gray-900">
                  {order.estimatedDelivery}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Seguimiento</p>
                <p className="font-medium text-violet-600 font-mono">
                  ARTEC-{order.orderNumber.replace("ORD-", "")}
                </p>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Pago</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600">Método</p>
                <p className="font-medium text-gray-900">
                  {order.paymentMethod}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600">Estado</p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                  Confirmado
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Acciones</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-900">
                Generar etiqueta
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-900">
                Enviar notificación
              </button>
              <button className="w-full px-4 py-2 border border-red-300 rounded-lg hover:bg-red-50 transition-colors text-sm font-semibold text-red-600">
                Cancelar pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
