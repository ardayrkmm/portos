interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h2>
      {subtitle && <p style={{ color: '#666' }}>{subtitle}</p>}
    </div>
  );
};
