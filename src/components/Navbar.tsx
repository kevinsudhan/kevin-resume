'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary bg-opacity-95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="pixel-text text-accent text-xl">Kevin.dev</h1>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="mono-text text-light hover:text-accent px-3 py-2 text-sm">
                Home
              </Link>
              <Link href="/projects" className="mono-text text-light hover:text-accent px-3 py-2 text-sm">
                Projects
              </Link>
              <Link href="/tech-stack" className="mono-text text-light hover:text-accent px-3 py-2 text-sm">
                Tech Stack
              </Link>
              <Link href="/credentials" className="mono-text text-light hover:text-accent px-3 py-2 text-sm">
                Credentials
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-accent focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary">
            <Link href="/" className="mono-text text-light hover:text-accent block px-3 py-2 text-base">
              Home
            </Link>
            <Link href="/projects" className="mono-text text-light hover:text-accent block px-3 py-2 text-base">
              Projects
            </Link>
            <Link href="/tech-stack" className="mono-text text-light hover:text-accent block px-3 py-2 text-base">
              Tech Stack
            </Link>
            <Link href="/credentials" className="mono-text text-light hover:text-accent block px-3 py-2 text-base">
              Credentials
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
