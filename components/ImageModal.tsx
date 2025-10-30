import React from 'react';

interface ImageModalProps {
  imageUrl: string | null;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, onClose }) => {
  if (!imageUrl) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[999]"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-primary-400 transition-colors z-10"
        aria-label="Fechar imagem"
      >
        &times;
      </button>
      <div className="p-4" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageUrl} 
          alt="Visualização ampliada" 
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl shadow-primary-500/20"
        />
      </div>
    </div>
  );
};

export default ImageModal;
