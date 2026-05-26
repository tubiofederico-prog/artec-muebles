"use client";

import Link from "next/link";
import { Search, Filter, Download, Eye, TrendingUp } from "lucide-react";
import { MOCK_CUSTOMERS } from "@/data/mockData";
import { useState } from "react";

export default function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = MOCK_CUSTOMERS.filter(
    (customer) =>
      customer.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Clientes</h1>
        <p className="text-gray-600 mt-2">CRM y gestión de relaciones con clientes</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Filter size={18} />
          Filtros
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={18} />
          Exportar
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Nombre
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Email
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Ciudad
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Gasto total
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Pedidos
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Segmento
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/clientes/${customer.id}`}
                      className="font-semibold text-violet-600 hover:text-violet-700"
                    >
                      {customer.firstName} {customer.lastName}
                    </Link>
                  </td>
                  <td className="py-4 px-6 text-gray-600">{customer.email}</td>
                  <td className="py-4 px-6 text-gray-900">{customer.address.city}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    ${customer.totalSpent.toLocaleString()}
                  </td>
                  <td className="py-4 px-6 text-gray-900">{customer.orderCount}</td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        {
                          new: "bg-blue-100 text-blue-700",
                          recurring: "bg-purple-100 text-purple-700",
                          vip: "bg-yellow-100 text-yellow-700",
                        }[customer.segment]
                      }`}
                    >
                      {customer.segment.charAt(0).toUpperCase() + customer.segment.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/clientes/${customer.id}`}
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

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Mostrando {filteredCustomers.length} de {MOCK_CUSTOMERS.length} clientes
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
