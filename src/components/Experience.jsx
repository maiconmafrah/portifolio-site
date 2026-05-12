import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 1,
    type: 'work',
    title: 'Assistente de Infraestrutura',
    company: 'Tech Security Corp',
    date: '2025 - Presente',
    description: 'Atuação em testes de invasão em aplicações web, análise de vulnerabilidades e elaboração de relatórios técnicos. Auxílio na resposta a incidentes de segurança.',
    skills: ['Burp Suite', 'Nmap', 'OWASP Top 10', 'Relatórios']
  },
  {
    id: 2,
    type: 'education',
    title: 'Tecnólogo em Redes de computadores',
    company: 'Unisosiesc',
    date: '2022 - 2025',
    description: 'Foco em redes de computadores, sistemas operacionais e segurança da informação.',
    skills: ['C/C++', 'Redes', 'Sistemas Operacionais', 'Criptografia']
  },
  {
    id: 3,
    type: 'work',
    title: 'Pós em Segurança Cibernética',
    company: 'Uninter',
    date: '2025 - 2026',
    description: 'Monitoramento de redes, configuração de firewalls e switches, e suporte a servidores Linux e Windows.',
    skills: ['Linux', 'Firewalls', 'Monitoramento', 'Suporte']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">02.</span> Experiência & Educação
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="relative border-l border-cyber-border/50 ml-4 md:ml-8 space-y-12">
        {EXPERIENCES.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-1 w-6 h-6 bg-cyber-dark border border-cyber-green rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cyber-green rounded-full" />
            </div>

            <div className="group bg-cyber-gray/20 border border-cyber-border rounded-lg p-6 hover:border-cyber-green/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors flex items-center gap-2">
                    {item.type === 'work' ? <Briefcase size={18} /> : <GraduationCap size={18} />}
                    {item.title}
                  </h3>
                  <div className="text-cyber-green font-mono text-sm mt-1">
                    {item.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm font-mono bg-cyber-dark/50 px-3 py-1 rounded-full border border-cyber-border w-fit">
                  <Calendar size={14} />
                  {item.date}
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="text-xs font-mono text-gray-300 bg-cyber-dark px-2 py-1 rounded border border-cyber-border/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
