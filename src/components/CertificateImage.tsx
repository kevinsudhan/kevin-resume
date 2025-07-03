'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CertificateImageProps {
  imagePath: string;
  title: string;
  pdfPath?: string;
}

const CertificateImage = ({ imagePath, title, pdfPath }: CertificateImageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle click on certificate
  const handleCertificateClick = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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

      {/* Modal for larger certificate view */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90" onClick={closeModal}>
          <div className="relative max-w-5xl w-[95%] h-[90vh] bg-white rounded-lg">
            <button 
              className="absolute top-4 right-4 z-10 bg-accent text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                closeModal();
              }}
            >
              ×
            </button>
            <div className="relative w-full h-full p-4">
              {/* Use the image path from the certificate */}
              <img 
                src={imagePath} 
                alt={title}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateImage;
