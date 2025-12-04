'use client';

import { Building2 } from 'lucide-react';
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
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-slate-900">
              <CardContent className="p-8">
                <div className="inline-block p-3 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl mb-4">
                  <Building2 className="w-8 h-8 text-white" />
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

            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-amber-50 to-white dark:from-amber-900/20 dark:to-slate-900">
              <CardContent className="p-8">
                <div className="inline-block p-3 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl mb-4">
                  <Building2 className="w-8 h-8 text-white" />
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
          </div>
        </div>
      </div>
    </section>
  );
}
