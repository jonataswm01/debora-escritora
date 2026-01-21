"use client";

import { useEffect, useRef, useState } from "react";
import { ReactElement } from "react";

interface InfoCard {
  icon: ReactElement;
  title: string;
  description: string;
  color: string;
}

export default function ContactInfo() {
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

    return () => observer.disconnect();
  }, []);

  const infoCards: InfoCard[] = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Tempo de Resposta",
      description:
        "Respondo todas as mensagens pessoalmente em até 3-5 dias úteis. Para convites e parcerias, pode levar um pouco mais, mas sempre respondo!",
      color: "#D8BFD8",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Resposta Garantida",
      description:
        "Cada mensagem é lida com carinho e atenção. Prometo responder todas, seja para compartilhar impressões sobre meus livros ou propor parcerias.",
      color: "#B0C4DE",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Tipos de Contato",
      description:
        "Aceito mensagens de leitores, convites para eventos literários, propostas de parcerias e qualquer outro assunto relacionado à literatura.",
      color: "#F0D6DD",
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título da Seção */}
          <div
            className={`text-center mb-10 lg:mb-12 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              Como funciona
            </h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
              Algumas informações úteis sobre como funciona o processo de contato
            </p>
          </div>

          {/* Grid de Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {infoCards.map((card, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.2}s` }}
              >
                <div
                  className="rounded-[28px] p-6 lg:p-8 h-full backdrop-blur-xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                  style={{
                    background: "rgba(255, 255, 255, 0.85)",
                    borderColor: "rgba(216, 191, 216, 0.2)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = card.color;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${card.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.2)";
                    e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {/* Ícone */}
                  <div
                    className="w-16 h-16 rounded-[20px] flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: `${card.color}20`,
                      color: card.color,
                    }}
                  >
                    {card.icon}
                  </div>

                  {/* Título */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold mb-3 text-foreground">
                    {card.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-foreground/70 leading-relaxed text-sm sm:text-base">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem Final */}
          <div
            className={`mt-12 lg:mt-16 text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <div
              className="inline-block rounded-[24px] px-6 py-4 backdrop-blur-xl border"
              style={{
                background: "rgba(255, 255, 255, 0.7)",
                borderColor: "rgba(216, 191, 216, 0.3)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
              }}
            >
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                <span className="font-serif text-lg sm:text-xl text-foreground">"</span>
                Estou sempre aberta para conversar sobre literatura, escrita e histórias que tocam o coração.
                <span className="font-serif text-lg sm:text-xl text-foreground">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
