import React from 'react';
import { motion } from 'motion/react';

export default function GlitchText({ text, className = "" }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <motion.span
        className="absolute top-0 left-[2px] -z-10 text-red-500 opacity-70"
        animate={{
          x: [-2, 2, -2, 0],
          y: [1, -1, 1, 0],
          opacity: [0.7, 0.9, 0.7, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3 + Math.random() * 2,
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute top-0 -left-[2px] -z-10 text-cyan-500 opacity-70"
        animate={{
          x: [2, -2, 2, 0],
          y: [-1, 1, -1, 0],
          opacity: [0.7, 0.9, 0.7, 0],
        }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatDelay: 3.1 + Math.random() * 2,
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
