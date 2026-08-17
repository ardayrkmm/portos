import { HeroSection } from '../features/hero/HeroSection';
import { AboutSection } from '../features/about/AboutSection';
import { SkillsSection } from '../features/skills/SkillsSection';
import { ProjectsSection } from '../features/projects/ProjectsSection';
import { ExperienceSection } from '../features/experience/ExperienceSection';
import { ServicesSection } from '../features/services/ServicesSection';
import { ProcessSection } from '../features/services/ProcessSection';
import { ContactSection } from '../features/contact/ContactSection';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProcessSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

