import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import { useInView } from '../App';

const Hero = () => {
  const [ref, visible] = useInView();

  return (
    <section
      className="hero-section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }} ref={ref}>
        <div className={`hero-content ${visible ? 'hero-visible' : ''}`} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

          {/* Name with staggered animation */}
          <h1 className="hero-name" style={{ justifyContent: 'center', display: 'flex' }}>
            <span className="hero-name-line" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap' }}>
              <span className="hero-name-word" style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #F43F5E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Vishnu</span>
              <img 
                src={heroImage} 
                alt="Vishnu" 
                style={{ 
                  height: '0.9em', 
                  width: '0.9em', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  margin: '0 0.15em',
                  transform: 'translateY(0.05em)',
                  boxShadow: '0 8px 24px rgba(249, 115, 22, 0.2)'
                }} 
              />
              <span className="hero-name-word hero-name-outline">Dass</span>
              <span className="hero-name-word hero-name-dot">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" style={{ justifyContent: 'center', margin: '2rem auto', textAlign: 'center', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <strong style={{ color: 'var(--deep-dark)' }}>GTM Engineer</strong> with an unfair marketing advantage.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '3rem' }}>
            <a href="#contact" className="btn btn-dark btn-glow">
              Let's Connect <ArrowDown size={18} />
            </a>
            <a href="#" className="btn btn-outline-dark">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-indicator-line" />
      </div>
    </section>
  );
};

export default Hero;
