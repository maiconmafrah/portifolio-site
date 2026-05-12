import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyber-green/5 rounded-full blur-[120px] -z-10" />
      <div className="scanline" />
      
      <div className="w-full max-w-5xl mx-auto px-4 pt-32 pb-20 z-10 flex flex-col items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 relative w-full"
        >
        <p className="text-cyber-green font-mono mb-5 ml-1">
          Olá, meu nome é
        </p>
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4 tracking-tight leading-none">
          Maicon Mafra.
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-400 mb-6 tracking-tight leading-none">
          Especialista em infraestrutura segura e monitoramento de ameaças.
        </h2>
        <p className="text-gray-400 max-w-xl text-lg leading-relaxed mb-12">
          Analista de infraestrutura com foco em segurança defensiva e resiliência de sistemas. Especializado na administração de servidores Linux e na implementação de soluções de monitoramento SIEM, transformo laboratórios técnicos em documentação prática sobre proteção de redes e resposta a incidentes.
        </p>
        
        <a 
          href="#projects" 
          className="inline-block px-7 py-4 border border-cyber-green text-cyber-green font-mono rounded hover:bg-cyber-green/10 transition-colors"
        >
          Confira meus projetos!
        </a>
        </motion.div>
      </div>
    </section>
  );
}
