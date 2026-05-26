"use client";

import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "review">("shipping");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Shipping */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="font-bold text-lg text-gray-900 mb-4">
                  1. Dirección de Envío
                </h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                  />
                  <input
                    type="text"
                    placeholder="Calle y número"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Ciudad"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                    />
                    <input
                      type="text"
                      placeholder="Código Postal"
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h2 className="font-bold text-lg text-gray-900 mb-4">
                  2. Método de Pago
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border-2 border-violet-300 rounded-lg bg-violet-50 cursor-pointer">
                    <input type="radio" name="payment" defaultChecked className="mr-3" />
                    <span className="font-medium text-gray-900">Tarjeta de Crédito</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="font-medium text-gray-900">Transferencia Bancaria</span>
                  </label>
                  <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-gray-300">
                    <input type="radio" name="payment" className="mr-3" />
                    <span className="font-medium text-gray-900">Financiación 12 cuotas</span>
                  </label>
                </div>

                {/* Credit Card Form */}
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    placeholder="Número de tarjeta"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="MM"
                      maxLength={2}
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                    />
                    <input
                      type="text"
                      placeholder="YY"
                      maxLength={2}
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      maxLength={3}
                      className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-violet-600"
                    />
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href="/confirmacion"
                className="w-full block bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-4 rounded-lg font-bold hover:shadow-lg transition-all text-center"
              >
                Confirmar Compra
              </Link>
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-6">Resumen</h2>
              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>2x Mesa de Sala (personalizada)</span>
                  <span>$2,100</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Envío Estándar</span>
                  <span>$150</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Total a pagar</span>
                <span className="font-bold text-2xl text-violet-600">$2,250</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
