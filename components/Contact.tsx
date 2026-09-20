'use client'

import { Code2, GitBranch, Link, Mail, MessageCircle, Send } from 'lucide-react'

const LINKS = [
  { icon: Mail, label: 'Email', href: 'mailto:info.hasher@gmail.com', desc: 'info.hasher@gmail.com' },
  { icon: Link, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashir-mehfooz-a7625231b/', desc: 'Connect with me' },
  { icon: GitBranch, label: 'GitHub', href: 'https://github.com/HashirDS', desc: 'View my projects' },
  { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/923049111104', desc: '+92 304 911 1104' },
  { icon: Code2, label: 'Kaggle', href: 'https://kaggle.com/ashirzaki', desc: 'ML Competitions' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          className="contact-card-inner"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '56px 52px',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '60px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top gradient line */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent), var(--accent-purple), var(--accent-green))',
            }}
          />

          {/* Background glow */}
          <div
            style={{
              position: 'absolute',
              bottom: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(108,92,231,0.06), transparent 70%)',
              pointerEvents: 'none',
            }}
          />

          {/* Left */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                color: 'var(--accent)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Get in touch
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(26px, 3vw, 36px)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}
            >
              Let's work
              <br />
              together
            </h2>
            <p
              style={{
                fontSize: '14px',
                color: 'var(--text2)',
                lineHeight: 1.7,
                marginBottom: '32px',
                maxWidth: '380px',
                fontWeight: 300,
              }}
            >
              Open to data science, AI developer, and consulting roles. Also available for freelance projects.
            </p>
            <a
              href="mailto:info.hasher@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--accent)',
                padding: '13px 26px',
                borderRadius: '4px',
                textDecoration: 'none',
                border: '1px solid var(--accent)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)'
                e.currentTarget.style.color = 'var(--bg)'
              }}
            >
              Send an email <Send size={15} aria-hidden="true" />
            </a>
          </div>

          {/* Right, contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text2)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text2)')}
              >
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid var(--border2)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    flexShrink: 0,
                    transition: 'border-color 0.2s',
                  }}
                >
                  <l.icon size={15} strokeWidth={1.8} aria-hidden="true" />
                </div>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}