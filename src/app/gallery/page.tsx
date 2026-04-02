import ContactSection from "@/components/ContactSection";
import DownloadProfile from "@/components/DownloadProfile";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Lexxusmoon",
  description:
    "Browse our portfolio of architectural 3D renders, interior designs, and exterior visualizations.",
};

const collageSection1 = [
  { src: "https://static.wixstatic.com/media/5dbb31_9aa6ef48623f432dac3051447e73043e~mv2.jpg/v1/fill/w_400,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_9aa6ef48623f432dac3051447e73043e~mv2.jpg", alt: "Interior render", wide: false },
  { src: "https://static.wixstatic.com/media/5dbb31_01f30be55e92485c9952fc1762e9249e~mv2.jpg/v1/fill/w_350,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_01f30be55e92485c9952fc1762e9249e~mv2.jpg", alt: "Architectural photo", wide: false },
  { src: "https://static.wixstatic.com/media/5dbb31_5414df7a3c784767bd1bd761101bff0b~mv2.webp/v1/fill/w_400,h_580,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_5414df7a3c784767bd1bd761101bff0b~mv2.webp", alt: "Interior design", wide: false },
];

const collageSection2 = [
  { src: "https://static.wixstatic.com/media/5dbb31_d7c28816140e4a5bb4097359a223af67~mv2.jpg/v1/fill/w_700,h_355,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_d7c28816140e4a5bb4097359a223af67~mv2.jpg", alt: "Bedroom render", wide: true },
  { src: "https://static.wixstatic.com/media/5dbb31_65d410a7598646c2a782cc6ef99069fc~mv2.jpg/v1/fill/w_400,h_324,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_65d410a7598646c2a782cc6ef99069fc~mv2.jpg", alt: "Living room", wide: false },
  { src: "https://static.wixstatic.com/media/5dbb31_549abf80215d44f3a81663e8f2dd8cc5~mv2.jpg/v1/fill/w_400,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_549abf80215d44f3a81663e8f2dd8cc5~mv2.jpg", alt: "Modern bedroom", wide: false },
  { src: "https://static.wixstatic.com/media/5dbb31_aff5253dcde14b33a582ade12594b76b~mv2.jpg/v1/fill/w_400,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_aff5253dcde14b33a582ade12594b76b~mv2.jpg", alt: "Interior scene", wide: false },
];

const collageSection3 = [
  { src: "https://static.wixstatic.com/media/5dbb31_989ba46f94db4f50ac16b9066f19ff0b~mv2.jpg/v1/fill/w_350,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_989ba46f94db4f50ac16b9066f19ff0b~mv2.jpg", alt: "Decorative render" },
  { src: "https://static.wixstatic.com/media/5dbb31_c60a15c2a9f848aab3608ff9ca173b56~mv2.jpg/v1/fill/w_450,h_594,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_c60a15c2a9f848aab3608ff9ca173b56~mv2.jpg", alt: "Architectural visualization" },
  { src: "https://static.wixstatic.com/media/5dbb31_5bc1450d67614fd59654efd366fbf176~mv2.jpeg/v1/fill/w_400,h_520,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_5bc1450d67614fd59654efd366fbf176~mv2.jpeg", alt: "Modern space" },
];

const galleryGrid = [
  { src: "https://static.wixstatic.com/media/5dbb31_f5c6d9ed147c485ea71b6a131e6cbe93~mv2.jpg/v1/fill/w_500,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_f5c6d9ed147c485ea71b6a131e6cbe93~mv2.jpg", alt: "Project render 1" },
  { src: "https://static.wixstatic.com/media/5dbb31_826a6df41ec64d2abad2c94855a1d6b9~mv2.jpg/v1/fill/w_500,h_252,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_826a6df41ec64d2abad2c94855a1d6b9~mv2.jpg", alt: "Building exterior" },
  { src: "https://static.wixstatic.com/media/5dbb31_c8068fe1ad3f4e4eb3abb63df1119d4b~mv2.jpg/v1/fill/w_500,h_282,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_c8068fe1ad3f4e4eb3abb63df1119d4b~mv2.jpg", alt: "Commercial render" },
  { src: "https://static.wixstatic.com/media/5dbb31_7cff247bf6b342f1b05bee60e1fb77a0~mv2.jpg/v1/fill/w_500,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_7cff247bf6b342f1b05bee60e1fb77a0~mv2.jpg", alt: "Interior panorama" },
  { src: "https://static.wixstatic.com/media/5dbb31_f04a31f382f04d1daf760dbb5bfebf0a~mv2.jpg/v1/fill/w_500,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_f04a31f382f04d1daf760dbb5bfebf0a~mv2.jpg", alt: "Bedroom visualization" },
  { src: "https://static.wixstatic.com/media/5dbb31_8f5a7c0defa740f7af7ed5beeb7d267d~mv2.jpg/v1/fill/w_500,h_350,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_8f5a7c0defa740f7af7ed5beeb7d267d~mv2.jpg", alt: "Living space render" },
];

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: 108, backgroundColor: "#fff" }}>
      {/* Hero - Collage: scattered on desktop, grid on mobile */}
      <section className="bg-white relative overflow-hidden h-[60vh] md:h-[calc(100vh-108px)]">
        {/* Mobile: grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-2 p-4 h-full">
          {[collageSection1[0], collageSection1[1], collageSection1[2], collageSection2[1]].map((img, i) => (
            <Link key={i} href="/" className="relative overflow-hidden rounded-xl h-full">
              <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
            </Link>
          ))}
        </div>
        {/* Desktop: scattered absolute */}
        <Link href="/" className="hidden md:block absolute overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:z-50 hover:shadow-2xl cursor-pointer" style={{ left: "3%", bottom: "0%", width: "22%", height: "70%", zIndex: 10 }}>
          <Image src={collageSection1[0].src} alt={collageSection1[0].alt} fill sizes="22vw" className="object-cover" />
        </Link>
        <Link href="/" className="hidden md:block absolute overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105 hover:z-50 hover:shadow-2xl cursor-pointer" style={{ left: "22%", top: "5%", width: "28%", height: "90%", zIndex: 20 }}>
          <Image src={collageSection1[1].src} alt={collageSection1[1].alt} fill sizes="28vw" className="object-cover" />
        </Link>
        <Link href="/" className="hidden md:block absolute overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:z-50 hover:shadow-2xl cursor-pointer" style={{ left: "48%", top: "10%", width: "22%", height: "80%", zIndex: 15 }}>
          <Image src={collageSection1[2].src} alt={collageSection1[2].alt} fill sizes="22vw" className="object-cover" />
        </Link>
        <Link href="/" className="hidden md:block absolute overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:z-50 hover:shadow-2xl cursor-pointer" style={{ left: "68%", top: "3%", width: "18%", height: "55%", zIndex: 25 }}>
          <Image src={collageSection2[1].src} alt={collageSection2[1].alt} fill sizes="18vw" className="object-cover" />
        </Link>
      </section>

      {/* Gap */}
      <div style={{ height: 40 }} />

      {/* Full Width Image */}
      <section style={{ position: "relative", height: "70vh", margin: "0 3%", borderRadius: 16, overflow: "hidden" }}>
        <Image
          src={collageSection2[0].src}
          alt={collageSection2[0].alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Gap */}
      <div style={{ height: 40 }} />

      {/* Asymmetric Two Images */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 20, padding: "0 3%", height: "70vh" }}>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <Image
            src={collageSection2[1].src}
            alt={collageSection2[1].alt}
            fill
            sizes="40vw"
            className="object-cover"
          />
        </div>
        <div style={{ position: "relative", borderRadius: 16, overflow: "hidden" }}>
          <Image
            src={collageSection2[2].src}
            alt={collageSection2[2].alt}
            fill
            sizes="60vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Gap */}
      <div style={{ height: 40 }} />

      {/* Collage Section 3 */}
      <section style={{ padding: "0 3%" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {collageSection3.map((img, i) => (
            <div key={i} style={{ position: "relative", height: 450, borderRadius: 16, overflow: "hidden" }}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="33vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Gap */}
      <div style={{ height: 40 }} />

      {/* Full Width Image */}
      <section style={{ position: "relative", height: "70vh", margin: "0 3%", borderRadius: 16, overflow: "hidden" }}>
        <Image
          src={galleryGrid[0].src}
          alt={galleryGrid[0].alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Gap */}
      <div style={{ height: 60 }} />

      {/* Download Profile */}
      <div className="bg-white">
        <DownloadProfile />
      </div>

      <div style={{ height: 80 }} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
