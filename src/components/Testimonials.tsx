import { useState, useEffect, useCallback } from 'react';
import client1 from '../assets/photos/woman.jpg';
import client2 from '../assets/photos/woman2.jpg';
import installation1 from '../assets/photos/solarrain.jpg';
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
    installationImage: installation1,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Amélioration de l'effet Fade In / Fade Out
  const handleSlideChange = useCallback((newIndex: number) => {
    setFade(false); // Déclenche le fade out
    setTimeout(() => {
      setActiveIndex(newIndex); // Change les données quand l'opacité est à 0
      setFade(true); // Déclenche le fade in
    }, 400); // 400ms pour laisser le temps au fondu de se faire
  }, []);

  const handleNext = useCallback(() => {
    handleSlideChange((activeIndex + 1) % TESTIMONIALS.length);
  }, [activeIndex, handleSlideChange]);

  const handlePrev = useCallback(() => {
    handleSlideChange((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [activeIndex, handleSlideChange]);

  // Défilement automatique toutes les 7 secondes (4s + 3s)
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
            className={`flex-1 p-8 md:p-12 bg-gradient-to-br from-oe-navy to-oe-blue-dark rounded-[60px_0_0_60px] shadow-2xl relative transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Éléments décoratifs */}
            <div className="absolute top-10 left-10 w-4 h-4 rounded-full bg-oe-yellow opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-oe-blue opacity-40"></div>
            
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
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border-2 border-oe-blue/30 flex items-center justify-center text-oe-blue transition-all hover:bg-oe-blue hover:text-white hover:border-oe-blue shadow-lg"
                  aria-label="Témoignage précédent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border-2 border-oe-blue/30 flex items-center justify-center text-oe-blue transition-all hover:bg-oe-blue hover:text-white hover:border-oe-blue shadow-lg"
                  aria-label="Témoignage suivant"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>

              {/* Puces de progression */}
              <div className="flex gap-2">
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
          </motion.div>
          
          {/* Côté Droit : Paire d'Images (Désaxées et symétriques) */}
          <motion.div 
            custom={0.4} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInVariants}
            className={`flex-1 flex flex-col md:flex-row gap-6 relative pb-12 transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Image 1 : Photo client (Alignée en haut, coins opposés) */}
            <div className="flex-1 rounded-[60px_0_60px_0] overflow-hidden bg-oe-cream relative aspect-[2/3] shadow-xl">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.author}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Image 2 : Installation solaire (Désaxée vers le bas, coins opposés inverses) */}
            <div className="flex-1 rounded-[0_60px_0_60px] overflow-hidden bg-oe-cream relative aspect-[2/3] shadow-xl mt-4 md:mt-0 md:translate-y-12">
              <img 
                src={activeTestimonial.installationImage} 
                alt="Installation solaire"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/30 via-transparent to-transparent"></div>
            </div>
          </motion.div>
          
        </div>
        
      </div>
    </section>
  );
}

export default Testimonials;