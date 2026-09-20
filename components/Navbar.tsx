'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => {
      setIsMobile(window.innerWidth < 1000)
      if (window.innerWidth >= 1000) setMenuOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    onResize()
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Awards', href: '#awards' },
    { label: 'Certifications', href: '#certifications' },
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: '64px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', padding: '0 1.5rem',
        background: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)',
        backdropFilter: 'blur(20px)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.25)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '8px',
            background: 'linear-gradient(135deg, var(--accent), var(--accent-purple))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700,
            color: '#fff', flexShrink: 0,
            boxShadow: '0 0 14px rgba(56,189,248,0.3)',
          }}>AM</div>
          <div>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>Asher Mehfooz</div>
            {!isMobile && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text3)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>AI Developer</div>}
          </div>
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map(link => (
              <a key={link.label} href={link.href} className="nav-link" style={{
                fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 500,
                color: 'var(--text2)', textDecoration: 'none', transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >{link.label}</a>
            ))}
            <button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} style={{
              width: '34px', height: '34px', borderRadius: '8px',
              border: '1px solid var(--border2)', background: 'var(--surface)',
              cursor: 'pointer', fontSize: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', color: 'var(--text2)',
            }}>
              {theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>
            <a href="#contact" style={{
              fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600,
              background: 'linear-gradient(135deg, var(--accent), var(--accent-purple))',
              color: '#fff', padding: '9px 22px', borderRadius: '8px',
              textDecoration: 'none', boxShadow: '0 0 18px rgba(56,189,248,0.25)',
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 28px rgba(56,189,248,0.45)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 18px rgba(56,189,248,0.25)' }}
            >Contact <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        )}

        {/* Mobile right side */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button onClick={toggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} style={{
              width: '34px', height: '34px', borderRadius: '8px',
              border: '1px solid var(--border2)', background: 'var(--surface)',
              cursor: 'pointer', fontSize: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{theme === 'dark' ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} style={{
              width: '34px', height: '34px', borderRadius: '8px',
              border: '1px solid var(--border2)', background: 'var(--surface)',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '8px',
            }}>
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        )}
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && (
        <div style={{
          position: 'fixed', top: '64px', left: 0, right: 0, zIndex: 199,
          background: 'var(--nav-bg)', borderBottom: '1px solid var(--nav-border)',
          backdropFilter: 'blur(20px)',
          maxHeight: menuOpen ? '320px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s cubic-bezier(0.16,1,0.3,1)',
        }}>
          <div style={{ padding: '16px 1.5rem 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {links.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-sans)', fontSize: '15px', fontWeight: 500,
                  color: 'var(--text2)', textDecoration: 'none',
                  padding: '12px 0', borderBottom: '1px solid var(--border)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} style={{
              marginTop: '12px', padding: '13px', borderRadius: '8px', textAlign: 'center',
              background: 'linear-gradient(135deg, var(--accent), var(--accent-purple))',
              color: '#fff', fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600,
              textDecoration: 'none',
            }}>Contact <ArrowRight size={15} aria-hidden="true" /></a>
          </div>
        </div>
      )}
    </>
  )
}