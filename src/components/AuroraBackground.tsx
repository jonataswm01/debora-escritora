/**
 * Componente Aurora Background
 * Cria o efeito de blobs/gradientes orgânicos desfocados no fundo
 */

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -15 }}>
      {/* Blob Roxo - Muito mais visível e intenso */}
      <div
        className="absolute -top-1/3 -right-1/4 w-[1200px] h-[1200px] rounded-full opacity-60 blur-[80px]"
        style={{
          background: "radial-gradient(circle, rgba(216, 191, 216, 0.8) 0%, rgba(216, 191, 216, 0.5) 30%, rgba(216, 191, 216, 0.2) 60%, transparent 85%)",
        }}
      />
      
      {/* Blob Azul - Muito mais visível e intenso */}
      <div
        className="absolute top-1/3 -left-1/3 w-[1100px] h-[1100px] rounded-full opacity-60 blur-[75px]"
        style={{
          background: "radial-gradient(circle, rgba(176, 196, 222, 0.8) 0%, rgba(176, 196, 222, 0.5) 30%, rgba(176, 196, 222, 0.2) 60%, transparent 85%)",
        }}
      />
      
      {/* Blob Rosé - Muito mais visível e intenso */}
      <div
        className="absolute -bottom-1/4 right-1/4 w-[1150px] h-[1150px] rounded-full opacity-60 blur-[85px]"
        style={{
          background: "radial-gradient(circle, rgba(240, 214, 221, 0.8) 0%, rgba(240, 214, 221, 0.5) 30%, rgba(240, 214, 221, 0.2) 60%, transparent 85%)",
        }}
      />
      
      {/* Blob adicional - Roxo/Azul misturado */}
      <div
        className="absolute top-1/2 right-1/2 w-[1000px] h-[1000px] rounded-full opacity-50 blur-[90px]"
        style={{
          background: "radial-gradient(circle, rgba(216, 191, 216, 0.6) 0%, rgba(176, 196, 222, 0.6) 50%, transparent 85%)",
        }}
      />
      
      {/* Blob adicional - Rosé no centro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-45 blur-[100px]"
        style={{
          background: "radial-gradient(circle, rgba(240, 214, 221, 0.7) 0%, rgba(240, 214, 221, 0.4) 40%, transparent 80%)",
        }}
      />
    </div>
  );
}
