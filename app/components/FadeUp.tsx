"use client"; // Chuyển động bắt buộc phải chạy ở Client
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeUp({ 
  children, 
  delay = 0 
}: { 
  children: ReactNode; 
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }} // Lúc chưa cuộn tới: Tàng hình + tuột xuống 40px
      whileInView={{ opacity: 1, y: 0 }} // Lúc cuộn tới nơi: Hiện ra + trượt lên đúng vị trí
      viewport={{ once: true, margin: "-50px" }} // Chỉ chạy 1 lần để khỏi nhức mắt
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }} // Tốc độ mượt mà
    >
      {children}
    </motion.div>
  );
}