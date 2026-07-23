import React, { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Home from './pages/Home';
import ProjectFlowDemo from './pages/ProjectFlowDemo';

/* ── Intersection Observer hook for scroll animations ── */
export function useInView(options = {}) {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

// A helper component to handle hash scrolling on page load
function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]);
  
  return null;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Helper for cross-page hash links. 
  // If we are on Home, we can just use href="#about".
  // If we are on Samples, we need to go to "/#about".
  const getHashLink = (hash) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="logo"></Link>
        <div className="nav-links">
          <Link to={getHashLink('#collaboration')}>How I Work</Link>
          <Link to={getHashLink('#gtm-projects')}>GTM Projects</Link>
          <Link to={getHashLink('#portfolio')}>Samples</Link>
          <Link to="/projectflow">ProjectFlow Demo</Link>
          <Link to={getHashLink('#toolkit')}>Tech Stack</Link>
          <Link to={getHashLink('#experience')}>Experience</Link>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', borderLeft: '1px solid var(--light-gray)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
            <a href="https://linkedin.com/in/vishnudass" target="_blank" rel="noreferrer" style={{ display: 'flex', color: 'var(--dark-gray)' }} title="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="mailto:contact@vishnudass.com" style={{ display: 'flex', color: 'var(--dark-gray)' }} title="Email">
              <Mail size={20} />
            </a>
            <Link to={getHashLink('#contact')} className="btn btn-dark" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projectflow" element={<ProjectFlowDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
