import { useState, useEffect, useCallback } from 'react';
import client1 from '../assets/photos/woman.jpg';
import client2 from '../assets/photos/woman2.jpg';
import installation1 from '../assets/photos/solarrain.jpg';
import installation2 from '../assets/photos/solarpointing.jpg';

import { motion, type Variants } from 'framer-motion';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Enfin un installateur qui m'a expliqué les choses simplement. Ma facture EDF a été divisée par presque 5.",
    author: "Mireille P.",
    location: "Saint-Pierre",
    image: client1,
    installationImage: installation1,
  },
  {
    id: 2,
    quote: "Une équipe réactive et un travail soigné sur le toit. Le suivi de production sur l'application est un vrai plus.",
    author: "Jean-Marc T.",
    location: "Saint-Denis",
    image: client2,
    installationImage: installation2,
  },
];

// Sous-composant gérant l'overlay blanc pour chaque carte
const CardSweepOverlay = ({ isAnimating }: { isAnimating: boolean }) => {
  if (!isAnimating) return null;

  return (
    <div className="absolute inset-0 z-50 overflow-hidden pointer-events-none rounded-[inherit]">
      <motion.div
        className="absolute top-1/2 left-1/2 w-[300%] h-[300%]"
        style={{
          // On garde votre dégradé exact, orienté vers le haut-droit (Nord-Est)
          background: 'linear-gradient(to top right, transparent 20%, rgba(255,255,255,0.4) 30%, rgba(255,255,255,0.9) 42%, #ffffff 45%, #ffffff 55%, rgba(255,255,255,0.9) 58%, rgba(255,255,255,0.4) 70%, transparent 80%)',
        }}
        // Départ : Sud-Ouest (complètement en dehors en bas à gauche)
        initial={{ x: '-150%', y: '50%' }}
        // Arrivée : Nord-Est (complètement en dehors en haut à droite)
        animate={{ x: '50%', y: '-150%' }}
        // easeInOut garantit qu'à 50% du temps (700ms), l'animation est exactement à 50% de sa position
        transition={{ duration: 1.4, ease: 'easeInOut' }}
      />
    </div>
  );
};

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Animation de balayage par vagues blanches
  const handleSlideChange = useCallback((newIndex: number) => {
    // Empêche les clics multiples pendant l'animation
    if (isAnimating) return; 
    
    setIsAnimating(true);

    // À mi-parcours (700ms exacts), le #ffffff 50% de l'overlay couvre toute la carte
    setTimeout(() => {
      setActiveIndex(newIndex);
    }, 700); 

    // Fin de l'animation à 1400ms, on débloque à 1500ms
    // (L'overlay est complètement sorti de l'écran, il ne disparaîtra pas d'un coup)
    setTimeout(() => {
      setIsAnimating(false);
    }, 1500); 
  }, [isAnimating]);

  const handleNext = useCallback(() => {
    handleSlideChange((activeIndex + 1) % TESTIMONIALS.length);
  }, [activeIndex, handleSlideChange]);

  // Défilement automatique toutes les 7 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval);
  }, [handleNext]);

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="bg-oe-navy py-24 relative overflow-hidden font-sans">
      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          
          {/* Côté Gauche : Bloc de Texte et Contrôles */}
          <motion.div 
            custom={0.2} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInVariants}
            // Ajout de overflow-hidden ici pour éviter que l'overlay ne déborde de la carte
            className="flex-1 p-8 md:p-12 bg-gradient-to-br from-oe-navy to-oe-blue-dark rounded-[60px_0_0_60px] shadow-2xl relative overflow-hidden"
          >
            {/* L'overlay est maintenant injecté directement dans la carte */}
            <CardSweepOverlay isAnimating={isAnimating} />

            {/* Éléments décoratifs (zIndex inférieur à l'overlay) */}
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-oe-yellow opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-oe-blue opacity-40"></div>
            
            <div className="relative z-10">
              <p className="text-sm tracking-[0.3em] text-oe-cream uppercase mb-4">
                Témoignages clients
              </p>
              
              <h2 className="text-4xl lg:text-5xl text-oe-cream uppercase tracking-wider font-light leading-snug mb-6">
                <span className="font-extralight">ILS NOUS FONT</span> <span className="text-oe-yellow font-normal italic">CONFIANCE</span>
              </h2>
              
              <span className="font-display text-7xl text-oe-yellow leading-none block mb-4 select-none opacity-80">“</span>
              
              <p className="text-lg lg:text-xl text-oe-cream leading-relaxed font-light mb-8 min-h-[120px]">
                {activeTestimonial.quote}
              </p>
              
              <div className="flex items-center gap-4 mb-10">
                <h4 className="font-bold text-oe-cream text-sm uppercase tracking-widest">
                  {activeTestimonial.author}
                </h4>
                <p className="text-xs text-oe-cream/70 uppercase">
                  {activeTestimonial.location}
                </p>
              </div>

              {/* Boutons de navigation & Puces */}
              <div className="flex items-center gap-6">
                <div className="flex gap-3">
                  <button 
                    onClick={handleNext}
                    className="w-12 h-12 rounded-full border-2 border-oe-blue/30 flex items-center justify-center text-oe-blue transition-all hover:bg-oe-blue hover:text-white hover:border-oe-blue shadow-lg relative z-20"
                    aria-label="Témoignage suivant"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>

                {/* Puces de progression */}
                <div className="flex gap-2 relative z-20">
                  {TESTIMONIALS.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleSlideChange(idx)}
                      aria-label={`Aller au témoignage ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? 'w-8 bg-oe-yellow' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Côté Droit : Paire d'Images (Désaxées et symétriques) */}
          <motion.div 
            custom={0.4} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInVariants}
            className="flex-1 flex flex-col md:flex-row gap-6 relative pb-12"
          >
            {/* Image 1 : Photo client */}
            <div className="flex-1 rounded-[60px_0_60px_0] overflow-hidden bg-oe-cream relative aspect-[2/3] shadow-xl">
              {/* L'overlay pour la première image */}
              <CardSweepOverlay isAnimating={isAnimating} />
              
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.author}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            
            {/* Image 2 : Installation solaire */}
            <div className="flex-1 rounded-[0_60px_0_60px] overflow-hidden bg-oe-cream relative aspect-[2/3] shadow-xl mt-4 md:mt-0 md:translate-y-12">
              {/* L'overlay pour la seconde image */}
              <CardSweepOverlay isAnimating={isAnimating} />
              
              <img 
                src={activeTestimonial.installationImage} 
                alt="Installation solaire"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/30 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;