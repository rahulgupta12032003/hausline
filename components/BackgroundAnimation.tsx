"use client";

import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [particles, setParticles] = useState<any>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((particle: any) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-goldish-400/20 dark:bg-goldish-400/10 animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.1}s`,
            animationDuration: `${10 + particle.speed * 10}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-br from-goldish-50/30 via-transparent to-goldish-100/20 dark:from-goldish-900/10 dark:via-transparent dark:to-goldish-800/5" />
    </div>
  );
}
