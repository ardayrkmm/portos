interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  level?: 1 | 2;
}

export const SectionHeading = ({ title, subtitle, level = 2 }: SectionHeadingProps) => {
  const HeadingTag = level === 1 ? 'h1' : 'h2';
  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <HeadingTag style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</HeadingTag>
      {subtitle && <p style={{ color: 'var(--on-surface-variant, #666)' }}>{subtitle}</p>}
    </div>
  );
};
