"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface FloatingGalleryProps {
  images: { src: string; alt: string }[];
}

export default function FloatingGallery({ images }: FloatingGalleryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [time, setTime] = useState(0);

  // Idle floating animation
  useEffect(() => {
    let frame: number;
    const animate = () => {
      setTime((t) => t + 0.008);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x, y });
  };

  const cardConfigs = [
    { moveX: 60, moveY: 40, rotate: 5, height: "h-[350px]", mt: "mt-0", phase: 0 },
    { moveX: -45, moveY: 55, rotate: -4, height: "h-[420px]", mt: "mt-10", phase: 1.2 },
    { moveX: 50, moveY: -35, rotate: 3.5, height: "h-[380px]", mt: "mt-5", phase: 2.4 },
    { moveX: -55, moveY: 45, rotate: -5, height: "h-[400px]", mt: "mt-8", phase: 3.6 },
    { moveX: 40, moveY: -50, rotate: 4.5, height: "h-[360px]", mt: "mt-3", phase: 4.8 },
    { moveX: -60, moveY: 35, rotate: -3.5, height: "h-[390px]", mt: "mt-12", phase: 0.8 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 px-6 md:px-12 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => {
        setIsMouseInside(false);
        setMouse({ x: 0, y: 0 });
        setHoveredCard(null);
      }}
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {images.map((img, i) => {
          const config = cardConfigs[i % 6];
          const isHovered = hoveredCard === i;

          // Idle floating motion (always active)
          const idleX = Math.sin(time + config.phase) * 15 + Math.cos(time * 0.7 + config.phase * 2) * 10;
          const idleY = Math.cos(time * 0.8 + config.phase) * 12 + Math.sin(time * 0.5 + config.phase * 1.5) * 8;
          const idleRotate = Math.sin(time * 0.6 + config.phase) * 2;

          // Mouse-driven motion (when hovering section)
          const multiplier = isHovered ? 1.8 : 1;
          const mouseX = isMouseInside ? mouse.x * config.moveX * multiplier : 0;
          const mouseY = isMouseInside ? mouse.y * config.moveY * multiplier : 0;
          const mouseRz = isMouseInside ? mouse.x * config.rotate * multiplier : 0;
          const mouseRx = isMouseInside ? mouse.y * -10 * multiplier : 0;
          const mouseRy = isMouseInside ? mouse.x * 10 * multiplier : 0;

          // Combine idle + mouse
          const tx = idleX + mouseX;
          const ty = idleY + mouseY;
          const rz = idleRotate + mouseRz;
          const tz = isHovered ? 50 : 0;

          return (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg ${config.height} ${config.mt}`}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                transform: `perspective(600px) translate3d(${tx}px, ${ty}px, ${tz}px) rotateX(${mouseRx}deg) rotateY(${mouseRy}deg) rotate(${rz}deg) scale(${isHovered ? 1.05 : 1})`,
                transition: isMouseInside
                  ? "transform 0.2s ease-out, box-shadow 0.2s ease-out"
                  : "box-shadow 0.3s ease-out",
                boxShadow: isHovered
                  ? `${-tx * 0.8}px ${-ty * 0.8}px 60px rgba(0,0,0,0.7), 0 0 20px rgba(224,34,34,0.15)`
                  : `${-tx * 0.3}px ${-ty * 0.3}px 30px rgba(0,0,0,0.4)`,
                zIndex: isHovered ? 10 : 1,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: isHovered
                    ? `linear-gradient(${120 + mouse.x * 60}deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)`
                    : "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
