"use client";

import { useEffect, useRef, useState } from "react";
import AuroraBackground from "../AuroraBackground";

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Camadas de Fundo */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{ backgroundColor: '#F9F7F2', zIndex: -20 }}
      />
      
      <AuroraBackground />
      
      {/* Traços Decorativos Sutis */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: -10 }}>
        {/* Traço Superior Esquerdo - Curva Orgânica */}
        <svg
          className="absolute top-20 left-10 w-64 h-32 opacity-[0.08]"
          viewBox="0 0 200 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M10 50 Q50 20, 90 30 T170 40"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Traço Inferior Direito - Linha Elegante */}
        <svg
          className="absolute bottom-32 right-16 w-80 h-24 opacity-[0.06]"
          viewBox="0 0 300 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#B0C4DE" }}
        >
          <path
            d="M20 40 Q100 20, 180 35 T280 50"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Ornamento Tipográfico - Pena Estilizada */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 opacity-[0.05]">
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "#D8BFD8" }}>
            <path
              d="M30 80 Q40 60, 50 50 Q60 40, 70 30 Q75 25, 80 20 L75 30 Q70 40, 65 50 Q60 60, 55 70 Q50 75, 45 80 Z"
            />
          </svg>
        </div>
      </div>

      <section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center py-20 lg:py-32 overflow-hidden"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Título Principal - Com Animação de Entrada */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.2s" }}
            >
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span
                  className="bg-clip-text text-transparent block"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 50%, #D8BFD8 100%)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Vamos conversar?
                </span>
              </h1>

              {/* Linha Decorativa Sutil */}
              <div
                className="h-0.5 w-32 mx-auto mt-6 mb-8"
                style={{
                  background: "linear-gradient(to right, transparent 0%, #D8BFD8 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Subtítulo Acolhedor - Com Aspas Tipográficas */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.4s" }}
            >
              <p className="font-sans text-lg sm:text-xl lg:text-2xl text-foreground/80 leading-relaxed max-w-3xl mx-auto relative px-4">
                <span
                  className="absolute -left-2 -top-6 text-5xl sm:text-6xl opacity-20 font-serif"
                  style={{ color: "#D8BFD8" }}
                >
                  "
                </span>
                Adoraria saber o que você tem a dizer. Seja uma mensagem de leitor, um convite para evento ou uma proposta de parceria, estou aqui para ouvir.
                <span
                  className="absolute -right-2 -bottom-6 text-5xl sm:text-6xl opacity-20 font-serif"
                  style={{ color: "#D8BFD8" }}
                >
                  "
                </span>
              </p>
            </div>

            {/* Elemento Decorativo Inferior - Traço Orgânico */}
            <div
              className={`transition-all duration-1000 ease-out mt-12 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              <svg
                className="w-64 h-16 mx-auto opacity-30"
                viewBox="0 0 200 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                style={{ color: "#B0C4DE" }}
              >
                <path
                  d="M20 25 Q60 15, 100 20 T180 25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Indicador de Scroll Sutil */}
            <div
              className={`transition-all duration-1000 ease-out mt-16 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-xs uppercase tracking-wider text-foreground/40 font-medium">
                  Role para baixo
                </span>
                <svg
                  className="w-5 h-5 text-foreground/30 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
