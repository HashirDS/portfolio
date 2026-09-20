'use client'

import { useState } from 'react'
import ProjectMockup, { type MockupKind } from '@/components/ProjectMockup'

type Project = {
  name: string
  origin: string
  cat: 'AI/LLM' | 'ML' | 'Data' | 'Product'
  featured: boolean
  desc: string
  stack: string[]
  link: string
  mockup: MockupKind
}

const PROJECTS: Project[] = [
  {
    name: 'Smart Animated Tutor for Kids',
    origin: 'Thesis, University of Kotli AJK',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Multimodal tutoring system for children aged 3–6 with a fine-tuned LLM, speech, and a 3D avatar. Includes a teacher dashboard for personalised lessons across learning domains.',
    stack: ['Python', 'GenAI', 'LLM Fine-tuning', '3D Animation', 'React', 'TTS'],
    link: 'https://fyp-2-git-main-hashirs-projects-a6498d88.vercel.app/',
    mockup: 'tutor',
  },
  {
    name: 'I Am Scientist — Teacher AI Tools',
    origin: 'Robx.AI, Research Team',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Teacher-facing AI tools for the I Am Scientist ed-tech platform, covering data pipelines, model integration, and deployment. Built with a research team at Robx.AI to help teachers plan, track, and support classroom learning.',
    stack: ['LLMs', 'Data Pipelines', 'EdTech', 'Python', 'Model Integration'],
    link: '#',
    mockup: 'scientist',
  },
  {
    name: 'IELTS Official Training',
    origin: 'Professional, EdTech',
    cat: 'AI/LLM',
    featured: true,
    desc: 'AI-supported IELTS training platform for official exam practice. Covers speaking, writing, and feedback so learners can train in a structured, exam-ready way.',
    stack: ['LLMs', 'Speech', 'NLP', 'Feedback Engine', 'React'],
    link: '#',
    mockup: 'ielts',
  },
  {
    name: 'Pulisint',
    origin: 'Robx.AI, Professional',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Live sentiment platform that scrapes online sources and runs them through an LLM pipeline. Shows structured insights on a real-time dashboard.',
    stack: ['LLMs', 'Web Scraping', 'NLP', 'Python', 'Realtime Dashboard'],
    link: '#',
    mockup: 'pulisint',
  },
  {
    name: 'Humint',
    origin: 'Robx.AI, Professional',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Social media intelligence tool that collects public profile data across platforms. Processes it with LLMs and returns structured analysis through API integration.',
    stack: ['Web Scraping', 'LLMs', 'APIs', 'OSINT', 'Nadara'],
    link: '#',
    mockup: 'humint',
  },
  {
    name: 'CyberPulse (MilGPT)',
    origin: 'MilGPT, Defence Systems',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Secure-network LLM system trained for army operational work. Built as a complete domain-specific model for military use.',
    stack: ['Domain LLM', 'Secure Networks', 'NLP', 'Python', 'Ops Dashboard'],
    link: 'https://cyberpulse.milgpt.com',
    mockup: 'cyberpulse',
  },
  {
    name: 'RocketForce',
    origin: 'MilGPT, Client Delivery',
    cat: 'AI/LLM',
    featured: true,
    desc: 'AI automation and analytics platform for army and client delivery. Covers LLM pipelines, data processing, and a web dashboard.',
    stack: ['LLM Pipelines', 'Analytics', 'Automation', 'Dashboard', 'Python'],
    link: 'https://rocketforce.milgpt.com',
    mockup: 'rocketforce',
  },
  {
    name: 'INSPAL',
    origin: 'Professional, Client Delivery',
    cat: 'Product',
    featured: true,
    desc: 'Digital inspection and evaluation system for inspection workflows, scoring, and reports. Replaces manual inspection work with scheduling, observations, and role-based access.',
    stack: ['Workflows', 'Role-based Access', 'Reporting', 'React', 'PostgreSQL'],
    link: '#',
    mockup: 'inspal',
  },
  {
    name: 'Text Keyboard LLM',
    origin: 'Professional Project',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Fine-tuned LLM that makes a text keyboard app smarter. Improves next-word prediction and writing suggestions on device.',
    stack: ['LLM Fine-tuning', 'On-device ML', 'NLP', 'Mobile'],
    link: '#',
    mockup: 'keyboard',
  },
  {
    name: 'LocalGov',
    origin: 'Professional, Civic Tech',
    cat: 'Data',
    featured: false,
    desc: 'AI system for local government data, reporting, and records. End-to-end delivery with database design and LLM-powered reports.',
    stack: ['LLMs', 'Database Design', 'Reporting', 'SQL', 'Civic Data'],
    link: '#',
    mockup: 'localgov',
  },
  {
    name: 'GoFlix',
    origin: 'USA Client Project',
    cat: 'Product',
    featured: true,
    desc: 'Netflix-style movie streaming platform built for a USA client. Users can browse, watch, and manage titles through a full entertainment web app.',
    stack: ['Next.js', 'Streaming', 'React', 'APIs', 'Media'],
    link: '#',
    mockup: 'goflix',
  },
  {
    name: 'PENTEST Tool',
    origin: 'Professional, Security',
    cat: 'Product',
    featured: false,
    desc: 'Cybersecurity assessment scanner that reviews a website end to end: weak points, exposure, subdomains, TCP, DNS, and open ports. Produces a structured report of findings and risk on the target site.',
    stack: ['Security Assessment', 'DNS', 'Port Scan', 'Reporting', 'Python'],
    link: '#',
    mockup: 'pentest',
  },
  {
    name: 'LLM Fine-Tuning & Web App Integration',
    origin: 'Professional Project',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Domain-specific LLM fine-tuning connected to web apps through APIs. Covers model adaptation through to production use.',
    stack: ['LLMs', 'Fine-Tuning', 'Flask', 'REST API'],
    link: '#',
    mockup: 'finetune',
  },
  {
    name: 'Generative AI Chatbot',
    origin: 'Personal Project',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Context-aware chatbot built with large language models. Focused on prompt design, response quality, and user flow.',
    stack: ['LLMs', 'Prompt Engineering', 'Python'],
    link: '#',
    mockup: 'chatbot',
  },
  {
    name: 'Fertiliser Recommendation, Edge ML',
    origin: 'XactGen, Client Project',
    cat: 'ML',
    featured: true,
    desc: 'ML-based fertiliser recommendation system deployed on an edge device for low-connectivity agricultural field use. Takes soil and crop parameters, outputs actionable recommendations.',
    stack: ['Machine Learning', 'Edge Device', 'IoT', 'Python'],
    link: '#',
    mockup: 'edgeml',
  },
  {
    name: 'Virtual Try Room, Browser Extension',
    origin: 'XactGen, Client Project',
    cat: 'Product',
    featured: true,
    desc: 'AI-powered browser extension allowing users to upload a garment and personal photo to virtually try on clothing. Delivered end-to-end for a client.',
    stack: ['Computer Vision', 'AI', 'Browser Extension', 'Python'],
    link: '#',
    mockup: 'tryon',
  },
  {
    name: 'Telco Customer Churn Prediction',
    origin: 'Kaggle, kaggle.com/ashirzaki',
    cat: 'ML',
    featured: false,
    desc: 'Predictive system identifying customers at risk of churning. Covers data cleaning, EDA, feature engineering, and classification model evaluation.',
    stack: ['Python', 'Scikit-learn', 'EDA', 'Classification'],
    link: 'https://kaggle.com/ashirzaki',
    mockup: 'ml',
  },
  {
    name: 'NYC Taxi Fare, PySpark',
    origin: 'Kaggle, kaggle.com/ashirzaki',
    cat: 'ML',
    featured: false,
    desc: 'Distributed ML regression pipeline built with PySpark on the NYC Taxi Fare dataset, demonstrating big data modelling at scale with Apache Spark.',
    stack: ['PySpark', 'Apache Spark', 'Regression', 'Big Data'],
    link: 'https://kaggle.com/ashirzaki',
    mockup: 'ml',
  },
  {
    name: 'Titanic Survival Prediction',
    origin: 'Kaggle',
    cat: 'ML',
    featured: false,
    desc: 'Classification model on the Titanic dataset, including missing value handling, feature engineering, and model evaluation using standard supervised learning metrics.',
    stack: ['Python', 'Scikit-learn', 'Classification'],
    link: 'https://github.com/HashirDS/EDA-and-Visualization-of-a-Titanic-Dataset',
    mockup: 'ml',
  },
  {
    name: 'Pakistan Sentiment Analysis Dashboard',
    origin: 'Professional Project',
    cat: 'Data',
    featured: false,
    desc: 'Dynamic web dashboard performing sentiment analysis on Pakistan-focused data sources with real-time filtering, trend tracking, and visual sentiment breakdowns.',
    stack: ['Python', 'NLP', 'Web Dashboard', 'Data Viz'],
    link: '#',
    mockup: 'data',
  },
  {
    name: 'Statistical Analysis & Visualisation',
    origin: 'DatixAI, Freelance Client',
    cat: 'Data',
    featured: false,
    desc: 'Complete statistical analysis and visualisation project for a client, using R and SPSS for data processing and hypothesis testing, plus Tableau for interactive dashboards.',
    stack: ['R', 'SPSS', 'Tableau', 'Data Reporting'],
    link: '#',
    mockup: 'data',
  },
  {
    name: 'MS Access Database System',
    origin: 'Freelance Client Project',
    cat: 'Product',
    featured: false,
    desc: 'Structured relational database in Microsoft Access for a client, including schema design, data entry forms, queries, and reporting tailored to their data management needs.',
    stack: ['MS Access', 'Database Design', 'SQL'],
    link: '#',
    mockup: 'database',
  },
  {
    name: 'Keyboard Device Driver, Windows',
    origin: 'University, OS Coursework',
    cat: 'Product',
    featured: false,
    desc: 'Basic Windows keyboard device driver handling input events, demonstrating low-level hardware-to-OS interaction and system-level programming concepts.',
    stack: ['C', 'Windows OS', 'Low-level Programming'],
    link: '#',
    mockup: 'driver',
  },
]

const FILTERS = ['All', 'Featured', 'AI/LLM', 'ML', 'Data', 'Product'] as const

export default function Projects() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('All')

  const filtered = PROJECTS.filter((p) => {
    if (active === 'All') return true
    if (active === 'Featured') return p.featured
    return p.cat === active
  })

  return (
    <section id="projects" style={{ position: 'relative', zIndex: 1, padding: '80px 0 120px' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 className="sr-only">Projects</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                padding: '7px 16px',
                borderRadius: '4px',
                border: active === f ? '1px solid var(--accent)' : '1px solid var(--border2)',
                background: active === f ? 'rgba(56,189,248,0.08)' : 'transparent',
                color: active === f ? 'var(--accent)' : 'var(--text3)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
          {filtered.map((p) => {
            const live = Boolean(p.link && p.link !== '#')
            return (
              <article
                key={p.name}
                className="project-card"
                style={{
                  background: 'var(--surface)',
                  border: p.featured ? '1px solid rgba(56,189,248,0.22)' : '1px solid var(--border)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'default',
                }}
              >
                <ProjectMockup kind={p.mockup} />

                <div style={{ padding: '20px 22px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', gap: '10px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        fontWeight: 600,
                        color: 'var(--text)',
                        letterSpacing: '-0.01em',
                        lineHeight: 1.3,
                        flex: 1,
                      }}
                    >
                      {p.name}
                    </div>
                    {live ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link-btn"
                        aria-label={`Open ${p.name}`}
                      >
                        ↗
                      </a>
                    ) : (
                      <span className="project-link-btn is-disabled" aria-hidden="true">↗</span>
                    )}
                  </div>

                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: p.featured ? 'var(--accent-green)' : 'var(--text3)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      flexWrap: 'wrap',
                    }}
                  >
                    {p.origin}
                    {live && <span className="live-pill">Live</span>}
                  </div>

                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text2)',
                      lineHeight: 1.7,
                      marginBottom: '16px',
                      fontWeight: 300,
                    }}
                  >
                    {p.desc}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '10px',
                          color: 'var(--text3)',
                          background: 'var(--bg)',
                          border: '1px solid var(--border)',
                          borderRadius: '3px',
                          padding: '2px 8px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
