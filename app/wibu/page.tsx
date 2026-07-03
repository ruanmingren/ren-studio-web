
import Image from "next/image";

export default function WibuPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-zinc-900 font-sans pb-24">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 text-center bg-white border-b border-zinc-200 shadow-sm">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-blue-600 uppercase">
            Class of Wibu
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-zinc-700 tracking-widest uppercase mb-6">
            Background Anime Class
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Đào tạo chuyên sâu về Digital Art dành cho Anime. Từ thiết kế Concept, Minh họa, Xây dựng kịch bản đến phát triển Animation chuẩn Anime Industry.
          </p>
          <a href="https://www.facebook.com/animebgclass/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white font-bold tracking-widest uppercase px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-blue-500/30">
            Đăng Ký Tư Vấn
          </a>
        </div>
      </section>

      {/* Đặc quyền học viên */}
      <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-widest uppercase text-zinc-800">Quyền lợi Học viên</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-blue-200 transition-all">
            <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase tracking-wider">Học lại Miễn Phí</h3>
            <p className="text-zinc-600 leading-relaxed">Tham gia học lại hoàn toàn miễn phí bất kỳ lúc nào để ôn tập kiến thức. Mọi buổi học đều có Recording xem lại trọn đời.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-blue-200 transition-all">
            <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase tracking-wider">Học Online / Hỏi đáp 24/7</h3>
            <p className="text-zinc-600 leading-relaxed">Học trực tuyến qua Google Meet với lịch cố định. Đội ngũ giảng viên hỗ trợ tận tình, sửa bài liên tục cho đến khi hoàn thiện.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md hover:border-blue-200 transition-all">
            <h3 className="text-xl font-bold text-blue-600 mb-3 uppercase tracking-wider">Thực Chiến Studio</h3>
            <p className="text-zinc-600 leading-relaxed">Cơ hội thực tập và tham gia làm việc trực tiếp các dự án của Ren Animation Studio - Sản xuất anime cho người Việt.</p>
          </div>
        </div>
      </section>

      {/* Danh sách Khóa học */}
      <section className="py-16 px-6 md:px-12 bg-white max-w-6xl mx-auto rounded-3xl shadow-sm border border-zinc-200">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-widest uppercase text-zinc-800">Các Khóa Học Nổi Bật</h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Lộ trình ngắn hạn (4 tháng) và dài hạn (2-8 khóa). Ưu đãi học phí lên đến 14 triệu hoặc tặng bảng vẽ Cintiq Wacom One 16 (trị giá hơn 20tr).
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Lớp Background */}
          <div className="border border-zinc-200 p-6 md:p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
            <div>
              <h3 className="text-2xl font-black text-zinc-800 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">Anime Background</h3>
              <p className="text-zinc-600 mb-4 text-sm md:text-base">Phối cảnh, ánh sáng, màu sắc, dựng background chuẩn Ghibli, Makoto Shinkai. Tối thứ 4 hàng tuần.</p>
            </div>
            <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-100">
              <span className="text-sm font-bold text-zinc-400 uppercase">Lộ trình: 4 tháng</span>
              <span className="text-xl font-black text-blue-600">6.000.000 đ</span>
            </div>
          </div>

          {/* Lớp Character */}
          <div className="border border-zinc-200 p-6 md:p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
            <div>
              <h3 className="text-2xl font-black text-zinc-800 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">Anime Character</h3>
              <p className="text-zinc-600 mb-4 text-sm md:text-base">Thiết kế và minh họa nhân vật từ cơ bản đến nâng cao, tạo dáng, biểu cảm, trang phục. Tối thứ 3 hàng tuần.</p>
            </div>
            <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-100">
              <span className="text-sm font-bold text-zinc-400 uppercase">Lộ trình: 4 tháng</span>
              <span className="text-xl font-black text-blue-600">6.000.000 đ</span>
            </div>
          </div>

          {/* Lớp Animation */}
          <div className="border border-zinc-200 p-6 md:p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
            <div>
              <h3 className="text-2xl font-black text-zinc-800 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">Anime Animation</h3>
              <p className="text-zinc-600 mb-4 text-sm md:text-base">Nguyên lý animation, timing, diễn hoạt nhân vật mượt mà theo quy trình sản xuất chuyên nghiệp.</p>
            </div>
            <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-100">
              <span className="text-sm font-bold text-zinc-400 uppercase">Lộ trình: Chuyên sâu</span>
              <span className="text-xl font-black text-blue-600">10.000.000 đ</span>
            </div>
          </div>

          {/* Lớp Storyboard / Mangaka */}
          <div className="border border-zinc-200 p-6 md:p-8 rounded-xl hover:border-blue-500 hover:shadow-lg transition-all flex flex-col justify-between group cursor-pointer">
            <div>
              <h3 className="text-2xl font-black text-zinc-800 uppercase tracking-wider mb-2 group-hover:text-blue-600 transition-colors">Mangaka / Storyboard</h3>
              <p className="text-zinc-600 mb-4 text-sm md:text-base">Quy trình sản xuất Manga, phát triển kịch bản và vẽ Storyboard chuẩn cho Anime. Tối thứ 7 hàng tuần.</p>
            </div>
            <div className="flex justify-between items-end mt-4 pt-4 border-t border-zinc-100">
              <span className="text-sm font-bold text-zinc-400 uppercase">Lộ trình: Chuyên sâu</span>
              <span className="text-xl font-black text-blue-600">8.000.000 đ</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
