import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal as TerminalIcon } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Enterprise Home Lab',
    description: 'Um cluster Proxmox multi-node rodando pfSense, Active Directory e várias distribuições Linux para testes de segurança e monitoramento de rede.',
    tags: ['Proxmox', 'pfSense', 'Active Directory', 'Splunk'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Vulnerability Scanner',
    description: 'Ferramenta personalizada em Python que automatiza varreduras Nmap e verifica CVEs comuns usando a API do NIST. Possui um dashboard CLI limpo.',
    tags: ['Python', 'Nmap', 'API', 'Security'],
    github: '#',
    demo: '#'
  },
  {
    title: 'Plataforma de Write-ups CTF',
    description: 'Um blog dedicado a documentar soluções para máquinas do HackTheBox e TryHackMe, com foco em escalonamento de privilégios e movimentação lateral.',
    tags: ['React', 'Markdown', 'CyberSec', 'HTB'],
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">03.</span> Projetos
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-cyber-gray rounded overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col shadow-lg"
          >
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <TerminalIcon size={40} className="text-cyber-green" />
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-cyber-green transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-cyber-green transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-green transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-gray-500">
                    {tag}
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
