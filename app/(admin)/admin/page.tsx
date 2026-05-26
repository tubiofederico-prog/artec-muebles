"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Package,
  Users,
  BarChart3,
  AlertTriangle,
  DollarSign,
} from "lucide-react";
import { KPICard } from "@/components/ui/KPICard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { MOCK_KPIS, MOCK_SALES_DATA, MOCK_PRODUCT_SALES, MOCK_ORDERS } from "@/data/mockData";
import Link from "next/link";

export default function AdminDashboard() {
  const chartColors = ["#7C3AED", "#6366F1", "#3B82F6", "#10B981", "#F59E0B"];
  const ordersByStatus = {
    new: 2,
    payment_confirmed: 3,
    in_production: 5,
    ready_to_ship: 2,
    shipped: 8,
    delivered: 14,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bienvenido al panel administrativo</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_KPIS.map((kpi, i) => (
          <KPICard key={i} {...kpi} icon={[
            TrendingUp,
            Package,
            Users,
            BarChart3,
            AlertTriangle,
            DollarSign,
          ][i]} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Ventas Mensuales
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={MOCK_SALES_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#7C3AED"
                strokeWidth={3}
                dot={{ fill: "#7C3AED", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Sales */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Top 5 Productos
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={MOCK_PRODUCT_SALES}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="product" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: "0.5rem",
                }}
              />
              <Bar dataKey="sales" fill="#7C3AED" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders by Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Estado de Pedidos
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={Object.entries(ordersByStatus).map(([key, value]) => ({
                  name: key,
                  value,
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartColors.map((color, index) => (
                  <Cell key={`cell-${index}`} fill={color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Accesos Rápidos
            </h2>
            <div className="space-y-3">
              <Link
                href="/admin/pedidos?status=new"
                className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <span className="font-medium text-blue-700">Nuevos Pedidos</span>
                <span className="text-lg font-bold text-blue-700">2</span>
              </Link>
              <Link
                href="/admin/inventario?status=critical"
                className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
              >
                <span className="font-medium text-red-700">Stock Crítico</span>
                <span className="text-lg font-bold text-red-700">1</span>
              </Link>
              <Link
                href="/admin/ia?status=new"
                className="flex items-center justify-between p-3 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors"
              >
                <span className="font-medium text-purple-700">Consultas IA</span>
                <span className="text-lg font-bold text-purple-700">3</span>
              </Link>
              <Link
                href="/admin/produccion?status=pending"
                className="flex items-center justify-between p-3 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <span className="font-medium text-orange-700">
                  En Producción
                </span>
                <span className="text-lg font-bold text-orange-700">5</span>
              </Link>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              Métricas Clave
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Ticket Promedio</span>
                <span className="font-bold text-gray-900">$2,150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tiempo Entrega</span>
                <span className="font-bold text-gray-900">12 días</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Clientes Activos</span>
                <span className="font-bold text-gray-900">1,245</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tasa Conversión</span>
                <span className="font-bold text-gray-900">3.8%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Pedidos Recientes</h2>
          <Link
            href="/admin/pedidos"
            className="text-violet-600 hover:text-violet-700 font-semibold text-sm"
          >
            Ver todos →
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Orden
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Cliente
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Monto
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Estado
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Fecha
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_ORDERS.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-4">
                    <Link
                      href={`/admin/pedidos/${order.id}`}
                      className="text-violet-600 hover:text-violet-700 font-medium"
                    >
                      {order.orderNumber}
                    </Link>
                  </td>
                  <td className="py-4 px-4 text-gray-900">
                    {order.customer?.firstName} {order.customer?.lastName}
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-900">
                    ${order.total}
                  </td>
                  <td className="py-4 px-4">
                    <StatusBadge status={order.status} />
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {new Date(order.createdAt).toLocaleDateString("es-ES")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
