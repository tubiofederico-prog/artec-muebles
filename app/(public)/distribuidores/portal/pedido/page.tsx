"use client";

import Link from "next/link";
import { ArrowLeft, Plus, Trash2, Send } from "lucide-react";
import { MOCK_PRODUCTS, MOCK_DISTRIBUTORS } from "@/data/mockData";
import { useState } from "react";

interface CartItem {
  productId: string;
  quantity: number;
}

export default function DistributorOrderPage() {
  const distributor = MOCK_DISTRIBUTORS[0];
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState(MOCK_PRODUCTS[0].id);
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    const existing = cartItems.find((item) => item.productId === selectedProduct);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.productId === selectedProduct
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { productId: selectedProduct, quantity }]);
    }
    setQuantity(1);
  };

  const removeFromCart = (productId: string) => {
    setCartItems(cartItems.filter((item) => item.productId !== productId));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = MOCK_PRODUCTS.find((p) => p.id === item.productId);
      if (!product) return total;
      const wholesalePrice = Math.round(
        product.price * (1 - distributor.discount)
      );
      return total + wholesalePrice * item.quantity;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const tax = Math.round(subtotal * 0.21);
  const total = subtotal + tax;

  const handleSubmitOrder = () => {
    alert("Pedido enviado exitosamente. Número: ORD-2026-" + Math.floor(Math.random() * 1000));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/distribuidores/portal"
            className="inline-flex items-center gap-2 text-violet-100 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            Volver al portal
          </Link>
          <h1 className="text-4xl font-bold">Crear nuevo pedido</h1>
          <p className="text-violet-100 mt-2">
            Selecciona productos y cantidades para tu pedido mayorista
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Selector */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Seleccionar productos
              </h2>

              <div className="space-y-6">
                {/* Product Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Producto
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-violet-600 focus:ring-1 focus:ring-violet-600"
                  >
                    {MOCK_PRODUCTS.map((product) => (
                      <option key={product.id} value={product.id}>
                        {product.name} - ${product.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Product Details */}
                {selectedProduct && (
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    {MOCK_PRODUCTS.find((p) => p.id === selectedProduct) && (
                      <>
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              Precio público
                            </p>
                            <p className="text-2xl font-bold text-gray-900">
                              ${MOCK_PRODUCTS.find((p) => p.id === selectedProduct)?.price}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-600 mb-1">
                              Precio mayorista
                            </p>
                            <p className="text-2xl font-bold text-violet-600">
                              ${Math.round(
                                (MOCK_PRODUCTS.find(
                                  (p) => p.id === selectedProduct
                                )?.price || 0) *
                                  (1 - distributor.discount)
                              )}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-600 mb-1">Stock disponible</p>
                          <p className="font-semibold text-gray-900">
                            {MOCK_PRODUCTS.find((p) => p.id === selectedProduct)?.stock} unidades
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Quantity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-3">
                    Cantidad
                  </label>
                  <div className="flex gap-4">
                    <div className="flex-1 flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        −
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) =>
                          setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="flex-1 text-center py-3 border-0 font-bold text-gray-900 focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={addToCart}
                      className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                    >
                      <Plus size={20} />
                      Agregar
                    </button>
                  </div>
                </div>

                {/* Order Items List */}
                {cartItems.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Artículos en tu pedido
                    </h3>
                    <div className="space-y-3">
                      {cartItems.map((cartItem) => {
                        const product = MOCK_PRODUCTS.find(
                          (p) => p.id === cartItem.productId
                        );
                        if (!product) return null;
                        const wholesalePrice = Math.round(
                          product.price * (1 - distributor.discount)
                        );
                        return (
                          <div
                            key={cartItem.productId}
                            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                          >
                            <div className="flex-1">
                              <p className="font-semibold text-gray-900">
                                {product.name}
                              </p>
                              <p className="text-sm text-gray-600">
                                {cartItem.quantity} x ${wholesalePrice} = $
                                {wholesalePrice * cartItem.quantity}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(cartItem.productId)}
                              className="text-red-600 hover:text-red-700 transition-colors"
                            >
                              <Trash2 size={20} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-8 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Resumen del pedido
              </h2>

              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 mb-4">
                    Sin productos agregados
                  </p>
                  <p className="text-sm text-gray-500">
                    Selecciona productos para comenzar tu pedido
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-semibold text-gray-900">
                        ${subtotal.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">IVA (21%)</span>
                      <span className="font-semibold text-gray-900">
                        ${tax.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-lg font-bold text-gray-900">Total</span>
                      <span className="text-2xl font-bold text-violet-600">
                        ${total.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Ahorro: $
                      {(
                        cartItems.reduce((total, item) => {
                          const product = MOCK_PRODUCTS.find(
                            (p) => p.id === item.productId
                          );
                          if (!product) return total;
                          return total + product.price * distributor.discount * item.quantity;
                        }, 0)
                      ).toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={handleSubmitOrder}
                    className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Enviar pedido
                  </button>
                </>
              )}

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-700 font-semibold mb-2">
                  ℹ Información
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li>• Plazo de pago: 45 días</li>
                  <li>• Entrega: 5-7 días hábiles</li>
                  <li>• Descuento aplicado: {(distributor.discount * 100).toFixed(0)}%</li>
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Tu información</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-gray-600">Empresa</p>
                  <p className="font-semibold text-gray-900">
                    {distributor.companyName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Contacto</p>
                  <p className="font-semibold text-gray-900">
                    {distributor.contact}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">
                    {distributor.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
