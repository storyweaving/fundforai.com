
import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { InvestmentOpportunity } from './components/InvestmentOpportunity';
import { Documents } from './components/Documents';
import { InvestmentDetails } from './components/InvestmentDetails';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { BlogPostView } from './components/document-views/BlogPostView';

export enum DocumentType {
  BlogPost,
}

function App(): React.ReactNode {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (docType: DocumentType) => {
    switch (docType) {
      case DocumentType.BlogPost:
        setModalContent(<BlogPostView />);
        break;
      default:
        setModalContent(null);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="bg-slate-900 text-slate-300">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <InvestmentOpportunity />
        <Documents onOpenModal={openModal} />
        <InvestmentDetails />
      </main>
      <Footer />
      {isModalOpen && modalContent && (
        <Modal onClose={closeModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
}

export default App;
