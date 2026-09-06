'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Reveal the app after the identity sequence finishes.
    const t1 = setTimeout(() => setFadeOut(true), 3000)
    // Remove from DOM after animation
    const t2 = setTimeout(() => setVisible(false), 3450)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#050810',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.4s cubic-bezier(0.16,1,0.3,1)',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '22px', width: 'min(90vw, 440px)' }}>
        {/* Circular Data Science logo */}
        <div className="loader-logo loader-reveal-first" aria-label="Data Scientist">
          <div className="loader-orbit loader-orbit-one" />
          <div className="loader-orbit loader-orbit-two" />
          <div className="loader-node loader-node-one" />
          <div className="loader-node loader-node-two" />
          <div className="loader-core">
            <span>DS</span>
            <small>DATA</small>
          </div>
        </div>

        {/* Role appears before the name */}
        <div className="loader-specialty loader-role" aria-label="Data Scientist">
          <span>DATA SCIENTIST</span>
        </div>

        {/* Name */}
        <div className="loader-identity" style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#F0F4FF',
            marginBottom: '4px',
          }}>
            Asher Mehfooz
          </div>
          <div style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px', color: '#4A6080',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            AI Developer & Data Scientist
          </div>
        </div>

        {/* Progress bar */}
        <div className="loader-progress" style={{ width: '120px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: '2px',
            background: 'linear-gradient(90deg, #38BDF8, #A78BFA)',
            animation: 'loaderBar 2.7s cubic-bezier(0.16,1,0.3,1) forwards',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%,100%{transform:scale(1);box-shadow:0 0 40px rgba(56,189,248,0.4)}
          50%{transform:scale(1.04);box-shadow:0 0 60px rgba(56,189,248,0.6)}
        }
        .loader-logo {
          position: relative;
          width: 126px;
          height: 126px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          animation: loaderPulse 2.4s ease-in-out infinite;
        }
        .loader-reveal-first { animation: loaderReveal 0.8s cubic-bezier(0.16,1,0.3,1) both, loaderPulse 2.4s 0.8s ease-in-out infinite; }
        .loader-role { opacity: 0; animation: loaderIdentity 0.7s 0.75s cubic-bezier(0.16,1,0.3,1) forwards; }
        .loader-identity { opacity: 0; animation: loaderIdentity 0.8s 1.65s cubic-bezier(0.16,1,0.3,1) forwards; }
        .loader-progress { opacity: 0; animation: loaderProgress 0.4s 1.8s ease forwards; }
        .loader-core {
          position: relative;
          z-index: 2;
          width: 82px;
          height: 82px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(103,232,249,0.5);
          border-radius: 50%;
          background: radial-gradient(circle at 35% 25%, rgba(56,189,248,0.3), rgba(13,20,36,0.98) 68%);
          box-shadow: inset 0 0 22px rgba(56,189,248,0.18), 0 0 26px rgba(56,189,248,0.24);
        }
        .loader-core span {
          color: #f0f4ff;
          font: 800 25px/1 'Space Grotesk', sans-serif;
          letter-spacing: 0.04em;
        }
        .loader-core small {
          margin-top: 5px;
          color: #67e8f9;
          font: 500 7px/1 'IBM Plex Mono', monospace;
          letter-spacing: 0.2em;
        }
        .loader-orbit {
          position: absolute;
          inset: 5px;
          border: 1px solid transparent;
          border-top-color: #67e8f9;
          border-right-color: rgba(167,139,250,0.75);
          border-radius: 50%;
        }
        .loader-orbit-one { animation: loaderOrbit 3s linear infinite; }
        .loader-orbit-two { inset: 15px; border-bottom-color: rgba(56,189,248,0.75); border-left-color: #a78bfa; animation: loaderOrbitReverse 4.5s linear infinite; }
        .loader-node { position: absolute; z-index: 3; width: 7px; height: 7px; border-radius: 50%; background: #67e8f9; box-shadow: 0 0 12px #38bdf8; animation: loaderNode 1.8s ease-in-out infinite; }
        .loader-node-one { top: 7px; right: 29px; }
        .loader-node-two { bottom: 12px; left: 18px; background: #c4b5fd; box-shadow: 0 0 12px #a78bfa; animation-delay: .7s; }
        .loader-specialty { overflow: hidden; color: #67e8f9; font: 500 10px/1 'IBM Plex Mono', monospace; letter-spacing: .26em; }
        .loader-specialty span { display: inline-block; animation: loaderText 1.8s ease-in-out infinite; }
        @keyframes loaderOrbit { to { transform: rotate(360deg); } }
        @keyframes loaderOrbitReverse { to { transform: rotate(-360deg); } }
        @keyframes loaderNode { 0%,100% { transform: scale(.7); opacity: .45; } 50% { transform: scale(1.25); opacity: 1; } }
        @keyframes loaderText { 0%,100% { opacity: .45; transform: translateY(2px); } 50% { opacity: 1; transform: translateY(0); } }
        @keyframes loaderReveal { from { opacity: 0; transform: scale(.65); } to { opacity: 1; transform: scale(1); } }
        @keyframes loaderIdentity { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes loaderProgress { to { opacity: 1; } }
        @keyframes loaderBar {
          from{width:0%}
          to{width:100%}
        }
      `}</style>
    </div>
  )
}