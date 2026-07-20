import React, { useEffect, useRef } from 'react';
import { useInView } from '../App';

const milestones = [
  {
    year: '2018',
    company: 'AblySoft',
    role: 'Content & Marketing Associate',
    highlight: 'Started the journey — learned how enterprise SaaS is positioned, messaged, and sold from the ground up.',
    color: '#F43F5E', // Rose
    initial: 'A'
  },
  {
    year: '2020',
    company: 'Grazitti Interactive',
    role: 'Content Marketing Specialist',
    highlight: 'Built the content engine from scratch — scaled blogs, ebooks, whitepapers, and customer case studies.',
    color: '#EAB308', // Yellow
    initial: 'G'
  },
  {
    year: '2022',
    company: 'BuildPiper',
    role: 'Senior Content Marketing Specialist',
    highlight: 'Led C-suite presentations, high-stakes enterprise case studies, and cross-functional sales enablement assets.',
    color: '#0EA5E9', // Sky Blue
    initial: 'B'
  },
  {
    year: '2024',
    company: 'HeadSpin',
    role: 'GTM & RevOps',
    highlight: 'Taking 6 years of cross-functional expertise into a founding GTM role to build the revenue engine.',
    color: '#F97316', // Orange
    initial: 'H',
    current: true,
  },
];

const Timeline = () => {
  const [ref, visible] = useInView();
  const lineRef = useRef(null);

  // Scroll effect for the glowing line
  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far down the line we have scrolled
      let progress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        progress = ((windowHeight - rect.top) / (rect.height + windowHeight * 0.5)) * 100;
      }
      
      progress = Math.max(0, Math.min(100, progress));
      lineRef.current.style.setProperty('--progress', `${progress}%`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="experience" className="section-dark" style={{ padding: '8rem 0' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '6rem' }}>

          <h2>My 6-Year Journey</h2>
        </div>

        <div className="horizontal-timeline">
          {/* Continuous connecting line */}
          <div className="horizontal-timeline-line"></div>

          {milestones.map((m, i) => (
            <div key={i} className={`horizontal-node fade-up ${visible ? 'visible' : ''}`} style={{ transitionDelay: `${i * 150}ms` }}>
              
              {/* Connection Dot */}
              <div className="horizontal-node-marker-container">
                <div className="horizontal-node-marker" style={{ borderColor: m.color, boxShadow: m.current ? `0 0 15px ${m.color}` : 'none' }}></div>
              </div>

              <div className="horizontal-node-year" style={{ color: m.color }}>{m.year}</div>
              <div className="horizontal-node-card" style={{ borderTop: `2px solid ${m.color}`, boxShadow: m.current ? `0 -2px 20px rgba(249, 115, 22, 0.15)` : 'none' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    width: '38px', height: '38px', minWidth: '38px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.1rem', fontWeight: 700, color: 'var(--white)', border: '1px solid rgba(255,255,255,0.12)'
                  }}>
                    {m.initial}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.2rem', fontSize: '1.15rem', lineHeight: '1.2', color: 'var(--white)' }}>{m.role}</h3>
                    <div style={{ fontSize: '0.85rem', color: m.color, fontWeight: 600, letterSpacing: '0.02em' }}>{m.company}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--mid-gray)', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>{m.highlight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
