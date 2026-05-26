"use client";

import { useState } from "react";
import Link from "next/link";
import { MOCK_PRODUCTS, MOCK_MATERIALS } from "@/data/mockData";
import { ShoppingCart, MessageCircle, Plus, Minus } from "lucide-react";

export default function ConfiguradorPage() {
  const [selectedProductId, setSelectedProductId] = useState("prod-001");
  const [selectedMaterial, setSelectedMaterial] = useState("oak");
  const [selectedColor, setSelectedColor] = useState("Natural");
  const [quantity, setQuantity] = useState(1);
  const [height, setHeight] = useState(45);
  const [width, setWidth] = useState(120);
  const [depth, setDepth] = useState(70);

  const selectedProduct = MOCK_PRODUCTS.find((p) => p.id === selectedProductId);
  const selectedMaterialData = MOCK_MATERIALS.find((m) => m.id === selectedMaterial);

  // Calculate dynamic price based on configuration
  const materialCost = (selectedMaterialData?.cost || 0) * ((width * depth) / 10000);
  const basePrice = selectedProduct?.price || 0;
  const configuredPrice = Math.round(basePrice + materialCost);
  const totalPrice = configuredPrice * quantity;

  const productTypes = [
    { id: "prod-001", name: "Mesa de Sala", icon: "🪑" },
    { id: "prod-002", name: "Mesa de Noche", icon: "🛏️" },
    { id: "prod-003", name: "Escritorio", icon: "💻" },
    { id: "prod-004", name: "Biblioteca", icon: "📚" },
    { id: "prod-005", name: "Mueble TV", icon: "📺" },
  ];

  const materials = MOCK_MATERIALS.filter((m) => m.status !== "critical");
  const materialOptions = [
    { id: "oak", name: "Roble" },
    { id: "mahogany", name: "Caoba" },
    { id: "pine", name: "Pino" },
    { id: "walnut", name: "Nogal" },
  ];

  const colorOptions = ["Natural", "Blanco", "Oscuro", "Gris"];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Configurador 3D
        </h1>
        <p className="text-gray-600 mb-8">
          Personaliza tu mueble seleccionando tipo, material, color y medidas
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Canvas / Configurador */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 border border-gray-200 shadow-sm">
              {/* Product Type Selection */}
              <div className="mb-8">
                <h2 className="font-bold text-lg text-gray-900 mb-4">
                  Tipo de Mueble
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {productTypes.map((ptype) => (
                    <button
                      key={ptype.id}
                      onClick={() => setSelectedProductId(ptype.id)}
                      className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                        selectedProductId === ptype.id
                          ? "border-violet-600 bg-violet-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <span className="text-3xl">{ptype.icon}</span>
                      <span className="text-xs font-medium text-center">
                        {ptype.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3D Canvas Simulation */}
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-12 mb-8 aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="text-center">
                  <div className="text-8xl mb-4 transform hover:scale-110 transition-transform duration-300">
                    {selectedProduct?.image}
                  </div>
                  <p className="text-gray-600 font-medium mb-2">
                    {selectedProduct?.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {selectedMaterialData?.name} • {selectedColor}
                  </p>
                  <div className="mt-4 text-sm text-gray-600 space-y-1">
                    <p>Alto: {height}cm</p>
                    <p>Ancho: {width}cm</p>
                    <p>Profundidad: {depth}cm</p>
                  </div>
                </div>
              </div>

              {/* Material Selection */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Material</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                  {materialOptions.map((mat) => (
                    <button
                      key={mat.id}
                      onClick={() => setSelectedMaterial(mat.id)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedMaterial === mat.id
                          ? "border-violet-600 bg-violet-50 text-violet-700"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {mat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3">Color</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                  {colorOptions.map((col) => (
                    <button
                      key={col}
                      onClick={() => setSelectedColor(col)}
                      className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedColor === col
                          ? "border-violet-600 bg-violet-50 text-violet-700"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {col}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Configuration Panel */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm sticky top-24">
              <div className="p-6">
                {/* Dimensions */}
                <h2 className="font-bold text-lg text-gray-900 mb-6">
                  Configuración
                </h2>

                <div className="space-y-5 mb-6">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Alto: {height}cm
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="250"
                      value={height}
                      onChange={(e) => setHeight(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Ancho: {width}cm
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="300"
                      value={width}
                      onChange={(e) => setWidth(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">
                      Profundidad: {depth}cm
                    </label>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={depth}
                      onChange={(e) => setDepth(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <label className="text-sm font-medium text-gray-700 block mb-3">
                    Cantidad
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      <Minus size={18} />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) =>
                        setQuantity(Math.max(1, Number(e.target.value)))
                      }
                      className="flex-1 text-center border border-gray-200 rounded-lg py-2 px-3 font-semibold"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      <Plus size={18} />
                    </button>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 mb-2">Precio unitario</p>
                  <p className="text-3xl font-bold text-gray-900">
                    ${configuredPrice}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Total: ${totalPrice}
                  </p>
                </div>

                {/* Stock Status */}
                {selectedProduct && (
                  <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-700 font-medium">
                      ✓ Stock disponible ({selectedProduct.stock} unidades)
                    </p>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/carrito"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    <ShoppingCart size={20} />
                    Agregar al carrito
                  </Link>
                  <button className="flex items-center justify-center gap-2 w-full bg-green-100 text-green-700 py-3 rounded-lg font-semibold hover:bg-green-200 transition-colors">
                    <MessageCircle size={20} />
                    Consultar con IA
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Ver en 3D
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
