import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-to-tr from-dark-900 via-primary-900/40 to-dark-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Pronto para transformar a forma como seus clientes enxergam dados?
        </h2>
        <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto mb-10">
          Contrate o desenvolvimento da Conexel e leve para o seu escritório uma plataforma de BI que combina <span className="font-semibold text-primary-300">design, inteligência e eficiência</span> — pronta para o futuro.
        </p>
        <a 
          href="#"
          className="inline-block bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 text-dark-900 font-bold text-xl px-10 py-5 rounded-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-400/50 transform hover:scale-105 transition-all duration-300"
        >
          🚀 Quero desenvolver a Conexel para meu negócio
        </a>
      </div>
    </section>
  );
};

export default CtaSection;