"use client";

import { Search, Bell, Settings } from "lucide-react";

export function AdminHeader() {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="h-16 px-6 flex items-center justify-between">
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2 max-w-md flex-1">
          <Search size={18} className="text-gray-400" />
          <input
            type="text"
            placeholder="Buscar pedidos, clientes..."
            className="bg-transparent outline-none text-sm w-full text-gray-900 placeholder-gray-400"
          />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Settings Icon */}
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings size={20} />
          </button>

          {/* User Profile Indicator */}
          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-gray-900">Admin</p>
              <p className="text-xs text-gray-500">Administrador</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
              AD
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
