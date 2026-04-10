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
      <section className="relative bg-white text-black overflow-hidden pt-8 md:pt-0 md:h-[calc(100vh-10px)]">
        <div className="flex flex-col md:flex-row h-full md:min-h-0 gap-10 md:gap-0">
          <div className="w-full md:w-1/2 flex items-center pt-8 pb-4 md:py-0 px-6 md:pl-[8vw] md:pr-[4vw]">
            <ScrollReveal>
              <div className="max-w-md">
                <h1 className="text-3xl md:text-4xl font-semibold mb-6 md:mb-10 text-[#171200]">
                  Exterior Rendering Services
                </h1>
                <p className="text-black leading-relaxed font-light text-base md:text-lg">
                  We specialize in exterior rendering and architectural
                  visualization services that bring clarity, precision, and depth
                  to your designs. From residential elevations to large-scale
                  commercial exteriors, we deliver renders that capture every
                  architectural detail with unmatched accuracy
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 flex flex-col h-[50vh] md:h-full">
            <div className="hidden md:block" style={{ height: 150 }} />
            <div className="flex-1 ml-0 md:ml-4 overflow-hidden rounded-2xl md:rounded-none md:rounded-l-[40px] mx-6 md:mx-0">
              <img
                src="https://static.wixstatic.com/media/5dbb31_ab4c046bdfc8453988af86c797e8a3f6~mv2.jpg/v1/fill/w_800,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_ab4c046bdfc8453988af86c797e8a3f6~mv2.jpg"
                alt="Exterior rendering"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Rendering */}
      <section className="bg-white text-black py-20 md:py-0 md:min-h-screen md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-12 md:gap-0">
          <div className="flex items-center px-6 md:px-0 md:pr-8">
            <ScrollReveal delay={200}>
              <Image
                src="https://static.wixstatic.com/media/5dbb31_6b3c630ddcd54fbebfda3a7dbf5e6ec1~mv2.jpg/v1/fill/w_700,h_393,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_6b3c630ddcd54fbebfda3a7dbf5e6ec1~mv2.jpg"
                alt="Interior rendering"
                width={800}
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full max-h-[50vh] md:max-h-[70vh] object-cover transition-transform duration-700 hover:scale-110 rounded-2xl md:rounded-none md:rounded-r-[40px]"
              />
            </ScrollReveal>
          </div>
          <div className="flex items-center justify-center h-full px-6 md:px-8">
            <ScrollReveal>
              <div className="max-w-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-[#171200]">
                  Interior Rendering Services
                </h2>
                <p className="text-black leading-relaxed font-light text-base md:text-lg">
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
      <section className="bg-gray-50 text-black py-20 md:py-0 md:min-h-screen md:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-12 md:gap-0">
          <div className="flex items-center justify-center h-full px-6 md:px-8 order-2 md:order-1">
            <ScrollReveal>
              <div className="max-w-sm">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-16 text-[#171200]">
                  Walkthrough Services
                </h2>
                <p className="text-black leading-relaxed font-light text-sm md:text-base">
                  you get more than just a render, you get a partner who values your
                  time, understands your vision, and works tirelessly to deliver
                  perfection.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <div className="flex items-center justify-center p-6 md:p-8 order-1 md:order-2">
            <ScrollReveal delay={200}>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-h-[50vh] md:max-h-[70vh] object-cover transition-transform duration-700 hover:scale-110 rounded-2xl md:rounded-none md:rounded-l-[40px]"
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
      <section className="bg-white text-black min-h-[40vh] md:min-h-[60vh] flex items-center px-6 py-20 md:py-0">
        <div className="max-w-[1440px] mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-4xl md:text-7xl font-extralight leading-tight text-[#171200]">
              Let&apos;s Work
              <br />
              Together
            </h2>
            <div className="mt-6 md:mt-8 h-px bg-[#171200]/20 w-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Download Profile */}
      <div className="bg-white">
        <DownloadProfile />
      </div>

      <div className="bg-white h-20 md:h-40" />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
