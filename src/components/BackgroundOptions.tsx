/**
 * Opções de Fundo para o Site
 * Componentes que podem ser combinados para criar profundidade
 */

// Opção 1: Textura de Papel (Grain/Noise)
// O que você deve ver: Um "grain" ou "ruído" sutil por toda a tela, como se o fundo fosse papel com textura
// Deve parecer: Papel envelhecido, papel artesanal, ou papel com porosidade visível
export function PaperTexture() {
  return (
    <>
      {/* Camada 1: Noise SVG - Textura granular */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.90] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />
      {/* Camada 2: Padrão de pontos para simular porosidade do papel */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.40] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 0, 0, 0.15) 1px, transparent 1px)`,
          backgroundSize: "8px 8px",
        }}
      />
      {/* Camada 3: Linhas muito sutis para textura adicional */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.20] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(0, 0, 0, 0.05) 3px,
            rgba(0, 0, 0, 0.05) 4px
          )`,
        }}
      />
    </>
  );
}

// Opção 2: Linhas Sutis (Como linhas de caderno)
export function SubtleLines() {
  return (
    <div className="fixed inset-0 -z-10 opacity-100 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 30px,
            rgba(176, 196, 222, 1) 30px,
            rgba(176, 196, 222, 1) 40px
          )`,
          backgroundSize: "100% 40px",
        }}
      />
    </div>
  );
}

// Opção 3: Gradiente Suave Vertical
export function SubtleGradient() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: `linear-gradient(
          180deg,
          rgba(249, 247, 242, 1) 0%,
          rgba(249, 247, 242, 0.98) 30%,
          rgba(248, 245, 240, 0.95) 50%,
          rgba(249, 247, 242, 0.98) 70%,
          rgba(249, 247, 242, 1) 100%
        )`,
      }}
    />
  );
}

// Opção 4: Padrão de Pontos (Halftone sutil)
export function HalftonePattern() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-[0.02] pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(26, 26, 26, 0.1) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }}
    />
  );
}

// Opção 5: Manchas de Café/Tinta (Muito sutis)
export function CoffeeStains() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Mancha 1 - Canto superior esquerdo */}
      <div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full opacity-[0.03] blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139, 90, 43, 0.3) 0%, transparent 70%)",
        }}
      />
      {/* Mancha 2 - Canto inferior direito */}
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-[0.025] blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(139, 90, 43, 0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

// Opção 6: Ornamentos Tipográficos (Flores, estrelas, etc)
export function TypographicOrnaments() {
  return (
    <div className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none overflow-hidden">
      {/* Ornamento 1 - Canto superior direito */}
      <div className="absolute top-10 right-10 w-32 h-32">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 10 L60 40 L90 40 L70 60 L80 90 L50 70 L20 90 L30 60 L10 40 L40 40 Z"
            fill="currentColor"
            className="text-foreground"
          />
        </svg>
      </div>
      {/* Ornamento 2 - Canto inferior esquerdo */}
      <div className="absolute bottom-10 left-10 w-24 h-24">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="20" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

// Opção 7: Gradiente Radial do Centro
export function RadialGradient() {
  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: `radial-gradient(
          ellipse at center,
          rgba(249, 247, 242, 1) 0%,
          rgba(248, 245, 240, 0.95) 50%,
          rgba(249, 247, 242, 1) 100%
        )`,
      }}
    />
  );
}

// Opção 8: Padrão de Grid Muito Sutil
export function SubtleGrid() {
  return (
    <div
      className="fixed inset-0 -z-10 opacity-[0.015] pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(26, 26, 26, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(26, 26, 26, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
      }}
    />
  );
}
