'use client';

import { Building2 } from 'lucide-react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg">
              <Building2 className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Randolph Enterprises</h3>
              <p className="text-sm text-slate-400">Innovating Tomorrow</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('board')}
              className="hover:text-white transition-colors"
            >
              Board
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-400">
          <p>© 2025 Randolph Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
