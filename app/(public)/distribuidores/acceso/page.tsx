"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function DistributorLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to distributor portal
    window.location.href = "/distribuidores/portal";
  };

  return (
    <div className="bg-gradient-to-br from-violet-50 to-indigo-50 min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-violet-600">
            🪑 Artec Muebles
          </Link>
        </div>
      </div>

      {/* Login Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Portal Distribuidor
            </h1>
            <p className="text-gray-600">
              Inicia sesión para acceder a tu cuenta
            </p>
          </div>

          <form
            onSubmit={handleLogin}
            className="bg-white rounded-lg shadow-lg p-8 space-y-6"
          >
            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="tu@empresa.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-3 top-3 text-gray-400"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember and Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-gray-600">Recuérdame</span>
              </label>
              <a
                href="#"
                className="text-violet-600 hover:text-violet-700 font-semibold"
              >
                ¿Olvidaste contraseña?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Iniciar sesión
            </button>

            {/* Demo Credentials */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-xs text-blue-600 mb-2 font-semibold">
                Demo Credentials:
              </p>
              <p className="text-xs text-blue-600">
                Email: distribuidor@example.com
              </p>
              <p className="text-xs text-blue-600">Password: demo123</p>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">o</span>
              </div>
            </div>

            {/* New Application */}
            <p className="text-center text-sm text-gray-600">
              ¿No tienes cuenta?{" "}
              <Link
                href="/distribuidores"
                className="text-violet-600 hover:text-violet-700 font-semibold"
              >
                Solicita acceso
              </Link>
            </p>
          </form>

          {/* Support */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">¿Tienes problemas para acceder?</p>
            <button className="text-violet-600 hover:text-violet-700 font-semibold">
              Contacta a soporte
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
          <p>
            © 2024 Artec Muebles. Todos los derechos reservados. |
            <a href="#" className="text-violet-600 hover:text-violet-700">
              {" "}
              Privacidad
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
