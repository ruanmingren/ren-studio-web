import Image from "next/image";

export default function ComingSoonPage() {
  return (
    <main className="relative min-h-screen pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center">
      
      {/* Tiêu đề trang Store */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white mb-4">
          Official Goods
        </h1>
        <p className="text-zinc-400 tracking-[0.2em] uppercase text-sm">
          Ren Animation Studio Exclusive Merch
        </p>
      </div>

      {/* 🛠️ SỬA Ở ĐÂY: Đưa hiệu ứng hover:scale-105 lên thẳng cái khung div này */}
      <div className="relative w-full max-w-3xl rounded-xl border border-zinc-800 shadow-2xl overflow-hidden group transform hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-700 ease-out cursor-pointer">
        
        {/* Đã gỡ bỏ hiệu ứng zoom ở thẻ Image để hình không bị cắt xén */}
        <Image 
          src="/SceneBG02.jpg"
          alt="Ren Animation Store Exclusive Poster"
          width={4000}
          height={3766}
          className="w-full h-auto object-contain"
          priority 
        />
        
        {/* Hiệu ứng phủ đen mờ nhẹ lúc bình thường, rê chuột vào sẽ sáng rõ lên */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>

      {/* 🛠️ KHU VỰC THÊM CHỮ DƯỚI HÌNH CỦA ÔNG NẰM Ở ĐÂY */}
      <div className="mt-8 text-center max-w-2xl relative z-10">
        <p className="text-zinc-300 text-lg md:text-xl font-medium tracking-wide">
          Đến HOBBY HORIZON BOOTH E23 để gacha những món merch độc quyền của Ren Animation Studio!
        </p>
        <p className="text-zinc-500 mt-2 text-sm uppercase tracking-widest">
          Chỉ duy nhất trong 2 ngày 17-18/08/2024 tại Hobby Horizon  
        </p>
      </div>

    </main>
  );
}