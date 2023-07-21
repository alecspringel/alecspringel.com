import React from 'react';
import Navigation from '../sections/Navigation';
import SEO from '../sections/seo';
import Hero from '../sections/Hero';
import Footer from '../sections/Footer';
import '../index.css';
import '../fonts.css';
import '../devices.css';
import Skills from '../sections/Skills';
import Design from '../sections/Design';
// import Contact from '../sections/Contact';
// import Projects from '../sections/Projects';

export default function Home() {
  return (
    <>
      <SEO />
      <Navigation />
      <Hero />
      <Skills />
      <Design />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
