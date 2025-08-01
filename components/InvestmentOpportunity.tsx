
import React from 'react';

export const InvestmentOpportunity = (): React.ReactNode => {
  return (
    <section id="opportunity" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">The Secret Behind Great Storytelling</h2>
            <p className="mt-4 text-lg text-slate-400">
              We studied the masters. After analyzing 20 books by Hemingway, King, Christie, and other great authors, we discovered their secret: perfect timing phrases that create rhythm and flow. Now that same literary magic helps your family stories shine.
            </p>
            <h3 className="mt-10 text-2xl font-serif font-bold text-white">The Bigger Picture: A Universe of Stories</h3>
            <p className="mt-4 text-lg text-slate-400">
              BabyTalesAI.com is just the beginning. It represents a significant foothold in the burgeoning AI-powered storytelling sector. WriteOn, Corporation, the parent company, is strategically expanding this innovative approach across diverse interests. Over the next 10 months, we will be rolling out additional specialized AI writing applications:
            </p>
            <ul className="mt-6 space-y-2 text-slate-400 list-disc list-inside">
              <li>GamerTalesAI.com</li>
              <li>PetTalesAI.com</li>
              <li>SportsTalesAI.com</li>
              <li>PinkDiaryAI.com</li>
            </ul>
            <p className="mt-4 text-lg text-slate-400">
              This diversified portfolio positions WriteOn, Corporation to capture significant market share across various niche content creation needs, all powered by our proprietary AI-assisted writing framework.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              className="rounded-lg shadow-2xl w-full max-w-md object-cover" 
              src="https://picsum.photos/600/700?random=2" 
              alt="A stack of classic books"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
