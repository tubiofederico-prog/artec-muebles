"use client";

import { Save, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { MOCK_SYSTEM_CONFIG } from "@/data/mockData";

export default function ConfigurationPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [configChanged, setConfigChanged] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900">Configuración</h1>
        <p className="text-gray-600 mt-2">
          Gestiona la configuración general del sistema
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="space-y-2">
          {[
            "Información empresa",
            "Usuarios y roles",
            "Configuración IA",
            "Métodos de pago",
            "Envíos",
            "Integraciones",
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full text-left px-4 py-3 rounded-lg font-semibold transition-colors ${
                i === 0
                  ? "bg-violet-100 text-violet-600"
                  : "text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Company Info */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de empresa
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nombre de empresa
                </label>
                <input
                  type="text"
                  defaultValue={MOCK_SYSTEM_CONFIG.companyName}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
                  onChange={() => setConfigChanged(true)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Logo
                </label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {MOCK_SYSTEM_CONFIG.companyLogo}
                  </div>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Cambiar logo
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Moneda predeterminada
                  </label>
                  <select
                    defaultValue={MOCK_SYSTEM_CONFIG.defaultCurrency}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
                    onChange={() => setConfigChanged(true)}
                  >
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Zona horaria
                  </label>
                  <select
                    defaultValue={MOCK_SYSTEM_CONFIG.timezone}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
                    onChange={() => setConfigChanged(true)}
                  >
                    <option>Europe/Madrid</option>
                    <option>Europe/London</option>
                    <option>Europe/Paris</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Idioma
                </label>
                <select
                  defaultValue={MOCK_SYSTEM_CONFIG.defaultLanguage}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
                  onChange={() => setConfigChanged(true)}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Métodos de pago
            </h2>

            <div className="space-y-4">
              {MOCK_SYSTEM_CONFIG.paymentMethods.map((method, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 rounded"
                    />
                    <span className="font-medium text-gray-900">{method}</span>
                  </div>
                  <button className="text-gray-600 hover:text-gray-900 transition-colors">
                    ⋮
                  </button>
                </div>
              ))}
            </div>

            <button className="mt-4 text-violet-600 hover:text-violet-700 font-semibold">
              + Agregar método
            </button>
          </div>

          {/* Shipping Methods */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Métodos de envío
            </h2>

            <div className="space-y-4">
              {MOCK_SYSTEM_CONFIG.shippingMethods.map((method, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">
                      Nombre
                    </label>
                    <input
                      type="text"
                      defaultValue={method.name}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">
                      Costo base
                    </label>
                    <input
                      type="number"
                      defaultValue={method.baseCost}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-600 mb-1 block">
                      Días estimados
                    </label>
                    <input
                      type="number"
                      defaultValue={method.estimatedDays}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 text-violet-600 hover:text-violet-700 font-semibold">
              + Agregar método
            </button>
          </div>

          {/* AI Configuration */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Configuración del agente IA
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Tono de conversación
                </label>
                <select
                  defaultValue={
                    MOCK_SYSTEM_CONFIG.aiAgentConfig?.tone || "professional"
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600"
                >
                  <option value="formal">Formal</option>
                  <option value="friendly">Amistoso</option>
                  <option value="professional">Profesional</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Productos sugeridos
                </label>
                <div className="space-y-2">
                  {MOCK_SYSTEM_CONFIG.aiAgentConfig?.suggestedProducts.map(
                    (prod, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <span className="text-gray-900">{prod}</span>
                        <button className="text-red-600 hover:text-red-700">
                          ✕
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Reglas de escalación
                </label>
                <div className="space-y-2">
                  {MOCK_SYSTEM_CONFIG.aiAgentConfig?.escalationRules.map(
                    (rule, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 border border-gray-200 rounded-lg"
                      >
                        <span className="text-gray-900">{rule}</span>
                        <button className="text-red-600 hover:text-red-700">
                          ✕
                        </button>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Save Button */}
          {configChanged && (
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                <Save size={20} />
                Guardar cambios
              </button>
              <button className="px-8 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Cancelar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
