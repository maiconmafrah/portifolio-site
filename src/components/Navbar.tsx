import React from 'react';
import { Shield, Lock, Terminal as TerminalIcon, Award, User, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-dark/80 backdrop-blur-md border-b border-cyber-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Shield className="text-cyber-green" size={24} />
            <span className="font-mono font-bold text-xl tracking-tighter text-white uppercase">
              Maicon Mafra
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              <NavLink href="#about" icon={<User size={16} />} label="About" />
              <NavLink href="#skills" icon={<Lock size={16} />} label="Skills" />
              <NavLink href="#projects" icon={<TerminalIcon size={16} />} label="Projects" />
              <NavLink href="#certs" icon={<Award size={16} />} label="Certifications" />
              <NavLink href="#contact" icon={<Mail size={16} />} label="Contact" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      className="flex items-center gap-2 text-gray-400 hover:text-cyber-green transition-colors font-mono text-sm uppercase tracking-widest"
    >
      {icon}
      {label}
    </a>
  );
}
