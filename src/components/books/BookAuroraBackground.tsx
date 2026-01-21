export default function BookAuroraBackground() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -20 }}>
        {/* Traço Decorativo - Superior Direito (substituindo a bolinha roxa) */}
        <svg
          className="absolute top-16 right-4 sm:right-12 lg:right-20 w-72 sm:w-96 lg:w-[600px]"
          viewBox="0 0 600 40"
          fill="none"
          style={{ 
            color: "rgba(139, 107, 154, 0.15)",
            opacity: 0.7,
          }}
        >
          {/* Linha ondulada irregular e orgânica */}
          <path
            d="M0,20 Q40,8 80,20 Q120,32 160,20 Q200,8 240,20 Q280,32 320,20 Q360,8 400,20 Q440,32 480,20 Q520,8 560,20 Q580,14 600,20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}
