'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

interface SpaceObject {
  id: number;
  type: 'planet' | 'spaceship';
  imageNumber: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  path?: 'linear' | 'curved' | 'zigzag' | 'orbital' | 'erratic' | 'complex' | 'spiral' | 'bezier' | 'bounce';
}

const SpaceBackground: React.FC = () => {
  const [spaceObjects, setSpaceObjects] = useState<SpaceObject[]>([]);
  
  useEffect(() => {
    // Generate random space objects (planets and spaceships)
    const objects: SpaceObject[] = [];
    
    // Add planets (6 different types)
    for (let i = 1; i <= 6; i++) {
      objects.push({
        id: i,
        type: 'planet',
        imageNumber: i,
        x: Math.random() * 90, // Random X position (as percentage of screen)
        y: Math.random() * 80 + 10, // Random Y position (as percentage of screen)
        size: Math.random() * 40 + 20, // Size between 20px and 60px
        duration: Math.random() * 8 + 4, // Animation duration between 4-12s
        delay: Math.random() * 2 // Random delay for animation
      });
    }
    
    // Add spaceships (3 different types) with much more dynamic movement patterns
    for (let i = 1; i <= 12; i++) { // Increased number of spaceships for more activity
      const shipType = Math.ceil(Math.random() * 3); // We have 3 spaceship types
      const pathTypes = ['erratic', 'complex', 'spiral', 'bezier', 'bounce'];
      const randomPath = pathTypes[Math.floor(Math.random() * pathTypes.length)] as 'erratic' | 'complex' | 'spiral' | 'bezier' | 'bounce';
      
      objects.push({
        id: i + 100, // Unique ID
        type: 'spaceship',
        imageNumber: shipType,
        x: Math.random() * 100, // Random X position
        y: Math.random() * 90 + 5, // Random Y position
        size: Math.random() * 20 + 15, // Size between 15px and 35px
        duration: Math.random() * 8 + 10, // MUCH FASTER: Animation duration between 10-18s
        delay: Math.random() * 5, // Shorter delay for more immediate action
        path: randomPath // Movement pattern
      });
    }
    
    setSpaceObjects(objects);
  }, []);
  
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Planets that bounce gently */}
      {spaceObjects
        .filter(obj => obj.type === 'planet')
        .map(planet => (
          <motion.div
            key={planet.id}
            className="absolute"
            style={{
              left: `${planet.x}%`,
              top: `${planet.y}%`,
            }}
            animate={{
              y: [0, -8, 0, 8, 0], // Gentle bounce up and down
            }}
            transition={{
              duration: planet.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: planet.delay
            }}
          >
            <Image
              src={`/space design/planet_${planet.imageNumber}-removebg-preview.png`}
              alt={`Pixel Planet ${planet.imageNumber}`}
              width={planet.size}
              height={planet.size}
              className="pixelated"
            />
          </motion.div>
        ))}
      
      {/* Spaceships with dynamic movement patterns */}
      {spaceObjects
        .filter(obj => obj.type === 'spaceship')
        .map(ship => {
          // Variables for all flight patterns
          const isLeftToRight = Math.random() > 0.5;
          const startX = isLeftToRight ? -100 : 120; // Start from left or right edge
          const endX = isLeftToRight ? 120 : -100; // End at opposite edge
          const midX = (startX + endX) / 2;
          
          // Create custom animations based on path type
          let animationProps = {};
          let transitionProps = {};
          let rotationStyle = {};
          
          switch(ship.path) {
            case 'curved':
              // Curved path that arcs above or below the straight line
              const arcHeight = Math.random() * 80 - 40; // Random arc height (-40 to 40)
              const originY = ship.y;
              animationProps = {
                x: [startX, midX, endX],
                y: [ship.y, ship.y - arcHeight, ship.y],
                rotate: isLeftToRight ? [0, 15, 0] : [180, 165, 180], // Rotate based on curve direction
              };
              transitionProps = {
                duration: ship.duration,
                times: [0, 0.5, 1],
                repeat: Infinity,
                ease: "easeInOut",
                delay: ship.delay
              };
              rotationStyle = {
                transform: `rotate(${isLeftToRight ? 0 : 180}deg)` // Base rotation on direction
              };
              break;
              
            case 'zigzag':
              // Zigzag pattern with multiple points
              const zigHeight = 30; // Height of zigzag
              animationProps = {
                x: [startX, startX + (endX-startX)*0.2, startX + (endX-startX)*0.4, startX + (endX-startX)*0.6, startX + (endX-startX)*0.8, endX],
                y: [ship.y, ship.y + zigHeight, ship.y - zigHeight, ship.y + zigHeight, ship.y - zigHeight, ship.y],
                rotate: isLeftToRight ? 
                  [0, -15, 15, -15, 15, 0] : 
                  [180, 195, 165, 195, 165, 180], // Tilting as the ship changes direction
              };
              transitionProps = {
                duration: ship.duration,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                repeat: Infinity,
                ease: "linear",
                delay: ship.delay
              };
              rotationStyle = {
                transform: `rotate(${isLeftToRight ? 0 : 180}deg)` // Base rotation on direction
              };
              break;
              
            case 'orbital':
              // Orbital movement (circular or elliptical)
              const centerX = 50; // Center of screen horizontally
              const centerY = 50; // Center of screen vertically
              const radiusX = Math.random() * 30 + 20; // Horizontal radius
              const radiusY = Math.random() * 20 + 10; // Vertical radius
              const startAngle = Math.random() * 360; // Random starting angle
              const orbitDirection = Math.random() > 0.5 ? 1 : -1; // Clockwise or counterclockwise
              
              // Create circle/ellipse path with 36 points (every 10 degrees)
              const xPoints = [];
              const yPoints = [];
              const rotatePoints = [];
              for (let i = 0; i <= 36; i++) {
                const angle = (startAngle + i * 10 * orbitDirection) * (Math.PI/180);
                xPoints.push(centerX + radiusX * Math.cos(angle));
                yPoints.push(centerY + radiusY * Math.sin(angle));
                // Rotation based on orbit position - make ship face direction of travel
                rotatePoints.push((angle * 180/Math.PI + 90 * orbitDirection) % 360);
              }
              
              animationProps = {
                x: xPoints,
                y: yPoints,
                rotate: rotatePoints
              };
              transitionProps = {
                duration: ship.duration,
                times: Array(37).fill(0).map((_, i) => i / 36), // Evenly distribute time points
                repeat: Infinity,
                ease: "linear",
                delay: ship.delay
              };
              // No additional rotation needed as it's handled in animation
              rotationStyle = {};
              break;
              
            default: // 'linear' or any other case
              // Enhanced linear path with slight waviness
              animationProps = {
                x: [startX, endX],
                y: [ship.y, ship.y + (Math.random() * 40 - 20)], // Slight vertical variance
                rotate: isLeftToRight ? [0, 10, 0, -5, 0] : [180, 170, 180, 185, 180], // Slight tilting as it flies
                scale: [1, 1.05, 1, 0.98, 1] // Subtle pulsing effect
              };
              transitionProps = {
                duration: ship.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut", // Smoother motion
                delay: ship.delay
              };
              rotationStyle = {
                transform: `rotate(${isLeftToRight ? 0 : 180}deg)` // Base rotation on direction
              };
              break;
          }
          
          return (
            <motion.div
              key={ship.id}
              className="absolute"
              style={{
                left: `${ship.path === 'orbital' ? 0 : ship.x}%`,
                top: `${ship.path === 'orbital' ? 0 : ship.y}%`,
                zIndex: Math.floor(Math.random() * 5) // Random layering for visual interest
              }}
              animate={animationProps}
              transition={transitionProps}
            >
              <div className="relative">
                {/* Thruster effect */}
                {ship.path !== 'orbital' && (
                  <motion.div 
                    className="absolute top-1/2 z-0"
                    style={{
                      left: isLeftToRight ? 0 : 'auto',
                      right: isLeftToRight ? 'auto' : 0,
                      width: ship.size * 0.3,
                      height: ship.size * 0.15,
                      background: 'linear-gradient(90deg, rgba(255,174,0,0.8) 0%, rgba(255,82,119,0.4) 50%, transparent 100%)',
                      transform: 'translateY(-50%)'
                    }}
                    animate={{
                      width: [ship.size * 0.2, ship.size * 0.5, ship.size * 0.3],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                
                <Image
                  src={`/space design/spaceship_${ship.imageNumber}-removebg-preview.png`}
                  alt={`Pixel Spaceship ${ship.imageNumber}`}
                  width={ship.size}
                  height={ship.size}
                  className="pixelated relative z-10"
                  style={rotationStyle}
                />
              </div>
            </motion.div>
          );
        })}
    </div>
  );
};

export default SpaceBackground;
