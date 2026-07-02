"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

// Nếu đường dẫn có chữ wibu -> Giấu Header Studio đi
export function StudioHeader() {
  const pathname = usePathname();
  if (pathname?.startsWith("/wibu")) return null;
  return <Header />;
}

// Nếu đường dẫn có chữ wibu -> Giấu Footer Studio đi
export function StudioFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/wibu")) return null;
  return <Footer />;
}
