import ContactSection from "@/components/ContactSection";
import DesignsShowcase from "@/components/DesignsShowcase";
import DownloadProfile from "@/components/DownloadProfile";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SERVICES | Lexxusmoon",
  description:
    "Exterior rendering, interior rendering, and walkthrough services for architectural projects.",
};


export default function ServicesPage() {
  return (
    <div className="pt-[108px]">
      {/* Hero - Exterior Rendering */}
      <section className="relative bg-white text-black min-h-screen md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center justify-center h-full px-8">
            <ScrollReveal>
              <div className="max-w-sm">
                <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-[#171200]">
                  Exterior Rendering Services
                </h1>
                <p className="text-[#5f6360] leading-relaxed font-extralight">
                  We specialize in exterior rendering and architectural
                  visualization services that bring clarity, precision, and depth
                  to your designs. From residential elevations to large-scale
                  commercial exteriors, we deliver renders that capture every
                  architectural detail with unmatched accuracy
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="flex items-center justify-center p-8">
            <ScrollReveal delay={200}>
              <Image
                src="https://static.wixstatic.com/media/5dbb31_ab4c046bdfc8453988af86c797e8a3f6~mv2.jpg/v1/fill/w_800,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_ab4c046bdfc8453988af86c797e8a3f6~mv2.jpg"
                alt="Exterior rendering"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Interior Rendering */}
      <section className="bg-white text-black min-h-screen md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center justify-center p-8">
            <ScrollReveal delay={200}>
              <Image
                src="https://static.wixstatic.com/media/5dbb31_6b3c630ddcd54fbebfda3a7dbf5e6ec1~mv2.jpg/v1/fill/w_700,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_6b3c630ddcd54fbebfda3a7dbf5e6ec1~mv2.jpg"
                alt="Interior rendering"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-h-[70vh] object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
              />
            </ScrollReveal>
          </div>
          <div className="flex items-center justify-center h-full px-8">
            <ScrollReveal>
              <div className="max-w-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-[#171200]">
                  Interior Rendering Services
                </h2>
                <p className="text-[#5f6360] leading-relaxed font-extralight">
                  We combine creativity, precision, and commitment to deliver
                  visualisation services that exceed expectations. Whether it&apos;s
                  a modern bedroom or a restaurant project, we ensure
                  international-standard high-quality renders, on time and within
                  your budget.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Walkthrough Services */}
      <section className="bg-gray-50 text-black min-h-screen md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="flex items-center justify-center h-full px-8">
            <ScrollReveal>
              <div className="max-w-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-[#171200]">
                  Walkthrough Services
                </h2>
                <p className="text-[#5f6360] leading-relaxed font-extralight">
                  you get more than just a render, you get a partner who values your
                  time, understands your vision, and works tirelessly to deliver
                  perfection.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="flex items-center justify-center p-8">
            <ScrollReveal delay={200}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-h-[70vh] object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
              poster="https://static.wixstatic.com/media/5dbb31_35962a1081cb471989146e2144e74de0f000.jpg/v1/fill/w_700,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_35962a1081cb471989146e2144e74de0f000.jpg"
            >
              <source
                src="https://video.wixstatic.com/video/5dbb31_35962a1081cb471989146e2144e74de0/720p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Let's Make Your 3D Designs Section */}
      <DesignsShowcase />

      {/* Let's Work Together */}
      <section className="bg-white text-black min-h-[60vh] flex items-center px-6">
        <div className="max-w-[1440px] mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-5xl md:text-7xl font-extralight leading-tight text-[#171200]">
              Let&apos;s Work
              <br />
              Together
            </h2>
            <div className="mt-8 h-px bg-[#171200]/20 w-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Download Profile */}
      <div className="bg-white">
        <DownloadProfile />
      </div>

      <div className="bg-white h-40" />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
