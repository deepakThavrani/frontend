"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import ContactSection from "@/components/ContactSection";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${params.id}`);
        setProduct(res.data);
      } catch {
        setProduct(null);
      }
      setLoading(false);
    };
    fetchProduct();
  }, [params.id]);

  if (loading) {
    return (
      <div style={{ paddingTop: "108px" }} className="min-h-screen flex items-center justify-center">
        <p className="text-[#5f6360]">Loading...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ paddingTop: "108px" }} className="min-h-screen flex items-center justify-center">
        <p className="text-[#5f6360]">Product not found.</p>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: "108px" }}>
      <section className="bg-white" style={{ padding: "60px 10%" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="overflow-hidden mb-4">
              <img
                src={product.images[selectedImage] || "https://via.placeholder.com/600x400"}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className="w-20 h-20 overflow-hidden border-2 transition-all"
                    style={{
                      borderColor: selectedImage === i ? "#E02222" : "#e5e7eb",
                    }}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="text-xs font-semibold text-[#E02222] uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#171200] mt-2 mb-6">
              {product.name}
            </h1>
            <p className="text-3xl font-bold text-[#171200] mb-8">
              ${product.price.toLocaleString()}
            </p>
            <p className="text-[#5f6360] leading-relaxed mb-8">
              {product.description}
            </p>

            {product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#171200] mb-4">
                  Features
                </h3>
                <ul className="space-y-2">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#5f6360]">
                      <span className="w-2 h-2 bg-[#E02222] rounded-full shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <a
              href="/get-a-quote"
              className="inline-block mt-10 bg-[#E02222] text-white px-10 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#c41e1e] transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
