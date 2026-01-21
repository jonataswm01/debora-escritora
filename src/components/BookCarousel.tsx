"use client";

import { useState, useRef } from "react";

interface BookPage {
  id: number;
  content: React.ReactNode;
}

interface BookCarouselProps {
  pages: BookPage[];
}

export default function BookCarousel({ pages }: BookCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const handleNext = () => {
    if (currentPage < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Container do Livro */}
      <div
        ref={containerRef}
        className="relative perspective-1000"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Livro Aberto - Card Principal */}
        <div
          className={`relative w-full min-h-[500px] lg:min-h-[600px] rounded-[32px] p-8 lg:p-12 transition-all duration-300 ${
            isFlipping ? "scale-[0.98] opacity-90" : "scale-100 opacity-100"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(249, 247, 242, 0.98) 0%, rgba(255, 255, 255, 1) 100%)",
            backdropFilter: "blur(10px)",
            boxShadow: `
              0 20px 60px rgba(0, 0, 0, 0.08),
              0 0 0 1px rgba(216, 191, 216, 0.15),
              inset 0 1px 0 rgba(255, 255, 255, 0.6),
              inset -1px 0 0 rgba(0, 0, 0, 0.02)
            `,
          }}
        >
          {/* Efeito de Página Virada (sombra interna na dobra) */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 rounded-l-[32px] pointer-events-none"
            style={{
              background: "linear-gradient(to right, rgba(0, 0, 0, 0.03) 0%, transparent 100%)",
            }}
          />
          
          {/* Linha sutil da dobra do livro */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 0%, rgba(216, 191, 216, 0.2) 20%, rgba(216, 191, 216, 0.2) 80%, transparent 100%)",
            }}
          />

          {/* Conteúdo da Página */}
          <div
            className={`relative z-10 transition-opacity duration-300 ${
              isFlipping ? "opacity-0" : "opacity-100"
            }`}
          >
            {pages[currentPage].content}
          </div>

          {/* Indicador de Páginas (no canto inferior direito) */}
          <div className="absolute bottom-6 right-8 text-sm text-foreground/40 font-medium">
            {currentPage + 1} / {pages.length}
          </div>
        </div>

        {/* Sombra do Livro (profundidade) */}
        <div
          className="absolute inset-0 rounded-[32px] -z-10 translate-y-8 translate-x-4 opacity-30 blur-2xl"
          style={{
            background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 50%, #F0D6DD 100%)",
          }}
        />
      </div>

      {/* Controles de Navegação */}
      <div className="flex items-center justify-center gap-8 mt-8">
        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          disabled={currentPage === 0 || isFlipping}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
            currentPage === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110 hover:shadow-lg cursor-pointer"
          }`}
          style={{
            background: currentPage === 0 
              ? "rgba(216, 191, 216, 0.2)" 
              : "linear-gradient(135deg, rgba(216, 191, 216, 0.3) 0%, rgba(176, 196, 222, 0.3) 100%)",
            border: "2px solid rgba(216, 191, 216, 0.4)",
          }}
          aria-label="Página anterior"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/60"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Indicadores de Página (dots) */}
        <div className="flex gap-2">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isFlipping && index !== currentPage) {
                  setIsFlipping(true);
                  setTimeout(() => {
                    setCurrentPage(index);
                    setIsFlipping(false);
                  }, 300);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentPage
                  ? "w-3 h-3 bg-accent-purple"
                  : "w-2 h-2 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Ir para página ${index + 1}`}
            />
          ))}
        </div>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          disabled={currentPage === pages.length - 1 || isFlipping}
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
            currentPage === pages.length - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110 hover:shadow-lg cursor-pointer"
          }`}
          style={{
            background: currentPage === pages.length - 1
              ? "rgba(216, 191, 216, 0.2)"
              : "linear-gradient(135deg, rgba(216, 191, 216, 0.3) 0%, rgba(176, 196, 222, 0.3) 100%)",
            border: "2px solid rgba(216, 191, 216, 0.4)",
          }}
          aria-label="Próxima página"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/60"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
