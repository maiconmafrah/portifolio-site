import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const COMMANDS = {
  help: 'Available commands: about, skills, projects, clear, contact',
  about: 'Maicon Mafra is a Cybersecurity student focused on penetration testing, network security, and digital forensics.',
  skills: 'Python, Bash, Linux, Wireshark, Metasploit, Nmap, Burp Suite, Docker, AWS.',
  projects: '1. Home Lab Setup (Proxmox)\n2. Vulnerability Assessment Report\n3. Custom Malware Analysis Sandbox',
  contact: 'Email: maiconmafra04@gmail.com\nGitHub: github.com/cyber-portfolio',
};

export default function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>(['Welcome to CyberSec Terminal v1.0.0', 'Type "help" to see available commands.']);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.toLowerCase().trim();
    if (!cmd) return;

    let response = '';
    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd in COMMANDS) {
      response = COMMANDS[cmd as keyof typeof COMMANDS];
    } else {
      response = `Command not found: ${cmd}. Type "help" for assistance.`;
    }

    setHistory(prev => [...prev, `> ${cmd}`, response]);
    setInput('');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-black/80 border border-cyber-border rounded-lg overflow-hidden shadow-2xl font-mono text-sm">
      <div className="bg-cyber-gray px-4 py-2 flex items-center gap-2 border-b border-cyber-border">
        <TerminalIcon size={16} className="text-cyber-green" />
        <span className="text-gray-400">bash — 80x24</span>
        <div className="ml-auto flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-white/50" />
        </div>
      </div>
      <div 
        ref={scrollRef}
        className="p-4 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-border scrollbar-track-transparent"
      >
        {history.map((line, i) => (
          <div key={i} className={cn("mb-1 whitespace-pre-wrap", line.startsWith('>') ? "text-cyber-green" : "text-gray-300")}>
            {line}
          </div>
        ))}
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <ChevronRight size={16} className="text-cyber-green" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-cyber-green"
            autoFocus
            spellCheck={false}
          />
          <span className="terminal-cursor" />
        </form>
      </div>
    </div>
  );
}
