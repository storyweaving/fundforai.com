
import React from 'react';

export const Solution = (): React.ReactNode => {
  return (
    <section className="py-20 sm:py-28 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-brand-accent-400 uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-white sm:text-4xl">
            BabyTalesAI Works Its Magic
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 lg:mx-auto">
            We've designed an intuitive and empowering experience to help you tell your story, your way.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            <div className="pt-6">
              <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-brand-accent-500 rounded-md shadow-lg">
                      <p className="text-white font-bold text-xl">1</p>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Tell us about your little one</h3>
                  <p className="mt-5 text-base text-slate-400">
                    Share basic details—their name, age, personality. We remember everything for you, providing context for AI suggestions.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-brand-accent-500 rounded-md shadow-lg">
                      <p className="text-white font-bold text-xl">2</p>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Start typing your story</h3>
                  <p className="mt-5 text-base text-slate-400">
                    Write naturally about any memory. No pressure, no perfect sentences required. Just let your thoughts flow.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-brand-accent-500 rounded-md shadow-lg">
                      <p className="text-white font-bold text-xl">3</p>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">AI suggests the perfect timing</h3>
                  <p className="mt-5 text-base text-slate-400">
                    After 24 words, we offer two time phrases inspired by literary greats. Press 1 or 2 to add professional flow, or ESC to skip.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <div className="flow-root bg-slate-900 rounded-lg px-6 pb-8">
                <div className="-mt-6">
                  <div>
                    <span className="inline-flex items-center justify-center p-3 bg-brand-accent-500 rounded-md shadow-lg">
                      <p className="text-white font-bold text-xl">4</p>
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-serif font-medium text-white tracking-tight">Watch your story come alive</h3>
                  <p className="mt-5 text-base text-slate-400">
                    Your authentic voice plus our timing assistance creates something truly beautiful. A complete keepsake to be treasured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
