import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const CERTS = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', date: '2024', status: 'Ativo' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: '2025', status: 'Ativo' },
  { name: 'eLearnSecurity Junior Penetration Tester (eJPT)', issuer: 'INE', date: '2024', status: 'Ativo' },
  { name: 'AWS Certified Security - Specialty', issuer: 'Amazon', date: '2025', status: 'Em Andamento' },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2">
          <span className="text-cyber-green font-mono text-xl md:text-2xl font-normal">04.</span> Certificações
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
            <div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyber-green transition-colors">
                {cert.name}
              </h3>
              <div className="text-sm font-mono text-gray-400 mb-2">
                {cert.issuer}
              </div>
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-gray-500">{cert.date}</span>
                <span className="text-gray-600">•</span>
                <span className={cert.status === 'Ativo' ? 'text-cyber-green' : 'text-yellow-500'}>
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
