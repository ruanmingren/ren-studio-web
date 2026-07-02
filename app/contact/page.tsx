"use client";

export default function ContactPage() {
  // Hàm xử lý gom dữ liệu và mở ứng dụng Mail
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn trình duyệt tải lại trang

    // Lấy dữ liệu người dùng vừa nhập
    const formData = new FormData(e.currentTarget);
    const name = formData.get("Name");
    const email = formData.get("Email");
    const portfolio = formData.get("Portfolio");
    const message = formData.get("Message");

    // Lên khung tiêu đề và nội dung thư
    const subject = encodeURIComponent(`[Liên hệ Ren Studio] - ${name}`);
    const body = encodeURIComponent(
      `Xin chào Ren Animation Studio,\n\n` +
      `Tôi là: ${name}\n` +
      `Email: ${email}\n` +
      `Link Portfolio (Nếu có): ${portfolio}\n\n` +
      `Nội dung:\n${message}`
    );

    
    // Kích hoạt lệnh mở mail
    window.location.href = `mailto:renanimationstudio@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="flex-grow flex flex-col items-center px-4 py-20 w-full max-w-3xl mx-auto">
      
      <h1 className="text-4xl md:text-5xl font-bold tracking-widest text-white mb-6">CONTACT</h1>
      <p className="text-zinc-400 text-center mb-12 leading-relaxed">
        Nếu bạn có hứng thú với các dự án của Ren Animation Studio, hoặc muốn ứng tuyển và hợp tác, <br className="hidden md:block" />
        vui lòng để lại thông tin. Chúng tôi sẽ phản hồi qua email trong thời gian sớm nhất!
      </p>

      {/* Gọi hàm handleSubmit khi người dùng bấm Gửi */}
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-zinc-300">Tên của bạn *</label>
            <input 
              type="text" 
              name="Name"
              className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-md focus:outline-none focus:border-zinc-500 transition-colors" 
              placeholder="Vd: Nguyễn Văn A" 
              required 
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-sm font-semibold tracking-wide text-zinc-300">Email *</label>
            <input 
              type="email" 
              name="Email"
              className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-md focus:outline-none focus:border-zinc-500 transition-colors" 
              placeholder="email@example.com" 
              required 
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold tracking-wide text-zinc-300">Link Portfolio (Google Drive, Behance...)</label>
          <input 
            type="url" 
            name="Portfolio"
            className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-md focus:outline-none focus:border-zinc-500 transition-colors" 
            placeholder="https://drive.google.com/..." 
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold tracking-wide text-zinc-300">Nội dung *</label>
          <textarea 
            name="Message"
            rows={6} 
            className="bg-zinc-900 border border-zinc-800 text-white p-4 rounded-md focus:outline-none focus:border-zinc-500 transition-colors" 
            placeholder="Bạn muốn chia sẻ điều gì với Studio?" 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="mt-6 bg-white text-black font-bold tracking-widest py-4 px-12 rounded-md hover:bg-zinc-300 transition-colors self-center md:self-start"
        >
          GỬI THÔNG TIN
        </button>

      </form>
    </main>
  );
}