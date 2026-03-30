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

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-cyber-gray/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Technical <span className="text-cyber-green">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-green" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-cyber-dark border border-cyber-border rounded-xl hover:border-cyber-green/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyber-green/10 rounded-lg text-cyber-green group-hover:bg-cyber-green group-hover:text-black transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{skill.name}</h3>
              </div>

              <div className="space-y-4">
                <div className="h-1.5 w-full bg-cyber-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-cyber-green"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-cyber-border/50 text-gray-400 text-xs font-mono rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
