
import React from 'react';
import { DocumentType } from '../App';

interface DocumentsProps {
  onOpenModal: (docType: DocumentType) => void;
}

export const Documents = ({ onOpenModal }: DocumentsProps): React.ReactNode => {
  return (
    <section id="documents" className="py-20 sm:py-28 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-serif font-bold text-white sm:text-4xl">
          Due Diligence & Vision
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
          Explore our vision, research, and the investment narrative in detail.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="https://docs.google.com/presentation/d/1VFku0xlkBGFTSDH3HcJ0UwE5yT2JwdpVAHTncsw7H1c/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-accent-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-brand-accent-600 transition-colors transform hover:scale-105"
          >
            View Pitch Deck
          </a>
          <a
            href="https://docs.google.com/document/d/1j4UTLFc0SPpA6ixnSmdm-Cw6ME1LJRgN_9SiwgQOJqo/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors transform hover:scale-105"
          >
            Read White Paper
          </a>
          <button
            onClick={() => onOpenModal(DocumentType.BlogPost)}
            className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors transform hover:scale-105"
          >
            Investment Narrative
          </button>
          <a
            href="https://www.loom.com/share/769281d9b50d4eb4b0b5f4ddf9e5f034?sid=7f7e3376-c789-4bb1-8881-6500bbc7d1e3"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors transform hover:scale-105"
          >
            App Demonstration
          </a>
        </div>
      </div>
    </section>
  );
};
