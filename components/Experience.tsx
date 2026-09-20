'use client'

import { useEffect, useRef, useState } from 'react'

const ROLE_TONES = [
  'var(--accent)',
  'var(--accent-purple)',
  'var(--accent-warm)',
  'var(--accent-green)',
]

const ROLES = [
  {
    company: 'Robx.AI',
    role: 'AI Developer & Research Team Head',
    sub: 'LLM Systems, Web Apps and Data Intelligence, Remote, Islamabad, Pakistan',
    date: '11/2025 – Present',
    badge: 'Current',
    badgeBg: 'rgba(52,211,153,0.1)',
    badgeColor: 'var(--accent-green)',
    badgeBorder: 'rgba(52,211,153,0.25)',
    points: [
      'Lead the research and development of production LLM systems, including Pulisint (real-time sentiment analysis from live scraped data) and Humint (social-media intelligence via LLM pipelines and external API integration).',
      'Direct a small research team building teacher-facing AI tools for the I Am Scientist ed-tech platform, covering data pipelines, model integration, and deployment.',
      'Design and implement end-to-end AI architectures from concept through production deployment.',
    ],
  },
  {
    company: 'XactGen',
    role: 'Founder & CEO',
    sub: 'AI and Data Science Consulting, Registered under SCO STP, Kotli, AJK',
    date: '09/2025 – Present',
    badge: 'Founder',
    badgeBg: 'rgba(0,214,143,0.1)',
    badgeColor: 'var(--accent-green)',
    badgeBorder: 'rgba(0,214,143,0.25)',
    points: [
      'Founded and registered an AI and data science consultancy, overseeing business operations from client acquisition to delivery.',
      'Lead end-to-end client engagements covering machine learning, data analysis, dashboard development, and custom AI solutions.',
      'Manage project scoping, technical execution, and delivery timelines across multiple active client projects.',
    ],
  },
  {
    company: 'Datix AI',
    role: 'Lead AI and Data Science Department',
    sub: 'End-to-End Project Delivery, Remote, Kotli, AJK, Pakistan',
    date: '03/2025 – 04/2026',
    badge: 'Leadership',
    badgeBg: 'rgba(255,168,0,0.1)',
    badgeColor: '#FFB347',
    badgeBorder: 'rgba(255,168,0,0.25)',
    points: [
      'Led department operations and end-to-end client delivery, from requirements gathering through deployment of dashboards, AI applications, database integration, and LLM pipelines.',
      'Managed cross-functional teams delivering data science projects across multiple industries and verticals.',
      'Established best practices for AI/ML project delivery and team collaboration.',
    ],
  },
  {
    company: 'Systems Limited',
    role: 'Intern, DevOps and Generative AI',
    sub: 'Islamabad, Pakistan',
    date: '06/2025 – 08/2025',
    badge: 'Internship',
    badgeBg: 'rgba(0,198,224,0.08)',
    badgeColor: 'var(--accent)',
    badgeBorder: 'rgba(0,198,224,0.2)',
    points: [
      'Supported CI/CD pipelines and containerisation (Git, Docker) in a production environment, contributing to DevOps infrastructure.',
      'Contributed to generative-AI chatbot integration using Azure AI services in live production systems.',
      'Worked within Linux-based environments managing deployment and scaling of AI-related solutions.',
    ],
  },
]

export default function Experience() {
  const [on, setOn] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setOn(true) },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={ref}
      className={on ? 'reveal-on' : 'reveal-ready'}
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 0',
      }}
    >
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
          Where I've worked
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '52px',
            lineHeight: 1.1,
          }}
        >
          Work{' '}
          <span style={{ color: 'var(--accent)' }}>Experience</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          <div className="timeline-line" />

          {ROLES.map((r, i) => {
            const tone = ROLE_TONES[i % ROLE_TONES.length]
            return (
            <div
              key={r.company}
              className="reveal-item"
              style={{
                position: 'relative',
                marginBottom: i < ROLES.length - 1 ? '44px' : 0,
                animationDelay: `${i * 160}ms`,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '10px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: tone,
                  border: '2px solid var(--bg)',
                  boxShadow: `0 0 0 3px color-mix(in srgb, ${tone} 22%, transparent)`,
                }}
              />

              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '22px 24px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = tone)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '4px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: tone,
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {r.company}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      padding: '2px 10px',
                      borderRadius: '20px',
                      background: r.badgeBg,
                      color: r.badgeColor,
                      border: `1px solid ${r.badgeBorder}`,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {r.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'var(--text2)',
                    marginBottom: '2px',
                    fontWeight: 400,
                  }}
                >
                  {r.role} · {r.sub}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text3)',
                    letterSpacing: '0.05em',
                    marginBottom: '16px',
                  }}
                >
                  {r.date}
                </div>

                {/* Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {r.points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        fontSize: '13px',
                        color: 'var(--text2)',
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: 'var(--text3)', flexShrink: 0, marginTop: '2px' }}>–</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}