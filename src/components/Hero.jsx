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
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
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
                  zIndex: 2, // Sits above the text
                  userSelect: 'none',
                  WebkitUserDrag: 'none',
                  pointerEvents: 'none'
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




        </div>
      </div>

      {/* Creative Scroll Indicator: Traveling Dot */}
      <div 
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
          paddingBottom: '0rem'
        }}
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ 
          fontSize: '0.8rem', 
          fontWeight: 800, 
          letterSpacing: '0.25em', 
          textTransform: 'uppercase',
          color: 'var(--deep-dark)',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          marginBottom: '1.2rem',
          opacity: 1
        }}>
          Explore
        </span>
        <div style={{
          width: '2px',
          height: '70px',
          background: 'var(--light-gray)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            width: '100%',
            height: '30px',
            background: 'var(--accent)',
            animation: 'travelDown 1.8s cubic-bezier(0.77, 0, 0.175, 1) infinite'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
