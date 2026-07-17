"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const clients = [
  { name: "Arena", src: "/arena.png" },
  { name: "ClassOfWibu", src: "/Classofwibu.png" },
  { name: "GKV", src: "/gkv.png" },
  { name: "Hobby", src: "/hobby.png" },
  { name: "Tonari", src: "/tonari.png" },
  { name: "VNG", src: "/vng.png" },
  { name: "Wacom", src: "/wacom-logo.png" },
  { name: "WIBU", src: "/wibu.png" },
  { name: "HEAD", src: "/head.png" },
];

export default function MarqueeClients() {
  return (
    // Tà thuật tràn viền 100% được giữ nguyên, nền trong suốt hoàn toàn
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden bg-transparent">
      <section className="py-12 bg-transparent overflow-hidden">
        
        {/* Tiêu đề được canh lề đồng bộ với bố cục tổng của trang */}
        <div className="max-w-7xl mx-auto mb-10 px-6 md:px-12">
          <h2 className="text-xl md:text-2xl text-zinc-400 tracking-[0.4em] uppercase font-semibold">
            Our Clients
          </h2>
        </div>
        
        {/* Băng chuyền Logo */}
        <div className="flex w-full">
          <motion.div
            className="flex items-center whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // 30s là tốc độ trôi cực êm, nếu muốn chậm hơn thì tăng lên 40, 50
            }}
          >
            {/* Lặp lại 2 lần mảng clients để nối đuôi liên tục */}
            {[...clients, ...clients].map((client, index) => (
              <div 
                key={index} 
                // Căn giữa logo trong ô chữ nhật, responsive kích thước giữa điện thoại và máy tính
                className="w-64 md:w-96 h-32 md:h-48 flex justify-center items-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 px-8"
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={300}
                  height={150}
                  style={{ width: "auto", height: "auto" }} // THÊM DÒNG NÀY VÀO LÀ NEXT.JS VỪA LÒNG
                  className="object-contain max-h-full"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
      </section>
    </div>
  );
}