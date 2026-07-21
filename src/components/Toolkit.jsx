import React from 'react';
import { useInView } from '../App';
import { Database, Target, Search, Mail, Bot, BrainCircuit, Network, Webhook } from 'lucide-react';
import { SiApollographql, SiN8N, SiHubspot, SiJavascript, SiJson, SiReact } from 'react-icons/si';

const tools = [
  { name: 'Apollo.io', icon: <SiApollographql size={22} color="#FF5A5F" /> },
  { name: 'n8n', icon: <SiN8N size={22} color="#EA4335" /> },
  { name: 'HubSpot', icon: <SiHubspot size={22} color="#FF7A59" /> },
  { name: 'Anthropic (Claude)', icon: <BrainCircuit size={22} color="#D97757" /> },
  { name: 'Webhooks', icon: <Webhook size={22} color="#5C2D91" /> },
  { name: 'REST APIs', icon: <Network size={22} color="#00A2D0" /> },
  { name: 'JSON', icon: <SiJson size={22} color="#000000" /> },
  { name: 'JavaScript', icon: <SiJavascript size={22} color="#F7DF1E" /> },
  { name: 'React', icon: <SiReact size={22} color="#61DAFB" /> }
];

const Toolkit = () => {
  const [ref, visible] = useInView();

  return (
    <section id="toolkit" style={{ padding: '4rem 0 8rem 0', background: 'var(--off-white)', position: 'relative' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>

          
          <h2 style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--deep-dark)', fontWeight: 600, letterSpacing: '-0.02em' }}>
            My Tech Stack
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {tools.map((tool, idx) => (
              <div key={idx} style={{
                background: 'var(--white)',
                border: '1px solid var(--light-gray)',
                borderRadius: '50px',
                padding: '0.75rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'default',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = 'var(--accent)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                e.currentTarget.style.borderColor = 'var(--light-gray)';
              }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {tool.icon}
                </div>
                <span style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--deep-dark)', whiteSpace: 'nowrap' }}>
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Toolkit;

