import { motion } from "framer-motion";

const Sobre = () => {
  const infos = [
    { titulo: "Nossa História", texto: "Nossa trajetória é marcada por inovação e resultados consistentes." },
    { titulo: "Nossa Missão", texto: "Oferecer as melhores oportunidades para afiliados e parceiros." },
    { titulo: "Nossos Valores", texto: "Compromisso, inovação, confiança e excelência." },
    { titulo: "Inovação Constante", texto: "Sempre em busca de novas soluções criativas e disruptivas." },
    { titulo: "Transparência", texto: "Relações claras, honestas e justas com todos os parceiros." },
    { titulo: "Foco em Resultados", texto: "Crescimento e rentabilidade com visão de longo prazo." },
    { titulo: "Tecnologia de Ponta", texto: "Utilizamos ferramentas modernas para potencializar resultados." },
    { titulo: "Comunidade Forte", texto: "Unimos afiliados em um ecossistema de apoio e crescimento." },
    { titulo: "Suporte Dedicado", texto: "Equipe sempre pronta para ajudar em todas as etapas." },
    { titulo: "Visão Global", texto: "Expandindo nossas fronteiras para alcançar novos mercados." },
    { titulo: "Segurança Garantida", texto: "Proteção total dos dados e transações de nossos parceiros." },
    { titulo: "Parcerias Estratégicas", texto: "Conectamos você às melhores oportunidades do mercado." },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center text-white px-6 py-12">
      <motion.h1
        className="text-5xl font-extrabold mb-4 text-green-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sobre Nós
      </motion.h1>

      <motion.p
        className="text-lg text-center max-w-3xl mb-12 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Conheça nossa história, missão e valores que nos tornam a{" "}
        <span className="text-green-400 font-semibold">
          nova era do iGaming
        </span>.
      </motion.p>

      {/* Caixinhas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {infos.map((item, index) => (
          <motion.div
            key={index}
            className="bg-black/40 border-2 border-green-400 rounded-2xl p-6 text-center shadow-[0_0_25px_rgba(16,185,129,0.8)] hover:shadow-[0_0_40px_rgba(16,185,129,1)] transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              {item.titulo}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.texto}</p>
          </motion.div>
        ))}
      </div>

      {/* Suporte */}
      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300 mb-4">
          Não encontrou sua dúvida? <span className="text-green-400 font-semibold">Chame o suporte</span>.
        </p>
        <button className="px-8 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-lg font-bold text-white shadow-[0_0_20px_rgba(16,185,129,0.8)] transition">
          Ajuda
        </button>
      </div>
    </div>
  );
};

export default Sobre;
