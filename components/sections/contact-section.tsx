'use client';

import { Building2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center p-8 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="space-y-4 mb-12 animate-fade-in text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
            Get in Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400 rounded-full mx-auto" />
        </div>

        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-10 text-center space-y-6">
            <div className="inline-block p-4 bg-slate-900 dark:bg-slate-100 rounded-2xl mb-4">
              <Building2 className="w-12 h-12 text-white dark:text-slate-900" />
            </div>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              Let's Work Together
            </h3>

            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Interested in learning more about Randolph Enterprises or discussing how we can help
              protect and advance your innovative ideas? We'd love to hear from you.
            </p>

            <div className="pt-6">
              <Button
                size="lg"
                className="text-lg px-12 py-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              >
                Contact Us
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
