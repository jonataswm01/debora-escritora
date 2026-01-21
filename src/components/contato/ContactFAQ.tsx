"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function ContactFAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const faqItems: FAQItem[] = [
    {
      question: "Quanto tempo leva para receber uma resposta?",
      answer:
        "Respondo todas as mensagens pessoalmente em até 3-5 dias úteis. Para convites de eventos e propostas de parcerias, pode levar um pouco mais, mas sempre respondo todas as mensagens com carinho e atenção.",
    },
    {
      question: "Você aceita convites para eventos literários?",
      answer:
        "Sim! Adoro participar de eventos literários, feiras do livro, lançamentos e encontros com leitores. Se você tem um evento e gostaria de me convidar, por favor, envie os detalhes através do formulário ou e-mail direto.",
    },
    {
      question: "Como funciona parcerias e colaborações?",
      answer:
        "Estou sempre aberta a parcerias que façam sentido com meu trabalho e valores. Se você tem uma proposta de colaboração, envie os detalhes e eu analisarei com carinho. Prefiro parcerias autênticas e que agreguem valor tanto para mim quanto para meus leitores.",
    },
    {
      question: "Posso enviar feedback sobre seus livros?",
      answer:
        "Claro! Adoro receber feedback dos leitores. Seus comentários, impressões e até mesmo críticas construtivas são muito importantes para mim. Cada mensagem é lida com atenção e carinho.",
    },
    {
      question: "Você faz leitura crítica de manuscritos?",
      answer:
        "Atualmente, não ofereço serviços de leitura crítica ou revisão de manuscritos. Meu foco está na escrita dos meus próprios projetos. Mas agradeço muito o interesse!",
    },
    {
      question: "Como posso comprar seus livros?",
      answer:
        "Meus livros estão disponíveis nas principais livrarias online, como Amazon. Você pode encontrar os links de compra nas páginas dedicadas de cada livro aqui no site. Se tiver dificuldades para encontrar, me avise que eu te ajudo!",
    },
  ];

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="relative py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Título da Seção */}
          <div
            className={`text-center mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-bold mb-2 text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base">
              Tire suas dúvidas sobre contato, parcerias e muito mais
            </p>
          </div>

          {/* Lista de FAQ */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-out ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
              >
                <div
                  className="rounded-[20px] backdrop-blur-xl border overflow-hidden transition-all duration-300 relative group"
                  style={{
                    background: openIndex === index
                      ? "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(249, 247, 242, 0.5) 100%)"
                      : "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 247, 242, 0.4) 100%)",
                    backdropFilter: "blur(20px)",
                    borderColor:
                      openIndex === index
                        ? "rgba(216, 191, 216, 0.3)"
                        : "rgba(216, 191, 216, 0.15)",
                    boxShadow: openIndex === index
                      ? "0 8px 32px rgba(139, 107, 154, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                      : "0 2px 12px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)",
                  }}
                  onMouseEnter={(e) => {
                    if (openIndex !== index) {
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.55) 0%, rgba(249, 247, 242, 0.45) 100%)";
                      e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.25)";
                      e.currentTarget.style.boxShadow = "0 4px 20px rgba(139, 107, 154, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.5)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (openIndex !== index) {
                      e.currentTarget.style.background = "linear-gradient(135deg, rgba(255, 255, 255, 0.5) 0%, rgba(249, 247, 242, 0.4) 100%)";
                      e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.15)";
                      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.4)";
                    }
                  }}
                >
                  {/* Efeito de brilho sutil no hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(216, 191, 216, 0.1) 0%, transparent 70%)",
                    }}
                  />
                  
                  {/* Botão da Pergunta */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-4 lg:px-6 lg:py-4 flex items-center justify-between gap-4 text-left transition-all duration-300 relative z-10"
                    style={{
                      background: openIndex === index
                        ? "linear-gradient(135deg, rgba(216, 191, 216, 0.08) 0%, rgba(176, 196, 222, 0.05) 100%)"
                        : "transparent",
                    }}
                  >
                    <h3 className="font-serif text-base sm:text-lg font-bold text-foreground flex-1 pr-4">
                      {item.question}
                    </h3>
                    <div
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: openIndex === index
                          ? "linear-gradient(135deg, rgba(216, 191, 216, 0.3) 0%, rgba(176, 196, 222, 0.2) 100%)"
                          : "rgba(216, 191, 216, 0.15)",
                        color: openIndex === index ? "#8B6B9A" : "#1A1A1A",
                        boxShadow: openIndex === index
                          ? "0 2px 8px rgba(139, 107, 154, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.5)"
                          : "inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>

                  {/* Resposta (Accordion) */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: openIndex === index ? "500px" : "0",
                      opacity: openIndex === index ? 1 : 0,
                    }}
                  >
                    <div className="px-5 pb-4 lg:px-6 lg:pb-5 relative">
                      {/* Linha decorativa superior */}
                      <div
                        className="absolute top-0 left-6 right-6 h-px"
                        style={{
                          background: "linear-gradient(to right, transparent 0%, rgba(216, 191, 216, 0.3) 50%, transparent 100%)",
                        }}
                      />
                      <div
                        className="pt-4 pb-2 text-foreground/65 leading-relaxed text-sm relative"
                        style={{
                          paddingTop: "1.25rem",
                        }}
                      >
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mensagem Final */}
          <div
            className={`mt-8 text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1.2s" }}
          >
            <p className="text-foreground/60 text-sm mb-3">
              Não encontrou sua resposta?
            </p>
            <a
              href="#form"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                color: "#FFFFFF",
                boxShadow: "0 4px 16px rgba(139, 107, 154, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(139, 107, 154, 0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(139, 107, 154, 0.3)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
            >
              <span>Envie sua mensagem</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
