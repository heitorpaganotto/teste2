import React, { useState, useEffect } from "react";

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<FormModalProps> = ({ isOpen, onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) setShowModal(true);
    else setTimeout(() => setShowModal(false), 300);
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-950 rounded-3xl p-4 md:p-8 max-w-5xl w-full relative shadow-2xl shadow-green-800/70 transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-700 transition shadow-lg"
        >
          X
        </button>

        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-400 tracking-wider drop-shadow-lg animate-pulse">
          Formulário de Inscrição
        </h2>

        {/* Iframe do Google Form */}
        <div className="w-full">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYI-JcNW2ILA1bRSGfGCbumCh6YgD8Syr0dpORqYp97zGsFQ/viewform?embedded=true"
            width="100%"
            style={{ minHeight: "600px" }} // altura menor
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="rounded-xl shadow-xl"
            title="Formulário Google"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
