export type GachaCard = {
  id: number;
  name: string;
  rarity: "SSR" | "SR" | "R";
  // 👉 THÊM GEAR, SOFTWARE, STUDIO VÀO ĐÂY:
  tag: "food" | "job" | "project" | "gear" | "software" | "studio"; 
  image: string;
  stats: string;
  description: string;
};

export const gachaPool: GachaCard[] = [
  // ==========================================
  // VŨ TRỤ ẨM THỰC (FOOD) - Cứu tinh deadline
  // ==========================================
  { id: 1, name: "Cơm Tấm Sài Gòn", rarity: "SSR", tag: "food", image: "/cards/com-tam.webp", stats: "Hồi 100% HP, Căng cơ bụng", description: "Món ăn quốc dân cứu rỗi bao chiếc bụng đói lúc chạy deadline của Ren Animation Studio. Lựa chọn không hành để ý tưởng thêm thơm!" },
  { id: 2, name: "Hủ Tiếu Gõ", rarity: "SSR", tag: "food", image: "/cards/hu-tieu-go.webp", stats: "Kháng buồn ngủ +50%", description: "Tiếng lóc cóc lốc cốc vang lên lúc 2 giờ sáng là ánh sáng cứu rỗi cho các Animator đang kẹt frame." },
  { id: 3, name: "Nước Ngọt Bịch", rarity: "R", tag: "food", image: "/cards/nuoc-ngot.webp", stats: "Hồi Mana liên tục +5/s", description: "Cách giải khát chuẩn vị đường phố. Một tay cầm bịch nước, một tay cầm bút vẽ không ngừng nghỉ." },
  { id: 4, name: "Xôi Bắp Giã", rarity: "R", tag: "food", image: "/cards/xoi-bap.webp", stats: "Giáp chịu đựng +20", description: "Mộc mạc nhưng chắc bụng. Ăn một gói ngồi vẽ thông tầm từ sáng tới chiều không lo đói." },
  { id: 5, name: "Kẹo Kéo", rarity: "R", tag: "food", image: "/cards/keo-keo.webp", stats: "Độ kiên nhẫn +99", description: "Vừa ăn vừa kéo. Dẻo dai và bền bỉ y như tinh thần của đội ngũ trước những bản feedback của khách hàng." },
  { id: 6, name: "Bánh Bao Sữa Mini", rarity: "R", tag: "food", image: "/cards/banh-bao.webp", stats: "Tốc độ ăn: 0 giây", description: "Snack tốc độ! Hễ vẽ xong một frame Douga là lại nhón một viên tự thưởng cho bản thân." },
  { id: 7, name: "Siro Đá Bào", rarity: "R", tag: "food", image: "/cards/siro-da-bao.webp", stats: "Giải nhiệt não bộ 100%", description: "Buốt óc! Cắn một miếng là mọi ý tưởng đang bí bách cũng phải tan chảy. Vé về tuổi thơ cho tâm hồn nghệ sĩ." },
  { id: 8, name: "Cafe Sữa Đá", rarity: "SR", tag: "food", image: "/cards/cafe-sua-da.webp", stats: "Tốc độ vẽ x2, Tim đập x3", description: "Nước thánh của dân đồ họa. Không có ly này, layer Photoshop tự nhiên nặng gấp đôi." },
  { id: 9, name: "Cafe Vợt", rarity: "SSR", tag: "food", image: "/cards/cafe-vot.webp", stats: "Triệu hồi tinh thần Sài Gòn", description: "Đậm đà rớt nước mắt. Uống một ngụm là tỉnh tới tuần sau, deadline dồn tới cổ cũng xử lý mượt mà." },
  { id: 10, name: "Bánh Mì Thịt", rarity: "SSR", tag: "food", image: "/cards/banh-mi.webp", stats: "Full Giáp, Chống gục ngã", description: "Vũ khí chống đói tối thượng. Có thể ăn bằng một tay trong khi tay kia vẫn bấm phím tắt rào rào." },
  { id: 11, name: "Bánh Bao Trứng Muối", rarity: "SR", tag: "food", image: "/cards/banh-bao-trung.webp", stats: "May mắn +15%", description: "Cắn trúng trứng muối là điềm báo hôm nay render không bị crash máy!" },
  { id: 12, name: "Phở Đặc Biệt", rarity: "SSR", tag: "food", image: "/cards/pho.webp", stats: "Hồi sinh (Revive)", description: "Tinh hoa ẩm thực. Khói nghi ngút từ tô phở đủ sức kéo một Animator từ cõi chết (vì kiệt sức) trở về." },
  { id: 13, name: "Bún Bò Huế", rarity: "SSR", tag: "food", image: "/cards/bun-bo.webp", stats: "Sát thương Hỏa +50", description: "Cay nổ bát ngát. Ăn xong toát mồ hôi hột, tay múa Wacom nhanh như the Flash." },
  { id: 14, name: "Bánh Xèo", rarity: "SR", tag: "food", image: "/cards/banh-xeo.webp", stats: "Gắn kết đồng đội +30", description: "Món ăn team building. Không thể vừa ăn vừa vẽ, bắt buộc phải rời ghế và giao lưu với loài người." },
  { id: 15, name: "Bánh Tráng Trộn", rarity: "SSR", tag: "food", image: "/cards/banh-trang.webp", stats: "Nghiện ngập +100%", description: "Snack quốc dân. Chua cay mặn ngọt xoắn não, ăn xong miệng nhóp nhép tay vẫn không ngừng vẽ." },
  { id: 16, name: "Bò Bía", rarity: "SR", tag: "food", image: "/cards/bo-bia.webp", stats: "Agility (Nhanh nhẹn) +20", description: "Nhẹ bụng, thanh tao. Cuốn nhỏ gọn, chấm tương đen đậu phộng là có ngay năng lượng làm tiếp." },
  { id: 17, name: "Gỏi Khô Bò", rarity: "SR", tag: "food", image: "/cards/goi-kho-bo.webp", stats: "Reset vị giác", description: "Đu đủ giòn rụm kết hợp nước mắm chua ngọt. Ăn xong đầu óc bỗng nhiên nảy ra composition mới." },
  { id: 18, name: "Ô Mai, Xí Muội", rarity: "R", tag: "food", image: "/cards/xi-muoi.webp", stats: "Chống buồn ngủ thụ động", description: "Chua lè chua lét. Ngậm một viên là đôi mắt đang lim dim bỗng trợn trừng tỉnh táo." },
  { id: 19, name: "Kem Ký", rarity: "SR", tag: "food", image: "/cards/kem-ky.webp", stats: "Nostalgia (Hoài niệm) +50", description: "Món tráng miệng tập thể. Cắt ra từng miếng vuông vức, xua tan cái nóng hầm hập của dàn PC đang render." },
  { id: 20, name: "Bánh Da Lợn", rarity: "R", tag: "food", image: "/cards/banh-da-lon.webp", stats: "Độ mượt (Smoothness) +10", description: "Vừa ăn vừa bóc từng lớp y như đang thao tác quản lý Layer trên Photoshop." },
  { id: 21, name: "Nước Mía", rarity: "SR", tag: "food", image: "/cards/nuoc-mia.webp", stats: "Giải ảo diệu", description: "Thức uống giải sầu. Tương truyền uống 2 ly nước mía sẽ fix được mọi lỗi bug của After Effects." },
  { id: 22, name: "Mì Trứng Cà Chua", rarity: "SR", tag: "food", image: "/cards/mi-trung.webp", stats: "Cứu rỗi tài chính cuối tháng", description: "Món ăn sinh tồn khi Producer chưa kịp giải ngân tiền lương. Nhanh, gọn, lẹ và vẫn đủ chất." },
  { id: 23, name: "Nước Sting Đỏ", rarity: "SR", tag: "food", image: "/cards/sting.webp", stats: "Hyper-active trong 2h", description: "Lựa chọn của các game thủ và animator hệ 'Cú đêm'. Tăng động nhất thời nhưng dễ sập nguồn về sáng." },
  { id: 24, name: "Cơm Cháy Kho Quẹt", rarity: "SSR", tag: "food", image: "/cards/com-chay.webp", stats: "Phòng thủ tuyệt đối", description: "Giòn rụm, mặn mòi. Nhai rôm rốp át luôn cả tiếng chửi của sếp, giúp bảo vệ thính giác và tâm hồn." },
  { id: 25, name: "Nước Tăng Lực", rarity: "SR", tag: "food", image: "/cards/energy-drink.webp", stats: "Đổi tuổi thọ lấy Deadline", description: "Cấm chỉ định lạm dụng. Chỉ uống khi dự án còn 24h phải giao file cho đài truyền hình." },
  { id: 26, name: "Sâm Bông Cúc", rarity: "R", tag: "food", image: "/cards/sam-cuc.webp", stats: "Thanh lọc cơ thể", description: "Giảm nhiệt miệng, mát gan sau những chuỗi ngày ăn đồ hộp và mì gói trường kỳ." },
  { id: 27, name: "Chè", rarity: "R", tag: "food", image: "/cards/che.webp", stats: "Trí tuệ +5", description: "Ngọt ngào thanh mát. Đậu giúp bổ máu, nuôi dưỡng não bộ để nghĩ ra những cú twist kịch bản thần sầu." },
  { id: 28, name: "Sữa Đậu Nành", rarity: "R", tag: "food", image: "/cards/sua-dau.webp", stats: "Bình tâm tĩnh khí", description: "Uống nóng vào ban đêm giúp xoa dịu những linh hồn Animator đang hoang mang vì lạc mất file." },
  { id: 29, name: "Cháo Lòng", rarity: "R", tag: "food", image: "/cards/chao-long.webp", stats: "No ấm cõi lòng", description: "Combo cháo nóng và quẩy giòn. Xóa tan cái giá lạnh của máy lạnh văn phòng chạy max công suất." },
  { id: 30, name: "Hủ Tiếu Nam Vang", rarity: "R", tag: "food", image: "/cards/hu-tieu-nam-vang.webp", stats: "Sang chảnh +10", description: "Phiên bản nâng cấp của Hủ tiếu gõ. Đầy đủ thịt băm, tôm, gan... Ăn vào là thấy đời lên hương." },
  { id: 31, name: "Snack Cua", rarity: "R", tag: "food", image: "/cards/snack-cua.webp", stats: "Vui miệng, bẩn tay", description: "Món ăn chống chỉ định vừa bốc vừa xài Wacom nếu không muốn sếp gõ đầu vì làm hỏng thiết bị." },
  { id: 32, name: "Hoành Thánh", rarity: "R", tag: "food", image: "/cards/hoanh-thanh.webp", stats: "Tinh tế +15", description: "Lớp vỏ mỏng tang, nhân thịt đậm đà. Yêu cầu sự tinh tế khi ăn giống hệt lúc đi nét Lineart." },
  { id: 33, name: "Hột Vịt Lộn", rarity: "SSR", tag: "food", image: "/cards/hot-vit-lon.webp", stats: "Đảo Ngược Vận Xui", description: "Bùa chú tâm linh. Đang bị khách hàng reject? Ăn 2 trứng lập tức khách chốt luôn Draft 1!" },
  { id: 34, name: "Phá Lấu", rarity: "SR", tag: "food", image: "/cards/pha-lau.webp", stats: "Bánh mì hút nước", description: "Chấm miếng bánh mì vào nước cốt dừa béo ngậy. Mỹ vị trần gian giấu trong hẻm nhỏ Sài Gòn." },

  // ==========================================
  // VŨ TRỤ DỰ ÁN (PROJECT) - Máu và Nước mắt
  // ==========================================
  { id: 35, name: "Dự án 7.1.111", rarity: "SSR", tag: "project", image: "/cards/71111.webp", stats: "Kích hoạt IP Độc Quyền", description: "Mảnh ghép ký ức đầu tiên. Câu chuyện về những người trẻ TP.HCM nỗ lực sống với đam mê. Đứa con tinh thần của Ren Studio." },
  { id: 36, name: "Sơn Hà Xích Quỷ", rarity: "SSR", tag: "project", image: "/cards/son-ha.webp", stats: "Triệu hồi Tinh thần Việt", description: "Dự án Epic mang đậm chất sử thi kỳ ảo. Hứa hẹn sẽ đốt cháy hàng vạn giờ render và bòn rút toàn bộ Mana của team!" },

  // ==========================================
  // VŨ TRỤ NHÂN SỰ (JOB) - Những pháp sư thầm lặng
  // ==========================================
  { id: 37, name: "Original Creator", rarity: "SSR", tag: "job", image: "/cards/original-creator.webp", stats: "Quyền lực tối thượng (God Mode)", description: "Cha đẻ nguyên tác. Không trực tiếp vẽ nhưng sở hữu tuyệt chiêu 'Lắc đầu'. Một lời chê bai có thể khiến cả Studio thức trắng 3 đêm cày lại." },
  { id: 38, name: "Producer", rarity: "SSR", tag: "job", image: "/cards/producer.webp", stats: "Khiên chống đạn Tài Chính", description: "Boss chuyên lo tiền bạc và lịch trình. Bậc thầy nghệ thuật cân bằng giữa 'Ngân sách cạn kiệt' và 'Những giấc mơ hoang đường' của Đạo diễn." },
  { id: 39, name: "Executive Producer", rarity: "SSR", tag: "job", image: "/cards/exec-producer.webp", stats: "Triệu hồi Vốn Đầu Tư", description: "Đại gia ngồi trên đỉnh chuỗi thức ăn. Chỉ xuất hiện ở các buổi họp chiến lược lớn để quyết số tập và thả tiền." },
  { id: 40, name: "Director / Kantoku", rarity: "SSR", tag: "job", image: "/cards/director.webp", stats: "Tầm nhìn vô cực", description: "Thuyền trưởng của con tàu Anime. Chuyên gia bóp nát kịch bản thành hình ảnh, thi thoảng có buff ẩn 'Đổi ý phút 89'." },
  { id: 41, name: "Series Director", rarity: "SR", tag: "job", image: "/cards/series-director.webp", stats: "Kiểm soát hỗn loạn", description: "Cánh tay phải của Đạo diễn. Người giữ cho 12 tập phim không bị lệch tông dù qua tay hàng chục ông Đạo diễn tập khác nhau." },
  { id: 42, name: "Series Composition", rarity: "SR", tag: "job", image: "/cards/series-comp.webp", stats: "Thao túng cốt truyện", description: "Chuyên gia băm nát truyện tranh, gọt dũa light novel để nhét vừa vặn vào khung thời lượng 24 phút/tập mà không làm fan phẫn nộ." },
  { id: 43, name: "Screenwriter", rarity: "SR", tag: "job", image: "/cards/screenwriter.webp", stats: "Sáng tạo hội thoại", description: "Bàn phím ma thuật. Biến những gạch đầu dòng khô khan thành những câu thoại viral khiến Wibu khóc cạn nước mắt." },
  { id: 44, name: "Character Designer", rarity: "SSR", tag: "job", image: "/cards/char-designer.webp", stats: "Biến quạ thành công", description: "Người ban sự sống! Chuyên gia đơn giản hóa các nét vẽ rườm rà của nguyên tác để Animator có thể vẽ lại 10.000 lần mà không nhập viện." },
  { id: 45, name: "Sub Character Designer", rarity: "R", tag: "job", image: "/cards/sub-char-designer.webp", stats: "Năng suất đám đông", description: "Chuyên vẽ nhân vật quần chúng (Mob) và người qua đường. Dù chỉ lướt qua màn hình 0.5s nhưng vẫn phải vẽ kỹ từng nếp áo." },
  { id: 46, name: "Prop/Mecha Designer", rarity: "SR", tag: "job", image: "/cards/prop-designer.webp", stats: "Khổ dâm cơ khí", description: "Họa sĩ có đam mê mãnh liệt với bánh răng, ốc vít và súng ống. Vẽ mecha 2D là một hệ tư tưởng đòi hỏi độ trầm cảm cực cao." },
  { id: 47, name: "Art Director", rarity: "SSR", tag: "job", image: "/cards/art-director.webp", stats: "Mở rộng lãnh địa (Domain Expansion)", description: "Pháp sư kiến tạo thế giới. Quyết định màu sắc bầu trời và không khí của cả bộ phim. Sai 1 pixel background là rơi 1 giọt nước mắt." },
  { id: 48, name: "Color Designer", rarity: "SR", tag: "job", image: "/cards/color-designer.webp", stats: "Bậc thầy thị giác", description: "Người quyết định mã màu HEX cho mọi thứ. Da nhân vật lúc bị chiếu đèn neon khác với lúc chiều tà rực lửa thế nào đều do họ định đoạt." },
  { id: 49, name: "Director of Photography", rarity: "SR", tag: "job", image: "/cards/dop.webp", stats: "Lens Flare chói mù mắt", description: "Phù thủy ánh sáng. Chuyên gia thêm bụi bay, tia sáng, glow effect để biến một cảnh vẽ bình thường trở nên Epic như phim Hollywood." },
  { id: 50, name: "Storyboard Artist", rarity: "SSR", tag: "job", image: "/cards/storyboard.webp", stats: "Thấu thị góc máy", description: "Vẽ ra bản thiết kế của mọi khung hình (Ekonte). Bảng Storyboard mà vẽ khó hiểu thì đám Animator bên dưới chỉ có khóc thét." },
  { id: 51, name: "Episode Director", rarity: "SR", tag: "job", image: "/cards/ep-director.webp", stats: "Đốc công trực tiếp", description: "Đạo diễn của 1 tập phim. Chịu trách nhiệm chửi bới, thúc giục và duyệt bài để đảm bảo tập phim lên sóng đúng giờ G." },
  { id: 52, name: "Animation Director (Sakkan)", rarity: "SSR", tag: "job", image: "/cards/anim-director.webp", stats: "Gọt cằm, sửa mặt", description: "Thánh nhân sửa lỗi. Tẩy xóa hàng nghìn tờ giấy của các Animator cấp dưới để đảm bảo mặt nhân vật không bị biến dạng (On-model)." },
  { id: 53, name: "Chief Animation Director", rarity: "SSR", tag: "job", image: "/cards/chief-anim-dir.webp", stats: "Thiên thủ quan âm", description: "Trùm cuối của khâu vẽ. Quản lý cả đám Animation Director. Cầm bút đỏ sửa bài với tốc độ ánh sáng để cứu vãn chất lượng phim." },
  { id: 54, name: "Action Anim Director", rarity: "SR", tag: "job", image: "/cards/action-anim-dir.webp", stats: "Tăng 500% Frame Rate", description: "Quái vật chuyên trị cảnh đánh nhau, nổ tung, camera quay mòng mòng. Thường là những kẻ cuồng bạo lực thị giác." },
  { id: 55, name: "Layout Artist", rarity: "SSR", tag: "job", image: "/cards/layout-artist.webp", stats: "Luật xa gần tuyệt đối", description: "Vẽ phối cảnh phòng ốc, đường phố khớp chuẩn 100% với góc camera. Cầu nối sinh tử giữa Storyboard và Animation." },
  { id: 56, name: "Key Animator (Genga)", rarity: "SR", tag: "job", image: "/cards/key-animator.webp", stats: "Bàn tay ma thuật", description: "Lực lượng tinh nhuệ nhất. Chỉ vẽ những pose (dáng) chính, chốt chuyển động. Sống sót qua mùa deadline bằng đam mê và mì tôm." },
  { id: 57, name: "In-between Anim (Douga)", rarity: "SR", tag: "job", image: "/cards/inbetween.webp", stats: "Cỗ máy thời gian", description: "Kiếp cu li vẽ frame trung gian nối các Key pose lại cho mượt. Cày 100 tờ giấy chỉ đổi lấy 3 giây lướt qua trên màn hình." },
  { id: 58, name: "Douga Kensa", rarity: "SR", tag: "job", image: "/cards/douga-kensa.webp", stats: "Cặp mắt cú vọ", description: "Người canh cổng. Soi từng nét đứt, từng mảng màu bị hở trước khi chuyển qua khâu tô màu. Không lọt được hạt bụi nào qua mắt họ." },
  { id: 59, name: "Painter / Shiage", rarity: "SR", tag: "job", image: "/cards/ink-paint.webp", stats: "Click chuột vô hạn", description: "Đổ màu digital bằng công cụ Paint Bucket với tốc độ xé gió. Phải xử lý hàng ngàn file ảnh mỗi ngày." },
  { id: 60, name: "Background Artist", rarity: "SR", tag: "job", image: "/cards/bg-artist.webp", stats: "Kỹ năng Bob Ross +99", description: "Pháp sư vẽ mây trời và cây cỏ. Tách biệt khỏi sự hối hả của Animator, họ sống trong thế giới màu nước tĩnh lặng." },
  { id: 61, name: "3DCG Director", rarity: "SR", tag: "job", image: "/cards/3dcg.webp", stats: "Không gian 3 chiều", description: "Cứu tinh của những cảnh vạn người hay robot quá phức tạp. Chuyên gia ăn vạ khi phần mềm Maya/Blender đột ngột Crash." },
  { id: 62, name: "Compositor", rarity: "SR", tag: "job", image: "/cards/compositor.webp", stats: "Filter cứu vớt thế giới", description: "Gom hình nền, nhân vật, CG lại với nhau. Thêm tí sương mù, tí cháy nổ là cái frame cùi bắp lập tức lung linh như phép màu." },
  { id: 63, name: "Effects Animator", rarity: "SR", tag: "job", image: "/cards/effects-anim.webp", stats: "Bậc thầy nguyên tố", description: "Chuyên trị vẽ Lửa, Nước, Gió, Điện... bằng tay! Những kẻ có não bộ hoạt động khác người mới tưởng tượng ra được dòng chảy của năng lượng." },
  { id: 64, name: "Sound Director", rarity: "SR", tag: "job", image: "/cards/sound-dir.webp", stats: "Đôi tai vàng", description: "Bố già phòng thu. Hét ra lửa, chọn Seiyuu siêu chuẩn, và là người quyết định khi nào thì đoạn nhạc dồn dập được phép nổi lên." },
  { id: 65, name: "Seiyuu / Voice Actor", rarity: "SSR", tag: "job", image: "/cards/seiyuu.webp", stats: "Gào thét vỡ mic", description: "Thổi hồn vào nhân vật. Kỹ năng khóc lóc, la hét rách cổ họng mà vẫn giữ được độ moe/ngầu. Idol thực sự của giới Wibu." },
  { id: 66, name: "Composer", rarity: "SR", tag: "job", image: "/cards/composer.webp", stats: "Kích nổ cảm xúc", description: "Sáng tác BGM (Nhạc nền). Cảnh main bật mode đánh trùm mà không có nhạc của mấy ông này thì coi như vứt." },
  { id: 67, name: "Sound Effects (SFX)", rarity: "R", tag: "job", image: "/cards/sfx.webp", stats: "Bậc thầy tiếng động", description: "Ngồi vò bao nilon để tạo tiếng lửa cháy, gõ thanh sắt để tạo tiếng chém nhau. Nghệ nhân Foley thầm lặng." },
  { id: 68, name: "Sound Mixer", rarity: "SR", tag: "job", image: "/cards/sound-mixer.webp", stats: "Cân bằng âm dương", description: "Pha trộn giọng nói, nhạc nền và tiếng bùm chéo lại với nhau sao cho nhạc không đè mất tiếng nhân vật lúc đang giải thích chiêu thức." },
  { id: 69, name: "Production Manager", rarity: "R", tag: "job", image: "/cards/prod-manager.webp", stats: "Giày của Hermes", description: "Nghề 'Seisaku Desk'. Chạy bộ đi gõ cửa nhà từng Freelance Animator để đòi bài lúc 3 giờ sáng. Nghề bạo lực tinh thần bậc nhất." },
  { id: 70, name: "Production Coordinator", rarity: "SR", tag: "job", image: "/cards/prod-coord.webp", stats: "Thông dịch viên hoang mang", description: "Đứng giữa công ty mẹ ở Nhật và xưởng gia công ở Việt Nam. Ngày ngày trả lời email feedback với sự kiên nhẫn của một vị Phật." },
  { id: 71, name: "Line Producer", rarity: "SR", tag: "job", image: "/cards/line-producer.webp", stats: "Kế toán mặt sắt", description: "Quản lý dòng tiền chi tiết. Nếu thấy tập phim tự nhiên chiếu toàn cảnh nhân vật đứng nói chuyện không nhép miệng, thì là do ổng vừa cắt kinh phí đấy." },
  { id: 72, name: "Editor", rarity: "SR", tag: "job", image: "/cards/editor.webp", stats: "Thợ cắt tỉa thời gian", description: "Dựng phim. Khớp nối các cảnh quay lại với nhau, đảm bảo vừa vặn chính xác tới từng Frame hình so với audio lồng tiếng." },
  { id: 73, name: "Title/Text Designer", rarity: "R", tag: "job", image: "/cards/title-designer.webp", stats: "Font chữ quyền lực", description: "Xếp chữ cho Opening, Ending, thiết kế Logo. Chọn nhầm Font Comic Sans là đi tong cả một kiệt tác Dark Fantasy." },
  { id: 74, name: "Marketing/PR Staff", rarity: "SR", tag: "job", image: "/cards/marketing.webp", stats: "Tạo Hype (Hưng phấn)", description: "Chúa tể lùa gà, ông hoàng teaser. Đăng 1 tấm hình mờ căm lên X (Twitter) cũng đủ làm cộng đồng mạng phân tích thuyết âm mưu suốt 1 tháng." },
  { id: 75, name: "Licensing Manager", rarity: "SR", tag: "job", image: "/cards/licensing.webp", stats: "Gặt hái Đô la", description: "Chuyên bán bản quyền chiếu rạp, bán áo thun, figure, gối ôm (Dakimakura). Nguồn thu sống còn để studio có tiền làm tiếp season 2!" },
  // ==========================================
  // VŨ TRỤ ĐỒ NGHỀ & VẬT TƯ (GEAR) - Vũ khí của pháp sư
  // ==========================================
  { id: 76, name: "Wacom Intuos", rarity: "SR", tag: "gear", image: "/cards/intuos.webp", stats: "Mòn ngòi bút, Căng cơ cổ", description: "Bảng vẽ quốc dân của mọi sinh viên nghèo vượt khó. Kỹ năng 'Mắt nhìn màn hình - Tay quẹt mặt bàn' đạt cảnh giới tối cao." },
  { id: 77, name: "Wacom Cintiq", rarity: "SSR", tag: "gear", image: "/cards/cintiq.webp", stats: "Hút cạn ví tiền, Vẹo cột sống", description: "Giấc mơ của mọi họa sĩ! Vẽ trực tiếp lên màn hình bao phê, nhưng tới mùa đông thì nó kiêm luôn chức năng lò sưởi ấp trứng." },
  { id: 78, name: "iPad Pro + Apple Pencil", rarity: "SR", tag: "gear", image: "/cards/ipad-pro.webp", stats: "Độ sang chảnh +100", description: "Vũ khí mang ra quán cafe để 'tìm cảm hứng'. Thực tế là vẽ thì ít mà lướt Tóp Tóp, xem Netflix thì nhiều." },
  { id: 79, name: "Smartphone", rarity: "R", tag: "gear", image: "/cards/smartphone.webp", stats: "Ngón tay kim cương", description: "Công cụ chắp vá. Chỉ những dị nhân đích thực mới có thể dùng ngón trỏ vuốt màn hình bé tí mà vẫn ra được frame Douga." },
  { id: 80, name: "Giấy & Bút Chì", rarity: "SSR", tag: "gear", image: "/cards/paper-pencil.webp", stats: "Không có Ctrl+Z", description: "Nguồn cội của Animation! Cảm giác ngòi chì lướt trên giấy là thứ không công nghệ nào thay thế được. Sai thì lấy gôm chà rách giấy." },
  { id: 81, name: "Màu Nước & Cọ Vẽ", rarity: "SR", tag: "gear", image: "/cards/watercolor.webp", stats: "Nghệ thuật thuần túy", description: "Công cụ để tạo ra những Background chuẩn Ghibli. Đổ nhầm một giọt nước là đi tong tác phẩm 3 ngày cày cuốc." },
  { id: 82, name: "Thanh Ghim Giấy (Peg Bar)", rarity: "SR", tag: "gear", image: "/cards/peg-bar.webp", stats: "Khóa chặt không gian", description: "Báu vật thời tiền Digital. Thanh kim loại 3 chấu giúp ghim chặt các tờ giấy lại với nhau, lật tới lật lui check chuyển động mà không sợ lệch Frame." },
  { id: 83, name: "Tờ Timesheet", rarity: "SSR", tag: "gear", image: "/cards/timesheet.webp", stats: "Thao túng Thời không", description: "Bản án tử hình của Deadline! Tờ giấy ghi chú chi tiết từng Frame hình, âm thanh, camera. Người ngoài nhìn vào tưởng ma trận Matrix." },
  { id: 84, name: "Khung Hình 24 FPS", rarity: "SSR", tag: "gear", image: "/cards/24fps.webp", stats: "Mượt mắt, Khổ tay", description: "Chân lý tuyệt đối của Animation. 1 giây phim đổi lấy 24 bức vẽ. Khán giả xem lướt qua 3 giây, Animator ngồi vẽ khóc 3 tuần." },

  // ==========================================
  // VŨ TRỤ PHẦN MỀM (SOFTWARE) - Công cụ kiếm cơm
  // ==========================================
  { id: 85, name: "Adobe Photoshop", rarity: "SR", tag: "software", image: "/cards/photoshop.webp", stats: "Ngốn RAM vô độ", description: "Lão tướng đa năng. Dùng để vẽ concept, background, text, và chứa hàng trăm cái Layer vô danh mang tên 'Layer 1 copy 99'." },
  { id: 86, name: "Clip Studio Paint", rarity: "SSR", tag: "software", image: "/cards/clip-studio.webp", stats: "Chống rung tay (Stabilizer)", description: "Chân ái của họa sĩ Lineart. Brush thần thánh mượt mà đến mức một bàn tay đang run rẩy vì đói cũng đi được nét chuẩn." },
  { id: 87, name: "TVPaint Animation", rarity: "SSR", tag: "software", image: "/cards/tvpaint.webp", stats: "Đốt tiền bản quyền", description: "Bá chủ trong làng 2D Bitmap Animation. Cảm giác vẽ tay cực sướng, xịn xò vô cùng nhưng giá key bản quyền chát ngang ngửa một con xe tay ga." },
  { id: 88, name: "OpenToonz", rarity: "SR", tag: "software", image: "/cards/opentoonz.webp", stats: "Di sản mã nguồn mở", description: "Phần mềm Ghibli từng xài, nay thả cho giang hồ xài Free. Tính năng bao la bạt ngàn nhưng hay Crash bất tử, rèn luyện sự kiên nhẫn." },
  { id: 89, name: "Blender 3D", rarity: "SR", tag: "software", image: "/cards/blender.webp", stats: "Vạn vật khởi nguồn từ Cube", description: "Phần mềm 3D xịn nhất hệ Free. Cứu tinh cho những cảnh quay Mecha hay góc Camera bay lượn mà họa sĩ 2D khóc thét." },
  { id: 90, name: "Adobe Premiere", rarity: "SR", tag: "software", image: "/cards/premiere.webp", stats: "Máy chém thời gian", description: "Nơi các mảnh ghép rời rạc được Editor nhào nặn thành phim. Mọi lỗi lầm của khâu trước đều dồn hết về đây để fix." },
  { id: 91, name: "After Effects", rarity: "SSR", tag: "software", image: "/cards/after-effects.webp", stats: "Disk Cache Is Full", description: "Phù thủy nhãn thuật. Lấp lánh, cháy nổ, phép thuật... Render nửa ngày trời xong báo lỗi thiếu RAM. Ác mộng Compositor!" },

  // ==========================================
  // VŨ TRỤ STUDIO (STUDIO) - Các thánh địa Animation
  // ==========================================
  { id: 92, name: "Kyoto Animation (KyoAni)", rarity: "SSR", tag: "studio", image: "/cards/kyoani.webp", stats: "Thánh địa của Đôi Mắt", description: "Những thiên tài về ánh sáng, diễn xuất nhân vật tinh tế và những đôi mắt lấp lánh như chứa cả dải ngân hà. Đỉnh cao của slice-of-life." },
  { id: 93, name: "MAPPA", rarity: "SSR", tag: "studio", image: "/cards/mappa.webp", stats: "Deadline Địa Ngục", description: "Cỗ máy bùng nổ của ngành công nghiệp. Nhận 10 dự án bom tấn cùng lúc, phim ra bao mượt nhưng nhân viên thì không thấy ánh mặt trời." },
  { id: 94, name: "Studio Ghibli", rarity: "SSR", tag: "studio", image: "/cards/ghibli.webp", stats: "Vương Quốc Giấc Mơ", description: "Nơi tôn vinh giá trị vẽ tay truyền thống. Những cánh đồng gió thổi, những cỗ máy biết bay và đồ ăn anime nhìn ngon hơn cả ngoài đời thực." },
  { id: 95, name: "A-1 Pictures", rarity: "SR", tag: "studio", image: "/cards/a1pictures.webp", stats: "Cỗ máy cân mọi thể loại", description: "Mùa Anime nào cũng thấy mặt. Từ hành động, hài hước đến đẫm nước mắt, đưa kịch bản gì cũng thầu được tuốt luốt!" },
  // ==========================================
  // VŨ TRỤ SINH TỒN & TÂM LINH (Vẫn tính là GEAR / SOFTWARE / PROJECT)
  // ==========================================
  { id: 96, name: "Ghế Xếp / Túi Ngủ", rarity: "SR", tag: "gear", image: "/cards/sleeping-bag.webp", stats: "Khôi phục 30% Thể Lực", description: "Vật bất ly thân dưới gầm bàn của mọi Animator. Biến công ty thành ngôi nhà thứ hai (dù không ai muốn thế)." },
  { id: 97, name: "Thuốc Nhỏ Mắt (V.Rohto)", rarity: "SR", tag: "gear", image: "/cards/rohto.webp", stats: "Buff Tầm Nhìn Tuyệt Đối", description: "Bảo bối thần kỳ cứu rỗi đôi mắt lờ đờ sau 16 tiếng nhìn chằm chằm vào màn hình máy tính." },
  { id: 98, name: "Miếng Dán Salonpas", rarity: "R", tag: "gear", image: "/cards/salonpas.webp", stats: "Kháng Sát Thương Cột Sống", description: "Hương thơm đặc trưng của các studio Animation. Dán một miếng vào lưng là có thể ngồi vẽ tiếp thêm 5 tiếng." },
  { id: 99, name: "Bàn Lightbox (Xuyên Sáng)", rarity: "SSR", tag: "gear", image: "/cards/lightbox.webp", stats: "Tăng 200% Độ Chính Xác", description: "Bàn vẽ có đèn hắt sáng từ dưới lên. Biểu tượng tối thượng của dân vẽ 2D truyền thống trên giấy." },
  { id: 100, name: "Bàn Phím Cơ (Blue Switch)", rarity: "SR", tag: "gear", image: "/cards/mech-keyboard.webp", stats: "Gây Sát Thương Âm Thanh", description: "Gõ lạch cạch vang vọng cả văn phòng để sếp biết mình đang làm việc rất năng suất (hoặc đang chat Discord)." },
  { id: 101, name: "Server NAS (Ổ cứng mạng)", rarity: "SSR", tag: "gear", image: "/cards/nas-server.webp", stats: "Trái Tim Của Studio", description: "Nơi lưu trữ toàn bộ sinh mệnh của dự án. Nếu cái máy này nhấp nháy đèn đỏ báo lỗi, cả công ty sẽ ngừng thở." },

  // --- Các khái niệm / Quy trình ---
  { id: 102, name: "Phím Tắt Ctrl + S", rarity: "SSR", tag: "software", image: "/cards/ctrl-s.webp", stats: "Bản Năng Sinh Tồn", description: "Thao tác tay vô thức mỗi 3 giây. Những kẻ quên dùng ma pháp này đều đã bị đào thải khỏi ngành đồ họa." },
  { id: 103, name: "File: FINAL_v3_CHOT_FIX.psd", rarity: "SR", tag: "software", image: "/cards/final-file.webp", stats: "Lời Nói Dối Kinh Điển", description: "Không bao giờ có file nào thực sự là Final. Chắc chắn sẽ có thêm v4, v5 cho đến khi sếp gật đầu." },
  { id: 104, name: "Súp Điện", rarity: "SSR", tag: "project", image: "/cards/blackout.webp", stats: "Hủy Diệt Mọi Nỗ Lực (Debuff)", description: "Trùm cuối ẩn. Một cú sập nguồn không báo trước có thể tiễn 4 tiếng ngồi vẽ chưa kịp Save về cõi hư vô." },
  { id: 105, name: "Retake", rarity: "SR", tag: "project", image: "/cards/retake.webp", stats: "Trầm Cảm +100", description: "Tờ giấy Animation bị Đạo diễn hoặc Sakkan trả về với chi chít nét bút đỏ khoanh tròn bắt sửa lại. Nhìn là muốn khóc." },

  // --- Nhân sự mở rộng ---
  { id: 106, name: "Thực Tập Sinh (Intern)", rarity: "R", tag: "job", image: "/cards/intern.webp", stats: "Tràn Trề Năng Lượng (+10 Vui vẻ)", description: "Sinh vật ngây thơ, mắt còn sáng, gan còn khỏe, chưa bị tư bản và deadline bào mòn. Kiêm luôn chân chạy đi mua trà sữa." },
  { id: 107, name: "Freelance Animator", rarity: "SR", tag: "job", image: "/cards/freelancer.webp", stats: "Lính Đánh Thuê Cấp Cứu", description: "Sói cô độc làm việc tại nhà. Chuyên được Production Manager gọi điện lúc nửa đêm để nhờ vẽ gấp một cảnh phim cứu nguy." },
  { id: 108, name: "Nhà Tài Trợ (Sponsor)", rarity: "SSR", tag: "job", image: "/cards/sponsor.webp", stats: "Quyền Lực Kim Tiền", description: "Người rót vốn. Nếu họ bảo nhân vật chính phải uống hãng nước ngọt này trong cảnh chiến đấu, thì đạo diễn cũng phải gật đầu." },
  { id: 109, name: "Fan Hâm Mộ (Wibu)", rarity: "SSR", tag: "job", image: "/cards/fan-wibu.webp", stats: "Nuôi Sống Studio", description: "Người phán xử cuối cùng. Những người sẵn sàng chi tiền mua đĩa Blu-ray và Figure để Studio có kinh phí làm Season 2." },

  // --- Bổ sung Đồ ăn nhanh ---
  { id: 110, name: "Mì Ly", rarity: "R", tag: "food", image: "/cards/cup-noodle.webp", stats: "Thời Gian Chín: 3 Phút", description: "Đồ ăn của các vị thần Deadline. Vừa hút sợi mì xì xụp vừa dán mắt vào màn hình check lỗi Render." },
];