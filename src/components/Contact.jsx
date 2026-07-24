import React from 'react';
import { useInView } from '../App';
import { Mail, Download } from 'lucide-react';

const Contact = () => {
  const [ref, visible] = useInView();

  return (
    <section id="contact" className="section-dark" style={{ padding: '6rem 0 2rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
          
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', marginBottom: '2.5rem', color: 'var(--white)' }}>
            Let's connect.
          </h2>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a href="mailto:creativevishnu1999@gmail.com" className="btn btn-white btn-glow">
              <Mail size={18} style={{ marginRight: '8px' }} />
              Gmail
            </a>
            <a href="https://www.linkedin.com/in/vishnudass1/" target="_blank" rel="noreferrer" className="btn btn-outline-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              LinkedIn
            </a>
            <a href="/Vishnu_Dass_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white">
              <Download size={18} style={{ marginRight: '8px' }} /> Resume / CV
            </a>
          </div>

        </div>


      </div>
    </section>
  );
};

export default Contact;
