/**
 * Constantes do projeto
 * Paleta de cores, valores de design, etc.
 */

// Paleta de Cores "Milky Palette"
export const colors = {
  background: "#F9F7F2", // Off-white / Branco Gelo
  foreground: "#1A1A1A", // Grafite Profundo
  accent: {
    purple: "#D8BFD8", // Thistle/Lavanda
    blue: "#B0C4DE", // Light Steel Blue
    rose: "#F0D6DD", // Rosé Leve
  },
} as const;

// Arredondamentos (Radius)
export const radius = {
  small: "24px", // 2xl
  medium: "32px", // 2.5xl
  large: "40px", // 3xl
} as const;

// Espaçamentos
export const spacing = {
  section: "6rem", // Entre seções
  element: "2rem", // Entre elementos
  paragraph: "1.5rem", // Entre parágrafos
} as const;

// Largura máxima de leitura (65ch)
export const maxWidth = {
  reading: "65ch", // ~600px
  container: "1200px",
} as const;
