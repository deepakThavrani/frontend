"use client";

import { useRef, useState, useEffect } from "react";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursor({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (videoRef.current) {
          if (isPlaying) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setIsPlaying(!isPlaying);
        }
      }}
      style={{ cursor: "none" }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover transition-transform duration-700"
        style={{
          mixBlendMode: "screen",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 1.2s ease-out",
        }}
      >
        <source src="/file.mp4" type="video/mp4" />
      </video>

      {/* Custom cursor */}
      <div
        className="absolute pointer-events-none z-20 flex items-center justify-center"
        style={{
          left: cursor.x,
          top: cursor.y,
          width: 80,
          height: 80,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.8)",
          transform: `translate(-50%, -50%) scale(${isHovered ? 1 : 0})`,
          opacity: isHovered ? 1 : 0,
          transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
          backdropFilter: "blur(2px)",
          backgroundColor: "rgba(224, 34, 34, 0.15)",
        }}
      >
        <span className="text-white text-[11px] font-medium tracking-[0.2em] uppercase">
          {isPlaying ? "PAUSE" : "PLAY"}
        </span>
      </div>

    </section>
  );
}
