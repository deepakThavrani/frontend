"use client";

import { useRef } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

interface StickyTextWithImagesProps {
  images: ImageItem[];
}

export default function StickyTextWithImages({ images }: StickyTextWithImagesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const totalImages = images.length;

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-x-clip"
      style={{ height: `${(totalImages + 2) * 100}vh` }}
    >
      {/* Sticky text — stays centered, offset for header (108px) */}
      <div className="sticky top-[108px] h-[calc(100vh-108px)] flex items-center justify-center px-4 z-0">
        <h2 className="text-[#e50914] text-[9.5vw] md:text-[8vw] leading-[1.05] text-center">
          <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-light">
            Transform your
          </span>
          <br />
          <span className="font-serif-italic font-bold text-[#e50914] text-[11vw] md:text-[9.5vw]">
            Architectural
          </span>{" "}
          <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-light text-[9.5vw] md:text-[8vw]">
            ideas
          </span>
          <br />
          <span style={{ fontFamily: "'Poppins', sans-serif" }} className="font-light">
            into Stunning
          </span>
          <br />
          <span className="font-serif-italic font-bold text-[#e50914] text-[11vw] md:text-[9.5vw]">
            Visuals
          </span>
        </h2>
      </div>

      {/* Images that scroll over the sticky text */}
      <div className="relative z-10" style={{ marginTop: "-50vh" }}>
        {images.map((img, i) => {
          const positions = [
            "items-center justify-start pl-6 md:pl-20",
            "items-center justify-end pr-6 md:pr-20",
            "items-center justify-center",
            "items-center justify-start pl-6 md:pl-20",
            "items-center justify-end pr-6 md:pr-20",
          ];
          const pos = positions[i % positions.length];

          const rotations = [-3, 2, -1, 3, -2];
          const rotation = rotations[i % rotations.length];

          const sizes = [
            "w-[280px] h-[380px] md:w-[350px] md:h-[450px]",
            "w-[300px] h-[400px] md:w-[380px] md:h-[480px]",
            "w-[260px] h-[360px] md:w-[320px] md:h-[420px]",
            "w-[290px] h-[390px] md:w-[360px] md:h-[460px]",
            "w-[270px] h-[370px] md:w-[340px] md:h-[440px]",
          ];
          const size = sizes[i % sizes.length];

          return (
            <div
              key={i}
              className={`h-[120vh] flex ${pos}`}
            >
              <div
                className={`${size} relative overflow-hidden rounded-2xl shadow-2xl shadow-black/50`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
