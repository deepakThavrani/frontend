"use client";

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import ContactSection from "@/components/ContactSection";
import DownloadProfile from "@/components/DownloadProfile";
import Image from "next/image";

const faqs = [
  {
    id: "01",
    question: "What is 3D rendering, and how can it help my architectural project?",
    answer: "3D rendering transforms your architectural designs into realistic, detailed visuals, allowing you to visualize the project before construction begins.",
  },
  {
    id: "02",
    question: "What industries do you provide rendering services for?",
    answer: "We primarily serve architects and interior designers.",
  },
  {
    id: "03",
    question: "How long does it take to complete a 3D rendering project?",
    answer: "Timelines depend on the project's complexity, but we prioritize delivering high-quality renders on time without compromising detail.",
  },
  {
    id: "04",
    question: "What makes Lexxusmoon different from other rendering companies?",
    answer: "We deliver international-standard quality renders, respect timelines, and offer affordable pricing for exceptional results.",
  },
  {
    id: "05",
    question: "Can you provide both interior and exterior renderings?",
    answer: "Yes, we specialize in both interior rendering (e.g., bedrooms, kitchens) and exterior rendering (e.g., building elevations, landscapes).",
  },
  {
    id: "06",
    question: "What file formats will I receive my 3D renders in?",
    answer: "We deliver renders in multiple formats like JPEG, PNG, or even high-resolution videos, depending on your preference.",
  },
  {
    id: "07",
    question: "Do you offer revisions if changes are required?",
    answer: "Yes, we offer revisions to ensure your vision is fully realized. The number of revisions can be discussed based on the project scope.",
  },
  {
    id: "08",
    question: "Can you handle large-scale architectural projects?",
    answer: "Absolutely! Our team is equipped to manage projects of any size, from small residential spaces to large commercial developments.",
  },
  {
    id: "09",
    question: "How do you ensure the renders match my design vision?",
    answer: "We collaborate closely with you throughout the process, using detailed project briefs and real-time updates to align with your expectations.",
  },
  {
    id: "10",
    question: "How do I get started with Lexxusmoon for my project?",
    answer: "Simply reach out to us via our contact page or email with your project details, and we'll provide you with a custom proposal.",
  },
];

export default function FAQsPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeroVisible(true), 200);
  }, []);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ paddingTop: "108px" }}>
      {/* Hero Banner */}
      <section
        className="flex items-center justify-center bg-white md:h-[calc(100vh-108px)]"
        style={{ height: "100vh", padding: "30px 20px" }}
      >
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src="https://static.wixstatic.com/media/5dbb31_c701e5e867964006a1b1448a3145d18e~mv2.jpg/v1/fill/w_1920,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dbb31_c701e5e867964006a1b1448a3145d18e~mv2.jpg"
            alt="Architectural brilliance"
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center md:items-end md:justify-end md:p-16 px-6">
            <h2
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center md:text-right leading-tight md:!text-[70px]"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)", color: "#ffffff" }}
            >
              <span
                className="block transition-all duration-1000 ease-out md:!mr-[120px]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(100%)",
                  color: "#ffffff",
                }}
              >
                Architectural
              </span>
              <span
                className="block transition-all duration-1000 ease-out"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(100%)",
                  transitionDelay: "200ms",
                  color: "#ffffff",
                }}
              >
                Brilliance Deserves
              </span>
              <span
                className="block transition-all duration-1000 ease-out md:!mr-[80px]"
                style={{
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? "translateY(0)" : "translateY(100%)",
                  transitionDelay: "400ms",
                  color: "#ffffff",
                }}
              >
                Brilliant Visuals
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        className="bg-white text-black md:px-[10%]"
        style={{ paddingTop: 80, paddingBottom: 120, paddingLeft: "24px", paddingRight: "24px" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-[#171200]">
              Frequently asked
              <br />
              questions
            </h1>
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Looking for something?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border-b border-gray-300 py-2 pr-8 pl-2 focus:outline-none focus:border-[#E02222] transition-colors text-sm w-full md:w-64 bg-transparent"
              />
              <svg
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </div>
          </div>

          {/* Tab */}
          <div className="mb-8">
            <span className="text-sm font-medium text-[#E02222] border-b-2 border-[#E02222] pb-2">
              General
            </span>
          </div>

          {/* FAQ Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="flex border border-gray-200 overflow-hidden"
              >
                {/* Red number badge */}
                <div
                  className="flex items-center justify-center text-white font-bold shrink-0 min-w-[56px] md:min-w-[120px] text-xl md:text-[32px]"
                  style={{ backgroundColor: "#E02222" }}
                >
                  {faq.id}
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0" style={{ backgroundColor: "#f9fafb" }}>
                  <button
                    onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                    className="w-full flex items-center gap-3 md:gap-6 p-4 md:p-9 text-left bg-transparent border-none cursor-pointer"
                  >
                    <span className="flex-1 text-sm md:text-[22px] font-medium text-[#171200]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={24}
                      className={`text-gray-400 transition-transform duration-300 shrink-0 ${
                        openId === faq.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    style={{
                      maxHeight: openId === faq.id ? "300px" : "0px",
                      opacity: openId === faq.id ? 1 : 0,
                      overflow: "hidden",
                      transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease",
                    }}
                  >
                    <div className="px-4 pb-4 md:px-9 md:pb-8 text-sm md:text-[18px] text-[#5f6360] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
