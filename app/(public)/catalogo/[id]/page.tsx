"use client";

import Link from "next/link";
import { ArrowLeft, Check, Heart, Share2 } from "lucide-react";
import { MOCK_PRODUCTS, MOCK_MATERIALS } from "@/data/mockData";
import { useState } from "react";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = MOCK_PRODUCTS.find((p) => p.id === params.id) || MOCK_PRODUCTS[0];
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const basePrice = product.price;
  const subtotal = basePrice * quantity;

  return (
    <div className="bg-white">
      {/* Navigation */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al catálogo
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-9xl">
              {product.image}
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center text-4xl border-2 border-transparent hover:border-violet-600 transition-colors"
                >
                  {product.image}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <p className="text-sm font-semibold text-violet-600 mb-2">
                {product.category.replace(/_/g, " ").toUpperCase()}
              </p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600">{product.description}</p>
            </div>

            {/* Price */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-900">
                  ${basePrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-600">
                  Antes ${(basePrice * 1.1).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-green-600 font-semibold mt-2">
                Ahorra ${(basePrice * 0.1).toLocaleString()} con personalización
              </p>
            </div>

            {/* Colors */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Color: {selectedColor}</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-6 py-2 rounded-lg font-medium border-2 transition-all ${
                      selectedColor === color
                        ? "border-violet-600 bg-violet-50 text-violet-600"
                        : "border-gray-200 bg-white text-gray-900 hover:border-gray-300"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions */}
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">Dimensiones (cm)</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Alto</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.defaultDimensions.height}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Ancho</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.defaultDimensions.width}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Profundidad</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {product.defaultDimensions.depth}
                  </p>
                </div>
              </div>
            </div>

            {/* Materials */}
            <div className="space-y-3">
              <h3 className="font-bold text-gray-900">Materiales incluidos</h3>
              <ul className="space-y-2">
                {product.materials.map((material) => (
                  <li key={material.id} className="flex items-center gap-3">
                    <Check size={20} className="text-green-600" />
                    <span className="text-gray-700">{material.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-gray-600">Cantidad:</span>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    −
                  </button>
                  <span className="px-6 py-2 font-bold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Subtotal</p>
                <p className="text-3xl font-bold text-gray-900">
                  ${subtotal.toLocaleString()}
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/configurador"
                  className="flex-1 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
                >
                  Personalizar
                </Link>
                <button
                  onClick={() => setAddedToCart(true)}
                  className={`flex-1 px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                    addedToCart
                      ? "bg-green-100 text-green-700 border border-green-300"
                      : "bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200"
                  }`}
                >
                  {addedToCart ? "✓ Agregado al carrito" : "Agregar al carrito"}
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 py-4 border-t border-gray-200">
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Heart size={20} />
                <span>Favoritos</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <Share2 size={20} />
                <span>Compartir</span>
              </button>
            </div>

            {/* Info Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Garantía",
                  value: "2 años",
                },
                {
                  label: "Entrega estimada",
                  value: "10-15 días",
                },
                {
                  label: "Stock disponible",
                  value: `${product.stock} unidades`,
                },
                {
                  label: "Personalizable",
                  value: product.isCustomizable ? "Sí" : "No",
                },
              ].map((info, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">{info.label}</p>
                  <p className="font-semibold text-gray-900">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Productos similares
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/catalogo/${relatedProduct.id}`}
                  className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
                    {relatedProduct.image}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {relatedProduct.description}
                    </p>
                    <span className="text-2xl font-bold text-gray-900">
                      ${relatedProduct.price}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
