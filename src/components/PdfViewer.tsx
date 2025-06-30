'use client';

import React from 'react';

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, title }) => {
  return (
    <div className="h-48 bg-primary mb-4 overflow-hidden relative">
      <iframe 
        src={`${pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
        title={title}
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary bg-opacity-50 hover:bg-opacity-0 transition-opacity duration-300">
        <span className="pixel-text text-accent text-center">View Certificate</span>
      </div>
    </div>
  );
};

export default PdfViewer;
