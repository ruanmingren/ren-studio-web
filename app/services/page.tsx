"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServicesPage() {
  // 1. TẠO STATE THEO DÕI ROW ĐANG ĐƯỢC HOVER (Mặc định là null)
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  // 2. THÊM THUỘC TÍNH 'image' VÀO DATA DỊCH VỤ
  const services = [
    { 
      id: "01", 
      name: "ANIME MUSIC VIDEO (MV)", 
      desc: "Sản xuất từ A-Z trọn gói quy trình. Đặc biệt tối ưu và cháy hết tầm cho các dự án MV ca nhạc của Vtuber.",
      image: "/gawr_gura.png" // 👈 ÔNG THAY LINK HÌNH MV VÀO ĐÂY
    },
    { 
      id: "02", 
      name: "ORIGINAL NET ANIMATION (ONA)", 
      desc: "Thầu các dự án phim ngắn, từ First Look vài phút nhá hàng cho đến ONA thời lượng trung bình và dài hạn.",
      image: "/71111.png" // 👈 ÔNG THAY LINK HÌNH ONA VÀO ĐÂY
    },
    { 
      id: "03", 
      name: "BACKGROUND ART", 
      desc: "Thế mạnh cốt lõi. Cung cấp bối cảnh (Background) chất lượng cao, chi tiết đỉnh cao cho các Anime Studio khác hoặc dự án Game.",
      image: "/bg.png" 
    },
    { 
      id: "04", 
      name: "CONCEPT ART", 
      desc: "Thiết kế ý tưởng bối cảnh, nhân vật và thế giới quan từ những nét phác thảo sơ khởi nhất.",
      image: "/concept.png" 
    },
    { 
      id: "05", 
      name: "COMPOSITE & VFX", 
      desc: "Phép thuật hậu kỳ. Xử lý ánh sáng, cháy nổ, filter và fix lỗi mượt mà bằng After Effects.",
      image: "/composite.gif" 
    },
    { 
      id: "06", 
      name: "GAME ASSETS", 
      desc: "Chuyên vẽ Sprite nhân vật, CG Event, và Background đặc thù cho mảng Visual Novel cốt truyện.",
      image: "/bg2.png" 
    },
    { 
      id: "07", 
      name: "ILLUSTRATION", 
      desc: "Minh họa kỹ thuật số (Digital Illustration) ấn tượng cho Light Novel, bìa sách, và Key Visual dự án.",
      image: "/illus.jpg" 
    },
    { 
      id: "08", 
      name: "MERCHANDISE", 
      desc: "Thiết kế các sản phẩm thương mại cho fandom: Standee, móc khóa, áo thun, poster...",
      image: "/merchain.png" 
    },
    { 
      id: "09", 
      name: "TVC QUẢNG CÁO", 
      desc: "Sản xuất video quảng cáo truyền hình mang phong cách Anime cuốn hút người xem.",
      image: "/ironmouse_v.png" 
    },
    { 
      id: "10", 
      name: "VISUAL LED", 
      desc: "Đồ họa hiển thị trên màn hình LED cho các sự kiện, concert, sân khấu hoành tráng.",
      image: "/led.png" 
    },
    { 
      id: "11", 
      name: "SOCIAL ADS", 
      desc: "Sản xuất video ngắn, hình ảnh động tối ưu hóa cho các chiến dịch quảng cáo mạng xã hội.",
      image: "/visual-2.png" 
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* ========================================== */}
      {/* LỚP HÌNH NỀN HOVER (Z-INDEX 0) CỰC ẢO DIỆU */}
      {/* ========================================== */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <AnimatePresence>
          {hoveredService && (
            <motion.img
              key={hoveredService}
              src={services.find(s => s.id === hoveredService)?.image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.3, scale: 1 }} // opacity: 0.3 giúp hình nền mờ mờ, không lấn át chữ
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </AnimatePresence>
        
        {/* Lớp lưới Halftone đè lên trên hình để giữ chuẩn Brutalism */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: "radial-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      {/* ========================================== */}
      {/* NỘI DUNG CHÍNH (PHẢI CÓ Z-10 ĐỂ NỔI LÊN TRÊN HÌNH NỀN) */}
      {/* ========================================== */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* 1. DẢI BĂNG CẢNH BÁO */}
        <div className="w-full bg-yellow-400 text-black border-b-4 border-black py-2 overflow-hidden flex whitespace-nowrap sticky top-0">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="font-black uppercase tracking-widest text-xs flex gap-8"
          >
            {Array(6).fill("// OPEN FOR WORK // REN ANIMATION STUDIO // CONTACT US ").map((text, i) => (
              <span key={i}>{text}</span>
            ))}
          </motion.div>
        </div>

        {/* 2. HERO HEADER */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-12">
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-none mb-6">
            SERVICES<br/>DIRECTORY
          </h1>
          <p className="text-gray-300 font-bold tracking-widest text-sm md:text-base uppercase max-w-2xl border-l-4 border-yellow-400 pl-4 bg-black/40 p-2 rounded backdrop-blur-sm">
            Từ những nét phác thảo concept đầu tiên cho đến khung hình composite cuối cùng. Dưới đây là những gì chúng tôi có thể làm để biến ý tưởng của bạn thành hiện thực.
          </p>
        </div>

        {/* 3. DANH SÁCH DỊCH VỤ (BẮT SỰ KIỆN HOVER TẠI ĐÂY) */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pb-32">
          <div className="w-full border-t-4 border-white flex flex-col">
            {services.map((svc) => (
              <div 
                key={svc.id}
                onMouseEnter={() => setHoveredService(svc.id)} // Bắt đầu rê chuột vào -> Hiện hình
                onMouseLeave={() => setHoveredService(null)}   // Rút chuột ra -> Tắt hình
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-gray-800 hover:border-white transition-colors cursor-crosshair relative"
              >
                {/* Lớp nền đen mờ mờ lót dưới mỗi dòng để chữ luôn đọc được dù ảnh sáng hay tối */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10" />

                {/* Cột Tên & Số thứ tự */}
                <div className="flex items-start gap-4 md:gap-8 w-full md:w-1/2 pr-4 mb-4 md:mb-0">
                  <span className="font-mono text-gray-500 font-black text-xl md:text-2xl pt-1 group-hover:text-yellow-400 transition-colors">
                    {svc.id}
                  </span>
                  <h3 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter group-hover:pl-4 transition-all duration-300 drop-shadow-lg">
                    {svc.name}
                  </h3>
                </div>

                {/* Cột Mô tả & Nút chốt deal */}
                <div className="flex flex-col items-start md:items-end w-full md:w-1/2 pl-[3.25rem] md:pl-0">
                  <p className="text-gray-400 text-xs md:text-sm font-bold tracking-widest uppercase md:text-right leading-relaxed mb-4 md:max-w-md group-hover:text-white transition-colors drop-shadow-md">
                    {svc.desc}
                  </p>
                  <a 
                    href="mailto:contact@renanimation.com?subject=Yêu cầu báo giá dịch vụ - Ren Animation Studio" 
                    className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-white bg-black hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <span className="relative z-10 font-black text-lg md:text-xl uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                      YÊU CẦU BÁO GIÁ
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER / CHỐT SALE CUỐI TRANG */}
        <div className="w-full border-t-2 border-gray-800 bg-[#0a0a0a] py-20 mt-auto">
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-2">SẴN SÀNG KHỞI ĐỘNG?</h2>
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Hãy cho chúng tôi biết về dự án của bạn.</p>
            </div>
            <a 
              href="mailto:contact@renanimation.com" 
              className="px-10 py-5 bg-white text-black font-black text-xl md:text-2xl uppercase tracking-[0.2em] hover:bg-yellow-400 transition-colors"
            >
              LIÊN HỆ NGAY
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}