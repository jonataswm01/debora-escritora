"use client";

export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "O poder das palavras: como a escrita transforma vidas",
      excerpt: "Descubra como cada palavra que escrevemos pode tocar corações e criar conexões profundas com nossos leitores...",
      date: "15 de Janeiro, 2024",
      image: "/blog-post-1.jpg", // Placeholder - você pode adicionar depois
      slug: "o-poder-das-palavras",
    },
    {
      id: 2,
      title: "Por trás das cenas: o processo criativo de uma escritora",
      excerpt: "Conheça os bastidores da criação de uma história, desde a primeira ideia até a publicação final...",
      date: "8 de Janeiro, 2024",
      image: "/blog-post-2.jpg", // Placeholder
      slug: "processo-criativo",
    },
    {
      id: 3,
      title: "Romance Young Adult: por que essas histórias nos tocam",
      excerpt: "Explorando o universo do romance jovem adulto e por que essas narrativas ressoam tanto com os leitores...",
      date: "2 de Janeiro, 2024",
      image: "/blog-post-3.jpg", // Placeholder
      slug: "romance-young-adult",
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
        id="blog"
        className="relative min-h-screen flex items-center justify-center py-12 lg:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Label "BLOG" */}
            <p className="text-sm font-medium tracking-wider text-center mb-4 text-foreground/50 uppercase">
              BLOG
            </p>

            {/* Título da Seção */}
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-10">
              <span className="text-foreground/90">
                Histórias e Reflexões
              </span>
            </h2>

            {/* Grid de Posts do Blog */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group relative rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(249, 247, 242, 0.9) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                    border: "1px solid rgba(216, 191, 216, 0.2)",
                  }}
                >
                  {/* Imagem do Post */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 via-accent-blue/20 to-accent-rose/20 flex items-center justify-center"
                    >
                      <p className="text-foreground/30 text-sm">Imagem do Post</p>
                    </div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="p-6 lg:p-8">
                    {/* Data */}
                    <p className="text-xs font-medium text-foreground/50 mb-3 uppercase tracking-wide">
                      {post.date}
                    </p>

                    {/* Título do Post */}
                    <h3 className="font-serif text-lg lg:text-xl font-bold mb-3 text-foreground/90 leading-tight group-hover:text-accent-purple transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm lg:text-base leading-relaxed text-foreground/70 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Link para ler mais */}
                    <a
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                      style={{
                        color: "#C8A8C8",
                      }}
                    >
                      <span>Ler mais</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 12l4-4-4-4" />
                      </svg>
                    </a>
                  </div>

                  {/* Efeito de glow no hover */}
                  <div
                    className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, #D8BFD8 0%, #B0C4DE 100%)",
                      boxShadow: "0 0 40px rgba(216, 191, 216, 0.3)",
                    }}
                  />
                </article>
              ))}
            </div>

            {/* Link para o Blog Completo */}
            <div className="text-center mt-12 lg:mt-16">
              <a
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[24px] font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative border-2"
                style={{
                  borderColor: "#D8BFD8",
                  color: "#C8A8C8",
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(216, 191, 216, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span>Ver todos os posts</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 12l4-4-4-4" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
