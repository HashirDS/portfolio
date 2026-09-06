'use client'

import { useEffect, useState } from 'react'
import { Medal } from 'lucide-react'

const STATS = [
  { num: '4+', label: 'Years Experience' },
  { num: '20+',  label: 'Projects Delivered' },
  { num: 'medal',  label: 'Gold Medalist' },
  { num: '13+', label: 'Certifications' },
]

export default function Stats() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 2.5rem 80px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
        gap: '1px', background: 'var(--border)',
        border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden',
      }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--card-bg)', padding: '28px 24px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent), var(--accent-purple))' }} />
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '6px' }}>
              {s.num === 'medal' ? <Medal size={isMobile ? 28 : 36} strokeWidth={1.7} aria-label="Gold medal" /> : s.num}
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}