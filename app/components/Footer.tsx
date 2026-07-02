import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-950 text-zinc-400 py-12 px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Cụm 1: Thông tin Studio */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-white text-xl font-bold tracking-widest mb-3">REN ANIMATION STUDIO</h2>
          <p className="text-sm mb-1">Akari City, Binh Tan District</p>
          <p className="text-sm">Ho Chi Minh City, Vietnam</p>
        </div>

        {/* Cụm 2: Điều hướng phụ */}
        <div className="flex gap-6 text-sm font-semibold tracking-wide">
          <Link href="/about" className="hover:text-white transition-colors">ABOUT</Link>
          <Link href="/works" className="hover:text-white transition-colors">WORKS</Link>
          <Link href="/recruit" className="hover:text-white transition-colors">RECRUIT</Link>
        </div>

        {/* Cụm 3: Liên hệ (Click để sang trang Contact) */}
        <div className="flex flex-col items-center md:items-end text-sm">
          <p className="mb-2 font-semibold text-white tracking-widest">GET IN TOUCH</p>
          <Link href="/contact" className="hover:text-white text-zinc-400 transition-colors text-lg tracking-widest border-b border-transparent hover:border-white pb-1">
            CONTACT US
          </Link>
        </div>

      </div>

      {/* Dòng Bản quyền */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-zinc-800/50 text-center text-xs tracking-wider">
        © 2026 REN ANIMATION STUDIO. All rights reserved.
      </div>
    </footer>
  );
}