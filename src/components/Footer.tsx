import React from 'react';
import { Github, Linkedin, Twitter, Mail, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="py-20 px-4 border-t border-cyber-border bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-cyber-green" size={32} />
              <span className="font-mono font-bold text-2xl tracking-tighter text-white uppercase">
                Maicon Mafra
              </span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed mb-8">
              Securing the digital landscape through continuous learning and ethical practice. 
              Always open to collaboration on security projects and research.
            </p>
            <div className="flex items-center gap-4">
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Mail size={20} />} />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-4 font-mono text-sm">
              <li><FooterLink href="#about">About</FooterLink></li>
              <li><FooterLink href="#skills">Skills</FooterLink></li>
              <li><FooterLink href="#projects">Projects</FooterLink></li>
              <li><FooterLink href="#certs">Certifications</FooterLink></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h4>
            <ul className="space-y-4 font-mono text-sm text-gray-400">
              <li>Location: Remote / Global</li>
              <li>Email: maiconmafra04@gmail.com</li>
              <li>PGP: 0x8F2B...E9A1</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-cyber-border flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-mono">
          <p>© 2026 CYBERSEC PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-cyber-green transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-cyber-green transition-colors">SECURITY.TXT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="w-10 h-10 rounded-lg bg-cyber-gray flex items-center justify-center text-gray-400 hover:bg-cyber-green hover:text-black transition-all"
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-gray-400 hover:text-cyber-green transition-colors">
      {children}
    </a>
  );
}
