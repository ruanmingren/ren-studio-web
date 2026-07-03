"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionWipe() {
  // Thằng này sẽ theo dõi xem ông đang ở trang nào
  const pathname = usePathname();

  // Dùng easing curve đặc biệt này để tốc độ vuốt chậm ở đầu, lướt nhanh ở giữa và phanh từ từ ở cuối (cực kỳ điện ảnh)
  const cinematicEase = [0.76, 0, 0.24, 1];

  return (
    // Cái key={pathname} là phép thuật: Cứ mỗi lần đường dẫn thay đổi (chuyển trang), nó sẽ ép cái rèm này chạy lại từ đầu
    <div key={pathname} className="fixed inset-0 z-[9999] pointer-events-none">
      
      {/* LỚP 1: MÀU XANH LÁ (Ông có thể đổi mã màu hex này thành màu đặc trưng của Ren Animation Studio nếu thích) */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 0.8, ease: cinematicEase }} 
        className="absolute bottom-0 left-0 w-full bg-[#2563eb] z-50" // Xanh lá style anime
      />

      {/* LỚP 2: MÀU ĐEN (Chạy bám theo sau lớp xanh lá một nhịp) */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        transition={{ duration: 0.8, delay: 0.15, ease: cinematicEase }}
        className="absolute bottom-0 left-0 w-full bg-black z-40"
      />
      
    </div>
  );
}