import { SectionHeading } from '../components/common/SectionHeading';
import { ProjectCard } from '../components/ui/ProjectCard';
import { projects } from '../data/projects';
import { SEO } from '../components/common/SEO';

export const Projects = () => {
  return (
    <div>
      <SEO 
        title="Software Development Projects | Arda Yudrik Malana" 
        description="Explore my portfolio of software development projects including web and mobile applications."
        canonicalUrl="/projects" 
      />
      <SectionHeading title="All Projects" subtitle="A complete list of my works" level={1} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
