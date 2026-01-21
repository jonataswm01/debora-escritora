/**
 * Componente de Marcatexto com Pinceladas Irregulares
 * Cria efeito de grife de marcatexto com bordas orgânicas (como pinceladas)
 */

interface HighlightBrushProps {
  children: React.ReactNode;
  className?: string;
}

export default function HighlightBrush({ children, className = "" }: HighlightBrushProps) {
  // ID único para evitar conflitos com múltiplos gradientes
  const gradientId = `highlightGradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <span className={`relative inline-block ${className}`}>
      {/* Texto */}
      <span className="relative z-10">{children}</span>
      
      {/* Marcatexto com bordas irregulares (pinceladas) - Corta na vertical, rotacionado */}
      <svg
        className="absolute left-0 top-1/2 w-full h-1/2 -z-0 pointer-events-none"
        style={{ 
          opacity: 0.7,
          transform: 'rotate(-2deg)',
          transformOrigin: 'center center'
        }}
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(216, 191, 216, 0.6)" />
            <stop offset="50%" stopColor="rgba(176, 196, 222, 0.6)" />
            <stop offset="100%" stopColor="rgba(240, 214, 221, 0.6)" />
          </linearGradient>
        </defs>
        {/* Forma orgânica com bordas irregulares (simula pincelada com bordas elevadas) */}
        <path
          d="M 0,30 
             Q 3,25 6,28
             Q 9,22 12,25
             Q 15,18 18,21
             Q 21,15 24,18
             Q 27,12 30,15
             Q 33,8 36,11
             Q 39,5 42,8
             Q 45,2 48,5
             Q 51,0 54,3
             Q 57,0 60,2
             Q 63,0 66,2
             Q 69,0 72,3
             Q 75,0 78,4
             Q 81,1 84,5
             Q 87,2 90,6
             Q 93,3 96,7
             Q 98,4 100,8
             L 100,92
             Q 98,95 96,92
             Q 93,96 90,92
             Q 87,96 84,92
             Q 81,96 78,92
             Q 75,96 72,92
             Q 69,96 66,92
             Q 63,96 60,92
             Q 57,97 54,93
             Q 51,97 48,93
             Q 45,97 42,93
             Q 39,97 36,93
             Q 33,97 30,93
             Q 27,97 24,93
             Q 21,97 18,93
             Q 15,97 12,93
             Q 9,97 6,93
             Q 3,97 0,93
             Z"
          fill={`url(#${gradientId})`}
        />
      </svg>
    </span>
  );
}
