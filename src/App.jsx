/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

export default function App() {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest('a');
      
      // Check if it's an anchor link pointing to an ID on the same page
      if (anchor && anchor.hash && anchor.hash.startsWith('#') && anchor.pathname === window.location.pathname) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const startPosition = window.scrollY;
          // Subtract 80px to account for the fixed navbar height
          const distance = targetPosition - startPosition - 80;
          // Duration in milliseconds (1600ms = 1.6s for a balanced scroll)
          const duration = 1600;
          let start = null;

          const animation = (currentTime) => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            
            // Easing function: easeInOutQuart (starts slow, speeds up, ends slow)
            const ease = progress < 0.5 
              ? 8 * progress * progress * progress * progress 
              : 1 - Math.pow(-2 * progress + 2, 4) / 2;

            window.scrollTo(0, startPosition + distance * ease);

            if (timeElapsed < duration) {
              requestAnimationFrame(animation);
            } else {
              // Update the URL hash without jumping
              window.history.pushState(null, '', anchor.hash);
            }
          };

          requestAnimationFrame(animation);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark selection:bg-cyber-green selection:text-[#0a192f] relative">
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
