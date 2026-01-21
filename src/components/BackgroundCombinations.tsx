/**
 * Combinações Prontas de Fundo
 * Use estas combinações ou crie suas próprias
 */

import AuroraBackground from "./AuroraBackground";
import {
  PaperTexture,
  SubtleLines,
  SubtleGradient,
  HalftonePattern,
  CoffeeStains,
  TypographicOrnaments,
  RadialGradient,
  SubtleGrid,
} from "./BackgroundOptions";

// Combinação 1: Aurora + Textura de Papel (Recomendada - Mais Premium)
export function PremiumBackground() {
  return (
    <>
      <AuroraBackground />
      <PaperTexture />
      <SubtleGradient />
    </>
  );
}

// Combinação 2: Aurora + Linhas Sutis (Editorial)
export function EditorialBackground() {
  return (
    <>
      <AuroraBackground />
      <SubtleLines />
      <RadialGradient />
    </>
  );
}

// Combinação 3: Aurora + Manchas de Café (Autêntico)
export function AuthenticBackground() {
  return (
    <>
      <AuroraBackground />
      <CoffeeStains />
      <PaperTexture />
    </>
  );
}

// Combinação 4: Aurora + Ornamentos (Literário)
export function LiteraryBackground() {
  return (
    <>
      <AuroraBackground />
      <TypographicOrnaments />
      <PaperTexture />
      <SubtleGradient />
    </>
  );
}

// Combinação 5: Aurora + Halftone (Moderno)
export function ModernBackground() {
  return (
    <>
      <AuroraBackground />
      <HalftonePattern />
      <RadialGradient />
    </>
  );
}

// Combinação 6: Aurora + Grid (Minimalista)
export function MinimalistBackground() {
  return (
    <>
      <AuroraBackground />
      <SubtleGrid />
      <SubtleGradient />
    </>
  );
}
