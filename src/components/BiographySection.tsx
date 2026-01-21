"use client";

import { useState } from "react";

export default function BiographySection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="sobre"
      className="relative min-h-screen flex flex-col items-center justify-center py-20 lg:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[65ch] mx-auto">
          {/* Título da Seção */}
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #C8A8C8 0%, #9BB5D9 50%, #E0B8C4 100%)",
              }}
            >
              Minha História
            </span>
          </h2>

          {/* Texto da Biografia - Estilo Editorial/Livro */}
          <div className="space-y-6">
            {/* Primeiro parágrafo com Drop Cap */}
            <p className="relative">
              <span
                className="float-left text-7xl lg:text-8xl font-serif font-bold leading-none mr-2 mt-1"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #C8A8C8 0%, #9BB5D9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                M
              </span>
              <span
                className="text-base lg:text-lg leading-[1.9] text-foreground/85 block"
                style={{
                  textAlign: "justify",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                inha paixão pelas palavras começou cedo, quando descobri que
                histórias tinham o poder de transportar pessoas para mundos
                completamente novos. Natural de Maringá, no Paraná, cresci
                cercada por livros e pela magia que cada página guarda. Foi
                assim que aprendi que escrever não é apenas colocar palavras no
                papel, mas sim criar conexões profundas com quem lê.
              </span>
            </p>

            <p
              className="text-base lg:text-lg leading-[1.9] text-foreground/85 mb-6"
              style={{
                textAlign: "justify",
                fontFamily: "var(--font-playfair), serif",
                textIndent: "2em",
              }}
            >
              Hoje, como escritora de ficção e romance Young Adult, me dedico a
              contar histórias que ressoam com a jornada emocional da vida
              adulta. Minhas narrativas exploram descobertas, transições e
              amizades que se transformam em algo mais — temas que tocam o
              coração de jovens adultos em busca de suas próprias histórias.
            </p>

            {/* Texto expandido (oculto por padrão) */}
            {isExpanded && (
              <div className="space-y-6 animate-fadeIn">
                <p
                  className="text-base lg:text-lg leading-[1.9] text-foreground/85"
                  style={{
                    textAlign: "justify",
                    fontFamily: "var(--font-playfair), serif",
                    textIndent: "2em",
                  }}
                >
                  Cada livro que escrevo é uma parte de mim, uma experiência
                  vivida ou observada, transformada em palavras que espero
                  ressoem com você. Acredito que a literatura tem o poder de
                  nos fazer sentir menos sozinhos, de nos mostrar que nossas
                  emoções são válidas e que nossas histórias importam.
                </p>
                <p
                  className="text-base lg:text-lg leading-[1.9] text-foreground/85"
                  style={{
                    textAlign: "justify",
                    fontFamily: "var(--font-playfair), serif",
                    textIndent: "2em",
                  }}
                >
                  Quando não estou escrevendo, você me encontra mergulhada em
                  novos livros, explorando cafeterias em busca da inspiração
                  perfeita, ou conectando-me com leitores que compartilham da
                  mesma paixão pelas palavras. Porque no final das contas, é
                  sobre isso: criar laços, contar histórias e, acima de tudo,
                  tocar corações.
                </p>
              </div>
            )}

            {/* Botão para expandir/recolher - Minimalista */}
            <div className="pt-8 text-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-4 py-2 font-light transition-all duration-300 hover:opacity-70"
                style={{
                  color: "#C8A8C8",
                  backgroundColor: "transparent",
                }}
              >
                <span className="text-sm lg:text-base">{isExpanded ? "Ler menos" : "Ler história completa"}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                >
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
