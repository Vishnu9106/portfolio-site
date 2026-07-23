import React from 'react';
import { useInView } from '../App';
import { SiLoom } from 'react-icons/si';
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';

const projects = [
  {
    level: 'Beginner',
    title: '1. Zero-Touch Lead Enrichment & ICP Filtering',
    image: project1Img,
    loomLink: 'https://www.loom.com/share/e681943da9224d63992018ce5fc90942',
    desc: 'A zero-touch data pipeline built in Clay that takes a raw list of target domains, standardizes company names via JavaScript, executes a multi-provider waterfall search (Apollo ➔ Dropcontact ➔ Hunter) to minimize API costs, and uses an LLM to segment leads based on strict ICP criteria.'
  },
  {
    level: 'Intermediate',
    title: '2. Instant Inbound Routing & Deduplication',
    image: project2Img,
    loomLink: 'https://www.loom.com/share/a23b2846c6d0471fa692e884cbbad198',
    desc: "An n8n workflow that connects inbound leads directly to an Apollo email campaign. It handles webhook routing to check if a contact already exists, creates a new record via API if they don't, and automatically enrolls them into a specific sales sequence without manual data entry."
  }
];

export default function GTMProjects() {
  const [ref1, visible1] = useInView();
  
  return (
    <section id="gtm-projects" className="section-dark">
      <div className="container">
        <div ref={ref1} className={`fade-up ${visible1 ? 'visible' : ''}`}>

          <h2 style={{ textAlign: 'center' }}>Go-To-Market Projects</h2>
          <p style={{ maxWidth: '650px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            High-level strategic initiatives orchestrating product launches, sales enablement, and market positioning across the entire customer lifecycle.
          </p>
        </div>

        <div className="grid-2">
          {projects.map((project, i) => (
            <div key={i} className="portfolio-card fade-up visible" style={{ transitionDelay: `${i * 0.1}s`, padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#ffffff', borderBottom: '1px solid var(--inv-border)' }}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <div style={{
                      background: 'var(--deep-dark-2)',
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--mid-gray)',
                      fontSize: '0.9rem'
                    }}>
                      [ Project Image Placeholder ]
                    </div>
                  )}
                </div>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  right: '2rem',
                  background: 'var(--accent)',
                  color: 'var(--white)',
                  padding: '0.4rem 1.25rem',
                  borderBottomLeftRadius: '8px',
                  borderBottomRightRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 4px 12px rgba(249, 115, 22, 0.3)'
                }}>
                  {project.level}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--white)' }}>{project.title}</h3>
                <p style={{ color: 'var(--mid-gray)', lineHeight: 1.6, flexGrow: 1 }}>{project.desc}</p>
                
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={project.loomLink || "#"} target={project.loomLink ? "_blank" : undefined} rel="noopener noreferrer" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', background: '#625DF5', color: 'var(--white)', border: '1px solid var(--accent)', boxShadow: '0 4px 14px rgba(98, 93, 245, 0.4)' }}>
                    <SiLoom size={16} /> Watch Loom Walkthrough
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}