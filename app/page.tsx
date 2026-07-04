"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import MarqueeClients from "./components/MarqueeClients";

export default function HomePage() {
  const { scrollY } = useScroll();
  // Khi cuộn từ 0 đến 400px, video sẽ nhòe từ 0 lên 12px
  const blurValue = useTransform(scrollY, [0, 400], ["blur(0px)", "blur(12px)"]);
  // Phủ đen mờ dần
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 0.7]);

  return (
    <main className="relative min-h-[200vh]"> 
      
      {/* 1. LỚP VIDEO (Bị nhòe khi cuộn) */}
      <motion.div 
        className="fixed inset-0 z-[-3]"
        style={{ filter: blurValue }} // Lệnh nhòe chỉ áp dụng cho video
      >
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          poster="/poster-showreel.jpg" 
          className="w-full h-full object-cover"
        >
          <source src="/showreel.mp4" type="video/mp4" /> 
        </video>
      </motion.div>

      {/* 1.5. LỚP LƯỚI DOT HALFTONE (Sắc nét vĩnh viễn) */}
      <div 
        className="fixed inset-0 z-[-2] pointer-events-none"
        style={{
          // Thuật toán vẽ các chấm đen nhỏ xíu
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.7) 1px, transparent 1px)",
          // Khóa cứng kích thước chấm là 3px, không bao giờ bị phóng to hay nhòe đi
          backgroundSize: "3px 3px",
        }}
      />

      {/* 2. LỚP PHỦ ĐEN (Tối dần khi cuộn) */}
      <motion.div 
        className="fixed inset-0 bg-black z-[-1] pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* 3. KHU VỰC NỘI DUNG CHÍNH */}
      {/* pt-[100vh] đẩy phần chữ xuống đúng 1 màn hình, nhường chỗ cho khách xem full Video ban đầu */}
      <div className="relative z-10 flex flex-col pt-[100vh]">
        
        {/* Phần Text (Giữ trong khung max-w-7xl cho đẹp) */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full pb-16">
          <div className="text-white">
            <h2 className="text-5xl font-black tracking-widest uppercase mb-4">
              Ren Animation
            </h2>
            <p className="text-zinc-400 tracking-[0.2em] uppercase text-sm w-full md:w-1/2 leading-relaxed">
              Crafting world-class 2D animation, background art, and composite works for global projects.
            </p>
          </div>
        </div>

        {/* 4. DẢI LOGO TRÀN VIỀN 100% */}
        <div className="w-full bg-transparent overflow-hidden py-4">
           <MarqueeClients />
        </div>
      </div>
    </main>
  );
}