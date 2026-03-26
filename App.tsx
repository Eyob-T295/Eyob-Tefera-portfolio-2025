import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import ExperienceTimeline from './components/ExperienceTimeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';
import StatusBar from './components/StatusBar';

const App: React.FC = () => {
  return (
    <>
      <CursorSpotlight />
      <StatusBar />
      <div className="aurora-bg"></div>
      <Header />
      <main className="relative z-10 container mx-auto px-6 sm:px-10 md:px-20">
        <Hero />
        <About />
        <Stats />
        <ExperienceTimeline />
        <Projects />
        <Skills />
        <Awards />
        <Certifications />
        <Contact />
      </main>
    </>
  );
};

export default App;