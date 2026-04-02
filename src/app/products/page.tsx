"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import ContactSection from "@/components/ContactSection";

const categories = [
  "All",
  "Exterior Rendering",
  "Interior Rendering",
  "Walkthrough",
  "3D Floor Plan",
];

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url =
          activeCategory === "All"
            ? "/products"
            : `/products/category/${encodeURIComponent(activeCategory)}`;
        const res = await api.get(url);
        setProducts(res.data);
      } catch {
        setProducts([]);
      }
      setLoading(false);
    };
    fetchProducts();
  }, [activeCategory]);

  return (
    <div style={{ paddingTop: "108px" }}>
      {/* Hero */}
      <section className="bg-white text-black" style={{ padding: "80px 10%" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-[#171200] mb-6">
          Our Products
        </h1>
        <p className="text-[#5f6360] text-lg max-w-2xl font-extralight">
          Explore our range of 3D visualization packages designed for architects
          and interior designers.
        </p>
      </section>

      {/* Category Filter */}
      <section className="bg-white px-[10%] pb-8">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-6 py-2 text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor:
                  activeCategory === cat ? "#E02222" : "transparent",
                color: activeCategory === cat ? "#fff" : "#171200",
                border:
                  activeCategory === cat
                    ? "1px solid #E02222"
                    : "1px solid #e5e7eb",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-white" style={{ padding: "40px 10% 80px" }}>
        {loading ? (
          <p className="text-center text-[#5f6360] py-20">Loading products...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-[#5f6360] py-20">
            No products available yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      <ContactSection />
    </div>
  );
}
