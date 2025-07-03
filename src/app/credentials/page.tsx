'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import CertificateImage from '@/components/CertificateImage';

export default function Credentials() {
  const [activeTab, setActiveTab] = useState('certificates');

  return (
    <div className="min-h-screen py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-20 glass-dark"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="pixel-text text-4xl text-accent">CREDENTIALS</h1>
          <div className="w-24 h-1 bg-accent mx-auto mt-2"></div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex glass rounded-sm overflow-hidden">
            <button
              className={`px-6 py-3 mono-text ${
                activeTab === 'internships' ? 'bg-accent text-primary' : 'text-light'
              }`}
              onClick={() => setActiveTab('internships')}
            >
              Internships
            </button>
            <button
              className={`px-6 py-3 mono-text ${
                activeTab === 'certificates' ? 'bg-accent text-primary' : 'text-light'
              }`}
              onClick={() => setActiveTab('certificates')}
            >
              Professional Certificates
            </button>
          </div>
        </div>

        {/* Internships Tab */}
        {activeTab === 'internships' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alibi Technologies LLP Internship */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 h-32 bg-primary relative overflow-hidden rounded-sm">
                    <Image
                      src="/certificates/internships/1687782026926130001_attach_139070748222550110_230629_124120-1.pdf-6_page-0001.jpg"
                      alt="Alibi Technologies LLP Certificate"
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="pixel-text text-xl text-accent mb-1">Cybersecurity Intern</h3>
                    <h4 className="mono-text text-light mb-2">Alibi Technologies LLP</h4>
                    <p className="mono-text text-sm text-light mb-2">2024</p>
                    <p className="mono-text text-sm text-light">
                      Worked on various cybersecurity practices and collaborated with government agencies to apply these practices in real cases. Gained hands-on experience in threat detection, vulnerability assessment, and security implementation.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Everyday Banking Solutions Project */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3 h-32 bg-primary relative overflow-hidden rounded-sm">
                    <Image
                      src="/certificates/internships/everyday.png"
                      alt="Everyday Banking Solutions Website"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="pixel-text text-xl text-accent mb-1">Full-Stack Developer</h3>
                    <h4 className="mono-text text-light mb-2">Everyday Banking Solutions</h4>
                    <p className="mono-text text-sm text-light mb-2">2024</p>
                    <p className="mono-text text-sm text-light">
                      Developed a comprehensive banking website with full CRM functionality. Implemented secure user authentication, transaction management, account dashboards, and administrative controls for everyday banking operations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="text-center mt-12">
              <h3 className="pixel-text text-2xl text-accent mb-6">Internship Certificates & Projects</h3>
              <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
                {/* Alibi Technologies Certificate - Full View */}
                <motion.div
                  className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h4 className="pixel-text text-xl text-accent mb-4">Alibi Technologies LLP Certificate</h4>
                  <div className="h-[400px] bg-primary relative overflow-hidden rounded-sm mb-4">
                    <Image
                      src="/certificates/internships/1687782026926130001_attach_139070748222550110_230629_124120-1.pdf-6_page-0001.jpg"
                      alt="Alibi Technologies LLP Certificate"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="hover:scale-105 transition-transform duration-300 p-2"
                      priority
                    />
                  </div>
                  <p className="mono-text text-sm text-light">
                    Certificate of completion for cybersecurity internship at Alibi Technologies LLP, where I worked on government collaboration projects.
                  </p>
                </motion.div>
                
                {/* Everyday Banking Project - Full View */}
                <motion.div
                  className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="pixel-text text-xl text-accent mb-4">Everyday Banking Solutions</h4>
                  <div className="h-[400px] bg-primary relative overflow-hidden rounded-sm mb-4">
                    <Image
                      src="/certificates/internships/everyday.png"
                      alt="Everyday Banking Solutions Website"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="hover:scale-105 transition-transform duration-300 p-2"
                      priority
                    />
                  </div>
                  <p className="mono-text text-sm text-light">
                    Screenshot of the banking website I developed with full CRM functionality, secure authentication, and comprehensive banking features.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Professional Certificates Tab */}
        {activeTab === 'certificates' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col space-y-12 max-w-4xl mx-auto">
              {/* Google AI Essentials */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Google AI Essentials_page-0001.jpg" 
                  title="Google AI Essentials Certificate" 
                  pdfPath="/certificates/professional/Google AI Essentials.pdf"
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Google AI Essentials</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Google AI Essentials.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Google Data Analytics */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Google Data Analytics_page-0001.jpg" 
                  title="Google Data Analytics Certificate" 
                  pdfPath="/certificates/professional/Google Data Analytics.pdf"
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Data Analytics Professional</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Google Data Analytics.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Google Cybersecurity */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Google Cybersecurity_page-0001.jpg" 
                  title="Google Cybersecurity Certificate" 
                  pdfPath="/certificates/professional/Google Cybersecurity.pdf"
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Cybersecurity Professional</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Google Cybersecurity.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Google IT Automation */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Google IT Automation_page-0001.jpg" 
                  title="Google IT Automation Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">IT Automation with Python</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Google IT Automation.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Google Prompting */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Google Prompting_page-0001.jpg" 
                  title="Google Prompting Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Prompt Engineering</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Google Prompting.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Generative AI Automation */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Generative AI Automation_page-0001.jpg" 
                  title="Generative AI Automation Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Generative AI Automation</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Generative AI Automation.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* Generative AI Learning Path */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/Generative Ai Learning path_page-0001.jpg" 
                  title="Generative AI Learning Path Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Generative AI Learning Path</h3>
                <p className="mono-text text-sm text-light mb-2">Google</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/Generative Ai Learning path.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* IBM AI Developer */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/IBM AI Developer_page-0001.jpg" 
                  title="IBM AI Developer Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">AI Developer</h3>
                <p className="mono-text text-sm text-light mb-2">IBM</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/IBM AI Developer.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>

              {/* IBM Full Stack Software */}
              <motion.div
                className="glass p-6 rounded-sm hover:glass-accent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <CertificateImage 
                  imagePath="/certificates/professional/IBM Full Stack Software_page-0001.jpg" 
                  title="IBM Full Stack Software Developer Certificate" 
                />
                <h3 className="pixel-text text-xl text-accent mb-2">Full Stack Software Developer</h3>
                <p className="mono-text text-sm text-light mb-2">IBM</p>
                <p className="mono-text text-sm text-light mb-4">Issued: 2025</p>
                <a 
                  href="/certificates/professional/IBM Full Stack Software.pdf" 
                  target="_blank" 
                  className="text-accent mono-text text-sm hover:underline"
                >
                  View Certificate →
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
