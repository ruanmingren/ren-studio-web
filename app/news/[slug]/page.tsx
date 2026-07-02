import { notFound } from "next/navigation";
import Link from "next/link";

// Kho dữ liệu chi tiết của 3 bài viết
const newsContent: Record<string, { title: string; content: string }> = {
  "sonha": { 
    title: "Sơn Hà Xích Quỷ Visual Novel ", 
    content: "Định dạng: Tiểu thuyết trực tuyến - Visual Novel Game Tên chính thức: Sơn Hà Xích Quỷ Tiến độ hoàn thiện: Đang chuẩn bị Chương 1 sẽ sớm được ra mắt trong năm 2026 hoàn toàn miễn phí Hơn 4000 năm trước, vào thời kỳ Hồng Bàng nơi đất nam mà người Việt sơ khai xuất hiện, có một người là Kinh Dương Vương, vị vua đầu tiên của nước Việt Nam thuở hồng hoang, ông đã dựng xây nên nước Xích Quỷ, lãnh thổ vô cùng rộng lớn Ông chính là vua Hùng đầu tiên của đất Việt Điểm đến đầu tiên của cậu may mắn không phải thời kỳ hồng hoang đó, nơi mà chúng ta sẽ tới là thời kỳ mà linh hồn của người anh hùng thứ 11 sinh ra - ông là Lê Lợi .... này .... ngậm miệng vào đừng có hét nữa không thì cắn phải lưỡi giờ" 
  },
  "festival": { 
    title: "Hobby Horizon 2026", 
    content: "Tháng 7/2026, Ren Animation Studio vinh dự góp mặt tại sự kiện Hobby Horizon 2026." 
  },
};

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const news = newsContent[slug];

  if (!news) notFound();

  return (
    <main className="min-h-screen bg-black pt-32 pb-24 px-6 text-white font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-12 tracking-widest uppercase">{news.title}</h1>
        
        <article className="text-zinc-300 leading-relaxed text-lg mb-16 border-l-2 border-zinc-800 pl-6">
          {news.content}
        </article>
        
        {/* Nút Back về trang News tổng */}
        <Link 
          href="/news" 
          className="inline-block text-xs font-bold uppercase tracking-widest border border-zinc-700 px-8 py-3 hover:bg-white hover:text-black transition-all"
        >
          ← Back to News
        </Link>
      </div>
    </main>
  );
}