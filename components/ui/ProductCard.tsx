import Link from "next/link";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  showCustomizeButton?: boolean;
}

export function ProductCard({ product, showCustomizeButton = true }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-violet-300 hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl">
        {product.image}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm font-semibold text-violet-600 mb-2">
          {product.isCustomizable ? "Personalizable" : "Estándar"}
        </p>
        <h3 className="font-bold text-lg text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 h-20 overflow-hidden">
          {product.description}
        </p>

        {/* Stock & Price */}
        <div className="mb-4 pb-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
            <span className={`text-sm font-medium ${
              product.stock > 0 ? "text-green-600" : "text-red-600"
            }`}>
              {product.stock > 0 ? `${product.stock} disponibles` : "Sin stock"}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            {product.colors.length} colores disponibles
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col gap-2">
          {showCustomizeButton && product.isCustomizable && (
            <Link
              href={`/configurador?product=${product.id}`}
              className="w-full bg-violet-600 text-white py-2 rounded-lg font-semibold hover:bg-violet-700 transition-colors text-center text-sm"
            >
              Personalizar
            </Link>
          )}
          <Link
            href={`/catalogo/${product.id}`}
            className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-center text-sm"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}
