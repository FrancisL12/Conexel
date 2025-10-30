import React from 'react';

const SocialProofSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 p-px bg-gradient-to-br from-primary-700/30 to-dark-700/30 rounded-lg">
            <blockquote className="text-xl md:text-2xl italic text-white leading-relaxed p-8 bg-gradient-to-br from-dark-700 to-dark-800/80 rounded-[7px] relative">
               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-600 to-primary-700 rounded-l-lg"></div>
              <p>“Com a Conexel, conseguimos entregar relatórios que nossos clientes entendem de verdade. A análise virou conversa, e os dados, decisões.”</p>
              <footer className="mt-4 text-base not-italic font-semibold text-primary-500">— Agência DataVis, cliente piloto</footer>
            </blockquote>
          </div>
          <div className="mt-12">
            <h3 className="text-lg text-primary-300 uppercase tracking-widest mb-6">Utilizado por agências e consultorias de ponta</h3>
            <div className="flex justify-center items-center space-x-8 md:space-x-12 opacity-60">
              <span className="text-2xl font-bold">Logoipsum</span>
              <span className="text-2xl font-bold">DATAVIZ</span>
              <span className="text-2xl font-bold">INSIGHTS</span>
              <span className="hidden md:inline-block text-2xl font-bold">ANALYTICA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;