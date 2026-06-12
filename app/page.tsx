'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import {
  QUESTIONS, THE_CONTENT, THE_KEYS, computeScore, computeBodyAge,
  type TheKey, type ScoreResult, type Recipe,
} from '../lib/data';
import { THE_EXTRAS, OFFER_TARGETS, REGISTER_URL, type TheProduct } from '../lib/the-extras';
import { THE_THEORY } from '../lib/the-theory';

// ─── Types ────────────────────────────────────────────────────
type Screen = 'landing'|'infoform'|'intro'|'test'|'loading'|'report'|'roadmap'|'offer'|'thankyou';

interface UserInfo { name: string; birthYear: number; gender: string; }

// ─── Brand Logo Mark (SVG monogram) ──────────────────────────
function EGMonogram({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer large C arc — open right */}
      <path d="M 44 8 A 26 26 0 1 0 44 52" stroke="var(--crimson)" strokeWidth="3" strokeLinecap="round" fill="none"/>
      {/* Inner smaller C arc — offset */}
      <path d="M 40 14 A 18 18 0 1 0 40 46" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.55"/>
      {/* Diagonal slash — the E/G crossbar feel */}
      <line x1="22" y1="18" x2="42" y2="42" stroke="var(--crimson)" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

// ─── Brand Header ─────────────────────────────────────────────
function BrandHeader({ small }: { small?: boolean }) {
  return (
    <div className={`text-center ${small ? 'py-3' : 'py-4'}`}>
      {!small && (
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'8px' }}>
          <EGMonogram size={44} />
        </div>
      )}
      <div style={{
        fontFamily:'Cormorant Garamond, Georgia, serif',
        fontSize: small ? '13px' : '17px',
        fontWeight: 500,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: 'var(--dark)',
        lineHeight: 1.2,
      }}>
        Elizabeth&apos;s
      </div>
      <div style={{
        fontFamily:'Montserrat, sans-serif',
        fontSize: small ? '8px' : '9px',
        letterSpacing: '0.5em',
        textTransform: 'uppercase',
        color: 'var(--text-mid)',
        marginTop: '2px',
      }}>
        ◆ Garden ◆
      </div>
    </div>
  );
}

// ─── Botanical SVGs ───────────────────────────────────────────
function CornerLeavesSVG() {
  return (
    <svg width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.32" stroke="#6B3D2E" strokeLinecap="round" strokeLinejoin="round">
        {/* Main diagonal stem */}
        <path d="M4 100 C18 76 34 54 58 32" strokeWidth="0.9"/>
        {/* Large bottom leaf */}
        <path d="M4 100 C-2 78 10 62 24 58 C22 74 4 100 4 100Z" strokeWidth="0.7" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Mid leaf right */}
        <path d="M22 80 C34 70 48 72 50 64 C40 62 22 80 22 80Z" strokeWidth="0.7" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Upper leaf left */}
        <path d="M36 62 C30 50 36 40 44 40 C42 52 36 62 36 62Z" strokeWidth="0.7" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Upper leaf right */}
        <path d="M44 52 C54 44 62 46 62 40 C54 38 44 52 44 52Z" strokeWidth="0.6" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Tip leaf */}
        <path d="M56 34 C62 26 70 26 68 32 C62 34 56 34 56 34Z" strokeWidth="0.6" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Side branch */}
        <path d="M18 84 C10 72 14 60 20 56" strokeWidth="0.7"/>
        <path d="M20 56 C14 48 20 40 28 42 C24 50 20 56 20 56Z" strokeWidth="0.6" fill="#6B3D2E" fillOpacity="0.07"/>
        {/* Tiny berries */}
        <circle cx="12" cy="62" r="1.3" fill="#6B3D2E" fillOpacity="0.25"/>
        <circle cx="26" cy="50" r="0.9" fill="#6B3D2E" fillOpacity="0.2"/>
        <circle cx="50" cy="34" r="0.8" fill="#6B3D2E" fillOpacity="0.2"/>
      </g>
    </svg>
  );
}

function CircularStampSVG() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="33" stroke="#8A1820" strokeWidth="0.7" strokeOpacity="0.3"/>
      <circle cx="36" cy="36" r="27" stroke="#8A1820" strokeWidth="0.4" strokeOpacity="0.2"/>
      <path id="topArc" d="M 10 36 A 26 26 0 0 1 62 36" fill="none"/>
      <text fontSize="7" fill="#8A1820" fillOpacity="0.55" fontFamily="Georgia, serif" letterSpacing="2">
        <textPath href="#topArc" startOffset="8%">THÂN · TÂM · TRÍ</textPath>
      </text>
      <path id="botArc" d="M 12 40 A 24 24 0 0 0 60 40" fill="none"/>
      <text fontSize="6" fill="#8A1820" fillOpacity="0.55" fontFamily="Georgia, serif" letterSpacing="1.2">
        <textPath href="#botArc" startOffset="4%">CÂN BẰNG &amp; HÀI HÒA</textPath>
      </text>
      {/* Center botanical — delicate herb */}
      <g stroke="#8A1820" strokeOpacity="0.4" fill="none">
        <line x1="36" y1="46" x2="36" y2="30" strokeWidth="0.7"/>
        <path d="M36 40 C32 36 30 30 33 27 C35 31 36 40 36 40Z" fill="#8A1820" fillOpacity="0.1" strokeWidth="0.6"/>
        <path d="M36 40 C40 36 42 30 39 27 C37 31 36 40 36 40Z" fill="#8A1820" fillOpacity="0.1" strokeWidth="0.6"/>
        <path d="M36 35 C33 33 31 28 34 26 C35 29 36 35 36 35Z" fill="#8A1820" fillOpacity="0.08" strokeWidth="0.5"/>
        <path d="M36 35 C39 33 41 28 38 26 C37 29 36 35 36 35Z" fill="#8A1820" fillOpacity="0.08" strokeWidth="0.5"/>
      </g>
    </svg>
  );
}

function HerbIconSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#6B3D2E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65">
        {/* Main stem — gentle curve */}
        <path d="M18 33 C18 26 17 20 18 10" strokeWidth="0.8"/>
        {/* Left leaves — alternating, natural */}
        <path d="M18 27 C13 24 10 18 13 14 C16 18 18 27 18 27Z" fill="#6B3D2E" fillOpacity="0.1" strokeWidth="0.65"/>
        <path d="M18 21 C13 19 11 13 14 11 C16 15 18 21 18 21Z" fill="#6B3D2E" fillOpacity="0.09" strokeWidth="0.6"/>
        {/* Right leaves */}
        <path d="M18 24 C23 21 26 15 23 12 C20 16 18 24 18 24Z" fill="#6B3D2E" fillOpacity="0.1" strokeWidth="0.65"/>
        <path d="M18 17 C23 15 25 10 22 8 C20 11 18 17 18 17Z" fill="#6B3D2E" fillOpacity="0.09" strokeWidth="0.6"/>
        {/* Tip */}
        <path d="M18 11 C17 7 19 5 20 7 C19 9 18 11 18 11Z" fill="#6B3D2E" fillOpacity="0.12" strokeWidth="0.55"/>
        {/* Base */}
        <path d="M15 33 Q18 33 21 33" strokeWidth="0.6" strokeOpacity="0.35"/>
      </g>
    </svg>
  );
}

function MortarIconSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#6B3D2E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65">
        {/* Bowl — smooth elliptic bottom */}
        <path d="M9 19 C9 27 12 30 18 30 C24 30 27 27 27 19Z" fill="#6B3D2E" fillOpacity="0.07" strokeWidth="0.75"/>
        {/* Rim */}
        <line x1="7" y1="19" x2="29" y2="19" strokeWidth="0.85"/>
        {/* Foot */}
        <line x1="13" y1="30" x2="23" y2="30" strokeWidth="0.75"/>
        {/* Pestle — slight diagonal */}
        <path d="M23 9 C25 12 25 16 24 19" strokeWidth="1"/>
        {/* Pestle tip */}
        <path d="M21 8 C22 6 26 7 24 9 C22 10 21 8 21 8Z" fill="#6B3D2E" fillOpacity="0.12" strokeWidth="0.6"/>
        {/* Steam wisps */}
        <path d="M13 15 C12 12 14 10 13 7" strokeWidth="0.55" strokeOpacity="0.35"/>
        <path d="M17 14 C16 11 18 9 17 6" strokeWidth="0.55" strokeOpacity="0.35"/>
      </g>
    </svg>
  );
}

function FlowerIconSVG() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#6B3D2E" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.65">
        {/* Stem — gentle S-curve */}
        <path d="M18 34 C18 30 17 26 18 22" strokeWidth="0.8"/>
        {/* Small leaf left */}
        <path d="M18 29 C15 27 13 23 15 21 C17 23 18 29 18 29Z" fill="#6B3D2E" fillOpacity="0.09" strokeWidth="0.6"/>
        {/* Small leaf right */}
        <path d="M18 26 C21 24 23 20 21 18 C19 20 18 26 18 26Z" fill="#6B3D2E" fillOpacity="0.09" strokeWidth="0.6"/>
        {/* Petals — 6 organic petals */}
        <path d="M18 22 C16 18 16 14 18 13 C20 14 20 18 18 22Z" fill="#6B3D2E" fillOpacity="0.08" strokeWidth="0.6"/>
        <path d="M18 22 C22 20 25 17 24 15 C22 14 19 18 18 22Z" fill="#6B3D2E" fillOpacity="0.08" strokeWidth="0.6"/>
        <path d="M18 22 C22 24 25 21 24 19 C22 18 19 20 18 22Z" fill="#6B3D2E" fillOpacity="0.08" strokeWidth="0.6"/>
        <path d="M18 22 C16 24 13 21 14 19 C16 18 17 20 18 22Z" fill="#6B3D2E" fillOpacity="0.08" strokeWidth="0.6"/>
        <path d="M18 22 C14 20 11 17 12 15 C14 14 17 18 18 22Z" fill="#6B3D2E" fillOpacity="0.08" strokeWidth="0.6"/>
        {/* Center dot */}
        <circle cx="18" cy="18" r="2" fill="#6B3D2E" fillOpacity="0.18" strokeWidth="0.5"/>
      </g>
    </svg>
  );
}

// ─── Hand-drawn arrow SVG ─────────────────────────────────────
function HandArrowSVG() {
  return (
    <svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 9 C5 8.5 14 9.2 23 9" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
      <path d="M19 4 C22 6.5 23.5 9 19 14" stroke="white" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Screen 1: Landing ────────────────────────────────────────
function LandingScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="screen-fade-in max-w-md mx-auto pb-14" style={{ position:'relative' }}>

      {/* ── Header area — botanical corner + stamp ── */}
      <div style={{ position:'relative', padding:'0 20px' }}>
        <div style={{ position:'absolute', top:0, left:-6, pointerEvents:'none' }}>
          <CornerLeavesSVG />
        </div>
        <div style={{ paddingTop:'16px', paddingBottom:'8px' }}>
          <BrandHeader />
        </div>
      </div>

      {/* ── Hero — editorial, open, giant serif ── */}
      <div style={{ padding:'16px 24px 0' }}>
        {/* Eyebrow with thin gold lines */}
        <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'22px' }}>
          <div style={{ flex:1, height:'1px', background:'var(--gold)', opacity:0.7 }} />
          <span className="eyebrow">Bài test thể trạng</span>
          <div style={{ flex:1, height:'1px', background:'var(--gold)', opacity:0.7 }} />
        </div>

        {/* Giant headline — cascade */}
        <h1 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontWeight:400, lineHeight:1.08, color:'var(--dark)', margin:'0', letterSpacing:'-0.01em' }}>
          <span style={{ display:'block', fontSize:'var(--fs-hero)' }}>Khám phá</span>
          <em style={{ display:'block', fontSize:'var(--fs-hero)', color:'var(--crimson)' }}>thể trạng</em>
          <span style={{ display:'block', fontSize:'var(--fs-hero)' }}>của bạn</span>
          <em style={{ display:'block', fontSize:'var(--fs-hero)', color:'var(--crimson)', lineHeight:1.15 }}>theo Đông y</em>
        </h1>
        <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'var(--fs-lead)', fontStyle:'italic', color:'var(--text-muted)', fontWeight:400, lineHeight:1.3, margin:'4px 0 0' }}>
          trong 5 phút.
        </p>

        {/* Gold rule */}
        <div style={{ height:'1px', background:'var(--gold)', margin:'22px 0', opacity:0.6 }} />
      </div>

      {/* ── 3 Benefits — open list, no card boxes ── */}
      <div style={{ padding:'0 24px', marginBottom:'30px' }}>
        {[
          { svg:<HerbIconSVG />, title:'Khoa học cá nhân hóa', desc:'Kết quả dựa trên triệu chứng thực của bạn, không phải generic.' },
          { svg:<MortarIconSVG />, title:'Ritual phục hồi', desc:'Lộ trình cụ thể 7–90 ngày, cá nhân hoá theo thể trạng.' },
          { svg:<FlowerIconSVG />, title:'Thảo mộc thuần khiết', desc:'Công thức từ kho tri thức Đông y hàng ngàn năm.' },
        ].map((b, i) => (
          <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'16px', marginBottom: i < 2 ? '20px' : 0 }}>
            <div style={{ flexShrink:0, width:'40px', height:'40px', display:'flex', alignItems:'center', justifyContent:'center', background:'var(--cream-mid)', borderRadius:'50%' }}>
              {b.svg}
            </div>
            <div style={{ paddingTop:'2px' }}>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:'var(--fs-sm)', fontWeight:600, color:'var(--dark)', marginBottom:'3px', letterSpacing:'0.02em' }}>{b.title}</div>
              <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:'var(--fs-sm)', color:'var(--text-muted)', lineHeight:1.6 }}>{b.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Gold rule */}
      <div style={{ height:'1px', background:'var(--gold)', margin:'0 24px 28px', opacity:0.5 }} />

      {/* ── How it works — editorial numbered, NO card box ── */}
      <div style={{ padding:'0 24px', marginBottom:'30px' }}>
        <p className="eyebrow" style={{ marginBottom:'22px' }}>Cách bài test hoạt động</p>
        {[
          'Trả lời 30–38 câu hỏi về triệu chứng cơ thể',
          'Hệ thống đối chiếu với 9 thể trạng Đông y',
          'Nhận kết quả thể trạng trội và tuổi cơ thể',
          'Xem lộ trình phục hồi cá nhân hóa',
        ].map((s, i) => (
          <div key={i} style={{ display:'flex', alignItems:'baseline', gap:'18px', paddingBottom:'16px', marginBottom:'16px', borderBottom: i < 3 ? '1px solid rgba(181,164,126,0.22)' : 'none' }}>
            {/* Large Cormorant number — editorial feel */}
            <span style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'var(--fs-h2)', fontWeight:300, color:'var(--crimson)', lineHeight:1, minWidth:'36px', opacity:0.65 }}>0{i+1}</span>
            <span style={{ fontFamily:'Montserrat, sans-serif', fontSize:'var(--fs-body)', color:'var(--text-mid)', lineHeight:1.65 }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Gold rule */}
      <div style={{ height:'1px', background:'var(--gold)', margin:'0 24px 26px', opacity:0.5 }} />

      {/* ── Founder — open, no card box ── */}
      <div style={{ padding:'0 24px', marginBottom:'36px', display:'flex', gap:'16px', alignItems:'flex-start' }}>
        <div style={{ width:'50px', height:'50px', borderRadius:'50%', background:'#2C4A3A', flexShrink:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Cormorant Garamond, serif', fontSize:'18px', color:'#C4A96A', fontStyle:'italic', border:'1.5px solid rgba(181,164,126,0.45)' }}>MT</div>
        <div>
          <div style={{ fontFamily:'Montserrat, sans-serif', fontSize:'11px', fontWeight:600, color:'var(--dark)', letterSpacing:'0.06em', marginBottom:'8px', textTransform:'uppercase' }}>Minh Trang, người sáng lập</div>
          <div style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'17px', fontStyle:'italic', color:'var(--text-mid)', lineHeight:1.65 }}>
            &ldquo;Hành trình chữa lành bắt đầu từ việc hiểu mình. Bài test này là điểm khởi đầu.&rdquo;
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding:'0 24px' }}>
        <button
          onClick={onStart}
          style={{ width:'100%', background:'var(--crimson)', color:'white', border:'none', borderRadius:'2px', padding:'18px 24px', fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'20px', fontWeight:400, letterSpacing:'0.06em', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center', gap:'14px', transition:'background 220ms' }}
          onMouseOver={e => (e.currentTarget.style.background='var(--crimson-deep)')}
          onMouseOut={e => (e.currentTarget.style.background='var(--crimson)')}
        >
          Bắt đầu bài test
          <HandArrowSVG />
        </button>
        <p style={{ textAlign:'center', fontFamily:'Montserrat, sans-serif', fontSize:'10px', color:'var(--text-muted)', letterSpacing:'0.08em', marginTop:'12px' }}>
          🔒 AN TOÀN &amp; BẢO MẬT THÔNG TIN CỦA BẠN
        </p>
      </div>
    </div>
  );
}

// ─── Screen 2: Info Form ─────────────────────────────────────
function InfoFormScreen({ onSubmit }: { onSubmit: (u: UserInfo) => void }) {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [gender, setGender] = useState('');
  const currentYear = new Date().getFullYear();

  const valid = name.trim() && birthYear && Number(birthYear) > 1930 && Number(birthYear) < currentYear && gender;

  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-10">
      <BrandHeader small />
      <div className="pt-4 pb-6">
        <p className="eyebrow text-center mb-2">Thông tin của bạn</p>
        <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'28px', textAlign:'center', marginBottom:'6px' }}>
          Để cá nhân hóa kết quả
        </h2>
        <p style={{ fontSize:'13px', color:'var(--text-muted)', textAlign:'center' }}>Chỉ dùng trong bài test, không lưu trữ.</p>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'16px', marginBottom:'24px' }}>
        <div>
          <label style={{ fontSize:'11px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--crimson)', display:'block', marginBottom:'6px' }}>Tên của bạn</label>
          <input value={name} onChange={e=>setName(e.target.value)}
            placeholder="Ví dụ: Lan Anh"
            style={{ width:'100%', padding:'12px', background:'var(--cream-lighter)', border:'1px solid var(--gold)', fontSize:'14px', outline:'none', color:'var(--dark)' }}
          />
        </div>
        <div>
          <label style={{ fontSize:'11px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--crimson)', display:'block', marginBottom:'6px' }}>Năm sinh</label>
          <input value={birthYear} onChange={e=>setBirthYear(e.target.value)}
            placeholder="Ví dụ: 1990" type="number" min="1930" max={currentYear-10}
            style={{ width:'100%', padding:'12px', background:'var(--cream-lighter)', border:'1px solid var(--gold)', fontSize:'14px', outline:'none', color:'var(--dark)' }}
          />
        </div>
        <div>
          <label style={{ fontSize:'11px', fontWeight:600, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--crimson)', display:'block', marginBottom:'6px' }}>Giới tính</label>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px' }}>
            {['Nữ','Nam','Khác'].map(g => (
              <button key={g} onClick={()=>setGender(g)}
                style={{ padding:'12px', border:`1px solid ${gender===g ? 'var(--crimson)' : 'var(--gold)'}`, background: gender===g ? 'var(--crimson-tint)' : 'var(--cream-lighter)', color: gender===g ? 'var(--crimson)' : 'var(--dark)', fontSize:'13px', fontWeight: gender===g ? 600 : 400, cursor:'pointer' }}>
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className="btn-primary" disabled={!valid}
        style={{ opacity: valid ? 1 : 0.5 }}
        onClick={() => valid && onSubmit({ name: name.trim(), birthYear: Number(birthYear), gender })}>
        Tiếp tục →
      </button>
    </div>
  );
}

// ─── Screen 3: Intro Overview ─────────────────────────────────
function IntroScreen({ userInfo, onStart }: { userInfo: UserInfo; onStart: () => void }) {
  const THE9 = [
    { name:'Dương Hư',   hint:'Hay lạnh, tiêu hoá yếu, mệt sáng sớm' },
    { name:'Khí Hư',     hint:'Mệt mỏi, hụt hơi, đổ mồ hôi dễ' },
    { name:'Âm Hư',      hint:'Nóng chiều tối, khô da, ngủ không sâu' },
    { name:'Huyết Ứ',    hint:'Da sạm, đau cố định, kinh nguyệt bất thường' },
    { name:'Đàm Thấp',   hint:'Nặng nề, tăng cân khó giải thích, da dầu' },
    { name:'Thấp Nhiệt', hint:'Mụn viêm đỏ, miệng đắng, nóng bức bội' },
    { name:'Khí Uất',    hint:'Dễ cáu, tức ngực, hay thở dài' },
    { name:'Đặc Bẩm',   hint:'Dị ứng, nhạy cảm cơ địa từ nhỏ' },
    { name:'Bình Hòa',   hint:'Cân bằng, năng lượng ổn định cả ngày', full:true },
  ];
  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-10">
      <BrandHeader small />

      {/* Hook — triệu chứng quen thuộc */}
      <div style={{ padding:'20px 0 0' }}>
        <p className="eyebrow text-center mb-4">Trước khi bắt đầu</p>
        <h2 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'var(--fs-h2)', fontWeight:400, lineHeight:1.2, textAlign:'center', color:'var(--dark)', margin:'0 0 20px' }}>
          {userInfo.name}, cơ thể bạn<br /><em style={{ color:'var(--crimson)' }}>đang nói điều gì?</em>
        </h2>
      </div>

      {/* Triệu chứng relatable */}
      <div style={{ borderLeft:'2px solid var(--crimson)', paddingLeft:'16px', marginBottom:'24px', opacity:0.9 }}>
        {[
          'Hay mệt dù không làm gì nặng',
          'Ngủ đủ giờ nhưng sáng dậy vẫn nặng đầu',
          'Da, tóc kém đi dù đang chăm sóc đúng cách',
          'Tiêu hoá lúc tốt lúc không, không rõ nguyên nhân',
        ].map((s, i) => (
          <p key={i} style={{ fontSize:'var(--fs-body)', color:'var(--text-mid)', lineHeight:1.6, margin: i < 3 ? '0 0 6px' : '0' }}>{s}</p>
        ))}
      </div>

      {/* Giải thích khái niệm — ngắn gọn, không jargon */}
      <div style={{ marginBottom:'24px', padding:'16px', background:'var(--cream-mid)', borderLeft:'3px solid rgba(122,28,35,0.25)' }}>
        <p style={{ fontSize:'var(--fs-body)', color:'var(--text-mid)', lineHeight:1.8, margin:0 }}>
          Đông y gọi những tín hiệu này là <strong style={{ color:'var(--dark)' }}>thể trạng</strong> — trạng thái cơ thể đang vận hành. Không phải bệnh, không phải điểm số. Biết thể trạng của mình là biết <em style={{ color:'var(--crimson)' }}>tại sao</em> cơ thể phản ứng theo cách đó, và <em style={{ color:'var(--crimson)' }}>cần làm gì</em> để thay đổi.
        </p>
      </div>

      {/* 9 thể — preview có dẫn dắt */}
      <div style={{ marginBottom:'8px', display:'flex', alignItems:'center', gap:'10px' }}>
        <div style={{ flex:1, height:'1px', background:'var(--gold)', opacity:0.5 }} />
        <p className="eyebrow" style={{ margin:0 }}>9 thể trạng trong Đông y</p>
        <div style={{ flex:1, height:'1px', background:'var(--gold)', opacity:0.5 }} />
      </div>
      <p style={{ fontSize:'var(--fs-sm)', color:'var(--text-muted)', textAlign:'center', marginBottom:'14px' }}>Bạn có nhận ra mình trong số này không?</p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'7px', marginBottom:'24px' }}>
        {THE9.map(t => (
          <div key={t.name} className="card p-3" style={t.full ? { gridColumn:'1 / -1' } : {}}>
            <div style={{ fontSize:'var(--fs-sm)', fontWeight:700, color:'var(--dark)', marginBottom:'3px' }}>{t.name}</div>
            <div style={{ fontSize:'var(--fs-xs)', color:'var(--text-muted)', lineHeight:1.5 }}>{t.hint}</div>
          </div>
        ))}
      </div>

      {/* Bạn sẽ nhận được gì */}
      <div className="card-crimson p-4 mb-6">
        <p style={{ fontSize:'10px', fontWeight:700, letterSpacing:'0.2em', textTransform:'uppercase', color:'var(--crimson)', marginBottom:'12px' }}>Sau bài test bạn sẽ biết</p>
        {[
          'Thể trạng trội của bạn là gì — và tại sao cơ thể phản ứng như vậy',
          'Ăn gì, tránh gì, sinh hoạt ra sao cho đúng thể',
          'Lộ trình 7 ngày để bắt đầu thay đổi ngay',
        ].map((s, i) => (
          <div key={i} style={{ display:'flex', gap:'10px', alignItems:'flex-start', marginBottom: i < 2 ? '9px' : 0 }}>
            <span style={{ color:'var(--crimson)', flexShrink:0, fontSize:'10px', marginTop:'3px' }}>◆</span>
            <span style={{ fontSize:'var(--fs-body)', color:'var(--text-mid)', lineHeight:1.55 }}>{s}</span>
          </div>
        ))}
      </div>

      <button className="btn-primary" onClick={onStart}>Bắt đầu khám phá</button>
      <p style={{ textAlign:'center', fontFamily:'Montserrat, sans-serif', fontSize:'11px', color:'var(--text-muted)', marginTop:'10px', letterSpacing:'0.05em' }}>
        Khoảng 5 phút · Không cần biết Đông y
      </p>
    </div>
  );
}

// ─── Screen 4: Test Flow ──────────────────────────────────────
function TestScreen({ userInfo, onDone }: { userInfo: UserInfo; onDone: (answers: Record<number,number>) => void }) {
  const mainQs = QUESTIONS.filter(q => !q.followUpOf);
  const [answers, setAnswers] = useState<Record<number,number>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const advancing = useRef(false);

  // Determine active question list (main + relevant follow-ups)
  const activeQs = mainQs.reduce<typeof QUESTIONS>((acc, q) => {
    acc.push(q);
    const followUps = QUESTIONS.filter(fu => fu.followUpOf === q.id);
    for (const fu of followUps) {
      const parentAns = answers[q.id] ?? 0;
      if (parentAns > 0) acc.push(fu);
    }
    return acc;
  }, []);

  const current = activeQs[currentIdx];
  const total = activeQs.length;
  const pct = Math.round((Math.min(currentIdx, total) / total) * 100);

  // Tính thể trạng chính của câu hỏi hiện tại (thể có điểm cao nhất trong option nặng nhất)
  const primaryThe = (() => {
    if (!current) return '';
    const scores: Record<string, number> = {};
    current.options.forEach(opt => {
      Object.entries(opt.score ?? {}).forEach(([k, v]) => {
        scores[k] = Math.max(scores[k] ?? 0, v as number);
      });
    });
    const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
    if (!top) return '';
    return THE_CONTENT[top[0] as TheKey]?.name ?? '';
  })();

  // Safety: if index ran past end, submit
  useEffect(() => {
    if (total > 0 && currentIdx >= total) onDone(answers);
  }, [currentIdx, total]);

  const choose = (optIdx: number) => {
    if (advancing.current || !current) return;
    advancing.current = true;
    const newAnswers = { ...answers, [current.id]: optIdx };
    setAnswers(newAnswers);
    if (currentIdx < total - 1) {
      setTimeout(() => { setCurrentIdx(i => i + 1); advancing.current = false; }, 200);
    } else {
      onDone(newAnswers);
    }
  };

  const goBack = () => { advancing.current = false; setCurrentIdx(i => Math.max(0, i - 1)); };

  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-10">
      {/* Header */}
      <div style={{ padding:'16px 0 8px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <button onClick={goBack} disabled={currentIdx===0}
          style={{ fontSize:'13px', color: currentIdx===0 ? 'var(--text-muted)' : 'var(--crimson)', background:'none', border:'none', cursor: currentIdx===0 ? 'default':'pointer', padding:'4px 0' }}>
          ← Quay lại
        </button>
        <span style={{ fontSize:'12px', color:'var(--text-muted)' }}>Câu {currentIdx+1}/{total}</span>
        <div className="eyebrow" style={{ fontSize:'9px' }}>{primaryThe}</div>
      </div>

      {/* Progress bar */}
      <div className="bar-track mb-6">
        <div className="bar-fill" style={{ width:`${pct}%` }} />
      </div>

      {current && (
        <div key={current.id} className="screen-fade-in">
          <div className="card-crimson p-5 mb-5">
            <p style={{ fontSize:'var(--fs-h3)', lineHeight:1.6, color:'var(--dark)', fontWeight:500 }}>{current.text}</p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {current.options.map((opt, i) => {
              const selected = answers[current.id] === i;
              return (
                <button key={i} onClick={() => choose(i)}
                  style={{
                    padding:'14px 16px', textAlign:'left', fontSize:'var(--fs-body)', lineHeight:1.5,
                    background: selected ? 'var(--crimson-tint)' : 'var(--cream-lighter)',
                    border: `1px solid ${selected ? 'var(--crimson)' : 'var(--gold)'}`,
                    color: selected ? 'var(--crimson)' : 'var(--dark)',
                    fontWeight: selected ? 600 : 400,
                    cursor:'pointer', transition:'all 150ms',
                  }}>
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Screen 5: Loading ────────────────────────────────────────
function LoadingScreen({ name }: { name: string }) {
  const steps = [
    'Đang đọc những tín hiệu bạn vừa chia sẻ',
    'Đối chiếu với khung 9 thể trạng Đông y',
    'Phân tích thể trạng trội và thể trạng phụ',
    `Soạn báo cáo riêng cho ${name}`,
  ];
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => s < steps.length - 1 ? s+1 : s), 900);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="screen-fade-in max-w-md mx-auto px-4" style={{ minHeight:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center' }}>
      <BrandHeader />
      <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'64px', fontWeight:300, color:'var(--crimson)', marginBottom:'24px', lineHeight:1 }}>✦</div>
      <div style={{ display:'flex', flexDirection:'column', gap:'12px', width:'100%' }}>
        {steps.map((s,i) => (
          <div key={i} className={i <= step ? 'screen-fade-in' : ''} style={{ display:'flex', gap:'10px', alignItems:'flex-start', opacity: i > step ? 0 : 1 }}>
            <span style={{ color: i < step ? 'var(--crimson)' : 'var(--gold)', fontSize:'16px', marginTop:'1px' }}>{i < step ? '✓' : '◆'}</span>
            <span className={i === step ? 'loading-pulse' : ''} style={{ fontSize:'14px', color: i === step ? 'var(--dark)' : 'var(--text-muted)', fontWeight: i === step ? 500 : 400 }}>{s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Screen 6: Report ─────────────────────────────────────────
function ReportScreen({ result, userInfo, onNext }: { result: ScoreResult; userInfo: UserInfo; onNext: () => void }) {
  const info = THE_CONTENT[result.dominant];
  const theory = THE_THEORY[result.dominant];
  const secInfo = result.secondary ? THE_CONTENT[result.secondary] : null;
  const bodyAge = computeBodyAge(userInfo.birthYear, result.dominant, result.secondary);
  const sm = result.symptomMatches[result.dominant];

  // Shareable result card ref
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadCard = useCallback(async () => {
    if (!cardRef.current) return;
    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(cardRef.current, { scale: 2, backgroundColor: null });
      const a = document.createElement('a');
      a.download = `ket-qua-the-tang-${result.dominant}.png`;
      a.href = canvas.toDataURL('image/png');
      a.click();
    } catch {
      alert('Không thể tải ảnh. Thử chụp màn hình nhé!');
    }
  }, [result.dominant]);

  // Chinese character map for each thể
  const HANZI: Record<TheKey, string> = {
    duonghu:'陽虛', khihu:'氣虛', amhu:'陰虛', damthap:'痰濕',
    thapnhiet:'濕熱', huyetu:'血瘀', khiuat:'氣鬱', dacbam:'特稟', binhhoa:'平和'
  };

  // Sorted bar for all 9 thể
  const sorted = [...THE_KEYS].sort((a, b) => result.pct[b] - result.pct[a]);

  // 5 dimension scores for result card
  const DIMS: { label: string; keys: TheKey[] }[] = [
    { label:'Năng lượng', keys:['khihu','duonghu'] },
    { label:'Nội tiết',   keys:['amhu','huyetu'] },
    { label:'Tiêu hóa',   keys:['damthap','thapnhiet'] },
    { label:'Giấc ngủ',   keys:['khihu','amhu'] },
    { label:'Tinh thần',  keys:['khiuat','dacbam'] },
  ];
  const dimPcts = DIMS.map(d => {
    const avg = d.keys.reduce((s,k) => s + (result.pct[k]??0), 0) / d.keys.length;
    // invert: high score on deficit thể = lower wellness
    return Math.max(0, Math.round(100 - avg * 0.7));
  });

  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-12">
      <BrandHeader small />

      {/* ── Shareable result card ── */}
      <div id="result-card" ref={cardRef} style={{
        background: 'var(--cream-lighter)',
        marginBottom: '16px',
        overflow: 'hidden',
      }}>
        {/* Brand header strip — thin crimson line + diamond + brand name */}
        <div style={{ textAlign:'center', padding:'20px 24px 14px' }}>
          <div style={{ width:'40px', height:'1px', background:'var(--crimson)', margin:'0 auto 8px' }} />
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'6px' }}>
            <span style={{ fontFamily:'var(--font-cormorant)', fontSize:'13px', color:'var(--text-muted)' }}>◆</span>
            <span style={{ fontSize:'9px', color:'var(--text-muted)', letterSpacing:'0.25em', fontFamily:'var(--font-cormorant)' }}>Elisabeth&apos;s Garden</span>
          </div>
        </div>

        {/* Hero: thể name + Chinese chars */}
        <div style={{ textAlign:'center', padding:'8px 24px 0', overflow:'hidden' }}>
          <p className="eyebrow" style={{ fontSize:'9px', marginBottom:'10px', opacity:0.7 }}>THỂ TRẠNG CỦA BẠN</p>
          <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'var(--fs-hero)', fontWeight:500, color:'var(--crimson)', lineHeight:1 }}>
            {info.name}
          </h2>
          <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'var(--fs-h3)', color:'var(--text-muted)', fontStyle:'italic', letterSpacing:'0.1em', marginTop:'6px' }}>
            {HANZI[result.dominant]}
          </div>
          <div style={{ height:'1px', background:'var(--gold)', opacity:0.5, margin:'14px 0 12px' }} />
          <p style={{ fontSize:'var(--fs-sm)', color:'var(--text-mid)', fontStyle:'italic', lineHeight:1.6 }}>{info.tagline}</p>
        </div>

        {/* 2 metrics — flat, no card borders, vertical gold divider */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1px 1fr', alignItems:'center', padding:'16px 24px', marginTop:'8px' }}>
          <div style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'32px', fontWeight:600, color:'var(--crimson)', lineHeight:1 }}>{sm.matched}<span style={{ fontSize:'18px', fontWeight:400 }}>/{sm.total}</span></div>
            <div style={{ fontSize:'10px', color:'var(--text-muted)', marginTop:'4px', letterSpacing:'0.05em' }}>dấu hiệu khớp</div>
          </div>
          <div style={{ background:'var(--gold)', opacity:0.5, alignSelf:'stretch' }} />
          <div style={{ textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'32px', fontWeight:600, color:'var(--crimson)', lineHeight:1 }}>{bodyAge}</div>
            <div style={{ fontSize:'10px', color:'var(--text-muted)', marginTop:'4px', letterSpacing:'0.05em' }}>tuổi cơ thể</div>
          </div>
        </div>

        {/* Quote — no background, just centered italic */}
        <div style={{ padding:'12px 32px 16px' }}>
          <p style={{ fontSize:'var(--fs-body)', fontStyle:'italic', color:'var(--dark)', lineHeight:1.7, textAlign:'center' }}>
            &ldquo;{info.quote}&rdquo;
          </p>
        </div>

        {/* 5 dimension bars — thinner track, no eyebrow label */}
        <div style={{ padding:'0 24px 16px' }}>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {DIMS.map((d, i) => (
              <div key={d.label} style={{ display:'flex', alignItems:'center', gap:'10px' }}>
                <div style={{ width:'60px', fontSize:'11px', color:'var(--text-mid)', flexShrink:0, fontWeight:500 }}>{d.label}</div>
                <div style={{ flex:1, height:'3px', background:'var(--cream-mid)', overflow:'hidden' }}>
                  <div style={{ height:'100%', width:`${dimPcts[i]}%`, background:'var(--crimson)', transition:'width 600ms ease-out' }} />
                </div>
                <div style={{ width:'32px', fontSize:'11px', color:'var(--crimson)', fontWeight:700, textAlign:'right' }}>{dimPcts[i]}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder signature — just name, no paragraph text, no eyebrow */}
        <div style={{ textAlign:'center', padding:'8px 24px 16px' }}>
          <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'20px', color:'var(--crimson)', fontStyle:'italic' }}>
            Elisabeth ♡
          </div>
        </div>

        {/* Bottom tagline — plain cream, no cream-mid */}
        <div style={{ textAlign:'center', borderTop:'1px solid var(--gold)', padding:'10px 24px 12px', background:'var(--cream-lighter)' }}>
          <span className="eyebrow" style={{ fontSize:'8px', letterSpacing:'0.4em' }}>HIỂU MÌNH • YÊU MÌNH • SỐNG AN NHIÊN</span>
        </div>
      </div>

      {/* Save card button */}
      <button className="btn-outline mb-8 no-print" onClick={downloadCard}>
        Lưu kết quả để chia sẻ →
      </button>

      {/* ── Hiểu về thể trạng của bạn — lý thuyết đầy đủ, trao giá trị trước ── */}
      <div className="mb-8">
        <p className="eyebrow mb-2">Hiểu về thể trạng của bạn</p>
        <h3 style={{ fontFamily:'var(--font-cormorant)', fontSize:'24px', fontWeight:600, color:'var(--dark)', marginBottom:'12px' }}>
          Thể {info.name} là gì?
        </h3>
        {theory.laGi.map((para, i) => (
          <p key={i} style={{ fontSize:'var(--fs-body)', lineHeight:1.85, color:'var(--text-mid)', marginBottom:'12px' }}>{para}</p>
        ))}
      </div>

      {/* ── Dấu hiệu nhận biết — kèm giải thích từng dấu hiệu ── */}
      <div className="mb-8">
        <h3 style={{ fontFamily:'var(--font-cormorant)', fontSize:'22px', fontWeight:600, color:'var(--dark)', marginBottom:'12px' }}>
          {theory.signsTitle}
        </h3>
        {theory.signs.map((s, i) => (
          <div key={i} style={{ marginBottom:'12px' }}>
            <div style={{ display:'flex', gap:'8px', alignItems:'flex-start' }}>
              <span style={{ color:'var(--crimson)', flexShrink:0, fontSize:'12px', marginTop:'3px' }}>◆</span>
              <div>
                <div style={{ fontSize:'14px', fontWeight:600, color:'var(--dark)', lineHeight:1.5 }}>{s.sign}</div>
                <div style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6 }}>{s.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart all 9 thể */}
      <div className="card p-4 mb-6">
        <p className="eyebrow mb-4">Phân bố thể trạng của bạn</p>
        <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
          {sorted.map(key => {
            const t = THE_CONTENT[key];
            const sm2 = result.symptomMatches[key];
            const pct = result.pct[key];
            return (
              <div key={key}>
                <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'4px' }}>
                  <span style={{ fontSize:'12px', fontWeight: key===result.dominant ? 600 : 400, color: key===result.dominant ? 'var(--crimson)' : 'var(--dark)' }}>
                    {key===result.dominant ? '◆ ' : ''}{t.name}
                  </span>
                  <span style={{ fontSize:'11px', color:'var(--text-muted)' }}>{sm2.matched}/{sm2.total} dấu hiệu · {pct}%</span>
                </div>
                <div className="bar-track">
                  <div className="bar-fill" style={{ width:`${pct}%`, opacity: key===result.dominant ? 1 : 0.5 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Vì sao bạn ở thể này — nguyên nhân kèm phân tích cặn kẽ ── */}
      <div className="mb-8">
        <h3 style={{ fontFamily:'var(--font-cormorant)', fontSize:'22px', fontWeight:600, color:'var(--dark)', marginBottom:'6px' }}>
          {theory.causesTitle}
        </h3>
        {theory.causesIntro && (
          <p style={{ fontSize:'13px', color:'var(--text-muted)', fontStyle:'italic', lineHeight:1.6, marginBottom:'12px' }}>{theory.causesIntro}</p>
        )}
        {theory.causes.map((c, i) => (
          <div key={i} className="card-crimson" style={{ padding:'12px 14px', marginBottom:'8px' }}>
            <div style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
              <span style={{ fontFamily:'var(--font-cormorant)', fontSize:'20px', color:'var(--crimson)', fontWeight:600, flexShrink:0, lineHeight:1.2 }}>{i+1}</span>
              <div>
                <div style={{ fontSize:'14px', fontWeight:600, color:'var(--dark)', marginBottom:'3px' }}>{c.title}</div>
                <div style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6 }}>{c.detail}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div className="card p-4 mb-6">
        <p className="eyebrow mb-3">Điểm mạnh cơ thể bạn</p>
        {info.strengths.map((s, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <span style={{ color:'var(--crimson)', flexShrink:0 }}>◆</span>
            <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6 }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Insights */}
      <div className="mb-8">
        <p className="eyebrow mb-3">Cơ thể {userInfo.name} đang nói điều này</p>
        {info.insights.map((ins, i) => (
          <div key={i} style={{ borderLeft:'2px solid var(--crimson)', paddingLeft:'12px', marginBottom:'12px' }}>
            <p style={{ fontSize:'13px', color:'var(--dark)', lineHeight:1.7 }}>{ins}</p>
          </div>
        ))}
      </div>

      {secInfo && (
        <div className="card p-4 mb-8">
          <p className="eyebrow mb-2">Thể trạng phụ: {secInfo.name}</p>
          <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6 }}>{secInfo.tagline}</p>
        </div>
      )}

      <button className="btn-primary" onClick={onNext}>Xem lộ trình cá nhân →</button>
    </div>
  );
}

// ─── Recipes Section (Dương Hư + future thể) ──────────────────
const RECIPE_CATS: Recipe['category'][] = ['Bữa sáng','Canh & Cháo','Món chính','Đồ uống','Tráng miệng'];
const CAT_ICONS: Record<Recipe['category'], string> = {
  'Bữa sáng':'🌅','Canh & Cháo':'🫕','Món chính':'🍳','Đồ uống':'☕','Tráng miệng':'🍮',
};

function RecipesSection({ recipes }: { recipes: Recipe[] }) {
  const [openCat, setOpenCat] = useState<Recipe['category'] | null>(null);
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

  return (
    <div className="mb-6">
      <p className="eyebrow mb-1">30 Công thức nấu ăn</p>
      <p style={{ fontSize:'12px', color:'var(--text-muted)', marginBottom:'12px' }}>
        Nguyên liệu dễ tìm, phù hợp thể trạng. Luôn ăn/uống ấm, không thêm đá.
      </p>
      {RECIPE_CATS.map(cat => {
        const catRecipes = recipes.filter(r => r.category === cat);
        if (!catRecipes.length) return null;
        const isOpen = openCat === cat;
        return (
          <div key={cat} style={{ marginBottom:'8px', border:'1px solid var(--crimson-border)', background:'var(--cream)' }}>
            {/* Category header */}
            <button
              onClick={() => setOpenCat(isOpen ? null : cat)}
              style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 14px', background:'none', border:'none', cursor:'pointer', textAlign:'left' }}
            >
              <span style={{ fontSize:'13px', fontWeight:600, color:'var(--dark)' }}>
                {CAT_ICONS[cat]} {cat}
              </span>
              <span style={{ display:'flex', alignItems:'center', gap:'8px' }}>
                <span style={{ fontSize:'11px', color:'var(--crimson)', fontWeight:600 }}>{catRecipes.length} món</span>
                <span style={{ fontSize:'14px', color:'var(--text-muted)', transition:'transform 0.2s', display:'inline-block', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
              </span>
            </button>
            {/* Recipe list */}
            {isOpen && (
              <div style={{ borderTop:'1px solid var(--crimson-border)' }}>
                {catRecipes.map((r, ri) => {
                  const rKey = `${cat}-${ri}`;
                  const rOpen = openRecipe === rKey;
                  return (
                    <div key={ri} style={{ borderBottom: ri < catRecipes.length-1 ? '1px solid var(--gold)' : 'none' }}>
                      {/* Recipe header */}
                      <button
                        onClick={() => setOpenRecipe(rOpen ? null : rKey)}
                        style={{ width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px 14px', background: rOpen ? 'rgba(122,28,35,0.04)' : 'none', border:'none', cursor:'pointer', textAlign:'left' }}
                      >
                        <div>
                          <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'16px', color:'var(--dark)', fontWeight:600 }}>{r.name}</div>
                          <div style={{ fontSize:'11px', color:'var(--text-muted)', marginTop:'2px', fontStyle:'italic' }}>{r.effect}</div>
                        </div>
                        <span style={{ fontSize:'12px', color:'var(--crimson)', flexShrink:0, marginLeft:'8px' }}>{rOpen ? '−' : '+'}</span>
                      </button>
                      {/* Recipe detail */}
                      {rOpen && (
                        <div style={{ padding:'0 14px 14px' }}>
                          <div style={{ marginBottom:'10px' }}>
                            <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'6px' }}>Nguyên liệu</div>
                            <div style={{ display:'flex', flexWrap:'wrap', gap:'5px' }}>
                              {r.ingredients.map((ing, ii) => (
                                <span key={ii} style={{ fontSize:'11px', background:'rgba(122,28,35,0.07)', color:'var(--dark)', padding:'3px 8px' }}>{ing}</span>
                              ))}
                            </div>
                          </div>
                          <div style={{ marginBottom: r.tip ? '10px' : '0' }}>
                            <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:'6px' }}>Cách làm</div>
                            {r.steps.map((step, si) => (
                              <div key={si} style={{ display:'flex', gap:'8px', marginBottom:'6px', alignItems:'flex-start' }}>
                                <span style={{ width:'18px', height:'18px', background:'var(--crimson)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'10px', fontWeight:700, flexShrink:0 }}>{si+1}</span>
                                <span style={{ fontSize:'12px', color:'var(--text-mid)', lineHeight:1.5 }}>{step}</span>
                              </div>
                            ))}
                          </div>
                          {r.tip && (
                            <div style={{ background:'rgba(122,28,35,0.05)', padding:'8px 10px', borderLeft:'2px solid var(--crimson)' }}>
                              <span style={{ fontSize:'11px', color:'var(--text-mid)', fontStyle:'italic' }}>💡 {r.tip}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Sản phẩm EG gợi ý theo mục (format giống PDF mẫu Dương Hư) ─
function ProductSuggestions({ title, items }: { title: string; items: TheProduct[] }) {
  if (!items.length) return null;
  return (
    <div style={{ marginBottom: '24px' }}>
      <p style={{ fontSize: '11px', fontWeight: 700, color: 'var(--crimson)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>
        ◆ {title}
      </p>
      {items.map((p, i) => (
        <div key={i} className="card-crimson" style={{ padding: '12px 14px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '10px' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '17px', fontWeight: 600, color: 'var(--dark)', lineHeight: 1.25 }}>{p.name}</span>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '17px', fontWeight: 600, color: 'var(--crimson)', flexShrink: 0 }}>{p.price}</span>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '2px 0 6px' }}>{p.spec}</div>
          <div style={{ fontSize: '12px', color: 'var(--text-mid)', lineHeight: 1.55, fontStyle: 'italic' }}>
            Vì sao phù hợp: {p.why}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Screen 7: Roadmap ────────────────────────────────────────
function RoadmapScreen({ result, userInfo, onConsent }: { result: ScoreResult; userInfo: UserInfo; onConsent: (yes: boolean) => void }) {
  const info = THE_CONTENT[result.dominant];
  const extras = THE_EXTRAS[result.dominant];
  const theory = THE_THEORY[result.dominant];

  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-12">
      <BrandHeader small />

      <div className="pt-4 pb-4 no-print">
        <p className="eyebrow text-center mb-2">Lộ trình cá nhân</p>
        <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'30px', textAlign:'center', lineHeight:1.2 }}>
          30 ngày phục hồi<br /><em style={{ color:'var(--crimson)' }}>cho thể {info.name}</em>
        </h2>
      </div>

      {/* Print button */}
      <button className="btn-outline mb-6 no-print" onClick={() => window.print()}>🖨️ In / Tải lộ trình 7 ngày</button>

      {/* 7 ngày đầu */}
      <div className="mb-6">
        <p className="eyebrow mb-3">7 ngày đầu: bắt đầu nhẹ nhàng</p>
        {['Sáng: uống 1 ly nước ấm, bỏ nước đá hoàn toàn','Ăn 3 bữa đúng giờ, không bỏ bữa sáng','Ngủ trước 23h ít nhất 5 ngày','Đi bộ nhẹ 15 phút mỗi ngày','Tránh điện thoại 30 phút trước ngủ'].map((s,i)=>(
          <div key={i} style={{ display:'flex', gap:'10px', alignItems:'flex-start', marginBottom:'10px' }}>
            <div style={{ width:'22px', height:'22px', background:'var(--crimson)', color:'white', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'11px', fontWeight:700, flexShrink:0 }}>{i+1}</div>
            <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.5 }}>{s}</span>
          </div>
        ))}
      </div>

      {/* Ăn gì / Tránh gì */}
      <div className="card p-4 mb-6">
        <p className="eyebrow mb-2">Chế độ ăn cho thể {info.name}</p>
        <p style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6, marginBottom:'14px' }}>
          <strong style={{ color:'var(--crimson)' }}>Nguyên tắc cốt lõi:</strong> {theory.nguyenTacAn}
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
          <div>
            <div style={{ fontSize:'11px', fontWeight:600, color:'#2d6a4f', marginBottom:'8px', textTransform:'uppercase', letterSpacing:'0.1em' }}>Nên ăn</div>
            {info.foods_rec.map((f,i) => (
              <div key={i} style={{ display:'flex', gap:'6px', marginBottom:'5px' }}>
                <span style={{ color:'#2d6a4f', fontSize:'12px' }}>✓</span>
                <span style={{ fontSize:'12px', color:'var(--text-mid)' }}>{f}</span>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', marginBottom:'8px', textTransform:'uppercase', letterSpacing:'0.1em' }}>Hạn chế</div>
            {info.foods_avoid.map((f,i) => (
              <div key={i} style={{ display:'flex', gap:'6px', marginBottom:'5px' }}>
                <span style={{ color:'var(--crimson)', fontSize:'12px' }}>✗</span>
                <span style={{ fontSize:'12px', color:'var(--text-mid)' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mẹo thực tế áp dụng hàng ngày */}
      <div className="mb-6">
        <p className="eyebrow mb-3">Mẹo thực tế áp dụng hàng ngày</p>
        {theory.meo.map((m, i) => (
          <div key={i} style={{ display:'flex', gap:'8px', marginBottom:'10px', alignItems:'flex-start' }}>
            <span style={{ color:'var(--crimson)', flexShrink:0, fontSize:'12px', marginTop:'3px' }}>◆</span>
            <div>
              <span style={{ fontSize:'13px', fontWeight:600, color:'var(--dark)' }}>{m.title}: </span>
              <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6 }}>{m.detail}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sản phẩm EG gợi ý cho mục ĂN */}
      <ProductSuggestions title="Sản phẩm EG gợi ý cho mục ăn" items={extras.products.an} />

      {/* Recipes — only when available */}
      {info.recipes && info.recipes.length > 0 && (
        <RecipesSection recipes={info.recipes} />
      )}

      {/* ② Đồ uống dưỡng sinh — lịch uống riêng theo thể, không đồ ngọt buổi sáng */}
      <div className="mb-6">
        <p className="eyebrow mb-3">Đồ uống dưỡng sinh cho thể {info.name}</p>
        {extras.drinks.map((t, i) => (
          <div key={i} className="card-crimson p-3 mb-2" style={{ display:'flex', gap:'10px' }}>
            <div style={{ fontSize:'14px', flexShrink:0 }}>{t.time.split(' ')[0]}</div>
            <div>
              <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', marginBottom:'2px' }}>{t.time.split(' ').slice(1).join(' ')}</div>
              <div style={{ fontSize:'12px', color:'var(--text-mid)' }}>{t.drink}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Sản phẩm EG gợi ý cho mục UỐNG */}
      <ProductSuggestions title="Sản phẩm EG gợi ý cho mục uống" items={extras.products.uong} />

      {/* ③ Tập luyện & thói quen — phần mới theo feedback (trước đây thiếu) */}
      <div className="mb-6">
        <p className="eyebrow mb-3">Tập luyện & thói quen cho thể {info.name}</p>

        <div style={{ fontSize:'11px', fontWeight:600, color:'#2d6a4f', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'8px' }}>Vận động phù hợp</div>
        {extras.vanDong.phuHop.map((v, i) => (
          <div key={i} style={{ display:'flex', gap:'8px', marginBottom:'7px' }}>
            <span style={{ color:'#2d6a4f', fontSize:'12px', flexShrink:0 }}>✓</span>
            <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.55 }}>{v}</span>
          </div>
        ))}

        <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', textTransform:'uppercase', letterSpacing:'0.1em', margin:'14px 0 8px' }}>Nên tránh</div>
        {extras.vanDong.tranh.map((v, i) => (
          <div key={i} style={{ display:'flex', gap:'8px', marginBottom:'7px' }}>
            <span style={{ color:'var(--crimson)', fontSize:'12px', flexShrink:0 }}>✗</span>
            <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.55 }}>{v}</span>
          </div>
        ))}

        <div className="card p-4" style={{ marginTop:'14px' }}>
          <div style={{ fontSize:'11px', fontWeight:600, color:'var(--crimson)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'8px' }}>Thói quen hàng ngày</div>
          {extras.vanDong.thoiQuen.map((v, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <span style={{ color:'var(--crimson)', flexShrink:0 }}>◆</span>
              <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.55 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sản phẩm EG gợi ý cho mục TẬP LUYỆN */}
      <ProductSuggestions title="Dụng cụ EG gợi ý" items={extras.products.tap} />

      {/* 30 ngày */}
      <div className="card p-4 mb-6">
        <p className="eyebrow mb-3">30 ngày tiếp theo</p>
        {['Thêm sản phẩm thảo mộc phù hợp thể trạng vào routine sáng','Tăng thời gian đi bộ lên 30 phút, 4–5 lần/tuần','Theo dõi 1 triệu chứng chính mỗi tuần, ghi chú thay đổi','Giữ nhịp ngủ: ngủ-thức cùng giờ mỗi ngày'].map((s,i)=>(
          <div key={i} className="flex gap-2 mb-2">
            <span style={{ color:'var(--crimson)', flexShrink:0 }}>◆</span>
            <span style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.5 }}>{s}</span>
          </div>
        ))}
      </div>

      {/* 90 ngày */}
      <div className="mb-6">
        <p className="eyebrow mb-3">90 ngày phục hồi sâu</p>
        <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.7 }}>
          Sau 90 ngày duy trì lộ trình, phần lớn thể trạng đều cải thiện đáng kể. Bạn có thể làm lại bài test để theo dõi tiến trình.
        </p>
      </div>

      {/* Consent */}
      <div className="card-crimson p-5 mb-4">
        <p className="eyebrow text-center mb-3">Một bước thêm</p>
        <p style={{ fontSize:'14px', lineHeight:1.7, color:'var(--dark)', textAlign:'center', marginBottom:'16px' }}>
          Elisabeth&apos;s Garden có khoá học và bộ sản phẩm dưỡng sinh phù hợp với thể <strong>{info.name}</strong>. Bạn có muốn xem không?
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px' }}>
          <button className="btn-primary" onClick={() => onConsent(true)}>Có, cho mình xem</button>
          <button className="btn-outline" onClick={() => onConsent(false)}>Tự thử trước</button>
        </div>
      </div>
    </div>
  );
}

// ─── Screen 8a: Offer — 3 đích chuyển đổi, 1 link đăng ký chung ─
function OfferScreen({ result, userInfo }: { result: ScoreResult; userInfo: UserInfo }) {
  const info = THE_CONTENT[result.dominant];

  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-12">
      <BrandHeader small />

      <div className="pt-4 pb-5 text-center">
        <p className="eyebrow mb-2">Dành cho thể {info.name}</p>
        <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'30px', lineHeight:1.2 }}>
          Bước tiếp theo của <em style={{ color:'var(--crimson)' }}>{userInfo.name}</em>
        </h2>
        <p style={{ fontSize:'13px', color:'var(--text-muted)', lineHeight:1.6, marginTop:'10px' }}>
          Ba cách để bắt đầu chăm sóc thể trạng của bạn, chọn một hoặc kết hợp cả ba.
        </p>
      </div>

      {OFFER_TARGETS.map(t => (
        <div key={t.id} className="card" style={{ marginBottom:'12px', overflow:'hidden' }}>
          {t.img && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={t.img} alt={t.name} style={{ width:'100%', aspectRatio:'16 / 9', objectFit:'cover', display:'block', background:'var(--cream-mid)' }} />
          )}
          <div style={{ padding:'16px' }}>
          <p className="eyebrow" style={{ fontSize:'9px', marginBottom:'4px' }}>{t.eyebrow}</p>
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', gap:'10px' }}>
            <h3 style={{ fontFamily:'var(--font-cormorant)', fontSize:'20px', fontWeight:600, color:'var(--dark)', lineHeight:1.2 }}>{t.name}</h3>
            <span style={{ fontFamily:'var(--font-cormorant)', fontSize:'19px', fontWeight:600, color:'var(--crimson)', flexShrink:0 }}>{t.price}</span>
          </div>
          <p style={{ fontSize:'13px', color:'var(--text-mid)', lineHeight:1.6, margin:'6px 0 8px' }}>{t.desc}</p>
          {t.url && (
            <a href={t.url} target={t.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
              style={{ fontSize:'12px', color:'var(--crimson)', fontWeight:600, textDecoration:'underline' }}>
              Xem chi tiết →
            </a>
          )}
          </div>
        </div>
      ))}

      <a href={REGISTER_URL} style={{ textDecoration:'none' }}>
        <span className="btn-primary mb-3" style={{ marginTop:'8px' }}>Đăng ký mua / nhận tư vấn →</span>
      </a>
      <p style={{ textAlign:'center', fontSize:'11px', color:'var(--text-muted)' }}>
        Một form duy nhất cho cả ba lựa chọn. EG sẽ liên hệ tư vấn, chưa cần thanh toán trước.
      </p>
    </div>
  );
}

// ─── Screen 8b: ThankYou ──────────────────────────────────────
function ThankYouScreen({ result, userInfo }: { result: ScoreResult; userInfo: UserInfo }) {
  const info = THE_CONTENT[result.dominant];
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <div className="screen-fade-in max-w-md mx-auto px-4 pb-12">
      <BrandHeader small />
      <div className="pt-6 pb-4 text-center">
        <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'48px', color:'var(--crimson)', marginBottom:'12px' }}>✦</div>
        <h2 style={{ fontFamily:'var(--font-cormorant)', fontSize:'28px', marginBottom:'8px' }}>Cảm ơn {userInfo.name}!</h2>
        <p style={{ fontSize:'14px', color:'var(--text-muted)', lineHeight:1.6 }}>
          Mình đã lưu báo cáo thể <strong>{info.name}</strong> của bạn.<br />
          Hãy quay lại bất cứ lúc nào.
        </p>
      </div>

      {!sent ? (
        <div className="card p-5 mb-6">
          <p className="eyebrow mb-3">Nhận lộ trình qua email</p>
          <p style={{ fontSize:'13px', color:'var(--text-muted)', marginBottom:'12px', lineHeight:1.6 }}>
            Mình sẽ gửi: PDF lộ trình 7 ngày + nhắc nhở sau 7 ngày.
          </p>
          <input value={email} onChange={e=>setEmail(e.target.value)}
            placeholder="email@gmail.com" type="email"
            style={{ width:'100%', padding:'12px', background:'var(--cream)', border:'1px solid var(--gold)', fontSize:'14px', outline:'none', marginBottom:'10px', color:'var(--dark)' }}
          />
          <button className="btn-primary" disabled={!email.includes('@')} style={{ opacity: email.includes('@') ? 1 : 0.5 }}
            onClick={() => setSent(true)}>
            Gửi cho mình →
          </button>
        </div>
      ) : (
        <div className="card-crimson p-5 mb-6 text-center">
          <p style={{ fontSize:'14px', color:'var(--dark)' }}>✓ Đã ghi nhận! Mình sẽ gửi trong vòng 24h.</p>
        </div>
      )}

      <button className="btn-outline" onClick={() => window.location.reload()}>Làm lại bài test</button>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>('landing');
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [answers, setAnswers] = useState<Record<number,number>>({});
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleInfoSubmit = (u: UserInfo) => { setUserInfo(u); setScreen('intro'); };

  const handleTestDone = useCallback((ans: Record<number,number>) => {
    setAnswers(ans);
    setScreen('loading');
    const res = computeScore(ans);
    if (userInfo) {
      res.bodyAge = computeBodyAge(userInfo.birthYear, res.dominant, res.secondary);
    }
    setResult(res);
    setTimeout(() => setScreen('report'), 4000);
  }, [userInfo]);

  const handleConsent = (yes: boolean) => setScreen(yes ? 'offer' : 'thankyou');

  return (
    <div style={{ background:'var(--cream)', minHeight:'100dvh' }}>
      {screen === 'landing'  && <LandingScreen onStart={() => setScreen('infoform')} />}
      {screen === 'infoform' && <InfoFormScreen onSubmit={handleInfoSubmit} />}
      {screen === 'intro'    && <IntroScreen userInfo={userInfo!} onStart={() => setScreen('test')} />}
      {screen === 'test'     && userInfo && <TestScreen userInfo={userInfo} onDone={handleTestDone} />}
      {screen === 'loading'  && userInfo && <LoadingScreen name={userInfo.name} />}
      {screen === 'report'   && result && userInfo && <ReportScreen result={result} userInfo={userInfo} onNext={() => setScreen('roadmap')} />}
      {screen === 'roadmap'  && result && userInfo && <RoadmapScreen result={result} userInfo={userInfo} onConsent={handleConsent} />}
      {screen === 'offer'    && result && userInfo && <OfferScreen result={result} userInfo={userInfo} />}
      {screen === 'thankyou' && result && userInfo && <ThankYouScreen result={result} userInfo={userInfo} />}
    </div>
  );
}
