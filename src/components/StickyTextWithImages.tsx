"use client";

import { useRef, useState, useEffect } from "react";

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
  const [textVisible, setTextVisible] = useState(true);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      () => {
        // Check if ANY image is currently visible
        const anyVisible = imageRefs.current.some((ref) => {
          if (!ref) return false;
          const rect = ref.getBoundingClientRect();
          return rect.top < window.innerHeight && rect.bottom > 0;
        });
        setTextVisible(!anyVisible);
      },
      { threshold: [0, 0.1, 0.5, 1] }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-black overflow-x-clip"
      style={{ height: `${(totalImages + 2) * 180}vh` }}
    >
      {/* Sticky text — stays centered, offset for header (108px) */}
      <div className="sticky top-[108px] h-[calc(100vh-108px)] flex items-center justify-center px-4 z-0">
        <h2
          className="text-[#e50914] text-[9.5vw] md:text-[8vw] leading-[1.05] text-center transition-opacity duration-500"
          style={{ opacity: textVisible ? 1 : 0 }}
        >
          <span style={{ fontFamily: "var(--font-poppins), sans-serif" }} className="font-extralight">
            Transform your
          </span>
          <br />
          <span className="font-serif-italic font-bold text-[#e50914] text-[11vw] md:text-[9.5vw]">
            Architectural
          </span>{" "}
          <span style={{ fontFamily: "var(--font-poppins), sans-serif" }} className="font-extralight text-[9.5vw] md:text-[8vw]">
            ideas
          </span>
          <br />
          <span style={{ fontFamily: "var(--font-poppins), sans-serif" }} className="font-extralight">
            into Stunning
          </span>
          <br />
          <span className="font-serif-italic font-bold text-[#e50914] text-[11vw] md:text-[9.5vw]">
            Visuals
          </span>
        </h2>
      </div>

      {/* Images that scroll over the sticky text */}
      <div className="relative z-10" style={{ marginTop: "-50vh", paddingLeft: "15vw", paddingRight: "15vw" }}>
        {images.map((img, i) => {
          const positions = [
            "items-center justify-start",
            "items-center justify-end",
            "items-center justify-center",
            "items-center justify-start",
            "items-center justify-end",
          ];
          const pos = positions[i % positions.length];

          const rotations = [-1, 1, 0, -1, 1];
          const rotation = rotations[i % rotations.length];

          const sizes = [
            "w-[200px] h-[280px] md:w-[280px] md:h-[370px]",
            "w-[200px] h-[280px] md:w-[280px] md:h-[370px]",
            "w-[190px] h-[270px] md:w-[270px] md:h-[360px]",
            "w-[180px] h-[240px] md:w-[240px] md:h-[320px]",
            "w-[190px] h-[270px] md:w-[270px] md:h-[360px]",
          ];
          const size = sizes[i % sizes.length];

          return (
            <div
              key={i}
              className={`h-[200vh] flex ${pos}`}
            >
              <div
                ref={(el) => { imageRefs.current[i] = el; }}
                className={`${size} relative overflow-hidden rounded-2xl`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
