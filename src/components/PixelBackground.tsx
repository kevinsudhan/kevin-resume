'use client';

import React from 'react';
import PixelParticles from './PixelParticles';

interface PixelBackgroundProps {
  children: React.ReactNode;
}

const PixelBackground: React.FC<PixelBackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <PixelParticles />
        <div className="pixelated-grid"></div>
      </div>
      <div className="relative z-10">{children}</div>
      
      {/* Global CSS for pixelation effects */}
      <style jsx global>{`
        .pixelated-grid {
          background-image: 
            linear-gradient(rgba(18, 18, 18, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(18, 18, 18, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        /* Scanline animation */
        @keyframes scanline {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }
        
        .scanline {
          position: absolute;
          width: 100%;
          height: 4px;
          background: linear-gradient(
            to bottom,
            rgba(255, 82, 119, 0) 0%,
            rgba(255, 82, 119, 0.3) 50%,
            rgba(255, 82, 119, 0) 100%
          );
          opacity: 0.5;
          z-index: 45;
          pointer-events: none;
          animation: scanline 6s linear infinite;
        }
      `}</style>
      
      {/* Animated scanline effect */}
      <div className="scanline"></div>
    </div>
  );
};

export default PixelBackground;
