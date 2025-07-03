'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PixelGlitch from '@/components/PixelGlitch';

export default function Home() {
  const [showPixels, setShowPixels] = useState(false);
  
  useEffect(() => {
    // Delay the pixel animation to ensure it runs after page load
    const timer = setTimeout(() => setShowPixels(true), 500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <PixelGlitch intensity="medium" className="inline-block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="pixel-text text-4xl md:text-6xl mb-6 text-accent">KEVIN</h1>
                <div className="w-24 h-1 bg-accent mx-auto"></div>
              </motion.div>
            </PixelGlitch>
            
            <motion.p 
              className="mono-text mt-8 text-xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Full-Stack Developer | AI Agent Engineer | Workflow Automation Specialist
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/projects" className="btn-primary">
                View Projects
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Pixelated Decorative Elements - Enhanced with animations */}
        {showPixels && (
          <>
            <motion.div 
              className="absolute top-20 left-10 w-8 h-8 bg-accent opacity-70"
              animate={{ 
                scale: [1, 1.2, 0.9, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-16 h-16 bg-accent opacity-30"
              animate={{ 
                scale: [1, 0.8, 1.1, 1],
                x: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute top-40 right-16 w-4 h-24 bg-accent opacity-50"
              animate={{ 
                height: [96, 80, 110, 96],
                opacity: [0.5, 0.7, 0.3, 0.5]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            
            {/* Additional pixel elements */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-3 h-3 bg-accent opacity-40"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1, 0.5, 1],
                opacity: [0.4, 0.6, 0.2, 0.4]
              }}
              transition={{ 
                duration: 3, 
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-6 h-2 bg-accent opacity-30"
              initial={{ scale: 0 }}
              animate={{ 
                scale: [0, 1],
                rotate: [0, 90, 180, 270, 360]
              }}
              transition={{ 
                duration: 10, 
                delay: 0.5,
                repeat: Infinity
              }}
            />
          </>
        )}
      </section>

      {/* About Section */}
      <section className="py-16 bg-secondary bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="pixel-text text-3xl text-accent">ABOUT ME</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <motion.div
                className="bg-primary p-6 rounded-sm pixel-border"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="mono-text text-light mb-4">
                  I'm a passionate full-stack developer with expertise in modern web technologies
                  and a special focus on AI agents and AI workflow automation.
                </p>
                <p className="mono-text text-light mb-4">
                  My approach combines clean, efficient code with innovative problem-solving
                  to create impactful digital solutions.
                </p>
                <p className="mono-text text-light">
                  Whether building decentralized applications or implementing AI-powered features,
                  I'm committed to pushing the boundaries of what's possible in tech.
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="md:w-2/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="w-full h-64 bg-accent bg-opacity-20 relative overflow-hidden">
                  {/* Profile photo */}
                  <Image 
                    src="/picture.png" 
                    alt="Kevin's profile picture" 
                    fill 
                    style={{objectFit: 'cover'}} 
                  />
                  {/* Pixel art decoration */}
                  <div className="absolute bottom-0 left-0 w-full">
                    <div className="flex">
                      <div className="w-8 h-8 bg-accent"></div>
                      <div className="w-8 h-8 bg-primary"></div>
                      <div className="w-8 h-8 bg-accent"></div>
                      <div className="w-8 h-8 bg-primary"></div>
                      <div className="w-8 h-8 bg-accent"></div>
                      <div className="w-8 h-8 bg-primary"></div>
                      <div className="w-8 h-8 bg-accent"></div>
                      <div className="w-8 h-8 bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 relative">
        {/* Pixel section divider */}
        <div className="absolute left-0 right-0 top-0 h-4 overflow-hidden">
          <div className="pixel-divider"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="pixel-text text-3xl text-accent">FEATURED PROJECTS</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="project-card bg-secondary p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-primary mb-4 overflow-hidden relative">
                <Image
                  src="/WHISTLE/WhatsApp Image 2025-06-02 at 7.05.27 PM (2).jpeg"
                  alt="Whistle Project"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className="pixel-text text-xl text-accent mb-2">WHISTLE</h3>
              <p className="mono-text text-sm text-light mb-4">
                A decentralized microfinance platform for trusted communities
              </p>
              <Link href="/projects#whistle" className="text-accent mono-text text-sm hover:underline">
                View Project →
              </Link>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              className="project-card bg-secondary p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-primary mb-4 overflow-hidden relative">
                <Image
                  src="/MITHRA/WhatsApp Image 2025-06-11 at 1.57.48 PM.jpeg"
                  alt="Mithra Project"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className="pixel-text text-xl text-accent mb-2">MITHRA</h3>
              <p className="mono-text text-sm text-light mb-4">
                Intelligent, multilingual AI agent for patient care
              </p>
              <Link href="/projects#mithra" className="text-accent mono-text text-sm hover:underline">
                View Project →
              </Link>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              className="project-card bg-secondary p-6 rounded-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="h-48 bg-primary mb-4 overflow-hidden relative">
                <Image
                  src="/DYNA BRAILLE/WhatsApp Image 2025-06-11 at 2.27.42 PM.jpeg"
                  alt="Dyna Braille Project"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <h3 className="pixel-text text-xl text-accent mb-2">DYNA BRAILLE</h3>
              <p className="mono-text text-sm text-light mb-4">
                AI-powered assistive system for the visually impaired
              </p>
              <Link href="/projects#dynabraille" className="text-accent mono-text text-sm hover:underline">
                View Project →
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-secondary bg-opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="pixel-text text-3xl text-accent">TECH STACK</h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'Supabase', 'MongoDB', 'AI/ML', 'Ollama', 'LLM', 'Node.js', 'LangChain'].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-primary p-4 rounded-sm text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mono-text text-accent">{tech}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/tech-stack" className="btn-primary">
              See Full Tech Stack
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-accent bg-opacity-10 p-12 rounded-sm border border-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="pixel-text text-3xl text-accent mb-4">GET IN TOUCH</h2>
            <p className="mono-text text-light mb-8 max-w-2xl mx-auto">
              Interested in working together? I'm always open to discussing new projects, 
              creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="mailto:contact@example.com" 
              className="btn-primary"
            >
              Say Hello
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
