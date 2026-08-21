import { SectionHeading } from '../components/common/SectionHeading';
import { CertificateCard } from '../components/ui/CertificateCard';
import { certificates } from '../data/certificates';
import { SEO } from '../components/common/SEO';

export const Certificates = () => {
  return (
    <div>
      <SEO 
        title="Certifications | Arda Yudrik Malana" 
        description="View professional certifications and qualifications achieved by Arda Yudrik Malana."
        canonicalUrl="/certificates" 
      />
      <SectionHeading title="All Certificates" subtitle="A complete list of my certifications" level={1} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {certificates.map(cert => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </div>
  );
};
