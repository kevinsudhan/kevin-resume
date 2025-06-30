'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Achievement data
const achievements = [
  {
    year: "2022",
    title: "STAMS Project Collaboration",
    organization: "IIT Madras & Renault Nissan Chennai",
    description: "Collaborated on the Simultaneous Traffic cum Accident Management System (STAMS) project at HACCIDENTS 2022, developing AI-powered traffic management solutions."
  },
  {
    year: "2023",
    title: "Web3 Development Recognition",
    organization: "Blockchain Innovation Forum",
    description: "Recognized for innovative implementation of blockchain technology in the Whistle microfinance platform, creating secure lending systems for university communities."
  },
  {
    year: "2023",
    title: "Healthcare Innovation Award",
    organization: "HealthTech Summit",
    description: "Awarded for the development of Mithra, an intelligent AI agent for patient care that combines edge computing with empathetic AI to enhance healthcare outcomes."
  },
  {
    year: "2024",
    title: "Assistive Technology Innovation",
    organization: "Accessibility Tech Foundation",
    description: "Recognized for creating Dyna Braille, a real-time AI-powered assistive system designed to help visually impaired individuals through innovative tactile feedback."
  },
  {
    year: "2024",
    title: "Financial Technology Implementation",
    organization: "FinTech Solutions Conference",
    description: "Successfully implemented comprehensive CRM solutions for EBS (Every Day Banking Solutions), enhancing their customer engagement and operational efficiency."
  }
];

// Publication data
const publications = [
  {
    title: "Edge Computing in Healthcare: The Future of Patient Monitoring",
    journal: "Journal of Medical Technology",
    year: "2023",
    abstract: "An exploration of edge computing applications in healthcare settings, with case studies focusing on the implementation of AI agents like Mithra for real-time patient monitoring."
  },
  {
    title: "Blockchain-Based Microfinance: Building Trust in Community Lending",
    journal: "Decentralized Finance Quarterly",
    year: "2023",
    abstract: "Analysis of blockchain technology applications in microfinance systems, featuring Whistle as a case study for university-based lending communities."
  },
  {
    title: "Tactile Interfaces for Visually Impaired: Beyond Traditional Assistive Technology",
    journal: "Accessibility Technology Review",
    year: "2024",
    abstract: "A comprehensive examination of modern approaches to tactile interfaces for visually impaired individuals, including the development methodology behind Dyna Braille."
  }
];

export default function Achievements() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pixel-text text-4xl md:text-5xl text-accent">ACHIEVEMENTS</h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mono-text text-light mt-6 max-w-2xl mx-auto">
              A collection of professional accomplishments, recognitions, and publications
              that highlight my contributions to technology and innovation.
            </p>
          </motion.div>
        </div>

        {/* Professional Achievements */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="pixel-text text-2xl text-accent mb-8">PROFESSIONAL RECOGNITION</h2>
            
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-3 md:left-1/2 h-full w-1 bg-accent transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {achievements.map((achievement, idx) => (
                  <motion.div 
                    key={achievement.title}
                    className="relative"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`flex items-center ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {/* Circular marker on timeline */}
                      <div className="absolute left-3 md:left-1/2 w-6 h-6 bg-accent rounded-full transform -translate-x-1/2 z-10"></div>
                      
                      {/* Content card */}
                      <div className={`md:w-5/12 bg-secondary p-6 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} ml-12 md:ml-0`}>
                        <div className="pixel-text text-accent text-sm mb-2">{achievement.year}</div>
                        <h3 className="mono-text text-xl text-light mb-1">{achievement.title}</h3>
                        <div className="text-accent text-sm mb-3">{achievement.organization}</div>
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Publications */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="pixel-text text-2xl text-accent mb-8">PUBLICATIONS</h2>
          
          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <motion.div 
                key={pub.title}
                className="bg-secondary p-6 border-l-4 border-accent"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="mono-text text-xl text-light mb-2">{pub.title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center text-sm mb-3">
                  <span className="text-accent">{pub.journal}</span>
                  <span className="hidden sm:inline mx-2 text-gray-500">•</span>
                  <span className="text-gray-400">{pub.year}</span>
                </div>
                <p className="text-gray-300 text-sm italic">{pub.abstract}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        {/* Education & Certifications - Placeholder section */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="pixel-text text-2xl text-accent mb-8">EDUCATION & CERTIFICATIONS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education Card */}
            <div className="bg-secondary p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="pixel-text text-accent">EDU</span>
                </div>
                <div className="ml-4">
                  <h3 className="mono-text text-lg text-light">Computer Science Degree</h3>
                  <p className="text-gray-400 text-sm">University of Technology, 2018-2022</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Specialized in Software Engineering and Artificial Intelligence applications.
              </p>
            </div>
            
            {/* Certification Cards */}
            <div className="bg-secondary p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="pixel-text text-accent">CERT</span>
                </div>
                <div className="ml-4">
                  <h3 className="mono-text text-lg text-light">Web3 Development Certification</h3>
                  <p className="text-gray-400 text-sm">Blockchain Academy, 2023</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Advanced blockchain application development with focus on DeFi platforms.
              </p>
            </div>
            
            <div className="bg-secondary p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="pixel-text text-accent">CERT</span>
                </div>
                <div className="ml-4">
                  <h3 className="mono-text text-lg text-light">AI Engineering Specialist</h3>
                  <p className="text-gray-400 text-sm">Tech AI Institute, 2024</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Specialized training in deploying and optimizing large language models for edge applications.
              </p>
            </div>
            
            <div className="bg-secondary p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary flex items-center justify-center">
                  <span className="pixel-text text-accent">CERT</span>
                </div>
                <div className="ml-4">
                  <h3 className="mono-text text-lg text-light">Full Stack Development</h3>
                  <p className="text-gray-400 text-sm">Web Development Institute, 2022</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">
                Comprehensive training in modern web development stacks including Next.js and React.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Pixel art decoration at bottom */}
        <div className="flex justify-center mt-16">
          <div className="flex">
            {Array(12).fill(0).map((_, i) => (
              <div key={i} className={`w-6 h-6 ${i % 3 === 0 ? 'bg-accent' : 'bg-transparent'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
