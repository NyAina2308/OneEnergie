import { useState } from 'react';
import { Link } from 'react-router-dom';
import mascotte from '../assets/brand/mascotte-2.png';
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

const SOLUTIONS = [
  {
    icon: '01',
    title: 'Autonomie',
    tagline: 'Allumez la clim',
    description: 'Panneaux et batteries dimensionnés sur vos usages réels au quotidien.',
  },
  {
    icon: '02',
    title: 'Sécurité',
    tagline: 'Saison cyclonique',
    description: 'Matériel ultra-résistant et système anti-coupure automatique intégré.',
  },
  {
    icon: '03',
    title: 'Rentabilité',
    tagline: "Aides de l'état",
    description: 'Revente garantie sur 20 ans et optimisation de votre fiscalité.',
  },
];

function SolutionsTeaser() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-oe-navy min-h-screen flex flex-col lg:flex-row relative overflow-hidden font-sans border-t border-white/10">
      
      {/* CÔTÉ GAUCHE : Texte fixe */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 relative z-10 border-r border-white/10">
        <div className="max-w-md">
          <motion.p 
            custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
            className="font-sans text-xs md:text-sm tracking-[0.3em] text-oe-yellow uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-oe-yellow"></span>
            Nos solutions
          </motion.p>
          
          <motion.h2 
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
            className="font-display text-4xl md:text-5xl text-white uppercase leading-[1.1] font-light tracking-wide"
          >
            Un écosystème <br />
            d'autonomie, <br />
            <span className="font-normal text-oe-yellow">pas juste des panneaux</span>
          </motion.h2>
          
          <motion.p 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
            className="mt-8 font-sans text-base text-white/80 leading-relaxed"
          >
            One Énergie combine production, stockage et accompagnement humain pour que votre installation corresponde à ce que vous vivez vraiment.
          </motion.p>
          
          <motion.div 
            custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariants}
            className="mt-16 flex items-center gap-8 border-t border-white/20 pt-8"
          >
            <Link to="/nos-solutions" className="text-xs md:text-sm font-bold tracking-widest text-white uppercase flex items-center gap-3 group hover:text-oe-yellow transition-colors">
              Voir tout
              <span className="w-8 h-px bg-white group-hover:bg-oe-yellow group-hover:w-12 transition-all duration-300"></span>
            </Link>
            <span className="w-px h-4 bg-white/20"></span>
            <Link to="/faq" className="text-xs md:text-sm font-bold tracking-widest text-white/60 uppercase hover:text-white transition-colors">
              FAQ
            </Link>
          </motion.div>
        </div>
      </div>

      {/* CÔTÉ DROIT : Image Background + Cartes */}
      <div className="w-full lg:w-7/12 relative min-h-[60vh] lg:min-h-screen flex items-end justify-center lg:justify-start">
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Intérieur design" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

        <div className="absolute top-[42%] left-0 right-10 h-px bg-white/20 z-10 hidden md:block"></div>

        <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl pb-10 lg:pb-24 px-6 lg:px-0">
          {SOLUTIONS.map((solution, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div 
                custom={0.4 + (index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
                key={solution.title} 
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  cursor-pointer transition-all duration-500 ease-out p-6 lg:p-8 relative overflow-hidden flex flex-col min-h-[320px] border-t
                  ${isActive 
                    ? 'bg-oe-navy border-t-oe-yellow lg:-translate-y-6 shadow-2xl z-30' 
                    : 'bg-oe-navy/75 border-t-white/30 hover:bg-oe-navy/90 z-10'
                  }
                `}
              >
                <img 
                  src={mascotte} 
                  alt="" 
                  aria-hidden="true"
                  style={{
                    filter: isActive 
                      ? 'brightness(0) saturate(100%) invert(85%) sepia(50%) saturate(1000%) hue-rotate(350deg)' 
                      : 'none'
                  }}
                  className={`
                    absolute -right-2 -bottom-2 w-32 md:w-40 pointer-events-none transition-all duration-500 ease-out select-none
                    ${isActive 
                      ? 'opacity-40 scale-100 rotate-0 translate-y-0' 
                      : 'opacity-0 scale-75 rotate-6 translate-y-6'
                    }
                  `}
                />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className={`font-display font-bold text-lg block mb-6 transition-colors duration-300 ${isActive ? 'text-oe-yellow' : 'text-white/50'}`}>
                      {solution.icon}.
                    </span>
                    
                    <h3 className="font-sans text-sm md:text-base font-bold tracking-widest uppercase mb-3 text-white">
                      {solution.title}
                    </h3>
                    
                    <p className={`font-sans text-xs md:text-sm font-semibold uppercase tracking-wider mb-4 transition-colors duration-300 ${isActive ? 'text-oe-yellow' : 'text-white/60'}`}>
                      {solution.tagline}
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm leading-relaxed font-medium text-white/80">
                    {solution.description}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default SolutionsTeaser;