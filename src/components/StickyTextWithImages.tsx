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
  const [isMobile, setIsMobile] = useState(false);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileImageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
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
  }, [isMobile]);

  // Mobile scroll-driven scale effect
  useEffect(() => {
    if (!isMobile) return;
    const handleScroll = () => {
      const viewportH = window.innerHeight;
      mobileImageRefs.current.forEach((ref) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const elCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportH / 2;
        // distance from viewport center, normalized
        const distance = elCenter - viewportCenter;
        // when image is below viewport: scale 1, when at top of viewport: scale 0.4
        let scale = 1;
        if (distance < 0) {
          // image moving above center, shrink
          const ratio = Math.min(1, Math.abs(distance) / viewportH);
          scale = Math.max(0.35, 1 - ratio * 0.65);
        }
        ref.style.transform = `scale(${scale})`;
        ref.style.opacity = String(Math.max(0.5, scale));
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // ─── MOBILE LAYOUT ───
  if (isMobile) {
    return (
      <section
        className="relative overflow-x-clip"
        style={{
          background:
            "linear-gradient(180deg, #e8b8b3 0%, #d6a59f 50%, #c4928c 100%)",
        }}
      >
        {/* Heading - scrolls with content */}
        <div className="px-6 pt-24 pb-12 text-center">
          <h2 className="text-[#171200] text-[10vw] leading-[1.05] font-light">
            <span style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              Transform your
            </span>
            <br />
            <span className="font-serif-italic font-bold text-[#e50914]">
              Architectural
            </span>{" "}
            <span style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              ideas
            </span>
            <br />
            <span style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
              into Stunning
            </span>
            <br />
            <span className="font-serif-italic font-bold text-[#e50914]">
              Visuals
            </span>
          </h2>
        </div>

        {/* Images stacked, scroll-driven scale */}
        <div className="flex flex-col items-center gap-12 pb-24">
          {images.map((img, i) => (
            <div
              key={i}
              ref={(el) => {
                mobileImageRefs.current[i] = el;
              }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
              style={{
                width: "75vw",
                height: "55vh",
                transformOrigin: "center center",
                transition: "transform 0.1s linear, opacity 0.1s linear",
                willChange: "transform, opacity",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ─── DESKTOP LAYOUT (unchanged) ───
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
