import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StudioHeader, StudioFooter } from "./components/StudioNav";
import WibuPortal from "./components/WibuPortal";
import LanguageSwitcher from "./components/LanguageSwitcher";
import CustomCursor from "./components/CustomCursor";
import BGMPlayer from "./components/BGMPlayer";
import OrganizationJsonLd from "./components/OrganizationJsonLd"; // Nhớ import cái này 
import TransitionWipe from "./components/TransitionWipe";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://renanimationstudio.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ren Animation Studio | 2D Anime Production",
    template: "%s | Ren Animation Studio",
  },
  description: "High-quality 2D Anime Production, Digital Illustration, and Background Painting based in Ho Chi Minh City, Vietnam.",
  keywords: [
    "Ren Animation Studio",
    "Anime Production",
    "2D Animation Vietnam",
    "Sơn Hà Xích Quỷ",
    "Project 7.1.111",
    "Visual Novel Development",
    "Background Anime Class",
    "Anime Outsourcing Studio Vietnam",
    "Hire 2D Animation Studio",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "Ren Animation Studio",
    description: "Bringing imagination to life through 2D Anime and Visual Novels.",
    url: SITE_URL,
    siteName: "Ren Animation Studio",
    images: [
      {
        url: "/og-image.jpg", // Tí nhớ quăng 1 tấm hình xịn vào thư mục public nha
        width: 1200,
        height: 630,
        alt: "Ren Animation Studio — 2D Anime Production",
      },
    ],
    // Tạm thời để tiếng Anh làm chuẩn vì content thẻ đang là tiếng Anh
    locale: "en_US", 
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ren Animation Studio",
    description: "2D Anime Production, Background Art & Visual Novels — Ho Chi Minh City.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white relative antialiased`}>
        <TransitionWipe />
        <div className="fixed inset-0 z-[-10] w-screen h-screen bg-[url('/duong-dan-anh-halftone.png')] bg-repeat opacity-20 pointer-events-none" />
        <OrganizationJsonLd />
        <CustomCursor />
        <StudioHeader />
        <WibuPortal />
        {children}
        <StudioFooter />
        <LanguageSwitcher />
        <BGMPlayer/>
      </body>
    </html>
  );
}