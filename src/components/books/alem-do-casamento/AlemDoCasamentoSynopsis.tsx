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

  const synopsisText = `Depois de descobrirem o amor, o casal enfrenta os desafios reais de um relacionamento duradouro. A continuação aprofunda os sentimentos e traz um romance mais maduro, com camadas reais: fidelidade, desconfiança, perdas e amadurecimento, além do amor que precisa resistir à vida como ela é.

Nem tudo são flores quando a paixão inicial se transforma em compromisso. Com medos, inseguranças e a dúvida constante: será que o amor que nasceu da amizade é forte o suficiente para superar os obstáculos da vida adulta? Ou será que alguns relacionamentos são destinados a se transformar?

Além do Casamento explora a complexidade dos relacionamentos reais, onde o amor precisa ser escolhido todos os dias, mesmo quando a vida fica difícil. Uma história sobre fidelidade, crescimento pessoal e o amor que se fortalece com o tempo — do jeito mais real possível.`;

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
      {/* Traços Decorativos no Background - Personalizados para "Além do Casamento" */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        {/* Linha Reta Angular Superior Esquerda (em vez de ondulada) */}
        <svg
          className="absolute top-20 left-8 w-32 sm:w-48"
          viewBox="0 0 200 20"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,10 L40,5 L80,10 L120,5 L160,10 L200,10"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Grossa Superior Direita */}
        <svg
          className="absolute top-32 right-12 w-40 sm:w-56"
          viewBox="0 0 250 4"
          fill="none"
          style={{ color: "#FFA366" }}
        >
          <line
            x1="0"
            y1="2"
            x2="250"
            y2="2"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Reta Tracejada Grossa Esquerda */}
        <svg
          className="absolute top-1/2 left-4 -translate-y-1/2 w-24 sm:w-32"
          viewBox="0 0 150 3"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <line
            x1="0"
            y1="1.5"
            x2="35"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <line
            x1="45"
            y1="1.5"
            x2="80"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <line
            x1="90"
            y1="1.5"
            x2="125"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
          <line
            x1="135"
            y1="1.5"
            x2="150"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Linha Zig-zag Pronunciada Direita */}
        <svg
          className="absolute top-1/3 right-8 w-36 sm:w-48"
          viewBox="0 0 200 35"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,17 L25,3 L50,17 L75,3 L100,17 L125,3 L150,17 L175,3 L200,17"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Muito Grossa Inferior Esquerda */}
        <svg
          className="absolute bottom-24 left-12 w-28 sm:w-40"
          viewBox="0 0 180 5"
          fill="none"
          style={{ color: "#FFA366" }}
        >
          <line
            x1="0"
            y1="2.5"
            x2="180"
            y2="2.5"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Angular Inferior Direita */}
        <svg
          className="absolute bottom-32 right-16 w-32 sm:w-44"
          viewBox="0 0 200 20"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,10 L30,3 L60,10 L90,3 L120,10 L150,3 L180,10 L200,10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Dupla Esquerda */}
        <svg
          className="absolute top-2/3 left-6 w-20 sm:w-28"
          viewBox="0 0 120 4"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <line
            x1="0"
            y1="1"
            x2="120"
            y2="1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="0"
            y1="3"
            x2="120"
            y2="3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Reta Grossa Superior Central */}
        <svg
          className="absolute top-16 left-1/2 -translate-x-1/2 w-24 sm:w-32"
          viewBox="0 0 140 3"
          fill="none"
          style={{ color: "#FFA366" }}
        >
          <line
            x1="0"
            y1="1.5"
            x2="140"
            y2="1.5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Linha Angular Inferior Central */}
        <svg
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-36 sm:w-48"
          viewBox="0 0 220 20"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,10 L40,3 L80,10 L120,3 L160,10 L200,3 L220,10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
                0 20px 60px rgba(255, 140, 66, 0.1),
                0 0 0 1px rgba(255, 140, 66, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.6)
              `,
              border: "1px solid rgba(255, 140, 66, 0.2)",
            }}
          >
            {/* Aspas Decorativas Grandes */}
            <div
              className="absolute -top-8 -left-8 w-32 h-32 opacity-10 pointer-events-none"
              style={{ color: "#FF8C42" }}
            >
              <svg viewBox="0 0 100 100" fill="currentColor">
                <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
              </svg>
            </div>
            <div
              className="absolute -bottom-8 -right-8 w-32 h-32 opacity-10 pointer-events-none rotate-180"
              style={{ color: "#FF8C42" }}
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
                        "linear-gradient(135deg, #FF8C42 0%, #FFA366 100%)",
                    }}
                  >
                    A História
                  </span>
                </h2>

                {/* Linha Decorativa */}
                <div
                  className="h-0.5 w-48 mx-auto"
                  style={{
                    background: "linear-gradient(to right, transparent 0%, #FF8C42 20%, #FFA366 50%, #FF8C42 80%, transparent 100%)",
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
                    style={{ color: "#FF8C42" }}
                  >
                    Capítulo 1
                  </span>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: "linear-gradient(to right, #FF8C42 0%, transparent 100%)",
                    }}
                  />
                </div>
                <h3
                  className="font-serif text-lg sm:text-xl lg:text-2xl font-bold mt-2"
                  style={{ color: "#CC6F35" }}
                >
                  Os Desafios que Fortalecem
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
                            "linear-gradient(135deg, #FF8C42 0%, #FFA366 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          textShadow: "0 4px 8px rgba(255, 140, 66, 0.2)",
                          lineHeight: "0.8",
                        }}
                      >
                        D
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
                  background: "linear-gradient(to right, transparent 0%, #FF8C42 50%, transparent 100%)",
                }}
              />
              <div
                className="mx-4 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#FF8C42", opacity: 0.3 }}
              />
              <div
                className="w-24 h-0.5"
                style={{
                  background: "linear-gradient(to right, transparent 0%, #FF8C42 50%, transparent 100%)",
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
                      background: "rgba(255, 140, 66, 0.1)",
                      color: "#FF8C42",
                      border: "1px solid rgba(255, 140, 66, 0.2)",
                      backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(255, 140, 66, 0.15)";
                      e.currentTarget.style.borderColor = "rgba(255, 140, 66, 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 140, 66, 0.1)";
                      e.currentTarget.style.borderColor = "rgba(255, 140, 66, 0.2)";
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
                        background: "linear-gradient(135deg, #FF8C42 0%, #FFA366 100%)",
                        color: "#FFFFFF",
                        boxShadow: "0 4px 12px rgba(255, 140, 66, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 140, 66, 0.4)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(255, 140, 66, 0.3)";
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
