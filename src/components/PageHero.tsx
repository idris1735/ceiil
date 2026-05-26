'use client';

import { useEffect, useRef } from 'react';

type PageHeroProps = {
  bgImage: string;
  kicker: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ bgImage, kicker, title, subtitle }: PageHeroProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!contentRef.current) return;
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY * 0.12, 60);
      contentRef.current.style.transform = `translateY(${offset}px)`;
      contentRef.current.style.opacity = `${Math.max(1 - scrollY / 800, 0.7)}`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className="page-hero-section"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 37, 52, 0.72), rgba(0, 25, 36, 0.82)), url("${bgImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        color: '#fff',
        padding: '220px 0 100px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top & bottom edge fade */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        background: `
          linear-gradient(to bottom, rgba(245, 243, 239, 0.55) 0%, transparent 12%, transparent 88%, rgba(245, 243, 239, 0.55) 100%)
        `,
        zIndex: 2,
      }} />      
      <div ref={contentRef} className="section-shell" style={{ textAlign: 'center', willChange: 'transform, opacity', position: 'relative', zIndex: 3 }}>
        <span
          className="section-kicker"
          style={{
            color: 'var(--accent-teal)',
            textTransform: 'uppercase',
            letterSpacing: '2.5px',
            fontWeight: 800,
          }}
        >
          {kicker}
        </span>
        <h1
          className="section-title"
          style={{
            color: '#fff',
            fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
            lineHeight: '1.2',
            margin: '20px auto 24px',
            fontFamily: '"Century Gothic", var(--font-brand), sans-serif',
            maxWidth: '800px',
            fontWeight: 700,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: '1.15rem',
              opacity: 0.9,
              maxWidth: '680px',
              lineHeight: '1.65',
              margin: '0 auto',
              color: '#e7f1f4',
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
