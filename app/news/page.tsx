import Image from "next/image";
import Link from "next/link"; // BẮT BUỘC PHẢI CÓ DÒNG NÀY ĐỂ CHUYỂN TRANG

// ĐÂY LÀ KHO DỮ LIỆU CỦA ÔNG
const newsList = [
  {
    id: 1,
    date: "05 2026",
    title: "Sơn Hà Xích Quỷ Visual Novel Development",
    excerpt: "Active production continues on our history-themed Visual Novel. We are pushing the boundaries of narrative and art integration to deliver a unique experience.",
    image: "/sonha.png",
    slug: "sonha", // Đã có sẵn
  },
  {
    id: 2,
    date: "06 2026",
    title: "Hobby Horizon 2026",
    excerpt: "Ren Animation Studio proudly participated in the Hobby Horizon 2026 event, showcasing our latest projects and engaging with the global animation community.",
    image: "/71111.png",
    slug: "festival", // TUI BÙ THÊM SLUG VÀO ĐÂY
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 md:px-12 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-16 border-b border-zinc-800 pb-6">
          News & Updates
        </h1>

        <div className="flex flex-col gap-12">
          {newsList.map((news) => (
            // Thay <article> thành <Link> và truyền href vào
            <Link 
              key={news.id} 
              href={`/news/${news.slug}`} 
              className="flex flex-col md:flex-row gap-6 md:gap-10 items-center group cursor-pointer"
            >
              <div className="w-full md:w-2/5 aspect-video bg-zinc-900 relative overflow-hidden border border-zinc-800 group-hover:border-zinc-500 transition-colors">
                <Image 
                  src={news.image} 
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

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
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}