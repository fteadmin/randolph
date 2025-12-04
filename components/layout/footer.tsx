'use client';

import Image from 'next/image';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-blue-100 dark:bg-slate-800 text-slate-900 dark:text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/assets/logo.png" 
              alt="Randolph Enterprises" 
              width={120} 
              height={48}
              className="object-contain"
            />
          </div>

          <div className="flex gap-6 text-sm text-slate-600 dark:text-slate-400">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('board')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Board
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-300 dark:border-slate-700 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© 2025 Randolph Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
