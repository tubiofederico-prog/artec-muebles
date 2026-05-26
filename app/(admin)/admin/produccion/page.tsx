"use client";

import Link from "next/link";
import { Eye, Plus } from "lucide-react";
import { MOCK_PRODUCTION_ORDERS } from "@/data/mockData";

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  materials_reserved: "Materiales reservados",
  fabrication: "Fabricación",
  assembly: "Ensamblaje",
  quality_control: "Control de calidad",
  ready_to_ship: "Listo para envío",
};

const columns = [
  "pending",
  "materials_reserved",
  "fabrication",
  "assembly",
  "quality_control",
  "ready_to_ship",
];

export default function ProductionPage() {
  const ordersByStatus = columns.reduce(
    (acc, status) => {
      acc[status] = MOCK_PRODUCTION_ORDERS.filter((o) => o.status === status);
      return acc;
    },
    {} as Record<string, typeof MOCK_PRODUCTION_ORDERS>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Producción</h1>
        <p className="text-gray-600 mt-2">
          Kanban de órdenes de producción
        </p>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 auto-rows-max">
        {columns.map((status) => (
          <div key={status} className="space-y-4">
            {/* Column Header */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 sticky top-0 z-10">
              <h3 className="font-bold text-gray-900 text-sm mb-2">
                {statusLabels[status]}
              </h3>
              <p className="text-2xl font-bold text-violet-600">
                {ordersByStatus[status].length}
              </p>
            </div>

            {/* Cards */}
            <div className="space-y-3 min-h-[400px]">
              {ordersByStatus[status].map((order) => (
                <div
                  key={order.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-move"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">
                        {order.product}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        {order.customer}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="text-violet-600 hover:text-violet-700"
                    >
                      <Eye size={16} />
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-600">
                      <p>Estimado: {order.estimatedDate}</p>
                      {order.assignedTo && (
                        <p className="text-violet-600 font-semibold">
                          {order.assignedTo}
                        </p>
                      )}
                    </div>

                    {order.observations && (
                      <div className="bg-yellow-50 border border-yellow-200 rounded p-2 text-xs text-yellow-800">
                        {order.observations}
                      </div>
                    )}

                    {order.materials.length > 0 && (
                      <div className="text-xs text-gray-600">
                        <p className="font-semibold mb-1">Materiales:</p>
                        {order.materials.slice(0, 2).map((m, i) => (
                          <p key={i} className="text-gray-600">
                            {m.material}: {m.quantity} {m.unit}
                          </p>
                        ))}
                        {order.materials.length > 2 && (
                          <p className="text-gray-600">
                            +{order.materials.length - 2} más
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <button className="w-full mt-3 text-xs font-semibold text-violet-600 hover:text-violet-700">
                    Ver detalles →
                  </button>
                </div>
              ))}

              {ordersByStatus[status].length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <p className="text-sm">Sin órdenes</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <p className="text-sm text-blue-900">
          <span className="font-bold">💡 Tip:</span> Arrastra las tarjetas entre
          columnas para actualizar el estado. Las órdenes pueden asignarse a
          miembros del equipo.
        </p>
      </div>
    </div>
  );
}
