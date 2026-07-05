"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Sửa lại thành vầy

export default function PodcastPage() {
  // 1. DATA 10 TẬP PODCAST (Ông thay title và chèn ID Youtube của từng tập vào đây)
  // 1. DATA 10 TẬP PODCAST (Đã phân loại 2 mùa SS1 & SS2)
  const episodes = [
    // ================= MÙA 2 =================
    {
      id: "S2.04",
      title: "SS2 TẬP 04: DEEDEE ANIMATION STUDIO",
      duration: "TBC",
      date: "Season 2",
      desc: "Khách mời đặc biệt: DeeDee Animation Studio. Câu chuyện về quy trình, tầm nhìn và những trải nghiệm thực chiến.",
      youtubeId: "n8IJawNvALA", // VD: dQw4w9WgXcQ
    },
    {
      id: "S2.03",
      title: "SS2 TẬP 03: SINO",
      duration: "TBC",
      date: "Season 2",
      desc: "Trò chuyện cùng SiNo về hành trình làm nghề và bí kíp sống sót trong thế giới Digital Art.",
      youtubeId: "vRutr4nCV-g",
    },
    {
      id: "S2.02",
      title: "SS2 TẬP 02: ARTSOUP",
      duration: "TBC",
      date: "Season 2",
      desc: "Bàn tròn cùng Artsoup. Nhìn lại những dự án ấn tượng và cách vận hành đội ngũ.",
      youtubeId: "PMrqaUXWUgs",
    },
    {
      id: "S2.01",
      title: "SS2 TẬP 01: HOẠT HÌNH VIỆT NAM",
      duration: "TBC",
      date: "Season 2",
      desc: "Mở bát mùa 2 với chủ đề cực nóng: Bức tranh toàn cảnh ngành Hoạt hình Việt Nam.",
      youtubeId: "mSC5eONrMCc",
    },
    
    // ================= MÙA 1 =================
    {
      id: "S1.06",
      title: "SS1 TẬP 06: NGÀNH GIA CÔNG",
      duration: "TBC",
      date: "Season 1",
      desc: "Artist/Art Director và Art Teacher Thiền Quang, họa sĩ kì cựu với hơn 20 năm làm nghề hiện tại đang là Giảng viên và Founder của Q'Art Lab, Artist - Đồng nghiệp ẩn danh của ông Ren - Hyu, Artist - Học viên ẩn danh của ông Ren - Tex",
      youtubeId: "3ap5f3YXwuU",
    },
    {
      id: "S1.05",
      title: "SS1 TẬP 05: MÀU SẮC TRUYỀN THỐNG",
      duration: "TBC",
      date: "Season 1",
      desc: "Art Teacher Bùi Anh Khoa aka Alex Sprouse, người truyền tải những màu sắc và là giảng viên tại Zest Art ",
      youtubeId: "u_G1XtALBes",
    },
    {
      id: "S1.04",
      title: "SS1 TẬP 04: TUYỂN DỤNG HỌA SĨ",
      duration: "TBC",
      date: "Season 1",
      desc: "Làm sao để lọt vào mắt xanh của Art Director? Tất tần tật về Portfolio và phỏng vấn.",
      youtubeId: "PF4Rq4dlAgU",
    },
    {
      id: "S1.03",
      title: "SS1 TẬP 03: COMMISSION",
      duration: "TBC",
      date: "Season 1",
      desc: "Artist Miaosu aka Ngô Đức, Artist Zeklewa aka Nguyễn Đình Bách",
      youtubeId: "87628E9qkJg",
    },
    {
      id: "S1.02",
      title: "SS1 TẬP 02: ILLUSTRATION",
      duration: "TBC",
      date: "Season 1",
      desc: "Khai thác ngóc ngách của nghề vẽ minh họa (Illustration) và hướng đi cho các artist trẻ.",
      youtubeId: "oAjpEhcx9pw",
    },
    {
      id: "S1.01",
      title: "SS1 TẬP 01: ANIME ANIMATOR",
      duration: "TBC",
      date: "Season 1",
      desc: "Khởi động series: Hiểu đúng về nghề Anime Animator và nhịp độ làm việc công nghiệp.",
      youtubeId: "Dgm1GmVg9fI",
    }
  ];

  // State quản lý tập đang phát (Mặc định mở màn sẽ phát tập mới nhất - Tập 10)
  const [activeEp, setActiveEp] = useState(episodes[0]);

  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      
      {/* 1. STICKY MARQUEE BANNER CHẠY CHỮ CHẤT ĐÊM */}
      <div className="w-full bg-red-600 text-white border-b-2 border-black py-2 overflow-hidden flex whitespace-nowrap z-20 sticky top-0 font-mono">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 12, repeat: Infinity }}
          className="font-black uppercase tracking-widest text-xs flex gap-8"
        >
          {Array(6).fill("// TALK TO NIGHT // THE ART PODCAST // ON AIR // ON AIR ").map((text, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" /> {text}
            </span>
          ))}
        </motion.div>
      </div>

      {/* 2. CHÍNH: KHÔNG GIAN PODCAST (GRID CHIA 2 CỘT TRÊN PC) */}
      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        
        {/* TIÊU ĐỀ TRANG */}
        <div className="lg:col-span-12 mb-4">
          <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase block mb-2"> RADIO SHOW ARCHIVE</span>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            TALK TO NIGHT THE ART PODCAST
          </h1>
        </div>

        {/* CỘT TRÁI: MÀN HÌNH TRÌNH PHÁT VIDEO CHÍNH (Chiếm 7 cột) */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="w-full aspect-video bg-zinc-950 border-2 border-zinc-800 relative rounded-lg overflow-hidden shadow-[0_0_30px_rgba(220,38,38,0.1)]">
            
            {/* Embed Iframe Youtube tự động nhảy theo State activeEp */}
            <iframe
              key={activeEp.id}
              src={`https://www.youtube.com/embed/${activeEp.youtubeId}?autoplay=0&rel=0`}
              title={activeEp.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0 z-10"
            />
            
            {/* Lớp quét CRT hoài cổ */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] z-20 opacity-10" />
          </div>

          {/* Chi tiết về tập đang phát */}
          <div className="mt-6 border-l-4 border-red-600 pl-4 bg-zinc-900/30 p-4 border border-zinc-900 rounded-r-lg">
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mb-2">
              <span>EPISODE {activeEp.id}</span>
              <span>•</span>
              <span>DUR: {activeEp.duration}</span>
              <span>•</span>
              <span>RELEASED: {activeEp.date}</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 text-white">
              {activeEp.title}
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed font-medium">
              {activeEp.desc}
            </p>
          </div>
        </div>

        {/* CỘT PHẢI: DANH SÁCH 10 TẬP (Chiếm 5 cột) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="border-2 border-zinc-800 rounded-lg overflow-hidden bg-zinc-950 flex flex-col max-h-[600px] lg:max-h-[660px]">
            
            {/* Header nhỏ của danh sách */}
            <div className="bg-zinc-900 px-4 py-3 border-b-2 border-zinc-800 flex justify-between items-center font-mono text-xs font-bold tracking-wider text-zinc-400">
              <span>PLAYLIST ARCHIVE</span>
              <span className="text-red-500">{episodes.length} TẬP</span>
            </div>

            {/* Vùng cuộn danh sách (Scrollbar dọc) */}
            <div className="overflow-y-auto flex-1 divide-y divide-zinc-900 scrollbar-thin scrollbar-thumb-zinc-800">
              {episodes.map((ep) => {
                const isActive = activeEp.id === ep.id;
                return (
                  <button
                    key={ep.id}
                    onClick={() => setActiveEp(ep)}
                    className={`w-full text-left p-4 flex items-start gap-4 transition-all duration-300 relative group cursor-pointer ${
                      isActive 
                        ? "bg-zinc-900 border-l-4 border-red-600" 
                        : "hover:bg-zinc-900/50 border-l-4 border-transparent"
                    }`}
                  >
                    {/* Số tập */}
                    <span className={`font-mono font-black text-sm pt-0.5 ${isActive ? "text-red-500" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                      {ep.id}
                    </span>

                    {/* Tiêu đề & Độ dài */}
                    <div className="flex-1 flex flex-col">
                      <h4 className={`text-xs md:text-sm font-black uppercase tracking-tight mb-1 transition-colors ${
                        isActive ? "text-white" : "text-zinc-400 group-hover:text-zinc-200"
                      }`}>
                        {ep.title}
                      </h4>
                      <div className="flex items-center gap-3 font-mono text-[10px] text-zinc-600 group-hover:text-zinc-500">
                        <span>THỜI LƯỢNG: {ep.duration}</span>
                        <span>|</span>
                        <span>THÁNG: {ep.date}</span>
                      </div>
                    </div>

                    {/* Biểu tượng sóng nhạc / Icon đang phát */}
                    {isActive && (
                      <div className="flex items-end gap-0.5 h-3 pt-1">
                        <span className="w-0.5 bg-red-500 animate-[bounce_1s_infinite_0.1s] h-full" />
                        <span className="w-0.5 bg-red-500 animate-[bounce_1s_infinite_0.3s] h-2" />
                        <span className="w-0.5 bg-red-500 animate-[bounce_1s_infinite_0.5s] h-3" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}