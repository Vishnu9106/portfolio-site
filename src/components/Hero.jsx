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
        paddingBottom: '12vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }} ref={ref}>
        <div className={`hero-content ${visible ? 'hero-visible' : ''}`} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>

          {/* Name with editorial overlapping layout (no hover) */}
          <h1 className="hero-name" style={{ justifyContent: 'center', display: 'flex' }}>
            <span className="hero-name-line" style={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <span className="hero-name-word" style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #F43F5E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                position: 'relative',
                zIndex: 1
              }}>Vishnu</span>
              <img 
                src={heroImage} 
                alt="Vishnu" 
                style={{ 
                  height: '1.15em', 
                  width: '1.15em', 
                  borderRadius: '50%', 
                  objectFit: 'cover', 
                  margin: '0 0.05em', // Keeps it snug without hiding the letters
                  transform: 'translateY(0.08em) rotate(-4deg)', // Slight playful tilt
                  boxShadow: '0 15px 35px rgba(249, 115, 22, 0.25)',
                  border: '4px solid var(--white)',
                  position: 'relative',
                  zIndex: 2 // Sits above the text
                }} 
              />
              <span className="hero-name-word" style={{ 
                color: 'var(--deep-dark)',
                position: 'relative',
                zIndex: 1
              }}>Dass</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle" style={{ margin: '2rem auto', textAlign: 'center', maxWidth: '650px', lineHeight: '1.7', color: 'var(--dark-gray)' }}>
            <strong>Always learning.</strong> A GTM engineer with an unfair marketing advantage. I have around 5 years of experience in content marketing. My expertise lies in building product messaging, creating marketing content, and tracking its performance. These days I am experimenting with building GTM systems that turn manual, repetitive work into automated pipelines.
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

      {/* Scroll down indicator */}
      <div 
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: 'var(--deep-dark)',
          cursor: 'pointer',
          padding: '0.75rem 1.25rem',
          borderRadius: '100px',
          background: 'var(--white)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
          border: '1px solid var(--light-gray)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(6px)';
          e.currentTarget.style.boxShadow = '0 12px 32px rgba(249,115,22,0.15)';
          e.currentTarget.style.borderColor = 'var(--accent-border)';
          e.currentTarget.style.color = 'var(--accent)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
          e.currentTarget.style.borderColor = 'var(--light-gray)';
          e.currentTarget.style.color = 'var(--deep-dark)';
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Scroll</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
};

export default Hero;
