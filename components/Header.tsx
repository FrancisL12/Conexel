import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-sm border-b border-dark-700/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-wider">
          <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">Conex</span>el
        </div>
        <a 
          href="#cta"
          className="bg-gradient-to-r from-primary-700 to-primary-600 text-white font-semibold px-4 py-2 rounded-lg hover:from-primary-600 hover:to-primary-500 transition-all duration-300 text-sm shadow-md"
        >
          Quero desenvolver
        </a>
      </div>
    </header>
  );
};

export default Header;