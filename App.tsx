import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PainPointSection from './components/PainPointSection';
import SolutionSection from './components/SolutionSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

const App: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleOpenModal = (imageUrl: string) => {
    setModalImage(imageUrl);
  };

  const handleCloseModal = () => {
    setModalImage(null);
  };

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection onImageClick={handleOpenModal} />
        <PainPointSection />
        <SolutionSection onImageClick={handleOpenModal} />
        <FeaturesSection onImageClick={handleOpenModal} />
        <BenefitsSection />
        <CtaSection />
      </main>
      <Footer />
      <ImageModal imageUrl={modalImage} onClose={handleCloseModal} />
    </div>
  );
};

export default App;
