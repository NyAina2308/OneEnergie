import React, { useEffect, useState, useRef, useCallback } from 'react';

export const GlobalWaveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 2000 });

  // Écoute des changements de dimensions pour recalculer la courbe
  useEffect(() => {
    if (!containerRef.current) return;
    
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Génération dynamique du tracé SVG (Courbe paramétrique)
  const generatePath = useCallback(() => {
    const { width, height } = dimensions;
    
    // Paramètres adaptatifs (à ajuster selon la maquette)
    const curveDepth = width * 0.15; // Profondeur de la vague
    const midX = width * 0.45; // Point central de la séparation
    
    // Points d'inflexion basés sur des pourcentages de la hauteur totale
    const section1Y = height * 0.33; // Fin du Hero
    const section2Y = height * 0.66; // Fin de Process
    
    // Construction de la commande SVG (M: Move to, C: Cubic Bezier, L: Line to)
    return `
      M 0 0
      L ${midX + curveDepth} 0
      C ${midX - curveDepth} ${section1Y * 0.5},
        ${midX - curveDepth * 2} ${section1Y},
        ${midX - curveDepth} ${section2Y}
      C ${midX + curveDepth} ${section2Y + (height - section2Y) * 0.5},
        0 ${height * 0.9},
        0 ${height}
      L 0 0 Z
    `;
  }, [dimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-oe-navy">
      {/* La forme blanche qui couvre la partie gauche/haute */}
      <svg 
        width={dimensions.width} 
        height={dimensions.height} 
        className="absolute top-0 left-0 text-white transition-all duration-300 ease-out"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d={generatePath()} 
          fill="currentColor" 
        />
      </svg>
    </div>
  );
};