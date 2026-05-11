import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github, Users, BookOpen, Star, Calendar } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/maiconmafrah')
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching Github stats:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="w-8 h-8 border-2 border-cyber-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!stats?.login) return null;

  return (
    <div className="mt-16 bg-[#121620] border border-cyber-green/20 rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6 border-b border-cyber-green/10 pb-4">
        <Github className="text-cyber-green" size={24} />
        <h3 className="text-xl font-bold text-white">Estatísticas do GitHub</h3>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#1a1f2e] p-4 rounded border border-cyber-green/10 flex flex-col items-center justify-center gap-2 hover:border-cyber-green/30 transition-colors">
          <BookOpen className="text-cyber-green" size={24} />
          <span className="text-3xl font-mono font-bold text-white">{stats.public_repos}</span>
          <span className="text-sm text-gray-400 font-mono">Repositórios</span>
        </div>
        
        <div className="bg-[#1a1f2e] p-4 rounded border border-cyber-green/10 flex flex-col items-center justify-center gap-2 hover:border-cyber-green/30 transition-colors">
          <Users className="text-cyber-green" size={24} />
          <span className="text-3xl font-mono font-bold text-white">{stats.followers}</span>
          <span className="text-sm text-gray-400 font-mono">Seguidores</span>
        </div>
        
        <div className="bg-[#1a1f2e] p-4 rounded border border-cyber-green/10 flex flex-col items-center justify-center gap-2 hover:border-cyber-green/30 transition-colors">
          <Star className="text-cyber-green" size={24} />
          <span className="text-3xl font-mono font-bold text-white">{stats.following}</span>
          <span className="text-sm text-gray-400 font-mono">Seguindo</span>
        </div>
        
        <a 
          href={stats.html_url} 
          target="_blank" 
          rel="noreferrer"
          className="bg-cyber-green/10 p-4 rounded border border-cyber-green flex flex-col items-center justify-center gap-2 hover:bg-cyber-green/20 transition-colors group cursor-pointer"
        >
          <img src={stats.avatar_url} alt={stats.name} className="w-12 h-12 rounded-full border border-cyber-green group-hover:scale-110 transition-transform" />
          <span className="text-sm text-cyber-green font-mono font-bold mt-2">Visitar Perfil</span>
        </a>
      </div>

      <div className="mt-8 border-t border-cyber-green/10 pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="text-cyber-green" size={20} />
          <h4 className="text-lg font-bold text-white">Contribuições no último ano</h4>
        </div>
        <div className="bg-[#1a1f2e] p-4 sm:p-6 rounded border border-cyber-green/10 overflow-x-auto custom-scrollbar">
          <div className="min-w-[750px]">
            <GitHubCalendar 
              username="maiconmafrah" 
              colorScheme="dark"
              theme={{
                dark: ['#121620', '#1a3b2b', '#205c3d', '#2aa057', '#64ffda']
              }}
              style={{
                color: '#9ca3af', // text-gray-400
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
