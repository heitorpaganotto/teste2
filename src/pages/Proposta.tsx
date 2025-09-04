import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

import logoBet7k from "@/assets/logo-bet7k.png";
import logoCassinoBet from "@/assets/logo-cassino-bet.png";
import logoBetvera from "@/assets/logo-betvera.png";

const Proposta = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const adicionais: Record<string, string[]> = {
    bet7k: ["Base Zerada", "CRM Integrado", "LTV eterno", "Pagamentos Semanais"],
    cassinoBet: ["Base Zerada", "CRM Integrado", "LTV eterno", "Pagamentos Semanais"],
    betvera: ["Base Zerada", "CRM Integrado", "LTV eterno", "Pagamentos Semanais"],
  };

  const propostas: Record<
    string,
    { titulo: string; descricao: string[] }[]
  > = {
    bet7k: [
      {
        titulo: "CPA",
        descricao: [
          "R$20 CPA com Baseline 10",
          "R$40 CPA com Baseline 20",
          "R$60 CPA com Baseline 30",
        ],
      },
      { titulo: "Modelo Híbrido (CPA + REV)", descricao: ["R$30 CPA com Baseline 30 + 20% REV"] },
      { titulo: "FULL REV", descricao: ["30% REV"] },
    ],
    cassinoBet: [
      {
        titulo: "CPA",
        descricao: [
          "R$20 CPA com Baseline 10",
          "R$40 CPA com Baseline 20",
          "R$60 CPA com Baseline 30",
        ],
      },
      { titulo: "Modelo Híbrido (CPA + REV)", descricao: ["R$30 CPA com Baseline 30 + 20% REV"] },
      { titulo: "FULL REV", descricao: ["30% REV"] },
    ],
    betvera: [
      {
        titulo: "CPA",
        descricao: [
          "R$20 CPA com Baseline 10",
          "R$40 CPA com Baseline 20",
          "R$60 CPA com Baseline 30",
        ],
      },
      { titulo: "Modelo Híbrido (CPA + REV)", descricao: ["R$30 CPA com Baseline 30 + 20% REV"] },
      { titulo: "FULL REV", descricao: ["30% REV"] },
    ],
  };

  const titulos: Record<string, string> = {
    bet7k: "Oferta Especial BET7K",
    cassinoBet: "Pacote Premium CassinoBet",
    betvera: "Experiência Exclusiva BetVera",
  };

  const logos: Record<string, string> = {
    bet7k: logoBet7k,
    cassinoBet: logoCassinoBet,
    betvera: logoBetvera,
  };

  const checkColor = "text-green-500";
  const glowColor = "shadow-[0_0_25px_rgba(16,185,129,0.7)]";

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-white p-8 relative">
      <h1 className="text-4xl font-extrabold mb-6">Propostas</h1>
      <p className="text-lg text-center max-w-2xl mb-12">
        Clique em uma casa de aposta para ver os detalhes da proposta.
      </p>

      {/* QUADRADOS DAS LOGOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {Object.entries(logos).map(([key, logo]) => (
          <div
            key={key}
            onClick={() => setSelected(key)}
            className={`cursor-pointer w-96 h-96 flex items-center justify-center border-4 border-green-500 rounded-xl bg-black/30 transition-transform duration-300 hover:scale-105 ${glowColor}`}
          >
            <img src={logo} alt={key} className="max-w-[250px] max-h-[250px] object-contain" />
          </div>
        ))}
      </div>

      {/* OVERLAY DA PROPOSTA */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className={`bg-black border-4 border-green-500 rounded-2xl max-w-4xl w-full p-10 text-center text-white shadow-lg overflow-y-auto max-h-[90vh] ${glowColor}`}
            >
              {/* LOGO */}
              <img
                src={logos[selected]}
                alt={selected}
                className="mx-auto mb-6 max-h-28 object-contain"
              />

              {/* BENEFÍCIOS ADICIONAIS */}
              <div className={`border border-green-500 rounded-xl p-6 bg-black/40 mb-8 ${glowColor}`}>
                <h4 className="text-xl font-bold text-green-400 mb-4 text-center">
                  Benefícios Adicionais
                </h4>
                <div className="grid grid-cols-2 gap-6 text-left">
                  {adicionais[selected].map((extra, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className={`w-6 h-6 ${checkColor}`} />
                      <span className="text-lg">{extra}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* TÍTULO PRINCIPAL */}
              <h3 className="text-2xl font-semibold text-green-400 mb-6">
                {titulos[selected]}
              </h3>

              {/* LISTA DE PROPOSTAS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {propostas[selected].map((item, idx) => (
                  <div key={idx} className="border-l-4 border-white pl-4">
                    <h4 className="text-xl font-bold text-green-400 mb-2">{item.titulo}</h4>
                    <div className="flex flex-col gap-2 text-lg">
                      {item.descricao.map((desc, dIdx) => {
                        const regex = /(R\$[0-9]+)\s(CPA)\s(com)\s(Baseline\s[0-9]+)(.*)/;
                        const match = desc.match(regex);

                        if (match) {
                          return (
                            <p key={dIdx}>
                              <span className="text-green-400">{match[1]}</span>{" "}
                              <span className="text-green-400">{match[2]}</span>{" "}
                              <span className="text-white">{match[3]}</span>{" "}
                              <span className="text-green-400">{match[4]}</span>
                              <span className="text-white">{match[5]}</span>
                            </p>
                          );
                        }

                        return <p key={dIdx} className="text-white">{desc}</p>;
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* BOTÃO FECHAR */}
              <button
                onClick={() => setSelected(null)}
                className="mt-10 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg text-lg font-semibold transition"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Proposta;
