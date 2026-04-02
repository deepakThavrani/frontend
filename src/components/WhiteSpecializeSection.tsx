"use client";

import { useEffect, useRef, useState } from "react";

const words = [
  { text: "We", highlight: false },
  { text: "Specialize", highlight: false },
  { text: "In", highlight: false },
  { text: "Delivering", highlight: false },
  { text: "International", highlight: true },
  { text: "Standard,", highlight: true },
  { text: "High-Quality", highlight: false },
  { text: "Renders", highlight: false },
  { text: "For", highlight: false },
  { text: "Architects,", highlight: false },
  { text: "And", highlight: false },
  { text: "Interior", highlight: false },
  { text: "Designers.", highlight: false },
];

export default function WhiteSpecializeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="relative bg-white overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div
          ref={sectionRef}
          className="relative z-10 min-h-screen flex items-center justify-center px-6"
        >
          <p className="max-w-6xl mx-auto text-center text-[clamp(2rem,5.5vw,5rem)] font-light leading-[1.15] tracking-tight flex flex-wrap justify-center gap-x-[0.3em]">
            {words.map((word, i) => (
              <span
                key={i}
                className="inline-block overflow-hidden"
              >
                <span
                  className={`inline-block ${word.highlight ? "text-[#e50914] font-medium" : "text-[#171200]"}`}
                  style={{
                    opacity: triggered ? 1 : 0,
                    transform: triggered
                      ? "translateY(0) rotate(0deg)"
                      : "translateY(100%) rotate(3deg)",
                    filter: triggered ? "blur(0px)" : "blur(4px)",
                    transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms, filter 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${i * 60}ms`,
                  }}
                >
                  {word.text}
                </span>
              </span>
            ))}
          </p>
        </div>

        {/* Why Choose Us heading */}
        <div className="relative z-10 pt-20 md:pt-28 pb-0 px-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e50914] tracking-tight">
            Why Choose Us?
          </h2>
        </div>
      </section>
    </>
  );
}
