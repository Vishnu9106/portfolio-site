import React from 'react';
import Hero from '../components/Hero';
import GTMProjects from '../components/GTMProjects';
import Collaboration from '../components/Collaboration';
import Portfolio from '../components/Portfolio';
import Timeline from '../components/Timeline';
import Toolkit from '../components/Toolkit';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Collaboration />
      <GTMProjects />
      <Portfolio />
      <Toolkit />
      <Timeline />
      <Contact />
    </main>
  );
}
