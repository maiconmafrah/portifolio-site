import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Terminal as TerminalIcon } from 'lucide-react';

const PROJECTS = [
  {
    title: 'Enterprise Home Lab',
    description: 'A multi-node Proxmox cluster running pfSense, Active Directory, and various Linux distributions for security testing and network monitoring.',
    tags: ['Proxmox', 'pfSense', 'Active Directory', 'Splunk'],
    image: 'https://picsum.photos/seed/server/800/600',
    github: '#',
    demo: '#'
  },
  {
    title: 'Vulnerability Scanner',
    description: 'Custom Python-based tool that automates Nmap scans and checks for common CVEs using the NIST API. Features a clean CLI dashboard.',
    tags: ['Python', 'Nmap', 'API', 'Security'],
    image: 'https://picsum.photos/seed/code/800/600',
    github: '#',
    demo: '#'
  },
  {
    title: 'CTF Write-ups Platform',
    description: 'A dedicated blog for documenting solutions to HackTheBox and TryHackMe machines, focusing on privilege escalation and lateral movement.',
    tags: ['React', 'Markdown', 'CyberSec', 'HTB'],
    image: 'https://picsum.photos/seed/hacking/800/600',
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Security <span className="text-cyber-green">Laboratories</span>
            </h2>
            <div className="h-1 w-20 bg-cyber-green" />
          </div>
          <a href="#" className="text-cyber-green font-mono text-sm hover:underline flex items-center gap-2">
            View all projects <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-cyber-gray/20 border border-cyber-border rounded-2xl overflow-hidden hover:border-cyber-green/30 transition-all flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-cyber-green bg-cyber-green/10 px-2 py-0.5 rounded border border-cyber-green/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-green transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-cyber-border">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                  <div className="ml-auto">
                    <TerminalIcon size={20} className="text-cyber-border group-hover:text-cyber-green transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
