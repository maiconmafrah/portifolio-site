import React from 'react';
import { motion } from 'motion/react';
import Terminal from './Terminal';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="scanline" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-20"
      >
        <div className="inline-block px-3 py-1 mb-4 border border-cyber-green/30 bg-cyber-green/10 rounded-full">
          <span className="text-cyber-green font-mono text-xs uppercase tracking-[0.2em]">
            Security Researcher & Student
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-none">
          Maicon Mafra
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Securing the digital frontier. Passionate about ethical hacking, defensive security, and building resilient systems. 
          Documenting my journey through the complex world of cybersecurity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full max-w-4xl relative z-20"
      >
        <Terminal />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-green/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
