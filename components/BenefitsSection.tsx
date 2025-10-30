import React from 'react';
import { WhiteLabelIcon, MultiClientIcon, BrainIcon, ApiIcon, MouseIcon, RocketIcon } from './icons';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => {
  return (
    <div className="p-px bg-gradient-to-b from-primary-700/30 to-dark-800 rounded-lg transform hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-dark-800 p-6 rounded-[7px] h-full">
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-br from-primary-700/30 to-primary-800/20 text-primary-400 rounded-lg p-3 mr-4">{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-primary-300">{description}</p>
      </div>
    </div>
  );
};

const benefits = [
  { icon: <WhiteLabelIcon />, title: 'White-label total', description: 'Cada cliente vê seu próprio portal com identidade visual personalizada.' },
  { icon: <MultiClientIcon />, title: 'Multi-cliente em um só lugar', description: 'Gerencie dezenas de empresas sem confusão — tudo centralizado, seguro e organizado.' },
  { icon: <BrainIcon />, title: 'Inteligência Artificial integrada', description: 'Sugere gráficos, simula cenários e transforma análise de dados em um processo criativo.' },
  { icon: <ApiIcon />, title: 'Integrações via API', description: 'Conecte CRMs, ERPs e outras fontes em poucos cliques.' },
  { icon: <MouseIcon />, title: 'Interface intuitiva', description: 'Arraste, solte, configure. Sem código. Sem complicação.' },
  { icon: <RocketIcon />, title: 'Escalabilidade', description: 'Cresça sem limites — a arquitetura multi-tenant garante performance e segurança.' },
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Por que a Conexel é diferente:
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;