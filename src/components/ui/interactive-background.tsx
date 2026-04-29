"use client";

import React, { useRef, useEffect } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let scrollY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.size = 0;
        this.speedY = 0;
        this.color = '';
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.z = Math.random() * 2 + 1;
        this.size = Math.random() * 3;
        this.speedY = Math.random() * 0.5 + 0.2;
        this.color = Math.random() > 0.5 ? 'rgba(46, 76, 140,' : 'rgba(255, 255, 255,';
      }

      update() {
        const parallaxScroll = scrollY * (0.2 / this.z);
        const dx = this.x - mouseX;
        const dy = (this.y - parallaxScroll) - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = distance !== 0 ? dx / distance : 0;
        const forceDirectionY = distance !== 0 ? dy / distance : 0;
        const maxDistance = 200;
        let force = 0;

        if (distance < maxDistance) {
          force = (maxDistance - distance) / maxDistance;
        }

        this.y -= this.speedY + (force * forceDirectionY * 2);
        this.x += force * forceDirectionX * 2;

        if (this.y - parallaxScroll < -50) {
            this.y = canvas.height + parallaxScroll + 50;
            this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        const parallaxY = this.y - (scrollY * (0.2 / this.z));
        const opacity = (1 / this.z) * 0.2;
        
        ctx.beginPath();
        ctx.arc(this.x, parallaxY, this.size / this.z, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 20 : 50;
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
        if(e.touches.length > 0) {
            mouseX = e.touches[0].clientX;
            mouseY = e.touches[0].clientY;
        }
    }

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('scroll', handleScroll);
    
    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" />;
};

export { InteractiveBackground };
