import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between px-8 py-6 border-b border-zinc-800 bg-zinc-950 text-white">
      {/* Cụm 1: Logo bên trái */}
      <div className="flex-1 flex justify-start">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.png" 
            alt="Ren Animation Studio Logo" 
            width={150} 
            height={50} 
            className="object-contain invert"
          />
        </Link>
      </div>

      {/* Cụm 2: Menu ở giữa */}
      <nav className="flex-1 flex justify-center gap-8 text-sm font-semibold tracking-wide whitespace-nowrap">
        <Link href="/works" className="hover:text-gray-400 transition-colors">WORKS</Link>
        <Link href="/about" className="hover:text-gray-400 transition-colors">ABOUT</Link>
        <Link href="/news" className="hover:text-gray-400 transition-colors">NEWS</Link>
        <Link href="/special" className="hover:text-gray-400 transition-colors">SPECIAL</Link>
        <Link href="/recruit" className="hover:text-gray-400 transition-colors">RECRUIT</Link>
        <Link href="/store" className="hover:text-gray-400 transition-colors">STORE</Link>
      </nav>

      {/* Cụm 3: Mạng xã hội bên phải */}
      <div className="flex-1 flex justify-end gap-5 items-center">
        {/* Nút X (Twitter) đã gắn link thật */}
        <Link href="https://x.com/RenAnimaStudio" target="_blank" className="hover:text-gray-400 transition-colors">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </Link>
        
        {/* Nút Facebook đã gắn link thật */}
        <Link href="https://www.facebook.com/renanimationstudio" target="_blank" className="hover:text-gray-400 transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
          </svg>
        </Link>

        {/* Nút YouTube */}
        <Link href="https://www.youtube.com/@RenAnimationStudio" target="_blank" className="hover:text-gray-400 transition-colors">
          <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.059 0 12 0 12s0 3.941.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.941 24 12 24 12s0-3.941-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </Link>
        
      </div>
    </header>
  );
}