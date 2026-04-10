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


export default function GalleryPage() {
  return (
    <div style={{ paddingTop: 108, backgroundColor: "#fff" }}>
      {/* Hero - Collage: scattered on desktop, grid on mobile */}
      <section className="bg-white relative overflow-visible h-[60vh] md:h-[calc(100vh-108px)]">
        {/* Mobile: grid layout */}
        <div className="md:hidden grid grid-cols-2 gap-2 p-4 h-full">
          {[collageSection1[0], collageSection1[1], collageSection1[2], collageSection2[1]].map((img, i) => (
            <Link key={i} href="/" className="relative overflow-hidden rounded-xl h-full">
              <Image src={img.src} alt={img.alt} fill sizes="50vw" className="object-cover" />
            </Link>
          ))}
        </div>
        {/* Desktop: scattered absolute - matching reference layout */}
        {/* Bottom-left small image - dark kitchen */}
        <Link href="/" className="hidden md:block absolute overflow-hidden cursor-pointer" style={{ left: "11%", bottom: "-12%", width: "20%", height: "65%", zIndex: 25 }}>
          <Image src="/gallery-bottom-left.jpg" alt="Kitchen interior" fill sizes="27vw" className="object-cover" />
        </Link>
        {/* Center large image - bedroom */}
        <Link href="/" className="hidden md:block absolute overflow-hidden cursor-pointer" style={{ left: "24%", top: "0%", width: "32%", height: "105%", zIndex: 20 }}>
          <Image src={collageSection1[0].src} alt={collageSection1[0].alt} fill sizes="30vw" className="object-cover" />
        </Link>
        {/* Right-center image - exterior building */}
        <Link href="/" className="hidden md:block absolute overflow-hidden cursor-pointer" style={{ left: "54%", top: "8%", width: "22%", height: "78%", zIndex: 15 }}>
          <Image src="/gallery-exterior.jpg" alt="Exterior building" fill sizes="22vw" className="object-cover" />
        </Link>
        {/* Far right - orange kitchen */}
        <Link href="/" className="hidden md:block absolute overflow-hidden cursor-pointer" style={{ right: "10%", top: "0%", width: "20%", height: "66%", zIndex: 10 }}>
          <Image src={collageSection1[1].src} alt={collageSection1[1].alt} fill sizes="20vw" className="object-cover" />
        </Link>
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Full Width Living Room Image */}
      <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden", marginTop: 140 }}>
        <Image
          src="/image2.png"
          alt="Luxury living room interior"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Asymmetric Two Images */}
      <section style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 80, padding: "0 8%", height: "95vh" }}>
        <div style={{ position: "relative", overflow: "hidden", width: "28%", height: "75%", flexShrink: 0, marginBottom: "5%" }}>
          <Image
            src="/image3.png"
            alt="Modern living room with cherry blossom"
            fill
            sizes="25vw"
            className="object-cover"
          />
        </div>
        <div style={{ position: "relative", overflow: "hidden", width: "48%", height: "100%", flexShrink: 0 }}>
          <Image
            src="/image.png"
            alt="Luxury interior with pendant light"
            fill
            sizes="60vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Two Images - Left and Right with Overlap */}
      <section style={{ position: "relative", padding: "0 8%", height: "170vh" }}>
        <div style={{ position: "absolute", overflow: "hidden", width: "60%", height: "100%", left: "8%", bottom: "-55%", zIndex: 10 }}>
          <Image
            src="/images/image.png"
            alt="Modern glass building at night"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div style={{ position: "absolute", overflow: "hidden", width: "58%", height: "100%", right: "8%", top: "0%", zIndex: 20 }}>
          <Image
            src="/images/image1.png"
            alt="Commercial building exterior"
            fill
            sizes="55vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Gap - extra for overflowing left image */}
      <div style={{ height: 600 }} />

      {/* Full Width Panoramic Image */}
      <section style={{ position: "relative", height: "120vh", width: "100%", overflow: "hidden" }}>
        <Image
          src="/images/imagen.png"
          alt="Panoramic living room view"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Two Bedroom Images - Large Left, Small Right */}
      <section style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 60, padding: "0 8%", height: "120vh" }}>
        <div style={{ position: "relative", overflow: "hidden", width: "48%", height: "100%", flexShrink: 0 }}>
          <Image
            src="/images/imagenow.png"
            alt="Bedroom with chandelier"
            fill
            sizes="55vw"
            className="object-cover"
          />
        </div>
        <div style={{ position: "relative", overflow: "hidden", width: "38%", height: "30%", flexShrink: 0 }}>
          <Image
            src="/images/imagenow2.png"
            alt="Bedroom detail view"
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Full Width Image - Luxury Living Space */}
      <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
        <Image
          src="/images/imagenext.png"
          alt="Luxury living space with marble table"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </section>

      {/* Gap */}
      <div style={{ height: 160 }} />

      {/* Download Profile */}
      <div className="bg-white">
        <DownloadProfile />
      </div>

      <div style={{ height: 160 }} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
