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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <div
        className={`bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 sm:p-8 max-w-3xl w-full mx-4 sm:mx-0 relative shadow-2xl shadow-green-700/60 transform transition-transform duration-300 ${
          isOpen ? "scale-100" : "scale-95"
        }`}
      >
        {/* Botão fechar */}
        <button
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white rounded-full w-9 h-9 flex items-center justify-center shadow-lg transition focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2
          id="modal-title"
          className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-green-400 tracking-wide drop-shadow-lg animate-pulse select-none"
        >
          Formulário de Inscrição
        </h2>

        {/* Iframe do Google Form */}
        <div
          id="modal-description"
          className="w-full rounded-xl overflow-hidden shadow-lg border border-green-600"
          style={{ minHeight: "600px" }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeYI-JcNW2ILA1bRSGfGCbumCh6YgD8Syr0dpORqYp97zGsFQ/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="block"
            title="Formulário Google"
            loading="lazy"
          >
            Carregando…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default FormModal;