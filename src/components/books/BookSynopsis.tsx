"use client";

import { useEffect, useRef, useState } from "react";

export default function BookSynopsis() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const synopsisText = `Num verão que mudaria tudo, duas pessoas descobrem que a linha entre amizade e amor pode ser mais tênue do que imaginavam. O que começou como uma conexão simples, cheia de risadas compartilhadas e momentos de cumplicidade, aos poucos se transforma em algo mais profundo — algo que nenhum dos dois esperava, mas que ambos precisavam.

Esta é a história de como os sentimentos crescem naturalmente, sem pressa, sem pressão. É sobre aqueles olhares que duram um segundo a mais, sobre as conversas que se estendem até tarde da noite, sobre descobrir que a pessoa certa estava ali o tempo todo — do seu lado, como melhor amigo.

Mas nem tudo é simples quando os corações começam a bater mais forte. Com medos, inseguranças e a dúvida constante: será que vale a pena arriscar uma amizade tão especial por algo que pode não dar certo? Ou será que essa amizade já era amor disfarçado desde o início?

Mais Que Uma Amizade é um romance leve e envolvente que explora a beleza de descobrir o amor onde menos se espera. Uma história sobre amizade, cumplicidade e os sentimentos que crescem aos poucos — do jeito mais real possível.`;

  // Mesmo texto nas duas páginas (por enquanto)
  const pages = [synopsisText, synopsisText];
  const currentText = pages[currentPage];
  const paragraphs = currentText.split("\n\n");

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
      // Scroll suave para o topo do container
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // Scroll suave para o topo do container
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="a-historia"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Traços Decorativos no Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {/* Linha Ondulada Superior Esquerda */}
        <svg
          className="absolute top-20 left-8 w-32 sm:w-48"
          viewBox="0 0 200 20"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,10 Q25,5 50,10 T100,10 T150,10 T200,10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Ondulada Superior Direita */}
        <svg
          className="absolute top-32 right-12 w-40 sm:w-56"
          viewBox="0 0 250 15"
          fill="none"
          style={{ color: "#B8A5C7" }}
        >
          <path
            d="M0,8 Q30,3 60,8 T120,8 T180,8 T250,8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Tracejada Esquerda */}
        <svg
          className="absolute top-1/2 left-4 -translate-y-1/2 w-24 sm:w-32"
          viewBox="0 0 150 2"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <line
            x1="0"
            y1="1"
            x2="30"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="40"
            y1="1"
            x2="70"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="80"
            y1="1"
            x2="110"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="120"
            y1="1"
            x2="150"
            y2="1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>

        {/* Linha Ondulada Irregular Direita */}
        <svg
          className="absolute top-1/3 right-8 w-36 sm:w-48"
          viewBox="0 0 200 25"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,12 Q20,2 40,12 Q60,22 80,12 Q100,2 120,12 Q140,22 160,12 Q180,2 200,12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Grossa Inferior Esquerda */}
        <svg
          className="absolute bottom-24 left-12 w-28 sm:w-40"
          viewBox="0 0 180 3"
          fill="none"
          style={{ color: "#B8A5C7" }}
        >
          <line
            x1="0"
            y1="1.5"
            x2="180"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Ondulada Compacta Inferior Direita */}
        <svg
          className="absolute bottom-32 right-16 w-32 sm:w-44"
          viewBox="0 0 200 12"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,6 Q15,2 30,6 Q45,10 60,6 Q75,2 90,6 Q105,10 120,6 Q135,2 150,6 Q165,10 180,6 Q195,2 200,6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Linha Zig-zag Esquerda */}
        <svg
          className="absolute top-2/3 left-6 w-20 sm:w-28"
          viewBox="0 0 120 30"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,15 L15,5 L30,15 L45,5 L60,15 L75,5 L90,15 L105,5 L120,15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Fina Superior Central */}
        <svg
          className="absolute top-16 left-1/2 -translate-x-1/2 w-24 sm:w-32"
          viewBox="0 0 140 1"
          fill="none"
          style={{ color: "#B8A5C7" }}
        >
          <line
            x1="0"
            y1="0.5"
            x2="140"
            y2="0.5"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Ondulada Suave Inferior Central */}
        <svg
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-36 sm:w-48"
          viewBox="0 0 220 18"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,9 Q20,4 40,9 T80,9 T120,9 T160,9 T200,9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Container Premium com Glassmorphism */}
          <div
            ref={containerRef}
            className={`relative rounded-[24px] lg:rounded-[32px] p-6 sm:p-8 lg:p-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{
              background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.98) 100%)",
              backdropFilter: "blur(20px)",
              boxShadow: `
                0 20px 60px rgba(107, 76, 122, 0.1),
                0 0 0 1px rgba(139, 107, 154, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.6)
              `,
              border: "1px solid rgba(139, 107, 154, 0.2)",
            }}
          >
            {/* Aspas Decorativas Grandes */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 opacity-10 pointer-events-none"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 pointer-events-none rotate-180"
              style={{ color: "#8B6B9A" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>

            {/* Título da Seção - Apenas na primeira página */}
            {currentPage === 0 && (
              <div
                className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-5"
                }`}
                style={{ transitionDelay: "0.2s" }}
              >
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 100%)",
                    }}
                  >
                    A História
                  </span>
                </h2>

                {/* Linha Decorativa */}
                <div
                  className="h-0.5 w-48 mx-auto"
                  style={{
                    background: "linear-gradient(to right, transparent 0%, #8B6B9A 20%, #B8A5C7 50%, #8B6B9A 80%, transparent 100%)",
                  }}
                />
              </div>
            )}

            {/* Subtítulo do Capítulo - Apenas na segunda página */}
            {currentPage === 1 && (
              <div
                className="mb-6 sm:mb-8 lg:mb-12 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: "#8B6B9A" }}
                  >
                    Capítulo 1
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: "linear-gradient(to right, #8B6B9A 0%, transparent 100%)",
                    }}
                  />
                </div>
                <h3
                  className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mt-2"
                  style={{ color: "#5A3D68" }}
                >
                  O Verão que Mudou Tudo
                </h3>
              </div>
            )}

            {/* Conteúdo Editorial */}
            <div
              className="relative max-w-full sm:max-w-[60ch] lg:max-w-[65ch] mx-auto space-y-6 sm:space-y-8"
              style={{
                fontFamily: "var(--font-playfair), serif",
              }}
            >
              {paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className={`transition-all duration-1000 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{
                    transitionDelay: `${0.4 + index * 0.15}s`,
                  }}
                >
                  {index === 0 && currentPage === 0 ? (
                    // Primeiro parágrafo com Drop Cap (apenas na primeira página)
                    <p className="relative">
                      <span
                        className="float-left text-[80px] sm:text-[100px] lg:text-[140px] font-serif font-bold leading-none mr-2 sm:mr-3 mt-1 sm:mt-2"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          textShadow: "0 4px 8px rgba(139, 107, 154, 0.2)",
                          lineHeight: "0.8",
                        }}
                      >
                        N
                      </span>
                      <span
                        className="block text-base sm:text-lg lg:text-xl leading-[1.75] sm:leading-[1.85] lg:leading-[1.95] text-foreground/90 sm:text-justify"
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                          fontWeight: 400,
                          letterSpacing: "0.01em",
                          wordSpacing: "0.05em",
                        }}
                      >
                        {paragraph.substring(1).trim()}
                      </span>
                    </p>
                  ) : (
                    // Parágrafos seguintes ou primeira página sem Drop Cap
                    <p
                      className="text-base sm:text-lg lg:text-xl leading-[1.75] sm:leading-[1.85] lg:leading-[1.95] text-foreground/90 sm:text-justify"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                        wordSpacing: "0.05em",
                        textIndent: index === 0 && currentPage === 1 ? "0" : "0",
                      }}
                    >
                      {paragraph}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Ornamento Decorativo Inferior */}
            <div
              className={`mt-8 sm:mt-12 lg:mt-16 mb-16 sm:mb-20 lg:mb-0 flex justify-center transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
              style={{ transitionDelay: "1s" }}
            >
              <div
                className="w-24 h-0.5"
                style={{
                  background: "linear-gradient(to right, transparent 0%, #8B6B9A 50%, transparent 100%)",
                }}
              />
              <div
                className="mx-4 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#8B6B9A", opacity: 0.3 }}
              />
              <div
                className="w-24 h-0.5"
                style={{
                  background: "linear-gradient(to right, transparent 0%, #8B6B9A 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Botões de Navegação - Canto Inferior Direito */}
            <div className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 left-4 sm:left-auto flex flex-row items-center justify-end sm:justify-end gap-2 sm:gap-3`}>
              {/* Botão Anterior */}
              {currentPage > 0 && (
                <>
                  <button
                    onClick={handlePreviousPage}
                    className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 hover:gap-1 group whitespace-nowrap flex-shrink-0 ${currentPage === 1 ? 'w-[calc(50%-4px)]' : ''} sm:w-auto`}
                    style={{
                      background: "rgba(139, 107, 154, 0.1)",
                      color: "#8B6B9A",
                      border: "1px solid rgba(139, 107, 154, 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(139, 107, 154, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(139, 107, 154, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(139, 107, 154, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(139, 107, 154, 0.2)";
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover:-translate-x-1 flex-shrink-0"
                      style={{ width: "12px", height: "12px" }}
                    >
                      <path d="M10 4l-4 4 4 4" />
                    </svg>
                    <span className="whitespace-nowrap">Anterior</span>
                  </button>

                  {/* Botão Continuar Lendo - Apenas na página 2 */}
                  {currentPage === 1 && (
                    <a
                      href="https://amazon.com.br" // Link de compra - você pode atualizar depois
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold transition-all duration-300 hover:gap-3 group whitespace-nowrap flex-shrink-0 w-[calc(50%-4px)] sm:w-auto"
                      style={{
                        background: "linear-gradient(135deg, #8B6B9A 0%, #B8A5C7 100%)",
                        color: "#FFFFFF",
                        boxShadow: "0 4px 12px rgba(139, 107, 154, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(139, 107, 154, 0.4)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(139, 107, 154, 0.3)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <span className="whitespace-nowrap">Continuar lendo</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                        style={{ width: "12px", height: "12px" }}
                      >
                        <path d="M6 12l4-4-4-4" />
                      </svg>
                    </a>
                  )}
                </>
              )}

              {/* Botão Próxima */}
              {currentPage < pages.length - 1 && (
                <button
                  onClick={handleNextPage}
                  className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 hover:gap-3 group whitespace-nowrap flex-shrink-0 sm:w-auto"
                  style={{
                    background: "rgba(139, 107, 154, 0.1)",
                    color: "#8B6B9A",
                    border: "1px solid rgba(139, 107, 154, 0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(139, 107, 154, 0.15)";
                    e.currentTarget.style.borderColor = "rgba(139, 107, 154, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(139, 107, 154, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(139, 107, 154, 0.2)";
                  }}
                >
                  <span className="whitespace-nowrap">Próxima</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                    style={{ width: "12px", height: "12px" }}
                  >
                    <path d="M6 12l4-4-4-4" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
