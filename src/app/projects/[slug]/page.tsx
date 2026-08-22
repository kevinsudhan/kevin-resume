'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import ImageModal from '@/components/ImageModal';

// Import project data
interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Since we're in a dynamic route, we need to manually import the project data
const allProjects: Project[] = [
  {
    id: 'whistle',
    title: 'WHISTLE',
    description: 'A decentralized peer-to-peer lending platform built on blockchain technology, enabling trust-based community lending without traditional banking infrastructure.',
    images: ['/WHISTLE/WhatsApp Image 2025-06-02 at 7.05.27 PM (2).webp', '/WHISTLE/WhatsApp Image 2025-06-02 at 7.05.27 PM (3).webp', '/WHISTLE/WhatsApp Image 2025-06-02 at 7.05.28 PM (3).webp'],
    techStack: ['React', 'JavaScript', 'Web3', 'Ethereum Chain', 'Solidity', 'Tailwind']
  },
  {
    id: 'mithra',
    title: 'MITHRA',
    description: 'An AI-powered healthcare assistant using edge computing and local LLMs for real-time patient monitoring, multilingual support, and personalized care while maintaining strict privacy standards.',
    images: ['/MITHRA/WhatsApp Image 2025-06-11 at 1.57.48 PM.webp', '/MITHRA/WhatsApp Image 2025-06-11 at 1.57.48 PM (1).webp', '/MITHRA/WhatsApp Image 2025-06-11 at 1.57.49 PM.webp'],
    techStack: ['React', 'TypeScript', 'Llama 3', 'TensorFlow', 'Raspberry Pi']
  },
  {
    id: 'ebs',
    title: 'EBS',
    description: 'A comprehensive digital ecosystem for a financial services company, including modern web presence, interactive service showcase, and integrated operations management.',
    images: ['/EBS/Screenshot 2025-06-11 142940.webp', '/EBS/Screenshot 2025-06-11 143005.webp', '/EBS/Screenshot 2025-06-11 143029.webp'],
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Tailwind', 'Framer Motion']
  },
  {
    id: 'newsbot',
    title: 'NEWS BOT',
    description: 'An automated financial news aggregator that combines data from multiple sources, analyzes market sentiment, and provides real-time alerts for stock traders.',
    images: ['/NEWS BOT/MAIN_SCREEN.webp', '/NEWS BOT/Screenshot 2025-06-11 141553.webp'],
    techStack: ['Python', 'React', 'Twitter API v2', 'Reddit JSON API', 'Yahoo Finance API']
  },
  {
    id: 'stams',
    title: 'STAMS',
    description: 'Smart Traffic Accident Management System using LIDAR and computer vision to monitor traffic patterns, predict potential accidents, and optimize emergency response.',
    images: ['/STAMS/Screenshot 2025-06-11 143834.webp', '/STAMS/WhatsApp Image 2025-06-11 at 2.36.11 PM (1).webp', '/STAMS/WhatsApp Image 2025-06-11 at 2.36.12 PM.webp'],
    techStack: ['Python', 'LIDAR', 'TensorFlow', 'YOLO', 'ESP32']
  },
  {
    id: 'dynabraille',
    title: 'DYNA BRAILLE',
    description: 'A dynamic tactile Braille system that combines computer vision and mechatronics to help visually impaired users interact with their environment through touch and audio feedback.',
    images: ['/DYNA BRAILLE/WhatsApp Image 2025-06-11 at 2.27.42 PM (2).webp', '/DYNA BRAILLE/WhatsApp Image 2025-06-11 at 2.27.42 PM (1).webp', '/DYNA BRAILLE/WhatsApp Image 2025-06-11 at 2.27.42 PM (3).webp'],
    techStack: ['Raspberry Pi', 'Python', 'Computer Vision', 'Solenoids', 'MOSFETs']
  },
  {
    id: 'demete',
    title: 'DEMETE',
    description: 'A decentralized food delivery marketplace using blockchain for transparent tracking, secure payments, and trustless reviews between restaurants and customers.',
    images: ['/DEMETE/Screenshot 2025-06-11 144734.webp'],
    techStack: ['React', 'Node.js', 'Blockchain', 'DApp', 'LIFI Protocol']
  }
];

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

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = allProjects.find((p: Project) => p.id === slug as string);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="pixel-text text-3xl text-accent">Project Not Found</h1>
          <Link href="/projects" className="block mt-8 pixel-text text-light hover:text-accent transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  // Additional details specific to each project
  type ProjectDetails = {
    challenge: string;
    solution: string;
    features: string[];
  };
  
  const projectDetails: Record<string, ProjectDetails> = {
    'whistle': {
      challenge: "Creating a secure, decentralized lending platform that maintains trust without traditional banking infrastructure.",
      solution: "Implemented blockchain-based identity verification and smart contracts to automate loan disbursements and repayments within trusted communities.",
      features: [
        "Smart contract-based loan agreements",
        "Community-based trust scoring",
        "Automated disbursements and collections",
        "Peer endorsement system"
      ]
    },
    'mithra': {
      challenge: "Building an AI health assistant that maintains privacy while providing real-time monitoring and support.",
      solution: "Developed an edge-computing solution with local LLM processing and minimal cloud dependencies for patient data privacy.",
      features: [
        "Real-time vital monitoring",
        "Multilingual voice interaction",
        "Sentiment analysis for mental health support",
        "Emergency alert system",
        "Local AI processing for privacy"
      ]
    },
    'ebs': {
      challenge: "Creating a comprehensive digital presence and operational system for a financial services company.",
      solution: "Built a modern website with service showcasing and an integrated CRM system to manage customer relationships and operations.",
      features: [
        "Dynamic service listings",
        "Branch locator with maps integration",
        "Customer relationship management",
        "Appointment scheduling system",
        "Document management and verification"
      ]
    },
    'newsbot': {
      challenge: "Developing a real-time news aggregation system for stock traders that filters relevant information.",
      solution: "Created a multi-source news aggregator with customizable watchlists and real-time alerts based on user preferences.",
      features: [
        "Multi-source financial news aggregation",
        "Customizable stock watchlists",
        "Real-time price alerts",
        "Sentiment analysis of news articles",
        "Historical correlation data"
      ]
    },
    'stams': {
      challenge: "Addressing traffic congestion and accident response through real-time monitoring and AI intervention.",
      solution: "Implemented LIDAR and AI object detection systems to monitor traffic patterns and identify potential accidents in real-time.",
      features: [
        "Real-time traffic monitoring",
        "Accident prediction algorithms",
        "Emergency services notification",
        "Traffic flow optimization",
        "Pedestrian safety alerts"
      ]
    },
    'dynabraille': {
      challenge: "Creating an affordable, portable solution for the visually impaired to interact with their environment.",
      solution: "Developed a tactile feedback system combining computer vision, voice assistance, and dynamic Braille display.",
      features: [
        "Real-time environment scanning",
        "Object recognition and description",
        "Dynamic tactile feedback",
        "Voice assistance and navigation",
        "Text recognition and translation to Braille"
      ]
    },
    'demete': {
      challenge: "Building trust and transparency in the food delivery ecosystem through blockchain technology.",
      solution: "Implemented a decentralized application for food delivery with transparent tracking, payments, and reviews.",
      features: [
        "Blockchain-verified delivery tracking",
        "Smart contract payment protection",
        "Decentralized review system",
        "Tokenized loyalty program",
        "Direct chef-to-consumer marketplace"
      ]
    }
  };

  const projectId = project?.id as string;
  const additionalDetails = projectDetails[projectId] || {
    challenge: "Addressing complex technical problems in an innovative way.",
    solution: "Implemented cutting-edge technologies to create effective solutions.",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <Link href="/projects" className="inline-block mb-8 pixel-text text-light hover:text-accent transition-colors">
          ← Back to Projects
        </Link>
        
        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="pixel-text text-4xl md:text-5xl text-accent">{project.title}</h1>
          <div className="w-24 h-1 bg-accent mt-4"></div>
        </motion.div>
        
        {/* Project showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden pixel-border border-accent cursor-pointer">
              <div className="w-full h-64 md:h-96 relative" onClick={() => setSelectedImage(project.images[0])}>
                <Image
                  src={project.images[0]}
                  alt={`${project.title} main image`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                  <span className="pixel-text text-accent opacity-0 hover:opacity-100 text-xl">View Image</span>
                </div>
              </div>
            </div>
            
            {project.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {project.images.slice(1).map((image: string, i: number) => (
                  <div key={i} className="aspect-w-16 aspect-h-9 relative overflow-hidden pixel-border border-accent cursor-pointer">
                    <div className="w-full h-36 md:h-48 relative" onClick={() => setSelectedImage(image)}>
                      <Image
                        src={image}
                        alt={`${project.title} image ${i + 2}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 flex items-center justify-center transition-all duration-300">
                        <span className="pixel-text text-accent opacity-0 hover:opacity-100">View Image</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
          
          {/* Project details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="mono-text text-2xl text-light mb-4">Overview</h2>
              <p className="text-light/80 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div>
              <h2 className="mono-text text-2xl text-light mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech: string) => (
                  <div key={tech} className="flex items-center px-3 py-2 bg-dark pixel-border border-accent">
                    <img 
                      src={techIcons[tech] || fallbackIcon}
                      alt={tech}
                      width={24}
                      height={24}
                      style={{ width: '24px', height: '24px', marginRight: '8px', objectFit: 'contain' }}
                    />
                    <span className="mono-text text-sm text-light">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Additional project details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
        >
          <div>
            <h2 className="mono-text text-2xl text-light mb-4">Challenge</h2>
            <p className="text-light/80 leading-relaxed">{additionalDetails?.challenge}</p>
          </div>
          
          <div>
            <h2 className="mono-text text-2xl text-light mb-4">Solution</h2>
            <p className="text-light/80 leading-relaxed">{additionalDetails?.solution}</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-1 gap-12"
        >
          <div>
            <h2 className="mono-text text-2xl text-light mb-4">Key Features</h2>
            <ul className="list-inside space-y-2">
              {additionalDetails?.features?.map((feature: string, i: number) => (
                <li key={i} className="flex items-start">
                  <div className="mt-1 mr-2 min-w-4 h-4 bg-accent"></div>
                  <span className="text-light/80">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
        altText={`${project?.title || 'Project'} image`}
      />
    </div>
  );
}
