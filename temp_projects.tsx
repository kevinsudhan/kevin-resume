'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { projects } from './projectData';

// Tech stack icons mapping
const techIcons: Record<string, string> = {
  'Next.js': '/icons/nextjs.svg',
  'React': '/icons/react.svg',
  'TypeScript': '/icons/typescript.svg',
  'JavaScript': '/icons/javascript.svg',
  'Tailwind': '/icons/tailwind.svg',
  'Supabase': '/icons/supabase.svg',
  'MongoDB': '/icons/mongodb.svg',
  'Ethereum Chain': '/icons/ethereum.svg',
  'YOLO': '/icons/yolo.svg',
  'Web3': '/icons/web3.svg',
  'Blockchain': '/icons/blockchain.svg',
  'DApp': '/icons/dapp.svg',
  'PWA': '/icons/pwa.svg',
  'LIDAR': '/icons/lidar.svg',
  'Ollama': '/icons/ai.svg',
  'Llama 3': '/icons/ai.svg',
  'LLAMA': '/icons/ai.svg',
  'Twitter API v2': '/icons/twitter.svg',
  'Reddit JSON API': '/icons/reddit.svg',
  'Yahoo Finance API': '/icons/yahoo.svg', 
  'ESP32': '/icons/esp32.svg',
  'Raspberry Pi': '/icons/raspberry-pi.svg',
  'Framer Motion': '/icons/framer.svg',
  'LIFI Protocol': '/icons/lifi.svg',
  'Solenoids': '/icons/hardware.svg',
  'MOSFETs': '/icons/hardware.svg'
};

// Fallback icon for technologies without a specific icon
const fallbackIcon = '/icons/code.svg';

export default function Projects() {
  return (
    <div className="min-h-screen py-16">
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
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden pixel-border border-accent">
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
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="mono-text text-sm text-light/60 mb-3">TECH STACK</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <div key={tech} className="flex items-center px-3 py-2 bg-dark pixel-border border-accent/50">
                        <span className="mono-text text-xs text-light/70">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* View Project Button */}
                <div>
                  <Link href={`/projects/${project.id}`} className="inline-block pixel-border border-accent px-6 py-2 mono-text text-sm text-light hover:bg-accent hover:text-dark transition-colors">
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
