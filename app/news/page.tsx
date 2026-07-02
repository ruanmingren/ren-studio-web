import Image from "next/image";

// ĐÂY LÀ KHO DỮ LIỆU CỦA ÔNG
// Muốn thêm bài mới, ông chỉ cần copy 1 khối { ... } và sửa chữ/hình là xong!
const newsList = [
  {
    id: 1,
    date: "May 2026",
    title: "Sơn Hà Xích Quỷ Visual Novel Development",
    excerpt: "Active production continues on our history-themed Visual Novel. We are pushing the boundaries of narrative and art integration to deliver a unique experience.",
    image: "/sonha.png" // Lấy tên file hình có sẵn trong thư mục public
  },
  {
    id: 2,
    date: "June 2026",
    title: "Shanghai Festival & Studio Expansion",
    excerpt: "Ren Animation Studio extends its international presence with an invitation to the upcoming industry festival in Shanghai, continuing our momentum from previous exhibitions.",
    image: "/71111.png" 
  },
  {
    id: 3,
    date: "January 30, 2026",
    title: "Project 7.1.111 (TIM) First Look Premiere",
    excerpt: "We proudly unveiled the 4-minute First Look PV of our original anime project, marking a significant milestone in our studio's creative journey.",
    image: "/lona.png" // Nếu chưa có hình lona.png, ông đổi thành file khác có trong public nhé
  }
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-16 border-b border-zinc-800 pb-6">
          News & Updates
        </h1>

        {/* Khu vực tự động dàn layout dựa trên kho dữ liệu */}
        <div className="flex flex-col gap-12">
          {newsList.map((news) => (
            <article 
              key={news.id} 
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-center group cursor-pointer"
            >
              {/* Khung chứa Hình Nè */}
              <div className="w-full md:w-2/5 aspect-video bg-zinc-900 relative overflow-hidden border border-zinc-800 group-hover:border-zinc-500 transition-colors">
                <Image 
                  src={news.image} 
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Khung chứa Chữ */}
              <div className="w-full md:w-3/5 flex flex-col justify-center">
                <p className="text-xs text-zinc-500 tracking-widest mb-2 uppercase">
                  {news.date}
                </p>
                <h2 className="text-xl md:text-2xl font-bold tracking-widest mb-4 uppercase group-hover:text-zinc-300 transition-colors">
                  {news.title}
                </h2>
                <p className="text-zinc-400 leading-relaxed text-sm md:text-base line-clamp-3">
                  {news.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
