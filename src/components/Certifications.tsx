import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2 } from 'lucide-react';

const CERTS = [
  { name: 'CompTIA Security+', issuer: 'CompTIA', date: '2024', status: 'Active' },
  { name: 'Certified Ethical Hacker (CEH)', issuer: 'EC-Council', date: '2025', status: 'Active' },
  { name: 'eLearnSecurity Junior Penetration Tester (eJPT)', issuer: 'INE', date: '2024', status: 'Active' },
  { name: 'AWS Certified Security - Specialty', issuer: 'Amazon', date: '2025', status: 'In Progress' },
];

export default function Certifications() {
  return (
    <section id="certs" className="py-24 px-4 bg-cyber-gray/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Professional <span className="text-cyber-green">Credentials</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-green" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-6 bg-cyber-dark border border-cyber-border rounded-xl hover:bg-cyber-gray/50 transition-colors"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-cyber-green/10 rounded-full flex items-center justify-center text-cyber-green">
                <Award size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                  <span className={cert.status === 'Active' ? 'text-cyber-green' : 'text-yellow-500'}>
                    <CheckCircle2 size={18} />
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono text-gray-500">
                  <span>{cert.issuer}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full" />
                  <span>{cert.date}</span>
                  <span className="w-1 h-1 bg-gray-700 rounded-full" />
                  <span className="uppercase tracking-widest text-[10px]">{cert.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
