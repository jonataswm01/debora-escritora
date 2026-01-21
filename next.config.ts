import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  
  // Otimização de imagens
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Adicionar domínios externos conforme necessário (ex: capas de livros)
    ],
  },
};

export default nextConfig;
