'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center p-8 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-4 mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white">
            About Us
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
        </div>

        <div className="space-y-8">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                Randolph Enterprises stands at the forefront of innovation and entrepreneurship,
                dedicated to turning visionary ideas into reality while empowering fellow innovators
                to protect and advance their intellectual property.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://www.lowridersolutions.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900 h-full">
                <CardContent className="p-8">
                  <div className="inline-block mb-4">
                    <Image 
                      src="/assets/lowridersol.png" 
                      alt="Lowrider Solutions" 
                      width={120} 
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Lowrider Solutions
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    A division focused on innovative automotive solutions, bringing cutting-edge
                    technology and design to the automotive industry with a unique approach to
                    customization and performance.
                  </p>
                </CardContent>
              </Card>
            </a>

            <a href="https://www.goodchefco.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-900 h-full">
                <CardContent className="p-8">
                  <div className="inline-block mb-4">
                    <Image 
                      src="/assets/goodchef.png" 
                      alt="Good Chef Co" 
                      width={120} 
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                    Good Chef Co
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    Revolutionizing the culinary industry with innovative food service solutions
                    and products that blend tradition with modern convenience, bringing exceptional
                    quality to every table.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
