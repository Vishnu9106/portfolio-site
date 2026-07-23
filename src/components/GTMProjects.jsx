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
    desc: 'A zero-touch data pipeline built in Clay that takes a raw list of target companies, standardizes company names, and uses an AI research agent (Claygent) to find real decision-makers rather than fabricating contacts. It runs a multi-provider email waterfall (Apollo → Dropcontact → Hunter) to minimize wasted API costs, then uses an LLM to score each lead against strict ICP criteria before syncing qualified leads to HubSpot.'
  },
  {
    level: 'Intermediate',
    title: '2. Automated Lead Pipeline With n8n, Apollo, and Slack',
    image: project2Img,
    loomLink: 'https://www.loom.com/share/a23b2846c6d0471fa692e884cbbad198',
    desc: "An n8n workflow that turns inbound demo requests into instant, deduplicated CRM action. It checks Apollo for an existing lead using an exact email match, creates and enrolls only genuinely new leads in an outreach sequence, and notifies sales in Slack either way, so no lead, new or returning, falls through the cracks."
  },
  {
    level: 'Advanced',
    inProgress: true,
    title: '3. Usage-Based Revenue Signal Pipeline',
    image: project3Img,
    desc: 'A Python-based pipeline that will detect product usage milestones (like hitting a free-tier limit), search Apollo for senior decision-makers at that company, draft a personalized outreach email using AI based on the actual usage signal, and queue the lead in HubSpot for sales follow-up.'
  },
  {
    level: 'Advanced',
    inProgress: true,
    title: '4. GTM Spend & Revenue Tracker',
    image: project4Img,
    desc: 'A SQL and BigQuery pipeline that will sync ad spend and CRM data into a central dashboard, showing return on investment by campaign, so marketing spend can be tied directly to pipeline results instead of tracked in disconnected spreadsheets.'
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
                
                {project.loomLink ? (
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href={project.loomLink} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem', background: '#625DF5', color: 'var(--white)', border: '1px solid var(--accent)', boxShadow: '0 4px 14px rgba(98, 93, 245, 0.4)' }}>
                      <SiLoom size={16} /> Watch Loom Walkthrough
                    </a>
                  </div>
                ) : (
                  project.inProgress && (
                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', background: 'rgba(255,255,255,0.05)', color: 'var(--mid-gray)', border: '1px dashed rgba(255,255,255,0.2)', borderRadius: '4px' }}>
                        🚧 Build In Progress
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}