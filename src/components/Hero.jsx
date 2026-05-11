import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden min-h-screen flex flex-col items-start justify-center max-w-5xl mx-auto">
      <div className="scanline" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 relative z-20 w-full"
      >
        <p className="text-cyber-green font-mono mb-5 ml-1">
          Olá, meu nome é
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
          Maicon Mafra.
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6 tracking-tight leading-none">
          Eu protejo o mundo digital.
        </h2>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-12">
          Sou um pesquisador de segurança e estudante de cibersegurança apaixonado por hacking ético, segurança defensiva e construção de sistemas resilientes. Documentando minha jornada pelo complexo mundo da cibersegurança.
        </p>
        
        <a 
          href="#projects" 
          className="inline-block px-7 py-4 border border-cyber-green text-cyber-green font-mono rounded hover:bg-cyber-green/10 transition-colors"
        >
          Confira meus projetos!
        </a>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-green/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
