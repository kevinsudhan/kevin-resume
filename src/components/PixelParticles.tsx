'use client';

import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

interface PixelParticlesProps {
  className?: string;
}

const PixelParticles: React.FC<PixelParticlesProps> = ({ className }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log('Pixel particles loaded successfully');
  }, []);

  return (
    <Particles
      className={`fixed inset-0 z-0 ${className || ''}`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: "#ff5277", // Your accent color
            animation: {
              enable: true,
              speed: 20,
              sync: true
            }
          },
          shape: {
            type: "square", // Make particles square for pixel effect
            options: {}
          },
          size: {
            value: { min: 1, max: 3 }, // Varied size for pixel effect
            animation: {
              enable: false
            }
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce"
            }
          },
          number: {
            value: 50,
            density: {
              enable: true,
              area: 800
            }
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1,
              sync: false
            }
          },
        },
        detectRetina: true,
        background: {
          color: "transparent",
        },
      }}
    />
  );
};

export default PixelParticles;
