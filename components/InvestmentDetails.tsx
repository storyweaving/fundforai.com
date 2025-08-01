
import React from 'react';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

export const InvestmentDetails = (): React.ReactNode => {
  return (
    <section id="invest" className="py-20 sm:py-28 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
            Join Us in Shaping the Future of Narrative
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-400">
            This is a unique opportunity to invest in a company that is not only addressing a deeply human need – the preservation of memories – but is also innovating at the forefront of artificial intelligence.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Investment Info */}
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-serif font-bold text-white">Investment Details</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li className="flex justify-between">
                <span className="font-semibold">Company:</span>
                <span>WriteOn, Corporation</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Valuation:</span>
                <span>$10,000,000 (as of July 30, 2025)</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Shares Outstanding:</span>
                <span>10,000,000</span>
              </li>
              <li className="flex justify-between">
                <span className="font-semibold">Share Price:</span>
                <span>$1.00</span>
              </li>
              <li className="flex justify-between border-t border-slate-700 pt-4 mt-4">
                <span className="font-semibold text-brand-accent-400">Minimum Investment:</span>
                <span className="font-bold text-brand-accent-400">$5,000</span>
              </li>
            </ul>
          </div>

          {/* Payment Options */}
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-serif font-bold text-white">How to Invest</h3>
            <p className="mt-4 text-slate-400">Choose your preferred method to invest. For all online payments, please specify "WriteOn, Corp Investment" in the memo.</p>
            <div className="mt-6 space-y-4">
              <a href="#" className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Invest with Stripe <ExternalLinkIcon className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-full bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-colors">
                Invest with PayPal <ExternalLinkIcon className="ml-2 h-5 w-5" />
              </a>
              <a href="#" className="flex items-center justify-center w-full bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-500 transition-colors">
                Invest with Venmo <ExternalLinkIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 border-t border-slate-700 pt-6">
              <h4 className="font-semibold text-white">Invest by Check</h4>
              <p className="mt-2 text-slate-400">Please make checks payable to "WriteOn, Corporation" and mail to:</p>
              <address className="mt-2 not-italic text-slate-300">
                1 Belvidere Road<br/>
                Framingham, MA 01702
              </address>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-blue-900/20 border border-blue-800 text-blue-200 px-4 py-3 rounded-lg relative" role="alert">
            <strong className="font-bold">Ready to learn more?</strong>
            <p className="block sm:inline mt-2 sm:mt-0 sm:ml-2">Contact Michael Kelly to discuss this opportunity:</p>
            <div className="mt-3">
              <p><strong>Email:</strong> michael@enlitrics.com</p>
              <p><strong>Phone:</strong> 774-423-0083</p>
            </div>
        </div>

        <div className="mt-16 bg-yellow-400 text-black p-6 rounded-lg" role="alert">
          <p className="text-sm">
            <strong className="font-bold">Warning:</strong> Investing in this AI writing app startup involves substantial financial risk. Like all early-stage ventures, there is a significant possibility you may lose your entire investment. Startups face numerous challenges including market competition, technological hurdles, regulatory changes, and funding difficulties. The AI industry is rapidly evolving and highly competitive, with no guarantee of success or profitability. Past performance or projections do not predict future results. Only invest money you can afford to lose completely. This investment is suitable only for sophisticated investors who understand startup risks. Consult with financial advisors before making investment decisions. Proceed with full awareness of potential total loss.
          </p>
        </div>

      </div>
    </section>
  );
};
