"use client";
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  return (
    <main className="flex-grow flex flex-col px-6 md:px-12 py-16 w-full max-w-6xl mx-auto text-white">
      
      {/* 1. Tiêu đề bự bên trái */}
      <div className="mb-12">
        <Link href="/works" className="text-zinc-500 hover:text-white transition-colors mb-2 block tracking-widest text-sm">
          ← BACK TO WORKS
        </Link>
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-zinc-100">
          {slug.toUpperCase()}
        </h1>
      </div>

      {/* 2. Khối Poster & Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="aspect-[3/4] relative rounded-lg overflow-hidden border border-zinc-800">
           {/* Trỏ vào hình cũ làm tạm */}
           <Image src="/71111.png" alt="Poster" fill className="object-cover" />
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="aspect-video bg-black rounded-lg overflow-hidden border border-zinc-800 flex items-center justify-center">
            VIDEO PLAYER
          </div>
        </div>
      </div>

      {/* 3. Khối Story và Staff (Dàn theo dạng trên-dưới) */}
      <div className="flex flex-col gap-20 border-t border-zinc-800 pt-16">
        
        {/* STORY */}
        <section className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-widest mb-6 border-l-4 border-white pl-4">STORY</h2>
          <p className="text-zinc-400 leading-relaxed text-lg italic">
            Nơi sự thật được che giấu dưới những lớp ký ức. Một thế giới hư ảo chờ đợi được khám phá...
          </p>
        </section>

        {/* STAFF - Danh sách dài dàn dọc cực đẹp */}
        <section className="w-full">
          <h2 className="text-2xl font-bold tracking-widest mb-10 border-l-4 border-white pl-4">STAFF</h2>
          <div className="flex flex-col gap-3">
            {[
              { role: "Original Concept", name: "Ren" },
              { role: "Director", name: "Nhân Nguyễn" },
              { role: "Character Design", name: "Ematos" },
              { role: "Animation", name: "Ren Animation Studio" },
              { role: "Background Art", name: "Katori" },
              { role: "Sound Design", name: "Team Audio" },
              { role: "Production", name: "Ren Production" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row md:items-center py-3 border-b border-zinc-900">
                <span className="text-zinc-500 w-full md:w-1/3 text-sm tracking-widest">{item.role}</span>
                <span className="text-white font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}