import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeftSocials from './components/LeftSocials';
import RightEmail from './components/RightEmail';
import Cursor from './components/Cursor';

const App: React.FC = () => {
  return (
    <>
      <div className="aurora-bg"></div>
      <Cursor />
      <Header />
      <LeftSocials />
      <RightEmail />
      <main className="relative z-10 container mx-auto px-6 sm:px-10 md:px-20">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;