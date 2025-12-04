'use client';

import Image from 'next/image';
import { Menu, X, ChevronRight } from 'lucide-react';

interface SideNavProps {
  activeSection: string;
  isNavOpen: boolean;
  setIsNavOpen: (open: boolean) => void;
  scrollToSection: (sectionId: string) => void;
}

export function SideNav({ activeSection, isNavOpen, setIsNavOpen, scrollToSection }: SideNavProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'board', label: 'Board' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <button
        onClick={() => setIsNavOpen(!isNavOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden p-2 rounded-lg bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all"
      >
        {isNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <nav
        className={`fixed top-0 left-0 h-full bg-white dark:bg-slate-900 shadow-2xl z-40 transition-all duration-300 border-r border-blue-100 dark:border-blue-900 ${
          isNavOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } w-64`}
      >
        <div className="p-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-center">
            <Image 
              src="/assets/logo.png" 
              alt="Randolph Enterprises" 
              width={150} 
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        <div className="p-6 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                activeSection === item.id
                  ? 'bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-600 dark:to-blue-500 text-white shadow-lg'
                  : 'hover:bg-blue-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span className="font-medium">{item.label}</span>
              <ChevronRight
                className={`w-4 h-4 transition-transform ${
                  activeSection === item.id ? 'translate-x-1' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500 text-center">
            © 2025 Randolph Enterprises
          </p>
        </div>
      </nav>

      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}
    </>
  );
}
