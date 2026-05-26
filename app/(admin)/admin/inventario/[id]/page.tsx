"use client";

import Link from "next/link";
import { ArrowLeft, TrendingUp, TrendingDown } from "lucide-react";
import { MOCK_MATERIALS } from "@/data/mockData";

export default function MaterialDetailPage({ params }: { params: { id: string } }) {
  const material = MOCK_MATERIALS.find((m) => m.id === params.id) || MOCK_MATERIALS[0];

  const totalValue = material.stock * material.cost;
  const utilizationPercentage = Math.round(
    ((material.stock - material.minStock) / (material.stock || 1)) * 100
  );

  return (
    <div className="space-y-8">
      <Link
        href="/admin/inventario"
        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={20} />
        Volver a inventario
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Material Details */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {material.name}
            </h1>
            <p className="text-gray-600 mb-6">
              Categoría:{" "}
              <span className="font-semibold text-gray-900">
                {material.category.charAt(0).toUpperCase() +
                  material.category.slice(1)}
              </span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  label: "Stock actual",
                  value: material.stock,
                  unit: material.unit,
                },
                {
                  label: "Stock mínimo",
                  value: material.minStock,
                  unit: material.unit,
                },
                {
                  label: "Costo unitario",
                  value: `$${material.cost}`,
                },
                {
                  label: "Valor total",
                  value: `$${totalValue.toLocaleString()}`,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <p className="text-xs text-gray-600 mb-1">{item.label}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {item.value}
                  </p>
                  {item.unit && (
                    <p className="text-xs text-gray-600 mt-1">{item.unit}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Estado</h2>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-900">Nivel de stock</p>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      {
                        available: "bg-green-100 text-green-700",
                        low: "bg-yellow-100 text-yellow-700",
                        critical: "bg-red-100 text-red-700",
                      }[material.status]
                    }`}
                  >
                    {material.status === "available"
                      ? "✓ Disponible"
                      : material.status === "low"
                      ? "⚠ Bajo"
                      : "✕ Crítico"}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      {
                        available: "bg-green-600",
                        low: "bg-yellow-600",
                        critical: "bg-red-600",
                      }[material.status]
                    }`}
                    style={{
                      width: `${Math.min(
                        100,
                        (material.stock / (material.minStock * 2)) * 100
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* History */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Historial de movimientos
            </h2>
            <div className="space-y-3">
              {[
                {
                  date: "2026-05-26",
                  action: "Salida",
                  quantity: 5,
                  reason: "Producción ORD-2026-002",
                  user: "María García",
                },
                {
                  date: "2026-05-25",
                  action: "Entrada",
                  quantity: 10,
                  reason: "Compra a proveedor",
                  user: "Juan Pérez",
                },
                {
                  date: "2026-05-24",
                  action: "Salida",
                  quantity: 3,
                  reason: "Ajuste de inventario",
                  user: "Carlos López",
                },
              ].map((event, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {event.action === "Entrada" ? (
                        <TrendingUp size={18} className="text-green-600" />
                      ) : (
                        <TrendingDown size={18} className="text-red-600" />
                      )}
                      <p className="font-semibold text-gray-900">
                        {event.action} • {event.quantity} {material.unit}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">
                      {event.reason} • {event.user}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Acciones</h3>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 border border-violet-300 rounded-lg hover:bg-violet-50 transition-colors text-sm font-semibold text-violet-600">
                Registrar entrada
              </button>
              <button className="w-full px-4 py-2 border border-violet-300 rounded-lg hover:bg-violet-50 transition-colors text-sm font-semibold text-violet-600">
                Registrar salida
              </button>
              <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold text-gray-900">
                Editar detalles
              </button>
            </div>
          </div>

          {/* Supplier Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4">Información de compra</h3>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-600 mb-1">Costo unitario</p>
                <p className="font-semibold text-gray-900">${material.cost}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  Valor total en stock
                </p>
                <p className="font-semibold text-gray-900">
                  ${totalValue.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-600 mb-1">
                  Pronóstico de reorden
                </p>
                <p className="font-semibold text-gray-900">
                  {Math.max(0, material.minStock - material.stock)} {material.unit}
                </p>
              </div>
            </div>
          </div>

          {/* Reorder Alert */}
          {material.status !== "available" && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <p className="text-sm font-semibold text-yellow-900 mb-2">
                ⚠ Reorden recomendado
              </p>
              <p className="text-xs text-yellow-800">
                Este material requiere reabastecimiento. Cantidad sugerida:{" "}
                <span className="font-bold">
                  {Math.max(0, material.minStock * 2 - material.stock)}{" "}
                  {material.unit}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
