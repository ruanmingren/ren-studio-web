"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HowWeWorkPage() {
  // Cấu trúc Data Quy trình chuẩn Anime Studio
  const pipelineSteps = [
    {
      id: "01",
      title: "PRE-PRODUCTION",
      tag: "KỊCH BẢN & CONCEPT",
      desc: "Mọi thứ bắt đầu từ con số không. Phác thảo thế giới quan, thiết kế nhân vật (Character Design), và vẽ Storyboard để định hình nhịp độ, góc máy của toàn bộ phim.",
      image: "/concept.png", 
    },
    {
      id: "02",
      title: "STORYBOARD & ROUGH ANIMATION",
      tag: "STORYBOARD CHUYỂN ĐỘNG",
      desc: "Thiết kế Storyboard được chuyển thành Rough Animation (Sakuga) để kiểm tra nhịp độ, góc máy, và cảm xúc của từng cảnh. Đây là bước quan trọng để phát hiện lỗi trước khi đi vào sản xuất chính thức.",
      image: "/sb.gif", 
    },
    {
      id: "03",
      title: "KEY ANIMATION (GENGA)",
      tag: "THỔI HỒN NHÂN VẬT",
      desc: "Các Key Animator bắt đầu vẽ tay từng khung hình chính. Đây là bước quyết định diễn xuất, cảm xúc và uy lực của từng pha hành động.",
      image: "/LO2.gif", 
    },
    {
      id: "04",
      title: "INBETWEEN & PAINT",
      tag: "ĐI NÉT & LÊN MÀU",
      desc: "Đi nét mượt mà các khung hình trung gian (Douga) để tạo ra chuyển động liền mạch, sau đó đổ màu theo bảng màu chuẩn (Color Setting) đã chốt.",
      image: "/paint.png", 
    },
    {
      id: "05",
      title: "BACKGROUND ART",
      tag: "VẼ BỐI CẢNH",
      desc: "Song song với Animation, team BG sẽ vẽ nên những bối cảnh chi tiết cao, tạo ra không gian thế giới quan sống động cho nhân vật tương tác.",
      image: "/bgs.png", 
    },
    {
      id: "06",
      title: "COMPOSITE & VFX",
      tag: "PHÉP THUẬT HẬU KỲ",
      desc: "Ghép nhân vật vào nền, đánh sáng, thêm bóng đổ, filter, và dội bom các hiệu ứng VFX (cháy nổ, phép thuật, khói bụi) bằng After Effects.",
      image: "/composite.gif", 
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col font-sans selection:bg-[#2563eb] selection:text-white overflow-x-hidden">
      
      {/* LỚP LƯỚI NỀN KỸ THUẬT */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 1. DẢI BĂNG MARQUEE CẢNH BÁO */}
      <div className="w-full bg-[#2563eb] text-white border-b-2 border-black py-2 overflow-hidden flex whitespace-nowrap z-20 sticky top-0">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
          className="font-black uppercase tracking-widest text-xs flex gap-8"
        >
          {Array(8).fill("// ANIME PRODUCTION PIPELINE // DO NOT RUSH THE PROCESS ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen pb-32">
        
        {/* 2. HERO HEADER */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase tracking-tighter leading-none mb-6 text-white drop-shadow-lg">
              PRODUCTION<br/>PIPELINE
            </h1>
            <p className="text-zinc-400 font-bold tracking-widest text-sm md:text-base uppercase max-w-2xl border-l-4 border-[#2563eb] pl-4">
              Không có ma thuật nào ở đây cả. Chỉ có mồ hôi, nước mắt và một quy trình sản xuất khắc nghiệt chuẩn Nhật Bản.
            </p>
          </motion.div>
        </div>

        {/* 3. BĂNG CHUYỀN SẢN XUẤT (THE FACTORY LINE) */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col border-t-4 border-zinc-800">
            
            {pipelineSteps.map((step, index) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={step.id} 
                className="group flex flex-col lg:flex-row border-b-2 border-zinc-800 hover:border-white hover:bg-zinc-900/50 transition-all duration-300 relative overflow-hidden"
              >
                
                {/* Số thứ tự khổng lồ (Nền chìm) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[20rem] font-black text-zinc-800/30 group-hover:text-[#2563eb]/10 transition-colors pointer-events-none select-none z-0">
                  {step.id}
                </div>

                {/* Cột 1: Thông tin (Trái) */}
                <div className="w-full lg:w-1/3 p-6 md:p-10 flex flex-col justify-center relative z-10 border-b-2 lg:border-b-0 lg:border-r-2 border-zinc-800 group-hover:border-white transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xl md:text-2xl font-black text-[#2563eb]">STEP {step.id}</span>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-1 bg-white text-black">
                      {step.tag}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 text-white">
                    {step.title}
                  </h2>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Cột 2: Khung hình minh họa (Phải) */}
                <div className="w-full lg:w-2/3 p-4 md:p-8 relative z-10 flex items-center justify-center">
                  <div className="w-full aspect-video bg-black border-2 border-zinc-700 relative overflow-hidden group-hover:border-[#2563eb] transition-colors shadow-2xl">
                    
                                    
                    {/* Hình ảnh/GIF sẽ đè lên trên */}
                    <div className="absolute inset-0 z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Viền quét Scanline như màn hình CRT */}
                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 opacity-30"></div>
                  </div>
                </div>

              </motion.div>
            ))}

          </div>
        </div>

        {/* 4. FOOTER CALL TO ACTION */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-24 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-[#2563eb] text-[#2563eb] mb-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8">ĐÃ HIỂU QUY TRÌNH?</h2>
          <div className="flex gap-4 flex-col md:flex-row">
            <a 
              href="/services" 
              className="px-8 py-4 bg-white text-black font-black uppercase tracking-widest hover:bg-[#2563eb] hover:text-white transition-colors"
            >
              XEM BẢNG GIÁ DỊCH VỤ
            </a>
            <a 
              href="/works" 
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              XEM SẢN PHẨM HOÀN THIỆN
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}