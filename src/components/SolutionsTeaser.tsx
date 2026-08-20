import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

// Imports des images
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg';
import installationToit from '../assets/photos/installation-toit.jpg';
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg';
import mascotte from '../assets/brand/mascotte-2.png';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
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

const SOLUTIONS = [
  {
    icon: '01',
    title: 'Autonomie',
    tagline: 'Allumez la clim',
    description: 'Panneaux et batteries dimensionnés sur vos usages réels.',
    image: installationToit,
  },
  {
    icon: '02',
    title: 'Sécurité',
    tagline: 'Saison cyclonique',
    description: 'Matériel ultra-résistant et système anti-coupure intégré.',
    image: techniciensSecurite,
  },
  {
    icon: '03',
    title: 'Rentabilité',
    tagline: "Aides de l'état",
    description: 'Revente garantie sur 20 ans et optimisation fiscale.',
    image: entretienPanneaux,
  },
];

function SolutionsTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === SOLUTIONS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? SOLUTIONS.length - 1 : prev - 1));
  };

  return (
    <section className="relative bg-oe-navy h-screen min-h-[700px] flex flex-col justify-between overflow-hidden font-sans ">
      
      {/* 1. SÉPARATEUR SVG BLANC EN HAUT À GAUCHE (FORME L'ARC) */}
      <div className="absolute top-0 left-0 w-full h-64 md:h-80 pointer-events-none z-0">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full"
        >
          <path d="M0,100 C35,100 45,35 50,0 L0,0 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* TEXTE EN ARRIÈRE-PLAN */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <span className="text-[14vw] font-extrabold text-white/[0.02] tracking-tighter select-none whitespace-nowrap">
          SOLUTIONS
        </span>
      </div>

      {/* 2. CONTENU PRINCIPAL */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col h-full justify-between py-8">
        
        {/* EN-TÊTE : Titres placés À L'INTÉRIEUR de l'arc blanc */}
        <motion.div 
          custom={0.2} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInVariants}
          className="max-w-xl pt-2 md:pt-4"
        >
          <p className="text-sm tracking-wider text-oe-blue font-bold uppercase mb-2 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-oe-yellow"></span>
            Notre écosystème
          </p>
          {/* Texte adapté au fond blanc (oe-navy au lieu de white) */}
          <h2 className="text-3xl md:text-4xl text-oe-navy font-extrabold leading-[1.2]">
            Explorez nos <span className="text-oe-blue">solutions intelligentes</span>
          </h2>
        </motion.div>

        {/* CARROUSEL DE CARTES */}
        <div className="flex-1 flex items-center justify-center gap-6 lg:gap-10 w-full my-auto">
          {SOLUTIONS.map((solution, index) => {
            const isActive = activeIndex === index;
            const isOffset = index % 2 !== 0; 
            const isBottom = index % 2 === 0;

            return (
              <motion.div
                custom={0.3 + (index * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                key={solution.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  relative w-full max-w-[320px] md:w-80 h-[42vh] min-h-[280px] max-h-[400px] cursor-pointer 
                  transition-all duration-500 ease-out flex-shrink-0 group
                  ${isOffset ? 'lg:translate-y-6' : ''}
                  ${isActive ? 'scale-[1.05] z-30' : 'opacity-70 hover:opacity-100 z-10 scale-100'}
                `}
              >
                {/* LA MASCOTTE ALTERNÉE */}
                <div 
                  className={`
                    absolute left-1/2 -translate-x-1/2 -z-10 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]
                    ${isActive 
                      ? (isBottom ? 'bottom-[-65px] opacity-100' : 'top-[-65px] opacity-100') 
                      : (isBottom ? 'bottom-10 opacity-0 pointer-events-none' : 'top-10 opacity-0 pointer-events-none')}
                  `}
                >
                  <img 
                    src={mascotte} 
                    alt="Mascotte One Énergie" 
                    className={`
                      w-20 md:w-24 
                      ${isBottom 
                        ? 'rotate-180 drop-shadow-[0_-15px_15px_rgba(0,136,255,0.4)]' 
                        : 'rotate-0 drop-shadow-[0_15px_15px_rgba(0,136,255,0.4)]'}
                    `}
                  />
                </div>

                {/* CONTENEUR DE LA CARTE */}
                <div className={`
                  w-full h-full rounded-[2rem] overflow-hidden relative bg-oe-navy
                  transition-all duration-500
                  ${isActive ? 'ring-2 ring-oe-blue shadow-[0_0_30px_rgba(0,136,255,0.25)]' : 'border border-white/10'}
                `}>
                  
                  {/* Image de fond */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out
                        ${isActive ? 'scale-110 grayscale-0' : 'scale-100 grayscale-[40%]'}
                      `}
                    />
                    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-gradient-to-t from-oe-navy via-oe-navy/60 to-transparent' : 'bg-oe-navy/40 mix-blend-overlay'}`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-oe-navy via-oe-navy/50 to-transparent opacity-95"></div>
                  </div>

                  {/* Contenu textuel */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between pointer-events-none">
                    
                    {/* Numéro filigrane */}
                    <div className="flex justify-end w-full">
                      <span className={`font-mono text-5xl md:text-6xl font-black italic transition-all duration-500 
                        ${isActive ? 'text-white/30 translate-x-1 scale-110' : 'text-white/10 scale-100'}`}>
                        {solution.icon}
                      </span>
                    </div>
                    
                    {/* Textes et Description */}
                    <div className="flex flex-col justify-end">
                      <p className={`text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 transition-colors duration-300 
                        ${isActive ? 'text-oe-yellow' : 'text-oe-blue'}`}>
                        {solution.tagline}
                      </p>
                      
                      <h3 className="text-white text-2xl md:text-3xl font-bold tracking-wide mb-1 leading-tight">
                        {solution.title}
                      </h3>
                      
                      <div className={`overflow-hidden transition-all duration-500 ease-in-out 
                        ${isActive ? 'max-h-24 opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}>
                        <p className="text-white/90 text-sm font-light leading-relaxed border-l-2 border-oe-yellow pl-3">
                          {solution.description}
                        </p>
                      </div>
                    </div>

                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Spacer bas pour éviter le chevauchement avec le bloc navigation fixe à droite */}
        <div className="h-12"></div>
      </div>

      {/* 3. CONTRÔLES DE DÉFILEMENT ET BOUTON (EN BAS À DROITE) */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 flex items-center gap-4">
        <Link
          to="/nos-solutions"
          className="hidden sm:inline-block px-6 py-2.5 bg-oe-yellow text-oe-navy font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,222,0,0.2)]"
        >
          Tout voir
        </Link>

        <div className="flex gap-3">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-oe-blue/40 bg-oe-navy/80 backdrop-blur-sm flex items-center justify-center text-oe-blue transition-all hover:bg-oe-blue hover:text-white hover:border-oe-blue shadow-lg"
            aria-label="Solution précédente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-oe-blue/40 bg-oe-navy/80 backdrop-blur-sm flex items-center justify-center text-oe-blue transition-all hover:bg-oe-blue hover:text-white hover:border-oe-blue shadow-lg"
            aria-label="Solution suivante"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}

export default SolutionsTeaser;