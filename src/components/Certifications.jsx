import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const CERTS = [
  { 
    name: 'Cisco Networking Basics', 
    issuer: 'Cisco Networking Academy', 
    date: 'Estudo Ativo', 
    status: 'Em Progresso',
    description: 'Fundamentos essenciais de redes de computadores, protocolos de comunicação, roteamento e segurança de tráfego.'
  },
  { 
    name: 'Linux Administration & Hardening', 
    issuer: 'Estudos Independentes', 
    date: 'Estudo Ativo', 
    status: 'Em Progresso',
    description: 'Administração avançada de sistemas baseados em Linux, configuração de privilégios de segurança e automação defensiva.'
  },
  { 
    name: 'TryHackMe Learning Paths', 
    issuer: 'TryHackMe', 
    date: 'Prática de Laboratórios', 
    status: 'Em Progresso',
    description: 'Resolução ativa de cenários reais de segurança cibernética, análise de logs, detecção e resposta a incidentes.'
  },
  { 
    name: 'Cybersecurity & SOC Labs', 
    issuer: 'Home Labs & Simulações', 
    date: 'Prática de Laboratórios', 
    status: 'Em Progresso',
    description: 'Implementação e hardening de firewalls, centralização de logs e alertas com SIEM (Wazuh/ELK) em redes simuladas.'
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">05.</span> Certificações & Estudos
        </h2>
        <div className="h-[1px] flex-1 bg-cyber-border max-w-[300px]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CERTS.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-6 bg-cyber-gray rounded hover:-translate-y-1 transition-transform duration-300 shadow-lg"
          >
            <div className="mt-1 text-cyber-green">
              <Award size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-cyber-green transition-colors">
                {cert.name}
              </h3>
              <div className="text-sm font-mono text-gray-400 mb-2">
                {cert.issuer}
              </div>
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {cert.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-gray-500">{cert.date}</span>
                <span className="text-gray-600">•</span>
                <span className="text-yellow-500 font-semibold">
                  {cert.status}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
