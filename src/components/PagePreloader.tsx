'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * PagePreloader
 * Full-screen preloader that shows on first page load.
 * Animates the CEIIL logo in, holds briefly, then fades out.
 * Automatically dismissed after load event or 3s max.
 */
export default function PagePreloader() {
  const [phase, setPhase] = useState<'entering' | 'visible' | 'leaving' | 'gone'>('entering');

  useEffect(() => {
    // Phase 1: Logo enters (0 → 400ms)
    const t1 = setTimeout(() => setPhase('visible'), 400);

    const dismiss = () => {
      setPhase('leaving');
      setTimeout(() => setPhase('gone'), 600);
    };

    // Phase 2: Dismiss on load or after 2.8s
    const t2 = setTimeout(dismiss, 2800);

    const onLoad = () => {
      clearTimeout(t2);
      // Give a tiny breathing room after load
      setTimeout(dismiss, 300);
    };

    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('load', onLoad);
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div className={`preloader ${phase}`} role="status" aria-label="Loading Capital Express Indemnity Insurance">
      {/* Radial background pulse */}
      <div className="preloader-bg" aria-hidden="true" />

      {/* Logo container */}
      <div className="preloader-center">
        {/* Logo mark — animated */}
        <div className="preloader-logo-wrap">
          <Image
            src="/media/ceiil-litt.png"
            alt="Capital Express Indemnity Insurance Limited"
            width={220}
            height={72}
            priority
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>

        {/* Tagline */}
        <p className="preloader-tagline">Your Trusted Risk Advisor</p>

        {/* Progress bar */}
        <div className="preloader-bar-track" aria-hidden="true">
          <div className="preloader-bar-fill" />
        </div>
      </div>

      {/* Corner decorators */}
      <div className="preloader-corner preloader-corner-tl" aria-hidden="true" />
      <div className="preloader-corner preloader-corner-br" aria-hidden="true" />

      <style jsx>{`
        .preloader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #00425B;
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .preloader.entering {
          opacity: 0;
        }
        .preloader.visible {
          opacity: 1;
        }
        .preloader.leaving {
          opacity: 0;
          transform: scale(1.04);
          pointer-events: none;
        }

        /* Radial glow bg */
        .preloader-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse 60% 50% at 50% 50%,
            rgba(27, 176, 206, 0.12) 0%,
            transparent 70%
          );
          animation: bgPulse 2s ease-in-out infinite alternate;
        }
        @keyframes bgPulse {
          from { opacity: 0.6; }
          to   { opacity: 1; }
        }

        /* Center content */
        .preloader-center {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.25rem;
        }

        /* Logo */
        .preloader-logo-wrap {
          width: 220px;
          /* Invert logo to white — our logo is colored, white looks premium on dark teal */
          filter: brightness(0) invert(1);
          animation: logoReveal 0.7s 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        @keyframes logoReveal {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Tagline */
        .preloader-tagline {
          font-family: 'Nunito', 'Century Gothic', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.5);
          animation: fadeUp 0.5s 0.5s ease both;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Progress bar */
        .preloader-bar-track {
          width: 120px;
          height: 2px;
          background: rgba(255,255,255,0.12);
          border-radius: 9999px;
          overflow: hidden;
          animation: fadeUp 0.5s 0.6s ease both;
        }
        .preloader-bar-fill {
          height: 100%;
          border-radius: 9999px;
          background: linear-gradient(90deg, #1BB0CE, #9B1C33);
          animation: barFill 2.2s 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @keyframes barFill {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* Corner decorators */
        .preloader-corner {
          position: absolute;
          width: 80px;
          height: 80px;
          border-color: rgba(27, 176, 206, 0.2);
          border-style: solid;
        }
        .preloader-corner-tl {
          top: 2rem;
          left: 2rem;
          border-width: 1px 0 0 1px;
          border-radius: 4px 0 0 0;
          animation: cornerFade 0.5s 0.3s ease both;
        }
        .preloader-corner-br {
          bottom: 2rem;
          right: 2rem;
          border-width: 0 1px 1px 0;
          border-radius: 0 0 4px 0;
          animation: cornerFade 0.5s 0.4s ease both;
        }
        @keyframes cornerFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
