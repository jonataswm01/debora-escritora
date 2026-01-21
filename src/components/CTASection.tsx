"use client";

export default function CTASection() {
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

      <section
        className="relative py-20 lg:py-32"
      >
        {/* Ornamentos decorativos de fundo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Ornamento esquerdo */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-[0.03]">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
              <path
                d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
          {/* Ornamento direito */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.03]">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
              <path
                d="M20 20 Q50 10 80 20 T80 50 Q80 80 50 80 T20 50 Q20 30 20 20"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Container principal com glassmorphism */}
            <div
              className="relative rounded-[40px] p-10 lg:p-16 text-center overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(249, 247, 242, 0.98) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(216, 191, 216, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.6)",
                border: "1px solid rgba(216, 191, 216, 0.3)",
              }}
            >
              {/* Efeitos de fundo em camadas */}
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(216, 191, 216, 0.4) 0%, transparent 70%)",
                  transform: "translate(30%, -30%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(176, 196, 222, 0.4) 0%, transparent 70%)",
                  transform: "translate(-30%, 30%)",
                }}
              />

              {/* Aspas decorativas no topo */}
              <div className="absolute top-8 left-8 opacity-10">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <div className="absolute bottom-8 right-8 opacity-10 rotate-180">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>

              {/* Conteúdo */}
              <div className="relative z-10">
                {/* Ícone decorativo */}
                <div className="mb-6 flex justify-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(216, 191, 216, 0.2) 0%, rgba(176, 196, 222, 0.2) 100%)",
                      border: "2px solid rgba(216, 191, 216, 0.3)",
                    }}
                  >
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ color: "#C8A8C8" }}
                    >
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                    </svg>
                  </div>
                </div>

                {/* Título */}
                <h2 className="font-serif text-2xl lg:text-4xl font-bold mb-6 text-foreground/90 leading-tight">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #C8A8C8 0%, #9BB5D9 50%, #E0B8C4 100%)",
                    }}
                  >
                    Pronta para embarcar em uma nova história?
                  </span>
                </h2>

                {/* Citação decorativa */}
                <div className="mb-8 max-w-2xl mx-auto">
                  <p className="font-serif text-base lg:text-lg italic text-foreground/80 leading-relaxed relative">
                    <span className="absolute -left-4 -top-2 text-4xl opacity-20" style={{ fontFamily: "serif" }}>"</span>
                    Descubra mundos onde amizades se transformam em algo mais, 
                    onde cada página guarda uma emoção e cada história toca o coração.
                    <span className="absolute -right-4 -bottom-2 text-4xl opacity-20" style={{ fontFamily: "serif" }}>"</span>
                  </p>
                </div>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                  {/* CTA Principal - Ver Livros */}
                  <a
                    href="#livros"
                    className="group relative px-6 sm:px-10 py-4 sm:py-5 rounded-[32px] font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                      color: "#FFFFFF",
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3">
                      Conheça meus livros
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                      >
                        <path d="M6 12l4-4-4-4" />
                      </svg>
                    </span>
                    {/* Efeito de glow no hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{
                        background: "radial-gradient(circle at center, rgba(255, 255, 255, 0.5) 0%, transparent 70%)",
                      }}
                    />
                  </a>

                  {/* CTA Secundário - Ler Blog */}
                  <a
                    href="#blog"
                    className="group px-6 sm:px-10 py-4 sm:py-5 rounded-[32px] font-semibold text-sm sm:text-base transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 border-2"
                    style={{
                      borderColor: "#D8BFD8",
                      color: "#C8A8C8",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(216, 191, 216, 0.1)";
                      e.currentTarget.style.borderColor = "#C8A8C8";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor = "#D8BFD8";
                    }}
                  >
                    <span className="flex items-center gap-2 sm:gap-3">
                      Ler artigos do blog
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                      >
                        <path d="M6 12l4-4-4-4" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* Texto de apoio sutil */}
                <p className="text-sm text-foreground/50 italic">
                  Junte-se a leitores apaixonados por histórias que ressoam com a vida real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
