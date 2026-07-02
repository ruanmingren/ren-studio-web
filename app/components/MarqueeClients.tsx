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
];

export default function MarqueeClients() {
  return (
    <section className="py-12  bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8 px-6">
        <h2 className="text-3xl text-zinc-400 tracking-[0.4em] uppercase">Collaborated With</h2>
      </div>
      
      <div className="flex w-full">
        <motion.div
          className="flex gap-0 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Chạy từ phải sang trái liên tục
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Tốc độ chạy: tăng số này lên nếu ông muốn nó chạy chậm hơn
          }}
        >
          {/* Lặp lại mảng logo 2 lần để nó chạy liên tục không bị hở đuôi */}
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="w-96 h-48 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <Image
                src={client.src}
                alt={client.name}
                width={300}
                height={150}
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}