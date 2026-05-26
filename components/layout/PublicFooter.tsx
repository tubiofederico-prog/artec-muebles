"use client";

import Link from "next/link";

export function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🪑</span>
              <span className="font-bold text-lg">Artec Muebles</span>
            </div>
            <p className="text-gray-400 text-sm">
              Muebles premium personalizados para espacios modernos.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold mb-4">Productos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/catalogo" className="hover:text-white transition">
                  Catálogo Completo
                </Link>
              </li>
              <li>
                <Link href="/configurador" className="hover:text-white transition">
                  Configurador 3D
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Materiales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ofertas
                </a>
              </li>
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="font-bold mb-4">Negocios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/distribuidores"
                  className="hover:text-white transition"
                >
                  Para Distribuidores
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Compra Mayorista
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Condiciones Comerciales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Socios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📧 info@artecmuebles.com</li>
              <li>📞 +34 912 345 678</li>
              <li>📍 Madrid, España</li>
              <li className="pt-2">
                <a
                  href="https://wa.me/34912345678"
                  className="text-green-400 hover:text-green-300 transition"
                >
                  💬 WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2026 Artec Muebles. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition">
                Términos
              </a>
              <a href="#" className="hover:text-white transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
