import Image from "next/image";

export default function BooksSection() {
  const books = [
    {
      id: 1,
      title: "Mais Que Uma Amizade",
      author: "Débora Rayane",
      image: "/mais-que-uma-amizade-1.jpeg",
      tags: ["Amizade", "Cumplicidade", "Romance"],
      synopsis: "Uma simples amizade pode virar algo maior. Um romance leve e envolvente sobre amizade, cumplicidade e amor, onde os sentimentos crescem aos poucos — do jeito mais real possível.",
      coverColor: "#6B4C7A", // Roxo profundo extraído da capa (gradiente roxo-índigo)
      slug: "mais-que-uma-amizade",
    },
    {
      id: 2,
      title: "Além do Casamento",
      author: "Débora Rayane",
      subtitle: "Continuação de Mais Que Uma Amizade",
      image: "/alem-do-casamento-2.jpeg",
      tags: ["Fidelidade", "Vida real", "Amadurecimento"],
      synopsis: "A continuação aprofunda os sentimentos e traz um romance mais maduro, com camadas reais: fidelidade, desconfiança, perdas e amadurecimento, além do amor que precisa resistir à vida como ela é.",
      coverColor: "#FF8C42", // Laranja-dourado do pôr do sol da capa
      slug: "alem-do-casamento",
    },
  ];

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
        id="livros"
        className="relative min-h-screen flex items-center justify-center py-20 lg:py-32"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Label "LIVROS" */}
            <p className="text-sm font-medium tracking-wider text-center mb-4 text-foreground/50 uppercase">
              LIVROS
            </p>

            {/* Título da Seção */}
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-center mb-12 lg:mb-16">
              <span className="text-foreground/90">
                Histórias que tocam o coração
              </span>
            </h2>

            {/* Grid de 2 Livros */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="group relative rounded-[24px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 pt-4"
                  style={{
                    background: `${book.coverColor}15`, // Cor da capa com 15% de opacidade
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
                    border: "1px solid rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {/* Imagem da Capa */}
                  <div className="relative w-full px-4" style={{ height: "360px" }}>
                    <div 
                      className="relative w-full h-full book-cover-image rounded-[40px] overflow-hidden"
                    >
                      <Image
                        src={book.image}
                        alt={`Capa do livro ${book.title}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-4 lg:p-6">
                    {/* Título do Livro */}
                    <h3 className="font-serif text-lg lg:text-xl font-bold mb-3 text-foreground/90">
                      {book.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {book.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: "rgba(240, 214, 221, 0.4)",
                            color: "#1A1A1A",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Sinopse */}
                    <p className="text-xs lg:text-sm leading-relaxed text-foreground/70 mb-4 line-clamp-4">
                      {book.synopsis}
                    </p>

                    {/* CTA - Botão para Landing Page */}
                    <a
                      href={`/livros/${book.slug}`}
                      className="inline-block w-full text-center px-4 py-2.5 rounded-[20px] text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                        color: "#FFFFFF",
                      }}
                    >
                      Ver mais
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
