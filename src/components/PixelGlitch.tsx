'use client';

import React, { useEffect, useRef } from 'react';

interface PixelGlitchProps {
  className?: string;
  children: React.ReactNode;
  intensity?: 'low' | 'medium' | 'high';
}

const PixelGlitch: React.FC<PixelGlitchProps> = ({ 
  className, 
  children, 
  intensity = 'low'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  
  const intensityValues = {
    low: { chance: 0.01, duration: 50 },
    medium: { chance: 0.03, duration: 100 },
    high: { chance: 0.05, duration: 150 },
  };
  
  useEffect(() => {
    const { chance, duration } = intensityValues[intensity];
    
    const applyGlitch = () => {
      if (Math.random() < chance && containerRef.current) {
        const container = containerRef.current;
        const originalFilter = container.style.filter;
        const originalTransform = container.style.transform;
        
        // Random glitch effect
        const glitchType = Math.floor(Math.random() * 3);
        
        switch (glitchType) {
          case 0:
            // Color shift
            container.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
            break;
          case 1:
            // Pixel shift
            container.style.transform = `${originalTransform} translate(${(Math.random() - 0.5) * 10}px, 0)`;
            break;
          case 2:
            // Scan line
            container.style.backgroundImage = `repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.1),
              rgba(255,255,255,0.1) 1px,
              transparent 1px,
              transparent 2px
            )`;
            break;
        }
        
        // Reset after short duration
        setTimeout(() => {
          if (containerRef.current) {
            containerRef.current.style.filter = originalFilter;
            containerRef.current.style.transform = originalTransform;
            containerRef.current.style.backgroundImage = '';
          }
        }, duration);
      }
    };
    
    // Run glitch effect randomly
    intervalRef.current = setInterval(applyGlitch, 1000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [intensity]);
  
  return (
    <div 
      ref={containerRef}
      className={`relative transition-all ${className || ''}`}
      style={{ willChange: 'filter, transform' }}
    >
      {children}
    </div>
  );
};

export default PixelGlitch;
