import React from 'react';
import { useInView } from '../App';

const Collaboration = () => {
  const [ref, visible] = useInView();

  return (
    <section id="collaboration" style={{ padding: '8rem 0', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <div ref={ref} className={`collab-creative-fold ${visible ? 'visible' : ''}`}>

          
          <div className="collab-typography">
            <h2 className="collab-statement">
              <span className="collab-dim">Great marketing</span> doesn't happen in silos.
            </h2>
            
            <p className="collab-paragraph">
              For 6 years, I've served as the <span className="collab-highlight">connective tissue</span> between Tech, Sales, and Marketing. 
              Whether it's building <span className="collab-highlight">Sales Enablement</span> catalogues, 
              designing <span className="collab-highlight">Competitive Decks</span>, or executing targeted <span className="collab-highlight">Account-Based Marketing</span> and <span className="collab-highlight">Webinar Outreach</span>, 
              I ensure our messaging resonates at every touchpoint of the buyer's journey.
            </p>
            {/* Enhanced Hub-and-Spoke Diagram */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px', aspectRatio: '1/1', margin: '3rem auto 1rem' }}>
              <style>{`
                @keyframes dash-flow { to { stroke-dashoffset: -24; } }
                @keyframes pulse-ring { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; } 50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0; } }
                @keyframes orbit-spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
                @keyframes hub-glow { 0%, 100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.3), 0 20px 60px rgba(249,115,22,0.15); } 50% { box-shadow: 0 0 0 20px rgba(249,115,22,0), 0 20px 60px rgba(249,115,22,0.25); } }
                @keyframes spoke-float-1 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-6px, -10px); } }
                @keyframes spoke-float-2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(8px, -8px); } }
                @keyframes spoke-float-3 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-4px, 12px); } }
                .spoke-line { stroke: rgba(249,115,22,0.4); stroke-width: 2.5; stroke-dasharray: 6 6; animation: dash-flow 1.2s linear infinite; }
                .spoke-node { transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease; cursor: default; }
              `}</style>

              <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'visible' }}>
                {/* Tech line */}
                <line x1="50%" y1="50%" x2="17%" y2="31%" className="spoke-line" />
                {/* Sales line */}
                <line x1="50%" y1="50%" x2="83%" y2="31%" className="spoke-line" style={{ animationDirection: 'reverse' }} />
                {/* Marketing line */}
                <line x1="50%" y1="50%" x2="50%" y2="88%" className="spoke-line" />
              </svg>

              {/* Orbital ring */}
              <div style={{
                position: 'absolute', left: '50%', top: '50%',
                width: '40%', height: '40%',
                border: '1px dashed rgba(249,115,22,0.15)',
                borderRadius: '50%',
                animation: 'orbit-spin 30s linear infinite',
                transform: 'translate(-50%, -50%)', zIndex: 1
              }} />

              {/* Pulse ring */}
              <div style={{
                position: 'absolute', left: '50%', top: '50%',
                width: '170px', height: '170px',
                border: '2px solid rgba(249,115,22,0.2)',
                borderRadius: '50%',
                animation: 'pulse-ring 3s ease-in-out infinite', zIndex: 1
              }} />

              {/* Central Hub */}
              <div style={{
                position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
                zIndex: 3, width: '160px', height: '160px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #F97316 0%, #EA580C 50%, #DC2626 100%)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                animation: 'hub-glow 3s ease-in-out infinite', color: '#fff'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>GTM</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.3rem', opacity: 0.85 }}>Engine</div>
              </div>

              {/* Spoke: Tech */}
              <div style={{ position: 'absolute', zIndex: 3, left: '17%', top: '31%', transform: 'translate(-50%, -50%)' }}>
                <div className="spoke-node" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  animation: 'spoke-float-1 6s ease-in-out infinite'
                }}>
                  <div style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                    color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.25rem' }}>Tech</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--mid-gray)', textAlign: 'center', maxWidth: '120px', lineHeight: 1.3 }}>Product & APIs</div>
                </div>
              </div>

              {/* Spoke: Sales */}
              <div style={{ position: 'absolute', zIndex: 3, left: '83%', top: '31%', transform: 'translate(-50%, -50%)' }}>
                <div className="spoke-node" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  animation: 'spoke-float-2 7s ease-in-out infinite'
                }}>
                  <div style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                    color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.25rem' }}>Sales</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--mid-gray)', textAlign: 'center', maxWidth: '120px', lineHeight: 1.3 }}>Pipeline & Revenue</div>
                </div>
              </div>

              {/* Spoke: Marketing */}
              <div style={{ position: 'absolute', zIndex: 3, left: '50%', top: '88%', transform: 'translate(-50%, -50%)' }}>
                <div className="spoke-node" style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
                  animation: 'spoke-float-3 5.5s ease-in-out infinite'
                }}>
                  <div style={{
                    width: '110px', height: '110px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E293B, #0F172A)',
                    color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, marginTop: '0.25rem' }}>Marketing</div>
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--mid-gray)', textAlign: 'center', maxWidth: '120px', lineHeight: 1.3 }}>Demand & Content</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaboration;
