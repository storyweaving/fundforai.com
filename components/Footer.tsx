
import React from 'react';

export const Footer = (): React.ReactNode => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} WriteOn, Corporation. All rights reserved.</p>
        <p className="mt-2 text-sm">
          This is not an offer to sell securities. All investment opportunities are subject to due diligence and professional advice.
        </p>
      </div>
    </footer>
  );
};
