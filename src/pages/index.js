import React, { useEffect } from 'react';
import Navigation from '../sections/Navigation';
import SEO from '../sections/seo';
import Hero from '../sections/Hero';
import Footer from '../sections/Footer';
import '../index.css';
import '../fonts.css';
import '../devices.css';
import Skills from '../sections/Skills';
import Timeline from '../sections/Timeline';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

// Fades elements marked data-reveal up into place the first time they scroll into view.
// Skipped entirely for reduced-motion users; content stays visible without JS.
const useReveal = () => {
  useEffect(() => {
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || typeof IntersectionObserver === 'undefined') return undefined;
    const root = document.documentElement;
    root.classList.add('reveal-ready');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);
};

export default function Home() {
  useReveal();
  return (
    <>
      <SEO />
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation />
      <main id="main">
        <Hero />
        <Skills />
        <Timeline />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
