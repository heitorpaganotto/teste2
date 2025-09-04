import logoBet7k from "@/assets/logo-bet7k.png";
import logoCassinoBet from "@/assets/logo-cassino-bet.png";
import logoBetvera from "@/assets/logo-betvera.png";

export const GamesSection = () => {
  const casinos = [
  {
    title: "",
    description: (
      <>MAIS DE <strong className="font-bold text-green-500">60 MILHÕES</strong> DE ACESSOS MENSAIS!</>
    ),
    logo: logoBet7k,
    url: "https://7k.bet.br/",
  },
  {
    title: "",
    description: (
      <>MAIS DE <strong className="font-bold text-green-500">40 MILHÕES</strong> DE ACESSOS MENSAIS!</>
    ),
    logo: logoCassinoBet,
    url: "https://cassino.bet.br/",
  },
  {
    title: "",
    description: (
      <>MAIS DE <strong className="font-bold text-green-500">2 MILHÕES</strong> DE ACESSOS MENSAIS!</>
    ),
    logo: logoBetvera,
    url: "https://vera.bet.br/",
  },
];



  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Nossos Cassinos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça as plataformas premium do nosso grupo com a mais alta tecnologia em jogos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {casinos.map((casino, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-card rounded-xl border border-primary/20 hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <img 
                    src={casino.logo} 
                    alt={`${casino.title} logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">{casino.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {casino.description}
                </p>
                <div className="inline-block px-6 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  Cassino Premium
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-card rounded-2xl border border-primary/20 shadow-glow">
            <h3 className="text-2xl font-bold text-primary mb-4">Ana Gaming</h3>
            <p className="text-muted-foreground mb-6">
A Ana Gaming tem orgulho de representar algumas das maiores marcas de apostas online do Brasil: 7k.bet.br, Cassino.bet.br e Vera.bet.br. Reconhecidas nacionalmente, essas marcas se destacam pela inovação, confiabilidade e excelência ao oferecer plataformas seguras e completas para seus jogadores. Com milhões de acessos mensais, consolidaram-se entre as preferidas dos brasileiros, atraindo jogadores de todo o país que buscam uma experiência diferenciada.            </p>
          </div>
        </div>
      </div>
    </section>
  );
};