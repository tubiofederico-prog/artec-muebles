"use client";

import Link from "next/link";
import { Search, Filter, Download, AlertTriangle, TrendingUp } from "lucide-react";
import { MOCK_MATERIALS } from "@/data/mockData";
import { useState } from "react";

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("");

  const filteredMaterials = MOCK_MATERIALS.filter((material) => {
    const matchesSearch = material.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || material.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    ...new Set(MOCK_MATERIALS.map((m) => m.category)),
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Inventario</h1>
        <p className="text-gray-600 mt-2">
          Gestión de materiales y niveles de stock
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Total de materiales",
            value: MOCK_MATERIALS.length,
            color: "violet",
          },
          {
            label: "Stock crítico",
            value: MOCK_MATERIALS.filter((m) => m.status === "critical").length,
            color: "red",
          },
          {
            label: "Stock bajo",
            value: MOCK_MATERIALS.filter((m) => m.status === "low").length,
            color: "yellow",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-lg p-6"
          >
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar material..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
        >
          <option value="">Todas las categorías</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download size={18} />
          Exportar
        </button>
      </div>

      {/* Materials Table */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Material
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Categoría
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Stock actual
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Stock mínimo
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Unidad
                </th>
                <th className="text-left py-4 px-6 font-semibold text-gray-900">
                  Costo unitario
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
              {filteredMaterials.map((material) => (
                <tr
                  key={material.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    material.status === "critical" ? "bg-red-50" : ""
                  }`}
                >
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    {material.name}
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {material.category.charAt(0).toUpperCase() +
                      material.category.slice(1)}
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-gray-900">
                      {material.stock}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-700">
                    {material.minStock}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{material.unit}</td>
                  <td className="py-4 px-6 font-semibold text-gray-900">
                    ${material.cost}
                  </td>
                  <td className="py-4 px-6">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        {
                          available: "bg-green-100 text-green-700",
                          low: "bg-yellow-100 text-yellow-700",
                          critical: "bg-red-100 text-red-700",
                        }[material.status]
                      }`}
                    >
                      {material.status === "available"
                        ? "Disponible"
                        : material.status === "low"
                        ? "Bajo"
                        : "Crítico"}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <Link
                      href={`/admin/inventario/${material.id}`}
                      className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Critical Items Alert */}
      {MOCK_MATERIALS.filter((m) => m.status === "critical").length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 flex items-start gap-4">
          <AlertTriangle size={24} className="text-red-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-red-900 mb-2">
              Materiales con stock crítico
            </h3>
            <p className="text-red-800">
              {MOCK_MATERIALS.filter((m) => m.status === "critical").length}{" "}
              material(es) están por debajo del nivel mínimo y requieren
              reabastecimiento inmediato.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
