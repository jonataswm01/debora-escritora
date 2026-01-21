"use client";

import { useEffect, useRef, useState } from "react";

export default function BookQuotes() {
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

  const quotes = [
    {
      text: "Às vezes, a pessoa certa estava ali o tempo todo. Você só precisava abrir os olhos para ver.",
      chapter: "Capítulo 3",
      page: 45,
    },
    {
      text: "Amizade e amor não são opostos. Um pode nascer do outro, naturalmente, sem pressa, sem pressão.",
      chapter: "Capítulo 7",
      page: 112,
    },
    {
      text: "O que começou como risadas compartilhadas se transformou em algo que nenhum dos dois esperava, mas que ambos precisavam.",
      chapter: "Capítulo 5",
      page: 78,
    },
  ];

  return (
    <section
      id="trechos"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Traços Decorativos no Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        {/* Linha Ondulada Superior Esquerda */}
        <svg
          className="absolute top-24 left-12 w-40 sm:w-56"
          viewBox="0 0 300 25"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,12 Q40,3 80,12 T160,12 T240,12 T300,12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Tracejada Direita */}
        <svg
          className="absolute top-1/3 right-8 w-32 sm:w-44"
          viewBox="0 0 200 2"
          fill="none"
          style={{ color: "#B8A5C7" }}
        >
          <line
            x1="0"
            y1="1"
            x2="40"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <line
            x1="50"
            y1="1"
            x2="90"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <line
            x1="100"
            y1="1"
            x2="140"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
          <line
            x1="150"
            y1="1"
            x2="200"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="5 5"
          />
        </svg>

        {/* Linha Ondulada Inferior Central */}
        <svg
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 sm:w-64"
          viewBox="0 0 350 20"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,10 Q50,2 100,10 T200,10 T300,10 T350,10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div
            className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-5"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <p className="text-sm font-medium tracking-wider text-center mb-4 text-foreground/50 uppercase">
              Trechos Especiais
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 50%, #D8BFD8 100%)",
                }}
              >
                Citações que Tocam o Coração
              </span>
            </h2>
            <div
              className="h-0.5 w-48 mx-auto"
              style={{
                background: "linear-gradient(to right, transparent 0%, #8B6B9A 20%, #B8A5C7 50%, #8B6B9A 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Grid de Citações */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{
                  transitionDelay: `${0.4 + index * 0.15}s`,
                }}
              >
                {/* Card Premium com Glassmorphism */}
                <div
                  className="relative group h-full rounded-[32px] p-8 lg:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.98) 100%)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `
                      0 10px 40px rgba(107, 76, 122, 0.08),
                      0 0 0 1px rgba(139, 107, 154, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.6)
                    `,
                    border: "1px solid rgba(139, 107, 154, 0.15)",
                  }}
                >
                  {/* Aspas Decorativas */}
                  <div
                    className="absolute -top-4 -left-4 w-16 h-16 opacity-15 pointer-events-none"
                    style={{ color: "#8B6B9A" }}
                  >
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
                    </svg>
                  </div>

                  {/* Texto da Citação */}
                  <p
                    className="relative text-lg lg:text-xl leading-relaxed mb-6 text-foreground/90 italic"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    "{quote.text}"
                  </p>

                  {/* Informações do Capítulo */}
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <span
                      className="text-xs font-medium uppercase tracking-wider"
                      style={{ color: "#8B6B9A" }}
                    >
                      {quote.chapter}
                    </span>
                    <span
                      className="text-xs text-foreground/50"
                      style={{ fontFamily: "var(--font-playfair), serif" }}
                    >
                      p. {quote.page}
                    </span>
                  </div>

                  {/* Efeito de Glow no Hover */}
                  <div
                    className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, rgba(139, 107, 154, 0.1) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Linha Separadora Inferior */}
          <div
            className={`mt-16 lg:mt-20 flex justify-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div
              className="w-32 h-0.5"
              style={{
                background: "linear-gradient(to right, transparent 0%, #8B6B9A 50%, transparent 100%)",
              }}
            />
            <div
              className="mx-4 w-2 h-2 rounded-full"
              style={{ backgroundColor: "#8B6B9A", opacity: 0.3 }}
            />
            <div
              className="w-32 h-0.5"
              style={{
                background: "linear-gradient(to right, transparent 0%, #8B6B9A 50%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
