type IllustrationProps = { name: string; className?: string };

export default function CoreValueIllustration({ name, className }: IllustrationProps) {
  const teal = 'var(--brand-teal)';
  const crimson = 'var(--brand-crimson)';
  const accent = 'var(--accent-teal)';

  const viewBox = '0 0 200 200';

  switch (name) {
    // ── Customer Dedication ──
    case 'Customer Dedication':
      return (
        <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* outer ring */}
          <circle cx="100" cy="100" r="90" stroke={teal} strokeWidth="2" opacity="0.15" />
          <circle cx="100" cy="100" r="75" stroke={teal} strokeWidth="1.5" opacity="0.1" strokeDasharray="6 4" />
          {/* person figure */}
          <circle cx="100" cy="70" r="24" stroke={teal} strokeWidth="3" />
          <path d="M55 155c0-25 20-45 45-45s45 20 45 45" stroke={teal} strokeWidth="3" strokeLinecap="round" />
          {/* hands holding heart */}
          <path d="M100 128c-3-6-8-12-14-16l14 8 14-8c-6 4-11 10-14 16z" fill={crimson} opacity="0.9">
            <animateTransform attributeName="transform" type="scale" values="1;1.08;1" dur="3s" repeatCount="indefinite" />
          </path>
          {/* sparkles */}
          <circle cx="142" cy="52" r="3" fill={accent} opacity="0.7">
            <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="58" cy="90" r="2.5" fill={accent} opacity="0.5">
            <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2.5s" repeatCount="indefinite" />
          </circle>
        </svg>
      );

    // ── Creativity ──
    case 'Creativity':
      return (
        <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={crimson} strokeWidth="2" opacity="0.12" />
          {/* lightbulb */}
          <path d="M86 115c0-10 5-20 14-25 9-5 14-15 14-25v0" stroke={teal} strokeWidth="3" strokeLinecap="round" />
          <path d="M86 115h28" stroke={teal} strokeWidth="3" strokeLinecap="round" />
          {/* bulb glass */}
          <path d="M100 45c-12 0-22 10-22 22 0 8 4 15 11 19l2 1v8h18v-8l2-1c7-4 11-11 11-19 0-12-10-22-22-22z" stroke={teal} strokeWidth="3" strokeLinejoin="round" />
          {/* filament glow */}
          <circle cx="100" cy="58" r="8" fill={accent} opacity="0.2">
            <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.3;0.15" dur="2s" repeatCount="indefinite" />
          </circle>
          {/* rays */}
          {[0, 45, 90, 135, 180].map((angle, i) => (
            <line
              key={i}
              x1={100 + 32 * Math.cos((angle * Math.PI) / 180)}
              y1={45 + 32 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 42 * Math.cos((angle * Math.PI) / 180)}
              y2={45 + 42 * Math.sin((angle * Math.PI) / 180)}
              stroke={accent}
              strokeWidth="2"
              opacity="0.4"
            >
              <animate attributeName="opacity" values="0.2;0.6;0.2" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite" />
            </line>
          ))}
        </svg>
      );

    // ── Respect for Individuals ──
    case 'Respect for Individuals':
      return (
        <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={teal} strokeWidth="2" opacity="0.12" />
          {/* two figures facing each other */}
          {/* left person */}
          <circle cx="70" cy="72" r="18" stroke={teal} strokeWidth="2.8" />
          <path d="M35 140c0-18 16-32 35-32s35 14 35 32" stroke={teal} strokeWidth="2.8" strokeLinecap="round" />
          {/* right person */}
          <circle cx="130" cy="72" r="18" stroke={crimson} strokeWidth="2.8" />
          <path d="M95 140c0-18 16-32 35-32s35 14 35 32" stroke={crimson} strokeWidth="2.8" strokeLinecap="round" />
          {/* connection bridge */}
          <path d="M88 100c6-8 18-8 24 0" stroke={accent} strokeWidth="2" strokeDasharray="4 3" opacity="0.7">
            <animate attributeName="stroke-dashoffset" values="0;14" dur="2s" repeatCount="indefinite" />
          </path>
          {/* equality dots */}
          <circle cx="100" cy="110" r="4" fill={accent} opacity="0.5" />
        </svg>
      );

    // ── Teamwork ──
    case 'Teamwork':
      return (
        <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={teal} strokeWidth="2" opacity="0.12" />
          {/* three interconnected nodes */}
          <circle cx="100" cy="55" r="20" stroke={teal} strokeWidth="2.8" />
          <circle cx="60" cy="130" r="20" stroke={crimson} strokeWidth="2.8" />
          <circle cx="140" cy="130" r="20" stroke={teal} strokeWidth="2.8" />
          {/* connecting lines */}
          <line x1="88" y1="68" x2="68" y2="116" stroke={accent} strokeWidth="2" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="112" y1="68" x2="132" y2="116" stroke={accent} strokeWidth="2" opacity="0.5">
            <animate attributeName="opacity" values="0.5;0.3;0.5" dur="2s" repeatCount="indefinite" />
          </line>
          <line x1="80" y1="130" x2="120" y2="130" stroke={accent} strokeWidth="2" opacity="0.5">
            <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite" />
          </line>
          {/* people icons inside nodes */}
          <circle cx="100" cy="48" r="6" fill={teal} opacity="0.5" />
          <path d="M92 62c0-4 4-7 8-7s8 3 8 7" stroke={teal} strokeWidth="2" opacity="0.5" />
          <circle cx="60" cy="123" r="6" fill={crimson} opacity="0.5" />
          <path d="M52 137c0-4 4-7 8-7s8 3 8 7" stroke={crimson} strokeWidth="2" opacity="0.5" />
          <circle cx="140" cy="123" r="6" fill={teal} opacity="0.5" />
          <path d="M132 137c0-4 4-7 8-7s8 3 8 7" stroke={teal} strokeWidth="2" opacity="0.5" />
        </svg>
      );

    // ── Integrity ──
    case 'Integrity':
      return (
        <svg className={className} viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke={teal} strokeWidth="2" opacity="0.12" />
          {/* shield */}
          <path d="M100 42l48 28v48c0 32-20 48-48 58-28-10-48-26-48-58V70l48-28z" stroke={teal} strokeWidth="3" strokeLinejoin="round" />
          {/* shield fill subtle */}
          <path d="M100 42l48 28v48c0 32-20 48-48 58-28-10-48-26-48-58V70l48-28z" fill={teal} opacity="0.06" />
          {/* checkmark */}
          <path d="M80 106l14 14 28-28" stroke={crimson} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <animate attributeName="stroke-dasharray" values="0 60;60 0" dur="1.5s" fill="freeze" begin="0.3s" />
          </path>
          {/* balance dots */}
          <circle cx="70" cy="70" r="3" fill={accent} opacity="0.6" />
          <circle cx="130" cy="70" r="3" fill={accent} opacity="0.6" />
        </svg>
      );

    default:
      return <div />;
  }
}
