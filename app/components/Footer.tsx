import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white  border-zinc-800 px-6 py-0.82 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section: 3 Cột */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">
          
          {/* Cột 1 Bên trái: Branding & Address */}
          <div className="flex flex-col space-y-3 w-full md:w-1/3">
            <h3 className="font-bold tracking-widest text-lg uppercase">Ren Animation Studio</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Akari City, Binh Tan District<br />
              Ho Chi Minh City, Vietnam
            </p>
          </div>

          {/* Cột 2 Ở giữa: Navigation (Đã nâng cấp hiệu ứng trượt ngang MAPPA style) */}
          <div className="flex flex-row md:flex-col gap-4 md:gap-2 items-center w-full md:w-1/3 md:pt-1">
            <Link href="/about" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
              <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                About
              </span>
            </Link>

            <Link href="/works" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
              <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                Works
              </span>
            </Link>

            <Link href="/recruit" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
              <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                Recruit
              </span>
            </Link>
          </div>

          {/* Cột 3 Bên phải: Contact & Socials (Đã thêm TikTok) */}
          <div className="flex flex-col space-y-3 w-full md:w-1/3 md:items-end md:pt-1">
            <h4 className="font-bold tracking-widest text-sm text-zinc-600 uppercase mb-2">Get In Touch</h4>
            <div className="flex flex-col md:items-end items-start space-y-1">
              
              <a href="mailto:renanimationstudio@gmail.com" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
                <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm text-white group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                  Contact Us
                </span>
              </a>

              <a href="https://www.facebook.com/renanimationstudio" target="_blank" rel="noopener noreferrer" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
                <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                  Facebook
                </span>
              </a>

              <a href="https://x.com/RenAnimaStudio" target="_blank" rel="noopener noreferrer" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
                <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                  X (Twitter)
                </span>
              </a>

              <a href="https://www.youtube.com/@RenAnimationStudio" target="_blank" rel="noopener noreferrer" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
                <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                  YouTube
                </span>
              </a>

              {/* TikTok Button */}
              <a href="https://www.tiktok.com/@RenAnimationStudio" target="_blank" rel="noopener noreferrer" className="group relative inline-flex overflow-hidden cursor-pointer px-4 py-0.8">
                <span className="absolute inset-0 bg-[#2563eb] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                <span className="relative z-10 text-sm text-zinc-400 group-hover:text-black font-bold tracking-widest uppercase transition-colors duration-300">
                  TikTok
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold tracking-widest border border-zinc-800">
            N
          </div>
          <p className="text-xs text-zinc-600 tracking-widest uppercase text-center">
            © 2026 Ren Animation Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}