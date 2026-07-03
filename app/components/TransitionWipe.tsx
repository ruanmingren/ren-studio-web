"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TransitionWipe() {
  const pathname = usePathname();

  return (
    <div key={pathname} className="fixed inset-0 z-[9999] pointer-events-none">
      
      {/* LỚP 1: Xanh dương */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        // Nhét thẳng mảng số vào ease như vầy là TypeScript hết bắt bẻ
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full bg-[#2563eb] z-50" 
      />

      {/* LỚP 2: Màu đen */}
      <motion.div
        initial={{ height: "100vh" }}
        animate={{ height: "0vh" }}
        // Ở đây cũng nhét thẳng vào luôn
        transition={{ duration: 0.8, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full bg-black z-40"
      />
      
    </div>
  );
}