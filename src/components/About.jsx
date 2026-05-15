import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Network, Database, Code, Search } from 'lucide-react';

const SKILLS = [
  { name: 'Penetration Testing', icon: <Search size={24} />, level: 85, tags: ['Metasploit', 'Nmap', 'Burp Suite'] },
  { name: 'Network Security', icon: <Network size={24} />, level: 90, tags: ['Wireshark', 'Firewalls', 'VPNs'] },
  { name: 'Incident Response', icon: <ShieldAlert size={24} />, level: 75, tags: ['SIEM', 'Forensics', 'Logging'] },
  { name: 'Cloud Security', icon: <Database size={24} />, level: 80, tags: ['AWS', 'Azure', 'IAM'] },
  { name: 'Scripting', icon: <Code size={24} />, level: 88, tags: ['Python', 'Bash', 'Go'] },
  { name: 'System Admin', icon: <Cpu size={24} />, level: 92, tags: ['Linux', 'Windows Server', 'Docker'] },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">01.</span> Sobre Mim
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-3 text-gray-400 text-lg leading-relaxed space-y-4">
          <p>
            Olá! Meu nome é Maicon e sou apaixonado por tecnologia, redes e cibersegurança. Meu interesse na área começou pela curiosidade em entender como sistemas funcionam — e principalmente como protegê-los.
          </p>
          <p>
            Atualmente, estou aprofundando meus conhecimentos em <span className="text-cyber-green">segurança ofensiva e defensiva</span>, construindo laboratórios práticos voltados para SOC, análise de logs e monitoramento de ambientes.
          </p>
          <p>
            Aqui estão algumas tecnologias com as quais tenho trabalhado recentemente:
          </p>
          
          <ul className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm">
            {['Python', 'Bash/Shell', 'Linux', 'Redes (TCP/IP)', 'Docker', 'AWS', 'Burp Suite', 'Nmap'].map(skill => (
              <li key={skill} className="flex items-center gap-2">
                <span className="text-cyber-green text-xs">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-2 relative group flex flex-col items-center gap-8">
          <div className="relative w-full max-w-[300px] mx-auto aspect-square rounded bg-cyber-green/20 border-2 border-cyber-green transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            <div className="absolute inset-0 bg-cyber-dark/50 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300" />
            <img 
              src="https://picsum.photos/seed/hacker/400/400" 
              alt="Maicon Mafra" 
              className="w-full h-full object-cover rounded grayscale group-hover:grayscale-0 transition-all duration-300 -translate-x-4 -translate-y-4 group-hover:-translate-x-5 group-hover:-translate-y-5"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[300px]">
            <a 
              href="https://www.linkedin.com/in/maiconmafra/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-3 px-4 bg-cyber-green text-black font-mono font-bold text-sm uppercase tracking-wider rounded hover:bg-cyber-green/80 transition-colors"
            >
              Fale Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
