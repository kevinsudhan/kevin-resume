'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Tech stack categories
const techCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 98 },
      { name: "Framer Motion", level: 85 },
    ]
  },
  {
    name: "Backend & Database",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Supabase", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Express.js", level: 85 },
    ]
  },

  {
    name: "AI & Machine Learning",
    skills: [
      { name: "LLMs", level: 88 },
      { name: "Ollama", level: 90 },
      { name: "Llama 3", level: 85 },
      { name: "YOLO", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Computer Vision", level: 78 },
    ]
  },
  {
    name: "Deployment & Tools",
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 85 },
      { name: "CI/CD", level: 80 },
      { name: "Vercel", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Firebase", level: 85 },
    ]
  }
];

export default function TechStack() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="pixel-text text-4xl md:text-5xl text-accent">TECH STACK</h1>
            <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
            <p className="mono-text text-light mt-6 max-w-2xl mx-auto">
              My technical expertise spans across frontend, backend, and AI/ML domains.
              Here's a comprehensive overview of the technologies I work with.
            </p>
          </motion.div>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, catIdx) => (
            <section key={category.name} className="scroll-mt-20">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="pixel-text text-2xl text-accent mb-6">{category.name}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex justify-between mb-1">
                        <span className="mono-text text-sm text-light">{skill.name}</span>
                        <span className="mono-text text-xs text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-primary rounded-sm overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * skillIdx }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pixelated decoration */}
                <div className="mt-8 flex justify-end">
                  <div className="flex">
                    {Array(4).fill(0).map((_, i) => (
                      <div key={i} className={`w-4 h-4 ${i % 2 === 0 ? 'bg-accent' : 'bg-transparent'}`}></div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {catIdx < techCategories.length - 1 && (
                <div className="border-b border-gray-700 mt-12"></div>
              )}
            </section>
          ))}
        </div>

        {/* Additional Tech Interest Section */}
        <motion.section 
          className="mt-24 bg-secondary bg-opacity-70 p-8 rounded-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="pixel-text text-2xl text-accent mb-4">ALWAYS LEARNING</h2>
          <p className="mono-text text-light mb-6">
            Technology evolves rapidly, and I'm always expanding my skillset. 
            Currently exploring:
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {['Rust', 'WebAssembly', 'Svelte', 'AI Agent Development', 'Web3 DeFi', 'AR/VR'].map((tech) => (
              <div key={tech} className="bg-primary px-4 py-2 rounded-sm text-center">
                <span className="mono-text text-accent text-sm">{tech}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
