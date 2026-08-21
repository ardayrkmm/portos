import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';

export const NotFound = () => {

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <SEO title="404 Not Found | Arda Yudrik Malana" />
      <h1 style={{ fontSize: '4rem', margin: '0 0 1rem 0' }}>404</h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>Page not found</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        Go Back Home
      </Link>
    </div>
  );
};
