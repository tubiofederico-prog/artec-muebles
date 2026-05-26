"use client";

import Link from "next/link";
import { Search, Filter, Download, Eye, ChevronRight } from "lucide-react";
import { MOCK_ORDERS } from "@/data/mockData";
import { useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filteredOrders = MOCK_ORDERS.filter((order) => {
    const matchesSearch =
      order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer?.lastName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statuses = [
    "new",
    "payment_confirmed",
    "in_production",
    "ready_to_ship",
    "shipped",
    "delivered",
  ];

  const statusLabels: Record<string, string> = {
    new: "Nuevo",
    payment_confirmed: "Pago confirmado",
    in_production: "En producción",
    ready_to_ship: "Listo para enviar",
    shipped: "Enviado",
    delivered: "Entregado",
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Pedidos</h1>
        <p className="text-gray-600 mt-2">Gestiona todos los pedidos del sistema</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search
            size={20}
            className="absolute left-3 top-3 text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar por número o cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
        >
          <option value="">Todos los estados</option>
          {statuses.map((status) => (
            <option key={status} value={status}>
              {statusLabels[status]}
            </option>
          ))}
        </select>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter size={18} />
          Filtros
        </button>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={18} />
          Exportar
        </button>
      </div>

      {/* Orders Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Número
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Cliente
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Fecha
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Total
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Estado
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/pedidos/${order.id}`}
                      className="font-semibold text-violet-600 hover:text-violet-700"
                    >
                      {order.orderNumber}
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-gray-900">
                    {order.customer?.firstName} {order.customer?.lastName}
                  </td>
                  <td className="py-4 px-6 text-gray-600">{order.createdAt}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    ${order.total.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/pedidos/${order.id}`}
                      className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-700 font-semibold text-sm"
                    >
                      Ver <Eye size={16} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Mostrando {filteredOrders.length} de {MOCK_ORDERS.length} pedidos
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Anterior
          </button>
          <button className="px-4 py-2 border border-violet-600 bg-violet-50 text-violet-600 rounded-lg font-semibold">
            1
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}
