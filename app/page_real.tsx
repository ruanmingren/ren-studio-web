import ClientLogos from "./components/ClientLogos";

export default function Home() {
  return (
    <main className="flex flex-col items-center w-full">
      
      {/* Container Video tràn viền */}
      <div className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden bg-black">
        <video
          src="/showreel.mp4" /* Điền đúng tên file video trong thư mục public */
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        
        {/* Một lớp mờ nhẹ phủ lên video giúp giao diện có chiều sâu hơn */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Thông tin mô tả bên dưới (bạn có thể tùy chỉnh chữ) */}
      <div className="mt-12 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
          7.1.111
        </h1>
        <p className="mt-3 text-sm md:text-base text-zinc-400 tracking-wider">
          FIRST LOOK PV | 4 MINS
        </p>
      </div>
    <ClientLogos/>

    </main>
  );
}