"use client";

import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product._id}`} className="group block">
      <div className="overflow-hidden bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl">
        <div className="relative h-64 overflow-hidden">
          <img
            src={product.images[0] || "https://via.placeholder.com/400x300"}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4 bg-[#E02222] text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider">
            {product.category}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#171200] mb-2 group-hover:text-[#E02222] transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-[#5f6360] line-clamp-2 mb-4">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-[#171200]">
              ${product.price.toLocaleString()}
            </span>
            <span className="text-sm text-[#E02222] font-medium group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
