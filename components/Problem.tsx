
import React from 'react';
import { CheckIcon } from './icons/CheckIcon';

const challenges = [
  {
    title: 'Stories Overflow in Your Heart',
    description: "You have countless precious moments, funny sayings, and milestones that deserve to be remembered."
  },
  {
    title: 'But the Blank Page Intimidates',
    description: "When you sit down to write, words don't flow. Writer's block stops you before you start."
  },
  {
    title: 'Time Keeps Slipping Away',
    description: 'Those beautiful memories fade while you wait for the "perfect moment" to write them down.'
  }
];

export const Problem = (): React.ReactNode => {
  return (
    <section className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
            The Challenge Every Parent Faces
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Every family has a story to tell, but turning memories into lasting treasures can be daunting.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-3 lg:gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-slate-800 rounded-lg">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                  <CheckIcon className="h-6 w-6" />
                </div>
              </div>
              <h3 className="mt-5 text-xl font-serif font-semibold text-white">{challenge.title}</h3>
              <p className="mt-2 text-base text-slate-400">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
