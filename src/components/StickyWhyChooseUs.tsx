"use client";

import { useEffect, useRef, useState } from "react";

interface WhyChooseUsItem {
  num: string;
  title: string;
  desc: string;
  img: string;
  bg: string;
}

interface StickyWhyChooseUsProps {
  items: WhyChooseUsItem[];
}

function AnimatedCard({ item, isLast, index }: { item: WhyChooseUsItem; isLast: boolean; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={isLast ? "relative" : "sticky top-[108px]"}
      style={{ zIndex: index + 1 }}
    >
      <section ref={ref} className="flex flex-col md:flex-row border-t-2 border-white" style={{ height: 'calc(100vh - 108px)' }}>
        {/* Image */}
        <div className={`relative overflow-hidden group md:w-[45%] ${item.bg}`} style={{ paddingRight: 16 }}>
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-none"
            style={{ height: '100%' }}
          />
        </div>
        {/* Vertical line separator */}
        <div className={`w-[3px] shrink-0 ${index === 1 ? 'bg-[#E02222]' : 'bg-white'}`} />
        {/* Content — colored right panel */}
        <div
          className={`${item.bg} text-white flex flex-col justify-between relative md:flex-1`}
          style={{ padding: '40px 64px 40px 48px' }}
        >

          <div className="flex items-start justify-between">
            <h3
              className="text-2xl md:text-3xl lg:text-4xl font-bold italic"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-40px)",
                transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
              }}
            >
              {item.title}
            </h3>
            <span
              className="text-4xl md:text-5xl font-light opacity-40"
              style={{
                opacity: visible ? 0.4 : 0,
                transform: visible ? "translateX(0)" : "translateX(40px)",
                transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
              }}
            >
              {item.num}
            </span>
          </div>

          <p
            className="text-white/70 font-extralight leading-relaxed text-base md:text-lg max-w-md"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) 500ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) 500ms",
            }}
          >
            {item.desc}
          </p>
        </div>
      </section>
    </div>
  );
}

export default function StickyWhyChooseUs({ items }: StickyWhyChooseUsProps) {
  return (
    <div className="relative bg-white pt-10">
      {items.map((item, i) => (
        <AnimatedCard
          key={i}
          item={item}
          isLast={i === items.length - 1}
          index={i}
        />
      ))}
    </div>
  );
}
