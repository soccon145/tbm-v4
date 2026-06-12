// lib/the-extras.ts — phần mở rộng cho 9 thể trạng theo feedback 6/6:
// (1) Vận động & thói quen (rút từ file 9-the-trang-noi-dung.docx — trước đây bị bỏ sót)
// (2) Lịch uống theo thể (KHÔNG gợi ý đồ ngọt/đường đỏ vào sáng sớm — ràng buộc từ client)
// (3) Sản phẩm EG gợi ý theo mục Ăn / Uống / Tập luyện (match từ catalog, format theo PDF mẫu Dương Hư)

import type { TheKey } from './data';

export interface TheProduct {
  name: string;   // tên sản phẩm + thương hiệu
  spec: string;   // quy cách
  price: string;  // giá hiển thị
  why: string;    // vì sao phù hợp với thể này
}

export interface VanDong {
  phuHop: string[];   // vận động phù hợp
  tranh: string[];    // nên tránh
  thoiQuen: string[]; // thói quen hàng ngày
}

export interface DrinkSlot { time: string; drink: string; }

export interface TheExtras {
  vanDong: VanDong;
  drinks: DrinkSlot[];
  products: { an: TheProduct[]; uong: TheProduct[]; tap: TheProduct[] };
}

export const THE_EXTRAS: Record<TheKey, TheExtras> = {
  duonghu: {
    vanDong: {
      phuHop: [
        'Đi bộ nhanh 20–30 phút/ngày, tốt nhất buổi sáng có nắng (hấp thu Dương khí tự nhiên)',
        'Yoga nhẹ / Khí công: hít thở sâu + động tác chậm, nạp Dương mà không tiêu hao',
        'Vỗ bát huyệt: vỗ nhẹ 8 vùng huyệt giúp khai thông kinh lạc, kích hoạt Dương khí',
        'Tắm nắng 10–15 phút mỗi sáng, để nắng chiếu vùng lưng (kinh Đốc mạch)',
      ],
      tranh: [
        'Tập cường độ cao gây đổ mồ hôi nhiều (HIIT, chạy bộ dài)',
        'Bơi nước lạnh, tắm nước lạnh',
        'Ngồi máy lạnh cả ngày không nghỉ',
        'Đi chân trần trên sàn lạnh',
      ],
      thoiQuen: [
        'Giữ ấm bụng và chân: đeo tất khi ngủ, mặc áo giữ ấm bụng',
        'Ngủ trước 23h: giờ Tý là lúc Dương khí bắt đầu sinh',
        'Massage bụng trước ngủ: xoa theo chiều kim đồng hồ 36 vòng',
        'Ngâm chân nước ấm 15–20 phút trước ngủ, thêm gừng hoặc ngải cứu',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm pha vài lát gừng tươi: khởi động Dương khí (không thêm đường)' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà trần bì ấm sau ăn: hỗ trợ tiêu hoá, điều hoà khí' },
      { time: '🌤️ Chiều 15–16h', drink: 'Nước kỷ tử + táo đỏ ngâm ấm, hoặc trà gừng đường đỏ: bồi bổ nhẹ' },
      { time: '🌙 Tối 19–20h', drink: 'Mật ong gừng pha nước ấm: ấm bụng, dịu họng trước ngủ' },
    ],
    products: {
      an: [
        { name: 'Đường đỏ táo đỏ gừng — Yunniang Shi Ji', spec: 'Hộp 500g - 18 viên', price: '320.000đ', why: 'Kết hợp 3 vị ấm nhất trong Đông y, hỗ trợ làm ấm cơ thể và tuần hoàn máu. Dùng buổi trưa hoặc chiều.' },
        { name: 'Viên đường đỏ gừng mật ong — Renhe', spec: 'Hộp 200g', price: '180.000đ', why: 'Dịu cổ họng + ấm bụng, tiện mang theo, thay kẹo ngọt bằng viên dưỡng sinh.' },
      ],
      uong: [
        { name: 'Trần bì — Xing Lin Cao Tang', spec: 'Lon 100g', price: '120.000đ', why: 'Điều hoà khí, ấm bụng, giảm đầy hơi. Vị thuốc kinh điển cho người Dương Hư kèm tiêu hoá yếu.' },
        { name: 'Mật ong gừng — Po Chi Lam', spec: 'Hũ 300g', price: '220.000đ', why: 'Ấm từ gừng + dịu từ mật ong. Uống mỗi tối trước ngủ giúp ấm bụng, dịu họng.' },
        { name: 'Viên đường mía gừng — Yunniang Shi Ji', spec: 'Hộp 300g', price: '190.000đ', why: 'Pha nhanh 30 giây thành ly trà gừng ấm. Dùng buổi trưa hoặc chiều.' },
      ],
      tap: [
        { name: 'Cây vỗ bát huyệt — 48cm', spec: 'Dụng cụ vỗ kinh lạc', price: '120.000đ', why: 'Vỗ nhẹ 8 vùng huyệt mỗi tối 5–10 phút, khai thông kinh lạc, kích hoạt Dương khí.' },
        { name: 'Miếng dán ấm tử cung — Renhe', spec: 'Túi 10 cái', price: '180.000đ', why: 'Giữ ấm vùng bụng dưới, đặc biệt khi ngồi máy lạnh hoặc trong kỳ kinh.' },
        { name: 'Miếng dán gừng — Nanjing Tong Ren Tang', spec: 'Hộp 12 miếng', price: '80.000đ', why: 'Dán vùng lưng dưới (Mệnh Môn) trước ngủ, làm ấm Thận Dương, giảm đau mỏi.' },
        { name: 'Dầu massage ngải cứu & gừng — North China', spec: 'Chai 500ml', price: '160.000đ', why: 'Massage bàn chân, bụng, lưng mỗi tối, làm ấm kinh lạc.' },
      ],
    },
  },

  khihu: {
    vanDong: {
      phuHop: [
        'Đi bộ nhẹ 15–30 phút/ngày: kích hoạt lưu thông Khí mà không gây mệt',
        'Bài tập thở: hít sâu bằng mũi, thở ra chậm — tăng Phế Khí trực tiếp',
        'Yoga nhẹ / giãn cơ: giúp Khí lưu thông đều',
      ],
      tranh: [
        'Tập nặng khi đang mệt',
        'Cardio cường độ cao',
        'Tập đến mức kiệt sức (đang thiếu Khí, tập quá sẽ thiếu thêm)',
      ],
      thoiQuen: [
        'Ngủ đủ và đúng giờ: Khí phục hồi mạnh nhất khi ngủ',
        'Không bao giờ bỏ bữa sáng: nguồn nạp Khí quan trọng nhất trong ngày',
        'Không làm việc liên tục quá 2–3 giờ, luôn có khoảng nghỉ ngắn',
        'Tránh làm nhiều việc cùng lúc: đa nhiệm khiến Khí phân tán',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Nước ấm + bữa sáng đầy đủ (cháo nóng, bột ngũ cốc): nạp Khí đầu ngày' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà táo hoàng kỳ ấm: bổ Khí giữa ngày' },
      { time: '🌤️ Chiều 14–16h', drink: 'Trà nhân sâm long nhãn (trước 16h để không ảnh hưởng giấc ngủ)' },
      { time: '🌙 Tối 20–22h', drink: 'Nước ấm hoặc sữa ấm: nhẹ bụng, hỗ trợ ngủ sâu' },
    ],
    products: {
      an: [
        { name: 'Hoàng Kỳ — Yunnan Bai Yao', spec: 'Lát sấy khô', price: '220.000đ', why: 'Hoàng kỳ là vị bổ Khí số 1 trong Đông y. Nấu canh, hầm gà hoặc hãm nước uống.' },
        { name: 'Bột 7 loại hạt đỏ — Laojinmofang', spec: 'Hộp bột ăn sáng', price: '250.000đ', why: 'Bữa sáng bổ khí huyết nhanh gọn. Người Khí Hư tuyệt đối không được bỏ bữa sáng.' },
      ],
      uong: [
        { name: 'Trà táo hoàng kỳ — Tongrentang', spec: 'Túi 80g - 10 gói', price: '220.000đ', why: 'Táo đỏ + hoàng kỳ bổ Khí, vị ngọt dịu tự nhiên, ấm nhẹ dễ uống hằng ngày.' },
        { name: 'Trà nhân sâm hoa hồng long nhãn — Yunniang Shiji', spec: 'Hộp 100g - 10 gói', price: '120.000đ', why: 'Nhân sâm bổ khí, long nhãn dưỡng tâm. Uống sáng hoặc trưa, tránh buổi tối.' },
      ],
      tap: [
        { name: 'Ngâm chân + chậu gấp gọn', spec: 'Túi thảo dược 30 gói + chậu', price: '320.000đ', why: 'Ngâm chân tối giúp ngủ sâu hơn. Khí phục hồi mạnh nhất trong giấc ngủ.' },
        { name: 'Búa ngải cứu — 31cm', spec: 'Dụng cụ gõ thư giãn', price: '120.000đ', why: 'Gõ nhẹ vai lưng chân cuối ngày, kích hoạt khí huyết mà không tốn sức.' },
      ],
    },
  },

  amhu: {
    vanDong: {
      phuHop: [
        'Yoga, thiền: hạ nhiệt, ổn định thần kinh',
        'Đi bộ nhẹ buổi sáng sớm hoặc chiều mát: không làm hao dịch',
        'Bài tập thở chậm, sâu: điều hoà nội nhiệt',
      ],
      tranh: [
        'Tập cường độ cao (HIIT, cardio nặng)',
        'Tập dưới trời nắng gắt',
        'Vận động gây mất nước nhiều (mất mồ hôi = mất thêm Âm)',
      ],
      thoiQuen: [
        'Ngủ trước 23h (quan trọng nhất): thời gian vàng để phục hồi Âm',
        'Giữ tinh thần ổn định: cảm xúc quá mạnh sinh nội nhiệt',
        'Hạn chế điện thoại ban đêm: ánh sáng + kích thích thần kinh làm hao Âm',
        'Giữ môi trường ngủ mát, dễ chịu',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm, uống đều trong ngày, không đợi khát mới uống' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà hoa cúc lê tuyết: sinh tân, làm dịu từ bên trong' },
      { time: '🌤️ Chiều 15–17h', drink: 'Trà ngọc trúc kỷ tử: dưỡng Âm, dịu cảm giác nóng chiều tối' },
      { time: '🌙 Tối 19–21h', drink: 'Nước ấm hoặc canh nhẹ. Tránh trà kích thích, cay nóng buổi tối' },
    ],
    products: {
      an: [
        { name: 'Dâu tằm sấy — Xing Lin Cao Tang', spec: 'Túi sấy khô', price: '150.000đ', why: 'Dâu tằm tư âm dưỡng huyết, ăn vặt thay kẹo ngọt, hợp người khô da.' },
        { name: 'Hắc kỷ tử — Xing Lin Cao Tang', spec: 'Túi sấy khô', price: '180.000đ', why: 'Bổ Thận Âm, hợp người nóng trong, ngủ không sâu.' },
        { name: 'Cao lê la hán quả — Tong Ren Tang', spec: 'Hũ cao', price: '220.000đ', why: 'Nhuận phế sinh tân, giảm khô họng rõ rệt. Đúng nhu cầu "thêm dưỡng chất, không chỉ thêm nước".' },
      ],
      uong: [
        { name: 'Trà hoa cúc kỷ tử ngọc trúc — Laojinmofang', spec: 'Túi 120g - 20 gói', price: '150.000đ', why: 'Ngọc trúc + hoài sơn dưỡng Âm, hoa cúc làm dịu. Công thức chuẩn cho Âm Hư.' },
        { name: 'Trà hoa cúc lê tuyết — Huilongtang', spec: 'Hộp 90g - 15 gói', price: '100.000đ', why: 'Lê tuyết sinh tân làm mát từ bên trong, vị ngọt thanh tự nhiên.' },
      ],
      tap: [
        { name: 'Bộ gua sha mặt (ngọc nhân tạo)', spec: 'Bộ 2 món', price: '160.000đ', why: 'Massage mặt với dầu dưỡng vài phút mỗi ngày, hỗ trợ da khô từ bên ngoài.' },
        { name: 'Lược gỗ massage da đầu', spec: 'Gỗ tự nhiên', price: '70.000đ', why: 'Chải đầu trước ngủ giúp thư giãn, dễ vào giấc. Âm phục hồi khi ngủ trước 23h.' },
      ],
    },
  },

  damthap: {
    vanDong: {
      phuHop: [
        'Đi bộ nhanh 30–45 phút/ngày: cực kỳ hiệu quả để giảm Đàm Thấp',
        'Cardio nhẹ đến trung bình: đốt năng lượng dư thừa',
        'Tập đều đặn mỗi ngày (đều quan trọng hơn nặng)',
      ],
      tranh: [
        'Ngồi lâu không vận động',
        'Ăn xong nằm ngay',
        'Lối sống quá tĩnh',
      ],
      thoiQuen: [
        'Duy trì giờ ăn cố định: giúp Tỳ hoạt động ổn định',
        'Không ăn khuya: giảm tích tụ qua đêm',
        'Ăn đến 70–80% no, sau ăn đi lại nhẹ 10–15 phút',
        'Uống nước ấm thay nước lạnh: hỗ trợ tiêu hoá',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Nước ấm pha lát gừng tươi: đánh thức Tỳ, hỗ trợ chuyển hoá' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà trần bì hoặc phục linh sau ăn: lý khí, giảm đầy bụng' },
      { time: '🌤️ Chiều 15–17h', drink: 'Trà đậu đỏ ý dĩ: lợi thấp, giúp người nhẹ hơn' },
      { time: '🌙 Tối 19–20h', drink: 'Nước ấm. Không ăn khuya, không đồ uống ngọt buổi tối' },
    ],
    products: {
      an: [
        { name: 'Phục linh Vân Nam — Xing Lin Cao Tang', spec: 'Lát sấy khô', price: '135.000đ', why: 'Phục linh kiện Tỳ lợi thấp, vị thuốc chuẩn nhất cho Đàm Thấp. Nấu cháo, hầm canh.' },
        { name: 'Trần bì — Xing Lin Cao Tang', spec: 'Lon 100g', price: '120.000đ', why: 'Lý khí hoá đàm, giảm đầy bụng sau ăn. Thêm vào món kho, hãm nước.' },
      ],
      uong: [
        { name: 'Trà đậu đỏ ý dĩ khiếm thực — Yijiangnan', spec: 'Hộp 240g - 20 gói', price: '240.000đ', why: 'Đậu đỏ + ý dĩ là bài lợi thấp kinh điển. Dùng đều sẽ thấy người nhẹ hẳn.' },
        { name: 'Trà phục linh hoắc hương trần bì — Yibing Guandong', spec: 'Hộp trà túi lọc', price: '420.000đ', why: 'Hoắc hương hoá thấp + trần bì lý khí, đúng bài cho thể nặng nề, uể oải.' },
      ],
      tap: [
        { name: 'Lược chải toàn thân bản kim loại', spec: 'Dụng cụ cầm tay', price: '190.000đ', why: 'Kích thích tuần hoàn dưới da trước khi tắm, hỗ trợ phá tích tụ.' },
        { name: 'Túi ngâm chân khử ẩm — RUYI', spec: 'Túi 300g - 10 gói', price: '220.000đ', why: 'Ngâm chân thảo dược khử ẩm, hỗ trợ thoát Thấp qua kinh lạc bàn chân.' },
      ],
    },
  },

  thapnhiet: {
    vanDong: {
      phuHop: [
        'Đi bộ nhanh, đổ mồ hôi nhẹ: giúp thoát nhiệt',
        'Cardio vừa phải: hỗ trợ giảm tích tụ',
        'Tập sáng sớm hoặc chiều mát: tránh tăng nhiệt quá mức',
      ],
      tranh: [
        'Tập dưới trời nắng gắt',
        'Tập quá nặng làm cơ thể quá nóng',
        'Ngồi lâu không vận động',
      ],
      thoiQuen: [
        'Ngủ sớm trước 23h: giúp Can "xả nhiệt"',
        'Giữ tinh thần ổn định: tránh sinh thêm nhiệt từ cảm xúc',
        'Giữ môi trường sống thoáng mát',
        'Không ăn khuya: giảm gánh nặng tiêu hoá ban đêm',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm. Uống nước đều trong ngày, không uống nước đá' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà bồ công anh hoặc kim ngân hoa sau ăn: thanh nhiệt giải độc' },
      { time: '🌤️ Chiều 15–17h', drink: 'Trà cúc nụ: mát gan, dịu bức bối' },
      { time: '🌙 Tối 19–20h', drink: 'Nước ấm. Tuyệt đối tránh bia rượu buổi tối' },
    ],
    products: {
      an: [
        { name: 'Trà cúc nụ sấy khô — Xing Lin Cao Tang', spec: 'Túi sấy khô', price: '80.000đ', why: 'Hoa cúc thanh nhiệt. Hãm nước uống hoặc nấu chè đậu xanh hoa cúc.' },
      ],
      uong: [
        { name: 'Trà kim ngân hoa & rễ cây sậy — Yibing Guangdong', spec: 'Hộp trà túi lọc', price: '420.000đ', why: 'Kim ngân hoa thanh nhiệt giải độc, giảm nóng trong. Chuẩn bài cho Thấp Nhiệt.' },
        { name: 'Trà bồ công anh — Yunniang Shiji', spec: 'Hộp 50g - 10 gói', price: '120.000đ', why: 'Bồ công anh thanh nhiệt, hợp người hay nổi mụn viêm, miệng đắng.' },
        { name: 'Trà ngưu bàng kim ngân quyết minh tử — Xinglincaotang', spec: 'Hộp 300g - 20 gói', price: '210.000đ', why: 'Ngưu bàng + quyết minh tử mát gan, hỗ trợ làn da từ bên trong.' },
      ],
      tap: [
        { name: 'Dép massage ấn huyệt', spec: 'Dép đi trong nhà', price: '250.000đ', why: 'Kích thích huyệt bàn chân khi đi lại trong nhà, hỗ trợ chuyển hoá.' },
        { name: 'Lược chải toàn thân bản kim loại', spec: 'Dụng cụ cầm tay', price: '190.000đ', why: 'Hỗ trợ lưu thông, giải phóng cảm giác bí bách ngoài da.' },
      ],
    },
  },

  huyetu: {
    vanDong: {
      phuHop: [
        'Đi bộ nhanh: kích thích tuần hoàn toàn thân',
        'Yoga kéo giãn: mở các vùng dễ tắc (vai, hông)',
        'Bài tập nhẹ nhưng đều đặn: "liên tục" quan trọng hơn "nặng"',
      ],
      tranh: [
        'Ngồi lâu không vận động',
        'Nằm nhiều',
        'Lối sống quá tĩnh',
      ],
      thoiQuen: [
        'Ngồi lâu phải đứng dậy mỗi 60–90 phút',
        'Không để cơ thể bị lạnh kéo dài (lạnh = co mạch = tăng ứ)',
        'Massage vùng dễ ứ: vai, cổ, lưng',
        'Giữ tinh thần thoải mái, ngủ đủ giấc',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm + vài phút vận động nhẹ: đánh thức tuần hoàn' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà hoa hồng: hành khí hoạt huyết nhẹ nhàng' },
      { time: '🌤️ Chiều 14–16h', drink: 'Trà hồng sâm a giao (trước 16h): bổ huyết, hỗ trợ lưu thông' },
      { time: '🌙 Tối 19–21h', drink: 'Nước ấm + ngâm chân: giúp máu lưu thông trước khi ngủ' },
    ],
    products: {
      an: [
        { name: 'Đương quy — Yunnan Bai Yao', spec: 'Lát sấy khô', price: '480.000đ', why: 'Đương quy bổ huyết + hoạt huyết, vị thuốc đầu bảng cho Huyết Ứ. Hầm gà, nấu canh.' },
        { name: 'Nước ngũ hồng dưỡng huyết — Moxiaoji', spec: 'Hộp uống liền', price: '420.000đ', why: 'Bộ nguyên liệu đỏ dưỡng huyết, tiện dùng hằng ngày cho người bận rộn.' },
      ],
      uong: [
        { name: 'Trà Hồng Sâm A Giao Hoa Hồng — Laojinmofang', spec: '120g - 15 gói', price: '150.000đ', why: 'A giao bổ huyết + hoa hồng hành khí. Khí hành thì huyết hành.' },
        { name: 'Trà hoa hồng dâu tằm — Yijiangnan', spec: 'Hộp 120g - 15 gói', price: '290.000đ', why: 'Hoa hồng hoạt huyết nhẹ, vị dễ uống hằng ngày.' },
      ],
      tap: [
        { name: 'Cây vỗ bát huyệt — 48cm', spec: 'Dụng cụ vỗ kinh lạc', price: '120.000đ', why: 'Vỗ kinh lạc trực tiếp giải ứ. "Thuốc" tốt nhất của Huyết Ứ là vận động đều.' },
        { name: 'Dầu massage ngải cứu & gừng — North China', spec: 'Chai 500ml', price: '160.000đ', why: 'Massage vùng đau cố định mỗi tối, làm ấm và tan ứ tại chỗ.' },
        { name: 'Bộ gua sha mặt (ngọc nhân tạo)', spec: 'Bộ 2 món', price: '160.000đ', why: 'Cạo nhẹ giúp da sạm, vết thâm sáng dần nhờ lưu thông tốt hơn.' },
      ],
    },
  },

  khiuat: {
    vanDong: {
      phuHop: [
        'Đi bộ ngoài trời: cực kỳ hiệu quả cho Khí Uất',
        'Yoga, giãn cơ: mở vùng ngực, vai — nơi Khí dễ bị tắc',
        'Hoạt động thư giãn: không cần nặng, quan trọng là thoải mái',
      ],
      tranh: [
        'Ngồi lì một chỗ cả ngày',
        'Làm việc liên tục không nghỉ',
        'Môi trường kín, bí, thiếu ánh sáng',
      ],
      thoiQuen: [
        'Không giữ cảm xúc trong người quá lâu: viết ra, nói ra, đi bộ cho thông',
        'Ngủ đúng giờ, tránh điện thoại trước ngủ',
        'Tạo khoảng nghỉ trong ngày để Khí "chạy lại"',
        'Tiếp xúc thiên nhiên khi có thể: giúp Can điều hoà Khí',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm + vài nhịp hít thở sâu trước khi bắt đầu ngày' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà hoa hồng trần bì: sơ Can lý khí, gỡ cảm giác nghẹn tức' },
      { time: '🌤️ Chiều 15–17h', drink: 'Trà cúc nụ: thư Can, dịu căng thẳng cuối ngày' },
      { time: '🌙 Tối 20–21h', drink: 'Nước ấm. Hạn chế cà phê và trà đậm sau 15h' },
    ],
    products: {
      an: [
        { name: 'Trần bì — Xing Lin Cao Tang', spec: 'Lon 100g', price: '120.000đ', why: 'Trần bì lý khí, món "gỡ kẹt" cơ bản nhất. Pha nước hoặc thêm vào món ăn.' },
      ],
      uong: [
        { name: 'Trà hoa hồng hoa trần bì dâu tằm — Xinshengtang', spec: 'Hộp 120g - 15 gói', price: '160.000đ', why: 'Hoa hồng sơ Can giải uất + trần bì lý khí. Đúng công thức cho Khí Uất.' },
        { name: 'Trà cúc nụ sấy khô — Xing Lin Cao Tang', spec: 'Túi sấy khô', price: '80.000đ', why: 'Hoa cúc thư Can, dịu căng thẳng. Hãm một ấm cuối giờ chiều.' },
      ],
      tap: [
        { name: 'Ngâm chân + chậu gấp gọn', spec: 'Túi thảo dược 30 gói + chậu', price: '320.000đ', why: 'Nghi thức "xả" cuối ngày: vừa thư giãn thần kinh vừa thông khí huyết.' },
        { name: 'Lược gỗ massage da đầu', spec: 'Gỗ tự nhiên', price: '70.000đ', why: 'Chải đầu giảm căng vùng đầu — nơi Khí Uất hay dồn lên gây đau căng.' },
        { name: 'Búa ngải cứu — 31cm', spec: 'Dụng cụ gõ thư giãn', price: '120.000đ', why: 'Gõ nhẹ vai lưng, mở vùng ngực vai — nơi Khí dễ bị tắc nhất.' },
      ],
    },
  },

  dacbam: {
    vanDong: {
      phuHop: [
        'Đi bộ: nhẹ nhàng, ổn định',
        'Tập thở: hỗ trợ Phế (hệ hô hấp) — tạng yếu nhất của Đặc Bẩm',
        'Vận động nhẹ, đều: tăng sức đề kháng tự nhiên',
      ],
      tranh: [
        'Tập trong môi trường ô nhiễm, nhiều bụi',
        'Tập quá sức',
        'Thay đổi môi trường đột ngột (nóng sang lạnh)',
      ],
      thoiQuen: [
        'Hiểu rõ cơ thể mình hợp và không hợp với gì (yếu tố quan trọng nhất)',
        'Duy trì lối sống ổn định, hạn chế thay đổi đột ngột',
        'Giữ vệ sinh cá nhân và môi trường sống, giảm tác nhân kích thích',
        'Ngủ đủ giấc để hỗ trợ hệ miễn dịch',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm. Nguyên tắc: chỉ dùng đồ uống đã biết là hợp' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà đại cúc kỷ tử: chỉ 2 thành phần, dễ kiểm soát phản ứng' },
      { time: '🌤️ Chiều 15–17h', drink: 'Trà lê tuyết hoa nhài (nếu đã thử và hợp): thanh nhẹ dễ chịu' },
      { time: '🌙 Tối 19–21h', drink: 'Nước ấm. Không thử đồ uống lạ vào buổi tối' },
    ],
    products: {
      an: [
        { name: 'Bột củ sen táo tàu nấm tuyết — Qin Lao Tai', spec: 'Hộp bột', price: '320.000đ', why: 'Củ sen tính bình, không nóng không lạnh, an toàn cho cơ địa nhạy cảm.' },
        { name: 'Kỷ tử đỏ sấy khô — Xing Lin Cao Tang', spec: 'Túi sấy khô', price: '135.000đ', why: 'Một vị duy nhất, dễ kiểm soát phản ứng. Nguyên tắc "ít thành phần" của Đặc Bẩm.' },
      ],
      uong: [
        { name: 'Trà đại cúc kỷ tử — Gongyuan', spec: 'Hộp 30 bông', price: '240.000đ', why: 'Chỉ 2 thành phần đơn giản, nhẹ nhàng, dễ theo dõi cơ thể phản ứng.' },
        { name: 'Trà lê tuyết hoa nhài — Xinglincaotang', spec: 'Túi 80g - 10 gói', price: '160.000đ', why: '2 vị quen thuộc, thanh nhẹ dễ tiếp nhận với cơ địa nhạy cảm.' },
      ],
      tap: [
        { name: 'Lược gỗ massage da đầu', spec: 'Gỗ tự nhiên', price: '70.000đ', why: 'Gỗ tự nhiên không tĩnh điện, dịu nhẹ với người da nhạy cảm.' },
        { name: 'Chậu ngâm chân gấp gọn', spec: 'Chậu 2 lớp cách nhiệt', price: '320.000đ', why: 'Ngâm chân nước ấm thường (không thảo dược): tăng đề kháng mà không lo kích ứng.' },
      ],
    },
  },

  binhhoa: {
    vanDong: {
      phuHop: [
        'Kết hợp cardio nhẹ + sức mạnh + giãn cơ: cân bằng toàn diện',
        'Tập đều đặn 4–5 ngày/tuần, không cần quá nặng',
      ],
      tranh: [
        'Tập quá sức kéo dài',
        'Lối sống quá tĩnh',
        'Thay đổi chế độ sinh hoạt đột ngột',
      ],
      thoiQuen: [
        'Ngủ trước 23h, giữ nhịp ngủ - thức đều đặn',
        'Giữ nhịp sống ổn định: cơ thể thích "đều đặn" hơn "hoàn hảo"',
        'Ăn uống theo cảm nhận cơ thể, không ép không bỏ mặc',
        'Điều chỉnh ngay khi có dấu hiệu lệch: bắt đầu lạnh thì tăng đồ ấm, bắt đầu nóng thì giảm cay',
      ],
    },
    drinks: [
      { time: '🌅 Sáng 6–8h', drink: 'Ly nước ấm khởi động ngày mới' },
      { time: '☀️ Trưa 11–13h', drink: 'Trà theo mùa: mùa nóng chọn vị thanh, mùa lạnh chọn vị ấm' },
      { time: '🌤️ Chiều 15–17h', drink: 'Một vị trà mới trong hộp 30 vị: đa dạng không cực đoan' },
      { time: '🌙 Tối 20–22h', drink: 'Nước ấm, giữ thói quen đều đặn trước ngủ' },
    ],
    products: {
      an: [
        { name: 'Bột 7 loại hạt đỏ — Laojinmofang', spec: 'Hộp bột ăn sáng', price: '250.000đ', why: 'Bữa sáng đủ chất, đa dạng nguyên liệu, đúng nguyên tắc cân bằng của Bình Hòa.' },
      ],
      uong: [
        { name: 'Blind Box 30 ngày 30 vị trà — HUA YI BEI', spec: 'Hộp 92g - 30 gói', price: '240.000đ', why: '15 vị thay đổi mỗi ngày: đa dạng, không cực đoan. Hợp nhất với thể Bình Hòa.' },
      ],
      tap: [
        { name: 'Dép massage ấn huyệt', spec: 'Dép đi trong nhà', price: '250.000đ', why: 'Duy trì kích thích huyệt đạo nhẹ nhàng mỗi ngày trong nhà.' },
        { name: 'Cây vỗ bát huyệt — 48cm', spec: 'Dụng cụ vỗ kinh lạc', price: '120.000đ', why: 'Vỗ kinh lạc định kỳ để giữ khí huyết luôn lưu thông.' },
      ],
    },
  },
};

// ─── 3 đích chuyển đổi cuối trang kết quả (thay Box thể trạng cũ) ──
export interface OfferTarget {
  id: string;
  eyebrow: string;
  name: string;
  desc: string;
  price: string;
  url?: string; // link xem chi tiết (nếu có trang riêng)
}

export const OFFER_TARGETS: OfferTarget[] = [
  {
    id: 'course',
    eyebrow: 'Khoá học',
    name: '15 Phút Dưỡng Sinh Đúng Trình Tự',
    desc: 'Học cách chăm sóc cơ thể theo đúng thể trạng của bạn, mỗi ngày chỉ 15 phút.',
    price: 'Từ 299.000đ',
    url: 'https://minh-trang.vercel.app/duong-sinh',
  },
  {
    id: 'tcm',
    eyebrow: 'Bộ dụng cụ',
    name: 'Bộ Dưỡng Sinh Nhập Môn',
    desc: 'Trọn bộ dụng cụ dưỡng sinh cho người mới: vỗ bát huyệt, gua sha, ngâm chân... Tặng kèm đệm ngải cứu điện.',
    price: '949.000đ',
    url: 'https://eg-boxset-catalog.vercel.app/',
  },
  {
    id: 'tra30',
    eyebrow: 'Blind Box',
    name: 'Set Mix 30 Ngày 30 Vị Trà',
    desc: 'Mỗi ngày một vị trà dưỡng sinh, 30 ngày đổi vị không trùng.',
    price: '240.000đ',
    url: '/set-tra',
  },
];

// 1 link đăng ký mua chung cho cả 3 (theo yêu cầu của Minh Trang)
export const REGISTER_URL = '/set-tra#dang-ky';
