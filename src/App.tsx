/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cyber-dark selection:bg-cyber-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}
