import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "@/assets/1.png";
import img2 from "@/assets/2.png";
import img3 from "@/assets/3.png";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.png";

const premiacoesData = [
  { id: 1, imagem: img1 },
  { id: 2, imagem: img2 },
  { id: 3, imagem: img3 },
  { id: 4, imagem: img4 },
  { id: 5, imagem: img5 },
];

const Premiacoes = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-4xl font-extrabold mb-6">Premiações</h1>

      {/* LINHA SUPERIOR: imagens 4 e 5 */}
      <div className="grid grid-cols-2 gap-2 w-full max-w-7xl">
        {[premiacoesData[3], premiacoesData[4]].map((item) => (
          <motion.div
            key={item.id}
            className="cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(item.id)}
          >
            <img
              src={item.imagem}
              alt={`Premiação ${item.id}`}
              className="object-contain w-full h-[28rem]"
            />
          </motion.div>
        ))}
      </div>

      {/* LINHA INFERIOR: imagens 1, 2 e 3 */}
      <div className="grid grid-cols-3 gap-2 w-full max-w-7xl">
        {premiacoesData.slice(0, 3).map((item) => (
          <motion.div
            key={item.id}
            className="cursor-pointer flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(item.id)}
          >
            <img
              src={item.imagem}
              alt={`Premiação ${item.id}`}
              className="object-contain w-full h-[24rem]"
            />
          </motion.div>
        ))}
      </div>

      {/* MODAL DA IMAGEM AMPLIADA */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={premiacoesData.find((p) => p.id === selected)?.imagem}
              alt={`Premiação ${selected}`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Premiacoes;
