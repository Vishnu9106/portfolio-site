import React from 'react';
import { useInView } from '../App';
import { Database, Target, Search, Mail, Bot, BrainCircuit, Network, Webhook } from 'lucide-react';
import { SiApollographql, SiMake, SiN8N, SiHubspot, SiPython, SiJavascript, SiSupabase, SiJson } from 'react-icons/si';

const tools = [
  { name: 'Clay', icon: <Database size={22} color="#000000" /> },
  { name: 'Apollo.io', icon: <SiApollographql size={22} color="#FF5A5F" /> },
  { name: 'Dropcontact / Hunter.io', icon: <Target size={22} color="#FF4500" /> },
  { name: 'ZoomInfo API', icon: <Search size={22} color="#1F82C0" /> },
  { name: 'Make.com', icon: <SiMake size={22} color="#7E3AF2" /> },
  { name: 'n8n', icon: <SiN8N size={22} color="#EA4335" /> },
  { name: 'HubSpot', icon: <SiHubspot size={22} color="#FF7A59" /> },
  { name: 'Outreach / Reply.io', icon: <Mail size={22} color="#2A73B6" /> },
  { name: 'OpenAI API', icon: <Bot size={22} color="#10A37F" /> },
  { name: 'Anthropic (Claude)', icon: <BrainCircuit size={22} color="#D97757" /> },
  { name: 'Python', icon: <SiPython size={22} color="#3776AB" /> },
  { name: 'JavaScript', icon: <SiJavascript size={22} color="#F7DF1E" /> },
  { name: 'SQL', icon: <Database size={22} color="#4479A1" /> },
  { name: 'Supabase (PostgreSQL)', icon: <SiSupabase size={22} color="#3ECF8E" /> },
  { name: 'REST APIs', icon: <Network size={22} color="#00A2D0" /> },
  { name: 'Webhooks', icon: <Webhook size={22} color="#5C2D91" /> },
  { name: 'JSON', icon: <SiJson size={22} color="#000000" /> }
];

const Toolkit = () => {
  const [ref, visible] = useInView();

  return (
    <section id="toolkit" style={{ padding: '8rem 0', background: 'var(--off-white)', position: 'relative' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>

          
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '4rem', color: 'var(--deep-dark)', fontWeight: 800, letterSpacing: '-0.02em' }}>
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

