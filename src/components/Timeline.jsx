import React, { useEffect, useRef } from 'react';
import { useInView } from '../App';

const milestones = [
  {
    year: 'Apr 2022 - Feb 2023',
    company: 'AblySoft',
    role: 'Technical Content Writer',
    highlight: 'Produced blogs, eBooks, and HTML mailers while authoring end-user technical content and onboarding materials.',
    color: '#F43F5E', // Rose
  },
  {
    year: 'Feb 2023 - Mar 2024',
    company: 'Grazitti Interactive',
    role: 'Content Writer',
    highlight: 'Wrote marketing collateral for Salesforce products, moderated global communities, and broke down complex technical information.',
    color: '#EAB308', // Yellow
  },
  {
    year: 'Apr 2024 - Nov 2024',
    company: 'OpsTree Solutions',
    role: 'Technical Content Writer',
    highlight: 'Developed content strategies aligned with marketing goals, highlighting DevOps best practices across blogs and whitepapers.',
    color: '#0EA5E9', // Sky Blue
  },
  {
    year: 'Dec 2024 - Present',
    company: 'HeadSpin',
    role: 'Technical Content Writer',
    highlight: 'Writing marketing-led technical blogs and product microcopy that position testing offerings around real customer problems.',
    color: '#F97316', // Orange
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
