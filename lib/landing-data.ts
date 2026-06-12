// lib/landing-data.ts — dữ liệu cho landing page "Set mix 30 vị trà" + form đăng ký gom 3 sản phẩm
// Nguồn: EG DANH MỤC SẢN PHẨM (Blind Box 30 teas) + EG SET TCM.docx + catalog
// Sửa giá / nội dung ở đây, KHÔNG cần đụng vào giao diện.

export interface ProductImage {
  // Đường dẫn ảnh trong /public/images/... (ảnh khách gửi sau, hiện để placeholder)
  src: string;
  alt: string;
}

export interface LandingProduct {
  id: 'tra30' | 'tcm' | 'course';
  eyebrow: string;
  name: string;
  tagline: string;
  price: string;          // giá hiển thị; "" nếu chưa chốt
  priceNote?: string;     // ghi chú giá (vd "Giá gốc 1.240.000đ")
  bullets: string[];      // điểm chính
  images: ProductImage[]; // ảnh (placeholder cho tới khi khách gửi)
  externalUrl?: string;   // link trang riêng nếu có (khoá học, boxset)
}

// ─── 1. SET MIX 30 VỊ TRÀ (nhân vật chính của landing) ────────
// HUA YI BEI — Hộp trà dưỡng sinh tổng hợp Khinh Dưỡng, 30 gói túi lọc / 15 vị, hộp 92g
export const TEA_FLAVORS: string[] = [
  'Bạch trà sơn tra',
  'Bạch trà cam thảo',
  'Bạch trà lê tuyết',
  'Bạch trà kiều mạch',
  'Bạch trà trần bì',
  'Bạch trà la hán quả',
  'Ô long quýt xanh',
  'Phổ nhĩ quýt xanh',
  'Hồng trà nhân sâm',
  'Trà ngũ chỉ mao đào phục linh',
  'Trà lê tuyết kỷ tử',
  'Trà la hán quả hoa cúc',
  'Trà táo đỏ đậu đỏ sơn tra',
  'Trà đậu đỏ ý dĩ',
  'Trà trúc mía bạch mao căn lê tuyết',
];

// ─── 3 sản phẩm cho phần combo + form đăng ký ─────────────────
export const PRODUCTS: LandingProduct[] = [
  {
    id: 'tra30',
    eyebrow: 'Blind Box · 30 ngày 30 vị trà',
    name: 'Set Mix 30 Vị Trà Dưỡng Sinh',
    tagline: 'Mỗi ngày một vị trà, 30 ngày đổi vị không trùng. Thay cho đồ uống nhiều đường, nhẹ nhàng nuôi dưỡng cơ thể.',
    price: '240.000đ',
    priceNote: 'Hộp 92g · 30 gói túi lọc · 15 vị khác nhau',
    bullets: [
      '30 gói trà túi lọc, 15 vị từ thanh nhẹ, ngọt dịu đến đậm vị thảo mộc',
      'Phù hợp người thích đổi khẩu vị mỗi ngày',
      'Uống hằng ngày thay nước ngọt, trà sữa',
    ],
    images: [
      { src: '/images/blindbox/hero.png', alt: 'Set mix 30 vị trà dưỡng sinh' },
      { src: '/images/blindbox/box-01.png', alt: 'Hộp trà 30 gói túi lọc' },
      { src: '/images/blindbox/tea-cup.png', alt: 'Ly trà dưỡng sinh' },
      { src: '/images/blindbox/flavors.png', alt: '15 vị trà trong hộp' },
    ],
  },
  {
    id: 'tcm',
    eyebrow: 'Bộ dụng cụ dưỡng sinh',
    name: 'Bộ Dưỡng Sinh Nhập Môn',
    tagline: 'Bộ dụng cụ dưỡng sinh cơ bản cho người mới bắt đầu chăm sóc cơ thể tại nhà mỗi ngày.',
    price: '949.000đ',
    priceNote: 'Tặng kèm Đệm ngải cứu điện khi mua set',
    bullets: [
      'Búa ngải cứu · Lược gỗ · Chải body · Gua sha mặt',
      'Vỗ bát huyệt size lớn 48cm',
      'Túi ngâm chân thảo dược RUYI (900g/30 gói) + chậu gấp gọn',
      '🎁 Tặng Đệm ngải cứu điện (25x65cm, 35–85°C)',
    ],
    // Chưa có ảnh đại diện cả set — chờ khách gửi, tạm hiện placeholder
    images: [],
    externalUrl: 'https://eg-boxset-catalog.vercel.app/',
  },
  {
    id: 'course',
    eyebrow: 'Khoá học dưỡng sinh',
    name: '15 Phút Dưỡng Sinh Đúng Trình Tự',
    tagline: 'Khoá học hướng dẫn chăm sóc sức khỏe theo Đông y, áp dụng mỗi ngày chỉ 15 phút.',
    price: 'Từ 299.000đ',
    priceNote: 'Gói 299k / 499k (nội dung chờ xác nhận)',
    bullets: [
      'Học cách dưỡng sinh đúng trình tự theo thể trạng',
      'Bài bản, dễ áp dụng cho người mới',
    ],
    // Chưa có ảnh banner khoá học — chờ khách gửi, tạm hiện placeholder
    images: [],
    externalUrl: 'https://minh-trang.vercel.app/duong-sinh',
  },
];

// ─── Form đăng ký ─────────────────────────────────────────────
export const PRODUCT_OPTIONS = [
  { value: 'tra30', label: 'Set mix 30 vị trà (240.000đ)' },
  { value: 'tcm', label: 'Bộ Dưỡng Sinh Nhập Môn (949.000đ)' },
  { value: 'course', label: 'Khoá học 15 phút dưỡng sinh (từ 299.000đ)' },
];

// Endpoint nhận đăng ký — đổ về Google Sheet.
// TODO: dán URL Google Apps Script Web App của Minh Trang vào đây khi có.
// Hiện để rỗng → form vẫn chạy demo (hiện màn cảm ơn) nhưng CHƯA ghi vào Sheet.
export const REGISTER_ENDPOINT = '';
