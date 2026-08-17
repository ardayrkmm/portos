import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem', marginBottom: '1rem', display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ margin: '0 0 0.5rem 0' }}>{project.title}</h3>
      <p style={{ color: '#555', flex: 1 }}>{project.description}</p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
        {project.technologies.map(tech => (
          <span key={tech} style={{ fontSize: '0.8rem', backgroundColor: '#f0f0f0', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
            {tech}
          </span>
        ))}
      </div>
      <Link to={`/projects/${project.slug}`} style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
        View Details &rarr;
      </Link>
    </div>
  );
};
