import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-8 py-6 bg-transparent text-white">
      
      {/* Cụm 1: Logo bên trái */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Ren Animation Studio Logo" 
            width={150} 
            height={50} 
            priority
            style={{ width: "auto", height: "auto" }} // THÊM ĐÚNG DÒNG NÀY LÀ SẠCH BÓNG
            className="invert"
          />
        </Link>
      </div>

      {/* Cụm 2: Menu ở giữa (Chuẩn MAPPA - Đã fix lỗi lòi 1px viền xanh) */}
      <nav className="flex-1 flex justify-center gap-2 text-sm font-semibold tracking-wide whitespace-nowrap">
        
        <Link href="/works" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">WORKS</span>
        </Link>

        <Link href="/services" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">SERVICES</span>
        </Link>
        
        <Link href="/how-we-work" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">HOW WE WORK</span>
        </Link>
        
        {/* --- TAB PODCAST MỚI THÊM VÀO --- */}
        <Link href="/podcast" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">PODCASTS</span>
        </Link>
        {/* -------------------------- */}
        
        <Link href="/about" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">ABOUT</span>
        </Link>
        
        <Link href="/news" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">NEWS</span>
        </Link>
        
        <Link href="/visuals" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">VISUALS</span>
        </Link>
        
        <Link href="/recruit" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">RECRUIT</span>
        </Link>
        
        <Link href="/store" className="group relative inline-flex px-4 py-0.8 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300">STORE</span>
        </Link>

      </nav>

      {/* Cụm 3: Mạng xã hội bên phải (Đã thêm TikTok) */}
      <div className="flex-1 flex justify-end gap-3 items-center">
        
        {/* Nút X (Twitter) */}
        <Link href="https://x.com/RenAnimaStudio" target="_blank" className="group relative inline-flex p-2 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 flex items-center justify-center">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </span>
        </Link>
        
        {/* Nút Facebook */}
        <Link href="https://www.facebook.com/renanimationstudio" target="_blank" className="group relative inline-flex p-2 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 flex items-center justify-center">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </span>
        </Link>

        {/* Nút YouTube */}
        <Link href="https://www.youtube.com/@RenAnimationStudio" target="_blank" className="group relative inline-flex p-2 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 flex items-center justify-center">
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.059 0 12 0 12s0 3.941.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.941 24 12 24 12s0-3.941-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </span>
        </Link>

        {/* Nút TikTok (Vừa ra lò) */}
        <Link href="https://www.tiktok.com/@ren_animation_studio" target="_blank" className="group relative inline-flex p-2 overflow-hidden cursor-pointer">
          <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          <span className="relative z-10 text-white group-hover:text-black transition-colors duration-300 flex items-center justify-center">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
            </svg>
          </span>
        </Link>
        
      </div>
    </header>
  );
}