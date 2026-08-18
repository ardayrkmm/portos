import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { PageLayout } from './components/layout/PageLayout';
import { AnimatedPage } from './components/layout/AnimatedPage';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Certificates } from './pages/Certificates';
import { NotFound } from './pages/NotFound';

function App() {
  const location = useLocation();

  return (
    <PageLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><Projects /></AnimatedPage>} />
          <Route path="/projects/:slug" element={<AnimatedPage><ProjectDetail /></AnimatedPage>} />
          <Route path="/certificates" element={<AnimatedPage><Certificates /></AnimatedPage>} />
          <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </PageLayout>
  );
}

export default App;
