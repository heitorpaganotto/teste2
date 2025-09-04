import { Button } from "@/components/ui/button";
import { useState } from "react";
import FormModal from "./FormModal"; // ✅ correto

export const SubscribeSection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Formulário */}
      <FormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Seção com botão */}
      <section className="py-20 px-4 bg-gradient-to-b from-card/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            <Button
              variant="subscribe"
              onClick={() => setIsFormOpen(true)}
              className="h-12 px-12 text-lg"
            >
              INSCREVER-SE AGORA
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
