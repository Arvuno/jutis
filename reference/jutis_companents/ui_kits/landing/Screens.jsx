// Screens.jsx — Jutis product screens
const { useState: useStateS } = React;

// ── Marketing landing ────────────────────────────────────
function LandingScreen() {
  return (
    <div style={{position:'relative', minHeight:'100%', background:'#1a1d23', color:'#e6e8ec', overflow:'hidden', fontFamily:'Inter'}}>
      {/* backdrop */}
      <div style={{position:'absolute', inset:0, backgroundImage:'radial-gradient(#2e323c 1px, transparent 1px)', backgroundSize:'40px 40px', opacity:.3}}/>
      <div style={{position:'absolute', top:'-10%', right:'-10%', width:600, height:600, background:'rgba(220,232,122,.05)', borderRadius:'50%', filter:'blur(140px)'}}/>
      <div style={{position:'absolute', bottom:'-10%', left:'-10%', width:600, height:600, background:'rgba(255,255,255,.05)', borderRadius:'50%', filter:'blur(140px)'}}/>
      {/* abstract shapes */}
      <div style={{position:'absolute', width:380, height:380, border:'1px solid #2e323c', borderRadius:40, opacity:.2, transform:'rotate(15deg)', top:'-8%', right:'-3%'}}/>
      <div style={{position:'absolute', width:280, height:280, border:'1px solid #dce87a', borderRadius:30, opacity:.1, transform:'rotate(-12deg)', bottom:'12%', left:'4%'}}/>

      {/* top accent bar */}
      <div style={{position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(90deg, transparent, rgba(220,232,122,.4), transparent)'}}/>

      {/* header */}
      <header style={{position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 32px', zIndex:10}}>
        <JutisLockup size={36}/>
        <nav style={{display:'flex', gap:32}}>
          {['Feature','Bridge','Developers','Docs','Security'].map(x => (
            <a key={x} style={{color:'#9aa1ac', fontSize:14, fontWeight:500, cursor:'pointer'}}>{x}</a>
          ))}
        </nav>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <a style={{color:'#9aa1ac', fontSize:14, fontWeight:500, cursor:'pointer'}}>Login</a>
          <PillButton variant="primary">Sign Up</PillButton>
        </div>
      </header>

      {/* hero */}
      <main style={{position:'relative', maxWidth:780, margin:'0 auto', padding:'80px 32px 64px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', zIndex:5}}>
        <div style={{marginBottom:48, animation:'jutisFloat 6s ease-in-out infinite'}}>
          <JutisMark size={96}/>
        </div>
        <div style={{marginBottom:18}}>
          <h1 style={{fontFamily:'Plus Jakarta Sans', fontWeight:800, fontSize:36, letterSpacing:'.25em', margin:0}}>JUTIS</h1>
          <div style={{width:48, height:2, background:'#dce87a', margin:'14px auto 0', borderRadius:1}}/>
        </div>
        <h2 style={{fontFamily:'Plus Jakarta Sans', fontWeight:500, fontSize:48, lineHeight:1.1, letterSpacing:'-.02em', margin:'40px 0 56px', maxWidth:560}}>
          The essence of security,<br/>
          <span style={{color:'#9aa1ac'}}>architected for Canton.</span>
        </h2>
        <PillButton variant="primary" trailingIcon="arrow_outward" glow>
          <span style={{padding:'4px 6px', fontSize:16}}>Open Jutis</span>
        </PillButton>
        <div style={{marginTop:14}}>
          <StatusPill tone="live" pulse>BETA</StatusPill>
        </div>
        <p style={{marginTop:20, color:'#9aa1ac', fontSize:14}}>
          or <a style={{color:'#dce87a', fontWeight:500}}>join the waitlist</a> for early access
        </p>
        <div style={{marginTop:64, display:'flex', alignItems:'center', gap:24, opacity:.4}}>
          <div style={{display:'flex', alignItems:'center', gap:8}}>
            <span style={{width:6, height:6, borderRadius:9999, background:'#dce87a'}}/>
            <span style={{fontSize:10, fontWeight:700, letterSpacing:'.25em', textTransform:'uppercase'}}>Verified Node</span>
          </div>
          <div style={{width:32, height:1, background:'#2e323c'}}/>
          <span style={{fontSize:10, fontWeight:700, letterSpacing:'.25em', textTransform:'uppercase'}}>Encryption Layer 1</span>
        </div>
      </main>
    </div>
  );
}

// ── Dashboard ────────────────────────────────────────────
function DashboardScreen({ onGo }) {
  return (
    <div style={{display:'flex', height:'100%', background:'#1a1d23', color:'#e6e8ec', fontFamily:'Inter'}}>
      <Sidebar active="dashboard" onNav={onGo}/>
      <main style={{flex:1, padding:32, overflowY:'auto'}}>
        <Topbar title="Dashboard" subtitle="Welcome back, John"/>

        {/* Alert */}
        <div style={{marginBottom:24, padding:'14px 18px', background:'rgba(245,158,11,.10)', border:'1px solid rgba(245,158,11,.30)',
          borderRadius:12, display:'flex', alignItems:'center', gap:14}}>
          <span className="material-symbols-outlined" style={{color:'#f59e0b'}}>warning</span>
          <p style={{flex:1, color:'#fcd9a3', fontSize:13, margin:0}}>Your session will expire in 24 minutes. Save your work.</p>
          <button style={{padding:'6px 12px', background:'rgba(245,158,11,.20)', borderRadius:8, color:'#fcd9a3', fontSize:12, fontWeight:500, border:'none', cursor:'pointer'}}>Extend</button>
        </div>

        {/* Balance hero */}
        <Card variant="hero" style={{padding:32, marginBottom:24}}>
          <div style={{position:'absolute', top:0, right:0, width:260, height:260, background:'rgba(220,232,122,.05)', borderRadius:'50%', filter:'blur(80px)', pointerEvents:'none'}}/>
          <div style={{position:'relative'}}>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:8}}>
              <p style={{color:'#9aa1ac', fontSize:13, margin:0}}>Total Balance</p>
              <StatusPill tone="live" pulse>Live · Canton</StatusPill>
            </div>
            <h2 style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:44, letterSpacing:'-.02em', margin:'4px 0 24px'}}>$12,458.32</h2>
            <div style={{display:'flex', alignItems:'center', gap:24}}>
              {[['CANT','8,234.56'],['USDC','2,156.00'],['USD','$4,223.76']].map(([k,v],i)=>(
                <React.Fragment key={k}>
                  {i>0 && <div style={{width:1, height:32, background:'#2e323c'}}/>}
                  <div>
                    <p style={{fontSize:11, color:'#9aa1ac', margin:'0 0 4px', letterSpacing:'.1em', textTransform:'uppercase'}}>{k}</p>
                    <p style={{fontSize:15, fontWeight:600, margin:0}}>{v}</p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Card>

        {/* Quick actions */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginBottom:24}}>
          {[['send','Send'],['call_received','Receive'],['swap_horiz','Swap'],['qr_code','QR Pay']].map(([icon,label])=>(
            <button key={label} style={{padding:18, background:'#232730', border:'1px solid #2e323c', borderRadius:14,
              display:'flex', flexDirection:'column', alignItems:'center', gap:8, cursor:'pointer', color:'#e6e8ec', fontFamily:'Inter'}}>
              <span className="material-symbols-outlined" style={{color:'#dce87a', fontSize:26}}>{icon}</span>
              <span style={{fontSize:13, fontWeight:500}}>{label}</span>
            </button>
          ))}
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:18}}>
          {/* Recent txs */}
          <Card variant="default">
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18}}>
              <h3 style={{fontFamily:'Plus Jakarta Sans', fontWeight:600, fontSize:15, margin:0}}>Recent Transactions</h3>
              <a style={{color:'#dce87a', fontSize:13, cursor:'pointer'}} onClick={()=>onGo?.('history')}>View All</a>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:6}}>
              {[
                ['arrow_upward','Sent CANT','To: 0x1a2b…3c4d','-125.00','danger','2 hours ago'],
                ['arrow_downward','Received CANT','From: 0x5e6f…7g8h','+500.00','success','5 hours ago'],
                ['swap_horiz','Swap USDT → CANT','Rate: 0.023','-1,000 USDT','neutral','Yesterday'],
              ].map(([icon,a,b,amt,tone,when],i)=>{
                const c = tone==='danger'?'#f87171':tone==='success'?'#4ade80':'#e6e8ec';
                return (
                  <div key={i} style={{display:'flex', alignItems:'center', gap:12, padding:'10px 12px', borderRadius:12}}>
                    <div style={{width:36, height:36, borderRadius:9999, background:'rgba(220,232,122,.10)', display:'flex', alignItems:'center', justifyContent:'center'}}>
                      <span className="material-symbols-outlined" style={{color:'#dce87a', fontSize:18}}>{icon}</span>
                    </div>
                    <div style={{flex:1, minWidth:0}}>
                      <p style={{fontSize:13, fontWeight:500, margin:0}}>{a}</p>
                      <p style={{fontSize:11, color:'#9aa1ac', margin:'2px 0 0', fontFamily: b.startsWith('To') || b.startsWith('From')?'JetBrains Mono':'Inter'}}>{b}</p>
                    </div>
                    <div style={{textAlign:'right'}}>
                      <p style={{fontSize:13, fontWeight:600, color:c, margin:0}}>{amt}</p>
                      <p style={{fontSize:10, color:'#9aa1ac', margin:'2px 0 0'}}>{when}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Wallet addresses */}
          <Card variant="default">
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18}}>
              <h3 style={{fontFamily:'Plus Jakarta Sans', fontWeight:600, fontSize:15, margin:0}}>Wallet Addresses</h3>
              <button style={{padding:6, background:'transparent', border:'none', color:'#9aa1ac', cursor:'pointer'}}>
                <span className="material-symbols-outlined" style={{fontSize:18}}>add</span>
              </button>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              {[
                ['Main Wallet','0x1a2b3c4d5e6f…9g0h1i2j', true],
                ['Trading Wallet','0x3c4d5e6f7g8h…1i2j3k', false],
              ].map(([nm, addr, active])=>(
                <div key={nm} style={{padding:14, background:'#1a1d23', borderRadius:12}}>
                  <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:6}}>
                    <span style={{fontSize:13, fontWeight:500}}>{nm}</span>
                    <StatusPill tone={active?'live':'neutral'} dot={active}>{active?'Active':'Inactive'}</StatusPill>
                  </div>
                  <p style={{fontFamily:'JetBrains Mono', fontSize:11, color:'#9aa1ac', margin:'0 0 12px'}}>{addr}</p>
                  <div style={{display:'flex', gap:8}}>
                    <button style={{flex:1, padding:'8px', background:'#2e323c', border:'none', borderRadius:8, color:'#e6e8ec', fontSize:12, fontWeight:500, cursor:'pointer'}}>Copy</button>
                    <button style={{flex:1, padding:'8px', background:'#2e323c', border:'none', borderRadius:8, color:'#e6e8ec', fontSize:12, fontWeight:500, cursor:'pointer'}}>QR</button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

// ── Bridge / Swap ────────────────────────────────────────
function BridgeScreen({ onGo }) {
  const [amount, setAmount] = useStateS('1000');
  const [from, setFrom] = useStateS('CANT');
  const [to, setTo] = useStateS('USDC');
  const rates = { CANT:1, USDC:0.023, WETH:0.00042, WBTC:0.0000085 };
  const result = ((parseFloat(amount)||0) * rates[to] / rates[from]).toFixed(6);

  return (
    <div style={{position:'relative', height:'100%', background:'#0a0b0f', color:'#e6e8ec', fontFamily:'Inter', display:'flex', flexDirection:'column', overflow:'hidden'}}>
      <div style={{position:'absolute', inset:0, backgroundImage:'radial-gradient(#1a1d23 1px, transparent 1px)', backgroundSize:'50px 50px', opacity:.3}}/>
      <div style={{position:'absolute', top:0, right:0, width:500, height:500, background:'rgba(220,232,122,.05)', borderRadius:'50%', filter:'blur(150px)'}}/>
      <div style={{position:'absolute', bottom:0, left:0, width:500, height:500, background:'rgba(74,158,255,.03)', borderRadius:'50%', filter:'blur(150px)'}}/>
      <div style={{height:2, background:'linear-gradient(90deg,transparent,rgba(220,232,122,.4),transparent)'}}/>

      <div style={{position:'relative', flex:1, display:'flex', flexDirection:'column', padding:'18px 28px'}}>
        {/* Header */}
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18}}>
          <div style={{display:'flex', alignItems:'center', gap:18}}>
            <a style={{display:'flex', alignItems:'center', gap:10, cursor:'pointer'}} onClick={()=>onGo?.('dashboard')}>
              <JutisMark size={32}/>
              <span style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, letterSpacing:'.15em', textTransform:'uppercase', fontSize:16}}>JUTIS</span>
            </a>
            <span style={{color:'#2e323c'}}>|</span>
            <h1 style={{fontFamily:'Plus Jakarta Sans', fontWeight:600, fontSize:18, margin:0}}>
              <span style={{color:'#9aa1ac'}}>Canton</span> <span style={{color:'#dce87a'}}>Bridge</span>
            </h1>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <StatusPill tone="live" pulse>Live</StatusPill>
            <div style={{display:'flex', alignItems:'center', gap:8, padding:'7px 12px', background:'#232730', border:'1px solid #2e323c', borderRadius:10}}>
              <div style={{width:24, height:24, borderRadius:9999, background:'rgba(220,232,122,.2)', color:'#dce87a', display:'flex', alignItems:'center', justifyContent:'center', fontSize:10, fontWeight:700, fontFamily:'Plus Jakarta Sans'}}>JD</div>
              <span style={{fontSize:11, color:'#9aa1ac', fontFamily:'JetBrains Mono'}}>0x1a2b…3c4d</span>
            </div>
          </div>
        </div>

        {/* Body grid */}
        <div style={{flex:1, display:'grid', gridTemplateColumns:'2fr 1fr', gap:16, minHeight:0}}>
          <Card variant="cyber" style={{padding:24, display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', top:0, left:'50%', transform:'translateX(-50%)', width:'50%', height:80, background:'rgba(220,232,122,.10)', borderRadius:9999, filter:'blur(40px)', pointerEvents:'none'}}/>

            {/* From */}
            <TokenRow label="You Pay" balance="8,234.56" balColor="#dce87a" symbol={from} amount={amount} onAmount={setAmount} onTokenChange={setFrom}/>

            {/* Swap */}
            <div style={{position:'relative', height:0, display:'flex', justifyContent:'center', zIndex:2, margin:'-8px 0'}}>
              <button onClick={()=>{ setFrom(to); setTo(from); }}
                style={{width:48, height:48, background:'#181a21', border:'2px solid rgba(220,232,122,.3)', borderRadius:9999,
                  display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', color:'#dce87a',
                  transition:'transform .4s cubic-bezier(.34,1.56,.64,1)'}}
                onMouseEnter={e=>e.currentTarget.style.transform='rotate(180deg)'}
                onMouseLeave={e=>e.currentTarget.style.transform='rotate(0deg)'}>
                <span className="material-symbols-outlined">swap_vert</span>
              </button>
            </div>

            {/* To */}
            <TokenRow label="You Receive" balance="2,156.00" balColor="#4a9eff" symbol={to} amount={result} readOnly onTokenChange={setTo}/>

            {/* Details */}
            <div style={{marginTop:16, padding:14, background:'rgba(10,11,15,.4)', borderRadius:12, display:'flex', flexDirection:'column', gap:8}}>
              {[
                ['Rate', `1 ${from} = ${(rates[to]/rates[from]).toFixed(6)} ${to}`, '#e6e8ec'],
                ['Fee (0.1%)', `~0.001 ${from}`, '#e6e8ec'],
                ['Time', '~3 sec', '#dce87a'],
              ].map(([k,v,c])=>(
                <div key={k} style={{display:'flex', justifyContent:'space-between', fontSize:12}}>
                  <span style={{color:'#9aa1ac'}}>{k}</span>
                  <span style={{color:c, fontWeight:500, fontFamily:k==='Rate'?'JetBrains Mono':'Inter'}}>{v}</span>
                </div>
              ))}
            </div>

            <div style={{marginTop:16}}>
              <PillButton variant="grad" icon="bolt" glow>
                <span style={{padding:'2px 12px', fontSize:15}}>Swap Now</span>
              </PillButton>
            </div>
          </Card>

          {/* Activity */}
          <Card variant="cyber" style={{padding:0, display:'flex', flexDirection:'column', overflow:'hidden'}}>
            <div style={{padding:16, borderBottom:'1px solid rgba(46,50,60,.5)', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <h3 style={{fontFamily:'Plus Jakarta Sans', fontWeight:600, fontSize:13, margin:0}}>Recent Activity</h3>
              <span style={{color:'#dce87a', fontSize:11, cursor:'pointer'}}>View All</span>
            </div>
            <div style={{flex:1, overflowY:'auto'}}>
              {[
                ['CANT → USDC','-10,000 CANT','+$230.5','#dce87a','swap_horiz','2m ago','success'],
                ['WETH → CANT','-2.5 WETH','+$1,450','#627eea','swap_horiz','1h ago','success'],
                ['WBTC → USDC','-0.05 WBTC','+$1,200','#f7931a','swap_horiz','3h ago','success'],
                ['CANT → USDC','-500 CANT','Pending','#dce87a','schedule','5m ago','info'],
              ].map((r,i)=>(
                <div key={i} style={{padding:12, borderBottom:'1px solid rgba(46,50,60,.3)', display:'flex', alignItems:'center', gap:10}}>
                  <div style={{width:30, height:30, borderRadius:8, background:`${r[3]}1a`, display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <span className="material-symbols-outlined" style={{color:r[3], fontSize:16}}>{r[4]}</span>
                  </div>
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <p style={{fontSize:11, fontWeight:500, margin:0}}>{r[0]}</p>
                      <p style={{fontSize:11, color: r[6]==='success'?'#4ade80':'#4a9eff', fontWeight:500, margin:0}}>{r[2]}</p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                      <p style={{fontSize:10, color:'#9aa1ac', margin:'2px 0 0', fontFamily:'JetBrains Mono'}}>{r[1]}</p>
                      <p style={{fontSize:10, color:'#9aa1ac', margin:'2px 0 0'}}>{r[5]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{padding:14, borderTop:'1px solid rgba(46,50,60,.5)', background:'rgba(15,16,21,.5)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, textAlign:'center'}}>
              <div>
                <p style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:14, color:'#dce87a', margin:0}}>$48.2M</p>
                <p style={{fontSize:10, color:'#9aa1ac', margin:'2px 0 0'}}>Volume 24h</p>
              </div>
              <div>
                <p style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:14, color:'#dce87a', margin:0}}>12.8K</p>
                <p style={{fontSize:10, color:'#9aa1ac', margin:'2px 0 0'}}>Swaps 24h</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function TokenRow({ label, balance, balColor, symbol, amount, onAmount, onTokenChange, readOnly }) {
  return (
    <div style={{marginBottom:8}}>
      <div style={{display:'flex', justifyContent:'space-between', marginBottom:6}}>
        <span style={{fontSize:11, color:'#9aa1ac'}}>{label}</span>
        <span style={{fontSize:11, color:'#9aa1ac'}}>Bal: <span style={{color:balColor}}>{balance}</span></span>
      </div>
      <div style={{display:'flex', alignItems:'center', gap:12, padding:14, background:'rgba(10,11,15,.5)', border:'1px solid rgba(46,50,60,.5)', borderRadius:12}}>
        <button onClick={()=>{
          const opts=['CANT','USDC','WETH','WBTC'];
          const next = opts[(opts.indexOf(symbol)+1)%opts.length];
          onTokenChange?.(next);
        }} style={{display:'flex', alignItems:'center', gap:8, padding:'7px 10px', background:'#1a1d23', border:'1px solid #2e323c', borderRadius:10, cursor:'pointer', color:'#e6e8ec'}}>
          <TokenChip symbol={symbol} size={28}/>
          <span style={{fontFamily:'Plus Jakarta Sans', fontWeight:600, fontSize:14}}>{symbol}</span>
          <span className="material-symbols-outlined" style={{color:'#9aa1ac', fontSize:16}}>expand_more</span>
        </button>
        <input
          type="text"
          value={amount}
          readOnly={readOnly}
          onChange={e=>onAmount?.(e.target.value)}
          style={{flex:1, textAlign:'right', fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:26, background:'transparent', border:'none', outline:'none', color:'#e6e8ec'}}
        />
      </div>
    </div>
  );
}

// ── Login ───────────────────────────────────────────────
function LoginScreen({ onGo }) {
  return (
    <div style={{position:'relative', height:'100%', background:'#1a1d23', color:'#e6e8ec', fontFamily:'Inter', overflow:'hidden', display:'flex', flexDirection:'column'}}>
      <div style={{position:'absolute', inset:0, backgroundImage:'radial-gradient(#2e323c 1px, transparent 1px)', backgroundSize:'40px 40px', opacity:.3}}/>
      <div style={{position:'absolute', top:'-10%', right:'-10%', width:600, height:600, background:'rgba(220,232,122,.05)', borderRadius:'50%', filter:'blur(140px)'}}/>
      <div style={{position:'absolute', bottom:'-10%', left:'-10%', width:600, height:600, background:'rgba(255,255,255,.05)', borderRadius:'50%', filter:'blur(140px)'}}/>

      <header style={{position:'relative', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'18px 32px', zIndex:10}}>
        <a style={{cursor:'pointer'}} onClick={()=>onGo?.('landing')}><JutisLockup size={36}/></a>
        <div style={{display:'flex', alignItems:'center', gap:14}}>
          <a style={{color:'#dce87a', fontSize:14, fontWeight:500, cursor:'pointer'}}>Login</a>
          <PillButton variant="primary">Sign Up</PillButton>
        </div>
      </header>

      <main style={{position:'relative', flex:1, display:'flex', alignItems:'center', justifyContent:'center', padding:32, zIndex:5}}>
        <div style={{width:'100%', maxWidth:420}}>
          <div style={{textAlign:'center', marginBottom:28}}>
            <h1 style={{fontFamily:'Plus Jakarta Sans', fontWeight:700, fontSize:28, letterSpacing:'-.01em', margin:'0 0 8px'}}>Welcome Back</h1>
            <p style={{color:'#9aa1ac', fontSize:14, margin:0}}>Sign in to your Jutis wallet</p>
          </div>
          <Card variant="default" style={{padding:28}}>
            <div style={{marginBottom:18}}>
              <label style={{display:'block', fontSize:13, fontWeight:500, marginBottom:8}}>Email</label>
              <input placeholder="you@example.com" style={inputStyle}/>
            </div>
            <div style={{marginBottom:14}}>
              <label style={{display:'block', fontSize:13, fontWeight:500, marginBottom:8}}>Password</label>
              <input type="password" placeholder="Enter your password" style={inputStyle}/>
            </div>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', fontSize:13, marginBottom:20}}>
              <label style={{display:'flex', alignItems:'center', gap:8, cursor:'pointer', color:'#9aa1ac'}}>
                <input type="checkbox" defaultChecked style={{accentColor:'#dce87a'}}/> Remember me
              </label>
              <a style={{color:'#dce87a', cursor:'pointer'}}>Forgot password?</a>
            </div>
            <button onClick={()=>onGo?.('dashboard')} style={{width:'100%', padding:14, background:'#dce87a', color:'#1a1d23', border:'none', borderRadius:12, fontFamily:'Inter', fontWeight:700, fontSize:15, cursor:'pointer'}}>Sign In</button>
            <div style={{position:'relative', display:'flex', alignItems:'center', justifyContent:'center', margin:'20px 0'}}>
              <div style={{flex:1, height:1, background:'#2e323c'}}/>
              <span style={{padding:'0 14px', color:'#9aa1ac', fontSize:12}}>or continue with</span>
              <div style={{flex:1, height:1, background:'#2e323c'}}/>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:12}}>
              <button style={socialBtn}><span style={{fontSize:13, fontWeight:500}}>Google</span></button>
              <button style={socialBtn}><span style={{fontSize:13, fontWeight:500}}>GitHub</span></button>
            </div>
          </Card>
          <p style={{textAlign:'center', marginTop:20, fontSize:13, color:'#9aa1ac'}}>
            Don't have an account? <a style={{color:'#dce87a', fontWeight:500, cursor:'pointer'}}>Sign up</a>
          </p>
        </div>
      </main>
    </div>
  );
}

const inputStyle = {
  width:'100%', padding:'12px 14px', background:'#1a1d23', border:'1px solid #2e323c', borderRadius:12,
  color:'#e6e8ec', fontFamily:'Inter', fontSize:14, outline:'none', boxSizing:'border-box'
};
const socialBtn = {
  display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'12px',
  border:'1px solid #2e323c', background:'transparent', borderRadius:12, color:'#e6e8ec', cursor:'pointer'
};

Object.assign(window, { LandingScreen, DashboardScreen, BridgeScreen, LoginScreen, TokenRow });
