"use client";

import Link from "next/link";

export default function BookFooter() {
  return (
    <footer className="relative py-12 lg:py-16 overflow-hidden">
      {/* Traço Decorativo Superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <div
          className="h-px mx-auto"
          style={{
            background: "linear-gradient(to right, transparent 0%, rgba(139, 107, 154, 0.2) 20%, rgba(139, 107, 154, 0.3) 50%, rgba(139, 107, 154, 0.2) 80%, transparent 100%)",
            maxWidth: "600px",
          }}
        />
      </div>

      {/* Traço Decorativo Sutil no Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg
          className="absolute bottom-8 left-1/4 w-32 sm:w-48"
          viewBox="0 0 250 15"
          fill="none"
          style={{ color: "#8B6B9A" }}
        >
          <path
            d="M0,7 Q30,2 60,7 T120,7 T180,7 T250,7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-6 lg:gap-8">
            {/* Navegação Principal */}
            <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-foreground/70 hover:text-foreground/90 transition-colors duration-300 relative group"
              >
                <span>Voltar ao site</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6B9A] to-[#B8A5C7] transition-all duration-300 group-hover:w-full"
                />
              </Link>

              <span className="text-foreground/30">•</span>

              <Link
                href="/#livros"
                className="text-sm font-medium text-foreground/70 hover:text-foreground/90 transition-colors duration-300 relative group"
              >
                <span>Outros livros</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6B9A] to-[#B8A5C7] transition-all duration-300 group-hover:w-full"
                />
              </Link>

              <span className="text-foreground/30">•</span>

              <Link
                href="/#sobre"
                className="text-sm font-medium text-foreground/70 hover:text-foreground/90 transition-colors duration-300 relative group"
              >
                <span>Sobre a autora</span>
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#8B6B9A] to-[#B8A5C7] transition-all duration-300 group-hover:w-full"
                />
              </Link>
            </nav>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  background: "rgba(139, 107, 154, 0.1)",
                  border: "1px solid rgba(139, 107, 154, 0.2)",
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
                  style={{ color: "#8B6B9A" }}
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
                  background: "rgba(139, 107, 154, 0.1)",
                  border: "1px solid rgba(139, 107, 154, 0.2)",
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
                  style={{ color: "#8B6B9A" }}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{
                  background: "rgba(139, 107, 154, 0.1)",
                  border: "1px solid rgba(139, 107, 154, 0.2)",
                }}
                aria-label="Spotify"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "#8B6B9A" }}
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.3.421-1.02.599-1.56.3z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs text-foreground/50 mb-1">
                © {new Date().getFullYear()} Débora Rayane. Todos os direitos reservados.
              </p>
              <p className="text-xs text-foreground/40">
                Feito com <span style={{ color: "#E0B8C4" }}>♥</span> para leitores apaixonados
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
