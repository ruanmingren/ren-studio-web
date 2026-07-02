import Image from "next/image";

// Tui đã tạo sẵn 10 slot. 
// Ông chỉ cần thay đổi chữ trong ngoặc kép "" và đổi tên file ảnh ở phần src là xong.
const visualsData = [
  { 
    id: 1, 
    title: "Thuận Thiên Kiếm - Sơn Hà Xích Quỷ", 
    role: "Background Art", 
    info: "2026 - Visual Novel Game", 
    src: "/visual-1.png" 
  },
  { 
    id: 2, 
    title: "Bưu Điện Thành Phố Hồ Chí Minh - 7.1.111", 
    role: "Visual Development", 
    info: "2026 - Anime Series | Upcoming", 
    src: "/visual-2.png" 
  },
  { 
    id: 3, 
    title: "KRONUS", 
    role: "???", 
    info: "2026 | MV PROJECT", 
    src: "/visual-3.png" 
  },
  { 
    id: 4, 
    title: "MANGA ADAPTATION PROJECT", 
    role: "???", 
    info: "2026 | ANIME PROJECT", 
    src: "/visual-4.png" 
  },
  { 
    id: 5, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-5.png" 
  },
  { 
    id: 6, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-6.png" 
  },
  { 
    id: 7, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-7.png" 
  },
  { 
    id: 8, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-8.png" 
  },
  { 
    id: 9, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-9.png" 
  },
  { 
    id: 10, 
    title: "???", 
    role: "???", 
    info: "???", 
    src: "/visual-10.png" 
  }
];

export default function VisualsPage() {
  return (
    <main className="min-h-screen bg-black pt-32 pb-32 px-6">
      {/* Tiêu đề trang */}
      <div className="max-w-6xl mx-auto mb-24 border-b border-zinc-800 pb-8">
        <h1 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">
          VISUALS.
        </h1>
        <p className="text-zinc-500 tracking-[0.2em] mt-4 text-sm uppercase font-bold">
          Selected Artworks & Highlights from Ren Animation Studio
        </p>
      </div>

      {/* Danh sách 10 Artwork xen kẽ */}
      <div className="max-w-6xl mx-auto flex flex-col gap-24 md:gap-32">
        {visualsData.map((item, index) => {
          // Tính toán số chẵn/lẻ để đổi bên (Zig-zag)
          const isEven = index % 2 === 0;

          return (
            <div 
              key={item.id} 
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* PHẦN HÌNH ẢNH (Chiếm 60% chiều rộng trên PC) */}
              <div className="w-full md:w-3/5 aspect-video relative bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden group">
                <Image 
                  src={item.src} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>

              {/* PHẦN THÔNG TIN 3 DÒNG (Chiếm 40% chiều rộng trên PC) */}
              <div className="w-full md:w-2/5 flex flex-col justify-center space-y-4">
                {/* Dòng 1: Tên dự án */}
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest leading-tight">
                  {item.title}
                </h2>
                
                {/* Thanh gạch ngang trang trí */}
                <div className="w-12 h-1 bg-white mb-2" />
                
                {/* Dòng 2: Vai trò */}
                <p className="text-zinc-400 text-lg uppercase tracking-wider font-bold">
                  {item.role}
                </p>
                
                {/* Dòng 3: Thông tin phụ (Năm / Phần mềm) */}
                <p className="text-zinc-600 uppercase tracking-[0.2em] text-xs font-bold">
                  {item.info}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}