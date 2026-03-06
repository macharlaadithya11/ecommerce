"use client";

import { useEffect } from "react";
import { useProductStore } from "@/store/useProductStore";
import type { Product } from "@/db/schema";

export default function ProductList({
  initialProducts,
}: {
  initialProducts: Product[];
}) {
  const {
    setProducts,
    selectedCategory,
    setSelectedCategory,
    filteredProducts,
  } = useProductStore();

  useEffect(() => {
    setProducts(initialProducts);
  }, [initialProducts, setProducts]);

  const products = filteredProducts();
  const categories = [
    ...new Set(initialProducts.map((p) => p.category).filter(Boolean)),
  ];

  return (
    <div>
      {/* Category Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            selectedCategory === null
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat!)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-50 flex items-center justify-center p-6">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="text-gray-300 text-6xl">👟</div>
              )}
            </div>
            <div className="p-5">
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {product.category}
              </span>
              <h2 className="text-lg font-semibold text-gray-900 mt-1">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-xs text-gray-400">
                  {product.stock} in stock
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <p className="text-center text-gray-500 py-12">No products found.</p>
      )}
    </div>
  );
}
