// Components.jsx — Jutis UI Kit (modernized)
// Exports to window so other Babel scripts can import them.

const { useState, useEffect, useRef } = React;

// ── Brand Mark ─────────────────────────────────────────────
function JutisMark({ size = 40 }) {
  const s = size, half = size / 2;
  return (
    <div className="rel" style={{position:'relative', width:s, height:s, display:'inline-flex', alignItems:'center', justifyContent:'center'}}>
      <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} style={{position:'absolute', inset:0}}>
        <g transform={`translate(${half} ${half})`}>
          <rect x={-half*0.7} y={-half*0.7} width={s*0.7} height={s*0.7}
            fill="none" stroke="#dce87a" strokeWidth="2" rx={s*0.12} transform="rotate(45)"/>
          <rect x={-half*0.7} y={-half*0.7} width={s*0.7} height={s*0.7}
            fill="none" stroke="#e6e8ec" strokeOpacity="0.25" strokeWidth="1.25" rx={s*0.12} transform="rotate(12)"/>
          <rect x={-s*0.045} y={-s*0.22} width={s*0.09} height={s*0.44} fill="#dce87a" rx={s*0.045}/>
        </g>
      </svg>
    </div>
  );
}

function JutisLockup({ size = 36 }) {
  return (
    <div style={{display:'inline-flex', alignItems:'center', gap:12}}>
      <JutisMark size={size}/>
      <span style={{fontFamily:'Plus Jakarta Sans', fontWeight:800, letterSpacing:'.20em', fontSize:size*0.5, textTransform:'uppercase', color:'#e6e8ec'}}>JUTIS</span>
    </div>
  );
}

// ── Status pill ────────────────────────────────────────────
function StatusPill({ children, tone = 'live', dot = true, pulse = false }) {
  const tones = {
    live:   { bg:'rgba(220,232,122,.10)', border:'rgba(220,232,122,.20)', fg:'#dce87a' },
    success:{ bg:'rgba(74,222,128,.10)',  border:'rgba(74,222,128,.30)',  fg:'#4ade80' },
    danger: { bg:'rgba(248,113,113,.10)', border:'rgba(248,113,113,.30)', fg:'#f87171' },
    warn:   { bg:'rgba(245,158,11,.10)',  border:'rgba(245,158,11,.30)',  fg:'#f59e0b' },
    info:   { bg:'rgba(74,158,255,.10)',  border:'rgba(74,158,255,.30)',  fg:'#4a9eff' },
    neutral:{ bg:'#2e323c',               border:'#2e323c',               fg:'#9aa1ac' },
  };
  const t = tones[tone] || tones.live;
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', gap:6,
      padding:'4px 10px', borderRadius:9999,
      background:t.bg, border:`1px solid ${t.border}`, color:t.fg,
      fontSize:11, fontWeight:700, letterSpacing:'.10em', textTransform:'uppercase',
      fontFamily:'Inter, system-ui'
    }}>
      {dot && <span style={{width:6, height:6, borderRadius:9999, background:'currentColor', animation: pulse ? 'jutisPulse 2s ease-in-out infinite' : 'none'}}/>}
      {children}
    </span>
  );
}

// ── Pill button ────────────────────────────────────────────
function PillButton({ children, variant='primary', icon, trailingIcon, onClick, glow=false }) {
  const variants = {
    primary: { bg:'#e6e8ec', fg:'#1a1d23', border:'transparent' },
    accent:  { bg:'#dce87a', fg:'#1a1d23', border:'transparent' },
    grad:    { bg:'linear-gradient(90deg,#dce87a,#c8d96a)', fg:'#0a0b0f', border:'transparent' },
    outline: { bg:'transparent', fg:'#e6e8ec', border:'#2e323c' },
    ghost:   { bg:'transparent', fg:'#9aa1ac', border:'transparent' },
  };
  const v = variants[variant];
  const [hover, setHover] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{
        display:'inline-flex', alignItems:'center', gap:8,
        padding:'10px 20px', borderRadius:9999,
        background: hover && variant==='primary' ? '#dce87a' : v.bg,
        color:v.fg, border:`1px solid ${v.border}`,
        fontFamily:'Inter, system-ui', fontWeight:700, fontSize:14, cursor:'pointer',
        transition:'all .25s cubic-bezier(.4,0,.2,1)',
        transform: hover ? 'scale(1.02)' : 'scale(1)',
        boxShadow: glow ? '0 0 30px rgba(220,232,122,.30)' : 'none',
      }}>
      {icon && <span className="material-symbols-outlined" style={{fontSize:18}}>{icon}</span>}
      <span>{children}</span>
      {trailingIcon && <span className="material-symbols-outlined" style={{fontSize:18}}>{trailingIcon}</span>}
    </button>
  );
}

// ── Card ──────────────────────────────────────────────────
function Card({ children, variant='default', style }) {
  const v = {
    default: { background:'#232730', border:'1px solid #2e323c', borderRadius:16 },
    inset:   { background:'#1a1d23', border:'1px solid #2e323c', borderRadius:12 },
    cyber:   { background:'linear-gradient(180deg,#181a21,#0f1015)', border:'1px solid rgba(220,232,122,.15)', borderRadius:16,
               boxShadow:'0 0 40px rgba(220,232,122,.12), 0 0 80px rgba(220,232,122,.05)' },
    hero:    { background:'linear-gradient(160deg,#232730,#1a1d23)', border:'1px solid #2e323c', borderRadius:16, position:'relative', overflow:'hidden' },
  }[variant];
  return <div style={{...v, padding:20, ...style}}>{children}</div>;
}

// ── Token chip (asset glyph) ──────────────────────────────
function TokenChip({ symbol, size=32 }) {
  const map = {
    CANT: { bg:'rgba(220,232,122,.20)', fg:'#dce87a', glyph:'C' },
    USDC: { bg:'rgba(74,158,255,.20)',  fg:'#4a9eff', glyph:'$' },
    WETH: { bg:'rgba(98,126,234,.20)',  fg:'#627eea', glyph:'Ξ' },
    WBTC: { bg:'rgba(247,147,26,.20)',  fg:'#f7931a', glyph:'₿' },
  };
  const t = map[symbol] || map.CANT;
  return (
    <div style={{width:size, height:size, borderRadius:9999, background:t.bg, color:t.fg,
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:size*0.42}}>
      {t.glyph}
    </div>
  );
}

// ── Sidebar nav row ──────────────────────────────────────
function NavRow({ icon, label, active, badge, onClick }) {
  const [hover, setHover] = useState(false);
  const bg = active ? 'rgba(220,232,122,.10)' : (hover ? '#2e323c' : 'transparent');
  const color = active ? '#dce87a' : (hover ? '#e6e8ec' : '#9aa1ac');
  return (
    <a onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:'flex', alignItems:'center', gap:12, padding:'12px 14px',
        borderRadius:12, background:bg, color, cursor:'pointer',
        fontFamily:'Inter', fontWeight:500, fontSize:14, textDecoration:'none',
        transition:'background .2s, color .2s'}}>
      <span className="material-symbols-outlined" style={{fontSize:20}}>{icon}</span>
      <span style={{flex:1}}>{label}</span>
      {badge && <span style={{padding:'2px 8px', background:'#dce87a', color:'#1a1d23',
        fontSize:10, fontWeight:800, letterSpacing:'.05em', borderRadius:9999}}>{badge}</span>}
    </a>
  );
}

// ── Sidebar ──────────────────────────────────────────────
function Sidebar({ active, onNav }) {
  const items = [
    { id:'dashboard', icon:'dashboard',                label:'Dashboard', badge:'NOW ON' },
    { id:'wallet',    icon:'account_balance_wallet',   label:'Wallet' },
    { id:'swap',      icon:'swap_horiz',               label:'Swap' },
    { id:'bridge',    icon:'bolt',                     label:'Bridge' },
    { id:'history',   icon:'history',                  label:'History' },
    { id:'security',  icon:'security',                 label:'Security' },
    { id:'settings',  icon:'settings',                 label:'Settings' },
  ];
  return (
    <aside style={{width:256, height:'100%', background:'#232730', borderRight:'1px solid #2e323c',
      display:'flex', flexDirection:'column'}}>
      <div style={{padding:'24px 20px'}}>
        <JutisLockup size={36}/>
      </div>
      <nav style={{flex:1, padding:'0 12px', display:'flex', flexDirection:'column', gap:4}}>
        {items.map(it => (
          <NavRow key={it.id} {...it} active={active===it.id} onClick={()=>onNav?.(it.id)}/>
        ))}
      </nav>
      <div style={{padding:16, borderTop:'1px solid #2e323c'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, padding:'8px 6px'}}>
          <div style={{width:38, height:38, borderRadius:9999, background:'rgba(220,232,122,.20)', color:'#dce87a',
            display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:13}}>JD</div>
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontSize:13, fontWeight:500, color:'#e6e8ec', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>john.doe@email.com</div>
            <div style={{fontSize:11, color:'#9aa1ac'}}>Connected · Canton</div>
          </div>
          <span className="material-symbols-outlined" style={{color:'#9aa1ac', fontSize:18, cursor:'pointer'}}>logout</span>
        </div>
      </div>
    </aside>
  );
}

// ── Topbar with command-bar (modernized addition) ─────────
function Topbar({ title, subtitle }) {
  const [open, setOpen] = useState(false);
  return (
    <header style={{display:'flex', alignItems:'center', justifyContent:'space-between', gap:16, marginBottom:24}}>
      <div>
        <h1 style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:24, margin:0, letterSpacing:'-.01em'}}>{title}</h1>
        {subtitle && <p style={{color:'#9aa1ac', fontSize:14, margin:'4px 0 0'}}>{subtitle}</p>}
      </div>
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <button onClick={()=>setOpen(true)} style={{
          display:'inline-flex', alignItems:'center', gap:10,
          padding:'10px 14px', background:'#1a1d23', border:'1px solid #2e323c', borderRadius:12,
          color:'#9aa1ac', cursor:'pointer', fontFamily:'Inter', fontSize:13,
          minWidth:240
        }}>
          <span className="material-symbols-outlined" style={{fontSize:18}}>search</span>
          <span style={{flex:1, textAlign:'left'}}>Quick actions, send, swap…</span>
          <kbd style={{padding:'2px 6px', background:'#2e323c', borderRadius:6, fontFamily:'JetBrains Mono', fontSize:10, color:'#9aa1ac'}}>⌘K</kbd>
        </button>
        <button style={{position:'relative', padding:10, background:'#232730', border:'1px solid #2e323c', borderRadius:12, color:'#9aa1ac', cursor:'pointer'}}>
          <span className="material-symbols-outlined">notifications</span>
          <span style={{position:'absolute', top:8, right:8, width:7, height:7, borderRadius:9999, background:'#f87171'}}/>
        </button>
        <PillButton variant="accent" icon="add">Add Wallet</PillButton>
      </div>
      {open && <CommandPalette onClose={()=>setOpen(false)}/>}
    </header>
  );
}

function CommandPalette({ onClose }) {
  const items = [
    { icon:'send', label:'Send tokens', kbd:'S' },
    { icon:'swap_horiz', label:'Open Bridge', kbd:'B' },
    { icon:'qr_code', label:'Scan QR to pay', kbd:'Q' },
    { icon:'add', label:'Add wallet', kbd:'A' },
    { icon:'security', label:'Security checkup', kbd:'⇧ S' },
  ];
  return (
    <div onClick={onClose} style={{position:'fixed', inset:0, background:'rgba(0,0,0,.7)', backdropFilter:'blur(8px)',
      zIndex:50, display:'flex', alignItems:'flex-start', justifyContent:'center', paddingTop:120}}>
      <div onClick={e=>e.stopPropagation()} style={{
        width:560, background:'#181a21', border:'1px solid rgba(220,232,122,.15)', borderRadius:18,
        boxShadow:'0 30px 80px rgba(0,0,0,.5), 0 0 60px rgba(220,232,122,.1)', overflow:'hidden'}}>
        <div style={{display:'flex', alignItems:'center', gap:12, padding:'18px 20px', borderBottom:'1px solid #2e323c'}}>
          <span className="material-symbols-outlined" style={{color:'#dce87a'}}>bolt</span>
          <input autoFocus placeholder="Type a command or search…" style={{
            flex:1, background:'transparent', border:'none', outline:'none', color:'#e6e8ec',
            fontFamily:'Inter', fontSize:15
          }}/>
          <kbd style={{padding:'2px 8px', background:'#2e323c', borderRadius:6, fontFamily:'JetBrains Mono', fontSize:11, color:'#9aa1ac'}}>esc</kbd>
        </div>
        <div style={{padding:8}}>
          {items.map(it => (
            <div key={it.label} style={{display:'flex', alignItems:'center', gap:12, padding:'10px 14px',
              borderRadius:10, color:'#e6e8ec', fontFamily:'Inter', fontSize:14, cursor:'pointer'}}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(220,232,122,.06)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <span className="material-symbols-outlined" style={{color:'#dce87a', fontSize:20}}>{it.icon}</span>
              <span style={{flex:1}}>{it.label}</span>
              <kbd style={{padding:'2px 8px', background:'#2e323c', borderRadius:6, fontFamily:'JetBrains Mono', fontSize:10, color:'#9aa1ac'}}>{it.kbd}</kbd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  JutisMark, JutisLockup, StatusPill, PillButton, Card, TokenChip,
  NavRow, Sidebar, Topbar, CommandPalette,
});
