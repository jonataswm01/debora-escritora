"use client";

import { useState, useEffect, useCallback } from "react";

interface BookPage {
  id: number;
  content: string;
  title?: string;
}

interface MyStoryBookProps {
  pages: BookPage[];
}

export default function MyStoryBook({ pages }: MyStoryBookProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 50;

  const handleNext = useCallback(() => {
    if (currentPageIndex < pages.length - 1 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPageIndex((prev) => prev + 1);
        setIsFlipping(false);
      }, 400);
    }
  }, [currentPageIndex, isFlipping, pages.length]);

  const handlePrev = useCallback(() => {
    if (currentPageIndex > 0 && !isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPageIndex((prev) => prev - 1);
        setIsFlipping(false);
      }, 400);
    }
  }, [currentPageIndex, isFlipping]);

  // Controle por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFlipping) return;
      
      if (e.key === "ArrowLeft" && currentPageIndex > 0) {
        handlePrev();
      } else if (e.key === "ArrowRight" && currentPageIndex < pages.length - 1) {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPageIndex, isFlipping, pages.length, handlePrev, handleNext]);

  // Controle por swipe
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
    <div className="relative w-full flex flex-col items-center py-8 lg:py-12">
      {/* Container da Página */}
      <div
        className="relative w-full max-w-2xl"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Página única centralizada */}
        <div
          className={`relative w-full min-h-[500px] lg:min-h-[600px] mx-auto ${
            isFlipping ? "flip-page" : ""
          }`}
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          {/* Face frontal da página */}
          <div
            className="page-face absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div
              className="w-full h-full rounded-[24px] shadow-lg pt-8 pb-8 pl-10 lg:pl-16 pr-6 lg:pr-8"
              style={{
                background: "linear-gradient(135deg, #FEFCF8 0%, #F9F7F2 100%)",
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(0, 0, 0, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
              }}
            >
              {/* Conteúdo da página */}
              <div className="h-full overflow-y-auto">
                {pages[currentPageIndex].title && (
                  <h3 
                    className="font-serif text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-foreground/90"
                    style={{
                      fontFamily: "var(--font-playfair), serif",
                    }}
                  >
                    {pages[currentPageIndex].title}
                  </h3>
                )}
                <div
                  className="text-sm lg:text-base leading-[1.8] text-foreground/85"
                  style={{
                    textAlign: "justify",
                    fontFamily: "var(--font-playfair), serif",
                    width: "100%",
                  }}
                >
                  {pages[currentPageIndex].content.split("\n\n").map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="mb-3 lg:mb-4 first:mt-0"
                      style={{
                        textIndent: pIndex === 0 ? "0" : "2em",
                      }}
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Face traseira (durante o flip) */}
          <div
            className="page-face-back absolute inset-0 w-full h-full"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div
              className="w-full h-full rounded-[24px] shadow-lg pt-8 pb-8 pl-10 lg:pl-16 pr-6 lg:pr-8"
              style={{
                background: "linear-gradient(135deg, #FEFCF8 0%, #F9F7F2 100%)",
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.1),
                  0 0 0 1px rgba(0, 0, 0, 0.05),
                  inset 0 1px 0 rgba(255, 255, 255, 0.6)
                `,
              }}
            >
              {/* Conteúdo da próxima página (se houver) */}
              {currentPageIndex < pages.length - 1 ? (
                <div className="h-full overflow-y-auto">
                  {pages[currentPageIndex + 1].title && (
                    <h3 
                      className="font-serif text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-foreground/90"
                      style={{
                        fontFamily: "var(--font-playfair), serif",
                      }}
                    >
                      {pages[currentPageIndex + 1].title}
                    </h3>
                  )}
                  <div
                    className="text-sm lg:text-base leading-[1.8] text-foreground/85"
                    style={{
                      textAlign: "justify",
                      fontFamily: "var(--font-playfair), serif",
                      width: "100%",
                    }}
                  >
                    {pages[currentPageIndex + 1].content.split("\n\n").map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="mb-3 lg:mb-4 first:mt-0"
                        style={{
                          textIndent: pIndex === 0 ? "0" : "2em",
                        }}
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-foreground/40 italic text-center">
                    Fim da história
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Controles de navegação */}
      <div className="flex items-center justify-center gap-8 mt-12">
        {/* Botão Anterior */}
        <button
          onClick={handlePrev}
          disabled={currentPageIndex === 0 || isFlipping}
          className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
            currentPageIndex === 0 || isFlipping
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110 hover:shadow-xl cursor-pointer active:scale-95"
          }`}
          style={{
            background:
              currentPageIndex === 0 || isFlipping
                ? "rgba(216, 191, 216, 0.2)"
                : "linear-gradient(135deg, rgba(216, 191, 216, 0.4) 0%, rgba(176, 196, 222, 0.4) 100%)",
            border: "2px solid rgba(216, 191, 216, 0.5)",
            boxShadow:
              currentPageIndex === 0 || isFlipping
                ? "none"
                : "0 4px 12px rgba(216, 191, 216, 0.3)",
          }}
          aria-label="Página anterior"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/70"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Indicador de página */}
        <div className="text-sm text-foreground/50 font-medium min-w-[60px] text-center">
          {currentPageIndex + 1} / {pages.length}
        </div>

        {/* Botão Próximo */}
        <button
          onClick={handleNext}
          disabled={currentPageIndex === pages.length - 1 || isFlipping}
          className={`flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${
            currentPageIndex === pages.length - 1 || isFlipping
              ? "opacity-30 cursor-not-allowed"
              : "hover:scale-110 hover:shadow-xl cursor-pointer active:scale-95"
          }`}
          style={{
            background:
              currentPageIndex === pages.length - 1 || isFlipping
                ? "rgba(216, 191, 216, 0.2)"
                : "linear-gradient(135deg, rgba(216, 191, 216, 0.4) 0%, rgba(176, 196, 222, 0.4) 100%)",
            border: "2px solid rgba(216, 191, 216, 0.5)",
            boxShadow:
              currentPageIndex === pages.length - 1 || isFlipping
                ? "none"
                : "0 4px 12px rgba(216, 191, 216, 0.3)",
          }}
          aria-label="Próxima página"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground/70"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
