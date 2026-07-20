import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import heroImage from '../assets/hero.jpg';
import { useInView } from '../App';

const Hero = () => {
  const [ref, visible] = useInView();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouse);
    return () => el && el.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <section
      ref={heroRef}
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
      {/* Animated mesh gradient background */}
      <div className="hero-gradient-mesh">
        <div
          className="hero-orb hero-orb-1"
          style={{
            transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.02}px)`,
          }}
        />
        <div
          className="hero-orb hero-orb-2"
          style={{
            transform: `translate(${-mousePos.x * 0.02}px, ${mousePos.y * 0.03}px)`,
          }}
        />
        <div
          className="hero-orb hero-orb-3"
          style={{
            transform: `translate(${mousePos.x * 0.015}px, ${-mousePos.y * 0.02}px)`,
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="hero-grid-overlay" />

      {/* Interactive Spotlight */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle 800px at ${mousePos.x}% ${mousePos.y}%, rgba(249, 115, 22, 0.04), transparent 70%)`,
          zIndex: 1,
          pointerEvents: 'none',
          transition: 'background 0.2s ease-out'
        }}
      />

      {/* Noise texture */}
      <div className="hero-noise" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }} ref={ref}>
        <div className={`hero-grid ${visible ? 'hero-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="hero-content">


          {/* Name with staggered animation */}
          <h1 className="hero-name">
            <span className="hero-name-line">
              <span className="hero-name-word" style={{
                background: 'linear-gradient(135deg, var(--accent) 0%, #F43F5E 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>Vishnu</span>{' '}
              <span className="hero-name-word hero-name-outline">Dass</span>
              <span className="hero-name-word hero-name-dot">.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="hero-subtitle">
            <strong style={{ color: 'var(--deep-dark)' }}>GTM Engineer</strong> with an unfair marketing advantage.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-dark btn-glow">
              Let's Connect <ArrowDown size={18} />
            </a>
            <a href="#" className="btn btn-outline-dark">
              <Download size={18} /> Download CV
            </a>
          </div>
        </div>
          
        {/* Picture */}
          <div className="hero-image-wrapper" style={{ 
            position: 'relative', 
            maxWidth: '380px', 
            marginLeft: 'auto', 
            marginRight: '0', 
            width: '100%',
            transform: `perspective(1000px) rotateX(${(50 - mousePos.y) * 0.15}deg) rotateY(${(mousePos.x - 50) * 0.15}deg)`,
            transition: 'transform 0.1s ease-out'
          }}>
            <img 
              src={heroImage} 
              alt="Vishnu Dass" 
              style={{ 
                width: '100%', 
                aspectRatio: '4/5', 
                objectFit: 'cover',
                borderRadius: '24px', 
                display: 'block',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 0.8s var(--ease-out)',
                transitionDelay: '0.4s',
                boxShadow: '0 30px 60px rgba(249, 115, 22, 0.15)'
              }} 
            />



            {/* Decorative background block behind the photo */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, var(--accent) 0%, #F43F5E 100%)',
              borderRadius: '24px',
              transform: 'translate(20px, 20px)',
              zIndex: -1,
              opacity: 0.15
            }}></div>
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
