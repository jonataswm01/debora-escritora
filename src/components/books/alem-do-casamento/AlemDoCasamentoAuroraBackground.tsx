export default function AlemDoCasamentoAuroraBackground() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -20 }}>
        {/* Traço Decorativo - Superior Direito (personalizado para "Além do Casamento") */}
        {/* Linha Zig-zag em vez de ondulada */}
        <svg
          className="absolute top-16 right-4 sm:right-12 lg:right-20 w-72 sm:w-96 lg:w-[600px]"
          viewBox="0 0 600 50"
          fill="none"
          style={{ 
            color: "rgba(255, 140, 66, 0.18)",
            opacity: 0.7,
          }}
        >
          <path
            d="M0,25 L50,5 L100,25 L150,5 L200,25 L250,5 L300,25 L350,5 L400,25 L450,5 L500,25 L550,5 L600,25"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
