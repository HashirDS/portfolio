'use client'

const PUBLICATIONS = [
  {
    title: 'A Multimodal AI-Driven Intelligent Tutoring System for Personalized Early Childhood Education',
    authors: 'Asher Mehfooz',
    year: '2025',
    type: 'Undergraduate Thesis',
    status: 'Submitted for first editorial review',
    abstract: 'Designed and deployed a web-based intelligent tutoring system for children aged 3-6, combining generative AI, text-to-speech, and 3D animated avatars to teach alphabets, numbers, colours, and shapes. Built a supporting AI poem generator, digital drawing canvas, and teacher dashboard.',
    highlights: ['Generative AI', 'Adaptive Learning', 'Early Childhood Education', 'Multimodal AI', '3D Animation', 'NLP'],
    link: '#',
  },
]

const RESEARCH_INTERESTS = [
  'Large language models and generative AI for real-world, production-grade applications',
  'Natural language processing, prompt engineering, and retrieval-augmented generation (RAG) systems',
  'Artificial intelligence in education, including intelligent tutoring systems for young learners',
  'Sentiment and social-media intelligence from large-scale, unstructured web data',
  'Applied machine learning and human AI interaction for scalable software systems',
]

export default function Publications() {
  return (
    <section id="research" style={{ position: 'relative', zIndex: 1, padding: '80px 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Research Interests */}
        <div style={{ marginBottom: '80px' }}>
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
            Research Focus
          </div>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '40px',
              lineHeight: 1.1,
            }}
          >
            Research{' '}
            <span style={{ color: 'var(--accent-purple)' }}>Interests</span>
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px',
            }}
          >
            {RESEARCH_INTERESTS.map((interest, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(56,189,248,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, var(--accent), var(--accent-purple))` }} />
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text2)',
                    lineHeight: 1.7,
                    fontWeight: 400,
                  }}
                >
                  {interest}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
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
            Publications
          </div>
          <h2
            style={{
              fontSize: 'clamp(26px, 3.5vw, 40px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              marginBottom: '40px',
              lineHeight: 1.1,
            }}
          >
            Thesis &{' '}
            <span style={{ color: 'var(--accent-green)' }}>Manuscripts</span>
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {PUBLICATIONS.map((pub) => (
              <div
                key={pub.title}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '14px',
                  padding: '28px',
                  transition: 'all 0.3s',
                  cursor: 'default',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-green)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 16px 40px rgba(52,211,153,0.1)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent-green), var(--accent))' }} />

                {/* Status badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(52,211,153,0.1)',
                    border: '1px solid rgba(52,211,153,0.25)',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    marginBottom: '12px',
                  }}
                >
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-green)' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--accent-green)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    {pub.type}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '8px',
                    lineHeight: 1.4,
                  }}
                >
                  {pub.title}
                </h3>

                {/* Meta info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.05em' }}>
                    {pub.authors}
                  </span>
                  <span style={{ color: 'var(--border2)' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.05em' }}>
                    {pub.year}
                  </span>
                  <span style={{ color: 'var(--border2)' }}>·</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent-green)', letterSpacing: '0.05em' }}>
                    {pub.status}
                  </span>
                </div>

                {/* Abstract */}
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--text2)',
                    lineHeight: 1.8,
                    marginBottom: '18px',
                  }}
                >
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '18px' }}>
                  {pub.highlights.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--accent-green)',
                        background: 'rgba(52,211,153,0.08)',
                        border: '1px solid rgba(52,211,153,0.2)',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more link */}
                <a
                  href={pub.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent-green)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = '10px'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = '6px'
                  }}
                >
                  Read Publication →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
