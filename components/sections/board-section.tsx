'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function BoardSection() {
  return (
    <section id="board" className="min-h-screen flex items-center p-8 py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto w-full">
        <div className="space-y-4 mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-blue-900 dark:text-white">
            Board Members
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full" />
        </div>

        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
          <CardContent className="p-10">
            <div className="flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/assets/curtis.webp" 
                    alt="Curtis Randolph" 
                    width={128} 
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    Curtis Randolph
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">
                    Chief Executive Officer
                  </p>
                </div>

                <div className="h-px bg-slate-200 dark:bg-slate-700" />

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  Curtis Randolph is an experienced entrepreneur, inventor, and CEO of Randolph Enterprises.
                  With multiple patents and a registered trademark, he has spent nearly three decades turning
                  ideas into protected intellectual property. Curtis is deeply hands-on in the patent process—actively
                  monitoring filings, working closely with his legal team, and championing a collaborative, strategic
                  approach to IP protection.
                </p>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  His leadership philosophy is shaped by real-world lessons in transparency, predictable costs,
                  and the value of fixed-fee professional services that allow entrepreneurs to plan with confidence.
                  Curtis is committed to sharing his expertise, maintaining strong relationships with trusted advisors,
                  and supporting fellow innovators in navigating the complexities of intellectual property. Through
                  Randolph Enterprises, he continues to advance new solutions while empowering others to safeguard
                  their ideas.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
