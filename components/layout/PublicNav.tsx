"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export function PublicNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-gray-900"
          >
            <span className="text-2xl">🪑</span>
            <span>Artec Muebles</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/catalogo"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Catálogo
            </Link>
            <Link
              href="/configurador"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Configurador 3D
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-gray-600 hover:text-violet-600 transition-colors">
                Distribuidores
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/distribuidores"
                  className="block px-4 py-2 text-gray-600 hover:bg-violet-50 hover:text-violet-600 transition-colors rounded-t-lg"
                >
                  Información
                </Link>
                <Link
                  href="/distribuidores/acceso"
                  className="block px-4 py-2 text-gray-600 hover:bg-violet-50 hover:text-violet-600 transition-colors border-t border-gray-100 rounded-b-lg"
                >
                  Portal de Acceso
                </Link>
              </div>
            </div>
            <Link href="/carrito" className="text-gray-600 hover:text-violet-600">
              🛒 Carrito
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            <Link
              href="/catalogo"
              className="block text-gray-600 hover:text-violet-600 transition-colors px-4 py-2"
            >
              Catálogo
            </Link>
            <Link
              href="/configurador"
              className="block text-gray-600 hover:text-violet-600 transition-colors px-4 py-2"
            >
              Configurador 3D
            </Link>
            <Link
              href="/distribuidores"
              className="block text-gray-600 hover:text-violet-600 transition-colors px-4 py-2"
            >
              Para Distribuidores
            </Link>
            <Link
              href="/carrito"
              className="block text-gray-600 hover:text-violet-600 transition-colors px-4 py-2"
            >
              🛒 Carrito
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
