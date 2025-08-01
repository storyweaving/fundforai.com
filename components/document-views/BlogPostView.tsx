
import React from 'react';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-serif font-bold mb-3 text-brand-accent-300">{title}</h3>
    <div className="space-y-4 text-slate-300 leading-relaxed">{children}</div>
  </div>
);

export const BlogPostView = (): React.ReactNode => {
  return (
    <div className="p-8 md:p-12 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-brand-accent-400">Invest in the Narrative: Why AI-Powered Storytelling, Starting with BabyTalesAI.com, is the Next Frontier</h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <img src="https://picsum.photos/800/400?random=20" alt="BabyTalesAI App Screenshot" className="rounded-lg shadow-lg border border-slate-700"/>
        </div>

        <Section title="The Unwritten Stories: A Universal Challenge">
          <p>Every parent knows the feeling: a heart overflowing with countless precious moments. Yet, for many, the desire to document these treasures is often met with a formidable challenge: the blank page. Writer's block, a lack of time, or simply the intimidation of crafting the "perfect" narrative means that countless beautiful memories fade, unrecorded and eventually lost to time.</p>
        </Section>

        <Section title="BabyTalesAI.com: Empowering Every Family Storyteller">
          <p>Enter BabyTalesAI.com, the flagship AI writing application from WriteOn, Corporation. This innovative web application is designed to dismantle the barriers to storytelling, making it accessible and enjoyable for everyone, regardless of writing skill.</p>
          <div className="mt-4 p-4 bg-slate-900 rounded-lg border border-slate-700">
            <h4 className="font-semibold text-white">Here's how it works its magic:</h4>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li><strong>Your Memories, Your Words:</strong> Users simply share basic details about their little one and begin typing naturally about any memory.</li>
              <li><strong>AI-Powered Guidance from Literary Masters:</strong> The secret sauce lies in our unique AI integration. After analyzing the works of great authors, our AI has identified perfect timing phrases that create rhythm and flow. As a user types, specifically after every 24 words, the keyboard gently locks, and the AI offers two contextually relevant time reference suggestions.</li>
              <li><strong>A Complete Keepsake:</strong> Beyond the writing, BabyTalesAI allows users to add personal photos, creating a rich, multimedia narrative.</li>
            </ul>
          </div>
        </Section>

        <Section title="The Bigger Picture: Investing in the Future of AI Storytelling">
          <p>BabyTalesAI.com is just the beginning. It represents a significant foothold in the burgeoning AI-powered storytelling sector. WriteOn, Corporation, the parent company, is strategically expanding this innovative approach across diverse interests.</p>
          <p>Over the next 10 months, we will be rolling out additional specialized AI writing applications: GamerTalesAI.com, PetTalesAI.com, SportsTalesAI.com, and PinkDiaryAI.com.</p>
        </Section>
        
        <Section title="The Investment Opportunity">
           <p>This is a unique opportunity to invest in a company that is not only addressing a deeply human need – the preservation of memories and stories – but is also innovating at the forefront of artificial intelligence. Your investment fuels the continued development and expansion of this transformative technology.</p>
            <div className="mt-6 bg-slate-800 p-6 rounded-lg border border-slate-700">
                <h4 className="text-xl font-serif font-bold text-white mb-4">Investment Details</h4>
                <ul className="space-y-3 text-slate-300">
                    <li className="flex justify-between"><span>Company Valuation:</span> <strong>$10 million (as of July 30, 2025)</strong></li>
                    <li className="flex justify-between"><span>Shares Outstanding:</span> <strong>10 million</strong></li>
                    <li className="flex justify-between"><span>Share Price:</span> <strong>$1.00</strong></li>
                    <li className="flex justify-between border-t border-slate-600 pt-3 mt-3"><span>Minimum Investment:</span> <strong className="text-brand-accent-400">$5,000</strong></li>
                </ul>
            </div>
        </Section>
      </div>
    </div>
  );
};
