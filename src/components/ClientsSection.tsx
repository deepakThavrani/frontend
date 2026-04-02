"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ClientsSectionProps {
  logos: string[];
}

export default function ClientsSection({ logos }: ClientsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section ref={sectionRef} className="bg-white" style={{ padding: '160px 40px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: '#171200',
            letterSpacing: '0.2em',
            marginBottom: 16,
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          }}
        >
          OUR CLIENTS
        </h2>
        <p
          style={{
            color: '#999',
            fontWeight: 300,
            fontSize: 16,
            marginBottom: 60,
            textAlign: 'center',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
          }}
        >
          We believe every client is a valuable long-term partner.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          {logos.slice(0, 5).map((logo, i) => (
            <div
              key={i}
              className="grayscale hover:grayscale-0 transition-all duration-500"
              style={{
                width: '18%',
                aspectRatio: '1',
                flexShrink: 0,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.8)',
                transition: `opacity 0.6s ease-out ${0.3 + i * 0.15}s, transform 0.6s ease-out ${0.3 + i * 0.15}s`,
              }}
            >
              <Image
                src={logo}
                alt={`Client ${i + 1}`}
                width={200}
                height={200}
                sizes="18vw"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
