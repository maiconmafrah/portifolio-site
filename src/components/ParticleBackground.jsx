import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let stars = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };
    
    window.addEventListener('resize', resizeCanvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Smaller stars move slower (parallax)
        this.size = Math.random() * 1.5 + 0.5;
        this.baseSpeed = this.size * 0.15;
        this.vy = -(Math.random() * this.baseSpeed + 0.1);
        this.vx = (Math.random() - 0.5) * 0.1;
        
        // For twinkling
        this.opacity = Math.random();
        this.twinkleSpeed = (Math.random() * 0.02) + 0.005;
        this.twinkleDir = Math.random() > 0.5 ? 1 : -1;
      }
      
      update() {
        // Drift slowly upwards and slightly sideways
        this.y += this.vy;
        this.x += this.vx;
        
        // Wrap around
        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        
        // Twinkle
        this.opacity += this.twinkleSpeed * this.twinkleDir;
        if (this.opacity >= 1) {
          this.opacity = 1;
          this.twinkleDir = -1;
        } else if (this.opacity <= 0.1) {
          this.opacity = 0.1;
          this.twinkleDir = 1;
        }
      }
      
      draw() {
        // We can stick to the cyber-green theme, but maybe desaturated or just white-ish
        ctx.fillStyle = `rgba(100, 255, 218, ${this.opacity * 0.8})`; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Give larger stars a subtle glow
        if (this.size > 1.2) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = 'rgba(100, 255, 218, 0.5)';
        } else {
          ctx.shadowBlur = 0;
        }
      }
    }
    
    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 4000); // More particles for starfield
      for (let i = 0; i < numStars; i++) {
        stars.push(new Star());
      }
    };
    
    initStars();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach(star => {
        star.update();
        star.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  );
}

