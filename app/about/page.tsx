export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-12 px-6 md:px-12 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-12 border-b border-zinc-800 pb-6">About Us</h1>

        <section className="mb-20">
          <h2 className="text-xl font-semibold tracking-widest uppercase mb-6 text-zinc-500">Our Vision</h2>
          <p className="text-zinc-300 leading-relaxed text-lg mb-6">
            Based in Ho Chi Minh City, Ren Animation Studio specializes in high-quality 2D anime production. From intricate background painting and digital illustration to advanced compositing (Satsuei), we bring compelling narratives to life.
          </p>
          <p className="text-zinc-300 leading-relaxed text-lg">
            Beyond production, we are dedicated to nurturing the next generation of artists through our educational initiative, Background Anime Class.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-widest uppercase mb-6 text-zinc-500">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-zinc-900 p-8 hover:border-zinc-700 transition-colors">
              <h3 className="font-bold tracking-widest uppercase text-lg">Nguyễn Minh Nhân (Ren)</h3>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">Founder / CEO & Producer</p>
            </div>
            
            <div className="border border-zinc-900 p-8 hover:border-zinc-700 transition-colors">
              <h3 className="font-bold tracking-widest uppercase text-lg">Trương Ngọc Thảo (Vân Hà)</h3>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2">Business Operations & Branding</p>
            </div>

            <div className="border border-zinc-900 p-8 md:col-span-2 hover:border-zinc-700 transition-colors">
              <h3 className="font-bold tracking-widest uppercase text-lg">In-house Production Team</h3>
              <p className="text-sm text-zinc-500 uppercase tracking-widest mt-2 mb-4">Lead Animators & Artists</p>
              <p className="text-zinc-400 leading-relaxed">
                Featuring the core talents of Ematos, Katori, alongside our extensive network of dedicated freelance animation specialists.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
