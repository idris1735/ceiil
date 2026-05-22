'use client';

/**
 * Skeleton System
 * Shimmer-animated placeholder shapes for content that is loading.
 * Usage: import the specific skeleton you need per section.
 *
 * Components:
 *  - <SkeletonBox />         Raw building block
 *  - <SkeletonText />        Line of text
 *  - <SkeletonHeroSlide />   Hero carousel placeholder
 *  - <SkeletonProductCard /> Product grid card
 *  - <SkeletonValueCard />   Core values card
 *  - <SkeletonPartnerLogo /> Alliance logo card
 *  - <SkeletonNavbar />      Navbar loading state
 */

/* ── Base Shimmer Box ────────────────────────────────────── */
interface BoxProps {
  width?: string;
  height?: string;
  radius?: string;
  style?: React.CSSProperties;
  className?: string;
}

export function SkeletonBox({ width = '100%', height = '1rem', radius = '6px', style, className }: BoxProps) {
  return (
    <>
      <div
        className={`skeleton-box ${className ?? ''}`}
        style={{ width, height, borderRadius: radius, ...style }}
        aria-hidden="true"
      />
      <style jsx>{`
        .skeleton-box {
          background: linear-gradient(
            90deg,
            #e8eaed 0%,
            #f5f6f7 40%,
            #e8eaed 80%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s ease-in-out infinite;
          display: block;
          flex-shrink: 0;
        }
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </>
  );
}

/* ── Text Line ───────────────────────────────────────────── */
interface TextProps {
  width?: string;
  lines?: number;
  gap?: string;
}

export function SkeletonText({ width = '100%', lines = 1, gap = '0.5rem' }: TextProps) {
  const widths = lines === 1 ? [width] :
    Array.from({ length: lines }, (_, i) =>
      i === lines - 1 ? `${Math.floor(Math.random() * 30 + 50)}%` : width
    );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap }} aria-hidden="true">
      {widths.map((w, i) => (
        <SkeletonBox key={i} width={w} height="0.875rem" radius="4px" />
      ))}
    </div>
  );
}

/* ── Hero Slide Skeleton ─────────────────────────────────── */
export function SkeletonHeroSlide() {
  return (
    <div className="skeleton-hero" aria-label="Loading hero" role="status" aria-busy="true">
      {/* Left content */}
      <div className="skeleton-hero-text">
        <SkeletonBox width="140px" height="22px" radius="9999px" style={{ marginBottom: '1.25rem' }} />
        <SkeletonBox width="90%" height="3.5rem" radius="8px" style={{ marginBottom: '0.75rem' }} />
        <SkeletonBox width="75%" height="3.5rem" radius="8px" style={{ marginBottom: '1.5rem' }} />
        <SkeletonBox width="65%" height="1rem" radius="4px" style={{ marginBottom: '0.5rem' }} />
        <SkeletonBox width="55%" height="1rem" radius="4px" style={{ marginBottom: '2rem' }} />
        {/* Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <SkeletonBox width="160px" height="48px" radius="9999px" />
          <SkeletonBox width="130px" height="48px" radius="9999px" />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="skeleton-hero-dots">
        {[28, 8, 8].map((w, i) => (
          <SkeletonBox key={i} width={`${w}px`} height="8px" radius="9999px" style={{ background: i === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>

      <style jsx>{`
        .skeleton-hero {
          position: relative;
          height: 100vh;
          min-height: 640px;
          background: linear-gradient(135deg, #012a3a 0%, #00425B 100%);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .skeleton-hero :global(.skeleton-box) {
          /* On dark bg, use darker shimmer */
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.06) 0%,
            rgba(255,255,255,0.12) 40%,
            rgba(255,255,255,0.06) 80%
          );
          background-size: 200% 100%;
        }
        .skeleton-hero-text {
          padding: 0 max(2rem, calc((100vw - 1280px) / 2 + 2rem));
          width: 100%;
          max-width: 600px;
        }
        .skeleton-hero-dots {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
      `}</style>
    </div>
  );
}

/* ── Product Card Skeleton ───────────────────────────────── */
export function SkeletonProductCard() {
  return (
    <div className="skeleton-product-card" aria-hidden="true">
      {/* Icon */}
      <SkeletonBox width="3rem" height="3rem" radius="12px" style={{ marginBottom: '0.75rem' }} />
      {/* Title */}
      <SkeletonBox width="70%" height="1rem" radius="4px" style={{ marginBottom: '0.5rem' }} />
      {/* Body */}
      <SkeletonBox width="100%" height="0.75rem" radius="4px" style={{ marginBottom: '0.25rem' }} />
      <SkeletonBox width="80%" height="0.75rem" radius="4px" style={{ marginBottom: '0.25rem' }} />
      <SkeletonBox width="60%" height="0.75rem" radius="4px" style={{ marginBottom: '1rem' }} />
      {/* Link */}
      <SkeletonBox width="90px" height="0.75rem" radius="4px" />

      <style jsx>{`
        .skeleton-product-card {
          background: white;
          border: 1px solid #F3F4F6;
          border-radius: 1rem;
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
}

/* ── Products Grid Skeleton ──────────────────────────────── */
export function SkeletonProductsGrid() {
  return (
    <div className="skeleton-products-grid" role="status" aria-label="Loading products" aria-busy="true">
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <SkeletonBox width="120px" height="0.75rem" radius="4px" style={{ margin: '0 auto 1rem' }} />
        <SkeletonBox width="380px" height="2.5rem" radius="6px" style={{ margin: '0 auto 1rem', maxWidth: '90%' }} />
        <SkeletonBox width="520px" height="1rem" radius="4px" style={{ margin: '0 auto 0.5rem', maxWidth: '90%' }} />
        <SkeletonBox width="420px" height="1rem" radius="4px" style={{ margin: '0 auto', maxWidth: '90%' }} />
      </div>
      {/* Cards */}
      <div className="skeleton-products-cards">
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonProductCard key={i} />
        ))}
      </div>

      <style jsx>{`
        .skeleton-products-grid {
          padding: 5rem max(2rem, calc((100vw - 1280px) / 2 + 2rem));
        }
        .skeleton-products-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        @media (max-width: 1024px) {
          .skeleton-products-cards { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 768px) {
          .skeleton-products-cards { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </div>
  );
}

/* ── Value Card Skeleton ─────────────────────────────────── */
export function SkeletonValueCard() {
  return (
    <div className="skeleton-value-card" aria-hidden="true">
      <SkeletonBox width="3.5rem" height="3.5rem" radius="50%" style={{ margin: '0 auto 0.875rem' }} />
      <SkeletonBox width="70%" height="0.9375rem" radius="4px" style={{ margin: '0 auto 0.5rem' }} />
      <SkeletonBox width="90%" height="0.75rem" radius="4px" style={{ margin: '0 auto 0.25rem' }} />
      <SkeletonBox width="80%" height="0.75rem" radius="4px" style={{ margin: '0 auto 0.25rem' }} />
      <SkeletonBox width="60%" height="0.75rem" radius="4px" style={{ margin: '0 auto' }} />

      <style jsx>{`
        .skeleton-value-card {
          background: white;
          border: 1px solid #F3F4F6;
          border-radius: 1rem;
          padding: 2rem 1.5rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

/* ── Partner Logo Skeleton ───────────────────────────────── */
export function SkeletonPartnerLogo() {
  return (
    <div className="skeleton-partner" aria-hidden="true">
      <SkeletonBox width="100px" height="36px" radius="6px" />

      <style jsx>{`
        .skeleton-partner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.875rem 1.5rem;
          background: white;
          border: 1.5px solid #E5E7EB;
          border-radius: 12px;
          min-width: 100px;
        }
      `}</style>
    </div>
  );
}

/* ── Navbar Skeleton ─────────────────────────────────────── */
export function SkeletonNavbar() {
  return (
    <div className="skeleton-navbar" aria-hidden="true">
      {/* Logo area */}
      <SkeletonBox width="160px" height="40px" radius="6px" style={{ background: 'rgba(255,255,255,0.15)' }} />
      {/* Nav links */}
      <div className="skeleton-navbar-links">
        {[60, 80, 70, 55, 50, 65].map((w, i) => (
          <SkeletonBox key={i} width={`${w}px`} height="0.75rem" radius="4px" style={{ background: 'rgba(255,255,255,0.15)' }} />
        ))}
      </div>
      {/* CTA */}
      <SkeletonBox width="120px" height="38px" radius="9999px" style={{ background: 'rgba(255,255,255,0.15)' }} />

      <style jsx>{`
        .skeleton-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.5rem 2rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          background: transparent;
        }
        .skeleton-navbar-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
          justify-content: center;
        }
        @media (max-width: 1024px) {
          .skeleton-navbar-links { display: none; }
        }
      `}</style>
    </div>
  );
}

/* ── Quick Actions Bar Skeleton ──────────────────────────── */
export function SkeletonQuickActions() {
  return (
    <div className="skeleton-qab" aria-hidden="true">
      {[1, 2, 3].map((i) => (
        <div key={i} className="skeleton-qab-card">
          <SkeletonBox width="2rem" height="2rem" radius="8px" />
          <div style={{ flex: 1 }}>
            <SkeletonBox width="120px" height="0.9375rem" radius="4px" style={{ marginBottom: '0.375rem' }} />
            <SkeletonBox width="160px" height="0.75rem" radius="4px" />
          </div>
        </div>
      ))}

      <style jsx>{`
        .skeleton-qab {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 0 max(2rem, calc((100vw - 1280px) / 2 + 2rem));
          margin-top: -2.5rem;
          position: relative;
          z-index: 10;
        }
        .skeleton-qab-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.375rem 1.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        }
        @media (max-width: 768px) {
          .skeleton-qab { grid-template-columns: 1fr; margin-top: 0; padding-top: 1.5rem; }
        }
      `}</style>
    </div>
  );
}
