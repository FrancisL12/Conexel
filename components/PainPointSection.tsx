import React from 'react';

const PainPointSection: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Você sente que está afogado em planilhas e relatórios manuais?
        </h2>
        <p className="text-lg text-primary-200 mb-4">
          Gerenciar múltiplos clientes, atualizar dados de diversas fontes e criar relatórios personalizados consome tempo, energia e clareza. Cada novo cliente é uma planilha a mais. Cada relatório, uma corrida contra o relógio. E no fim, o que deveria ser insight vira confusão.
        </p>
        <p className="text-lg text-white font-semibold">
          A <span className="bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent font-bold">Conexel</span> nasceu para resolver exatamente isso — e transformar o caos dos dados em inteligência simples, visual e colaborativa.
        </p>
      </div>
    </section>
  );
};

export default PainPointSection;