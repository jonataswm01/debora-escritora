import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // View Transitions API nativa (zero peso, máxima performance)
  experimental: {
    viewTransition: true,
  },
  
  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Adicionar domínios externos conforme necessário (ex: capas de livros)
    ],
  },
};

export default nextConfig;
