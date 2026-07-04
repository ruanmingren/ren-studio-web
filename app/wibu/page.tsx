"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function WibuPage() {
  // ==========================================
  // 1. LOGIC NÚT BẤM WIBU PORTAL (GIỮ NGUYÊN BẢN CŨ CỦA ÔNG)
  // ==========================================
  const router = useRouter();
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(false);
  const isWibuMode = pathname.startsWith("/wibu");

  const toggleUniverse = () => {
    setIsAnimating(true);
    setTimeout(() => {
      if (isWibuMode) {
        router.push("/"); 
      } else {
        router.push("/wibu"); 
      }
      setTimeout(() => setIsAnimating(false), 500);
    }, 800);
  };

  // ==========================================
  // 2. DATA CỦA GIAO DIỆN BRUTALISM
  // ==========================================
  const modules = [
    { id: "01", name: "ANIME CHARACTER", desc: "Tư duy thiết kế nhân vật chuẩn Nhật" },
    { id: "02", name: "ANIME BACKGROUND", desc: "Phác họa thế giới kỳ ảo" },
    { id: "03", name: "ANIME ANIMATION", desc: "Thổi hồn vào từng Frame hình" },
    { id: "04", name: "STORYBOARD", desc: "Đạo diễn nhịp phim trên giấy" },
    { id: "05", name: "MANGAKA", desc: "Kể chuyện qua khung truyện tranh" },
    { id: "06", name: "ANIME COMPOSITE", desc: "Hậu kỳ sản xuất anime" },
  ];

  return (
    <div 
      className="w-full min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden relative"
      style={{
        backgroundImage: "radial-gradient(rgba(156, 163, 175, 0.15) 1px, transparent 1px)",
        backgroundSize: "8px 8px",
      }}
    >
      {/* ========================================== */}
      {/* HIỆU ỨNG CHỚP TRẮNG & NÚT BẤM TRÔI NỔI */}
      {/* ========================================== */}
      <div 
        className={`fixed inset-0 bg-white z-[9999] transition-opacity duration-700 pointer-events-none ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <button
        onClick={toggleUniverse}
        className={`group fixed bottom-8 right-6 z-[50] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border ${
          isWibuMode 
            ? "bg-black border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]" 
            : "bg-zinc-900 hover:border-blue-500 border-zinc-700 shadow-[0_0_20px_rgba(0,0,0,0.3)]"
        }`}
      >
        <span className="relative flex h-4 w-4">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isWibuMode ? "bg-white" : "bg-blue-500"}`}></span>
          <span className={`relative inline-flex rounded-full h-4 w-4 ${isWibuMode ? "bg-white" : "bg-blue-500"}`}></span>
        </span>
        <span className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 rounded-full font-bold tracking-widest text-xs uppercase whitespace-nowrap shadow-lg flex items-center gap-2 border transition-all duration-300 ${
          isWibuMode
            ? "bg-black text-white border-zinc-700"
            : "bg-white text-black border-zinc-200"
        }`}>
          <span className={`block h-2 w-2 rounded-full ${isWibuMode ? "bg-white" : "bg-black"}`}></span>
          {isWibuMode ? "Back to Studio" : "Class of Wibu"}
        </span>
      </button>

      {/* ========================================== */}
      {/* KHU VỰC GIAO DIỆN BRUTALISM (PHÒNG TRIỂN LÃM) */}
      {/* ========================================== */}
      
      {/* 1. MARQUEE BANNER CHẠY CHỮ */}
      <div className="w-full bg-yellow-400 text-black border-y-4 border-black py-3 overflow-hidden flex whitespace-nowrap z-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="font-black uppercase tracking-widest text-xs md:text-sm flex gap-8"
        >
          {Array(4).fill("// LỚP HỌC ANIMATION THỰC CHIẾN // HỌC LẠI MIỄN PHÍ TRỌN ĐỜI // KHAI GIẢNG HÀNG THÁNG ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      {/* 2. HERO SECTION - POSTER CHÍNH */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col items-center border-b-2 border-gray-800">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-center tracking-tighter leading-none mb-8 md:mb-12">
          CLASS OF<br className="md:hidden" /> WIBU
        </h1>
        
        <div className="w-full aspect-video max-w-5xl border-4 border-gray-600 bg-black flex flex-col items-center justify-center relative group overflow-hidden shadow-[8px_8px_0px_rgba(255,255,255,0.1)] hover:border-white transition-colors">
          <span className="font-mono text-gray-500 font-bold uppercase tracking-[0.2em] text-xs md:text-sm z-10">
            <img src="/hinh.jpg" alt="Cover" className="absolute inset-0 w-full h-full object-cover opacity-80" />
          </span>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/tv-noise.png')] opacity-10 mix-blend-overlay"></div>
        </div>
      </div>

      {/* 3. LỘ TRÌNH & KHUYẾN MÃI */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 border-b-2 border-gray-800">
        <div className="lg:col-span-7 flex flex-col">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">ROADMAP<br/>3 NĂM</h2>
            <span className="text-gray-500 font-bold tracking-widest text-xs hidden md:block">TỪ ZERO ĐẾN HERO</span>
          </div>
          <div className="w-full aspect-square md:aspect-[4/3] border-2 border-gray-600 bg-[#111] p-4 flex items-center justify-center text-center relative overflow-hidden group hover:border-white transition-colors">
            <span className="font-mono text-gray-600 text-xs tracking-widest z-10">[ ĐANG TRONG GIAI ĐOẠN CẬP NHẬT HÌNH ẢNH]</span>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-yellow-400">ƯU ĐÃI<br/>KHỦNG</h2>
          </div>
          <div className="w-full h-full min-h-[300px] border-4 border-yellow-400 border-dashed bg-black p-4 flex items-center justify-center text-center relative overflow-hidden group hover:border-solid transition-all">
            <div className="absolute top-4 left-4 bg-yellow-400 text-black font-black text-xs px-2 py-1 uppercase tracking-widest z-20">GIFT</div>
            <span className="font-mono text-gray-500 text-xs tracking-widest z-10">[ ĐANG TRONG GIAI ĐOẠN CẬP NHẬT HÌNH ẢNH]</span>
          </div>
        </div>
      </div>

      {/* 4. KHOA MÔN HỌC */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16 border-b-2 border-gray-800">
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-12 text-center">CÁC BỘ MÔN ĐÀO TẠO</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {modules.map((mod) => (
            <div key={mod.id} className="flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/5] border-2 border-gray-600 bg-[#111] flex items-center justify-center relative overflow-hidden mb-4 group-hover:border-white transition-colors">
                 <span className="font-black text-gray-800 text-7xl md:text-9xl absolute -bottom-4 -right-4 opacity-30 group-hover:text-gray-600 transition-colors">
                   {mod.id}
                 </span>
                 <span className="font-mono text-gray-500 text-[10px] tracking-widest uppercase z-10 px-4 text-center">
                   [ ĐANG TRONG GIAI ĐOẠN CẬP NHẬT HÌNH ẢNH {mod.name} ]
                 </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 mb-1">
                  <span className="bg-white text-black font-black text-[10px] px-2 py-0.5">NO.{mod.id}</span>
                  <h3 className="font-black text-xl md:text-2xl tracking-tight uppercase group-hover:text-yellow-400 transition-colors">{mod.name}</h3>
                </div>
                <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide uppercase">{mod.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. TÀI LIỆU LƯU TRỮ */}
      <div className="w-full bg-[#111] border-y-2 border-gray-800 py-16 md:py-24">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 aspect-video bg-black border-[12px] border-zinc-800 rounded-3xl p-2 relative shadow-2xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 border-2 border-gray-700 rounded-xl m-2 opacity-50"></div>
             
             <div className="text-center z-10">
               <span className="block text-red-500 font-black text-2xl mb-2 animate-pulse">● LIVE REC</span>
               <span className="font-mono text-gray-500 text-xs tracking-widest">[ ĐANG TRONG GIAI ĐOẠN CẬP NHẬT ]</span>
             </div>
             
             <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 opacity-30"></div>
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <span className="text-yellow-400 font-bold text-sm tracking-widest uppercase mb-2 border border-yellow-400 px-3 py-1">Học Thử Miễn Phí</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-6">LƯU TRỮ<br/>BUỔI ĐẦU</h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Học animation không phải màu hồng. Trải nghiệm ngay các buổi học đầu tiên được ghi hình trực tiếp từ lớp học để biết mình có chịu nổi áp lực trước khi xuống tiền.
            </p>
            <a 
              href="https://www.youtube.com/@RenAnimationStudio/streams" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-gray-500 text-white hover:bg-white hover:text-black font-black uppercase tracking-widest transition-colors text-sm"
            >
              XEM TOÀN BỘ BĂNG LƯU TRỮ →
            </a>
          </div>
        </div>
      </div>

      {/* 6. CALL TO ACTION */}
      <div className="w-full max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">BẠN ĐÃ SẴN SÀNG<br/>GÃY LƯNG CHƯA?</h2>
        <a 
          href="https://www.facebook.com/animebgclass" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center w-full md:w-auto px-12 py-6 border-4 border-white bg-black hover:bg-white transition-colors duration-300 overflow-hidden cursor-pointer"
        >
          <span className="relative z-10 font-black text-2xl md:text-3xl uppercase tracking-[0.2em] group-hover:text-black transition-colors duration-300">
            ĐĂNG KÝ NGAY
          </span>
        </a>
      </div>
    </div>
  );
}