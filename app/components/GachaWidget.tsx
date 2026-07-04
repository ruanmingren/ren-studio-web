"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Gọi bộ máy Gacha vào
import GachaSystem from "./GachaSystem";

export default function GachaWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. NÚT LƠ LỬNG (Góc dưới bên phải, ông có thể chỉnh right-24 nếu nó đè lên BGMPlayer) */}
      <div className="fixed bottom-41 right-6 z-[60]"> 
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center justify-center w-14 h-14 bg-zinc-900 border-2 border-zinc-700 hover:border-yellow-400 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:scale-110"
        >
          <span className="text-2xl drop-shadow-md">❤️</span>
          
          {/* Chữ Tooltip hiện ra khi di chuột vào */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-zinc-800 text-white text-xs font-bold py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-zinc-600">
            GACHA!
          </span>
        </button>
      </div>

      {/* 2. LỚP MÀN ĐEN (POPUP) KHI BẤM MỞ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Phủ đen mờ toàn màn hình, z-index siêu cao để đè lên mọi thứ
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)} // Bấm ra rìa ngoài để đóng
          >
            {/* Khung chứa bộ Gacha */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()} // Chặn click xuyên qua làm đóng popup
              className="relative w-full max-w-3xl"
            >
              {/* Nút X màu đỏ để tắt */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-4 -right-4 z-50 w-10 h-10 bg-zinc-800 hover:bg-red-600 text-white rounded-full font-black text-lg border-2 border-zinc-700 hover:border-red-500 transition-all flex items-center justify-center shadow-lg"
              >
                ✕
              </button>
              
              {/* Nhúng toàn bộ hệ thống ông đã test vào đây */}
              <div className="max-h-[90vh] overflow-y-auto custom-scrollbar ">
                 <GachaSystem />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}