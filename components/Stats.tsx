'use client'

import { useEffect, useRef, useState } from 'react'
import { Medal } from 'lucide-react'

const STATS = [
  { value: 2, suffix: '+', label: 'Years Experience', color: 'var(--accent)' },
  { value: 20, suffix: '+', label: 'Projects Delivered', color: 'var(--accent-purple)' },
  { value: null, suffix: '', label: 'Gold Medalist', color: 'var(--accent-warm)' },
  { value: 13, suffix: '+', label: 'Certifications', color: 'var(--accent-green)' },
] as const

function useCountUp(target: number | null, active: boolean, duration = 1100) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (target === null) return
    if (!active) {
      setN(0)
      return
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }

    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setN(Math.round(target * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return n
}

function StatValue({
  value,
  suffix,
  color,
  active,
  isMobile,
}: {
  value: number | null
  suffix: string
  color: string
  active: boolean
  isMobile: boolean
}) {
  const counted = useCountUp(value, active)

  if (value === null) {
    return (
      <Medal
        size={isMobile ? 28 : 36}
        strokeWidth={1.7}
        color={color}
        aria-label="Gold medal"
      />
    )
  }

  return (
    <>
      {counted}
      {suffix}
    </>
  )
}

export default function Stats() {
  const [isMobile, setIsMobile] = useState(false)
  const [active, setActive] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 600)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true)
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div style={{ position: 'relative', zIndex: 1, maxWidth: '1160px', margin: '0 auto', padding: '0 2.5rem 80px' }}>
      <div
        ref={wrapRef}
        className={`stats-appear${active ? ' is-on' : ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
          gap: '1px',
          background: 'var(--border)',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className="stat-cell"
            style={{
              background: 'var(--card-bg)',
              padding: '28px 24px',
              position: 'relative',
              animationDelay: `${i * 160}ms`,
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: s.color,
              }}
            />
            <div
              className="stat-num"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: 700,
                color: s.color,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                marginBottom: '6px',
              }}
            >
              <StatValue
                value={s.value}
                suffix={s.suffix}
                color={s.color}
                active={active}
                isMobile={isMobile}
              />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--text3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
