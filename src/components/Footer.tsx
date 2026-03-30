import React from 'react';
import { Github, Linkedin, Twitter, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-8 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-6">
        <div className="flex items-center gap-6 md:hidden">
          <SocialLink href="#" icon={<Github size={20} />} />
          <SocialLink href="#" icon={<Linkedin size={20} />} />
          <SocialLink href="#" icon={<Twitter size={20} />} />
          <SocialLink href="mailto:maiconmafra04@gmail.com" icon={<Mail size={20} />} />
        </div>
        
        <a 
          href="https://github.com/maiconmafrah" 
          target="_blank" 
          rel="noreferrer"
          className="font-mono text-xs md:text-sm text-gray-400 hover:text-cyber-green transition-colors"
        >
          <div>Desenvolvido por Maicon Mafra</div>
        </a>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-400 hover:text-cyber-green transition-colors hover:-translate-y-1 transform duration-300 inline-block"
    >
      {icon}
    </a>
  );
}
