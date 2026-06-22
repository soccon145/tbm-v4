'use client';

import { useState, useCallback } from 'react';
import { PRODUCTS, TEA_FLAVORS, PRODUCT_OPTIONS, REGISTER_ENDPOINT } from '../../lib/landing-data';

// ─── Landing page Set Mix 30 Vị Trà — design đồng bộ eg-boxset-catalog ─
// Trang chỉ nói về SET TRÀ. Form đăng ký vẫn gom 3 sản phẩm (1 link cho gọn theo yêu cầu khách).

const CREAM = '#F7ECD8';
const GOLD = '#DCCFB4';

// ─── Logo emblem kiểu boxset: vòng tròn + tên giãn cách ───────
function HeroLogo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
      <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: `2px solid ${CREAM}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '30px', color: CREAM, fontWeight: 600, lineHeight: 1 }}>EG</span>
      </div>
      <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '22px', fontWeight: 600, letterSpacing: '0.2em', color: CREAM, textTransform: 'uppercase' }}>
        Elizabeth&apos;s Garden
      </div>
      <div style={{ fontSize: '9px', letterSpacing: '0.55em', color: GOLD, textTransform: 'uppercase' }}>
        Dưỡng sinh <span style={{ opacity: 0.7, margin: '0 4px' }}>◆</span> Đông y
      </div>
    </div>
  );
}

// ─── Divider kim cương kiểu boxset ────────────────────────────
function DiamondDivider({ onCrimson }: { onCrimson?: boolean }) {
  const color = onCrimson ? GOLD : 'var(--crimson)';
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', margin: '28px 0' }}>
      <div style={{ height: '1px', width: '60px', background: color, opacity: 0.5 }} />
      <div style={{ width: '6px', height: '6px', background: color, transform: 'rotate(45deg)' }} />
      <div style={{ height: '1px', width: '60px', background: color, opacity: 0.5 }} />
    </div>
  );
}

function ImgFrame({ src, alt, ratio = '1 / 1' }: { src?: string; alt: string; ratio?: string }) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', display: 'block', background: 'var(--cream-mid)' }} />
    );
  }
  return (
    <div style={{ width: '100%', aspectRatio: ratio, background: 'var(--cream-mid)', border: '1px dashed var(--crimson-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '11px' }}>
      Ảnh: {alt}
    </div>
  );
}

// ─── Form đăng ký gom 3 sản phẩm (1 link duy nhất) ────────────
function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [picked, setPicked] = useState<string[]>(['tra30']); // mặc định tick sẵn set trà
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const togglePick = (v: string) =>
    setPicked(prev => prev.includes(v) ? prev.filter(x => x !== v) : [...prev, v]);

  const phoneOk = phone.replace(/\D/g, '').length >= 9;
  const emailOk = /\S+@\S+\.\S+/.test(email);
  const valid = name.trim().length >= 2 && phoneOk && emailOk && picked.length > 0;

  const submit = useCallback(async () => {
    if (!valid || sending) return;
    setSending(true);
    const payload = {
      name: name.trim(), phone: phone.trim(), email: email.trim(), address: address.trim(),
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
      setSent(true);
    } finally {
      setSending(false);
    }
  }, [valid, sending, name, phone, address, picked, note]);

  if (sent) {
    return (
      <div style={{ textAlign: 'center', padding: '36px 20px' }}>
        <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '44px', color: 'var(--crimson)', marginBottom: '10px' }}>✦</div>
        <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '28px', marginBottom: '10px', color: 'var(--dark)' }}>Cảm ơn {name.trim()}!</h3>
        <p style={{ fontSize: '14px', color: 'var(--text-mid)', lineHeight: 1.7 }}>
          Elizabeth&apos;s Garden đã nhận đăng ký của bạn.<br />
          Bên mình sẽ liên hệ qua số <strong>{phone.trim()}</strong> để xác nhận đơn sớm nhất.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '14px', background: 'var(--cream-lighter)',
    border: '1px solid var(--gold)', fontSize: '15px', outline: 'none',
    color: 'var(--dark)', fontFamily: 'inherit',
  };

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
        <input style={inputStyle} placeholder="Họ và tên *" value={name} onChange={e => setName(e.target.value)} />
        <input style={inputStyle} placeholder="Số điện thoại *" type="tel" value={phone} onChange={e => setPhone(e.target.value)} />
        <input style={inputStyle} placeholder="Email *" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <input style={inputStyle} placeholder="Địa chỉ giao hàng" value={address} onChange={e => setAddress(e.target.value)} />
      </div>

      <p style={{ fontSize: '10px', fontWeight: 600, color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>
        Sản phẩm bạn muốn đặt
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
        {PRODUCT_OPTIONS.map(o => {
          const on = picked.includes(o.value);
          return (
            <button key={o.value} type="button" onClick={() => togglePick(o.value)}
              style={{
                display: 'flex', alignItems: 'center', gap: '12px', padding: '13px 14px',
                background: on ? 'var(--crimson-tint)' : 'var(--cream-lighter)',
                border: `1px solid ${on ? 'var(--crimson)' : 'var(--gold)'}`,
                cursor: 'pointer', textAlign: 'left',
              }}>
              <span style={{
                width: '18px', height: '18px', flexShrink: 0,
                border: `1px solid ${on ? 'var(--crimson)' : 'var(--text-muted)'}`,
                background: on ? 'var(--crimson)' : 'transparent', color: CREAM,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px',
              }}>{on ? '✓' : ''}</span>
              <span style={{ fontSize: '14px', color: 'var(--dark)' }}>{o.label}</span>
            </button>
          );
        })}
      </div>

      <textarea style={{ ...inputStyle, minHeight: '60px', resize: 'vertical', marginBottom: '18px' }}
        placeholder="Ghi chú thêm (không bắt buộc)" value={note} onChange={e => setNote(e.target.value)} />

      <button onClick={submit} disabled={!valid || sending}
        style={{
          display: 'block', width: '100%', padding: '18px',
          background: valid && !sending ? 'var(--crimson)' : 'rgba(138,24,32,0.35)',
          color: CREAM, border: 'none', cursor: valid && !sending ? 'pointer' : 'not-allowed',
          fontSize: '12px', fontWeight: 600, letterSpacing: '0.25em', textTransform: 'uppercase',
        }}>
        {sending ? 'Đang gửi…' : 'Gửi đăng ký'}
      </button>
      <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '10px', lineHeight: 1.6 }}>
        Một form duy nhất cho mọi sản phẩm EG. Chưa cần thanh toán, bên mình liên hệ tư vấn rồi mới chốt đơn.
      </p>
    </div>
  );
}

// ─── Trang ────────────────────────────────────────────────────
export default function SetTraLanding() {
  const tea = PRODUCTS.find(p => p.id === 'tra30')!;

  return (
    <div style={{ background: 'var(--cream)' }}>

      {/* ════ HERO — nền đỏ rượu, vòng tròn trang trí, chữ kem (vibe boxset) ════ */}
      <section style={{
        background: 'var(--crimson)',
        backgroundImage: 'radial-gradient(ellipse at 80% 20%, rgba(104,18,25,0.8) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(40,40,40,0.5) 0%, transparent 50%)',
        minHeight: '92vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden', padding: '64px 28px', textAlign: 'center',
      }}>
        {/* vòng tròn trang trí */}
        <div style={{ position: 'absolute', top: '-18%', right: '-12%', width: '480px', height: '480px', borderRadius: '50%', border: '1px solid rgba(247,236,216,0.12)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-28%', right: '-20%', width: '640px', height: '640px', borderRadius: '50%', border: '1px solid rgba(247,236,216,0.07)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-14%', left: '-12%', width: '380px', height: '380px', borderRadius: '50%', border: '50px solid rgba(104,18,25,0.5)', pointerEvents: 'none' }} />

        <HeroLogo />

        <div style={{ fontSize: '10px', letterSpacing: '0.4em', color: GOLD, textTransform: 'uppercase', marginBottom: '20px' }}>
          Blind Box · Trà dưỡng sinh
        </div>

        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(52px, 13vw, 96px)', fontWeight: 300, color: CREAM, lineHeight: 1.02, letterSpacing: '0.04em' }}>
          30 Ngày
          <em style={{ fontStyle: 'italic', color: GOLD, display: 'block' }}>30 Vị Trà</em>
        </h1>

        <p style={{ fontSize: '13px', letterSpacing: '0.1em', color: 'rgba(247,236,216,0.75)', maxWidth: '440px', lineHeight: 2, marginTop: '22px' }}>
          Mỗi sáng mở một gói trà, không biết trước vị nào. 30 ngày đổi vị không trùng,
          thay cho đồ uống nhiều đường, nhẹ nhàng nuôi dưỡng cơ thể.
        </p>

        <DiamondDivider onCrimson />

        {/* giá kiểu boxset: serif lớn + badge kem */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '20px' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '56px', fontWeight: 600, color: CREAM, lineHeight: 1 }}>
            <sup style={{ fontSize: '20px', verticalAlign: 'super' }}>₫</sup>450<sub style={{ fontSize: '18px' }}>.000</sub>
          </div>
          <div style={{ background: CREAM, color: 'var(--crimson)', fontSize: '10px', fontWeight: 600, letterSpacing: '0.15em', padding: '6px 14px', textTransform: 'uppercase', marginBottom: '8px' }}>
            30 gói · 30 vị
          </div>
        </div>

        <a href="#dang-ky"
          style={{
            display: 'inline-block', marginTop: '40px', padding: '17px 52px',
            border: `1px solid ${CREAM}`, color: CREAM, textDecoration: 'none',
            fontSize: '11px', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
          Đặt hộp trà
        </a>
      </section>

      {/* ════ Nội dung nền kem ════ */}
      <div style={{ maxWidth: '480px', margin: '0 auto', padding: '56px 20px 64px' }}>

        {/* Trong hộp có gì */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--crimson)', textTransform: 'uppercase', fontWeight: 600 }}>
            Trong hộp có gì
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '34px', fontWeight: 400, color: 'var(--dark)', lineHeight: 1.2, margin: '12px 0' }}>
            Một hộp, <em style={{ color: 'var(--crimson)' }}>ba mươi hương vị</em>
          </h2>
          <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.9, maxWidth: '400px', margin: '0 auto' }}>
            30 gói trà túi lọc tuyển chọn, gồm 30 vị từ thanh nhẹ, ngọt dịu đến đậm vị thảo mộc.
            Mỗi ngày một gói, một bất ngờ nhỏ cho cơ thể.
          </p>
        </div>

        <div style={{ margin: '28px 0' }}>
          <ImgFrame src={tea.images[0]?.src} alt={tea.images[0]?.alt ?? 'Set trà'} ratio="1 / 1" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '8px' }}>
            <ImgFrame src={tea.images[1]?.src} alt={tea.images[1]?.alt ?? ''} />
            <ImgFrame src={tea.images[2]?.src} alt={tea.images[2]?.alt ?? ''} />
          </div>
        </div>

        {/* các vị trà */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'center' }}>
          {TEA_FLAVORS.map((t, i) => (
            <span key={i} style={{ fontSize: '12px', background: 'var(--cream-lighter)', border: '1px solid var(--gold)', color: 'var(--text-mid)', padding: '6px 12px' }}>
              {t}
            </span>
          ))}
        </div>

        <DiamondDivider />

        {/* Vì sao bạn sẽ thích — 3 benefit kiểu boxset */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--crimson)', textTransform: 'uppercase', fontWeight: 600, marginBottom: '20px' }}>
            Vì sao bạn sẽ thích
          </p>
        </div>
        {[
          { n: '01', t: 'Không bao giờ chán vị', d: 'Blind box 30 vị xoay vòng trong 30 gói. Hôm nay bạch trà lê tuyết, mai hồng trà nhân sâm, mốt ô long quýt xanh.' },
          { n: '02', t: 'Thay đồ uống nhiều đường', d: 'Một thói quen nhỏ mỗi ngày: bớt một ly trà sữa, thêm một gói trà dưỡng sinh. Cơ thể nhẹ dần sau 30 ngày.' },
          { n: '03', t: 'Túi lọc pha 30 giây', d: 'Không cần ấm chén cầu kỳ. Một gói, một ly nước nóng, để 3 phút là có ly trà ấm giữa ngày làm việc.' },
        ].map(b => (
          <div key={b.n} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '40px', fontWeight: 300, color: 'var(--crimson)', opacity: 0.45, lineHeight: 1, flexShrink: 0 }}>{b.n}</div>
            <div>
              <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '21px', fontWeight: 600, color: 'var(--dark)', marginBottom: '4px' }}>{b.t}</div>
              <div style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: 1.75 }}>{b.d}</div>
            </div>
          </div>
        ))}

        <DiamondDivider />

        {/* Form đăng ký — gom 3 sản phẩm trong 1 link */}
        <div id="dang-ky" style={{ scrollMarginTop: '20px', textAlign: 'center' }}>
          <p style={{ fontSize: '10px', letterSpacing: '0.4em', color: 'var(--crimson)', textTransform: 'uppercase', fontWeight: 600 }}>
            Đăng ký mua
          </p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '32px', fontWeight: 400, color: 'var(--dark)', lineHeight: 1.2, margin: '12px 0 8px' }}>
            Để lại thông tin,<br /><em style={{ color: 'var(--crimson)' }}>EG liên hệ bạn ngay</em>
          </h2>
        </div>
        <div style={{ marginTop: '20px', textAlign: 'left' }}>
          <RegisterForm />
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', borderTop: '1px solid var(--gold)', marginTop: '48px', paddingTop: '20px' }}>
          <div style={{ fontFamily: 'var(--font-cormorant)', fontSize: '18px', color: 'var(--crimson)', fontStyle: 'italic', marginBottom: '6px' }}>
            Elizabeth&apos;s Garden
          </div>
          <span style={{ fontSize: '8px', letterSpacing: '0.4em', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Hiểu mình • Yêu mình • Sống an nhiên
          </span>
        </div>
      </div>
    </div>
  );
}
