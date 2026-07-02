"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function WibuPortal() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);

  // Kiểm tra xem có đang ở trang của Class of Wibu không
  const isWibuMode = pathname.startsWith("/wibu");

  const toggleUniverse = () => {
    setIsAnimating(true);
    // Tạo độ trễ 800ms để chạy hiệu ứng chớp sáng màn hình rồi mới đổi link
    setTimeout(() => {
      if (isWibuMode) {
        router.push("/"); // Về lại Studio
      } else {
        router.push("/wibu"); // Sang Lớp Wibu
      }
      // Đợi load xong thì tắt chớp sáng
      setTimeout(() => setIsAnimating(false), 500);
    }, 800);
  };

  return (
    <>
      {/* Hiệu ứng chớp trắng Anime toàn màn hình */}
      <div 
        className={`fixed inset-0 bg-white z-[9999] transition-opacity duration-700 pointer-events-none ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      {/* Nút bấm trôi nổi ở góc phải bên dưới */}
      <button
        onClick={toggleUniverse}
        className={`fixed bottom-8 right-8 z-[50] px-6 py-3 rounded-full font-bold tracking-widest text-xs md:text-sm uppercase shadow-2xl hover:scale-110 transition-all duration-300 flex items-center gap-2 border ${
          isWibuMode 
            ? "bg-black text-white border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
            : "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        }`}
      >
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isWibuMode ? "bg-white" : "bg-black"}`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isWibuMode ? "bg-white" : "bg-black"}`}></span>
        </span>
        {isWibuMode ? "Back to Studio" : "Class of Wibu"}
      </button>
    </>
  );
}
