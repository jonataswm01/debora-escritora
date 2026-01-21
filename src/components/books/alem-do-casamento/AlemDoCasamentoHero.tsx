"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AlemDoCasamentoHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Layout Assimétrico Premium */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            
            {/* Coluna Esquerda - Conteúdo (60%) */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Título Principal */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  <span
                    className="bg-clip-text text-transparent block"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #FF8C42 0%, #FFA366 50%, #FFB88C 100%)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Além do Casamento
                  </span>
                </h1>

                {/* Linha Decorativa */}
                <div
                  className="h-0.5 w-32 mt-6 mb-8"
                  style={{
                    background: "linear-gradient(to right, #FF8C42 0%, rgba(255, 140, 66, 0) 100%)",
                  }}
                />
              </div>

              {/* Tagline/Subtítulo */}
              <div
                className={`transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.4s" }}
              >
                <p className="font-serif text-xl lg:text-2xl italic text-foreground/80 leading-relaxed max-w-2xl relative">
                  <span
                    className="absolute -left-8 -top-4 text-6xl opacity-20"
                    style={{ fontFamily: "serif", color: "#FF8C42" }}
                  >
                    "
                  </span>
                  A continuação aprofunda os sentimentos e traz um romance mais maduro, com camadas reais: fidelidade, desconfiança, perdas e amadurecimento, além do amor que precisa resistir à vida como ela é.
                  <span
                    className="absolute -right-8 -bottom-4 text-6xl opacity-20"
                    style={{ fontFamily: "serif", color: "#FF8C42" }}
                  >
                    "
                  </span>
                </p>
              </div>

              {/* Tags do Livro */}
              <div
                className={`flex flex-wrap gap-3 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                {["Fidelidade", "Vida real", "Amadurecimento"].map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(255, 140, 66, 0.1)",
                      color: "#FF8C42",
                      border: "1px solid rgba(255, 140, 66, 0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Coluna Direita - Imagem da Capa (40%) */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              <div
                className={`relative transition-all duration-1200 ${
                  isVisible
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 translate-y-10"
                }`}
                style={{ transitionDelay: "0.8s" }}
              >
                {/* Moldura Premium Multi-camadas */}
                <div
                  className="relative group"
                  style={{
                    padding: "12px",
                    background: "linear-gradient(135deg, rgba(255, 140, 66, 0.1) 0%, rgba(255, 163, 102, 0.05) 100%)",
                    borderRadius: "24px",
                    boxShadow: `
                      0 20px 60px rgba(255, 140, 66, 0.15),
                      0 0 0 3px #FF8C42,
                      0 0 0 6px rgba(255, 163, 102, 0.3),
                      inset 0 2px 4px rgba(0, 0, 0, 0.05)
                    `,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = `
                      0 30px 80px rgba(255, 140, 66, 0.25),
                      0 0 0 3px #FF8C42,
                      0 0 0 6px rgba(255, 163, 102, 0.4),
                      inset 0 2px 4px rgba(0, 0, 0, 0.05),
                      0 0 40px rgba(255, 140, 66, 0.2)
                    `;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = `
                      0 20px 60px rgba(255, 140, 66, 0.15),
                      0 0 0 3px #FF8C42,
                      0 0 0 6px rgba(255, 163, 102, 0.3),
                      inset 0 2px 4px rgba(0, 0, 0, 0.05)
                    `;
                  }}
                >
                  {/* Container da Imagem */}
                  <div 
                    className="relative w-full max-w-sm rounded-[20px] overflow-hidden" 
                    style={{ 
                      aspectRatio: "2/3", 
                      width: "100%", 
                      minWidth: "280px",
                      minHeight: "420px",
                      position: "relative", 
                      zIndex: 1 
                    }}
                  >
                    <Image
                      src="/alem-do-casamento-2.jpeg"
                      alt="Capa do livro Além do Casamento"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ 
                        position: "absolute", 
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 1 
                      }}
                    />
                  </div>

                  {/* Overlay Gradiente no Hover */}
                  <div
                    className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-400 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(255, 140, 66, 0.3) 0%, rgba(255, 163, 102, 0.2) 100%)",
                      borderRadius: "20px",
                      zIndex: 2,
                    }}
                  />
                </div>

                {/* Efeito de Brilho Sutil */}
                <div
                  className="absolute -inset-4 rounded-[32px] opacity-0 group-hover:opacity-30 transition-opacity duration-400 pointer-events-none blur-xl"
                  style={{
                    background: "radial-gradient(circle, rgba(255, 140, 66, 0.4) 0%, transparent 70%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "1.2s" }}
          >
            <a
              href="#a-historia"
              aria-label="Scroll para a próxima seção"
              className="flex flex-col items-center gap-2 text-foreground/40 hover:text-foreground/60 transition-colors duration-300 group"
            >
              <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "#FF8C42" }}>
                Descubra mais
              </span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="animate-bounce-subtle"
                style={{ color: "#FF8C42" }}
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
