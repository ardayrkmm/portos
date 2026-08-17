import { SectionHeading } from '../components/common/SectionHeading';
import { CertificateCard } from '../components/ui/CertificateCard';
import { certificates } from '../data/certificates';

export const Certificates = () => {
  return (
    <div>
      <SectionHeading title="All Certificates" subtitle="A complete list of my certifications" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certificates.map(cert => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
};
