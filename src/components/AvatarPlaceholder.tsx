export default function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, var(--brand-teal) 0%, var(--brand-teal-strong) 100%)',
        color: '#fff',
        fontSize: 'clamp(2rem, 5vw, 3rem)',
        fontWeight: 700,
        fontFamily: '"Century Gothic", var(--font-brand), sans-serif',
        letterSpacing: '1px',
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
