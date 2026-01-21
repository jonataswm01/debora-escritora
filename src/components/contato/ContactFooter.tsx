"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function ContactFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio - você pode integrar com sua API depois
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1000);
  };

  return (
    <footer
      ref={footerRef}
      className="relative py-12 lg:py-16 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--background) 0%, rgba(249, 247, 242, 0.98) 100%)",
      }}
    >
      {/* Traços Decorativos de Fundo */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        {/* Traço Superior Esquerdo */}
        <svg
          className="absolute top-10 left-10 w-48 h-24 opacity-[0.04]"
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

        {/* Traço Inferior Direito */}
        <svg
          className="absolute bottom-20 right-16 w-64 h-32 opacity-[0.03]"
          viewBox="0 0 300 150"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          style={{ color: "#B0C4DE" }}
        >
          <path
            d="M20 75 Q100 50, 180 65 T280 80"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Linha Separadora Decorativa */}
          <div
            className={`mb-8 lg:mb-10 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div
              className="h-px mx-auto"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(216, 191, 216, 0.3) 20%, rgba(216, 191, 216, 0.5) 50%, rgba(216, 191, 216, 0.3) 80%, transparent 100%)",
                maxWidth: "600px",
              }}
            />
          </div>

          {/* Newsletter Section - Destaque Premium */}
          <div
            className={`mb-8 lg:mb-10 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div
              className="rounded-[28px] p-6 lg:p-8 backdrop-blur-xl border text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(249, 247, 242, 0.85) 100%)",
                backdropFilter: "blur(20px)",
                borderColor: "rgba(216, 191, 216, 0.3)",
                boxShadow:
                  "0 20px 60px rgba(139, 107, 154, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
              }}
            >
              {/* Efeitos de Fundo Decorativos */}
              <div
                className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(216, 191, 216, 0.4) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(176, 196, 222, 0.4) 0%, transparent 70%)",
                  transform: "translate(-30%, 30%)",
                }}
              />

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Ícone Decorativo */}
                <div className="mb-4 flex justify-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                    }}
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      style={{ color: "#8B6B9A" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold mb-3 text-foreground">
                  Receba histórias exclusivas
                </h3>
                <p className="text-foreground/70 text-xs sm:text-sm mb-6 max-w-2xl mx-auto leading-relaxed">
                  Inscreva-se na newsletter e receba contos inéditos, novidades sobre lançamentos,
                  reflexões sobre escrita e literatura, e seja o primeiro a saber sobre novos projetos.
                </p>

                {/* Formulário de Newsletter */}
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor e-mail"
                      required
                      disabled={isSubmitting || isSubmitted}
                      className="flex-1 px-4 py-3 rounded-[20px] border-2 transition-all duration-300 focus:outline-none text-foreground placeholder:text-foreground/40 disabled:opacity-50 text-sm"
                      style={{
                        borderColor: "rgba(216, 191, 216, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#D8BFD8";
                        e.currentTarget.style.boxShadow =
                          "0 0 0 3px rgba(216, 191, 216, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.3)";
                        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                      }}
                    />
                    <button
                      type="submit"
                      disabled={isSubmitting || isSubmitted}
                      className="px-6 py-3 rounded-[20px] font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap"
                      style={{
                        background:
                          "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                        color: "#FFFFFF",
                        boxShadow: "0 8px 24px rgba(139, 107, 154, 0.3)",
                      }}
                      onMouseEnter={(e) => {
                        if (!isSubmitting && !isSubmitted) {
                          e.currentTarget.style.boxShadow =
                            "0 12px 32px rgba(139, 107, 154, 0.4)";
                          e.currentTarget.style.transform = "translateY(-4px)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isSubmitting && !isSubmitted) {
                          e.currentTarget.style.boxShadow =
                            "0 8px 24px rgba(139, 107, 154, 0.3)";
                          e.currentTarget.style.transform = "translateY(-1px)";
                        }
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          <span>Enviando...</span>
                        </>
                      ) : isSubmitted ? (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>Inscrito!</span>
                        </>
                      ) : (
                        "Inscrever-se"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Links e Redes Sociais */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            {/* Navegação */}
            <div className="text-center md:text-left">
              <h4 className="font-serif text-lg font-bold mb-4 text-foreground/90">
                Navegação
              </h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  Início
                </Link>
                <Link
                  href="/#sobre"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  Sobre
                </Link>
                <Link
                  href="/#livros"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  Livros
                </Link>
                <Link
                  href="/contato"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  Contato
                </Link>
              </nav>
            </div>

            {/* Redes Sociais */}
            <div className="text-center">
              <h4 className="font-serif text-lg font-bold mb-4 text-foreground/90">
                Conecte-se
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: "rgba(139, 107, 154, 0.1)",
                    border: "1px solid rgba(139, 107, 154, 0.2)",
                  }}
                  aria-label="Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "#8B6B9A" }}
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: "rgba(139, 107, 154, 0.1)",
                    border: "1px solid rgba(139, 107, 154, 0.2)",
                  }}
                  aria-label="Facebook"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "#8B6B9A" }}
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://open.spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                  style={{
                    background: "rgba(139, 107, 154, 0.1)",
                    border: "1px solid rgba(139, 107, 154, 0.2)",
                  }}
                  aria-label="Spotify"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    style={{ color: "#8B6B9A" }}
                  >
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.3.421-1.02.599-1.56.3z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contato */}
            <div className="text-center md:text-right">
              <h4 className="font-serif text-lg font-bold mb-4 text-foreground/90">
                Contato
              </h4>
              <div className="flex flex-col gap-2">
                <a
                  href="mailto:contato@deborarayane.com"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  contato@deborarayane.com
                </a>
                <Link
                  href="/contato"
                  className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                >
                  Enviar mensagem
                </Link>
              </div>
            </div>
          </div>

          {/* Linha Divisória */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "0.8s" }}
          >
            <div
              className="h-px"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, rgba(216, 191, 216, 0.2) 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Copyright */}
          <div
            className={`text-center transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "1s" }}
          >
            <p className="text-xs text-foreground/50 mb-2">
              © {new Date().getFullYear()} Débora Rayane. Todos os direitos reservados.
            </p>
            <p className="text-xs text-foreground/40">
              Feito com{" "}
              <span
                className="inline-block mx-1"
                style={{ color: "#F0D6DD" }}
              >
                ♥
              </span>{" "}
              para leitores apaixonados
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
