
import React from 'react';

export const Hero = (): React.ReactNode => {
  const scrollToInvest = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#invest')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section className="relative bg-slate-800">
        <div className="absolute inset-0">
            <img className="w-full h-full object-cover" src="https://picsum.photos/1920/1080?random=1" alt="Family reading a book" />
            <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
            <h1 className="text-4xl font-serif font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Invest in the Future of Family Storytelling
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
                Join BabyTalesAI.com as we transform how families preserve their precious memories. Your investment fuels innovation in AI-powered storytelling, offering access to the exciting growth potential of the artificial intelligence sector.
            </p>
            <div className="mt-10">
                <a 
                    href="#invest" 
                    onClick={scrollToInvest}
                    className="bg-brand-accent-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-accent-600 transition-all transform hover:scale-105"
                >
                    Invest Now
                </a>
            </div>
        </div>
    </section>
  );
};
