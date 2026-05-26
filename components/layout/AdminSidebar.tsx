"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  Users,
  Boxes,
  Wrench,
  MessageSquare,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  Building2,
  TrendingUp,
} from "lucide-react";

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Pedidos",
    href: "/admin/pedidos",
    icon: Package,
  },
  {
    label: "Clientes",
    href: "/admin/clientes",
    icon: Users,
  },
  {
    label: "Distribuidores",
    href: "/admin/distribuidores",
    icon: Building2,
  },
  {
    label: "Inventario",
    href: "/admin/inventario",
    icon: Boxes,
  },
  {
    label: "Producción",
    href: "/admin/produccion",
    icon: Wrench,
  },
  {
    label: "Atención IA",
    href: "/admin/ia",
    icon: MessageSquare,
  },
  {
    label: "Finanzas",
    href: "/admin/finanzas",
    icon: DollarSign,
  },
  {
    label: "Reportes",
    href: "/admin/reportes",
    icon: BarChart3,
  },
  {
    label: "Configuración",
    href: "/admin/configuracion",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-white border-r border-gray-200 sticky top-0 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/admin" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🪑</span>
          <span className="text-gray-900">Artec</span>
        </Link>
        <p className="text-xs text-gray-400 mt-1">Panel Administrativo</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <div className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-violet-50 text-violet-700 border-l-2 border-violet-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-50 mb-3">
          <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
            AH
          </div>
          <div className="flex-1 text-sm">
            <p className="font-medium text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">Conectado</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <LogOut size={16} />
          <span>Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}
