import React, { useState } from 'react';
import { useInView } from '../App';
import { ChevronDown, ChevronUp, FileText, Megaphone, Users, Layout, Layers, Video, Target, Calendar } from 'lucide-react';

const sections = [
  {
    id: 'linkedin-carousels',
    icon: <Layers size={24} />,
    title: 'LinkedIn Carousels',
    desc: 'Engaging, swipeable content designed for social reach and thought leadership.',
    samples: [
      {
        title: 'HeadSpin Video Experience Metrics',
        url: 'https://drive.google.com/file/d/1vviALeWrqktbJoHA63acqDkY66bU0Tvv/view?usp=drive_link',
        desc: 'This carousel covers key performance indicators utilized by HeadSpin to help streaming platforms monitor and improve video quality.'
      },
      {
        title: 'Key Challenges in Banking App Testing',
        url: 'https://drive.google.com/file/d/1jbv9RsAjkpOTojKRWfKB0l0Ae6u4wMCc/view?usp=drive_link',
        desc: 'This carousel outlines the primary challenges encountered by QA teams when testing banking applications.'
      }
    ]
  },
  {
    id: 'landing-pages',
    icon: <Layout size={24} />,
    title: 'Landing Pages',
    desc: 'High-converting, technically accurate landing pages designed to drive product-led growth and capture enterprise leads.',
    samples: [
      {
        title: 'Waterfall UI',
        url: 'https://www.headspin.io/features/waterfall-ui',
        desc: 'Detailed feature page breaking down the Waterfall UI capabilities, highlighting performance testing visibility for engineering teams.'
      },
      {
        title: 'Global Device Infrastructure',
        url: 'https://www.headspin.io/global-device-infrastructure',
        desc: 'Infrastructure overview page explaining the scale and security of the global device cloud network to technical decision makers.'
      },
      {
        title: 'HeadSpin Test Execution Management (TEM)',
        url: 'https://www.headspin.io/tem',
        desc: 'HeadSpin TEM centralizes mobile test execution, allowing teams to upload apps and tests to a single platform and execute them directly from the cloud.'
      },
      {
        title: 'Deployment Models',
        url: 'https://www.headspin.io/solutions/deployment-models',
        desc: 'Technical solutions page comparing on-prem, cloud, and hybrid deployment models to assist in architectural decisions.'
      }
    ]
  },
  {
    id: 'content-strategy',
    icon: <Megaphone size={24} />,
    title: 'Blog Articles',
    desc: 'End-to-end messaging and content architectures. Comprehensive frameworks mapping content to every stage of the buyer\'s journey.',
    samples: [
      {
        title: 'Generative AI in Software Testing',
        url: 'https://www.headspin.io/blog/generative-ai-software-testing',
        desc: 'Strategic content on the intersection of Generative AI and modern software testing workflows.'
      },
      {
        title: 'GenAI & Performance Testing: Testing Real User Journeys',
        url: 'https://www.headspin.io/blog/genai-performance-testing-user-journeys',
        desc: 'Deep dive into performance testing user journeys utilizing GenAI methodologies.'
      },
      {
        title: 'Future of Game Testing: Trends, AI & Innovation',
        url: 'https://www.headspin.io/blog/future-of-game-testing',
        desc: 'Forward-looking strategy piece on the evolving landscape of game testing and quality assurance.'
      },
      {
        title: 'Maximizing Enterprise Testing ROI with CloudTest Pro',
        url: 'https://www.headspin.io/blog/enterprise-testing-roi-cloudtest-pro',
        desc: 'Business-focused content strategy calculating and presenting testing ROI for enterprise buyers.'
      },
      {
        title: "Appium 3: What's New, Key Changes, and Migration Guide",
        url: 'https://www.headspin.io/blog/appium-3-guide',
        desc: 'Comprehensive technical guide and strategy for adopting Appium 3 in automated testing.'
      },
      {
        title: 'Why Global Test Coverage Matters for Telcos Operating Across Regions',
        url: 'https://www.headspin.io/blog/global-test-coverage-telecom-operating-across-regions',
        desc: 'Strategic overview of establishing global test coverage for cross-region telecom operations.'
      }
    ]
  },
  {
    id: 'event-marketing',
    icon: <Calendar size={24} />,
    title: 'Event Marketing',
    desc: 'End-to-end event promotion, live coverage, and post-event engagement strategies driving booth traffic and brand awareness.',
    samples: [
      {
        title: 'MWC Barcelona 2025 Campaign',
        url: 'https://www.linkedin.com/posts/meet-headspin-at-mwc-barcelona-2025-ugcPost-7297559703750918144-DVU-/',
        desc: 'Pre-event promotional campaign driving meeting bookings and booth traffic for MWC.'
      },
      {
        title: 'FMAS 2026 (Finance Magnates Africa)',
        url: 'https://www.linkedin.com/posts/headspin_fmas2026-financemagnatesafrica-fintech-activity-7460603570220961792-fwSj/',
        desc: 'Targeted event marketing for the fintech sector in the African market.'
      },
      {
        title: 'StepIn Summit 2025 Coverage',
        url: 'https://www.linkedin.com/posts/headspin_stepinsummit2025-softwaretesting-qualityengineering-activity-7374303159034454016-8t9C/',
        desc: 'Live event coverage and engagement for software testing and quality engineering professionals.'
      },
      {
        title: 'HeadSpin ACE (AI Testing Event)',
        url: 'https://www.linkedin.com/posts/headspin_headspin-headspinace-aitesting-activity-7478103898348539904-JCYQ/',
        desc: 'Product marketing and event coverage focusing on AI in testing capabilities.'
      },
      {
        title: 'Event Marketing Resource 1',
        url: 'https://drive.google.com/file/d/1vI8twsQ47_oMj_t6rMO5wvIKZ23xSPJj/view?usp=drive_link',
        desc: 'Additional event marketing collateral and strategy document.'
      },
      {
        title: 'Event Marketing Resource 2',
        url: 'https://drive.google.com/file/d/122bBU9HPZ5GrD6VraBgcwVVWCPJevItZ/view?usp=drive_link',
        desc: 'Comprehensive event coverage and marketing execution breakdown.'
      }
    ]
  },
  {
    id: 'sales-enablement',
    icon: <Users size={24} />,
    title: 'Sales Enablement',
    desc: 'Playbooks and battlecards for revenue teams. Practical, fast-consumption assets empowering sales to win more enterprise deals.'
  },
  {
    id: 'case-studies',
    icon: <FileText size={24} />,
    title: 'Case Studies',
    desc: 'Deep-dive technical content that drives enterprise pipeline. This section features long-form assets that break down complex technical value propositions for a B2B audience.',
    samples: [
      {
        title: 'Enterprise Case Study 1',
        url: 'https://drive.google.com/file/d/1Io-OMWFHOABeShEa1GXg7_piFoUFTgB2/view?usp=drive_link',
        desc: 'In-depth case study demonstrating technical value, ROI, and enterprise impact.'
      },
      {
        title: 'Enterprise Case Study 2',
        url: 'https://drive.google.com/file/d/1ahxg0taprYRFApmptBFjoNLHpBDxz_K_/view?usp=drive_link',
        desc: 'Comprehensive technical overview highlighting key client solutions and outcomes.'
      },
      {
        title: 'Multi-Vendor Rental Marketplace Case Study',
        url: 'https://www.yo-rent.com/multi-vendor-rental-marketplace-case-study.html',
        desc: 'Detailed breakdown of a multi-vendor rental marketplace deployment, highlighting scale and efficiency.'
      },
      {
        title: 'Heavy Equipment Rental Marketplace Case Study',
        url: 'https://www.yo-rent.com/heavy-equipment-rental-marketplace-case-study.html',
        desc: 'In-depth analysis of a heavy equipment rental solution, outlining ROI and platform capabilities.'
      }
    ]
  }
];

const Portfolio = () => {
  const [ref, visible] = useInView();
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (id) => {
    if (expandedSection === id) {
      setExpandedSection(null);
    } else {
      setExpandedSection(id);
    }
  };

  return (
    <section id="portfolio" style={{ background: 'var(--off-white)', color: 'var(--deep-dark)' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>

          <h2 style={{ color: 'var(--deep-dark)' }}>Marketing Content Samples</h2>
          <p style={{ maxWidth: '650px', marginBottom: '3rem', color: 'var(--dark-gray)' }}>
            Explore my work across various content formats and marketing channels. 
            Click on any section to view the live projects.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {sections.map((section, index) => {
            const isExpanded = expandedSection === section.id;
            return (
              <div 
                key={section.id} 
                style={{
                  background: 'var(--white)',
                  borderRadius: '16px',
                  border: `1px solid ${isExpanded ? 'var(--accent)' : 'var(--light-gray)'}`,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  boxShadow: isExpanded ? '0 10px 30px rgba(249, 115, 22, 0.1)' : 'none'
                }}
              >
                <div 
                  onClick={() => toggleSection(section.id)}
                  style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                      display: 'flex', alignItems: 'center', justifyContent: 'center', 
                      width: '48px', height: '48px', borderRadius: '12px', 
                      background: isExpanded ? 'var(--accent)' : 'var(--accent-subtle)',
                      color: isExpanded ? 'var(--white)' : 'var(--accent)',
                      transition: 'all 0.3s ease'
                    }}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--deep-dark)' }}>{section.title}</h3>
                    </div>
                  </div>
                  <div style={{ color: isExpanded ? 'var(--accent)' : 'var(--mid-gray)', transition: 'transform 0.3s ease', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    <ChevronDown size={24} />
                  </div>
                </div>

                <div style={{ 
                  maxHeight: isExpanded ? '2000px' : '0', 
                  opacity: isExpanded ? 1 : 0,
                  transition: 'all 0.4s ease-in-out',
                  overflow: 'hidden'
                }}>
                  <div style={{ padding: '0 2rem 2rem 2rem' }}>
                    <p style={{ color: 'var(--dark-gray)', marginBottom: '2rem', fontSize: '0.95rem' }}>{section.desc}</p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                      {(section.samples || [1, 2, 3]).map((item, i) => (
                        section.samples ? (
                          <a key={i} href={item.url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                            <div style={{
                              background: 'var(--off-white)',
                              borderRadius: '12px',
                              padding: '1.5rem',
                              border: '1px solid var(--light-gray)',
                              display: 'flex',
                              flexDirection: 'column',
                              height: '100%',
                              transition: 'transform 0.2s ease, border-color 0.2s ease'
                            }}
                            onMouseEnter={e => {
                              e.currentTarget.style.transform = 'translateY(-3px)';
                              e.currentTarget.style.borderColor = 'var(--accent)';
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.transform = 'none';
                              e.currentTarget.style.borderColor = 'var(--light-gray)';
                            }}>
                              <h4 style={{ fontSize: '1.1rem', color: 'var(--deep-dark)', marginBottom: '0.5rem' }}>{item.title}</h4>
                              <p style={{ color: 'var(--mid-gray)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                                {item.desc}
                              </p>
                              <div style={{ marginTop: 'auto', paddingTop: '1rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                View Live <ChevronUp size={14} style={{ transform: 'rotate(90deg)' }} />
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div key={item} style={{
                            background: 'var(--off-white)',
                            borderRadius: '12px',
                            padding: '1.5rem',
                            border: '1px solid var(--light-gray)',
                            display: 'flex',
                            flexDirection: 'column'
                          }}>
                            <h4 style={{ fontSize: '1.1rem', color: 'var(--deep-dark)', marginBottom: '0.5rem' }}>Sample In Progress</h4>
                            <p style={{ color: 'var(--mid-gray)', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>
                              Check back soon for examples of {section.title.toLowerCase()}.
                            </p>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
