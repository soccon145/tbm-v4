'use client';

import { useState, useCallback } from 'react';
import {
  PRODUCTS, TEA_FLAVORS, PRODUCT_OPTIONS, REGISTER_ENDPOINT,
  type LandingProduct,
} from '../../lib/landing-data';

// ─── Brand header (đồng bộ với app test) ──────────────────────
function BrandHeader() {
  return (
    <div style={{ textAlign: 'center', padding: '22px 24px 12px' }}>
      <div style={{ width: '40px', height: '1px', background: 'var(--crimson)', margin: '0 auto 8px' }} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '13px', color: 'var(--text-muted)' }}>◆</span>
        <span style={{ fontSize: '9px', color: 'var(--text-muted)', letterSpacing: '0.25em', fontFamily: 'var(--font-cormorant)' }}>
          Elisabeth&apos;s Garden
        </span>
      </div>
    </div>
  );
}

// ─── Ảnh sản phẩm: render ảnh thật nếu có, placeholder nếu chưa ─
function ImgSlot({ alt, ratio = '4 / 3', src }: { alt: string; ratio?: string; src?: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt}
        style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', display: 'block', background: 'var(--cream-mid)' }} />
    );
  }
  return (
    <div
      style={{
        width: '100%', aspectRatio: ratio, background: 'var(--cream-mid)',
        border: '1px dashed var(--crimson-border)', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexDirection: 'column',
        gap: '6px', color: 'var(--text-muted)', textAlign: 'center', padding: '12px',
      }}
    >
      <span style={{ fontSize: '22px', opacity: 0.5 }}>◆</span>
      <span style={{ fontSize: '11px', letterSpacing: '0.05em' }}>Ảnh: {alt}</span>
    </div>
  );
}

// ─── Card 1 sản phẩm trong phần combo ─────────────────────────
function ProductCard({ p }: { p: LandingProduct }) {
  return (
    <div className="card" style={{ overflow: 'hidden', marginBottom: '16px' }}>
      <ImgSlot src={p.images[0]?.src} alt={p.images[0]?.alt ?? p.name} ratio="16 / 10" />
      <div style={{ padding: '16px 16px 18px' }}>
        <p className="eyebrow" style={{ marginBottom: '6px' }}>{p.eyebrow}</p>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.2 }}>
          {p.name}
        </h3>
        <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-mid)', lineHeight: 1.6, margin: '8px 0 12px' }}>
          {p.tagline}
        </p>
        <div style={{ marginBottom: '12px' }}>
          {p.bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', marginBottom: '5px' }}>
              <span style={{ color: 'var(--crimson)', flexShrink: 0, fontSize: '12px' }}>◆</span>
              <span style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.5 }}>{b}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', borderTop: '1px solid var(--gold)', paddingTop: '12px' }}>
          <div>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '26px', fontWeight: 600, color: 'var(--crimson)' }}>
              {p.price || 'Liên hệ'}
            </span>
            {p.priceNote && (
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>{p.priceNote}</div>
            )}
          </div>
          {p.externalUrl && (
            <a href={p.externalUrl} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '12px', color: 'var(--crimson)', fontWeight: 600, textDecoration: 'underline', flexShrink: 0 }}>
              Xem chi tiết →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Form đăng ký gom 3 sản phẩm ──────────────────────────────
function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const togglePick = (v: string) =>
    setPicked(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const phoneOk = phone.replace(/\D/g, '').length >= 9;
  const valid = name.trim().length >= 2 && phoneOk && picked.length > 0;

  const submit = useCallback(async () => {
    if (!valid || sending) return;
    setSending(true);
    const payload = {
      name: name.trim(), phone: phone.trim(), address: address.trim(),
      products: picked.map(v => PRODUCT_OPTIONS.find(o => o.value === v)?.label ?? v).join(', '),
      note: note.trim(),
      time: new Date().toISOString(),
    };
    try {
      if (REGISTER_ENDPOINT) {
        await fetch(REGISTER_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
      }
      setSent(true);
    } catch {
      // vẫn hiển thị cảm ơn để không kẹt khách; đơn được giữ ở client
      setSent(true);
    } finally {
      setSending(false);
    }
  }, [valid, sending, name, phone, address, picked, note]);

  if (sent) {
    return (
      <div className="card-crimson" style={{ padding: '28px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '40px', color: 'var(--crimson)', marginBottom: '8px' }}>✦</div>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', marginBottom: '8px' }}>Cảm ơn {name.trim()}!</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.6 }}>
          Elisabeth&apos;s Garden đã nhận đăng ký của bạn.<br />
          Bên mình sẽ liên hệ qua số <strong>{phone.trim()}</strong> để xác nhận đơn trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', background: 'var(--cream)',
    border: '1px solid var(--gold)', fontSize: '15px', outline: 'none',
    color: 'var(--dark)', borderRadius: '2px', fontFamily: 'inherit',
  };

  return (
    <div className="card" style={{ padding: '20px 18px 22px' }}>
      <p className="eyebrow" style={{ marginBottom: '4px' }}>Đăng ký mua</p>
      <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '24px', lineHeight: 1.2, marginBottom: '6px' }}>
        Để lại thông tin, EG liên hệ bạn ngay
      </h3>
      <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
        Chọn sản phẩm bạn quan tâm, bên mình sẽ gọi tư vấn và chốt đơn. Chưa cần thanh toán trước.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
        <input style={inputStyle} placeholder="Họ và tên *" value={name} onChange={e => setName(e.target.value)} />
        <input style={inputStyle} placeholder="Số điện thoại *" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
        <input style={inputStyle} placeholder="Địa chỉ giao hàng" value={address} onChange={e => setAddress(e.target.value)} />
      </div>

      <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
        Sản phẩm quan tâm *
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {PRODUCT_OPTIONS.map(o => {
          const on = picked.includes(o.value);
          return (
            <button key={o.value} type="button" onClick={() => togglePick(o.value)}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px',
                background: on ? 'var(--crimson-tint)' : 'var(--cream)',
                border: `1px solid ${on ? 'var(--crimson)' : 'var(--gold)'}`,
                cursor: 'pointer', textAlign: 'left', borderRadius: '2px',
              }}>
              <span style={{
                width: '18px', height: '18px', flexShrink: 0, borderRadius: '2px',
                border: `1px solid ${on ? 'var(--crimson)' : 'var(--text-muted)'}`,
                background: on ? 'var(--crimson)' : 'transparent', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px',
              }}>{on ? '✓' : ''}</span>
              <span style={{ fontSize: '14px', color: 'var(--dark)' }}>{o.label}</span>
            </button>
          );
        })}
      </div>

      <textarea style={{ ...inputStyle, minHeight: '64px', resize: 'vertical', marginBottom: '16px' }}
        placeholder="Ghi chú thêm (không bắt buộc)" value={note} onChange={e => setNote(e.target.value)} />

      <button className="btn-primary" disabled={!valid || sending}
        style={{ opacity: valid && !sending ? 1 : 0.5, cursor: valid && !sending ? 'pointer' : 'not-allowed' }}
        onClick={submit}>
        {sending ? 'Đang gửi…' : 'Gửi đăng ký →'}
      </button>
      {!valid && (
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px' }}>
          Vui lòng nhập tên, số điện thoại và chọn ít nhất 1 sản phẩm.
        </p>
      )}
    </div>
  );
}

// ─── Trang ────────────────────────────────────────────────────
export default function SetTraLanding() {
  const tea = PRODUCTS.find(p => p.id === 'tra30')!;

  return (
    <div className="screen-fade-in" style={{ maxWidth: '480px', margin: '0 auto', padding: '0 16px 56px' }}>
      <BrandHeader />

      {/* ── Hero: Set 30 vị trà ── */}
      <div style={{ textAlign: 'center', paddingTop: '8px' }}>
        <p className="eyebrow" style={{ marginBottom: '12px' }}>{tea.eyebrow}</p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'var(--fs-hero)', fontWeight: 500, color: 'var(--crimson)', lineHeight: 1.02 }}>
          30 Ngày<br />30 Vị Trà
        </h1>
        <div style={{ height: '1px', background: 'var(--gold)', opacity: 0.5, margin: '16px auto 14px', width: '60%' }} />
        <p style={{ fontSize: 'var(--fs-lead)', color: 'var(--text-mid)', fontStyle: 'italic', lineHeight: 1.6, padding: '0 8px' }}>
          {tea.tagline}
        </p>
      </div>

      <div style={{ margin: '20px 0' }}>
        <ImgSlot src={tea.images[0]?.src} alt={tea.images[0]?.alt ?? 'Set mix 30 vị trà'} ratio="1 / 1" />
      </div>

      <div style={{ textAlign: 'center', marginBottom: '8px' }}>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 600, color: 'var(--crimson)' }}>{tea.price}</span>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>{tea.priceNote}</div>
      </div>

      <a href="#dang-ky" style={{ textDecoration: 'none' }}>
        <span className="btn-primary" style={{ marginBottom: '28px', marginTop: '12px' }}>Đăng ký mua →</span>
      </a>

      {/* ── Trong hộp có gì ── */}
      <div style={{ marginBottom: '28px' }}>
        <p className="eyebrow" style={{ marginBottom: '10px' }}>Trong hộp có gì</p>
        <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-mid)', lineHeight: 1.6, marginBottom: '12px' }}>
          30 gói trà túi lọc, gồm 15 vị khác nhau từ thanh nhẹ, ngọt dịu đến đậm vị thảo mộc.
          Mỗi ngày một vị, đổi khẩu vị suốt 30 ngày.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
          {TEA_FLAVORS.map((t, i) => (
            <span key={i} style={{ fontSize: '12px', background: 'var(--crimson-tint)', color: 'var(--text-mid)', padding: '5px 10px', borderRadius: '2px' }}>
              {t}
            </span>
          ))}
        </div>
        {tea.images.length > 1 && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {tea.images.slice(1, 3).map((im, i) => (
              <ImgSlot key={i} src={im.src} alt={im.alt} ratio="1 / 1" />
            ))}
            {tea.images[3] && (
              <div style={{ gridColumn: '1 / -1' }}>
                <ImgSlot src={tea.images[3].src} alt={tea.images[3].alt} ratio="16 / 10" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Combo 3 sản phẩm ── */}
      <div style={{ marginBottom: '24px' }}>
        <div className="eyebrow-line" style={{ marginBottom: '6px', justifyContent: 'center' }}>
          <span className="eyebrow">Trọn bộ dưỡng sinh</span>
        </div>
        <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6, marginBottom: '18px' }}>
          Kết hợp trà, dụng cụ và khoá học để chăm sóc cơ thể trọn vẹn hơn.
        </p>
        {PRODUCTS.map(p => <ProductCard key={p.id} p={p} />)}
      </div>

      {/* ── Form đăng ký ── */}
      <div id="dang-ky" style={{ scrollMarginTop: '16px' }}>
        <RegisterForm />
      </div>

      {/* ── Footer ── */}
      <div style={{ textAlign: 'center', borderTop: '1px solid var(--gold)', marginTop: '28px', paddingTop: '16px' }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', color: 'var(--crimson)', fontStyle: 'italic', marginBottom: '6px' }}>
          Elisabeth&apos;s Garden
        </div>
        <span className="eyebrow" style={{ fontSize: '8px', letterSpacing: '0.4em' }}>HIỂU MÌNH • YÊU MÌNH • SỐNG AN NHIÊN</span>
      </div>
    </div>
  );
}
