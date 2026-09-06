'use client'

import { useState } from 'react'

const PROJECTS = [
  {
    name: 'Smart Animated Tutor for Kids',
    origin: 'Thesis, University of Kotli AJK',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Web-based AI tutoring system for children aged 3–6 combining fine-tuned LLMs (Phi-2, LLaMA 3), 3D animated avatars, text-to-speech, and a teacher dashboard for personalised content.',
    stack: ['Python','GenAI','LLM Fine-tuning','3D Animation','React','TTS'],
    link: '#',
  },
  {
    name: 'Pulisint, Sentiment Analysis Platform',
    origin: 'Robx.AI, Professional',
    cat: 'AI/LLM',
    featured: true,
    desc: 'Live sentiment analysis dashboard that scrapes data from multiple sources and runs it through an LLM pipeline to surface real-time structured insights on a dynamic web interface.',
    stack: ['LLMs','Web Scraping','NLP','Python','Dashboard'],
    link: '#',
  },
  {
    name: 'Humint, Social Media Intelligence',
    origin: 'Robx.AI, Professional',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Web app that collects public profile data across social platforms, processes it through LLM pipelines, and displays structured intelligence via Nadara API integration.',
    stack: ['Web Scraping','LLMs','APIs','Nadara'],
    link: '#',
  },
  {
    name: 'LLM Fine-Tuning & Web App Integration',
    origin: 'Professional Project',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Fine-tuned LLMs for domain-specific tasks and integrated them into web-based applications via APIs, covering model adaptation through to production deployment.',
    stack: ['LLMs','Fine-Tuning','Flask','REST API'],
    link: '#',
  },
  {
    name: 'Generative AI Chatbot',
    origin: 'Personal Project',
    cat: 'AI/LLM',
    featured: false,
    desc: 'Context-aware conversational chatbot built using large language models, focusing on prompt design, response flow, and user interaction quality.',
    stack: ['LLMs','Prompt Engineering','Python'],
    link: '#',
  },
  {
    name: 'Fertiliser Recommendation, Edge ML',
    origin: 'XactGen, Client Project',
    cat: 'ML',
    featured: true,
    desc: 'ML-based fertiliser recommendation system deployed on an edge device for low-connectivity agricultural field use. Takes soil and crop parameters, outputs actionable recommendations.',
    stack: ['Machine Learning','Edge Device','IoT','Python'],
    link: '#',
  },
  {
    name: 'Virtual Try Room, Browser Extension',
    origin: 'XactGen, Client Project',
    cat: 'Product',
    featured: true,
    desc: 'AI-powered browser extension allowing users to upload a garment and personal photo to virtually try on clothing. Delivered end-to-end for a client.',
    stack: ['Computer Vision','AI','Browser Extension','Python'],
    link: '#',
  },
  {
    name: 'Telco Customer Churn Prediction',
    origin: 'Kaggle, kaggle.com/ashirzaki',
    cat: 'ML',
    featured: false,
    desc: 'Predictive system identifying customers at risk of churning. Covers data cleaning, EDA, feature engineering, and classification model evaluation.',
    stack: ['Python','Scikit-learn','EDA','Classification'],
    link: 'https://kaggle.com/ashirzaki',
  },
  {
    name: 'NYC Taxi Fare, PySpark',
    origin: 'Kaggle, kaggle.com/ashirzaki',
    cat: 'ML',
    featured: false,
    desc: 'Distributed ML regression pipeline built with PySpark on the NYC Taxi Fare dataset, demonstrating big data modelling at scale with Apache Spark.',
    stack: ['PySpark','Apache Spark','Regression','Big Data'],
    link: 'https://kaggle.com/ashirzaki',
  },
  {
    name: 'Titanic Survival Prediction',
    origin: 'Kaggle',
    cat: 'ML',
    featured: false,
    desc: 'Classification model on the Titanic dataset, including missing value handling, feature engineering, and model evaluation using standard supervised learning metrics.',
    stack: ['Python','Scikit-learn','Classification'],
    link: 'https://github.com/HashirDS/EDA-and-Visualization-of-a-Titanic-Dataset',
  },
  {
    name: 'Pakistan Sentiment Analysis Dashboard',
    origin: 'Professional Project',
    cat: 'Data',
    featured: false,
    desc: 'Dynamic web dashboard performing sentiment analysis on Pakistan-focused data sources with real-time filtering, trend tracking, and visual sentiment breakdowns.',
    stack: ['Python','NLP','Web Dashboard','Data Viz'],
    link: '#',
  },
  {
    name: 'Statistical Analysis & Visualisation',
    origin: 'DatixAI, Freelance Client',
    cat: 'Data',
    featured: false,
    desc: 'Complete statistical analysis and visualisation project for a client, using R and SPSS for data processing and hypothesis testing, plus Tableau for interactive dashboards.',
    stack: ['R','SPSS','Tableau','Data Reporting'],
    link: '#',
  },
  {
    name: 'MS Access Database System',
    origin: 'Freelance Client Project',
    cat: 'Product',
    featured: false,
    desc: 'Structured relational database in Microsoft Access for a client, including schema design, data entry forms, queries, and reporting tailored to their data management needs.',
    stack: ['MS Access','Database Design','SQL'],
    link: '#',
  },
  {
    name: 'Keyboard Device Driver, Windows',
    origin: 'University, OS Coursework',
    cat: 'Product',
    featured: false,
    desc: 'Basic Windows keyboard device driver handling input events, demonstrating low-level hardware-to-OS interaction and system-level programming concepts.',
    stack: ['C','Windows OS','Low-level Programming'],
    link: '#',
  },
]

const FILTERS = ['All', 'AI/LLM', 'ML', 'Data', 'Product']

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === active)

  return (
    <section
      id="projects"
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
          <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--accent)' }} />
          What I've built
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              lineHeight: 1.1,
            }}
          >
            Featured{' '}
            <span style={{ color: 'var(--accent-purple)' }}>Projects</span>
          </h2>

          {/* Filter buttons */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
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
                  background: active === f ? 'rgba(0,198,224,0.08)' : 'transparent',
                  color: active === f ? 'var(--accent)' : 'var(--text3)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          className="projects-grid-wrap"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.name}
              style={{
                background: 'var(--surface)',
                border: p.featured
                  ? '1px solid rgba(0,198,224,0.18)'
                  : '1px solid var(--border)',
                borderRadius: '12px',
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border2)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = p.featured
                  ? 'rgba(0,198,224,0.18)'
                  : 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Top */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '8px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '15px',
                    fontWeight: 600,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    flex: 1,
                    marginRight: '12px',
                  }}
                >
                  {p.name}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '30px',
                    height: '30px',
                    border: '1px solid var(--border2)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text3)',
                    fontSize: '13px',
                    textDecoration: 'none',
                    flexShrink: 0,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent)'
                    e.currentTarget.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border2)'
                    e.currentTarget.style.color = 'var(--text3)'
                  }}
                >
                  ↗
                </a>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: p.featured ? 'var(--accent-green)' : 'var(--text3)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}
              >
                {p.origin}
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
          ))}
        </div>
      </div>
    </section>
  )
}