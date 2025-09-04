import { useState } from "react";
import { Link } from "react-router-dom";
import FormModal from "./FormModal";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between md:justify-start">
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center gap-6 ml-auto">
            <Link to="/" className="text-white hover:text-green-400 transition">
              Home
            </Link>
            <Link
              to="/premiacoes"
              className="text-white hover:text-green-400 transition"
            >
              Premiações
            </Link>
            <Link
              to="/proposta"
              className="text-white hover:text-green-400 transition"
            >
              Proposta
            </Link>
            <Link
              to="/sobre"
              className="text-white hover:text-green-400 transition"
            >
              Sobre
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Inscrever-se Agora
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-6 py-4 space-y-4 text-center">
            <Link
              to="/"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/premiacoes"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Premiações
            </Link>
            <Link
              to="/proposta"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Proposta
            </Link>
            <Link
              to="/sobre"
              className="block text-white hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </Link>
            <button
              onClick={() => { setShowForm(true); setIsOpen(false); }}
              className="block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition w-full"
            >
              Inscrever-se Agora
            </button>
          </div>
        )}
      </nav>

      {/* Modal */}
      <FormModal isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  );
};

export default Navbar;
