// lib/the-theory.ts — phần lý thuyết ĐẦY ĐỦ cho từng thể, rút nguyên văn từ 9-the-trang-noi-dung.docx
// Mục đích: trang kết quả giải thích cặn kẽ (trao giá trị) TRƯỚC khi đề xuất sản phẩm.

import type { TheKey } from './data';

export interface TheorySign { sign: string; detail: string }
export interface TheoryCause { title: string; detail: string }
export interface TheoryMeo { title: string; detail: string }

export interface TheTheory {
  laGi: string[];          // các đoạn giải thích "thể X là gì"
  signsTitle: string;      // vd "6 dấu hiệu nhận biết hàng ngày"
  signs: TheorySign[];
  causesTitle: string;     // vd "Vì sao bạn trở thành thể Dương Hư?"
  causesIntro?: string;
  causes: TheoryCause[];
  nguyenTacAn: string;     // nguyên tắc cốt lõi của chế độ ăn
  meo: TheoryMeo[];        // mẹo thực tế áp dụng hàng ngày
}

export const THE_THEORY: Record<TheKey, TheTheory> = {
  duonghu: {
    laGi: [
      'Trong Y học cổ truyền, cơ thể con người được vận hành dựa trên hai yếu tố nền tảng là Âm và Dương. Âm đại diện cho phần vật chất, dịch thể, sự nuôi dưỡng và làm mát. Dương đại diện cho năng lượng, sự vận động, làm ấm và thúc đẩy mọi hoạt động.',
      'Bạn có thể hình dung đơn giản: Âm là "nhiên liệu", còn Dương là "ngọn lửa đốt nhiên liệu đó". Khi Dương đầy đủ, cơ thể ấm áp, tiêu hoá tốt, tuần hoàn mạnh, tinh thần có năng lượng.',
      'Khi Dương suy yếu (Dương Hư), cơ thể giống như một căn phòng thiếu lò sưởi giữa mùa đông: mọi thứ vẫn còn đó (Âm chưa mất) nhưng không có lực để vận hành.',
      'Đây là một trạng thái mất cân bằng, không phải bệnh riêng lẻ. Nếu kéo dài, nó có thể dẫn đến rối loạn tiêu hoá, suy giảm miễn dịch, rối loạn nội tiết và mệt mỏi mãn tính.',
      'Trong Đông y, Dương Hư thường liên quan nhiều đến Tỳ Dương (tiêu hoá) và Thận Dương (năng lượng gốc của cơ thể).',
    ],
    signsTitle: '6 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Tay chân lạnh', detail: 'Ngay cả khi người khác thấy bình thường, bạn vẫn thấy lạnh. Đặc biệt rõ vào sáng sớm hoặc tối.' },
      { sign: 'Sợ lạnh rõ rệt', detail: 'Luôn muốn mặc thêm áo, tránh gió, thích uống nước ấm.' },
      { sign: 'Tiêu hoá yếu', detail: 'Dễ đầy bụng, ăn đồ lạnh là đau bụng hoặc tiêu chảy.' },
      { sign: 'Phân lỏng, không thành khuôn', detail: 'Đây là dấu hiệu rất đặc trưng của Tỳ Dương yếu.' },
      { sign: 'Mệt mỏi vào buổi sáng', detail: 'Ngủ dậy không thấy hồi phục năng lượng, người uể oải.' },
      { sign: 'Lưỡi nhạt, bệu, có dấu răng hai bên', detail: 'Do khí và Dương không đủ để "giữ form" cho lưỡi.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Dương Hư?',
    causesIntro: 'Dương Hư không tự nhiên xuất hiện. Nó là kết quả của thói quen tích lũy lâu dài.',
    causes: [
      { title: 'Ăn nhiều đồ lạnh, đồ sống', detail: 'Nước đá, trà sữa lạnh, salad, trái cây lấy từ tủ lạnh ăn ngay. Trong Đông y, Tỳ (hệ tiêu hoá) "sợ lạnh". Ăn lạnh lâu ngày làm Tỳ Dương bị tổn thương, sinh Dương Hư.' },
      { title: 'Ngồi máy lạnh quá nhiều', detail: 'Môi trường lạnh buộc cơ thể liên tục tiêu hao Dương khí để giữ ấm. Kéo dài sẽ "hết củi", Dương suy.' },
      { title: 'Thức khuya, làm việc quá sức', detail: 'Sau 23h là lúc cơ thể bắt đầu tái tạo Dương khí. Nếu bạn thức, không những không nạp thêm mà còn tiêu hao thêm, ảnh hưởng trực tiếp đến Thận Dương (gốc năng lượng).' },
      { title: 'Ít vận động', detail: 'Dương có đặc tính là động. Càng ít vận động, Dương càng trì trệ, lâu dần từ "trệ" chuyển thành "hư".' },
      { title: 'Cơ thể suy yếu sau thời gian dài', detail: 'Sau bệnh, sau sinh, sau stress kéo dài, cơ thể không còn đủ "lửa" để duy trì hoạt động.' },
    ],
    nguyenTacAn: 'Bổ sung và bảo vệ Dương khí bằng thực phẩm tính ấm.',
    meo: [
      { title: 'Buổi sáng', detail: 'Uống 1 ly nước ấm (có thể thêm vài lát gừng) để "khởi động Dương khí".' },
      { title: 'Bữa trưa', detail: 'Ăn cơm nóng + canh nóng + protein, hỗ trợ Tỳ Dương mạnh nhất.' },
      { title: 'Buổi tối', detail: 'Ăn trước 19h để tránh tiêu hoá yếu ban đêm.' },
      { title: 'Khi nấu ăn', detail: 'Luôn ưu tiên gừng, hành, tỏi — đây là "gia vị dưỡng Dương" đơn giản nhất.' },
    ],
  },

  khihu: {
    laGi: [
      'Trong Y học cổ truyền, Khí được xem là dạng năng lượng vô hình nhưng cực kỳ quan trọng. Khí thúc đẩy hoạt động của các tạng phủ, giữ cho máu và dịch không "rò rỉ" ra ngoài, và bảo vệ cơ thể trước tác nhân bên ngoài (miễn dịch theo cách hiểu hiện đại).',
      'Bạn có thể hình dung: Khí là dòng điện, cơ thể là hệ thống máy móc. Máy móc vẫn còn nguyên (không hỏng) nhưng dòng điện yếu, nên chạy chậm, lúc được lúc không.',
      'Khí Hư khác gì Dương Hư? Khí Hư là thiếu lực vận hành (mệt, yếu, hụt hơi). Dương Hư là thiếu nhiệt (lạnh, sợ lạnh, tiêu hoá lạnh). Nhiều người bị cả hai cùng lúc, nhưng Khí Hư thường là giai đoạn sớm hơn.',
      'Khí Hư thường gặp nhất ở Tỳ Khí hư (ảnh hưởng tiêu hoá, hấp thu), Phế Khí hư (dễ hụt hơi, dễ cảm) và Thận Khí hư (suy giảm năng lượng tổng thể).',
    ],
    signsTitle: '7 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Dễ mệt, thiếu sức rõ rệt', detail: 'Làm việc nhẹ cũng thấy mệt, không có "độ bền".' },
      { sign: 'Nói nhỏ, ít hơi, không muốn nói nhiều', detail: 'Nói một lúc là mệt, phải nghỉ.' },
      { sign: 'Hụt hơi khi vận động nhẹ', detail: 'Leo cầu thang, đi nhanh một chút là phải thở sâu.' },
      { sign: 'Ra mồ hôi dễ, kể cả khi không nóng', detail: 'Chỉ cần đi lại nhẹ cũng có mồ hôi, do Khí không "giữ" được.' },
      { sign: 'Dễ bị cảm, dễ nhiễm lạnh', detail: 'Thay đổi thời tiết là dễ bệnh, liên quan Phế Khí yếu.' },
      { sign: 'Ăn không ngon, dễ đầy bụng', detail: 'Tỳ Khí yếu nên tiêu hoá kém, hấp thu kém, càng thiếu năng lượng.' },
      { sign: 'Lưỡi nhạt, rêu trắng mỏng', detail: 'Dấu hiệu điển hình của trạng thái thiếu năng lượng.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Khí Hư?',
    causesIntro: 'Khí Hư thường xuất phát từ việc cơ thể không được "nạp đủ" hoặc bị "tiêu hao quá mức".',
    causes: [
      { title: 'Ăn uống không đủ hoặc không đều', detail: 'Bỏ bữa (đặc biệt bữa sáng), ăn kiêng quá mức, ăn thất thường. Tỳ không có nguyên liệu để sinh Khí, lâu dần thành Khí Hư.' },
      { title: 'Làm việc quá sức, không nghỉ ngơi', detail: 'Làm liên tục nhiều giờ, không có thời gian hồi phục. Khí bị tiêu hao nhanh hơn tốc độ tái tạo.' },
      { title: 'Bệnh kéo dài', detail: 'Sau ốm, sau sốt, sau thời gian cơ thể suy yếu, Khí bị "rút cạn" mà chưa được bù lại.' },
      { title: 'Ít vận động', detail: 'Nghe hơi ngược, nhưng vận động nhẹ giúp sinh Khí. Không vận động thì Khí không được kích hoạt và dần yếu đi.' },
      { title: 'Suy nghĩ nhiều, stress kéo dài', detail: 'Trong Đông y, Tỳ rất dễ bị ảnh hưởng bởi suy nghĩ quá mức. Nghĩ nhiều làm Tỳ yếu, sinh Khí kém.' },
    ],
    nguyenTacAn: 'Bổ Khí một cách nhẹ nhàng, dễ hấp thu — không quá nặng, không quá kích thích.',
    meo: [
      { title: 'Không bao giờ bỏ bữa sáng', detail: 'Đây là "nguồn nạp Khí" quan trọng nhất trong ngày.' },
      { title: 'Chia nhỏ bữa ăn nếu dễ mệt', detail: 'Thay vì 3 bữa lớn, có thể ăn 4–5 bữa nhỏ.' },
      { title: 'Ăn chậm, nhai kỹ', detail: 'Giúp Tỳ giảm gánh nặng, sinh Khí tốt hơn.' },
      { title: 'Không làm việc liên tục quá 2–3 giờ', detail: 'Luôn có khoảng nghỉ ngắn để "nạp lại năng lượng".' },
    ],
  },

  amhu: {
    laGi: [
      'Trong Y học cổ truyền, Âm đại diện cho dịch thể trong cơ thể (nước, huyết, tân dịch), khả năng nuôi dưỡng, làm mát, và sự ổn định "giữ ẩm" cho cơ thể.',
      'Bạn có thể hình dung: Âm là nước làm mát hệ thống, Dương là nhiệt và chuyển động. Khi Âm đầy đủ, cơ thể được làm mát tự nhiên, da dẻ đủ ẩm, giấc ngủ sâu, nội tạng vận hành êm.',
      'Khi Âm bị thiếu (Âm Hư), không phải là "thừa nhiệt từ bên ngoài" mà là thiếu cái để kiềm chế nhiệt bên trong. Giống như một động cơ thiếu nước làm mát: không cần chạy quá mạnh vẫn bị nóng.',
      'Âm Hư khác gì Dương Hư? Dương Hư là lạnh, thiếu nhiệt. Âm Hư là nóng, nhưng nóng do thiếu "làm mát". Một bên thiếu lửa, một bên thiếu nước.',
      'Âm Hư thường gặp ở Thận Âm hư (mất ngủ, nóng trong), Can Âm hư (khô mắt, dễ cáu) và Phế Âm hư (khô họng, ho khan).',
    ],
    signsTitle: '8 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Cảm giác nóng trong, nhất là chiều tối', detail: 'Không phải kiểu sốt, mà là nóng âm ỉ từ bên trong.' },
      { sign: 'Khô miệng, khô họng, hay khát nước', detail: 'Đặc biệt thích uống nước mát.' },
      { sign: 'Da khô, môi khô, dễ bong tróc', detail: 'Thiếu dịch nuôi dưỡng từ bên trong.' },
      { sign: 'Mất ngủ hoặc ngủ không sâu', detail: 'Khó vào giấc, dễ tỉnh giữa đêm.' },
      { sign: 'Ra mồ hôi trộm ban đêm', detail: 'Ngủ dậy thấy ướt lưng, cổ.' },
      { sign: 'Nóng lòng bàn tay, bàn chân', detail: 'Ngũ tâm phiền nhiệt — dấu hiệu rất đặc trưng của Âm Hư.' },
      { sign: 'Táo bón, phân khô', detail: 'Do thiếu dịch làm trơn đường ruột.' },
      { sign: 'Lưỡi đỏ, ít rêu hoặc không có rêu', detail: 'Dấu hiệu điển hình của thiếu Âm.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Âm Hư?',
    causesIntro: 'Âm Hư là kết quả của mất dịch lâu dài mà không được bù lại.',
    causes: [
      { title: 'Thức khuya kéo dài (nguyên nhân số 1)', detail: 'Ban đêm là lúc cơ thể tái tạo Âm và phục hồi dịch thể. Thức khuya nghĩa là không cho cơ thể "nạp lại nước", lâu dần thành Âm Hư.' },
      { title: 'Stress, suy nghĩ nhiều', detail: 'Tâm và Can bị kích thích liên tục, sinh "nội nhiệt". Nhiệt này "đốt" Âm, càng ngày càng thiếu.' },
      { title: 'Ăn nhiều đồ cay, nóng, kích thích', detail: 'Ớt, rượu, đồ chiên làm tăng nhiệt, tiêu hao Âm nhanh hơn.' },
      { title: 'Làm việc quá sức, đặc biệt là trí óc', detail: 'Tiêu hao dịch và năng lượng, không có thời gian phục hồi.' },
      { title: 'Bệnh kéo dài', detail: 'Sốt lâu ngày, mất nước, suy nhược làm hao tổn tân dịch, dẫn đến Âm Hư.' },
    ],
    nguyenTacAn: 'Bổ Âm, nuôi dưỡng dịch thể, làm mát từ bên trong — nhưng không dùng đồ lạnh cực đoan.',
    meo: [
      { title: 'Uống nước đều trong ngày', detail: 'Không đợi khát mới uống, giúp duy trì "dịch cơ thể".' },
      { title: 'Buổi tối ăn nhẹ, dễ tiêu', detail: 'Giảm gánh nặng cho cơ thể, dễ phục hồi Âm.' },
      { title: 'Tăng món dạng canh, súp', detail: 'Vừa bổ dưỡng vừa bổ sung dịch.' },
      { title: 'Tránh môi trường quá nóng, quá khô', detail: 'Hạn chế mất nước qua da.' },
    ],
  },

  damthap: {
    laGi: [
      'Trong Y học cổ truyền, Đàm và Thấp không chỉ là "đờm" hay "ẩm" theo nghĩa thông thường. Thấp là trạng thái ẩm, nặng, trì trệ trong cơ thể. Đàm là sản phẩm tích tụ lâu ngày của Thấp — đặc hơn, "dính" hơn.',
      'Bạn có thể hiểu đơn giản: Thấp là nước đọng, Đàm là nước đọng lâu ngày bị "đặc lại", giống bùn.',
      'Trung tâm của vấn đề nằm ở Tỳ (hệ tiêu hoá trong Đông y). Tỳ có nhiệm vụ "vận hoá" thức ăn thành năng lượng và dịch cần thiết. Khi Tỳ yếu, chuyển hoá kém, phần dư không được xử lý sẽ tích tụ thành Thấp, và Thấp lâu ngày thành Đàm.',
      'Nhiều người nghĩ "đàm" là phải ho, có đờm — không hẳn. Trong Đông y, Đàm có thể tồn tại dưới da (béo, tích mỡ), trong mạch (mỡ máu), trong tiêu hoá (đầy bụng, nặng bụng).',
    ],
    signsTitle: '8 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Dễ tăng cân, đặc biệt vùng bụng', detail: 'Ăn không quá nhiều nhưng vẫn tích mỡ.' },
      { sign: 'Cảm giác cơ thể nặng nề, uể oải', detail: 'Không phải mệt kiểu thiếu sức (Khí Hư), mà là nặng và chậm.' },
      { sign: 'Da dầu, dễ nổi mụn ẩn', detail: 'Do "ẩm + tích tụ" bên trong.' },
      { sign: 'Nhiều đờm, dễ khạc đờm', detail: 'Đặc biệt vào buổi sáng.' },
      { sign: 'Ăn xong dễ đầy bụng, khó tiêu', detail: 'Tỳ vận hoá kém.' },
      { sign: 'Thích ăn ngọt, béo, nhưng ăn xong lại mệt', detail: 'Một vòng lặp rất điển hình của Đàm Thấp.' },
      { sign: 'Lưỡi to, rêu trắng dày, nhớt', detail: 'Dấu hiệu đặc trưng của Đàm Thấp.' },
      { sign: 'Ít khát nước hoặc không muốn uống nước', detail: 'Do cơ thể đã "dư ẩm" bên trong.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Đàm Thấp?',
    causesIntro: 'Đây là thể tích lũy lâu dài từ thói quen ăn uống và sinh hoạt.',
    causes: [
      { title: 'Ăn quá nhiều đồ béo, ngọt, dầu mỡ', detail: 'Đồ chiên rán, trà sữa, bánh ngọt khó tiêu, dễ tạo "chất dư thừa", sinh Thấp rồi lâu dần thành Đàm.' },
      { title: 'Ăn quá nhiều nhưng tiêu hoá yếu', detail: 'Tỳ yếu nhưng vẫn ăn nhiều, "xử lý không nổi" nên tích tụ.' },
      { title: 'Uống nhiều nước ngọt, đồ lạnh', detail: 'Làm giảm chức năng Tỳ, tăng tích tụ ẩm.' },
      { title: 'Ít vận động', detail: 'Cơ thể không "đốt" năng lượng, mọi thứ bị tồn đọng.' },
      { title: 'Ngủ ngay sau khi ăn', detail: 'Thức ăn chưa kịp tiêu hoá, dễ sinh Thấp.' },
    ],
    nguyenTacAn: 'Giảm tích tụ, tăng chuyển hoá, làm "khô" bớt môi trường bên trong.',
    meo: [
      { title: 'Ăn đến 70–80% no (rất quan trọng)', detail: 'Giảm áp lực cho Tỳ.' },
      { title: 'Không uống nước lạnh trong bữa ăn', detail: 'Tránh làm "tắt lửa tiêu hoá".' },
      { title: 'Sau ăn đi lại nhẹ 10–15 phút', detail: 'Hỗ trợ tiêu hoá, tránh tích tụ.' },
      { title: 'Giảm dần đồ ngọt (không cần cắt ngay)', detail: 'Giúp cơ thể thích nghi.' },
    ],
  },

  thapnhiet: {
    laGi: [
      'Trong Y học cổ truyền: Thấp là ẩm, nặng, trì trệ; Nhiệt là nóng, bốc lên, gây viêm. Khi hai yếu tố này kết hợp, cơ thể không chỉ "đọng lại" như Đàm Thấp mà còn bị "làm nóng lên".',
      'Giống như nước đọng (Thấp) gặp nhiệt độ cao (Nhiệt) thì dễ sinh "ôi, lên men, viêm".',
      'Khác gì với Đàm Thấp? Đàm Thấp là nặng, chậm, thiên về tích tụ. Thấp Nhiệt là nặng + nóng + viêm (mụn, kích ứng rõ hơn). Có thể hiểu: Đàm Thấp là "đọng", Thấp Nhiệt là "đọng + bốc".',
      'Thấp Nhiệt thường liên quan đến Tỳ (tiêu hoá kém sinh Thấp), Can (dễ sinh nhiệt khi stress) và Gan mật (biểu hiện qua da, mụn, nóng trong).',
    ],
    signsTitle: '9 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Da dầu, dễ nổi mụn viêm, mụn bọc', detail: 'Không chỉ mụn ẩn mà là mụn đỏ, đau.' },
      { sign: 'Nóng trong người, đặc biệt vùng ngực – bụng', detail: 'Không phải nóng khô như Âm Hư, mà là nóng bí, khó chịu.' },
      { sign: 'Miệng đắng, miệng hôi nhẹ', detail: 'Đặc biệt vào buổi sáng.' },
      { sign: 'Người nặng nhưng dễ bức bối', detail: 'Một kiểu "nặng + nóng" cùng lúc.' },
      { sign: 'Nước tiểu vàng, có mùi nặng', detail: 'Dấu hiệu nhiệt trong cơ thể.' },
      { sign: 'Phân có mùi nặng, dễ dính', detail: 'Do tiêu hoá kém cộng với có nhiệt.' },
      { sign: 'Ra mồ hôi nhiều, mồ hôi có mùi', detail: 'Khác với Khí Hư (mồ hôi loãng, không mùi).' },
      { sign: 'Lưỡi đỏ, rêu vàng, nhớt', detail: 'Dấu hiệu đặc trưng của Thấp Nhiệt.' },
      { sign: 'Dễ cáu gắt, bức bối trong người', detail: 'Do nhiệt ảnh hưởng đến tâm trạng.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Thấp Nhiệt?',
    causesIntro: 'Thấp Nhiệt thường là kết quả của Đàm Thấp cộng với sinh nhiệt lâu ngày.',
    causes: [
      { title: 'Ăn nhiều đồ cay, dầu mỡ, chiên rán', detail: 'Vừa tạo Thấp (do khó tiêu) vừa sinh Nhiệt. Kết hợp lại thành Thấp Nhiệt.' },
      { title: 'Uống rượu bia thường xuyên', detail: 'Rượu sinh nhiệt rất mạnh, đồng thời làm rối loạn tiêu hoá — môi trường lý tưởng cho Thấp Nhiệt.' },
      { title: 'Thức khuya', detail: 'Làm Can sinh nhiệt, giảm khả năng xử lý chất dư thừa.' },
      { title: 'Stress, ức chế cảm xúc', detail: 'Can khí uất sinh nhiệt, kết hợp với Thấp thành Thấp Nhiệt.' },
      { title: 'Môi trường nóng ẩm kéo dài', detail: 'Thời tiết nóng + ẩm khiến cơ thể không thoát được nhiệt.' },
    ],
    nguyenTacAn: 'Giảm nhiệt, giảm ẩm — nhưng không làm tổn thương tiêu hoá.',
    meo: [
      { title: 'Ăn thanh đạm 5–7 ngày liên tục khi nổi mụn nhiều', detail: 'Giúp cơ thể "hạ nhiệt nhanh".' },
      { title: 'Uống nước đều, nhưng không uống nước đá', detail: 'Tránh làm yếu Tỳ.' },
      { title: 'Tăng rau trong mỗi bữa ăn', detail: 'Giúp giảm tích tụ.' },
      { title: 'Giảm gia vị mạnh (cay, mặn)', detail: 'Giảm kích thích nội nhiệt.' },
    ],
  },

  huyetu: {
    laGi: [
      'Trong Y học cổ truyền, Huyết không chỉ là máu mà là toàn bộ phần "nuôi dưỡng" cơ thể. Ứ nghĩa là bị tắc, bị ứ lại, không lưu thông trơn tru. Huyết Ứ là khi máu không lưu thông tốt, bị chậm, bị ứ lại ở một số vùng.',
      'Hình dung đơn giản: cơ thể bình thường giống dòng nước chảy đều. Huyết Ứ giống dòng nước bị tắc — chỗ thì chảy chậm, chỗ thì đọng lại. Nơi thiếu máu không được nuôi dưỡng, nơi ứ lại dễ đau, dễ viêm.',
      'Vì sao Huyết phải "chảy"? Trong Đông y, Huyết cần được Khí đẩy đi. Khi Khí yếu hoặc bị tắc, Huyết cũng bị ảnh hưởng. Vì vậy Huyết Ứ thường liên quan đến Khí trệ hoặc Khí Hư.',
      'Huyết Ứ thường liên quan đến Can (điều khiển lưu thông), Tâm (tuần hoàn) và Tỳ (sinh huyết). Đây là thể có ảnh hưởng sâu nhất đến tuổi sinh học nếu không can thiệp sớm.',
    ],
    signsTitle: '9 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Da sạm, không đều màu, thiếu sức sống', detail: 'Không phải do nắng mà do thiếu nuôi dưỡng từ bên trong.' },
      { sign: 'Dễ xuất hiện vết thâm, lâu mờ', detail: 'Dù là mụn hay va chạm nhẹ.' },
      { sign: 'Đau cố định một chỗ', detail: 'Khác với đau lan — đau do ứ thường "điểm danh rõ ràng" vị trí.' },
      { sign: 'Dễ bầm tím dù va chạm nhẹ', detail: 'Do mạch máu và lưu thông kém.' },
      { sign: 'Môi thâm, môi không hồng', detail: 'Một dấu hiệu rất dễ nhận biết.' },
      { sign: 'Kinh nguyệt có cục máu, màu sẫm (ở nữ)', detail: 'Dấu hiệu điển hình của Huyết Ứ.' },
      { sign: 'Da khô, thiếu sức sống', detail: 'Không phải do thiếu nước mà do thiếu nuôi dưỡng.' },
      { sign: 'Tĩnh mạch nổi rõ (chân, tay)', detail: 'Biểu hiện của lưu thông kém.' },
      { sign: 'Lưỡi tím hoặc có điểm tím', detail: 'Dấu hiệu đặc trưng nhất của Huyết Ứ.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Huyết Ứ?',
    causesIntro: 'Huyết Ứ không đến từ một nguyên nhân duy nhất, mà là kết quả của lưu thông kém kéo dài.',
    causes: [
      { title: 'Ít vận động (nguyên nhân phổ biến nhất)', detail: 'Ngồi nhiều, ít di chuyển. Máu không được "bơm" đi đều nên dễ ứ.' },
      { title: 'Stress, căng thẳng kéo dài', detail: 'Làm Khí bị tắc (Khí trệ). Khí không đẩy được Huyết thì Huyết ứ.' },
      { title: 'Chấn thương, va chạm', detail: 'Gây ứ tại chỗ. Nếu không phục hồi tốt sẽ thành ứ lâu dài.' },
      { title: 'Lạnh xâm nhập', detail: 'Lạnh làm co mạch, máu lưu thông kém, dễ gây ứ.' },
      { title: 'Sau sinh hoặc sau kỳ kinh (ở nữ)', detail: 'Mất huyết. Nếu không phục hồi tốt dễ sinh ứ.' },
    ],
    nguyenTacAn: 'Tăng lưu thông máu, làm "mềm" và "chảy" lại dòng huyết.',
    meo: [
      { title: 'Ngồi lâu phải đứng dậy mỗi 60–90 phút', detail: 'Giúp máu lưu thông.' },
      { title: 'Massage vùng dễ ứ (vai, cổ, lưng)', detail: 'Giảm tắc nghẽn cục bộ.' },
      { title: 'Giữ ấm cơ thể, đặc biệt mùa lạnh', detail: 'Tránh co mạch.' },
      { title: 'Uống nước ấm', detail: 'Hỗ trợ lưu thông nhẹ.' },
    ],
  },

  khiuat: {
    laGi: [
      'Trong Y học cổ truyền, Khí không chỉ là năng lượng mà còn phải luôn vận động, lưu thông. Khi Khí lưu thông tốt, cơ thể nhẹ nhàng, tiêu hoá ổn định, tâm trạng thoải mái.',
      'Khi Khí bị "uất" (ứ lại, không lưu thông), không chỉ cơ thể bị ảnh hưởng mà cảm xúc cũng bị ảnh hưởng ngược lại. Hình dung: Khí bình thường như dòng khí lưu thông đều trong ống, Khí Uất giống như ống bị bóp lại — khí không đi qua được, gây cảm giác tức, nặng, khó chịu nhưng không rõ nguyên nhân.',
      'Điểm đặc biệt của Khí Uất: đây là thể liên quan trực tiếp đến cảm xúc (stress, kìm nén) và có thể ảnh hưởng đến toàn bộ cơ thể. Trong Đông y có câu: "Khí trệ thì đau, Khí thông thì không đau."',
      'Khí Uất chủ yếu liên quan đến Can (Gan) — tạng chịu trách nhiệm điều tiết Khí. Khi Can không điều tiết tốt, Khí bị tắc, sinh Khí Uất.',
    ],
    signsTitle: '9 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Dễ cáu gắt, cảm xúc thất thường', detail: 'Lúc bình thường, lúc lại khó chịu không rõ lý do.' },
      { sign: 'Hay thở dài', detail: 'Một phản xạ tự nhiên khi Khí bị "kẹt" — cơ thể đang cố tự giải phóng.' },
      { sign: 'Tức ngực, nghẹn ở cổ họng', detail: 'Không phải bệnh lý rõ ràng nhưng rất khó chịu.' },
      { sign: 'Ăn uống thất thường', detail: 'Lúc ăn nhiều, lúc không muốn ăn. Khí ảnh hưởng trực tiếp đến Tỳ.' },
      { sign: 'Đầy bụng, khó tiêu khi stress', detail: 'Rất điển hình của Khí Uất.' },
      { sign: 'Ngủ không sâu, hay suy nghĩ trước khi ngủ', detail: 'Tâm trí không "thả lỏng" được.' },
      { sign: 'Dễ đau đầu, căng vùng đầu', detail: 'Do Khí không lưu thông lên vùng đầu.' },
      { sign: 'Kinh nguyệt không đều (ở nữ)', detail: 'Liên quan đến Can.' },
      { sign: 'Lưỡi bình thường hoặc hơi đỏ, rêu mỏng', detail: 'Không quá đặc trưng như các thể khác.' },
    ],
    causesTitle: 'Vì sao bạn trở thành thể Khí Uất?',
    causesIntro: 'Khí Uất gần như luôn bắt nguồn từ tâm lý và cảm xúc.',
    causes: [
      { title: 'Stress kéo dài', detail: 'Áp lực công việc, áp lực cuộc sống — nguyên nhân phổ biến nhất.' },
      { title: 'Kìm nén cảm xúc', detail: 'Không nói ra, không giải toả. Cảm xúc bị "giữ lại" thì Khí cũng bị giữ lại.' },
      { title: 'Suy nghĩ quá nhiều', detail: 'Lo lắng, overthinking làm Khí bị "rối loạn và tắc nghẽn".' },
      { title: 'Lối sống ít vận động', detail: 'Cơ thể không di chuyển thì Khí cũng không lưu thông.' },
      { title: 'Môi trường ngột ngạt, thiếu không gian', detail: 'Ít ánh sáng, ít không khí ảnh hưởng trực tiếp đến trạng thái Khí.' },
    ],
    nguyenTacAn: 'Giúp Khí "lưu thông lại" — nhẹ nhàng, không làm nặng thêm tiêu hoá.',
    meo: [
      { title: 'Không ăn khi đang căng thẳng', detail: 'Lúc đó Khí đang tắc, tiêu hoá rất kém.' },
      { title: 'Dành thời gian "xả" cảm xúc mỗi ngày', detail: 'Đi bộ, nghe nhạc, viết ra suy nghĩ.' },
      { title: 'Tạo khoảng nghỉ trong ngày', detail: 'Giúp Khí "chạy lại".' },
      { title: 'Tiếp xúc thiên nhiên khi có thể', detail: 'Giúp Can điều hoà Khí tốt hơn.' },
    ],
  },

  dacbam: {
    laGi: [
      'Trong Y học cổ truyền, Đặc Bẩm (còn gọi là "đặc thù thể chất") là thể trạng có yếu tố di truyền hoặc bẩm sinh: hệ "phòng vệ" của cơ thể không ổn định, dễ phản ứng quá mức với các yếu tố bên ngoài.',
      'Hiểu đơn giản: nếu ví cơ thể như một "hệ thống bảo vệ", người bình thường phản ứng vừa đủ khi có tác nhân lạ, còn người thể Đặc Bẩm phản ứng quá nhạy hoặc không ổn định, dẫn đến dị ứng, viêm, phản ứng bất thường.',
      'Theo góc nhìn hiện đại, thể này gần với các tình trạng: dị ứng cơ địa, hen suyễn, viêm da cơ địa, nhạy cảm với thực phẩm hoặc môi trường.',
      'Đặc Bẩm chủ yếu liên quan đến Phế (hệ bảo vệ bên ngoài), Tỳ (hấp thu, phản ứng thực phẩm) và Thận (nền tảng bẩm sinh). Đây không phải bệnh, mà là một cách cơ thể vận hành khác biệt.',
    ],
    signsTitle: '9 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Dễ bị dị ứng (da, mũi, hô hấp)', detail: 'Hắt hơi khi thay đổi thời tiết, ngứa nổi mẩn khi ăn đồ lạ.' },
      { sign: 'Da nhạy cảm, dễ kích ứng', detail: 'Dễ đỏ, ngứa khi dùng mỹ phẩm hoặc tiếp xúc môi trường.' },
      { sign: 'Dễ bị viêm mũi dị ứng', detail: 'Sáng ngủ dậy hắt hơi, chảy nước mũi.' },
      { sign: 'Tiền sử hen, viêm da, dị ứng từ nhỏ', detail: 'Nền tảng cơ địa từ bẩm sinh.' },
      { sign: 'Dễ phản ứng với thực phẩm', detail: 'Hải sản, sữa, đồ lạ.' },
      { sign: 'Hệ miễn dịch không ổn định', detail: 'Lúc dễ bệnh, lúc lại bình thường.' },
      { sign: 'Thời tiết thay đổi là cơ thể phản ứng ngay', detail: 'Nhạy với chuyển mùa.' },
      { sign: 'Da dễ nổi mề đay, phát ban', detail: 'Phản ứng ngoài da rõ rệt.' },
      { sign: 'Lưỡi không có dấu hiệu quá đặc trưng', detail: 'Vì đây không phải vấn đề "thiếu hay thừa" như các thể khác.' },
    ],
    causesTitle: 'Vì sao bạn thuộc thể Đặc Bẩm?',
    causesIntro: 'Khác với các thể khác, thể này có yếu tố bẩm sinh là chính.',
    causes: [
      { title: 'Di truyền', detail: 'Gia đình có người dị ứng, hen, viêm da, cơ địa nhạy cảm — khả năng cao bạn cũng có nền tảng tương tự.' },
      { title: 'Hệ miễn dịch "quá nhạy"', detail: 'Phản ứng mạnh với những thứ bình thường, gây ra dị ứng.' },
      { title: 'Môi trường sống', detail: 'Ô nhiễm, thực phẩm không sạch làm tình trạng nhạy cảm nặng hơn.' },
      { title: 'Chăm sóc cơ thể không phù hợp', detail: 'Dùng sản phẩm kích ứng, ăn uống không kiểm soát làm "kích hoạt" cơ địa nhạy cảm.' },
    ],
    nguyenTacAn: 'Ổn định cơ thể, tránh kích thích — ăn đơn giản, dễ kiểm soát.',
    meo: [
      { title: 'Không thử quá nhiều thứ mới cùng lúc', detail: 'Nếu có phản ứng sẽ không biết nguyên nhân từ đâu.' },
      { title: 'Ghi nhớ những thực phẩm từng gây dị ứng', detail: 'Tránh lặp lại, xây dựng danh sách cá nhân.' },
      { title: 'Ưu tiên ăn đơn giản, ít thành phần', detail: 'Dễ kiểm soát phản ứng.' },
      { title: 'Giữ môi trường sống sạch, thoáng', detail: 'Giảm tác nhân kích thích.' },
    ],
  },

  binhhoa: {
    laGi: [
      'Trong Y học cổ truyền, Bình Hòa là trạng thái lý tưởng khi Âm và Dương cân bằng, Khí và Huyết đầy đủ, lưu thông tốt, tạng phủ hoạt động ổn định.',
      'Đây không phải là "không bao giờ bệnh", mà là trạng thái mà cơ thể dễ thích nghi, dễ phục hồi, ít rơi vào mất cân bằng kéo dài.',
      'Hình dung đơn giản: cơ thể giống một hệ thống vận hành trơn tru — không có chỗ nào bị thiếu (hư), không có chỗ nào bị tắc (ứ), không có chỗ nào bị lệch (quá nóng, quá lạnh).',
      'Điểm quan trọng: thể Bình Hòa không phải bẩm sinh cố định. Bạn có thể đạt được, nhưng cũng có thể mất đi nếu sinh hoạt sai lệch.',
    ],
    signsTitle: '8 dấu hiệu nhận biết hàng ngày',
    signs: [
      { sign: 'Ăn ngon, tiêu hoá tốt', detail: 'Ăn xong không đầy bụng, không khó chịu.' },
      { sign: 'Ngủ sâu, dễ ngủ, thức dậy tỉnh táo', detail: 'Không cần quá nhiều giờ nhưng vẫn thấy hồi phục.' },
      { sign: 'Tinh thần ổn định', detail: 'Không dễ cáu, không dễ suy sụp.' },
      { sign: 'Da dẻ hồng hào, đều màu, có sức sống', detail: 'Không quá dầu, không quá khô.' },
      { sign: 'Không quá sợ lạnh hay sợ nóng', detail: 'Thích nghi tốt với môi trường.' },
      { sign: 'Ít bệnh vặt, bệnh thì hồi phục nhanh', detail: 'Sức đề kháng ổn định.' },
      { sign: 'Năng lượng ổn định trong ngày', detail: 'Không bị tụt năng lượng đột ngột.' },
      { sign: 'Lưỡi hồng nhạt, rêu mỏng, đều', detail: 'Dấu hiệu "chuẩn sách giáo khoa".' },
    ],
    causesTitle: 'Vì sao bạn đạt được thể Bình Hòa?',
    causesIntro: 'Không phải ngẫu nhiên — đây là kết quả của sự cân bằng lâu dài.',
    causes: [
      { title: 'Ăn uống điều độ', detail: 'Không quá no, không quá thiếu, không lệch quá về một loại thực phẩm.' },
      { title: 'Sinh hoạt đúng nhịp', detail: 'Ngủ đúng giờ, làm việc và nghỉ ngơi hợp lý.' },
      { title: 'Vận động đều', detail: 'Không quá ít, không quá mức.' },
      { title: 'Tâm lý ổn định', detail: 'Biết giải toả, không tích tụ stress lâu dài.' },
      { title: 'Hiểu cơ thể mình', detail: 'Biết cái gì hợp, không hợp và điều chỉnh kịp thời.' },
    ],
    nguyenTacAn: 'Cân bằng, đa dạng, không cực đoan.',
    meo: [
      { title: 'Giữ nhịp sống ổn định (quan trọng nhất)', detail: 'Cơ thể thích "đều đặn" hơn là "hoàn hảo".' },
      { title: 'Ăn uống theo cảm nhận cơ thể', detail: 'Không ép, không bỏ mặc.' },
      { title: 'Luôn điều chỉnh khi có dấu hiệu lệch', detail: 'Bắt đầu thấy lạnh thì tăng đồ ấm, bắt đầu thấy nóng thì giảm cay nóng.' },
    ],
  },
};
