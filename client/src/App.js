import React, { Suspense, useContext, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { AppContext } from './context/AppContext';
import { GlobalStyles } from './styles/GlobalStyles';
import { Helmet } from 'react-helmet';

// Common components
import Spinner from './components/common/Spinner';
import ErrorMessage from './components/common/ErrorMessage';

// Lazy-loaded components
const Navbar = React.lazy(() => import('./components/Navbar'));
const Hero = React.lazy(() => import('./components/Hero'));
const About = React.lazy(() => import('./components/About'));
const Skills = React.lazy(() => import('./components/Skills')); // Import Skills component
const Experience = React.lazy(() => import('./components/Experience'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));
const ProjectDetailModal = React.lazy(() => import('./components/ProjectDetailModal'));

const App = () => {
  const { theme, projects, skills, loading, error, setProjects, setSkills, setLoading, setError } = useContext(AppContext);

  // Fetch data from the backend on initial load
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        
        // Fetch both projects and skills
        const [projectsRes, skillsRes] = await Promise.all([
          fetch(`${apiUrl}/api/projects`),
          fetch(`${apiUrl}/api/skills`)
        ]);

        if (!projectsRes.ok || !skillsRes.ok) {
          throw new Error('Network response was not ok');
        }

        const projectsData = await projectsRes.json();
        const skillsData = await skillsRes.json();
        
        setProjects(projectsData);
        setSkills(skillsData);

      } catch (err) {
        setError(err.message || 'Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this runs only once

  const currentTheme = theme === 'light' ? 
    { // Light Theme
      background: '#f8f9fa',
      text: '#0f172a',
      accent: '#facc15',
      cardBg: '#ffffff',
      navBg: 'rgba(248, 249, 250, 0.8)'
    } : 
    { // Dark Theme
      background: '#0f172a',
      text: '#f8f9fa',
      accent: '#facc15',
      cardBg: '#1e293b',
      navBg: 'rgba(15, 23, 42, 0.8)'
    };

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Helmet>
        <title>Mubarak Shaik | Portfolio</title>
        <meta name="description" content="The personal portfolio of Mubarak Shaik, a passionate MERN Full-Stack Developer." />
      </Helmet>
      
      <Suspense fallback={<Spinner />}>
        <Navbar />
        {loading && <Spinner />}
        {error && <ErrorMessage message={error} />}
        {projects && skills && ( // Ensure both projects and skills are loaded
          <main>
            <Hero />
            <About />
            <Skills /> {/* Add the new Skills component here */}
            <Experience />
            <Contact />
          </main>
        )}
        <Footer />
        <ProjectDetailModal />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
