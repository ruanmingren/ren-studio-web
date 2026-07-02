import Link from "next/link"; // Nhớ import dòng này ở đầu file

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      {/* Hiệu ứng mờ dần để tăng độ sang trọng */}
      <div className="text-center animate-pulse">
        <h1 className="text-5xl md:text-8xl font-black tracking-[0.2em] uppercase mb-4">
          Coming Soon
        </h1>
        <p className="text-zinc-500 tracking-[0.3em] uppercase text-sm md:text-base">
          in Hobby Horizon 2026
        </p>
      </div>

      {/* Nút quay về trang chủ cho đỡ bị "kẹt" */}
      <Link 
        href="/" 
        className="mt-12 text-xs font-bold uppercase tracking-widest border border-zinc-700 px-8 py-3 hover:bg-white hover:text-black transition-all"
        >
        Back to Home
        </Link>
    </main>
  );
}