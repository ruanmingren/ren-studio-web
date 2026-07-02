"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Định nghĩa 3 trạng thái của chuột
type CursorState = "view" | "link" | "default";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");

  useEffect(() => {
    // 1. Cập nhật vị trí chuột
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // 2. Mắt thần tự động phân loại
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Nếu lướt vào ảnh dự án (đã gắn data-cursor="view")
      if (target.closest('[data-cursor="view"]')) {
        setCursorState("view");
      } 
      // TỰ ĐỘNG: Nếu lướt vào bất kỳ đường link, nút bấm nào trên web (Header, Footer, v.v.)
      else if (target.closest('a') || target.closest('button')) {
        setCursorState("link");
      } 
      // Trạng thái bình thường
      else {
        setCursorState("default");
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // 3. Tính toán thông số giao diện dựa trên trạng thái
  let size = 16;       // Kích thước mặc định
  let xOffset = 8;     // Tâm mặc định
  let yOffset = 8;
  let bgColor = "#ffffff"; 
  let blendMode: "difference" | "normal" = "difference";
  let opacity = 1;

  if (cursorState === "view") {
    // Trạng thái lướt vào Ảnh Dự Án
    size = 80;
    xOffset = 40;
    yOffset = 40;
    bgColor = "#2a44da"; // Màu xanh lá ngọc
    blendMode = "normal";
    opacity = 0.95;
  } else if (cursorState === "link") {
    // Trạng thái lướt vào Link Menu (Header, Footer giống video của ông)
    size = 48; // Phình to vừa phải che chữ
    xOffset = 24;
    yOffset = 24;
    bgColor = "#2460e2";
    blendMode = "normal";
    opacity = 0.4; // TrONG SUỐT 40% ĐỂ NHÌN THẤY CHỮ XUYÊN QUA
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
      style={{ mixBlendMode: blendMode }}
      animate={{
        x: mousePosition.x - xOffset,
        y: mousePosition.y - yOffset,
        width: size,
        height: size,
        backgroundColor: bgColor,
        opacity: opacity,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0,
      }}
    >
      {/* Chỉ hiện chữ VIEW khi ở trạng thái "view" */}
      <AnimatePresence>
        {cursorState === "view" && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-white text-xs font-black tracking-widest uppercase"
          >
            VIEW
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}