"use client";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MOCK_SALES_DATA, MOCK_TRANSACTIONS } from "@/data/mockData";
import { Download, Filter, TrendingUp, TrendingDown } from "lucide-react";

export default function FinancesPage() {
  const income = MOCK_TRANSACTIONS.filter((t) => t.type === "income").reduce(
    (sum, t) => sum + t.amount,
    0
  );
  const expenses = MOCK_TRANSACTIONS.filter((t) => t.type === "expense").reduce(
    (sum, t) => sum + t.amount,
    0
  );
  const profit = income - expenses;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Finanzas</h1>
        <p className="text-gray-600 mt-2">
          Dashboard de ingresos, gastos y análisis financiero
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Ingresos",
            value: `$${income.toLocaleString()}`,
            change: 18.5,
            color: "green",
            icon: TrendingUp,
          },
          {
            label: "Gastos",
            value: `$${expenses.toLocaleString()}`,
            change: -5.2,
            color: "red",
            icon: TrendingDown,
          },
          {
            label: "Ganancia neta",
            value: `$${profit.toLocaleString()}`,
            change: 25.3,
            color: "violet",
            icon: TrendingUp,
          },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <Icon
                  size={24}
                  className={
                    {
                      green: "text-green-600",
                      red: "text-red-600",
                      violet: "text-violet-600",
                    }[stat.color]
                  }
                />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </p>
              <p
                className={`text-sm font-semibold ${
                  {
                    green: "text-green-600",
                    red: "text-red-600",
                    violet: "text-violet-600",
                  }[stat.color]
                }`}
              >
                {stat.change > 0 ? "+" : ""}{stat.change}% vs mes anterior
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
            Ingresos mensuales
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
                stroke="#10B981"
                strokeWidth={3}
                dot={{ fill: "#10B981", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Expenses */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Gastos por categoría
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={MOCK_SALES_DATA}>
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
              <Bar dataKey="orders" fill="#F59E0B" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Transactions */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Movimientos recientes
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download size={18} />
            Exportar
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Descripción
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Categoría
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Fecha
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">
                  Tipo
                </th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">
                  Monto
                </th>
              </tr>
            </thead>
            <tbody>
              {MOCK_TRANSACTIONS.map((trx) => (
                <tr
                  key={trx.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-gray-900">
                    {trx.description}
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    {trx.category.replace(/_/g, " ")}
                  </td>
                  <td className="py-3 px-4 text-gray-700">{trx.date}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        trx.type === "income"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {trx.type === "income" ? "Ingreso" : "Gasto"}
                    </span>
                  </td>
                  <td
                    className={`py-3 px-4 text-right font-bold ${
                      trx.type === "income"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {trx.type === "income" ? "+" : "-"}${trx.amount.toLocaleString()}
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
