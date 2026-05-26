"use client";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  Download,
  TrendingUp,
  Users,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { MOCK_SALES_DATA, MOCK_PRODUCT_SALES } from "@/data/mockData";

export default function ReportsPage() {
  const chartColors = ["#7C3AED", "#6366F1", "#3B82F6", "#10B981", "#F59E0B"];
  const ordersByStatus = {
    new: 2,
    payment_confirmed: 3,
    in_production: 5,
    assembled: 2,
    shipped: 8,
    delivered: 14,
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Reportes</h1>
        <p className="text-gray-600 mt-2">
          Análisis y reportes ejecutivos del negocio
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            label: "Ventas totales",
            value: "$210,000",
            change: 18.5,
            icon: TrendingUp,
          },
          {
            label: "Nuevos clientes",
            value: "48",
            change: 12.3,
            icon: Users,
          },
          {
            label: "Órdenes completadas",
            value: "34",
            change: 8.2,
            icon: ShoppingCart,
          },
          {
            label: "Margen promedio",
            value: "32.5%",
            change: -2.1,
            icon: BarChart3,
          },
        ].map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">{kpi.label}</p>
                <Icon size={24} className="text-violet-600" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {kpi.value}
              </p>
              <p
                className={`text-sm font-semibold ${
                  kpi.change > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {kpi.change > 0 ? "↑" : "↓"} {Math.abs(kpi.change)}%
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Tendencia de ventas
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
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#7C3AED"
                strokeWidth={3}
              />
              <Line type="monotone" dataKey="orders" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Performance */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Top 5 Productos
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={MOCK_PRODUCT_SALES}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="product"
                stroke="#6b7280"
                angle={-45}
                textAnchor="end"
                height={100}
                interval={0}
                tick={{ fontSize: 12 }}
              />
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

      {/* Order Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Órdenes por estado
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={Object.entries(ordersByStatus).map(([status, count]) => ({
                  name: status,
                  value: count,
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {Object.keys(ordersByStatus).map((_, index) => (
                  <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Margin Analysis */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-6">
            Análisis de márgenes
          </h2>
          <div className="space-y-4">
            {MOCK_PRODUCT_SALES.map((product) => (
              <div key={product.product}>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-900">
                    {product.product}
                  </p>
                  <p className="text-sm font-bold text-violet-600">
                    {product.margin}%
                  </p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
                    style={{ width: `${product.margin}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          Descargar reportes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Reporte mensual (PDF)", type: "PDF" },
            { name: "Datos de ventas (Excel)", type: "XLSX" },
            { name: "Análisis de productos (CSV)", type: "CSV" },
          ].map((report, i) => (
            <button
              key={i}
              className="flex items-center gap-3 px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left font-semibold text-gray-900"
            >
              <Download size={20} className="text-violet-600" />
              <div>
                <p className="text-sm">{report.name}</p>
                <p className="text-xs text-gray-600">{report.type}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
