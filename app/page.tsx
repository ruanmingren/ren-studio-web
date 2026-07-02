"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import MarqueeClients from "./components/MarqueeClients";

export default function HomePage() {
  const { scrollY } = useScroll();
  const blurValue = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(12px)"]);
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.7]);

  return (
    <main className="relative min-h-[200vh]"> 
      
      {/* 1. VIDEO CỐ ĐỊNH CHẾT MỘT CHỖ */}
      <motion.div 
        className="fixed inset-0 z-[-3]" // Lùi z-index xuống -3 để nhường chỗ cho lớp lưới
        style={{ filter: blurValue }}
      >
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/showreel.mp4" type="video/mp4" /> 
        </video>
      </motion.div>

      {/* 1.5. LỚP LƯỚI DOT HALFTONE (BÍ QUYẾT CỦA MAPPA Ở ĐÂY) */}
      <motion.div 
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          // Thuật toán vẽ các chấm đen nhỏ xíu lặp lại liên tục
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.7) 1px, transparent 1px)",
          // Khoảng cách giữa các chấm (càng nhỏ thì lưới càng mịn)
          backgroundSize: "3px 3px",
          // Cho lớp lưới mờ dần cùng với video khi cuộn xuống cho đồng bộ
          filter: blurValue 
        }}
      />

      {/* 2. LỚP PHỦ ĐEN TỐI DẦN KHI CUỘN XUỐNG */}
      <motion.div 
        className="fixed inset-0 bg-black z-[-1] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* 3. KHÔNG GIAN TRỐNG Ở TRÊN ĐỂ KHÁCH XEM FULL VIDEO */}
      <div className="h-screen w-full flex items-center justify-center">
        {/* Nếu ông muốn để chữ REN ANIMATION STUDIO chà bá ở giữa video thì để ở đây */}
      </div>
        
      {/* 4. KHU VỰC NỘI DUNG TRƯỢT LÊN (CÓ THỂ LÀ FOOTER HOẶC THÔNG TIN) */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Ông có thể chèn các khối chữ, hoặc component Footer vào đây */}
        <div className="text-white">
          <h2 className="text-5xl font-black tracking-widest uppercase mb-4">
            Ren Animation
          </h2>
          <p className="text-zinc-400 tracking-[0.2em] uppercase text-sm w-full md:w-1/2 leading-relaxed">
            Crafting world-class 2D animation, background art, and composite works for global projects.
          </p>
          <MarqueeClients />
        </div>
      </div>
    </main>
  );
}