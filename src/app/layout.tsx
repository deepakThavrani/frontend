import type { Metadata } from "next";
import { Work_Sans, EB_Garamond, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-work-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lexxusmoon | 3D visualisation",
  description:
    "Transform your architectural ideas into stunning visuals. We specialize in delivering international standard, high-quality 3D renders for architects and interior designers.",
  icons: {
    icon: "https://static.wixstatic.com/media/5dbb31_3265aeb4c2ec496e9fc03c4afc59e03a%7Emv2.png/v1/fill/w_32%2Ch_32%2Clg_1%2Cusm_0.66_1.00_0.01/5dbb31_3265aeb4c2ec496e9fc03c4afc59e03a%7Emv2.png",
    apple:
      "https://static.wixstatic.com/media/5dbb31_3265aeb4c2ec496e9fc03c4afc59e03a%7Emv2.png/v1/fill/w_180%2Ch_180%2Clg_1%2Cusm_0.66_1.00_0.01/5dbb31_3265aeb4c2ec496e9fc03c4afc59e03a%7Emv2.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`antialiased ${workSans.variable} ${ebGaramond.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
