'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PixelTrailProps {
  color?: string;
}

interface PixelParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  lifetime: number;
}

const PixelTrail: React.FC<PixelTrailProps> = ({ color = '#ff5277' }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<PixelParticle[]>([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add new pixel particle at current mouse position
      if (counter % 4 === 0) { // Only add particle every few movements to avoid too many
        setParticles(prevParticles => [
          ...prevParticles,
          {
            id: Date.now(),
            x: e.clientX,
            y: e.clientY,
            size: Math.random() * 4 + 2, // Random size between 2-6px
            lifetime: 1
          }
        ]);
      }
      setCounter(prev => prev + 1);
    };

    // Update and remove particles based on lifetime
    const particleInterval = setInterval(() => {
      setParticles(prevParticles => 
        prevParticles
          .map(particle => ({
            ...particle,
            lifetime: particle.lifetime - 0.02 // Decrease lifetime
          }))
          .filter(particle => particle.lifetime > 0) // Remove particles with no life left
      );
    }, 50);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, [counter]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-sm bg-accent z-50 pointer-events-none"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 1,
          repeat: Infinity
        }}
      />

      {/* Pixel trail particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="fixed rounded-sm pointer-events-none"
          style={{
            x: particle.x,
            y: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: color,
            opacity: particle.lifetime
          }}
          initial={{ opacity: particle.lifetime }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
    </>
  );
};

export default PixelTrail;
