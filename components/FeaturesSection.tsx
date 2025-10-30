import React from 'react';

interface FeatureItemProps {
  title: string;
  description: string;
  imageUrl: string;
  altText: string;
  reverse?: boolean;
  onImageClick: (url: string) => void;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, imageUrl, altText, reverse = false, onImageClick }) => {
  const flexDirection = reverse ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div className={`flex flex-col ${flexDirection} items-center gap-8 md:gap-12`}>
      <div className="md:w-1/2">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-primary-200">
          {description}
        </p>
      </div>
      <div 
        className="md:w-1/2 w-full p-px bg-gradient-to-br from-primary-700/40 to-dark-800/40 rounded-lg shadow-lg cursor-pointer group"
        onClick={() => onImageClick(imageUrl)}
        role="button"
        aria-label={`Ampliar imagem: ${altText}`}
      >
        <div className="bg-dark-800 rounded-[7px] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={altText} 
            className="rounded-md w-full h-auto group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: '1️⃣ Workspaces Inteligentes – Tudo organizado, cliente por cliente',
    description: 'Gerencie todos os seus clientes em um painel visual, limpo e intuitivo. Cada cartão é um portal direto para um projeto, com logo, nome e acesso rápido às planilhas e relatórios.',
    imageUrl: 'https://i.postimg.cc/hvhZ1X4d/clientes.png',
    altText: 'Tela de Workspaces com cartões de clientes'
  },
  {
    title: '2️⃣ Planilhas Inteligentes – A familiaridade do Excel com o poder da automação',
    description: 'Nada de copiar e colar manualmente. A Conexel oferece uma planilha interativa com fórmulas, formatações e importação automática de dados. Use fórmulas como em uma planilha comum — mas com recursos muito além de uma.',
    imageUrl: 'https://i.postimg.cc/D0mpPSf4/editando-planilha.png',
    altText: 'Grade de planilha com barra de ferramentas',
    reverse: true,
  },
  {
    title: '3️⃣ Dashboards Drag-and-Drop – Crie visualizações em minutos',
    description: 'Construa dashboards com um simples movimento de arrastar e soltar. Escolha gráficos, KPIs, tabelas ou widgets de simulação com IA — personalize cores, tamanhos e fontes sem escrever uma linha de código.',
    imageUrl: 'https://i.postimg.cc/J0tY5s7N/editor-de-dashboard.png',
    altText: 'Editor de dashboards com paleta de widgets'
  },
  {
    title: '4️⃣ Relatórios Interativos – Entregas que encantam e explicam',
    description: 'Ofereça aos seus clientes um portal de relatórios totalmente personalizado com a marca deles. Eles podem interagir com gráficos, aplicar filtros e até comentar diretamente sobre os dados, iniciando conversas dentro do contexto.',
    imageUrl: 'https://i.postimg.cc/D0mpPSf4/editando-planilha.png',
    altText: 'Tela de relatório com identidade visual do cliente',
    reverse: true,
  },
  {
    title: '5️⃣ IA Integrada – Insights automáticos e simulações poderosas',
    description: 'Com o recurso “Sugerir com IA”, a Conexel recomenda os melhores gráficos com base nos seus dados. E com o Modo de Simulação, você e seu cliente podem testar cenários em linguagem natural — “E se o investimento em marketing aumentar 15%?”. A IA responde com uma projeção visual.',
    imageUrl: 'https://i.postimg.cc/3wVZQt3g/Screenshot-14.png',
    altText: 'Widget de simulação com IA'
  }
];

interface FeaturesSectionProps {
  onImageClick: (url: string) => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onImageClick }) => {
  return (
    <section className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-6">
        <div className="space-y-20 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureItem key={index} {...feature} onImageClick={onImageClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
