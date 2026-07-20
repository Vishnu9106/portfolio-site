import React from 'react';
import { useInView } from '../App';
import { BarChart3, Workflow, Cpu } from 'lucide-react';

const reasons = [
  {
    icon: <BarChart3 size={24} />,
    title: 'Executive Data Storytelling',
    desc: 'Years of building C-suite presentations taught me how to distill complex data into clear, decisive narratives — the exact skill RevOps demands when presenting pipeline reviews and forecasts.',
  },
  {
    icon: <Workflow size={24} />,
    title: 'Ready to Own the Funnel',
    desc: 'Having supported sales teams with enablement assets for years, I understand the buyer journey from top to bottom. I\'m ready to own the outbound motion, pipeline, and deal progression — not just support it.',
  },
  {
    icon: <Cpu size={24} />,
    title: 'Systematic & AI-Driven',
    desc: 'I\'m wired to build systems. Combined with an AI-first approach to workflows, I bring the mindset to automate, scale, and do the work of a much larger team.',
  },
];

const Transition = () => {
  const [ref, visible] = useInView();

  return (
    <section id="transition" style={{ borderTop: '1px solid var(--light-gray)' }}>
      <div className="container">
        <div ref={ref} className={`fade-up ${visible ? 'visible' : ''}`}>
          <div className="section-label">
            <span className="dot"></span>
            The Pivot
          </div>
          <h2>Why GTM & RevOps?</h2>
          <p style={{ maxWidth: '600px', marginBottom: '3rem' }}>
            My experience isn't just about writing. It's about understanding the mechanics of how enterprise software is bought and sold — and I'm ready to move from supporting revenue to driving it.
          </p>
        </div>

        <div className="grid-3">
          {reasons.map((reason, i) => (
            <div key={i} className="card" style={{ padding: '2.25rem' }}>
              <div className="icon-box icon-box-light">
                {reason.icon}
              </div>
              <h3>{reason.title}</h3>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transition;
