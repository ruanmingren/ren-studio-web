"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "7.1.111",
    subtitle: "FIRST LOOK PV | 4 MINS",
    type: "video",
    src: "/showreel.mp4",
  },
  {
    id: 2,
    title: "SƠN HÀ XÍCH QUỶ",
    subtitle: "VISUAL NOVEL | DEVELOPMENT",
    type: "video",
    src: "/showreel2.mp4", // Đã ráp "hàng nóng" vào đây!
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  
  // Dùng để nắm thóp tất cả các thẻ video có trên màn hình
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Hệ thống Giám sát Video: Xử lý vụ "kì kì" của ông
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === current) {
          // Nếu đúng là slide đang hiện -> Bắt đầu lại từ giây 0 và ép chiếu
          video.currentTime = 0; 
          video.play().catch(() => console.log("Trình duyệt chặn autoplay"));
        } else {
          // Nếu là slide đang bị ẩn -> Cấm chạy ngầm
          video.pause(); 
        }
      }
    });
  }, [current]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden group">
      {/* Vòng lặp hiển thị các slide */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {slide.type === "video" && (
            <video
              ref={(el) => {
                videoRefs.current[index] = el;
              }}
              src={slide.src}
              muted
              playsInline
              onEnded={nextSlide} /* Hết clip tự động nhảy qua clip khác */
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          )}

          {/* Lớp phủ mờ (Overlay) làm nổi bật chữ */}
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end pb-32 px-6 md:px-12 pointer-events-none">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg text-zinc-300 tracking-[0.2em] uppercase drop-shadow-md">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Bộ điều khiển (Controls) */}
      <div className="absolute bottom-12 left-6 md:left-12 z-20 flex items-center gap-8">
        <div className="text-white text-lg tracking-widest font-light">
          <span className="font-bold text-2xl">{current + 1}</span>
          <span className="mx-2 text-zinc-500">/</span>
          <span className="text-zinc-500">{slides.length}</span>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            ←
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-zinc-600 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}