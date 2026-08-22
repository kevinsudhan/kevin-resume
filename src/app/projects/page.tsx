'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { projects } from './projectData';

// Tech stack icons mapping
const techIcons: Record<string, string> = {
  'Next.js': '/logos/nextjs.webp',
  'React': '/logos/react.webp',
  'TypeScript': '/logos/Typescript-01.webp',
  'JavaScript': '/logos/JavaScript-Logo.webp',
  'Tailwind': '/logos/Tailwind_CSS_Logo.svg.webp',
  'Supabase': '/logos/supabase-logo-png_seeklogo-435677.webp',
  'MongoDB': '/logos/mongodb-logo-png_seeklogo-481256.webp',
  'Ethereum Chain': '/logos/etheriumm.webp',
  'YOLO': '/logos/yologo_2_lopvlj.webp',
  'Web3': '/logos/web3-logo-png_seeklogo-436086.webp',
  'Blockchain': '/logos/blockchain-icon-design-cryptocurrency-vector-digital-logo-blockchain-icon-design-cryptocurrency-vector-digital-logo-201091629.webp',
  'DApp': '/logos/dapp.webp',
  'PWA': '/logos/api-application-interface-icon-simple-600nw-2188533787.webp',
  'LIDAR': '/logos/LIDAR.webp',
  'Ollama': '/logos/ollama-logo-png_seeklogo-593420.webp',
  'Llama 3': '/logos/LLAMA 3.webp',
  'LLAMA': '/logos/LLAMA 3.webp',
  'Twitter API v2': '/logos/TWITTER API.webp',
  'Reddit JSON API': '/logos/REDDIT.webp',
  'Yahoo Finance API': '/logos/YAHOO FINANCE.webp', 
  'ESP32': '/logos/ESP32.webp',
  'Raspberry Pi': '/logos/RASBPERRY PI.webp',
  'Framer Motion': '/logos/framer-motion-logo-1-312x211.webp',
  'LIFI Protocol': '/logos/Lifi_Logo.svg.webp',
  'Solenoids': '/logos/SOLENOID.webp',
  'MOSFETs': '/logos/MOSFETS.webp'
};

// Fallback icon for technologies without a specific icon
const fallbackIcon = '/logos/HARDWARE.webp';

export default function Projects() {
  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-20 glass-dark"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pixel-text text-4xl md:text-5xl text-accent">PROJECTS</h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mono-text text-light mt-6 max-w-2xl mx-auto">
              A collection of my work across different technologies and domains.
              From Web3 to AI, these projects showcase my technical expertise and problem-solving approach.
            </p>
          </motion.div>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12`}
            >
              {/* Project Image */}
              <div className="md:w-1/2">
                <Link href={`/projects/${project.id}`} className="block">
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden glass">
                    <div className="h-64 md:h-80 relative">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              </div>
              
              {/* Project Description */}
              <div className="md:w-1/2 flex flex-col justify-center">
                <Link href={`/projects/${project.id}`} className="block">
                  <h2 className="pixel-text text-2xl text-accent mb-4 hover:text-primary transition-colors">{project.title}</h2>
                </Link>
                <p className="text-light/80 mb-6">
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description}
                </p>
                
                {/* Tech Stack with Icons */}
                <div className="mb-6">
                  <h3 className="mono-text text-sm text-light/60 mb-3">TECH STACK</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <div key={tech} className="flex items-center px-3 py-2 glass hover:glass-accent transition-all duration-300">
                        <img 
                          src={techIcons[tech] || fallbackIcon}
                          alt={tech}
                          width={20}
                          height={20}
                          style={{ width: '20px', height: '20px', marginRight: '8px', objectFit: 'contain' }}
                        />
                        <span className="mono-text text-xs text-light/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View Project Button */}
                <div>
                  <Link href={`/projects/${project.id}`} className="inline-block glass-accent px-6 py-2 mono-text text-sm text-light hover:bg-accent hover:text-dark transition-all duration-300">
                    VIEW PROJECT
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
