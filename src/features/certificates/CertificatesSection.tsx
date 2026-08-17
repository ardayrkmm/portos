import { SectionHeading } from '../../components/common/SectionHeading';
import { CertificateCard } from '../../components/ui/CertificateCard';
import { certificates } from '../../data/certificates';

export const CertificatesSection = () => {
  return (
    <section id="certificates" style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
      <SectionHeading title="Certificates" subtitle="My professional certifications" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certificates.map(cert => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
};
