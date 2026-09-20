'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className="scroll-top-btn"
      onClick={scrollUp}
      aria-label="Scroll to top"
      style={{
        position: 'fixed', bottom: '6.5rem', right: '1.4rem', zIndex: 300,
        width: '44px', height: '44px', borderRadius: '10px',
        background: 'linear-gradient(135deg, var(--accent), var(--accent-purple))',
        border: 'none', cursor: 'pointer', color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '18px', fontWeight: 700,
        boxShadow: '0 4px 20px rgba(56,189,248,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.85)',
        transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        pointerEvents: visible ? 'all' : 'none',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.05)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 28px rgba(56,189,248,0.5)' }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(56,189,248,0.35)' }}
    >
      ↑
    </button>
  )
}