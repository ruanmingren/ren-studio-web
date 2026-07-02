import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-zinc-900 px-6 py-12 md:px-12">
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

          {/* Cột 2 Ở giữa: Navigation */}
          <div className="flex flex-row md:flex-col gap-6 md:gap-4 items-center w-full md:w-1/3 md:pt-1">
            <Link href="/about" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">About</Link>
            <Link href="/works" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">Works</Link>
            <Link href="/recruit" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">Recruit</Link>
          </div>

          {/* Cột 3 Bên phải: Contact & Socials */}
          <div className="flex flex-col space-y-3 w-full md:w-1/3 md:items-end md:pt-1">
            <h4 className="font-bold tracking-widest text-sm text-zinc-600 uppercase">Get In Touch</h4>
            <div className="flex flex-col space-y-2 md:items-end">
              <a href="mailto:renanimationstudio@gmail.com" className="text-sm text-white hover:text-zinc-400 transition-colors tracking-widest uppercase">
                Contact Us
              </a>
              <a href="https://www.facebook.com/renanimationstudio" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">
                Facebook
              </a>
              <a href="https://x.com/RenAnimaStudio" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">
                X (Twitter)
              </a>
              <a href="https://www.youtube.com/@RenAnimationStudio" target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-400 hover:text-white transition-colors tracking-widest uppercase">
                YouTube
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold tracking-widest">
            N
          </div>
          <p className="text-xs text-zinc-500 tracking-widest uppercase text-center">
            © 2026 Ren Animation Studio. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
