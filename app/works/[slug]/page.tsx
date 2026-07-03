import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// 1. Cập nhật Type để nhận thêm dữ liệu
type ProjectDetail = {
  title: string;
  category: string;
  heroImage: string;
  youtubeId?: string;
  gallery?: string[]; // Thêm mảng ảnh poster phụ
  description: string;
  client: string;
  year: string;
  role: string;
  staff: { role: string; name: string }[]; // Thêm bảng credit
};


// 2. Data mẫu (Ông cứ điền thêm vào đây)
const projectsData: Record<string, ProjectDetail> = {
  "71111": {
    title: "7.1.111 (TIM)",
    category: "ORIGINAL IP",
    heroImage: "/71111.png",
    description: "30 tuổi, bạn có dám bỏ việc để theo đuổi đam mê? Vân Hà - một cô gái 30 tuổi với khả năng đọc cảm xúc thật của người khác. Mắc kẹt giữa gánh nặng nhà cửa, người thân và giấc mơ hội họa dang dở, cuộc đời cô ngỡ như một bức tranh xám xịt lập đi lập lại ... cho đến chuyến tàu Metro định mệnh ấy. Một chàng trai đặc biệt. Một cuộc gặp gỡ thay đổi tất cả. Liệu Vân Hà có dám từ bỏ sự ổn định để cầm bút vẽ nên những màu sắc khác của cuộc đời mình?",
    client: "Ren Animation Studio",
    year: "Dec 2026",
    role: "Full Production",
    staff: [
      { role: "Director", name: "Minh Nhân" },
      { role: "Original Creator", name: "Minh Nhân" },
      { role: "Animation Production", name: "Ren Animation Studio | Class of Wibu" },
      { role: "Storyboard", name: "Minh Nhân" },
      { role: "Composite", name: "Minh Nhân" },
      { role: "Art Director", name: "Ka Đê" },
      { role: "Character Design", name: "Vân Anh, Phương Dung, Phương Nguyên" },
      { role: "Background Design", name: "Yohen.Z.Q" },
      { role: "Prop Design", name: "Minh Nhân" },
      { role: "Color Design", name: "Minh Nhân" },
      { role: "Layout", name: "Minh Nhân" },
      { role: "Leader Animation", name: "Phương Nguyên" },
      { role: "Illustration", name: "Aoikito, Haru, Kim Ngân, Hàn Đông, HarryJoe, Ka Đê, Kon, Xuân Giang" },
      { role: "Sakkan", name: "Kim Ngân, Thảo Linh, Phương Nguyên, Quỳnh Hương, Như Quỳnh, Aoikito, uyoonim" },
      { role: "Nigen", name: "Kim Ngân, Thảo Linh, Như Quỳnh, Quỳnh Hương, Duy Luân, Phong Sang, Thanh Uyên, Đức Hiệp, Ngọc Minh, uyoonim, Khanhmatruoi, Eromreven, Ngọc Diệp, Thanh Phương, Phương Nguyên" },
      { role: "Douga", name: "Kim Ngân, Duy Luân, Như Quỳnh, Solroz, Phong Sang, Thanh Uyên, Đức Hiệp, Quang Thành, Khanhmatruoi, NOF, Vân Anh, Thanh Phương, Quốc Tín, Phương Nguyên" },
      { role: "Shiage", name: "Kim Ngân, Duy Luân, Như Quỳnh, Solroz, Phong Sang, Thanh Uyên, Đức Hiệp, Quang Thành, Khanhmatruoi, Ngọc Diệp, Phương Nguyên" },
      { role: "Background Painter", name: "Minh Nhân, Ka Đê, Hàn Đông, Minchan Machiko, Đình Nhã, Quốc Khánh, Yohen.Z.Q, Xuân Vũ, Quỳnh Trâm, Trang Mi, Hồng Xuân, Hyu" },
      { role: "Opening Song [TÌM]", name: "Học Sinh Yếu Band" },
      { role: "Ending Song [Ngày Mai]", name: "Anh Thư Masaharu - Cryshi Fusion" },
      { role: "Original Sound Track", name: "Hieu Andex Vu" },
      { role: "SFX", name: "Hieu Andex Vu" },
      { role: "Lồng Tiếng", name: "VAGABOND TEAM" },
      { role: "Đạo diễn lồng tiếng", name: "Hoàng Thông, Xuân Huy" },
      { role: "VA - Vân Hà", name: "Trần Phượng" },
      { role: "VA - Nhật Thy", name: "Nhã Nhã" },
      { role: "VA - Quốc Khang", name: "Quang Vinh" }
    ],
  },
  "son-ha-xich-quy": {
    title: "SƠN HÀ XÍCH QUỶ",
    category: "ORIGINAL IP",
    heroImage: "/sonha.png",
    description: "Chương 1 sẽ sớm được ra mắt trong năm 2026 miễn phí Trường ca 4000 năm của Yên Hà Giới, mỗi tấc đất đều thấm đẫm máu và nước mắt. Từ những thăng trầm ấy, 14 linh hồn bất tử đã hiển hiện — họ là những Anh hùng dân tộc, những huyền thoại được khắc ghi mãi mãi trong dòng chảy lịch sử. Nhưng có một thế lực đã luôn ở đó suốt bốn thiên niên kỷ, trực chờ thời cơ để có thể vươn mình thoát khỏi phong ấn của Kinh Dương Vương hòng xé nát dòng chảy của lịch sử. Từng thời kỳ của lịch sử sẽ được kể một phần trong chuyến hành trình này, ta và mi có nhiệm vụ ngăn chặn những điều tệ hại nhất có thể xảy ra, liệu mi đã chuẩn bị tinh thần chưa ? - Chim Lạc",
    client: "Ren Animation Studio",
    year: "In Development",
    role: "Full Production",
    staff: [
      { role: "Author", name: "Nguyễn Minh Nhân" },
      { role: "Screenwriter", name: "Bryan, Minh Quân, Nguyễn Minh Nhân" },
      { role: "Character Design", name: "Nguyễn Minh Nhân, KiraKim" },
      { role: "Background Design", name: "Nguyễn Minh Nhân" },
      { role: "Illustration", name: "Nguyễn Minh Nhân, Hàn Đông" },
      { role: "Programming", name: "Nguyễn Minh Nhân" },
    ],
  },
  "manga": {
    title: "CHUYỂN THỂ MANGA",
    category: "ADAPTATION",
    heroImage: "/manga.png",
    description: "Một dự án Manga dài hơi đang trong quá trình thai nghén, hứa hẹn mang đến một thế giới nguyên bản đầy sáng tạo với phong cách nghệ thuật đặc trưng.",
    client: "Mangaka Bùi Văn Hoàng Tiếng",
    year: "TBA",
    role: "Animation / Storyboard",
    staff: [
      { role: "Mangaka", name: "Bùi Văn Hoàng Tiếng" },
      { role: "Animator", name: "Nguyễn Minh Nhân" },
    ],
  },
  "kronus": {
    title: "KRONUS GENOVIUS - MV PROJECT",
    category: "CO-PRODUCTION",
    heroImage: "/kronus.png",
    description: "Góp mặt trong dự án Anime Music Video bùng nổ cho VTuber Kronus. Phụ trách những phân cảnh hành động gắt gao và đảm bảo chất lượng hình ảnh sắc nét nhất.",
    client: "Kronus",
    year: "Nov 2026",
    role: "Full Production",
    staff: [
      { role: "Director", name: "Kronus Genovius, Minh Nhân" },
      { role: "Original Creator", name: "Kronus Genovius" },
      { role: "Storyboard", name: "Minh Nhân" },
      { role: "Composite", name: "Minh Nhân" },
      { role: "Art Director", name: "Minh Nhân" },
      { role: "Character Design", name: "Katori, Thảo Linh, Phương Nguyên" },
      { role: "Background Design", name: "Yohen.Z.Q" },
      { role: "Prop Design", name: "Nyaa Van" },
      { role: "Color Design", name: "Minh Nhân" },
      { role: "Layout", name: "Minh Nhân" },
      { role: "Leader Animation", name: "Minh Nhân" },
      { role: "Illustration", name: "Minh Nhân" },
      { role: "Sakkan", name: "Kim Ngân, Thảo Linh, Minh Nhân" },
      { role: "Nigen", name: "Kim Ngân, Đức Hiệp, Khanhmatruoi, Ngọc Diệp, Thảo Linh, Quỳnh Hương, Phương Nguyên, Khanhmatruoi, Eromreven, Enta" },
      { role: "Douga", name: "Kim Ngân, Đức Hiệp, Khanhmatruoi, Ngọc Diệp, Thảo Linh, Quỳnh Hương, Phương Nguyên, Khanhmatruoi, Eromreven, Enta" },
      { role: "Shiage", name: "Kim Ngân, Đức Hiệp, Khanhmatruoi, Ngọc Diệp, Thảo Linh, Quỳnh Hương, Phương Nguyên, Khanhmatruoi, Eromreven, Enta" },
      { role: "Background Painter", name: "Minh Nhân, Ping9999, Yohen.Z.Q, Nyaa Van" },
    ],
  },
  "gawr-gura-1": {
    title: "GAWR GURA - SHARK'D",
    category: "CO-PRODUCTION",
    heroImage: "/gawr_gura.png", // Phải bù thêm hình banner phòng hờ
    youtubeId: "kJGsWORSg-4", 
    description: "Góp sức vào dự án MV đình đám của Gawr Gura, hỗ trợ xử lý các khâu hình ảnh để mang lại trải nghiệm thị giác bùng nổ cho cộng đồng fan toàn cầu.",
    client: "Cover Corp (Hololive EN)",
    year: "Sep 2022",
    role: "Background",
    staff: [
      { role: "Background Artlead", name: "Nguyễn Minh Nhân" },
      { role: "Background Artist", name: "Yukari Pham, Bình Vy, Nhật Vy, Minh Trang, Hân Nguyễn, Đức Anh, Quỳnh Như" },
    ],
  },
  "gawr-gura-2": {
    title: "GAWR GURA - BLUE HORIZON",
    category: "CO-PRODUCTION",
    heroImage: "/gawr_gura2.png",
    youtubeId: "W7q8cHY91Ew",
    description: "Tiếp tục đồng hành trong dự án MV thứ 2 của Gawr Gura. Đẩy mạnh chất lượng diễn hoạt và độ chi tiết của môi trường.",
    client: "Cover Corp (Hololive EN)",
    year: "July 2023",
    role: "Background",
    staff: [
      { role: "Background Artist", name: "Nguyễn Minh Nhân, Hân Nguyễn" },
    ],
  },
  "ironmouse": {
    title: "IRONMOUSE - UNLEASHED",
    category: "CO-PRODUCTION",
    heroImage: "/ironmouse_v.png",
    youtubeId: "8G0l7P9XI1U",
    description: "Tham gia vào dây chuyền sản xuất MV Anime cho VTuber hàng đầu Ironmouse. Đảm bảo chất lượng xuất ra chuẩn chỉnh và sắc nét nhất.",
    client: "VShojo",
    year: "Aug 2023",
    role: "Background",
    staff: [
      { role: "Background Artist", name: "Nguyễn Minh Nhân" },
    ],
  },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-black text-white pt-20 pb-24">
      {/* KHU VỰC HERO / VIDEO */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        {project.youtubeId ? (
          <div className="aspect-video w-full bg-zinc-900">
            <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${project.youtubeId}`} allowFullScreen />
          </div>
        ) : (
          <div className="aspect-video relative w-full">
            <Image src={project.heroImage} fill className="object-cover" alt={project.title} />
          </div>
        )}
      </section>

      {/* THÔNG TIN CHI TIẾT */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-black uppercase mb-6">{project.title}</h1>
          <p className="text-zinc-400 text-lg leading-relaxed">{project.description}</p>
        </div>
        
        {/* BẢNG THÔNG TIN CỐ ĐỊNH */}
        <aside className="bg-zinc-900 p-8 h-fit">
          <h3 className="text-zinc-500 text-xs uppercase mb-2">Client</h3>
          <p className="mb-6">{project.client}</p>
          <h3 className="text-zinc-500 text-xs uppercase mb-2">Release Date</h3>
          <p className="mb-6">{project.year}</p>
          <h3 className="text-zinc-500 text-xs uppercase mb-2">Role</h3>
          <p>{project.role}</p>
        </aside>
      </section>

      {/* KHU VỰC POSTER / GALLERY (Nếu không phải MV) */}
      {project.gallery && (
        <section className="max-w-7xl mx-auto px-6 mt-16">
          <h2 className="text-2xl font-bold uppercase mb-8 border-l-4 border-white pl-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[3/4] relative bg-zinc-800">
                <Image src={img} fill className="object-cover" alt="Gallery" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PHẦN STAFF CREDIT (Điểm nhấn như ông muốn) */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-2xl font-bold uppercase mb-12 border-l-4 border-white pl-4">Staff Credits</h2>
        
        <div className="flex flex-col gap-0">
          {project.staff.map((s, i) => (
            <div 
              key={i} 
              className="grid grid-cols-1 md:grid-cols-[250px_1fr] border-b border-zinc-800 py-5 hover:bg-zinc-900/30 transition-colors"
            >
              {/* Cột Role: Cố định 250px để thẳng hàng bên trái */}
              <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold pt-1">
                {s.role}
              </span>
              
              {/* Cột Name: Chiếm phần còn lại, căn lề trái thẳng tắp */}
              <span className="text-white font-medium text-base leading-relaxed mt-2 md:mt-0">
                {s.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}