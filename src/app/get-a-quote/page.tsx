import ContactSection from "@/components/ContactSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Lexxusmoon",
  description: "Get in touch with Lexxusmoon for your 3D rendering project.",
};

export default function GetAQuotePage() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  );
}
