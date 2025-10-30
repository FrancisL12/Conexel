import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-dark-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl italic text-primary-300 max-w-4xl mx-auto mb-8">
          Os dados contam histórias. Mas só quem tem as ferramentas certas consegue ouvir o que eles realmente dizem. Com a Conexel, cada número ganha voz, cada gráfico ganha propósito — e cada cliente enxerga o valor do seu trabalho.
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-dark-900 via-primary-700 to-dark-900 mx-auto my-10"></div>
        <div className="text-2xl font-bold text-white tracking-wider mb-4">
          💫 <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">Conex</span>el
        </div>
        <p className="text-lg font-semibold text-white">
          A inteligência por trás de decisões que transformam.
        </p>
        <div className="mt-8 text-sm text-primary-400 opacity-60">
          © {new Date().getFullYear()} Conexel. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;