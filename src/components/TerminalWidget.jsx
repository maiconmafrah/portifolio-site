import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function TerminalWidget() {
  const [lines, setLines] = useState([]);
  
  const bootSequence = [
    { text: "Initializing boot sequence...", delay: 50 },
    { text: "Loading kernel modules... OK", delay: 800 },
    { text: "Mounting file systems... OK", delay: 1200 },
    { text: "Initializing network interfaces... OK", delay: 1800 },
    { text: "Establishing secure connection to SOC...", delay: 2400 },
    { text: "[SEC] Firewalls enabled. Port scanning active.", delay: 3500 },
    { text: "[SYS] Load average: 0.14, 0.08, 0.04", delay: 4200 },
    { text: "Accessing target environment... SUCCESS", delay: 5000, color: "text-cyber-green" },
    { text: "Welcome, Admin.", delay: 5800, color: "text-cyber-green" }
  ];

  useEffect(() => {
    const timeouts = [];
    
    // Add lines initially based on their delays
    bootSequence.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { id: index, text: item.text, color: item.color }]);
      }, item.delay);
      timeouts.push(timeout);
    });

    // Cleanup timeouts
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-lg mt-8 rounded border border-cyber-border/50 bg-[#0a192f]/80 backdrop-blur overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#112240] border-b border-cyber-border/50">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-gray-500 px-4">
          root@maicon-mafra:~
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-4 h-64 overflow-y-auto font-mono text-xs sm:text-sm text-gray-300">
        <AnimatePresence>
          {lines.map((line) => (
            <motion.div 
              key={line.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className={`mb-1 ${line.color || ''}`}
            >
              <span className="text-gray-500 mr-2">$</span>
              {line.text}
            </motion.div>
          ))}
          {lines.length === bootSequence.length && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mt-2 w-2 h-4 bg-cyber-green inline-block"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
