"use client";

import { useEffect, useRef, useState } from "react";

export default function BookCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="comprar"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Traços Decorativos no Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        {/* Linha Ondulada Superior */}
        <svg
          className="absolute top-20 left-1/2 -translate-x-1/2 w-64 sm:w-96"
          viewBox="0 0 500 30"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,15 Q80,5 160,15 T320,15 T500,15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Grossa Inferior */}
        <svg
          className="absolute bottom-24 left-1/4 w-40 sm:w-56"
          viewBox="0 0 250 4"
          fill="none"
          style={{ color: "#B8A5C7" }}
        >
          <line
            x1="0"
            y1="2"
            x2="250"
            y2="2"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Ondulada Compacta Direita */}
        <svg
          className="absolute top-1/2 right-12 w-36 sm:w-48"
          viewBox="0 0 250 15"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,7 Q20,2 40,7 Q60,12 80,7 Q100,2 120,7 Q140,12 160,7 Q180,2 200,7 Q220,12 240,7 Q250,5 250,7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Container Premium com Glassmorphism */}
          <div
            className={`relative rounded-[40px] p-8 sm:p-12 lg:p-16 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: `
                0 30px 80px rgba(107, 76, 122, 0.12),
                0 0 0 1px rgba(139, 107, 154, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.6)
              `,
              border: "1px solid rgba(139, 107, 154, 0.2)",
            }}
          >
            {/* Ornamentos Decorativos */}
            <div
              className="absolute -top-6 -left-6 w-20 h-20 opacity-10 pointer-events-none"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>
            <div
              className="absolute -top-6 -right-6 w-20 h-20 opacity-10 pointer-events-none rotate-90"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-20 h-20 opacity-10 pointer-events-none rotate-180"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-20 h-20 opacity-10 pointer-events-none -rotate-90"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>

            {/* Conteúdo */}
            <div className="relative z-10">
              {/* Label */}
              <p className="text-sm font-medium tracking-wider mb-4 text-foreground/50 uppercase">
                Pronto para embarcar nesta jornada?
              </p>

              {/* Título */}
              <h2
                className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 50%, #D8BFD8 100%)",
                  }}
                >
                  Adquira seu exemplar agora
                </span>
              </h2>

              {/* Subtítulo */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{
                  fontFamily: "var(--font-playfair), serif",
                  transitionDelay: "0.4s",
                }}
              >
                Descubra uma história sobre amizade, cumplicidade e os sentimentos
                que crescem naturalmente. Uma leitura que vai tocar seu coração.
              </p>

              {/* Botões de Ação */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.6s" }}
              >
                {/* Botão Principal - Comprar */}
                <a
                  href="https://amazon.com.br" // Link de compra - você pode atualizar depois
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-8 sm:px-12 py-4 sm:py-5 rounded-[28px] font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 100%)",
                    color: "#FFFFFF",
                    boxShadow: "0 8px 24px rgba(139, 107, 154, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 12px 32px rgba(139, 107, 154, 0.4)";
                    e.currentTarget.style.transform = "translateY(-4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 107, 154, 0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Comprar na Amazon
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 12l4-4-4-4" />
                    </svg>
                  </span>
                  {/* Efeito de glow no hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                    style={{
                      background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, transparent 70%)",
                    }}
                  />
                </a>

                {/* Botão Secundário - Ler Preview */}
                <a
                  href="#a-historia"
                  className="group px-8 sm:px-12 py-4 sm:py-5 rounded-[28px] font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 border-2"
                  style={{
                    borderColor: "#8B6B9A",
                    color: "#8B6B9A",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(139, 107, 154, 0.1)";
                    e.currentTarget.style.borderColor = "#B8A5C7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#8B6B9A";
                  }}
                >
                  <span className="flex items-center gap-3">
                    Ler mais sobre
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path d="M6 12l4-4-4-4" />
                    </svg>
                  </span>
                </a>
              </div>

              {/* Texto de Apoio */}
              <p
                className={`text-xs sm:text-sm text-foreground/50 mt-8 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: "0.8s" }}
              >
                Disponível em formato físico e digital
              </p>
            </div>

            {/* Efeito de Glow Sutil no Fundo */}
            <div
              className="absolute inset-0 rounded-[40px] opacity-30 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(139, 107, 154, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
