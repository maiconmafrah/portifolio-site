import React, { useState } from 'react';
import { motion } from 'motion/react';

const EXPERIENCES = [
  {
    company: 'Laboratório Pessoal',
    role: 'Pesquisador de Segurança',
    period: '2023 - Presente',
    tasks: [
      'Configuração e manutenção de ambientes vulneráveis (Metasploitable, DVWA) para prática de exploração.',
      'Análise de tráfego de rede utilizando Wireshark para identificar padrões maliciosos.',
      'Desenvolvimento de scripts em Python para automação de tarefas de reconhecimento e varredura.',
      'Participação ativa em plataformas de CTF como Hack The Box e TryHackMe.'
    ]
  },
  {
    company: 'Projetos Acadêmicos',
    role: 'Estudante de Cibersegurança',
    period: '2022 - 2023',
    tasks: [
      'Estudo aprofundado sobre fundamentos de redes, sistemas operacionais e criptografia.',
      'Implementação de políticas de segurança e hardening em servidores Linux.',
      'Pesquisa sobre as principais vulnerabilidades web (OWASP Top 10) e métodos de mitigação.'
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-24 px-4 max-w-3xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">02.</span> Onde Estudei / Pratiquei
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-cyber-border min-w-[150px]">
          {EXPERIENCES.map((exp, index) => (
            <button
              key={exp.company}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 -mb-[2px] md:-mb-0 md:-ml-[2px] ${
                activeTab === index
                  ? 'text-cyber-green border-cyber-green bg-cyber-green/5'
                  : 'text-gray-400 border-transparent hover:text-cyber-green hover:bg-cyber-green/5'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className="flex-1 min-h-[300px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-medium text-white mb-1">
              {EXPERIENCES[activeTab].role} <span className="text-cyber-green">@ {EXPERIENCES[activeTab].company}</span>
            </h3>
            <p className="text-sm font-mono text-gray-400 mb-6">
              {EXPERIENCES[activeTab].period}
            </p>
            <ul className="space-y-4">
              {EXPERIENCES[activeTab].tasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <span className="text-cyber-green mt-1">▹</span>
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
