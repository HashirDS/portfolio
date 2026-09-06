'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, Code2, Download, ExternalLink, GitBranch, Link, Mail, Medal, MessageCircle } from 'lucide-react'

const ROLES = ['AI Developer','Data Scientist','LLM Engineer','RAG Systems Builder','ML Engineer','Founder @ XactGen','Research-Focused']

export default function Hero() {
  const [displayed, setDisplayed] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let t: ReturnType<typeof setTimeout>
    if (!deleting) {
      if (charIndex < current.length) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex + 1)); setCharIndex(c => c + 1) }, 65)
      } else { t = setTimeout(() => setDeleting(true), 1800) }
    } else {
      if (charIndex > 0) {
        t = setTimeout(() => { setDisplayed(current.slice(0, charIndex - 1)); setCharIndex(c => c - 1) }, 38)
      } else { setDeleting(false); setRoleIndex(i => (i + 1) % ROLES.length) }
    }
    return () => clearTimeout(t)
  }, [charIndex, deleting, roleIndex])

  const PhotoCard = ({ small = false }) => (
    <div style={{ position: 'relative', width: small ? '160px' : '220px' }}>
      <div style={{
        width: small ? '160px' : '220px',
        height: small ? '200px' : '280px',
        borderRadius: '10px',
        background: 'var(--surface)',
        border: '2px solid var(--border2)',
        overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
      }}>
        <img className="hero-portrait" src="/pic1.jpeg" alt="Asher Mehfooz in a formal suit" />
      </div>

      {/* Corner brackets, desktop only */}
      {!small && [
        { top:'-4px', left:'-4px', borderWidth:'2px 0 0 2px', borderRadius:'4px 0 0 0' },
        { top:'-4px', right:'-4px', borderWidth:'2px 2px 0 0', borderRadius:'0 4px 0 0' },
        { bottom:'-4px', left:'-4px', borderWidth:'0 0 2px 2px', borderRadius:'0 0 0 4px' },
        { bottom:'-4px', right:'-4px', borderWidth:'0 2px 2px 0', borderRadius:'0 0 4px 0' },
      ].map((corner, i) => (
        <div key={i} style={{ position:'absolute', width:'16px', height:'16px', borderColor:'var(--accent)', borderStyle:'solid', opacity:0.5, ...corner }} />
      ))}

      {/* Name card */}
      <div style={{ marginTop:'10px', background:'var(--card-bg)', border:'1px solid var(--border)', borderRadius:'8px', padding: small ? '10px 12px' : '12px 14px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, var(--accent), var(--accent-purple))' }} />
        <div style={{ fontFamily:'var(--font-sans)', fontSize: small?'12px':'13px', fontWeight:600, color:'var(--text)', marginBottom:'2px' }}>Asher Mehfooz</div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize: small?'9px':'10px', color:'var(--text3)', letterSpacing:'0.04em' }}>AI Developer & Data Scientist</div>
        <div style={{ fontFamily:'var(--font-mono)', fontSize: small?'9px':'10px', color:'var(--accent-green)', marginTop:'5px', display:'flex', alignItems:'center', gap:'4px' }}>
          <span className="status-dot" style={{ width:'5px', height:'5px', borderRadius:'50%', background:'var(--accent-green)', display:'inline-block' }} />
          Available for work
        </div>
      </div>

      {/* Floating tags, desktop only */}
      {!small && <>
        <div className="float-2 hero-medal-tag">
          <Medal size={16} strokeWidth={1.8} aria-hidden="true" />
          Gold Medal
        </div>
        <div className="float-1 hero-photo-secondary">
          <img src="/pic2.jpeg" alt="Asher Mehfooz outdoors" />
          <span>Beyond the build</span>
        </div>
      </>}
    </div>
  )

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">

        {/* MOBILE PHOTO, shown only on mobile via CSS */}
        <div className="hero-photo-mobile">
          <PhotoCard small={true} />
        </div>

        {/* ── LEFT TEXT ── */}
        <div>
          <div className="fade-up fade-up-1" style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'20px' }}>
            <span className="status-dot" style={{ width:'6px', height:'6px', borderRadius:'50%', background:'var(--accent-green)', flexShrink:0 }} />
            <span style={{ fontFamily:'var(--font-mono)', fontSize:'11px', color:'var(--text3)', letterSpacing:'0.14em', textTransform:'uppercase' }}>
              Available for new projects
            </span>
          </div>

          <h1 className="fade-up fade-up-2" style={{ fontSize:'clamp(30px, 5vw, 54px)', fontWeight:700, lineHeight:1.08, letterSpacing:'-0.025em', color:'var(--text)', marginBottom:'14px' }}>
            Hello, I'm<br />
            <span className="grad-text">Asher Mehfooz</span>
          </h1>

          <div className="fade-up fade-up-3" style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'24px', height:'32px' }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:'12px', color:'var(--text3)', letterSpacing:'0.06em' }}>I build <ArrowDown size={13} aria-hidden="true" /></span>
            <span style={{ fontFamily:'var(--font-sans)', fontSize:'clamp(15px, 2.5vw, 18px)', fontWeight:700, color:'var(--accent-purple)', letterSpacing:'-0.02em' }}>{displayed}</span>
            <span className="cursor" />
          </div>

          <div className="fade-up fade-up-3" style={{ marginBottom:'28px' }}>
            <p style={{ fontSize:'clamp(13px, 1.5vw, 15px)', color:'var(--text2)', lineHeight:1.85, fontWeight:300, textAlign:'justify' }}>
              AI developer and data scientist, gold medalist in BS Data Science{' '}
              <strong style={{ color:'var(--text)', fontWeight:600 }}>(CGPA 3.89/4.0)</strong>{' '}
              building production LLM systems, RAG applications, intelligent tutoring tools, and data products. I lead AI research at{' '}
              <strong style={{ color:'var(--text)', fontWeight:600 }}>Robx.AI</strong>{' '}
              and run <strong style={{ color:'var(--text)', fontWeight:600 }}>XactGen</strong>, an AI and data science consultancy. My work spans research, model development, API integration, deployment, and technical leadership, with a published thesis on multimodal AI for early childhood education.
            </p>
          </div>

          {/* CTAs */}
          <div className="fade-up fade-up-4 hero-cta-group">
            <a href="#projects" style={{ fontFamily:'var(--font-mono)', fontSize:'12px', fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--bg)', background:'var(--accent)', padding:'12px 24px', borderRadius:'4px', textDecoration:'none', border:'1px solid var(--accent)', transition:'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='transparent'; (e.currentTarget as HTMLElement).style.color='var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='var(--accent)'; (e.currentTarget as HTMLElement).style.color='var(--bg)' }}
            >View Projects <ArrowDown size={15} aria-hidden="true" /></a>
            <a href="/Asher-Mehfooz-CV.pdf" download style={{ fontFamily:'var(--font-mono)', fontSize:'12px', fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--text2)', background:'transparent', padding:'12px 24px', borderRadius:'4px', textDecoration:'none', border:'1px solid var(--border2)', transition:'all 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--accent)'; (e.currentTarget as HTMLElement).style.color='var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor='var(--border2)'; (e.currentTarget as HTMLElement).style.color='var(--text2)' }}
            >Download CV <Download size={15} aria-hidden="true" /></a>
          </div>

          {/* Socials */}
          <div className="fade-up fade-up-5 hero-social-grid">
            {[
              { label:'Kaggle', icon:Code2, href:'https://kaggle.com/ashirzaki', ext:true },
              { label:'LinkedIn', icon:Link, href:'https://www.linkedin.com/in/ashir-mehfooz-a7625231b/', ext:false },
              { label:'GitHub', icon:GitBranch, href:'https://github.com/HashirDS', ext:false },
              { label:'Email', icon:Mail, href:'mailto:info.hasher@gmail.com', ext:false },
              { label:'WhatsApp', icon:MessageCircle, href:'https://wa.me/923049111104', ext:true },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.ext?'_blank':undefined} rel="noreferrer"
                style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'4px', padding:'14px 6px', background:'var(--card-bg)', textDecoration:'none', position:'relative', transition:'background 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background='var(--surface2)'; const l=(e.currentTarget as HTMLElement).querySelector('.stl') as HTMLElement; if(l) l.style.opacity='1' }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background='var(--card-bg)'; const l=(e.currentTarget as HTMLElement).querySelector('.stl') as HTMLElement; if(l) l.style.opacity='0' }}
              >
                <div className="stl" style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg,var(--accent),var(--accent-purple))', opacity:0, transition:'opacity 0.2s' }} />
                <s.icon size={16} strokeWidth={1.8} color="var(--text)" aria-hidden="true" />
                {s.ext && <ExternalLink size={10} color="var(--text3)" aria-hidden="true" />}
                <span style={{ fontFamily:'var(--font-mono)', fontSize:'9px', color:'var(--text3)', letterSpacing:'0.08em', textTransform:'uppercase' }}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP PHOTO, hidden on mobile via CSS */}
        <div className="hero-photo-desktop" style={{ position:'relative', justifyContent:'center', alignItems:'flex-start', paddingTop:'8px' }}>
          <div className="ring-animate" style={{ position:'absolute', inset:'-10px', borderRadius:'14px', border:'1px solid var(--accent)', pointerEvents:'none' }} />
          <div className="ring-animate-2" style={{ position:'absolute', inset:'-22px', borderRadius:'18px', border:'1px solid var(--accent-purple)', pointerEvents:'none' }} />
          <PhotoCard small={false} />
        </div>

      </div>
    </section>
  )
}