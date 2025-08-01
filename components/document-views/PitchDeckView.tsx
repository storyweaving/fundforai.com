import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';

const SlideWrapper = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`min-h-[60vh] flex flex-col justify-center bg-slate-900 p-8 sm:p-12 rounded-lg shadow-2xl border border-slate-700/50 ${className}`}>
    {children}
  </div>
);

const SlideTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#E6D8B9] leading-tight">{children}</h3>
);

const SlideText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <p className={`mt-4 text-base sm:text-lg text-slate-300 leading-relaxed ${className}`}>{children}</p>
);

const slidesData = [
  // Slide 1
  {
    title: "BabyTalesAI.com: Transform Your Love Into Stories",
    content: "Turn precious memories into beautiful stories that last forever—no writing experience needed.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH0AgsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAD/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9gAMAwEAAhEDEQA/AJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    alt: "Mother tenderly holding a baby and writing in a journal."
  },
  // Slide 2
  {
    type: 'threeChallenges',
    title: "The Challenge Every Parent Faces",
    challenges: [
      { title: "Stories overflow in your heart", content: "You have countless precious moments, funny sayings, and milestones that deserve to be remembered." },
      { title: "But the blank page intimidates", content: "When you sit down to write, words don't flow. Writer's block stops you before you start." },
      { title: "Time keeps slipping away", content: "Those beautiful memories fade while you wait for the 'perfect moment' to write them down." }
    ]
  },
  // Slide 3
  {
    title: "Your Stories Matter",
    content: "Every giggle, every 'first,' every sweet moment deserves to live on for generations to come.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH0AgsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAD/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9gAMAwEAAhEDEQA/AJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    alt: "Mother and child sitting in a cozy armchair reading a book together."
  },
  // Slide 4
  {
    type: 'howItWorks',
    title: "How BabyTalesAI Works Its Magic",
    steps: [
      { title: "Tell us about your little one", content: "Share basic details—their name, age, personality. We remember everything for you." },
      { title: "Start typing your story", content: "Write naturally about any memory. No pressure, no perfect sentences required." },
      { title: "AI suggests the perfect timing", content: "After 24 words, we offer two time phrases. Press 1 or 2 to add professional flow." },
      { title: "Watch your story come alive", content: "Your authentic voice plus our timing creates something truly beautiful." }
    ]
  },
  // Slide 5
  {
    title: "The Secret Behind Great Storytelling",
    content: "We studied the masters. After analyzing 20 books by Hemingway, King, Christie, and other great authors, we discovered their secret: perfect timing phrases that create rhythm and flow. Now that same literary magic helps your family stories shine.",
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH0AgsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAD/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9gAMAwEAAhEDEQA/AJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    alt: "A stack of old, classic books on a wooden table."
  },
  // Slide 6
  {
    type: 'threeBoxes',
    title: 'Your Story, Your Voice, Your Way',
    boxes: [
      { title: '100% Your Words', content: "AI doesn't write for you—it helps you write better. Every emotion and memory stays authentically yours." },
      { title: 'Add Personal Photos', content: "Include pictures of your loved ones to create a complete keepsake they'll treasure forever." },
      { title: 'Share Multiple Ways', content: 'Send the full story or create "Cliffnotes" versions perfect for busy family members.' }
    ]
  },
  // Slide 7
  {
    type: 'perfectFor',
    title: 'Perfect for Every Family Storyteller',
    groups: [
      { title: 'New Parents', content: 'Capture those precious first moments before they become hazy memories.' },
      { title: 'Grandparents', content: 'Share wisdom and create legacy stories that connect generations.' },
      { title: 'Extended Family', content: 'Document family traditions, holiday memories, and special occasions with ease.' }
    ]
  },
  // Slide 8
  {
    title: "Transform Memories Into Treasures",
    content: `"Stories are the threads that weave families together across time. With BabyTalesAI, every parent becomes a gifted storyteller."`,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAH0AgsDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAD/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9gAMAwEAAhEDEQA/AJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    alt: "A happy family of three reading a book together on a couch."
  },
  // Slide 9
  {
    type: 'numberedSteps',
    title: "Ready to Start Your Family's Story?",
    steps: [
      { title: "Visit BabyTalesAI.com today", content: "No complex setup—just you, your memories, and our gentle AI guidance." },
      { title: "Write your first story", content: "Experience how natural storytelling becomes with the right support." },
      { title: "Create lasting family treasures", content: "Build a collection of stories your family will cherish for generations." }
    ]
  },
  // Slide 10
  {
    type: 'centeredText',
    title: "Every Story Deserves to Be Told",
    content: "Don't let another precious memory slip away. Your family's stories are waiting—let BabyTalesAI.com help you share them beautifully."
  },
  // Slide 11
  {
    type: 'investment',
    title: "Invest in the Future of Family Storytelling",
    content: "This is a unique opportunity to join BabyTalesAI.com as we transform how families preserve their precious memories. Your investment fuels innovation in AI-powered storytelling, offering you access to the exciting growth potential of the artificial intelligence sector. The following websites will be rolled out during the next 10 months.",
    sites: ["GamerTalesAI.com", "PetTalesAI.com", "SportsTalesAI.com", "PinkDiaryAI.com"],
    details: "All of these sites will be controlled by WriteOn, Corporation. The value of the company on July 30, 2025 is $10 million and there are 10 million shares outstanding. The price for the stock is $1.00 per share.",
    investment: "$5,000",
    contact: {
      email: "michael@enlitrics.com",
      phone: "774-423-0083"
    }
  }
];

export const PitchDeckView = (): React.ReactNode => {
  return (
    <div className="bg-[#1E1E1E] text-slate-300 font-sans p-4 sm:p-6 md:p-8">
      <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center text-brand-accent-300">BabyTalesAI.com Pitch Deck</h2>
      <div className="space-y-8">
        {slidesData.map((slide, index) => (
          <React.Fragment key={index}>
            <SlideWrapper>
              {slide.type === 'threeChallenges' ? (
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9]">{slide.title}</h3>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {slide.challenges.map(c => (
                      <div key={c.title}>
                        <div className="flex justify-center mb-4">
                          <div className="bg-green-500 rounded-full p-2">
                            <CheckIcon className="h-6 w-6 text-white"/>
                          </div>
                        </div>
                        <h4 className="text-lg font-semibold text-white">{c.title}</h4>
                        <p className="mt-2 text-slate-400">{c.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === 'howItWorks' ? (
                <div>
                   <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9] mb-10">{slide.title}</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {slide.steps.map(s => (
                       <div key={s.title} className="bg-slate-800 p-6 rounded-lg">
                         <h4 className="text-lg font-semibold text-brand-accent-300">{s.title}</h4>
                         <p className="mt-2 text-slate-400">{s.content}</p>
                       </div>
                     ))}
                   </div>
                </div>
              ) : slide.type === 'threeBoxes' ? (
                 <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9]">{slide.title}</h3>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {slide.boxes.map(b => (
                      <div key={b.title} className="border border-slate-600 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white">{b.title}</h4>
                        <p className="mt-2 text-slate-400">{b.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === 'perfectFor' ? (
                 <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9]">{slide.title}</h3>
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {slide.groups.map(g => (
                      <div key={g.title}>
                        <h4 className="text-lg font-semibold text-brand-accent-300">{g.title}</h4>
                        <p className="mt-2 text-slate-400">{g.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === 'numberedSteps' ? (
                <div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9]">{slide.title}</h3>
                  <div className="mt-8 max-w-2xl mx-auto space-y-8">
                    {slide.steps.map((s, i) => (
                      <div key={s.title} className="flex items-start space-x-6">
                        <div className="flex-shrink-0 bg-slate-700 text-brand-accent-200 font-bold text-2xl w-12 h-12 flex items-center justify-center rounded-full">{i + 1}</div>
                        <div>
                           <h4 className="text-xl font-semibold text-white">{s.title}</h4>
                           <p className="mt-1 text-slate-400">{s.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : slide.type === 'centeredText' ? (
                <div className="text-center">
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideText className="max-w-3xl mx-auto">{slide.content}</SlideText>
                </div>
              ) : slide.type === 'investment' ? (
                <div className="max-w-4xl mx-auto">
                   <h3 className="text-2xl sm:text-3xl font-serif font-bold text-center text-[#E6D8B9]">{slide.title}</h3>
                   <SlideText className="text-center">{slide.content}</SlideText>
                   <div className="mt-6 text-center text-slate-400 italic">
                     {slide.sites.map(s => <p key={s}>*{s}</p>)}
                   </div>
                   <SlideText className="mt-4 text-center">{slide.details}</SlideText>
                   <p className="mt-4 text-center text-xl font-bold text-brand-accent-400">Minimum investment: {slide.investment}</p>
                   <div className="mt-8 bg-blue-900/30 border border-blue-700 rounded-lg p-6 text-center">
                     <h4 className="font-bold text-lg text-blue-200">Ready to learn more?</h4>
                     <p className="mt-2 text-blue-300">Contact Michael Kelly to discuss this opportunity:</p>
                     <p className="mt-2 text-blue-300">Email: {slide.contact.email}</p>
                     <p className="text-blue-300">Phone: {slide.contact.phone}</p>
                   </div>
                </div>
              ) : (
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center`}>
                  <div className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}>
                    <SlideTitle>{slide.title}</SlideTitle>
                    <SlideText>{slide.content}</SlideText>
                  </div>
                  <div className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}>
                    <img src={slide.image} alt={slide.alt} className="rounded-lg shadow-lg w-full h-auto object-cover" />
                  </div>
                </div>
              )}
            </SlideWrapper>
            {index < slidesData.length - 1 && <hr className="border-slate-800 my-4" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};