import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asher Mehfooz | AI Developer and Data Scientist | Portfolio',
  description: 'Portfolio of Asher Mehfooz, Gold Medalist, AI Developer, and Data Scientist. Specialized in LLMs, Generative AI, RAG Systems, and Production-Grade AI Solutions. Founded XactGen and leading AI R&D at Robx.AI.',
  authors: [{ name: 'Asher Mehfooz', url: 'https://github.com/HashirDS' }],
  keywords: ['AI Developer', 'Data Scientist', 'LLM Engineer', 'Generative AI', 'RAG Systems', 'Machine Learning', 'NLP', 'Portfolio'],
  openGraph: {
    title: 'Asher Mehfooz | AI Developer and Data Scientist',
    description: 'Specialized in LLMs, Generative AI, and Production AI Systems. Gold Medalist with hands-on experience across the AI pipeline.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="grid-bg" aria-hidden="true" />
        <div className="ambient-field" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}