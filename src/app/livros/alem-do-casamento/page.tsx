// Componentes personalizados para "Além do Casamento"
import AlemDoCasamentoAuroraBackground from "@/components/books/alem-do-casamento/AlemDoCasamentoAuroraBackground";
import AlemDoCasamentoHero from "@/components/books/alem-do-casamento/AlemDoCasamentoHero";
import AlemDoCasamentoSynopsis from "@/components/books/alem-do-casamento/AlemDoCasamentoSynopsis";
import AlemDoCasamentoQuotes from "@/components/books/alem-do-casamento/AlemDoCasamentoQuotes";
import AlemDoCasamentoCTA from "@/components/books/alem-do-casamento/AlemDoCasamentoCTA";
import AlemDoCasamentoTestimonials from "@/components/books/alem-do-casamento/AlemDoCasamentoTestimonials";
import AlemDoCasamentoFooter from "@/components/books/alem-do-casamento/AlemDoCasamentoFooter";

export default function AlemDoCasamentoPage() {
  return (
    <main className="min-h-screen relative">
      <AlemDoCasamentoAuroraBackground />
      <AlemDoCasamentoHero />
      <AlemDoCasamentoSynopsis />
      <AlemDoCasamentoQuotes />
      <AlemDoCasamentoCTA />
      <AlemDoCasamentoTestimonials />
      <AlemDoCasamentoFooter />
    </main>
  );
}
