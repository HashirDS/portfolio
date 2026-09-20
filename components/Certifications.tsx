'use client'

const CERTS = [
  { title: 'Google Data Analytics', issuer: 'Google / Coursera', year: '2022', color: '#4285F4' },
  { title: 'Data Visualization with Tableau', issuer: 'Coursera', year: '2022', color: '#E97627' },
  { title: 'Data Analysis & Visualization in Power BI', issuer: 'Coursera', year: '2023', color: '#F2C811' },
  { title: 'Introduction to Big Data with Hadoop & Spark', issuer: 'Coursera', year: '2023', color: '#E25A1C' },
  { title: 'Google AI Essentials', issuer: 'Google / Coursera', year: '2023', color: '#34A853' },
  { title: 'Neural Networks and Deep Learning', issuer: 'Coursera', year: '2023', color: '#A78BFA' },
  { title: 'Introduction to Artificial Intelligence', issuer: 'Coursera', year: '2022', color: '#38BDF8' },
  { title: 'Machine Learning with Apache Spark', issuer: 'Coursera', year: '2024', color: '#E97627' },
  { title: 'Improving Deep Neural Networks', issuer: 'Coursera', year: '2024', color: '#A78BFA' },
  { title: 'Generative AI: Introduction & Applications', issuer: 'Coursera', year: '2024', color: '#34D399' },
  { title: 'Generative AI: Prompt Engineering Basics', issuer: 'Coursera', year: '2025', color: '#34D399' },
  { title: 'Getting Started with Microsoft Excel', issuer: 'Coursera', year: '2022', color: '#217346' },
  { title: 'Charts & Dashboards using Google Sheets', issuer: 'Coursera', year: '2022', color: '#4285F4' },
]

export default function Certifications() {
  return (
    <section id="certifications" style={{ position: 'relative', zIndex: 1, padding: '80px 0' }}>
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2.5rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '12px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Credentials
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '12px' }}>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,40px)', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.1 }}>
            Certifications &{' '}
            <span className="grad-text">Courses</span>
          </h2>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.08em', padding: '5px 14px', border: '1px solid var(--border)', borderRadius: '20px' }}>
            13 completed
          </span>
        </div>

        {/* Grid */}
        <div className="certs-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }}>
          {CERTS.map((c, i) => (
            <div key={i}
              style={{
                background: 'var(--card-bg)', border: '1px solid var(--border)',
                borderRadius: '10px', padding: '18px 20px',
                display: 'flex', alignItems: 'flex-start', gap: '14px',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = c.color; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
            >
              {/* Color dot */}
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: c.color, flexShrink: 0, marginTop: '5px', boxShadow: `0 0 8px ${c.color}60` }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', fontWeight: 600, color: 'var(--text)', lineHeight: 1.4, marginBottom: '4px' }}>
                  {c.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text3)', letterSpacing: '0.04em' }}>{c.issuer}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: c.color, letterSpacing: '0.06em', flexShrink: 0 }}>{c.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coursera badge */}
        <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text3)', letterSpacing: '0.06em' }}>All certifications issued via</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 700, color: '#0056D2', letterSpacing: '-0.01em' }}>Coursera</span>
          </div>
        </div>
      </div>
    </section>
  )
}