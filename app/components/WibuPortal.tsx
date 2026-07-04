 "use client";

import { useState } from "react";

import { useRouter, usePathname } from "next/navigation";



export default function WibuPortal() {

  const router = useRouter();

  const pathname = usePathname();

  const [isAnimating, setIsAnimating] = useState(false);



  const isWibuMode = pathname.startsWith("/wibu");



  const toggleUniverse = () => {

    setIsAnimating(true);

    setTimeout(() => {

      if (isWibuMode) {

        router.push("/");

      } else {

        router.push("/wibu");

      }

      setTimeout(() => setIsAnimating(false), 500);

    }, 800);

  };



  return (

    <>

      {/* Hiệu ứng chớp trắng Anime toàn màn hình */}

      <div

        className={`fixed inset-0 bg-white z-[9999] transition-opacity duration-700 pointer-events-none ${

          isAnimating ? "opacity-100" : "opacity-0"

        }`}

      ></div>



      {/* NÚT TRÒN TRÔI NỔI (Đã đẩy lên bottom-24 để không đè nút Gacha)

        Thêm class 'group' để làm hiệu ứng hover hiện chữ

      */}

      <button

        onClick={toggleUniverse}

        className={`group fixed bottom-8 right-6 z-[50] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 border ${

          isWibuMode

            ? "bg-black border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)]"

            : "bg-zinc-900 hover:border-blue-500 border-zinc-700 shadow-[0_0_20px_rgba(0,0,0,0.3)]"

        }`}

      >

        {/* Dấu chấm nhấp nháy nằm chính giữa nút tròn */}

        <span className="relative flex h-4 w-4">

          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isWibuMode ? "bg-white" : "bg-blue-500"}`}></span>

          <span className={`relative inline-flex rounded-full h-4 w-4 ${isWibuMode ? "bg-white" : "bg-blue-500"}`}></span>

        </span>



        {/* DÒNG CHỮ TOOLTIP ĐẨY SANG TRÁI

          - right-full: Canh sát rìa trái của cái nút

          - mr-4: Cách cái nút ra 1 khúc (margin-right)

        */}

        {/* DÒNG CHỮ LUÔN HIỆN CỐ ĐỊNH BÊN TRÁI */}

        <span className={`absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 rounded-full font-bold tracking-widest text-xs uppercase whitespace-nowrap shadow-lg flex items-center gap-2 border transition-all duration-300 ${

          isWibuMode

            ? "bg-black text-white border-zinc-700"

            : "bg-white text-black border-zinc-200"

        }`}>

          {/* Dấu chấm nhỏ trang trí */}

          <span className={`block h-2 w-2 rounded-full ${isWibuMode ? "bg-white" : "bg-black"}`}></span>

          {isWibuMode ? "Back to Studio" : "Class of Wibu"}

        </span>

      </button>

    </>

  );

}