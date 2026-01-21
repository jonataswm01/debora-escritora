"use client";

import { useEffect, useRef, useState } from "react";

export default function AlemDoCasamentoTestimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Carla Mendes",
      rating: 5,
      text: "Uma continuação perfeita! A autora conseguiu aprofundar os temas de forma madura e realista. Uma leitura que me fez refletir sobre relacionamentos.",
      location: "Curitiba, PR",
    },
    {
      id: 2,
      name: "Pedro Alves",
      rating: 5,
      text: "Mais maduro e profundo que o primeiro. A forma como aborda fidelidade e os desafios reais de um relacionamento é impressionante. Recomendo muito!",
      location: "Porto Alegre, RS",
    },
    {
      id: 3,
      name: "Juliana Ferreira",
      rating: 5,
      text: "Emocionante do início ao fim! A narrativa é envolvente e os personagens evoluem de forma natural. Uma história sobre amor verdadeiro e crescimento pessoal.",
      location: "Brasília, DF",
    },
  ];

  return (
    <section
      id="depoimentos"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Traços Decorativos no Background - Personalizados para "Além do Casamento" */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        {/* Linha Angular Superior Esquerda */}
        <svg
          className="absolute top-24 left-12 w-40 sm:w-56"
          viewBox="0 0 300 30"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,15 L50,5 L100,15 L150,5 L200,15 L250,5 L300,15"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>

        {/* Linha Reta Grossa Tracejada Direita */}
        <svg
          className="absolute top-1/3 right-8 w-32 sm:w-44"
          viewBox="0 0 200 4"
          fill="none"
          style={{ color: "#FFA366" }}
        >
          <line
            x1="0"
            y1="2"
            x2="45"
            y2="2"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <line
            x1="55"
            y1="2"
            x2="100"
            y2="2"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <line
            x1="110"
            y1="2"
            x2="155"
            y2="2"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <line
            x1="165"
            y1="2"
            x2="200"
            y2="2"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
        </svg>

        {/* Linha Angular Inferior Central */}
        <svg
          className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 sm:w-64"
          viewBox="0 0 350 25"
          fill="none"
          style={{ color: "#FF8C42" }}
        >
          <path
            d="M0,12 L60,3 L120,12 L180,3 L240,12 L300,3 L350,12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
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
              O que os leitores dizem
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #FF8C42 0%, #FFA366 50%, #FFB88C 100%)",
                }}
              >
                Depoimentos de Quem Leu
              </span>
            </h2>
            <div
              className="h-0.5 w-48 mx-auto"
              style={{
                background: "linear-gradient(to right, transparent 0%, #FF8C42 20%, #FFA366 50%, #FF8C42 80%, transparent 100%)",
              }}
            />
          </div>

          {/* Grid de Depoimentos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
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
                  className="relative h-full rounded-[32px] p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.98) 100%)",
                    backdropFilter: "blur(20px)",
                    boxShadow: `
                      0 10px 40px rgba(255, 140, 66, 0.08),
                      0 0 0 1px rgba(255, 140, 66, 0.15),
                      inset 0 1px 0 rgba(255, 255, 255, 0.6)
                    `,
                    border: "1px solid rgba(255, 140, 66, 0.15)",
                  }}
                >
                  {/* Aspas Decorativas */}
                  <div
                    className="absolute -top-3 -left-3 w-12 h-12 opacity-20 pointer-events-none"
                    style={{ color: "#FF8C42" }}
                  >
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M20 40 Q30 20, 50 20 Q70 20, 70 40 Q70 60, 50 70 Q30 80, 20 60 Z" />
                    </svg>
                  </div>

                  {/* Estrelas */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        style={{ color: "#FFD700" }}
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  {/* Texto do Depoimento */}
                  <p
                    className="text-base lg:text-lg leading-relaxed mb-6 text-foreground/90"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, 'Times New Roman', serif",
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                    }}
                  >
                    "{testimonial.text}"
                  </p>

                  {/* Informações do Leitor */}
                  <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                    <div>
                      <p className="font-semibold text-foreground/90 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-foreground/50 mt-1">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Efeito de Glow no Hover */}
                  <div
                    className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, rgba(255, 140, 66, 0.1) 0%, transparent 70%)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Botão de Ação - CTA para Compra */}
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
            style={{ transitionDelay: "0.9s" }}
          >
            <a
              href="https://amazon.com.br/alem-do-casamento"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 rounded-[28px] font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              style={{
                background: "linear-gradient(135deg, #FF8C42 0%, #FFA366 100%)",
                color: "#FFFFFF",
                boxShadow: "0 8px 24px rgba(255, 140, 66, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(255, 140, 66, 0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(255, 140, 66, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <span>Comprar agora</span>
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
