import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Cpu, Network, Database, Code, Search } from 'lucide-react';

const SKILLS = [
  { name: 'Penetration Testing', icon: <Search size={24} />, level: 45, tags: ['Metasploit', 'Nmap', 'Burp Suite'] },
  { name: 'Network Security', icon: <Network size={24} />, level: 65, tags: ['Wireshark', 'Firewalls', 'VPNs'] },
  { name: 'Incident Response', icon: <ShieldAlert size={24} />, level: 40, tags: ['SIEM', 'Forensics', 'Logging'] },
  { name: 'Cloud Security', icon: <Database size={24} />, level: 35, tags: ['AWS', 'Azure', 'IAM'] },
  { name: 'Scripting', icon: <Code size={24} />, level: 55, tags: ['Python', 'Bash', 'Go'] },
  { name: 'System Admin', icon: <Cpu size={24} />, level: 65, tags: ['Linux', 'Windows Server', 'Docker'] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">03.</span> Habilidades Técnicas
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-cyber-gray/20 border border-cyber-border rounded-lg p-6 hover:border-cyber-green/50 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyber-dark rounded-lg text-cyber-green group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{skill.name}</h3>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-gray-400">Proficiência</span>
                <span className="text-cyber-green">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-cyber-dark rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-cyber-green rounded-full"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono uppercase tracking-wider text-gray-400 bg-cyber-dark px-2 py-1 rounded border border-cyber-border/50">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
