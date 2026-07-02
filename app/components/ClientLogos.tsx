export default function ClientLogos() {
  // Kho logo tạm thời (Sau này ông thay bằng hình ảnh thực tế)
  const clients = [
    "V-TUBER KRONUS", 
    "SƠN HÀ XÍCH QUỶ", 
    "PARTNER 03", 
    "STUDIO 04", 
    "BRAND 05",
    "AGENCY 06"
  ];

  return (
    <section className="py-12 bg-black border-y border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center md:text-left">
        <h2 className="text-xl font-bold tracking-widest uppercase text-zinc-500">
          Our Clients & Partners
        </h2>
      </div>
      
      {/* Khung giới hạn hiển thị */}
      <div className="relative flex overflow-hidden w-full group">
        
        {/* Bộ gradient che 2 bên rìa cho mờ mờ ảo ảo (tùy chọn) */}
        <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10"></div>

        {/* Dãy băng chuyền chính */}
        <div className="animate-marquee flex gap-16 items-center pr-16 cursor-default">
          
          {/* Dãy số 1 */}
          {clients.map((client, index) => (
            <div key={`client1-${index}`} className="flex-none">
              <h3 className="text-3xl font-black text-zinc-700 uppercase tracking-widest hover:text-white transition-colors duration-300">
                {client}
              </h3>
            </div>
          ))}

          {/* Dãy số 2 (Bản sao y hệt để nối đuôi không bị đứt) */}
          {clients.map((client, index) => (
            <div key={`client2-${index}`} className="flex-none">
              <h3 className="text-3xl font-black text-zinc-700 uppercase tracking-widest hover:text-white transition-colors duration-300">
                {client}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
