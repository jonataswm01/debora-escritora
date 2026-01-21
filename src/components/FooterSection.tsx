"use client";

import { useState } from "react";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
    <>
      {/* Linha separadora preta suave */}
      <div className="w-full max-w-4xl mx-auto py-8">
        <div
          className="h-px mx-auto"
          style={{
            background: "linear-gradient(to right, transparent 0%, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.15) 50%, rgba(0, 0, 0, 0.1) 80%, transparent 100%)",
            maxWidth: "600px",
          }}
        />
      </div>

      <footer
        className="relative py-16 lg:py-20"
        style={{
          background: "linear-gradient(180deg, var(--background) 0%, rgba(249, 247, 242, 0.95) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Newsletter Section */}
            <div className="text-center mb-16 lg:mb-20">
              <h3 className="font-serif text-2xl lg:text-3xl font-bold mb-4 text-foreground/90">
                Receba contos inéditos
              </h3>
              <p className="text-sm lg:text-base text-foreground/70 mb-8 max-w-2xl mx-auto">
                Inscreva-se na newsletter e receba histórias exclusivas, novidades sobre lançamentos e reflexões sobre escrita e literatura.
              </p>

              {/* Formulário de Newsletter */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Seu melhor e-mail"
                    required
                    className="flex-1 px-5 py-3 rounded-[24px] border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                    style={{
                      borderColor: "rgba(216, 191, 216, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.8)",
                      color: "var(--foreground)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#D8BFD8";
                      e.currentTarget.style.boxShadow = "0 0 0 3px rgba(216, 191, 216, 0.1)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = "rgba(216, 191, 216, 0.3)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className="px-6 py-3 rounded-[24px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    {isSubmitting ? "Enviando..." : isSubmitted ? "✓ Inscrito!" : "Inscrever-se"}
                  </button>
                </div>
              </form>
            </div>

            {/* Redes Sociais e Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
              {/* Redes Sociais */}
              <div className="text-center md:text-left">
                <h4 className="font-serif text-lg font-bold mb-4 text-foreground/90">
                  Conecte-se
                </h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                      border: "1px solid rgba(216, 191, 216, 0.3)",
                    }}
                    aria-label="Instagram"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#C8A8C8" }}
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                      border: "1px solid rgba(216, 191, 216, 0.3)",
                    }}
                    aria-label="Facebook"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#C8A8C8" }}
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                      border: "1px solid rgba(216, 191, 216, 0.3)",
                    }}
                    aria-label="Twitter"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#C8A8C8" }}
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                  </a>
                  <a
                    href="https://open.spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{
                      background: "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                      border: "1px solid rgba(216, 191, 216, 0.3)",
                    }}
                    aria-label="Spotify"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: "#C8A8C8" }}
                    >
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.3.421-1.02.599-1.56.3z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Links Rápidos */}
              <div className="text-center md:text-left">
                <h4 className="font-serif text-lg font-bold mb-4 text-foreground/90">
                  Navegação
                </h4>
                <nav className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                  >
                    Início
                  </a>
                  <a
                    href="#sobre"
                    className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                  >
                    Minha História
                  </a>
                  <a
                    href="#livros"
                    className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                  >
                    Livros
                  </a>
                  <a
                    href="#blog"
                    className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                  >
                    Blog
                  </a>
                </nav>
              </div>

              {/* Contato */}
              <div className="text-center md:text-left">
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
                  <a
                    href="/contato"
                    className="text-sm text-foreground/70 hover:text-foreground/90 transition-colors duration-300"
                  >
                    Enviar mensagem
                  </a>
                </div>
              </div>
            </div>

            {/* Linha divisória */}
            <div className="w-full h-px mb-8" style={{
              background: "linear-gradient(to right, transparent 0%, rgba(216, 191, 216, 0.2) 50%, transparent 100%)",
            }} />

            {/* Créditos */}
            <div className="text-center">
              <p className="text-xs text-foreground/50 mb-2">
                © {new Date().getFullYear()} Débora Rayane. Todos os direitos reservados.
              </p>
              <p className="text-xs text-foreground/40">
                Feito com <span className="text-accent-rose">♥</span> para leitores apaixonados
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
