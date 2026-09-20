'use client'

import { useEffect, useRef, useState } from 'react'

const TAG_TONES = [
  'var(--accent)',
  'var(--accent-purple)',
  'var(--accent-green)',
  'var(--accent-warm)',
  'var(--accent-pink)',
]

const SKILLS = [
  {
    cat: 'AI & Machine Learning',
    accent: 'rgba(108,92,231,0.12)',
    border: 'rgba(108,92,231,0.25)',
    tags: ['LLMs','Generative AI','RAG Pipelines','Prompt Engineering','Fine-Tuning','NLP','Deep Learning','Machine Learning','Model Evaluation','Hyperparameter Tuning','Sentiment Analysis','Multimodal AI'],
  },
  {
    cat: 'Data Science & Analysis',
    accent: 'rgba(0,198,224,0.08)',
    border: 'rgba(0,198,224,0.2)',
    tags: ['EDA','Statistical Analysis','Data Cleaning','Feature Engineering','Predictive Modelling','Big Data Analytics','SPSS','R','SQL','Tableau','Power BI','Data Visualization'],
  },
  {
    cat: 'Programming & Frameworks',
    accent: 'rgba(56,139,253,0.08)',
    border: 'rgba(56,139,253,0.2)',
    tags: ['Python','SQL','JavaScript','React','Next.js','PyTorch','TensorFlow','Keras','Scikit-learn','Pandas','NumPy','LangChain'],
  },
  {
    cat: 'Backend & APIs',
    accent: 'rgba(255,168,0,0.08)',
    border: 'rgba(255,168,0,0.2)',
    tags: ['FastAPI','Flask','REST APIs','GraphQL','Webhooks','MongoDB','PostgreSQL','Web Scraping','Beautiful Soup','Selenium'],
  },
  {
    cat: 'Infrastructure & DevOps',
    accent: 'rgba(255,100,80,0.08)',
    border: 'rgba(255,100,80,0.2)',
    tags: ['Docker','Git & GitHub','Linux','CI/CD','Azure AI','Cloud Deployment','Docker Compose','Environment Management'],
  },
  {
    cat: 'Data & Big Data',
    accent: 'rgba(0,214,143,0.08)',
    border: 'rgba(0,214,143,0.2)',
    tags: ['Apache Spark','PySpark','Hadoop','Data Pipelines','ETL','Distributed Computing','Real-time Analytics'],
  },
]

function useInView<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setOn(true) },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, on }
}

function WrittenSkill({
  text,
  color,
  delay,
  active,
}: {
  text: string
  color: string
  delay: number
  active: boolean
}) {
  const [shown, setShown] = useState('')
  const [writing, setWriting] = useState(false)

  useEffect(() => {
    if (!active) {
      setShown('')
      setWriting(false)
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(text)
      setWriting(false)
      return
    }

    let tick: ReturnType<typeof setTimeout>
    const start = setTimeout(() => {
      setWriting(true)
      let i = 0
      const step = () => {
        i += 1
        setShown(text.slice(0, i))
        if (i < text.length) tick = setTimeout(step, 26)
        else setWriting(false)
      }
      step()
    }, delay)

    return () => {
      clearTimeout(start)
      clearTimeout(tick)
    }
  }, [active, delay, text])

  return (
    <span
      className="skill-chip"
      style={{
        color,
        background: `color-mix(in srgb, ${color} 12%, var(--tag-bg))`,
        border: `1px solid color-mix(in srgb, ${color} 30%, var(--border))`,
        opacity: active ? 1 : 0,
      }}
    >
      <span className="skill-ghost">{text}</span>
      <span className="skill-live">
        {shown}
        {writing && <span className="skill-caret" aria-hidden="true" />}
      </span>
    </span>
  )
}

function SkillCard({
  cat,
  accent,
  border,
  tags,
}: (typeof SKILLS)[number]) {
  const { ref, on } = useInView<HTMLDivElement>(0.28)

  return (
    <div
      ref={ref}
      className={`skill-card${on ? ' is-live' : ''}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = border
        e.currentTarget.style.transform = 'translateY(-2px)'
        e.currentTarget.style.boxShadow = `0 10px 24px color-mix(in srgb, ${border} 35%, transparent)`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: accent,
          border: `1px solid ${border}`,
          borderRadius: '4px',
          padding: '4px 10px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          fontWeight: 500,
          color: 'var(--text2)',
          letterSpacing: '0.05em',
          marginBottom: '16px',
        }}
      >
        {cat}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
        {tags.map((tag, ti) => (
          <WrittenSkill
            key={tag}
            text={tag}
            color={TAG_TONES[ti % TAG_TONES.length]}
            delay={ti * 210}
            active={on}
          />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          What I know
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
          Skills &{' '}
          <span style={{ color: 'var(--accent-purple)' }}>Expertise</span>
        </h2>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
        >
          {SKILLS.map((s) => (
            <SkillCard key={s.cat} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
