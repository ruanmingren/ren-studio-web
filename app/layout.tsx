import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import "./globals.css";
//import Header from "./components/Header";
//import Footer from "./components/Footer";

//const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ren Animation Studio",
  description: "Official Website of Ren Animation Studio",
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* <Header />  <-- Tạm thời ẩn Header đi bằng cách thêm // phía trước */}
        {children}
        {/* <Footer />  <-- Tạm thời ẩn Footer đi bằng cách thêm // phía trước */}
      </body>
    </html>
  );
}