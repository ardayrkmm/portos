import type { Certificate } from '../../data/certificates';

interface CertificateCardProps {
  certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem' }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{certificate.title}</h3>
      <p style={{ margin: '0 0 0.2rem 0', fontWeight: 'bold' }}>{certificate.issuer}</p>
      <p style={{ color: '#777', fontSize: '0.9rem', margin: 0 }}>{certificate.date}</p>
    </div>
  );
};
