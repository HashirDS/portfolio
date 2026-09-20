'use client'

import { Laptop, Medal, Rocket } from 'lucide-react'

const AWARDS = [
  {
    award: 'Gold Medalist',
    issuer: 'University of Kotli AJK',
    date: '2025',
    description: 'Awarded for the highest academic standing in the graduating cohort with a CGPA of 3.89/4.0',
    icon: Medal,
    color: '#FFD700',
  },
  {
    award: 'Prime Minister\'s Youth Laptop Scheme',
    issuer: 'Government of Pakistan',
    date: '2023',
    description: 'Awarded for high CGPA as a top academic achiever',
    icon: Laptop,
    color: '#38BDF8',
  },
  {
    award: 'Student-Led Startup Founder',
    issuer: 'Software Technology Park (SCO STP)',
    date: '2025',
    description: 'Selected and registered under STP for XactGen, recognized as the university\'s first student-led startup for merit and technical capability',
    icon: Rocket,
    color: '#34D399',
  },
]

export default function Awards() {
  return (
    <section id="awards" style={{ position: 'relative', zIndex: 1, padding: '80px 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Header */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          Recognition
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '48px',
            lineHeight: 1.1,
          }}
        >
          Awards &{' '}
          <span style={{ color: 'var(--accent-pink)' }}>Honors</span>
        </h2>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {AWARDS.map((award) => (
            <div
              key={award.award}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '28px',
                transition: 'all 0.3s',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = award.color
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = `0 16px 40px ${award.color}20`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: award.color,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontSize: '32px',
                  marginBottom: '14px',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                <award.icon size={32} strokeWidth={1.7} color={award.color} aria-hidden="true" />
              </div>

              {/* Award name */}
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '6px',
                  lineHeight: 1.4,
                }}
              >
                {award.award}
              </h3>

              {/* Issuer & Date */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '14px',
                }}
              >
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.05em' }}>
                  {award.issuer}
                </span>
                <span style={{ color: 'var(--border2)' }}>·</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: award.color, letterSpacing: '0.05em', fontWeight: 600 }}>
                  {award.date}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text2)',
                  lineHeight: 1.8,
                  flex: 1,
                }}
              >
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
