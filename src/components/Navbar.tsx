import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/90 backdrop-blur-md shadow-lg shadow-cyber-dark/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-cyber-green font-mono font-bold text-2xl tracking-tighter">
              M
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <NavLink href="#about" num="01." label="Sobre" />
              <NavLink href="#skills" num="02." label="Habilidades" />
              <NavLink href="#projects" num="03." label="Projetos" />
              <NavLink href="#certs" num="04." label="Certificações" />
            </div>
            <a 
              href="#" 
              className="px-4 py-2 border border-cyber-green text-cyber-green font-mono text-sm rounded hover:bg-cyber-green/10 transition-colors"
            >
              Currículo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, num, label }: { href: string; num: string; label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-1 text-gray-300 hover:text-cyber-green transition-colors font-mono text-sm"
    >
      <span className="text-cyber-green">{num}</span>
      {label}
    </a>
  );
}
