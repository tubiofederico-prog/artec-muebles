"use client";

import Link from "next/link";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

const SAMPLE_CART = [
  {
    id: 1,
    productName: "Mesa de Sala Premium",
    customization: "Roble • Natural • 120x70cm",
    price: 2100,
    quantity: 1,
  },
  {
    id: 2,
    productName: "Mesa de Noche Minimalista",
    customization: "MDF • Blanco • 60x45cm",
    price: 750,
    quantity: 2,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(SAMPLE_CART);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 150;
  const total = subtotal + shipping;

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Mi Carrito</h1>
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg mb-6">Tu carrito está vacío</p>
            <Link
              href="/catalogo"
              className="inline-block bg-violet-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-violet-700"
            >
              Continuar comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Mi Carrito</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 border-b border-gray-200 last:border-b-0 flex gap-6"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    🪑
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900">
                      {item.productName}
                    </h3>
                    <p className="text-sm text-gray-600">{item.customization}</p>
                    <p className="text-sm font-semibold text-violet-600 mt-2">
                      ${item.price}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 size={20} />
                    </button>
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-2 font-medium">{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="font-bold text-gray-900">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-24">
              <h2 className="font-bold text-lg text-gray-900 mb-6">Resumen</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Envío</span>
                  <span>${shipping}</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-bold text-gray-900">Total</span>
                <span className="font-bold text-2xl text-violet-600">${total}</span>
              </div>

              <Link
                href="/checkout"
                className="w-full block bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all text-center mb-3"
              >
                Proceder al checkout
              </Link>

              <Link
                href="/catalogo"
                className="w-full block bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center"
              >
                Continuar comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
