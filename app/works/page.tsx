import Link from 'next/link';
import Image from 'next/image';

// Danh sách dữ liệu các dự án của Studio
const projects = [
  { slug: '71111', title: '7.1.111 (TIM)', category: 'ORIGINAL ANIME', image: '/71111.png' },
  { slug: 'sonhaxichquy', title: 'Sơn Hà Xích Quỷ', category: 'VISUAL NOVEL', image: '/sonha.png' },
  { slug: 'kronus', title: 'KRONUS', category: 'ANIME MUSIC VIDEO', image: '/kronus.png' },
  { slug: 'mangaip', title: 'ORIGINAL MANGA IP', category: 'MANGA', image: '/manga.png' }
];

export default function WorksPage() {
  return (
    <main className="flex-grow flex flex-col items-center px-8 py-20 w-full max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-white mb-16">WORKS</h1>
      
      {/* Lưới chia cột: 1 cột (điện thoại), 2 cột (tablet), 3 cột (máy tính) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
        {projects.map((project) => (
          <Link href={`/works/${project.slug}`} key={project.slug} className="group flex flex-col gap-4">
            
            {/* Khung chứa hình ảnh có hiệu ứng zoom nhẹ khi đưa chuột vào */}
            <div className="relative w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
              <Image 
                src={project.image} 
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Thông tin dự án */}
            <div className="flex flex-col">
              <span className="text-xs text-zinc-500 font-semibold tracking-widest mb-1">{project.category}</span>
              <h2 className="text-lg text-white font-bold tracking-wide group-hover:text-zinc-300 transition-colors">{project.title}</h2>
            </div>
            
          </Link>
        ))}
      </div>
    </main>
  );
}