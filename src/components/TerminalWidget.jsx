import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Utility to render text with newlines
const renderText = (text, color = 'text-gray-300') => {
  if (typeof text !== 'string') return text;
  return (
    <div className={`whitespace-pre-wrap ${color}`}>
      {text}
    </div>
  );
};

export default function TerminalWidget() {
  const [history, setHistory] = useState([
    { id: 1, type: 'system', text: 'Initializing secure environment...' },
    { id: 2, type: 'system', text: 'Type "help" to begin.', color: 'text-cyber-green' }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [matrixActive, setMatrixActive] = useState(false);
  
  const endOfTerminalRef = useRef(null);
  const inputRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const AVAILABLE_CMDS = [
    'help', 'about', 'skills', 'projects', 'certs', 
    'contact', 'clear', 'whoami', 'open', 'scan', 'soc-status', 'sudo', 'matrix'
  ];

  const scrollToBottom = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmdStr = rawCmd.trim();
    const args = cmdStr.split(' ').filter(Boolean);
    const cmd = args[0]?.toLowerCase();
    
    let output = null;
    let outColor = 'text-gray-300';
    
    if (!cmd) return;

    switch (cmd) {
      case 'help':
        output = `Available commands:

  about       -> About me
  skills      -> Technical skills
  projects    -> View projects
  certs       -> Certifications
  contact     -> Contact info
  clear       -> Clear terminal
  whoami      -> Current user
  scan        -> Run system scan
  soc-status  -> View SOC status`;
        break;
      case 'about':
        output = `Cybersecurity analyst focused on:
- Linux infrastructure
- Monitoring
- SIEM
- Defensive security
- Networking`;
        break;
      case 'whoami':
        output = `Maicon Mafra
Cybersecurity Analyst
Blue Team / Infrastructure`;
        break;
      case 'projects':
        output = `[1] SIEM Lab Wazuh
[2] Vulnerability Scanner (Python)
[3] Desafio Phishing (Social Engineering)

Type "open <number>" to view a project.`;
        break;
      case 'open':
        const num = args[1];
        if (['1','2','3'].includes(num)) {
          output = `Opening project [${num}]... (Redirecting)`;
          // Using a timeout to simulate opening
          setTimeout(() => {
            const el = document.getElementById('projects');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 500);
        } else {
          output = `Invalid project number (1-3). Use "projects" to see the list.`;
          outColor = 'text-red-400';
        }
        break;
      case 'skills':
        output = `Linux        ██████░░░░
Networking   ██████░░░░
SIEM         ████░░░░░░
Python       █████░░░░░
Docker       ████░░░░░░`;
        outColor = 'text-cyber-green';
        break;
      case 'certs':
        output = `- Cisco Networking Basics (Em Progresso)
- Linux Administration & Hardening (Em Progresso)
- TryHackMe Learning Paths (Em Progresso)
- Cybersecurity & SOC Labs (Em Progresso)`;
        break;
      case 'contact':
        output = `Email: maiconmafra04@gmail.com
GitHub: github.com/maiconmafra
LinkedIn: linkedin.com/in/maiconmafra/`;
        break;
      case 'sudo':
        output = `Nice try.
Permission denied.`;
        outColor = 'text-red-500 font-bold';
        break;
      case 'scan':
        output = `Scanning environment...

Ports analyzed: 1024
Threats detected: 0
Firewall status: ACTIVE`;
        outColor = 'text-cyber-green';
        break;
      case 'soc-status':
        output = `[STATUS] All systems nominal.
[ALERTS] 0 active alerts.
[MONITORING] Enabled and functioning.`;
        break;
      case 'matrix':
        setMatrixActive(true);
        setTimeout(() => setMatrixActive(false), 5000);
        output = `Entering the Matrix...`;
        outColor = 'text-cyber-green';
        break;
      case 'clear':
        setHistory([]);
        return;
      default:
        output = `Command not found: ${cmd}. Type "help" for a list of available commands.`;
        outColor = 'text-red-400';
        break;
    }

    setHistory(prev => {
      const newHist = [...prev, { id: Date.now() + Math.random(), type: 'input', text: cmdStr }];
      if (output) {
        newHist.push({ id: Date.now() + Math.random(), type: 'output', text: output, color: outColor });
      }
      return newHist;
    });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (inputVal.trim()) {
        const newHistory = [inputVal, ...cmdHistory].slice(0, 50);
        setCmdHistory(newHistory);
        handleCommand(inputVal);
      } else {
        setHistory(prev => [...prev, { id: Date.now(), type: 'input', text: '' }]);
      }
      setInputVal('');
      setHistoryIdx(-1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(historyIdx + 1, cmdHistory.length - 1);
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInputVal('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const match = AVAILABLE_CMDS.find(c => c.startsWith(inputVal.toLowerCase()));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <div className={`relative w-full max-w-lg mt-8 rounded border border-cyber-border/50 bg-[#0a192f]/90 backdrop-blur overflow-hidden shadow-2xl ${matrixActive ? 'matrix-effect' : ''}`}>
      {matrixActive && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-20 bg-[url('https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif')] bg-cover mix-blend-screen" />
      )}
      
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#112240] border-b border-cyber-border/50 relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-gray-500 px-4">
          root@maicon-mafra:~
        </div>
      </div>
      
      {/* Terminal Content Box */}
      <div 
        ref={scrollContainerRef}
        className="p-4 h-[350px] overflow-y-auto font-mono text-sm text-gray-300 relative z-10 custom-scrollbar flex flex-col"
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex-1">
          <AnimatePresence initial={false}>
            {history.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className="mb-2"
              >
                {item.type === 'input' && (
                  <div>
                    <span className="text-cyber-green mr-2">root@maicon:~$</span>
                    <span className="text-white">{item.text}</span>
                  </div>
                )}
                {(item.type === 'output' || item.type === 'system') && (
                  <div className={item.color || 'text-gray-400'}>
                    {renderText(item.text, item.color)}
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Active Input Line */}
          <div className="flex mt-1 items-start">
            <span className="text-cyber-green mr-2 whitespace-nowrap">root@maicon:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={onKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-white focus:ring-0 p-0 m-0"
              autoFocus
              autoComplete="off"
              spellCheck="false"
            />
          </div>
          <div ref={endOfTerminalRef} className="h-2" />
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0a192f;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #64ffda;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4ae8c4;
        }
        .matrix-effect {
          animation: glitch-anim 0.2s linear infinite alternate, scanline 5s linear infinite;
        }
        @keyframes scanline {
          0% { box-shadow: inset 0 0 0 0 rgba(100,255,218,0.2); }
          50% { box-shadow: inset 0 0 20px 0 rgba(100,255,218,0.5); }
          100% { box-shadow: inset 0 0 0 0 rgba(100,255,218,0.2); }
        }
      `}</style>
    </div>
  );
}
