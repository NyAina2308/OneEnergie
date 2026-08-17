  import React from 'react';
  import { Link } from 'react-router-dom';
  import Header from './Header';
  import heroPhoto from '../assets/photos/solar1.jpg';
  import mascotte from '../assets/brand/mascotte-1.png';
  import { motion, type Variants } from 'framer-motion';

  export const ProgressiveText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    const words = text.split(' ');

    const containerVariants: Variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
    };

    const letterVariants: Variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { type: 'spring', damping: 12, stiffness: 100 }
      },
    };

    return (
      <motion.span
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: 'inline-block' }}
      >
        {words.map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span 
                  key={`${wordIndex}-${letterIndex}`} 
                  variants={letterVariants}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </motion.span>
    );
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const STATS = [
    { value: '85', label: "d'économies", icon: '%' },
    { value: '81', label: 'Financés (EDF)', icon: '%' },
    { value: '20', label: 'Ans garantis', icon: '+' },
  ];

  function Hero() {
    return (
      <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col font-sans">
        <Header overlay />

        {/* ARRIÈRE-PLAN IMAGE (Moitié droite de l'écran - INTACT) */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[55%] z-0 h-full ">
          <img src={heroPhoto} alt="Installation photovoltaïque" className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black/10 "></div>
          {/* --- NOUVEAU : FADE VERS OE-NAVY EN BAS --- */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-b from-transparent to-oe-navy"></div>
          
          {/* VAGUE DE SÉPARATION (SVG) */}
          <svg 
            className="absolute inset-y-0 left-0 h-full w-32 lg:w-48 text-white hidden lg:block" 
            fill="currentColor" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          ><path d="M0,0 L0,100 L49.3,100 C80,75 20,25 50,0 Z" />
            
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:hidden"></div>
        
        </div>

        <div className="flex-1 relative z-10 container mx-auto px-6 lg:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 pt-24 pb-12 h-full">
          
          {/* COLONNE GAUCHE (Texte sur fond clair) */}
          <div className="w-full lg:w-1/2 flex flex-col items-start mt-16 lg:mt-0 relative z-20">
            
            <motion.p 
              custom={0.1} initial="hidden" animate="visible" variants={fadeInVariants}
              className="text-sm tracking-wider text-gray-500 font-bold uppercase mb-4 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-oe-yellow"></span>
              Le solaire, entre nous
            </motion.p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 font-extrabold drop-shadow-sm">
              <ProgressiveText text="Vivez l'énergie," />
              <br />
              <ProgressiveText text="en mieux." className="text-oe-yellow" />
            </h1>

            <motion.div 
              custom={0.4} initial="hidden" animate="visible" variants={fadeInVariants}
              className="mt-6 max-w-lg text-base md:text-lg text-gray-600 leading-relaxed font-normal"
            >
              On transforme votre taxe en liberté financière — avec un expert à votre table, pas un inconnu sur votre toit.
            </motion.div>

            <motion.div 
              custom={0.6} initial="hidden" animate="visible" variants={fadeInVariants}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="px-7 py-3.5 bg-oe-yellow text-gray-900 font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_4px_15px_rgba(255,222,0,0.4)]"
              >
                Demander un devis
              </Link>
              <a
                href="tel:+262262263940"
                className="px-7 py-3.5 bg-white border border-gray-300 text-gray-900 font-bold rounded-lg flex items-center gap-2 transition-all hover:bg-gray-50 hover:border-gray-400 shadow-sm"
              >
                Nous appeler
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-oe-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </motion.div>

            <motion.div 
              custom={0.8} initial="hidden" animate="visible" variants={fadeInVariants}
              className="mt-14 flex flex-wrap gap-10 md:gap-14"
            >
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-0.5 text-gray-900">
                    <span className="text-3xl md:text-4xl font-extrabold">{stat.value}</span>
                    <span className="text-oe-yellow text-2xl font-bold">{stat.icon}</span>
                  </div>
                  <span className="text-gray-500 text-sm font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* COLONNE DROITE */}
          <motion.div 
            custom={0.5} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-1/2 min-h-[450px] relative flex justify-center lg:justify-end items-center mt-12 lg:mt-0 z-20 pointer-events-none"
          >
            {/* Carte 1 : NORD-EST (Haut-Droite) avec Glassmorphism */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute top-4 right-4 lg:top-12 lg:right-12 bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 pointer-events-auto"
            >
              <div className="w-12 h-12 rounded-full bg-white/60 border border-white/60 flex items-center justify-center p-1 shadow-sm ">
                <img src={mascotte} alt="Mascotte" className="w-full h-full object-contain drop-shadow-sm" />
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold drop-shadow-sm">Accompagnement</p>
                <p className="text-oe-yellow text-xs font-black drop-shadow-sm">Sur-mesure & Expert</p>
              </div>
            </motion.div>

            {/* Carte 2 : SUD-OUEST (Bas-Gauche) avec Glassmorphism */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute bottom-4 left-4 lg:bottom-12 lg:left-0 bg-white/40 backdrop-blur-md border border-white/50 p-5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-20 pointer-events-auto"
            >
              <p className="text-gray-900 text-sm font-bold mb-1 drop-shadow-sm">Efficacité garantie</p>
              <div className="flex items-center gap-2">
                <span className="text-oe-yellow text-sm font-black drop-shadow-sm">+85% d'économies</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  export default Hero;