import Image from "next/image";
import AuroraBackground from "./AuroraBackground";

export default function HeroSection() {
  return (
    <>
      {/* Camadas de Fundo - Fora da section para garantir z-index correto */}
      {/* Fundo Base - Mais atrás */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ backgroundColor: '#F9F7F2', zIndex: -20 }}
      />
      
      {/* Efeito Aurora no fundo */}
      <AuroraBackground />
      
      {/* Manchas de Café - Direto no código */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
        {/* Mancha 1 - Canto superior esquerdo */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-[0.13] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 90, 43, 0.4) 0%, transparent 70%)",
          }}
        />
        {/* Mancha 2 - Canto inferior direito */}
        <div
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.11] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 90, 43, 0.35) 0%, transparent 70%)",
          }}
        />
        {/* Mancha 3 - Canto superior direito (opcional) */}
        <div
          className="absolute top-1/4 right-1/4 w-56 h-56 rounded-full opacity-[0.10] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 90, 43, 0.3) 0%, transparent 70%)",
          }}
        />
      </div>
      
      {/* Ornamentos Tipográficos - Direto no código */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
        {/* Pena (símbolo de escrita) - Canto superior esquerdo */}
        <div className="absolute top-16 left-16 w-20 h-20 opacity-[0.08]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path
              d="M20 80 Q30 60, 40 50 Q50 40, 60 30 Q70 20, 80 15 L75 25 Q70 35, 65 45 Q60 55, 55 65 Q50 75, 45 80 Z"
              className="text-foreground"
            />
            <path d="M40 50 L60 30" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Livro aberto - Canto inferior esquerdo */}
        <div className="absolute bottom-20 left-12 w-16 h-16 opacity-[0.06]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="20" y="30" width="25" height="40" className="text-foreground" />
            <rect x="55" y="30" width="25" height="40" className="text-foreground" />
            <line x1="45" y1="30" x2="45" y2="70" strokeWidth="1" />
          </svg>
        </div>
        
        {/* Estrela decorativa - Canto superior direito */}
        <div className="absolute top-24 right-20 w-12 h-12 opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-foreground" fill="currentColor">
            <path d="M50 10 L55 35 L80 35 L60 50 L70 75 L50 60 L30 75 L40 50 L20 35 L45 35 Z" />
          </svg>
        </div>
      </div>
      
      {/* Section com conteúdo */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-0">
      
      <div className="container mx-auto px-4 pt-32 pb-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Conteúdo Textual */}
          <div className="order-1 text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Nome da Autora com Gradiente */}
            <h1 className="font-serif text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #C8A8C8 0%, #9BB5D9 50%, #E0B8C4 100%)",
                }}
              >
                Débora Rayane
              </span>
            </h1>

            {/* Tagline/Frase de Essência */}
            <p className="text-xl lg:text-2xl font-light leading-relaxed max-w-4xl mx-auto lg:mx-0">
              <span className="text-foreground/80">Contando histórias sobre descobertas, transições e amizades que se transformam em algo mais, </span>
              <span
                className="font-medium"
                style={{
                  background:
                    "linear-gradient(135deg, #C8A8C8 0%, #9BB5D9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                narrativas que tocam o coração e ressoam com a jornada emocional da vida adulta
              </span>
            </p>

            {/* CTA com Cor e Glow */}
            <div className="pt-4">
              <a
                href="#livros"
                className="inline-block px-8 py-4 rounded-[24px] font-medium transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 relative"
                style={{
                  background:
                    "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                  color: "#FFFFFF",
                }}
              >
                <span className="relative z-10">Conheça meus livros</span>
                <span
                  className="absolute inset-0 rounded-[24px] opacity-0 hover:opacity-30 blur-xl transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                  }}
                />
              </a>
            </div>
          </div>

          {/* Imagem da Débora com Moldura Premium */}
          <div className="relative order-2">
            <div className="relative max-w-md mx-auto">
              {/* Moldura Externa - Passe-partout */}
              <div
                className="p-3 lg:p-4 rounded-[40px] backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 50%, rgba(240, 214, 221, 0.2) 100%)",
                }}
              >
                {/* Moldura Interna - Borda decorativa */}
                <div
                  className="relative aspect-[4/5] rounded-[32px] p-3"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(216, 191, 216, 0.3) 0%, rgba(176, 196, 222, 0.3) 50%, rgba(240, 214, 221, 0.3) 100%)",
                  }}
                >
                  {/* Imagem */}
                  <div className="relative w-full h-full rounded-[26px] overflow-hidden shadow-inner">
                    <Image
                      src="/debora-hero.jpeg"
                      alt="Débora Rayane"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay sutil para profundidade */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </div>
                  
                  {/* Borda interna decorativa */}
                  <div className="absolute inset-3 rounded-[26px] border-2 border-white/40 pointer-events-none shadow-inner" />
                </div>
                
                {/* Sombra colorida externa para profundidade */}
                <div
                  className="absolute inset-0 rounded-[40px] -z-10 translate-y-6 translate-x-6 opacity-40 blur-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 50%, #F0D6DD 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Seta minimalista para scroll */}
      <div className="absolute bottom-8 left-1/2 animate-bounce-subtle">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
          aria-label="Rolar para próxima seção"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
    </>
  );
}
