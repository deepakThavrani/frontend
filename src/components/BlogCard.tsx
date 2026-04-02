"use client";

import Link from "next/link";
import Image from "next/image";

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

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="group block h-full">
      <div className="flex flex-col h-full overflow-hidden bg-white rounded-2xl transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2">
        {/* Image - balanced height */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={blog.coverImage || "https://via.placeholder.com/400x300"}
            alt={blog.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute top-4 left-4 bg-[#E02222] text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-full">
            {blog.category}
          </div>
          <div className="absolute bottom-3 left-4 text-white/90 text-xs font-medium tracking-wide">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>

        {/* Content - balanced padding */}
        <div className="flex flex-col flex-1" style={{ padding: "20px 24px 20px 24px" }}>
          <h3 className="text-base md:text-lg font-bold text-[#171200] mb-3 leading-snug group-hover:text-[#E02222] transition-colors duration-300 line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-[13px] text-[#5f6360] leading-relaxed line-clamp-2 flex-1">
            {blog.excerpt}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-4 text-[13px] text-[#5f6360]">
              <span className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                {blog.views || 0}
              </span>
              <span className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                {blog.likes || 0}
              </span>
            </div>
            <span className="flex items-center gap-1 text-xs font-bold text-[#E02222] uppercase tracking-wider transition-all duration-300 group-hover:gap-2">
              Read
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
