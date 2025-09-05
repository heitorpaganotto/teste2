import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroImage from "@/assets/hero-gaming.jpg";
import FormModal from "./FormModal";

export const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Formulário abaixo da navbar */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="iGaming Experience"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background/90" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary-glow/10 rounded-full blur-xl" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            LANÇAMENTO
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            A Nova Era do <span className="text-primary">iGaming</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Inscreva-se hoje, responda algumas perguntas rápidas e nosso time
            entrará em contato para te mostrar como fazer parte da Nova Era do
            iGaming.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="subscribe"
              size="lg"
              className="text-2xl px-12 py-6 h-auto"
              onClick={() => setIsFormOpen(true)}
            >
              INSCREVER-SE AGORA
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
