// lib/data.ts, EG Test-based Marketing v4
// Auto-generated from 9-the-trang-noi-dung.docx

export type TheKey = 'duonghu'|'khihu'|'amhu'|'damthap'|'thapnhiet'|'huyetu'|'khiuat'|'dacbam'|'binhhoa';

export interface Option { label: string; score: Partial<Record<TheKey,number>>; }
export interface Question {
  id: number; group: string; text: string;
  options: Option[]; followUpOf?: number;
}

export interface Recipe {
  name: string;
  category: 'Bữa sáng'|'Canh & Cháo'|'Món chính'|'Đồ uống'|'Tráng miệng';
  effect: string;
  ingredients: string[];
  steps: string[];
  tip?: string;
}

export interface TheInfo {
  key: TheKey; name: string; tagline: string; ageOffset: number;
  symptoms: string[];
  yeuTo: string[];
  foods_rec: string[];
  foods_avoid: string[];
  analysis: string;
  strengths: string[];
  insights: string[];
  quote: string;
  recipes?: Recipe[];
}

export interface ScoreResult {
  dominant: TheKey; secondary: TheKey | null;
  scores: Record<TheKey,number>; maxScores: Record<TheKey,number>;
  pct: Record<TheKey,number>; symptomMatches: Record<TheKey,{matched:number;total:number}>;
  bodyAge: number;
}

export const THE_KEYS: TheKey[] = [
  'duonghu','khihu','amhu','damthap','thapnhiet','huyetu','khiuat','dacbam','binhhoa'
];

export const THE_CONTENT: Record<TheKey, TheInfo> = {
  duonghu: {
    key: "duonghu",
    name: "Dương Hư",
    tagline: "“Khi cơ thể thiếu ‘ngọn lửa’ bên trong, mọi hoạt động trở nên chậm, lạnh và yếu đi”",
    ageOffset: 4,
    symptoms: ["Tay chân lạnh","Sợ lạnh rõ rệt","Tiêu hoá yếu","Phân lỏng, đi ngoài dễ dàng nhưng không thành khuôn","Mệt mỏi vào buổi sáng","Lưỡi nhạt, bệu, có dấu răng hai bên"],
    yeuTo: ["Ăn nhiều đồ lạnh, đồ sống","Ngồi máy lạnh quá nhiều","Thức khuya, làm việc quá sức"],
    foods_rec: ["Gừng, tỏi, hành","Quế, tiêu","Thịt bò, thịt dê, thịt gà","Táo đỏ, kỷ tử, long nhãn","Cháo nóng, canh ấm","Đường đỏ, mật ong gừng"],
    foods_avoid: ["Nước đá, nước lạnh","Trà sữa lạnh, nước ngọt đá","Rau sống, salad","Đồ ăn lấy từ tủ lạnh ăn ngay","Trái cây tính lạnh"],
    analysis: "Trong Đông y, Dương là năng lượng làm ấm và thúc đẩy mọi hoạt động. Bạn có thể hình dung: Dương = ngọn lửa đốt nhiên liệu cho cơ thể. Khi Dương suy yếu, cơ thể giống như một căn phòng thiếu lò sưởi giữa mùa đông, mọi thứ vẫn còn đó nhưng không có lực để vận hành. Dương Hư thường liên quan đến Tỳ Dương (tiêu hoá) và Thận Dương (năng lượng gốc).",
    strengths: ["Nền Dương khí chưa cạn kiệt hoàn toàn, phục hồi nhanh nếu can thiệp sớm và đúng cách","Cơ thể phản ứng rõ với thức ăn ấm và nghỉ ngơi, dễ thấy kết quả sớm","Nhận thức được cơ thể đang thiếu nhiệt là bước đầu quan trọng nhất"],
    insights: ["Dương Hư thường nặng hơn vào mùa đông và sáng sớm, đây là lúc cần bảo vệ cơ thể nhất","Không phải 'yếu' mà là 'thiếu nhiệt', sự khác biệt này quan trọng vì cách bổ hoàn toàn khác","Nếu bạn đã thấy lạnh + mệt + tiêu hoá yếu cùng lúc, đây là tam giác Dương Hư điển hình, phục hồi sẽ đồng bộ cả 3"],
    quote: "Cơ thể bạn không thiếu ý chí. Nó đang thiếu lửa. Cho nó hơi ấm đúng cách, mọi thứ sẽ chuyển động lại.",
    recipes: [
      // ── Bữa sáng (6) ──────────────────────────────────────────
      {name:"Cháo Gừng Hành Trứng",category:"Bữa sáng",effect:"Khởi động Dương khí buổi sáng, ấm bụng, chống mệt mỏi đầu ngày.",ingredients:["Gạo 80g","Trứng gà 1 quả","Gừng tươi 3 lát","Hành lá 2 cây","Muối, tiêu đen"],steps:["Nấu gạo với 600ml nước, lửa nhỏ 20 phút cho nhừ","Cho gừng thái sợi vào, khuấy đều","Đập trứng vào khuấy nhẹ cho tan","Nêm muối, rắc tiêu + hành lá, ăn nóng ngay"],tip:"Ăn trong 15 phút sau khi nấu — cháo nguội giảm tác dụng ấm."},
      {name:"Cháo Đậu Đỏ Táo Đỏ",category:"Bữa sáng",effect:"Bổ Tỳ Dương, tăng khí huyết. Đặc biệt tốt sau kỳ kinh hoặc ngày cơ thể mệt bất thường.",ingredients:["Gạo nếp 50g + gạo tẻ 30g","Đậu đỏ 30g (ngâm qua đêm)","Táo đỏ 5 quả bỏ hạt","Đường đỏ 1 muỗng"],steps:["Đậu đỏ ngâm qua đêm cho mềm","Cho tất cả vào nồi với 800ml nước, đun sôi","Hạ lửa nhỏ nấu thêm 30-35 phút","Thêm đường đỏ khi sắp tắt bếp, ăn ấm"],tip:"Nấu nồi lớn tối hôm trước, sáng hâm lại — tiết kiệm thời gian."},
      {name:"Xôi Gà Hành Phi",category:"Bữa sáng",effect:"Bổ khí ấm Tỳ, no lâu, cung cấp protein bền vững cho cả buổi sáng.",ingredients:["Gạo nếp 150g (ngâm 4 tiếng)","Ức gà 100g","Hành khô 2 củ","Gừng 2 lát","Nước mắm, tiêu, lá chanh thái chỉ"],steps:["Gạo nếp ngâm xong hấp 25-30 phút","Gà luộc với gừng + muối 20 phút, để nguội xé sợi","Phi hành khô vàng thơm với dầu ăn","Xới xôi ra đĩa, xếp gà, rưới hành phi + tiêu + nước mắm + lá chanh"],tip:"Hành phi tự làm thơm hơn mua sẵn nhiều lần."},
      {name:"Yến Mạch Ấm Táo Đỏ Kỷ Tử",category:"Bữa sáng",effect:"Bữa sáng nhanh cho ngày bận, giữ ấm từ trong ra ngoài, tăng năng lượng bền.",ingredients:["Yến mạch cán 40g","Táo đỏ 4 quả thái lát","Kỷ tử 1 muỗng","Gừng tươi 1 lát (hoặc 1/4 muỗng bột gừng)","Mật ong 1 muỗng"],steps:["Đun 250ml nước sôi, thêm gừng đun 2 phút","Cho yến mạch + táo đỏ vào, đun thêm 3 phút","Tắt bếp, đợi nguội bớt xuống 60-70°C","Thêm kỷ tử + mật ong, khuấy đều, ăn nóng"],tip:"Để táo đỏ + kỷ tử sẵn trong hũ nhỏ — 5 phút xong bữa sáng."},
      {name:"Trứng Chưng Đường Đỏ Gừng",category:"Bữa sáng",effect:"Bổ khí huyết, ấm tử cung. Đặc biệt tốt sau kỳ kinh hoặc những ngày lạnh bụng.",ingredients:["Trứng gà 2 quả","Đường đỏ 2 muỗng","Gừng tươi 3-4 lát","Nước 100ml"],steps:["Đun sôi đường đỏ + nước + gừng, khuấy tan","Đợi nước đường nguội xuống 70°C, đổ vào trứng đã đánh tan","Hấp cách thủy 8-10 phút đến khi trứng vừa đông","Ăn nóng ngay, không để nguội"],tip:"Nước quá nóng khi đổ vào trứng sẽ chín ngay — canh kỹ nhiệt độ."},
      {name:"Cháo Thịt Bò Tiêu Đen",category:"Bữa sáng",effect:"Bổ Thận Dương + Tỳ Dương. Phù hợp sau đêm thức khuya hoặc ngày trời lạnh đột ngột.",ingredients:["Gạo 80g","Thịt bò băm 80g","Gừng 3 lát","Tiêu đen 1/2 muỗng giã thô","Hành lá, nước mắm, dầu mè"],steps:["Nấu cháo gạo với 600ml nước, đun 20 phút","Ướp bò băm: tiêu + nước mắm + gừng băm","Cho bò vào cháo đang sôi, khuấy nhanh","Nêm lại vừa ăn, rắc hành lá + vài giọt dầu mè"],tip:"Cho bò vào khi cháo đang sôi — bò chín vừa, không bị dai."},
      // ── Canh & Cháo (8) ───────────────────────────────────────
      {name:"Canh Gà Hầm Táo Đỏ Kỷ Tử",category:"Canh & Cháo",effect:"Bài thuốc dưỡng sinh kinh điển cho Dương Hư. Phục hồi nguyên khí, bổ máu, ấm sâu.",ingredients:["Gà ta 1/2 con","Táo đỏ 8 quả","Kỷ tử 2 muỗng","Gừng 5 lát","Hành tím 3 củ","Muối, tiêu"],steps:["Gà chần qua nước sôi 2 phút, rửa sạch bọt","Cho tất cả vào nồi với 1.2L nước, đun sôi","Hạ lửa nhỏ hầm 45-60 phút","Nêm muối vừa ăn, rắc tiêu khi dọn"],tip:"Hầm nồi đất ngon hơn nồi thép. Nấu cuối tuần ăn 2 ngày."},
      {name:"Canh Xương Hầm Ngũ Vị",category:"Canh & Cháo",effect:"Bổ Thận Dương mạnh nhất trong các món canh. Uống 1-2 lần/tuần cho tác dụng sâu.",ingredients:["Xương heo ống 500g","Quế chi 1 nhánh nhỏ","Hồi 2-3 cái","Gừng 5 lát","Táo đỏ 6 quả","Kỷ tử 1 muỗng","Muối"],steps:["Xương chần qua nước sôi + gừng 3 phút, rửa sạch","Cho tất cả vào nồi, đổ 1.5L nước","Đun sôi rồi hầm lửa nhỏ 1.5-2 tiếng","Chắt nước uống ấm, nêm chút muối"],tip:"Không dùng quá nhiều quế + hồi — vừa 1 nhánh + 2 cái, nhiều hơn sẽ đắng."},
      {name:"Cháo Thịt Dê Gừng",category:"Canh & Cháo",effect:"Bổ Thận Dương mạnh, ấm sâu từ gốc. Dùng những ngày tay chân lạnh ngắt hoặc sau khi bị mưa lạnh.",ingredients:["Gạo 80g","Thịt dê 100g thái nhỏ","Gừng 4 lát","Sả 1 cây đập dập","Tỏi 2 tép","Tiêu, muối"],steps:["Xào thịt dê với tỏi + gừng + sả + chút muối đến thơm","Nấu cháo gạo dở, cho thịt dê xào vào","Đun thêm 10-15 phút cho thịt mềm","Nêm lại, rắc tiêu nhiều, ăn ngay khi nóng"],tip:"Sả đập dập khi xào khử mùi dê rất hiệu quả."},
      {name:"Canh Bí Đỏ Thịt Gà Gừng",category:"Canh & Cháo",effect:"Bổ Tỳ Vị, ấm bụng, tăng tiêu hoá. Phù hợp khi hay bị đầy bụng sau khi ăn.",ingredients:["Bí đỏ 300g","Đùi gà 2 cái","Gừng 3 lát","Hành tím 2 củ","Muối, tiêu"],steps:["Gà chặt miếng, ướp muối + tiêu + gừng 15 phút","Phi hành tím thơm, xào gà đến săn mặt","Cho bí đỏ cắt miếng vào, đổ nước xâm xấp","Đậy nắp nấu 20-25 phút, nêm lại, rắc tiêu"]},
      {name:"Canh Gà Sả Gừng Nghệ",category:"Canh & Cháo",effect:"Ấm bụng + chống viêm nhẹ. Tốt khi Dương Hư kèm đầy hơi, tiêu hoá kém.",ingredients:["Ức gà 200g","Sả 2 cây đập dập","Gừng 3 lát","Nghệ tươi 1 nhánh nhỏ (hoặc 1/4 muỗng bột nghệ)","Muối, tiêu xanh"],steps:["Gà thái miếng, ướp muối + nghệ 10 phút","Đun 600ml nước sôi với sả + gừng 5 phút trước","Cho gà vào, đun lửa vừa 15-20 phút","Nêm muối, thêm tiêu xanh, ăn nóng"]},
      {name:"Cháo Long Nhãn Táo Đỏ",category:"Canh & Cháo",effect:"Bổ tâm an thần, giúp ngủ sâu hơn, bổ khí huyết. Ăn tối 1-2 tiếng trước khi ngủ.",ingredients:["Gạo nếp 50g","Long nhãn khô 30g","Táo đỏ 6 quả","Đường đỏ 2 muỗng","Gừng 1 lát"],steps:["Gạo nếp ngâm 30 phút","Cho tất cả vào nồi với 800ml nước","Đun sôi rồi nhỏ lửa 25 phút đến khi nhừ","Thêm đường đỏ khuấy tan, ăn ấm trước ngủ"],tip:"Nửa bát nhỏ là đủ — ăn quá nhiều no bụng khó ngủ."},
      {name:"Canh Củ Sen Hầm Xương",category:"Canh & Cháo",effect:"Bổ Phế, kiện Tỳ, ấm bụng. Tốt khi Dương Hư hay bị ho dai hoặc dễ cảm mùa lạnh.",ingredients:["Xương heo 300g","Củ sen 200g","Táo đỏ 4 quả","Gừng 3 lát","Muối"],steps:["Xương chần qua nước sôi, rửa sạch","Củ sen gọt vỏ, thái khoanh vừa ăn","Cho tất cả vào nồi 1.2L nước, đun sôi","Hầm 1 tiếng đến khi củ sen mềm, nêm muối"],tip:"Ngâm củ sen trong nước pha dấm trắng sau khi gọt để giữ trắng."},
      {name:"Canh Thịt Bò Cà Rốt Khoai Tây",category:"Canh & Cháo",effect:"Bổ khí ấm Tỳ, cung cấp năng lượng bền. Món gia đình dễ nấu, cả nhà đều ăn được.",ingredients:["Thịt bò nạm 200g","Cà rốt 1 củ","Khoai tây 1 củ","Cà chua 1 quả","Hành tây 1/2 củ","Tỏi, gừng, muối, tiêu"],steps:["Bò thái miếng ướp muối + tiêu + tỏi","Xào bò với hành + gừng đến săn, thêm cà chua xào 2 phút","Đổ 1L nước, cho cà rốt + khoai tây vào","Hầm 30-40 phút, nêm lại"]},
      // ── Món chính (8) ─────────────────────────────────────────
      {name:"Gà Kho Gừng Tiêu Đen",category:"Món chính",effect:"Bổ dương, ấm bụng, tăng tuần hoàn. Món kho đặc trưng mùa lạnh.",ingredients:["Đùi gà 2 cái","Gừng 5 lát thái sợi","Tiêu đen 1 muỗng giã thô","Nước mắm 2 muỗng","Đường 1 muỗng","Tỏi 3 tép","Lá chanh 3 lá"],steps:["Gà chặt miếng, ướp nước mắm + tiêu + tỏi + gừng 20 phút","Phi tỏi thơm, cho gà vào xào đến vàng mặt","Thêm nước xâm xấp, kho lửa vừa đến cạn","Gần cạn cho lá chanh vào đảo đều, rắc tiêu khi dọn"]},
      {name:"Thịt Bò Xào Hành Tây Tiêu",category:"Món chính",effect:"Bổ Thận Dương + bổ khí nhanh. Tiêu đen kích hoạt tuần hoàn máu. Món nhanh cho bữa tối.",ingredients:["Thịt bò 200g thái mỏng","Hành tây 1 củ","Tiêu đen 3/4 muỗng","Dầu hào 1 muỗng","Tỏi, gừng băm","Muối, dầu ăn"],steps:["Bò ướp dầu hào + tiêu + gừng băm 15 phút","Chảo thật nóng, xào bò lửa lớn 1-2 phút","Vớt bò ra, xào hành tây + tỏi đến mềm","Cho bò lại vào, đảo nhanh 30 giây, dọn ngay"],tip:"Chảo phải thật nóng trước khi cho bò vào — lửa nhỏ bò chảy nước mất vị."},
      {name:"Cá Thu Nướng Gừng Nghệ",category:"Món chính",effect:"Bổ Thận, ấm kinh lạc. Omega-3 kết hợp gừng + nghệ giúp chống viêm và ấm sâu.",ingredients:["Cá thu 1 khúc 200g","Gừng tươi băm 1 muỗng","Nghệ bột 1/2 muỗng","Tỏi 2 tép băm","Muối, tiêu, dầu ăn"],steps:["Cá rửa sạch, thấm khô. Ướp muối + tiêu + nghệ + gừng + tỏi 20 phút","Nồi chiên không dầu 180°C/15 phút hoặc áp chảo 5-6 phút mỗi mặt","Ăn kèm cơm nóng + lá húng lủi","Không ăn kèm dưa leo lạnh hoặc nước chanh đá"]},
      {name:"Tôm Rang Tiêu Xanh Tỏi",category:"Món chính",effect:"Bổ Thận Dương, tốt cho xương khớp. Tiêu xanh tươi thơm hơn tiêu đen, ít cay hơn.",ingredients:["Tôm sú 300g (giữ nguyên vỏ)","Tiêu xanh 1 muỗng","Tỏi 4 tép đập dập","Muối, đường, dầu ăn"],steps:["Tôm rửa sạch, giữ nguyên vỏ","Phi tỏi vàng thơm","Cho tôm + tiêu vào, rang lửa lớn đến chín đều, dậy mùi","Nêm muối + chút đường cho cân vị"],tip:"Giữ vỏ tôm khi rang — vỏ tôm có canxi và chitin tốt cho xương khớp."},
      {name:"Thịt Heo Kho Đường Đỏ Gừng",category:"Món chính",effect:"Đường đỏ thay đường trắng tốt hơn cho khí huyết phụ nữ. Gừng cân bằng tính hàn của thịt heo.",ingredients:["Ba chỉ heo 400g","Đường đỏ 3 muỗng","Gừng 4 lát thái sợi","Nước dừa 200ml","Nước mắm, tỏi"],steps:["Thịt chặt miếng, chần qua nước sôi rửa sạch","Thắng đường đỏ đến vàng caramel, cho thịt vào đảo đều","Thêm nước dừa + gừng + tỏi + nước mắm","Kho lửa vừa 30-40 phút đến khi nước sánh"],tip:"Nước dừa thay nước lọc — thịt mềm hơn và ngọt tự nhiên hơn."},
      {name:"Cơm Gà Gừng",category:"Món chính",effect:"Bổ khí dưỡng Tỳ cân đối. Gà luộc gừng là thuốc dưỡng sinh ẩn cho Dương Hư — cả bữa ăn từ 1 nồi.",ingredients:["Gà ta 1/2 con","Gạo 300g","Gừng 1 nhánh lớn đập dập","Sả 1 cây","Muối","Dầu gừng (gừng băm + dầu ăn phi thơm)"],steps:["Luộc gà với gừng + sả + muối 35-40 phút","Dùng nước luộc gà (bỏ váng) để nấu cơm thay nước thường","Gà chặt miếng vừa ăn","Ăn với dầu gừng phi + nước tương pha loãng"],tip:"Phiên bản Hải Nam phù hợp Dương Hư — không có rau sống ăn kèm như bản gốc."},
      {name:"Bò Xào Rau Muống Tỏi Gừng",category:"Món chính",effect:"Bổ khí dưỡng huyết, cung cấp sắt + dương nhiệt. Rau muống xào (không luộc) an toàn cho Dương Hư.",ingredients:["Thịt bò 150g thái mỏng","Rau muống 200g (ngọn + thân non)","Tỏi 3 tép","Gừng băm 1/2 muỗng","Nước mắm, dầu ăn, tiêu"],steps:["Bò thái mỏng ướp tiêu + nước mắm","Xào bò lửa lớn đến vừa chín, vớt ra","Phi tỏi + gừng thơm, cho rau muống xào lửa lớn 2 phút","Cho bò lại vào đảo đều, nêm lại, dọn ngay"],tip:"Rau muống xào phải lửa lớn + nhanh — lửa nhỏ rau chảy nước mất ngon."},
      {name:"Gà Rang Muối Tiêu",category:"Món chính",effect:"Bổ dương đơn giản nhất. Tiêu đen kích hoạt tuần hoàn, protein bền vững.",ingredients:["Đùi/cánh gà 300g","Muối 1 muỗng cà phê","Tiêu đen 1 muỗng","Tỏi băm 2 muỗng","Gừng băm 1 muỗng","Dầu ăn"],steps:["Gà chặt miếng, ướp muối + tiêu + tỏi + gừng 30 phút","Áp chảo dầu nóng, da gà úp xuống, lửa vừa","Đậy nắp rang 8-10 phút mỗi mặt đến vàng","Rắc thêm muối tiêu khi dọn"]},
      // ── Đồ uống (5) ───────────────────────────────────────────
      {name:"Trà Gừng Mật Ong Chanh Ấm",category:"Đồ uống",effect:"Đồ uống hằng ngày số 1 cho Dương Hư. Uống sáng sớm hoặc sau bữa sáng 30 phút.",ingredients:["Gừng tươi 3-4 lát","Mật ong 1 muỗng","Nước ấm 250ml","Chanh 1/4 quả (tuỳ chọn)"],steps:["Đun gừng với 300ml nước, sôi 5-7 phút đến khi ngả vàng","Đợi nguội xuống 60-70°C","Thêm mật ong + chanh nếu muốn","Uống ấm, không thêm đá"],tip:"Mật ong cho vào nước sôi mất enzyme — đợi nước nguội bớt mới cho vào."},
      {name:"Nước Táo Đỏ Kỷ Tử Nhãn Nhục",category:"Đồ uống",effect:"Bổ khí huyết, ấm tâm. Uống đều đặn giúp da hồng hào trở lại, giảm mệt mỏi kinh niên.",ingredients:["Táo đỏ 8-10 quả bỏ hạt","Kỷ tử 1.5 muỗng","Long nhãn khô 15g","Đường đỏ 1-2 muỗng","Nước 700ml"],steps:["Rửa sạch táo + kỷ tử + nhãn","Cho vào nồi với 700ml nước, đun sôi","Hạ lửa đun thêm 20-25 phút","Thêm đường đỏ, khuấy tan, uống ấm"],tip:"Đổ vào bình giữ nhiệt, uống dần trong cả buổi sáng."},
      {name:"Trà Quế Táo Đỏ Ấm",category:"Đồ uống",effect:"Kích hoạt dương khí mạnh. Uống buổi sáng hoặc chiều những ngày trời lạnh.",ingredients:["Quế chi 1 nhánh nhỏ (2-3g)","Táo đỏ 5 quả đập bẹp","Gừng 2 lát","Nước 500ml"],steps:["Cho tất cả vào ấm hoặc nồi nhỏ","Đun sôi, hạ lửa đun thêm 10 phút","Lọc lấy nước uống ấm"],tip:"Không uống buổi tối khuya — dương khí tăng có thể khó ngủ."},
      {name:"Sữa Đậu Nành Nóng Gừng Mật Ong",category:"Đồ uống",effect:"Đậu nành bổ âm + gừng/mật ong ấm dương — cân bằng tốt. Thay thế cà phê buổi sáng.",ingredients:["Sữa đậu nành không đường 300ml","Gừng bột 1/4 muỗng","Mật ong 1 muỗng"],steps:["Đun ấm sữa đậu nành đến khoảng 70°C (không sôi)","Thêm gừng bột + mật ong, khuấy đều","Uống ngay khi còn ấm"],tip:"Không mua lạnh uống thẳng. Phải đun ấm trước — đây là nguyên tắc."},
      {name:"Nước Gừng Nghệ Ấm",category:"Đồ uống",effect:"Chống viêm + ấm sâu nhất trong các đồ uống. Dùng những ngày tay chân lạnh ngắt hoặc sau khi bị mưa.",ingredients:["Gừng tươi 30g","Nghệ tươi 15g (hoặc 1/2 muỗng bột nghệ)","Mật ong 1 muỗng","Nước ấm 200ml","Tiêu đen 1 nhúm nhỏ"],steps:["Gừng + nghệ tươi ép hoặc xay lọc lấy nước","Hoà với nước ấm 60-70°C","Thêm mật ong + tiêu đen, khuấy đều","Uống ngay"],tip:"Tiêu đen giúp cơ thể hấp thu curcumin từ nghệ tốt hơn 20 lần — không bỏ qua."},
      // ── Tráng miệng (3) ───────────────────────────────────────
      {name:"Chè Trôi Nước Đường Gừng",category:"Tráng miệng",effect:"Ấm Tỳ Vị, bổ khí. Món tráng miệng truyền thống tốt nhất cho Dương Hư — không có đá.",ingredients:["Bột nếp 200g","Đường đỏ 3 muỗng","Gừng tươi 1 nhánh lớn","Nước"],steps:["Nhào bột nếp với nước ấm đến khi dẻo mịn","Viên thành quả nhỏ, luộc đến khi nổi + 1 phút","Nấu nước đường đỏ với gừng đập dập","Múc bánh trôi vào bát nước đường ấm, ăn ngay"],tip:"Không chờ nguội, không thêm đá — bánh trôi nguội mất hết ý nghĩa dưỡng sinh."},
      {name:"Chè Táo Đỏ Kỷ Tử Hạt Sen",category:"Tráng miệng",effect:"Bổ khí huyết sâu, an thần, bổ Tâm. Ăn tối 1-2 tiếng trước khi ngủ.",ingredients:["Táo đỏ 10 quả thái lát","Kỷ tử 2 muỗng","Long nhãn khô 25g","Hạt sen 50g (đã luộc sẵn)","Đường đỏ","Gừng 2 lát"],steps:["Hạt sen luộc trước đến gần mềm","Cho tất cả vào nồi với 600ml nước","Đun sôi nhỏ lửa 20 phút","Thêm đường đỏ, ăn ấm trước ngủ"],tip:"Chè nguội hâm lại. Không ăn lạnh, không thêm đá."},
      {name:"Bánh Quy Gừng Mật Ong",category:"Tráng miệng",effect:"Snack ấm thay thế bánh kẹo lạnh. Tiện mang đi, ăn khi cần năng lượng nhanh giữa ngày.",ingredients:["Yến mạch cán 100g","Mật ong 3 muỗng","Bơ đậu phộng 2 muỗng","Bột gừng 1 muỗng","Quế bột 1/2 muỗng","Táo đỏ sấy thái nhỏ 30g"],steps:["Trộn yến mạch + bột gừng + quế trong bát","Hâm mật ong + bơ đậu phộng cho lỏng, đổ vào trộn đều","Thêm táo đỏ sấy, trộn lần cuối","Nặn thành viên, để ngăn mát tủ lạnh"],tip:"Lấy ra ngoài 10 phút trước khi ăn. Bảo quản ngăn mát 5-7 ngày."},
    ],
  },
  khihu: {
    key: "khihu",
    name: "Khí Hư",
    tagline: "“Khi cơ thể thiếu ‘năng lượng vận hành’, mọi thứ vẫn còn nhưng không đủ lực để hoạt động”",
    ageOffset: 3,
    symptoms: ["Dễ mệt, thiếu sức rõ rệt","Nói nhỏ, ít hơi, không muốn nói nhiều","Hụt hơi khi vận động nhẹ","Ra mồ hôi dễ, kể cả khi không nóng","Dễ bị cảm, dễ nhiễm lạnh","Ăn không ngon, dễ đầy bụng"],
    yeuTo: ["Ăn uống không đủ hoặc không đều","Làm việc quá sức, không nghỉ ngơi","Bệnh kéo dài"],
    foods_rec: ["Gạo, cháo, cơm mềm","Khoai lang, khoai tây","Thịt gà, thịt bò","Trứng","Táo đỏ, kỷ tử","Các loại đậu (đậu đỏ, đậu đen)"],
    foods_avoid: ["Đồ lạnh, nước đá (làm yếu Tỳ → giảm sinh Khí)","Cà phê quá nhiều (kích thích rồi làm tụt năng lượng)","Đồ ăn nhanh, khó tiêu","Ăn quá no (làm Tỳ quá tải)","Bỏ bữa hoặc ăn thất thường"],
    analysis: "Trong Đông y, Khí là dạng năng lượng vô hình đẩy mọi hoạt động của cơ thể. Hình dung: Khí = dòng điện, cơ thể = hệ thống máy móc. Máy còn nguyên nhưng dòng điện yếu → chạy chậm, lúc được lúc không. Đó là Khí Hư. Khí Hư thường xuất hiện ở Tỳ (tiêu hoá), Phế (hô hấp) và Thận (năng lượng gốc).",
    strengths: ["Nền tảng chưa bị tổn thương sâu, Khí Hư thường là giai đoạn sớm, chưa đến Dương Hư","Khả năng đáp ứng tốt với nghỉ ngơi và ăn đúng, hồi phục rõ ràng nếu kiên trì","Ý thức cơ thể tốt, bạn đã nhận ra mình mệt, nhiều người bỏ qua tín hiệu này"],
    insights: ["Bạn thường cảm thấy mệt nhất sau bữa ăn chứ không phải trước ăn, dấu hiệu Tỳ Khí yếu đang phải gồng tiêu hoá","Khí Hư thường đi trước Dương Hư, bổ Khí sớm sẽ ngăn không trượt sang thể nặng hơn","Khác với Âm Hư cần làm mát, Khí Hư cần thức ăn ấm nhẹ, đừng nghe lời khuyên chung 'ăn rau mát'"],
    quote: "Cơ thể bạn không yếu đi. Nó chỉ đang nhắc bạn chậm lại và phục hồi đúng cách.",
  },
  amhu: {
    key: "amhu",
    name: "Âm Hư",
    tagline: "“Khi cơ thể thiếu ‘phần làm mát và nuôi dưỡng’, bên ngoài có thể bình thường nhưng bên trong âm thầm sinh nhiệt”",
    ageOffset: 3,
    symptoms: ["Cảm giác nóng trong, nhất là chiều tối","Khô miệng, khô họng, hay khát nước","Da khô, môi khô, dễ bong tróc","Mất ngủ hoặc ngủ không sâu","Ra mồ hôi trộm (ban đêm)","Nóng lòng bàn tay, bàn chân (ngũ tâm phiền nhiệt)"],
    yeuTo: ["Thức khuya kéo dài (nguyên nhân số 1)","Stress, suy nghĩ nhiều","Ăn nhiều đồ cay, nóng, kích thích"],
    foods_rec: ["Lê, táo, nho","Mè đen","Đậu phụ","Sữa (nếu hợp)","Canh thanh nhẹ (canh rau, canh xương loãng)","Mộc nhĩ, ngân nhĩ"],
    foods_avoid: ["Ớt, tiêu, gia vị cay nóng","Rượu bia","Đồ chiên, nướng","Thức ăn quá mặn","Ăn quá khô (thiếu nước)"],
    analysis: "Âm là phần làm mát, nuôi dưỡng và giữ ẩm cho cơ thể. Khi Âm bị thiếu hụt, cơ thể mất đi 'hệ thống làm mát tự nhiên', bên ngoài có thể trông bình thường nhưng bên trong âm thầm sinh nhiệt. Âm Hư khác với Dương Hư: nếu Dương Hư là lạnh và yếu, thì Âm Hư là khô và nóng âm ỉ.",
    strengths: ["Da và tóc bạn thường mịn khi được nuôi dưỡng đúng, phản ứng nhanh với chăm sóc từ bên trong","Âm Hư ở giai đoạn sớm phục hồi rất tốt với thực phẩm bổ Âm","Cơ thể bạn nhạy cảm theo nghĩa tích cực, biết mình thiếu gì và phản hồi rõ"],
    insights: ["Cảm giác nóng chiều tối là dấu hiệu đặc trưng của Âm Hư, không phải do căng thẳng","Âm Hư và khô da từ bên trong rất khác với khô do mất nước thông thường, uống nhiều nước không giải quyết được","Nếu bạn vừa khô vừa gầy khó lên cân, Âm Hư là nguyên nhân cần xem xét đầu tiên"],
    quote: "Bên trong bạn đang khô và nóng âm ỉ. Nuôi dưỡng từ bên trong, không phải thêm nước, mà thêm dưỡng chất.",
  },
  damthap: {
    key: "damthap",
    name: "Đàm Thấp",
    tagline: "“Khi cơ thể tích tụ ‘rác ẩm’, nặng nề, chậm chạp và khó chuyển hoá”",
    ageOffset: 4,
    symptoms: ["Dễ tăng cân, đặc biệt vùng bụng","Cảm giác cơ thể nặng nề, uể oải","Da dầu, dễ nổi mụn ẩn","Nhiều đờm, dễ khạc đờm","Ăn xong dễ đầy bụng, khó tiêu","Thích ăn ngọt, béo, nhưng ăn xong lại mệt"],
    yeuTo: ["Ăn nhiều đồ béo, ngọt, dầu mỡ (chiên rán, trà sữa, bánh ngọt)","Ăn nhiều nhưng Tỳ tiêu hoá yếu, xử lý không nổi nên tích tụ","Ít vận động, hay ngủ ngay sau khi ăn"],
    foods_rec: ["Rau xanh (đặc biệt rau có vị hơi đắng nhẹ)","Đậu đỏ","Gừng","Trà nhẹ (trà gừng, trà thảo mộc)","Cá, thịt nạc","Cháo loãng, canh nhẹ"],
    foods_avoid: ["Đồ chiên rán, dầu mỡ","Trà sữa, đồ ngọt","Sữa béo","Đồ ăn nhanh","Ăn quá no"],
    analysis: "Đàm Thấp xảy ra khi cơ thể không chuyển hoá tốt, chất ẩm và chất béo tích tụ lại, tạo thành 'rác ẩm' trong hệ thống. Không chỉ ở phổi, Đàm Thấp có thể tích tụ ở bất kỳ đâu trong cơ thể, gây nặng nề, trì trệ và khó chuyển hoá.",
    strengths: ["Đàm Thấp có thể cải thiện rõ rệt chỉ trong 2-4 tuần nếu thay đổi chế độ ăn","Khi Tỳ khoẻ, quá trình chuyển hoá tốt lên nhanh, bạn sẽ thấy người nhẹ hơn hẳn","Nhiều người Đàm Thấp có hệ miễn dịch ổn định khi kiểm soát ẩm tốt"],
    insights: ["Đàm Thấp không phải do ăn nhiều, mà do Tỳ không chuyển hoá được. Ăn ít mà vẫn tăng cân là dấu hiệu rõ nhất","Cảm giác nặng đầu sau khi ngủ dậy là Đàm Thấp 'lên não', không phải do ngủ sai tư thế","Môi trường ẩm (điều hoà lạnh + ẩm) làm Đàm Thấp nặng hơn, cần thoáng khí và vận động nhẹ"],
    quote: "Cơ thể bạn không lười biếng. Nó đang bị nặng bởi những gì tích tụ. Giúp nó nhẹ lại.",
  },
  thapnhiet: {
    key: "thapnhiet",
    name: "Thấp Nhiệt",
    tagline: "“Khi cơ thể vừa ‘ẩm’ vừa ‘nóng’, tích tụ không chỉ gây nặng mà còn sinh viêm, bức bối”",
    ageOffset: 3,
    symptoms: ["Da dầu, dễ nổi mụn viêm, mụn bọc","Cảm giác nóng trong người, đặc biệt vùng ngực – bụng","Miệng đắng, miệng hôi nhẹ","Người nặng nhưng lại dễ bức bối, khó chịu","Nước tiểu vàng, có mùi nặng","Phân có mùi nặng, dễ dính"],
    yeuTo: ["Ăn nhiều đồ cay, dầu mỡ, chiên rán","Uống rượu bia thường xuyên","Thức khuya"],
    foods_rec: ["Rau xanh (rau cải, rau má, rau diếp)","Đậu xanh","Bí đao","Dưa leo (ăn vừa phải)","Canh thanh nhẹ","Trái cây mát vừa (không quá lạnh)"],
    foods_avoid: ["Đồ chiên rán","Đồ cay (ớt, tiêu nhiều)","Rượu bia","Thức ăn nhanh","Đồ ngọt nhiều"],
    analysis: "Thấp Nhiệt là khi cơ thể vừa có ẩm vừa có nhiệt, như vũng nước bị hâm nóng. So với Đàm Thấp (chỉ đọng), Thấp Nhiệt = đọng + bốc: tích tụ không chỉ gây nặng mà còn sinh viêm, bức bội, mụn nhọt. Thường liên quan đến Gan-Mật, Tỳ-Vị và da.",
    strengths: ["Thấp Nhiệt phản ứng nhanh với thay đổi chế độ ăn, mụn và da cải thiện sớm","Khi giải quyết được Thấp Nhiệt, tiêu hoá và tinh thần đều tốt lên rõ rệt","Cơ thể bạn 'báo hiệu' rõ ràng qua da, đây là lợi thế để theo dõi tiến trình"],
    insights: ["Mụn do Thấp Nhiệt không giảm bằng skincare ngoài da, cần giải quyết từ bên trong","Ăn cay nóng + đồ chiên + bia rượu là bộ ba tạo Thấp Nhiệt nhanh nhất","Khi Thấp Nhiệt giảm, miệng bớt đắng và da sáng hơn thường là dấu hiệu đầu tiên bạn nhận ra"],
    quote: "Da của bạn đang nói thay cho bên trong. Lắng nghe và giải phóng nhiệt từ gốc rễ.",
  },
  huyetu: {
    key: "huyetu",
    name: "Huyết Ứ",
    tagline: "“Khi máu không lưu thông tốt, cơ thể giống như dòng nước bị tắc, chảy chậm và ứ đọng”",
    ageOffset: 5,
    symptoms: ["Da sạm, không đều màu, thiếu sức sống","Dễ xuất hiện vết thâm, lâu mờ","Đau cố định một chỗ (đau nhức rõ vị trí)","Dễ bầm tím dù va chạm nhẹ","Môi thâm, môi không hồng","Kinh nguyệt có cục máu, màu sẫm (ở nữ)"],
    yeuTo: ["Ít vận động, ngồi nhiều (nguyên nhân phổ biến nhất)","Stress kéo dài làm Khí trệ, Khí không đẩy được Huyết","Cơ thể bị lạnh kéo dài làm co mạch, hoặc sau sinh / sau kỳ kinh không phục hồi tốt"],
    foods_rec: ["Gừng","Nghệ","Hành, tỏi","Rau xanh","Cá","Táo đỏ"],
    foods_avoid: ["Đồ chiên rán","Đồ béo","Đồ lạnh (làm co mạch)","Ăn quá no"],
    analysis: "Huyết Ứ xảy ra khi máu không lưu thông suôn sẻ, giống dòng nước bị tắc nghẽn. Máu ứ đọng không nuôi dưỡng được các tổ chức, gây đau nhức, sạm da và kinh nguyệt bất thường. Đây là thể có ảnh hưởng sâu nhất đến tuổi sinh học nếu không được can thiệp sớm.",
    strengths: ["Huyết Ứ phục hồi tốt với vận động nhẹ đều đặn, không cần tập nặng","Khi lưu thông được cải thiện, màu sắc da và tinh thần thay đổi rõ ràng","Bạn có khả năng kiên trì, phục hồi Huyết Ứ cần thời gian nhưng bền vững"],
    insights: ["Đau cố định một chỗ (không di chuyển) là dấu hiệu đặc trưng của Huyết Ứ, khác với đau do Khí Trệ lan khắp","Vết thâm lâu mờ không phải do thiếu vitamin C, mà do máu không đủ lực để 'dọn dẹp'","Huyết Ứ ảnh hưởng lớn nhất đến tuổi sinh học, can thiệp sớm giúp làm chậm quá trình lão hoá rõ rệt"],
    quote: "Dòng chảy bị tắc thì mọi thứ ngừng lại. Giúp máu lưu thông, sự sống sẽ trở lại.",
  },
  khiuat: {
    key: "khiuat",
    name: "Khí Uất",
    tagline: "“Khi khí bị ‘kẹt lại’, cảm xúc không thông thì cơ thể cũng không thông”",
    ageOffset: 2,
    symptoms: ["Dễ cáu gắt, thay đổi cảm xúc thất thường","Hay thở dài","Cảm giác tức ngực, nghẹn ở cổ họng","Ăn uống thất thường (lúc ăn nhiều, lúc không muốn ăn)","Đầy bụng, khó tiêu khi stress","Ngủ không sâu, hay suy nghĩ trước khi ngủ"],
    yeuTo: ["Stress kéo dài","Kìm nén cảm xúc","Suy nghĩ quá nhiều"],
    foods_rec: ["Trà hoa (hoa cúc, hoa hồng)","Rau xanh","Trái cây nhẹ, tươi","Thực phẩm thanh, dễ tiêu","Gừng (ít) → giúp lưu thông nhẹ"],
    foods_avoid: ["Rượu bia","Đồ cay nóng quá mức","Đồ chiên rán","Ăn quá no","Ăn khi đang stress"],
    analysis: "Khí Uất xảy ra khi dòng Khí bị kẹt lại, không lưu thông, thường do cảm xúc không được giải phóng. Trong Đông y: 'Khí trệ thì đau, Khí thông thì không đau.' Khí Uất đặc biệt ở chỗ: cảm xúc và thể chất ảnh hưởng nhau trực tiếp, tâm trạng xấu gây triệu chứng thể chất và ngược lại.",
    strengths: ["Khi Khí thông, sức sáng tạo và năng lượng của bạn thường rất cao","Khí Uất phục hồi tốt với vận động và kết nối xã hội, không cần thuốc phức tạp","Bạn nhạy cảm với cảm xúc, đây là tài sản nếu biết kênh hóa đúng cách"],
    insights: ["Hay thở dài là phản xạ tự nhiên khi Khí bị kẹt, cơ thể đang cố tự giải phóng","Khí Uất và căng thẳng mãn tính là vòng lặp: căng thẳng → Khí trệ → triệu chứng → căng thẳng thêm. Cần phá vòng từ cả 2 phía","Vận động là 'thuốc' hiệu quả nhất cho Khí Uất, không nhất thiết phải tập nặng, chỉ cần di chuyển đều đặn"],
    quote: "Khi cảm xúc không được thông, cơ thể cũng không thông. Hãy để mọi thứ được chảy.",
  },
  dacbam: {
    key: "dacbam",
    name: "Đặc Bẩm",
    tagline: "“Cơ thể nhạy cảm từ bên trong, dễ phản ứng mạnh với môi trường và tác nhân bên ngoài”",
    ageOffset: 2,
    symptoms: ["Dễ bị dị ứng (da, mũi, hô hấp)","Da nhạy cảm, dễ kích ứng","Dễ bị viêm mũi dị ứng","Có tiền sử hen, viêm da, dị ứng từ nhỏ","Dễ phản ứng với thực phẩm","Hệ miễn dịch không ổn định"],
    yeuTo: ["Di truyền","Hệ miễn dịch “quá nhạy”","Môi trường sống"],
    foods_rec: ["Thực phẩm quen thuộc, đã biết là “hợp”","Thức ăn nấu chín kỹ","Rau xanh sạch","Thịt cá tươi, nguồn rõ ràng","Cháo, canh nhẹ"],
    foods_avoid: ["Hải sản lạ (nếu cơ địa nhạy cảm)","Đồ ăn chế biến sẵn","Thực phẩm nhiều phụ gia","Đồ ăn lạ chưa từng thử","Rượu bia"],
    analysis: "Đặc Bẩm là thể trạng bẩm sinh, cơ thể nhạy cảm từ nền tảng gene và cấu trúc. Không phải bệnh, mà là một cách cơ thể vận hành khác biệt: phản ứng nhanh hơn, mạnh hơn với tác nhân bên ngoài. Quản lý Đặc Bẩm là nghệ thuật tránh kích thích chứ không phải chữa khỏi.",
    strengths: ["Đặc Bẩm thường đi kèm trực giác cơ thể tốt, bạn biết mình cần gì","Khi tìm được môi trường phù hợp, cơ thể bạn hoạt động rất ổn định","Nhạy cảm không phải điểm yếu, nhiều người Đặc Bẩm có sức đề kháng tốt khi được quản lý đúng"],
    insights: ["Đặc Bẩm không 'chữa được', nhưng có thể quản lý tốt đến mức gần như không ảnh hưởng chất lượng sống","Mỗi lần phản ứng mạnh là cơ hội để biết thêm tác nhân cần tránh, ghi lại thành danh sách cá nhân","Chế độ ăn đơn giản, dễ kiểm soát thường hiệu quả hơn chế độ ăn 'siêu khoẻ' phức tạp cho Đặc Bẩm"],
    quote: "Cơ thể bạn nhạy cảm không phải là điểm yếu. Đó là cách nó bảo vệ bạn, hãy học cách làm việc cùng nó.",
  },
  binhhoa: {
    key: "binhhoa",
    name: "Bình Hòa",
    tagline: "“Cơ thể cân bằng, khi mọi thứ vận hành đúng nhịp, không thừa không thiếu”",
    ageOffset: -2,
    symptoms: ["Ăn ngon, tiêu hoá tốt","Ngủ sâu, dễ ngủ, thức dậy tỉnh táo","Tinh thần ổn định, ít dao động cực đoan","Da dẻ hồng hào, đều màu, có sức sống","Không quá sợ lạnh hay sợ nóng","Ít bệnh vặt, hoặc bệnh thì hồi phục nhanh"],
    yeuTo: ["Ăn uống điều độ","Sinh hoạt đúng nhịp","Vận động đều"],
    foods_rec: ["Đủ 4 nhóm","Rau củ theo mùa","Thực phẩm tươi, nấu chín","Ăn đúng giờ"],
    foods_avoid: ["Ăn quá no hoặc bỏ bữa","Ăn lệch (chỉ ăn đạm hoặc chỉ ăn rau)","Thực phẩm công nghiệp nhiều","Ăn theo “trend” cực đoan (detox, nhịn ăn kéo dài)"],
    analysis: "Bình Hòa là trạng thái lý tưởng trong Đông y, khi Âm Dương cân bằng, Khí Huyết lưu thông, các tạng phủ hoạt động hài hoà. Đây không phải đích đến một lần rồi thôi, mà là trạng thái cần duy trì qua lối sống nhất quán. Bình Hòa vẫn cần chăm sóc để không trượt sang thể bệnh lý.",
    strengths: ["Cơ thể bạn đang ở trạng thái lý tưởng, đây là nền tảng để phòng bệnh tốt nhất","Khả năng tự phục hồi của bạn cao hơn các thể khác","Năng lượng ổn định giúp bạn duy trì lối sống lành mạnh dễ hơn"],
    insights: ["Bình Hòa là trạng thái cần duy trì chủ động, không phải tự nhiên mà có mãi","Khi stressed hoặc thay đổi lối sống đột ngột, Bình Hòa có thể trượt sang Khí Uất hoặc Khí Hư, phòng ngừa bằng nhất quán","Bạn là người phù hợp nhất để trở thành tấm gương sống khoẻ cho người xung quanh"],
    quote: "Bạn đang ở trạng thái mà nhiều người cố gắng đạt tới. Hãy trân trọng và duy trì nó.",
  },
};

export const QUESTIONS: Question[] = [
  {id:1,group:"Năng lượng",text:"Bạn có thường xuyên cảm thấy mệt mỏi, thiếu sức dù không làm gì nặng?",options:[{label:"Không, năng lượng bình thường",score:{}},{label:"Đôi khi",score:{khihu:1}},{label:"Thường xuyên",score:{khihu:2,duonghu:1}}]},
  {id:2,group:"Năng lượng",text:"Bạn có bị hụt hơi khi leo cầu thang hoặc đi nhanh?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1}},{label:"Thường xuyên",score:{khihu:2}}]},
  {id:3,group:"Năng lượng",text:"Tay chân bạn có thường lạnh hơn người khác, kể cả khi trời không lạnh?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1}},{label:"Thường xuyên",score:{duonghu:2,khihu:1}}]},
  {id:4,group:"Năng lượng",text:"Bạn có sợ lạnh rõ rệt, thích uống nước ấm, hay mặc thêm áo?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1}},{label:"Thường xuyên",score:{duonghu:2}}]},
  {id:5,group:"Năng lượng",text:"Bạn thức dậy buổi sáng có cảm giác chưa hồi phục dù ngủ đủ giờ?",options:[{label:"Không, dậy tỉnh táo",score:{}},{label:"Đôi khi",score:{duonghu:1,khihu:1}},{label:"Thường xuyên",score:{duonghu:2,khihu:1}}]},
  {id:6,group:"Năng lượng",text:"Bạn có ra mồ hôi dễ kể cả khi không nóng hay không vận động?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1}},{label:"Thường xuyên",score:{khihu:2}}]},
  {id:7,group:"Năng lượng",text:"Bạn có cảm thấy cơ thể nặng nề, uể oải mà không rõ lý do?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{damthap:1,khihu:1}},{label:"Thường xuyên",score:{damthap:2,khihu:1}}]},
  {id:8,group:"Tiêu hoá",text:"Bạn có hay bị đầy bụng, khó tiêu sau khi ăn?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{damthap:1,duonghu:1}},{label:"Thường xuyên",score:{damthap:2,duonghu:1}}]},
  {id:9,group:"Tiêu hoá",text:"Khi ăn đồ lạnh (nước đá, salad, trái cây lạnh) bạn có bị đau bụng hoặc tiêu chảy?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1}},{label:"Thường xuyên",score:{duonghu:2}}]},
  {id:10,group:"Tiêu hoá",text:"Phân của bạn có thường lỏng, không thành khuôn?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1}},{label:"Thường xuyên",score:{duonghu:2}}]},
  {id:11,group:"Tiêu hoá",text:"Bạn có xu hướng tăng cân vùng bụng dù không ăn nhiều hơn bình thường?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{damthap:1}},{label:"Thường xuyên",score:{damthap:2}}]},
  {id:12,group:"Tiêu hoá",text:"Bạn có thường thấy miệng đắng hoặc miệng có mùi vào buổi sáng?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{thapnhiet:1}},{label:"Thường xuyên",score:{thapnhiet:2}}]},
  {id:13,group:"Tiêu hoá",text:"Bạn có cảm giác ăn không ngon, ăn xong vẫn không thấy có năng lượng?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1,damthap:1}},{label:"Thường xuyên",score:{khihu:2,damthap:1}}]},
  {id:14,group:"Cảm xúc",text:"Bạn có dễ cáu gắt, thay đổi cảm xúc thất thường mà không rõ lý do?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khiuat:1}},{label:"Thường xuyên",score:{khiuat:2}}]},
  {id:15,group:"Cảm xúc",text:"Bạn có hay thở dài một mình?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khiuat:1}},{label:"Thường xuyên",score:{khiuat:2}}]},
  {id:16,group:"Cảm xúc",text:"Bạn có cảm giác tức ngực, nghẹn ở cổ họng mà không do bệnh?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khiuat:1}},{label:"Thường xuyên",score:{khiuat:2}}]},
  {id:17,group:"Cảm xúc",text:"Bạn có hay lo âu, suy nghĩ nhiều và khó dừng lại?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khiuat:1,amhu:1}},{label:"Thường xuyên",score:{khiuat:2,amhu:1}}]},
  {id:18,group:"Cảm xúc",text:"Bạn có thường cảm thấy tinh thần uể oải, không có hứng làm gì?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1,duonghu:1}},{label:"Thường xuyên",score:{khihu:2,duonghu:1}}]},
  {id:19,group:"Cảm xúc",text:"Bạn có cảm giác nóng trong người, bực bội khó giải thích?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{thapnhiet:1,amhu:1}},{label:"Thường xuyên",score:{thapnhiet:2,amhu:1}}]},
  {id:20,group:"Da & Tóc",text:"Da và môi bạn có thường khô, bong tróc dù uống đủ nước?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1}},{label:"Thường xuyên",score:{amhu:2}}]},
  {id:21,group:"Da & Tóc",text:"Vào buổi chiều tối bạn có cảm giác nóng từ bên trong, như có lửa âm ỉ?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1}},{label:"Thường xuyên",score:{amhu:2}}]},
  {id:22,group:"Da & Tóc",text:"Da bạn có dầu, hay nổi mụn viêm đỏ?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{thapnhiet:1}},{label:"Thường xuyên",score:{thapnhiet:2}}]},
  {id:23,group:"Da & Tóc",text:"Da bạn có sạm, không đều màu, vết thâm do mụn hoặc va chạm lâu mờ?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{huyetu:1}},{label:"Thường xuyên",score:{huyetu:2}}]},
  {id:24,group:"Da & Tóc",text:"Bạn có hay khô miệng, khô họng, thích uống nước mát?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1}},{label:"Thường xuyên",score:{amhu:2}}]},
  {id:25,group:"Da & Tóc",text:"Bạn có hay nổi mẩn đỏ, ngứa da hoặc phản ứng với thực phẩm, mỹ phẩm?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{dacbam:1}},{label:"Thường xuyên",score:{dacbam:2}}]},
  {id:26,group:"Nhạy cảm",text:"Bạn có thường bị đau nhức cố định một chỗ (không di chuyển)?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{huyetu:1}},{label:"Thường xuyên",score:{huyetu:2}}]},
  {id:27,group:"Nhạy cảm",text:"Bạn có hay bị hắt hơi, nghẹt mũi khi thay đổi thời tiết hoặc tiếp xúc bụi?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{dacbam:1}},{label:"Thường xuyên",score:{dacbam:2}}]},
  {id:28,group:"Nhạy cảm",text:"Cơ thể bạn có phản ứng mạnh (ngứa, đỏ, khó thở nhẹ) khi gặp tác nhân lạ?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{dacbam:1}},{label:"Thường xuyên",score:{dacbam:2}}]},
  {id:29,group:"Nhạy cảm",text:"Bạn có bị đau bụng kinh dữ dội, hoặc kinh nguyệt có nhiều cục máu đông?",options:[{label:"Không / Không áp dụng",score:{}},{label:"Đôi khi",score:{huyetu:1}},{label:"Thường xuyên",score:{huyetu:2}}]},
  {id:30,group:"Nhạy cảm",text:"Nhìn chung bạn cảm thấy cơ thể mình khá cân bằng và ít bệnh vặt?",options:[{label:"Có, khá cân bằng",score:{binhhoa:2}},{label:"Bình thường",score:{binhhoa:1}},{label:"Không, hay có vấn đề",score:{}}]},
  {id:39,group:"Cảm xúc",text:"Bạn có khó ngủ, ngủ không sâu hoặc dễ tỉnh giữa đêm?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1,khiuat:1}},{label:"Thường xuyên",score:{amhu:2,khiuat:1}}]},
  {id:45,group:"Cảm xúc",text:"Bạn có ngủ ngon giấc và thức dậy tỉnh táo, tràn đầy năng lượng?",options:[{label:"Thường xuyên",score:{binhhoa:2}},{label:"Đôi khi",score:{binhhoa:1}},{label:"Hiếm khi hoặc không",score:{}}]},
  {id:40,group:"Tiêu hoá",text:"Bạn có hay bị táo bón hoặc phân khô, khó đi?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1}},{label:"Thường xuyên",score:{amhu:2}}]},
  {id:41,group:"Nhạy cảm",text:"Bạn có dễ bị cảm lạnh hoặc ốm vặt hơn người xung quanh?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1}},{label:"Thường xuyên",score:{khihu:2}}]},
  {id:42,group:"Da & Tóc",text:"Bạn có dễ bị bầm tím dù chỉ va chạm nhẹ?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{huyetu:1}},{label:"Thường xuyên",score:{huyetu:2}}]},
  {id:43,group:"Da & Tóc",text:"Môi bạn có thường thâm, không hồng tự nhiên?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{huyetu:1}},{label:"Thường xuyên",score:{huyetu:2}}]},
  {id:44,group:"Da & Tóc",text:"Da bạn có hay nổi mụn ẩn dưới da (dạng cục nhỏ, không đỏ, đau khi chạm)?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{damthap:1}},{label:"Thường xuyên",score:{damthap:2}}]},
  {id:31,group:"Năng lượng",text:"Mệt mỏi của bạn thường kèm theo ra mồ hôi hoặc hụt hơi?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khihu:1}},{label:"Thường xuyên",score:{khihu:2}}],followUpOf:1},
  {id:32,group:"Năng lượng",text:"Cảm giác lạnh của bạn nặng nhất vào buổi sáng hoặc sau khi ăn?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1}},{label:"Thường xuyên",score:{duonghu:2}}],followUpOf:3},
  {id:33,group:"Tiêu hoá",text:"Phân lỏng của bạn có kèm theo cảm giác mệt, hụt sức sau đó không?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{duonghu:1,khihu:1}},{label:"Thường xuyên",score:{duonghu:2}}],followUpOf:10},
  {id:34,group:"Tiêu hoá",text:"Bạn có thường cảm thấy đầy bụng kèm theo khô miệng, khát nước?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1,damthap:1}},{label:"Thường xuyên",score:{amhu:2}}],followUpOf:8},
  {id:35,group:"Cảm xúc",text:"Khi cáu gắt bạn có kèm theo đau tức vùng sườn hoặc ngực không?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{khiuat:1}},{label:"Thường xuyên",score:{khiuat:2}}],followUpOf:14},
  {id:36,group:"Da & Tóc",text:"Mụn viêm của bạn thường xuất hiện vùng má, mũi, hay lưng?",options:[{label:"Không nhiều",score:{}},{label:"Chủ yếu vùng mặt",score:{thapnhiet:1}},{label:"Nhiều, kể cả lưng/ngực",score:{thapnhiet:2}}],followUpOf:22},
  {id:37,group:"Da & Tóc",text:"Vết thâm của bạn có kèm theo đau nhức tại chỗ không?",options:[{label:"Không đau",score:{}},{label:"Đôi khi đau nhẹ",score:{huyetu:1}},{label:"Thường đau rõ",score:{huyetu:2}}],followUpOf:23},
  {id:38,group:"Nhạy cảm",text:"Dị ứng của bạn có theo mùa (xuân-hè) hay xuất hiện quanh năm?",options:[{label:"Không áp dụng",score:{}},{label:"Theo mùa",score:{dacbam:1}},{label:"Quanh năm",score:{dacbam:2}}],followUpOf:27},
  {id:46,group:"Cảm xúc",text:"Khi ngủ bạn có bị ra mồ hôi, ướt lưng hoặc ướt áo dù không nóng?",options:[{label:"Không",score:{}},{label:"Đôi khi",score:{amhu:1}},{label:"Thường xuyên",score:{amhu:2}}],followUpOf:39},
];

export function computeScore(answers: Record<number, number>): ScoreResult {
  const scores: Record<TheKey, number> = {duonghu:0,khihu:0,amhu:0,damthap:0,thapnhiet:0,huyetu:0,khiuat:0,dacbam:0,binhhoa:0};
  const maxScores: Record<TheKey, number> = {duonghu:0,khihu:0,amhu:0,damthap:0,thapnhiet:0,huyetu:0,khiuat:0,dacbam:0,binhhoa:0};
  const symptomMatches: Record<TheKey, {matched:number;total:number}> = {
    duonghu:{matched:0,total:0},khihu:{matched:0,total:0},amhu:{matched:0,total:0},
    damthap:{matched:0,total:0},thapnhiet:{matched:0,total:0},huyetu:{matched:0,total:0},
    khiuat:{matched:0,total:0},dacbam:{matched:0,total:0},binhhoa:{matched:0,total:0},
  };

  for (const q of QUESTIONS) {
    const ans = answers[q.id] ?? 0;
    // max possible = highest option score for each the
    for (const opt of q.options) {
      for (const [k, v] of Object.entries(opt.score) as [TheKey, number][]) {
        if (v > (maxScores[k] ?? 0)) maxScores[k] = v;
      }
    }
    // accumulate
    for (const [key, maxVal] of Object.entries(maxScores) as [TheKey, number][]) {
      // track if this question is relevant for this the
    }

    const chosen = q.options[ans];
    for (const [k, v] of Object.entries(chosen.score) as [TheKey, number][]) {
      scores[k] = (scores[k] ?? 0) + v;
    }
    // symptom match: question targets a the if any option has score for it
    const targetKeys = new Set<TheKey>();
    for (const opt of q.options) {
      for (const k of Object.keys(opt.score) as TheKey[]) {
        if (opt.score[k]! > 0) targetKeys.add(k);
      }
    }
    for (const k of Array.from(targetKeys)) {
      symptomMatches[k].total++;
      if (ans > 0 && (chosen.score[k] ?? 0) > 0) symptomMatches[k].matched++;
    }
  }

  // recompute maxScores properly — lấy MAX của mỗi câu, không cộng tất cả options
  const trueMax: Record<TheKey, number> = {duonghu:0,khihu:0,amhu:0,damthap:0,thapnhiet:0,huyetu:0,khiuat:0,dacbam:0,binhhoa:0};
  for (const q of QUESTIONS) {
    const qMax: Partial<Record<TheKey, number>> = {};
    for (const opt of q.options) {
      for (const [k, v] of Object.entries(opt.score) as [TheKey, number][]) {
        qMax[k as TheKey] = Math.max(qMax[k as TheKey] ?? 0, v as number);
      }
    }
    for (const [k, v] of Object.entries(qMax) as [TheKey, number][]) {
      trueMax[k] = (trueMax[k] ?? 0) + v;
    }
  }

  // normalize
  const pct: Record<TheKey, number> = {} as Record<TheKey, number>;
  for (const k of THE_KEYS) {
    pct[k] = trueMax[k] > 0 ? Math.round((scores[k] / trueMax[k]) * 100) : 0;
  }

  const sorted = [...THE_KEYS].sort((a, b) => pct[b] - pct[a]);
  const dominant = sorted[0];
  const secondary = sorted[1] !== dominant && pct[sorted[1]] > 0 ? sorted[1] : null;

  const info = THE_CONTENT[dominant];
  const secInfo = secondary ? THE_CONTENT[secondary] : null;
  const realAge = 30; // placeholder, computed from userInfo.birthYear at runtime
  const bodyAge = realAge + info.ageOffset + (secInfo ? Math.round(secInfo.ageOffset * 0.4) : 0);

  return { dominant, secondary, scores, maxScores: trueMax, pct, symptomMatches, bodyAge };
}

export function computeBodyAge(birthYear: number, dominant: TheKey, secondary: TheKey | null): number {
  const realAge = new Date().getFullYear() - birthYear;
  const info = THE_CONTENT[dominant];
  const secOff = secondary ? THE_CONTENT[secondary].ageOffset * 0.4 : 0;
  return Math.round(realAge + info.ageOffset + secOff);
}