'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateImageProps {
  imagePath: string;
  title: string;
}

const CertificateImage: React.FC<CertificateImageProps> = ({ imagePath, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="h-[400px] bg-primary mb-6 overflow-hidden relative rounded-sm shadow-lg"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full">
        <Image
          src={imagePath}
          alt={title}
          fill
          style={{ objectFit: 'contain' }}
          className="transition-transform duration-300 ease-in-out p-2"
          priority
        />
        
        {/* Overlay on hover */}
        <motion.div 
          className="absolute inset-0 bg-primary bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="pixel-text text-accent text-center px-4 text-xl">View Certificate</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificateImage;
