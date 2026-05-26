"use client";

import Link from "next/link";
import { Search, Filter, Download, Eye, TrendingUp } from "lucide-react";
import { MOCK_DISTRIBUTORS } from "@/data/mockData";
import { useState } from "react";

export default function DistributorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("");

  const filteredDistributors = MOCK_DISTRIBUTORS.filter((dist) => {
    const matchesSearch = dist.companyName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus = !statusFilter || dist.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Distribuidores</h1>
        <p className="text-gray-600 mt-2">
          Gestiona la red de distribución y relaciones comerciales
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar distribuidor..."
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
          <option value="pending">Pendiente</option>
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>

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
                  Empresa
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Contacto
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Ciudad
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Volumen anual
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Descuento
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
              {filteredDistributors.map((distributor) => (
                <tr
                  key={distributor.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {distributor.companyName}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    <div className="text-gray-900">{distributor.contact}</div>
                    <div className="text-sm text-gray-600">{distributor.email}</div>
                  </td>
                  <td className="py-4 px-6 text-gray-900">{distributor.city}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    ${distributor.estimatedVolume.toLocaleString()}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-violet-600">
                      {(distributor.discount * 100).toFixed(0)}%
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        {
                          pending: "bg-yellow-100 text-yellow-700",
                          active: "bg-green-100 text-green-700",
                          inactive: "bg-gray-100 text-gray-700",
                        }[distributor.status]
                      }`}
                    >
                      {distributor.status.charAt(0).toUpperCase() +
                        distributor.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <button className="inline-flex items-center gap-1 text-violet-600 hover:text-violet-700 font-semibold text-sm">
                      Ver <Eye size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Mostrando {filteredDistributors.length} de{" "}
          {MOCK_DISTRIBUTORS.length} distribuidores
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
