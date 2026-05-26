"use client";

import { useState } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { MOCK_PRODUCTS } from "@/data/mockData";
import { Filter, X } from "lucide-react";

export default function CatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState([0, 3500]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "living_table", label: "Mesas de Sala" },
    { id: "night_table", label: "Mesas de Noche" },
    { id: "desk", label: "Escritorios" },
    { id: "bookcase", label: "Bibliotecas" },
    { id: "tv_cabinet", label: "Muebles TV" },
  ];

  const colors = ["Natural", "Blanco", "Gris", "Oscuro", "Wengué"];

  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedColor && !product.colors.includes(selectedColor)) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1])
      return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Muebles
          </h1>
          <p className="text-xl text-gray-600">
            Explora nuestros productos premium personalizables
          </p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 md:relative md:bg-transparent md:inset-auto md:w-64 ${
              showFilters ? "block" : "hidden md:block"
            }`}
            onClick={() => setShowFilters(false)}
          >
            <div
              className="bg-white h-full p-6 md:border md:border-gray-200 md:rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6 md:hidden">
                <h2 className="font-bold text-lg">Filtros</h2>
                <button onClick={() => setShowFilters(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Categoría</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? "bg-violet-50 text-violet-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Todas
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-violet-50 text-violet-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-8">
                <h3 className="font-bold text-gray-900 mb-4">Color</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedColor(null)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedColor === null
                        ? "bg-violet-50 text-violet-700 font-medium"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    Todos
                  </button>
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedColor === color
                          ? "bg-violet-50 text-violet-700 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Rango de Precio</h3>
                <input
                  type="range"
                  min="0"
                  max="3500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 mt-2">
                  Hasta ${priceRange[1]}
                </p>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 mb-6 px-4 py-3 bg-white border border-gray-200 rounded-lg font-semibold text-gray-900"
            >
              <Filter size={20} />
              Filtros
            </button>

            {/* Results Count */}
            <p className="text-gray-600 mb-6">
              Mostrando {filteredProducts.length} productos
            </p>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg">
                  No hay productos que coincidan con tus filtros.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSelectedColor(null);
                    setPriceRange([0, 3500]);
                  }}
                  className="mt-6 text-violet-600 hover:text-violet-700 font-semibold"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
