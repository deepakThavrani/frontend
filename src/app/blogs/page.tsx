"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import api from "@/lib/api";
import BlogCard from "@/components/BlogCard";

interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: string;
  createdAt: string;
  views: number;
  likes: number;
}

const heroImages = [
  "https://static.wixstatic.com/media/5dbb31_efb0d74fb5364626826b851bc0980d76~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_efb0d74fb5364626826b851bc0980d76~mv2.jpg",
  "https://static.wixstatic.com/media/5dbb31_343dd2c15fc54627b4dc178a8cb3d1d0~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_343dd2c15fc54627b4dc178a8cb3d1d0~mv2.jpg",
  "https://static.wixstatic.com/media/5dbb31_36c579afbcb14f229af64467e6eabf3f~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_36c579afbcb14f229af64467e6eabf3f~mv2.jpg",
  "https://static.wixstatic.com/media/5dbb31_1c5c44cc145b43dfacd716cd6324c4c8~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_1c5c44cc145b43dfacd716cd6324c4c8~mv2.jpg",
  "https://static.wixstatic.com/media/5dbb31_511046419ff642dd929cbdbfd7e62346~mv2.jpg/v1/fill/w_1920,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_511046419ff642dd929cbdbfd7e62346~mv2.jpg",
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        setBlogs(res.data);
      } catch {
        setBlogs([]);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, []);

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(index < 0 ? heroImages.length - 1 : index % heroImages.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  // Auto-slide
  useEffect(() => {
    timeoutRef.current = setInterval(() => {
      goTo((current + 1) % heroImages.length, "right");
    }, 4000);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [current, goTo]);

  return (
    <div style={{ paddingTop: "108px" }}>
      {/* Hero with Sliding Images */}
      <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        {/* Sliding Images */}
        {heroImages.map((img, i) => {
          const prevIdx = (current - 1 + heroImages.length) % heroImages.length;
          const nextIdx = (current + 1) % heroImages.length;

          let translateX: string;
          let shouldAnimate = false;

          if (i === current) {
            translateX = "0%";
            shouldAnimate = true;
          } else if (direction === "right" && i === prevIdx) {
            // Previous slide exits to left
            translateX = "-100%";
            shouldAnimate = true;
          } else if (direction === "left" && i === nextIdx) {
            // Next slide exits to right
            translateX = "100%";
            shouldAnimate = true;
          } else if (direction === "right") {
            // Waiting slides positioned off-screen right
            translateX = "100%";
          } else {
            // Waiting slides positioned off-screen left
            translateX = "-100%";
          }

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                transform: `translateX(${translateX})`,
                transition: shouldAnimate ? "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none",
                zIndex: i === current ? 2 : 1,
              }}
            >
              <Image
                src={img}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          );
        })}

        {/* Dark overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%)",
          zIndex: 3,
        }} />

        {/* Content */}
        <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8%", zIndex: 4 }}>
          <span style={{
            color: "#E02222",
            fontSize: 14,
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: 16,
          }}>
            Blog & Insights
          </span>
          <h1 style={{
            color: "#fff",
            fontSize: "clamp(36px, 5vw, 72px)",
            fontWeight: 800,
            marginBottom: 20,
            lineHeight: 1.1,
          }}>
            Our Blog
          </h1>
          <p style={{
            color: "rgba(255,255,255,0.6)",
            fontSize: 18,
            maxWidth: 550,
            fontWeight: 300,
            lineHeight: 1.7,
          }}>
            Insights, tips, and inspiration from the world of 3D architectural visualization.
          </p>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goTo(current - 1 < 0 ? heroImages.length - 1 : current - 1, "left")}
          className="hidden md:flex absolute left-3 md:left-[30px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-[50px] md:h-[50px] rounded-full items-center justify-center text-white cursor-pointer transition-all duration-300 z-[5]"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E02222";
            e.currentTarget.style.borderColor = "#E02222";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          onClick={() => goTo((current + 1) % heroImages.length, "right")}
          className="hidden md:flex absolute right-3 md:right-[30px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-[50px] md:h-[50px] rounded-full items-center justify-center text-white cursor-pointer transition-all duration-300 z-[5]"
          style={{
            backgroundColor: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#E02222";
            e.currentTarget.style.borderColor = "#E02222";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </section>

      {/* Spacer */}
      <div style={{ height: 70, backgroundColor: "#f5f5f5" }} />

      {/* Blogs Grid */}
      <section style={{ backgroundColor: "#f5f5f5", paddingLeft: "5%", paddingRight: "5%", paddingBottom: 120 }}>
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[#E02222] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : blogs.length === 0 ? (
          <p className="text-center text-[#5f6360] py-20">
            No blog posts yet. Check back soon!
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        )}
      </section>

      {/* Spacer before footer */}
      <div style={{ height: 80, backgroundColor: "#f5f5f5" }} />
    </div>
  );
}
