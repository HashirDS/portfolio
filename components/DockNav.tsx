'use client'

import { useEffect, useState } from 'react'
import {
  Briefcase,
  FlaskConical,
  House,
  MessageCircle,
  Moon,
  Sparkles,
  Sun,
  Trophy,
  Wrench,
} from 'lucide-react'
import { useTheme } from '@/hooks/useTheme'

const ITEMS = [
  { id: 'home', label: 'Home', href: '#home', Icon: House },
  { id: 'research', label: 'Research', href: '#research', Icon: FlaskConical },
  { id: 'projects', label: 'Projects', href: '#projects', Icon: Briefcase },
  { id: 'experience', label: 'Experience', href: '#experience', Icon: Wrench },
  { id: 'skills', label: 'Skills', href: '#skills', Icon: Sparkles },
  { id: 'awards', label: 'Awards', href: '#awards', Icon: Trophy },
  { id: 'contact', label: 'Contact', href: '#contact', Icon: MessageCircle },
] as const

const SECTION_IDS = ['home', 'research', 'skills', 'experience', 'projects', 'awards', 'certifications', 'contact']

export default function DockNav() {
  const { theme, toggle } = useTheme()
  const [active, setActive] = useState('home')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const show = window.setTimeout(() => setVisible(true), 400)

    const observers: IntersectionObserver[] = []
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id === 'certifications' ? 'awards' : id)
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0.08 },
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      window.clearTimeout(show)
      observers.forEach((o) => o.disconnect())
    }
  }, [])

  return (
    <nav
      className="site-dock"
      aria-label="Quick navigation"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(18px)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {ITEMS.map(({ id, label, href, Icon }) => {
        const isActive = active === id
        return (
          <a
            key={id}
            href={href}
            className={`site-dock-item${isActive ? ' is-active' : ''}`}
            aria-label={label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="site-dock-tip">{label}</span>
            <span className="site-dock-icon">
              <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
            </span>
          </a>
        )
      })}

      <span className="site-dock-divider" aria-hidden="true" />

      <button
        type="button"
        className="site-dock-item"
        onClick={toggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        <span className="site-dock-tip">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
        <span className="site-dock-icon">
          {theme === 'dark' ? <Sun size={18} strokeWidth={1.75} aria-hidden="true" /> : <Moon size={18} strokeWidth={1.75} aria-hidden="true" />}
        </span>
      </button>
    </nav>
  )
}
