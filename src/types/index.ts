/**
 * Tipos TypeScript do projeto
 */

// Tipos básicos que vamos usar
export type Book = {
  id: string;
  title: string;
  cover: string;
  synopsis: string;
  excerpt?: string;
  buyLinks?: {
    amazon?: string;
    editora?: string;
  };
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  slug: string;
};
