import React from 'react';

interface HeroSectionProps {
  onImageClick: (url: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onImageClick }) => {
  const imageUrl = 'https://i.postimg.cc/x8qp3XjP/home.png';

  return (
    <section className="py-20 md:py-32 bg-dark-900 text-center">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">Conexel</span> — Transforme dados em decisões inteligentes.
        </h1>
        <p className="text-lg md:text-xl text-primary-200 max-w-3xl mx-auto mb-8">
          A plataforma que coloca agências, consultorias e analistas de dados no controle total de múltiplos clientes — com dashboards interativos, relatórios personalizados e inteligência artificial que pensa junto com você.
        </p>
        <a href="#cta" className="inline-block bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-primary-500/20 hover:shadow-primary-500/40 hover:scale-105 transition-all duration-300">
          👉 Descubra como a Conexel pode revolucionar sua entrega de resultados.
        </a>
        <div 
          className="mt-16 mx-auto max-w-6xl p-1 bg-gradient-to-br from-primary-700/50 via-dark-800 to-dark-800 rounded-xl shadow-2xl shadow-primary-700/20 cursor-pointer group"
          onClick={() => onImageClick(imageUrl)}
          role="button"
          aria-label="Ampliar imagem do dashboard"
        >
          <div className="bg-dark-800 rounded-lg overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Dashboard moderno da Conexel com gráficos e logotipos de clientes"
              className="rounded-lg w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
