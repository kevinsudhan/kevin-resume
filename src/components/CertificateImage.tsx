'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateImageProps {
  imagePath: string;
  title: string;
  pdfPath?: string; // Optional PDF path for viewing the full certificate
}

const CertificateImage: React.FC<CertificateImageProps> = ({ imagePath, title, pdfPath }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle click on certificate
  const handleCertificateClick = () => {
    // Show an alert that PDFs are not available yet
    alert('Certificate PDF is not available yet. This feature will be enabled soon.');
    
    // Commented out the original functionality for future use when PDFs are available
    // if (pdfPath) {
    //   window.open(pdfPath, '_blank');
    // } else {
    //   // If no PDF path is provided, use the image path but replace the extension
    //   // This assumes that PDFs are named the same as images but with .pdf extension
    //   const inferredPdfPath = imagePath.replace(/\.(jpg|jpeg|png)(_page-\d+)?$/i, '.pdf');
    //   window.open(inferredPdfPath, '_blank');
    // }
  };

  return (
    <motion.div 
      className="h-[400px] bg-primary mb-6 overflow-hidden relative rounded-sm shadow-lg cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onClick={handleCertificateClick}
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
