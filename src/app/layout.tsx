import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PixelBackground from '@/components/PixelBackground';
import PixelTrail from '@/components/PixelTrail';
import SpaceBackground from '@/components/SpaceBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Kevin's Portfolio",
  description: 'Personal portfolio website showcasing my projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-primary`}>
        <PixelBackground>
          {/* Space background with planets and spaceships */}
          <SpaceBackground />
          
          <Navbar />
          <main className="flex-grow z-10 relative">
            {children}
          </main>
          <Footer />
          <PixelTrail />
        </PixelBackground>
      </body>
    </html>
  );
}
