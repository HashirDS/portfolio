'use client'

import { useEffect, useState } from 'react'

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid var(--border)',
        padding: isMobile ? '20px 1.25rem' : '24px 2.5rem',
        maxWidth: '1160px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: isMobile ? '12px' : '0',
        textAlign: isMobile ? 'center' : 'left',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'var(--text3)',
        letterSpacing: '0.05em',
      }}>
        © 2026 Asher Mehfooz. All rights reserved.
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="https://github.com/HashirDS" target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >GitHub</a>
        <span style={{ color: 'var(--border2)' }}>·</span>
        <a href="https://www.linkedin.com/in/ashir-mehfooz-a7625231b/" target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >LinkedIn</a>
        <span style={{ color: 'var(--border2)' }}>·</span>
        <a href="https://kaggle.com/ashirzaki" target="_blank" rel="noreferrer"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >Kaggle</a>
        <span style={{ color: 'var(--border2)' }}>·</span>
        <a href="mailto:info.hasher@gmail.com"
          style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text3)')}
        >Email</a>
      </div>

      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        color: 'var(--text3)',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: '4px',
        padding: '4px 12px',
        letterSpacing: '0.07em',
      }}>
        Built with Next.js + React
      </span>
    </footer>
  )
}