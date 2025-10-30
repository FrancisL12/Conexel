import React from 'react';

interface SolutionSectionProps {
  onImageClick: (url: string) => void;
}

const SolutionSection: React.FC<SolutionSectionProps> = ({ onImageClick }) => {
  const imageUrl = 'https://i.postimg.cc/QCVYJFN4/tema-escuro.png';

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Centralize. Analise. Encante.
          </h2>
          <p className="text-lg text-primary-200 mb-8">
            A Conexel é uma plataforma SaaS de <span className="font-semibold text-primary-400">Business Intelligence</span> projetada para que você possa:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center max-w-6xl mx-auto mb-12">
          {/* Card com borda de gradiente */}
          <div className="p-px bg-gradient-to-b from-primary-700/40 to-dark-800 rounded-lg">
            <div className="bg-dark-800 p-6 rounded-[7px] h-full">
              <h3 className="text-xl font-semibold text-white mb-2">Múltiplos clientes</h3>
              <p className="text-primary-300">Gerencie vários clientes em um só lugar.</p>
            </div>
          </div>
          <div className="p-px bg-gradient-to-b from-primary-700/40 to-dark-800 rounded-lg">
            <div className="bg-dark-800 p-6 rounded-[7px] h-full">
              <h3 className="text-xl font-semibold text-white mb-2">Dashboards Drag & Drop</h3>
              <p className="text-primary-300">Crie dashboards arrastando e soltando componentes.</p>
            </div>
          </div>
          <div className="p-px bg-gradient-to-b from-primary-700/40 to-dark-800 rounded-lg">
            <div className="bg-dark-800 p-6 rounded-[7px] h-full">
              <h3 className="text-xl font-semibold text-white mb-2">Conexão via API</h3>
              <p className="text-primary-300">Conecte dados automaticamente.</p>
            </div>
          </div>
          <div className="p-px bg-gradient-to-b from-primary-700/40 to-dark-800 rounded-lg">
            <div className="bg-dark-800 p-6 rounded-[7px] h-full">
              <h3 className="text-xl font-semibold text-white mb-2">IA Integrada</h3>
              <p className="text-primary-300">Use IA para sugerir gráficos, insights e simular cenários.</p>
            </div>
          </div>
        </div>
        <div className="text-center text-lg text-white max-w-3xl mx-auto font-medium bg-gradient-to-br from-primary-900/50 via-dark-800 to-dark-800 border border-primary-700/40 p-6 rounded-xl">
          Tudo isso com uma experiência <span className="font-bold text-primary-300">white-label</span> — o cliente final vê os relatórios com <span className="font-bold">sua marca, suas cores e sua identidade.</span>
        </div>
        <div 
          className="mt-16 mx-auto max-w-5xl p-1 bg-gradient-to-br from-primary-700/50 via-dark-800 to-dark-800 rounded-xl shadow-lg cursor-pointer group"
          onClick={() => onImageClick(imageUrl)}
          role="button"
          aria-label="Ampliar imagem do workspace"
        >
           <div className="bg-dark-800 rounded-lg overflow-hidden">
             <img 
              src={imageUrl} 
              alt="Workspace da Conexel com múltiplos clientes em cartões"
              className="rounded-lg w-full h-auto group-hover:scale-105 transition-transform duration-300"
            />
           </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
