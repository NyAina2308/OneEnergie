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
    <section className="relative min-h-screen w-full bg-oe-navy overflow-hidden flex flex-col font-sans">
      <Header overlay />

      {/* Halo de lumière bleu électrique & jaune en arrière-plan */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-oe-blue/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/3 w-[350px] h-[350px] bg-oe-yellow/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="flex-1 relative z-10 container mx-auto px-6 lg:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 pt-24 pb-12">
        
        {/* COLONNE GAUCHE */}
        <div className="w-full lg:w-1/2 flex flex-col items-start mt-8 lg:mt-0">
          
          <motion.p 
            custom={0.1} initial="hidden" animate="visible" variants={fadeInVariants}
            className="text-sm tracking-wider text-oe-blue font-bold uppercase mb-4 flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-oe-yellow"></span>
            Le solaire, entre nous
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white font-extrabold drop-shadow-md">
            <ProgressiveText text="Vivez l'énergie," />
            <br />
            <ProgressiveText text="en mieux." className="text-oe-yellow" />
          </h1>

          <motion.div 
            custom={0.4} initial="hidden" animate="visible" variants={fadeInVariants}
            className="mt-6 max-w-lg text-base md:text-lg text-white/70 leading-relaxed font-normal"
          >
            On transforme votre taxe en liberté financière — avec un expert à votre table, pas un inconnu sur votre toit.
          </motion.div>

          {/* Boutons d'action */}
          <motion.div 
            custom={0.6} initial="hidden" animate="visible" variants={fadeInVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="px-7 py-3.5 bg-oe-yellow text-oe-navy font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,222,0,0.25)]"
            >
              Demander un devis
            </Link>
            <a
              href="tel:+330123456789"
              className="px-7 py-3.5 bg-oe-blue/10 border border-oe-blue/40 text-white font-bold rounded-lg flex items-center gap-2 transition-all hover:bg-oe-blue hover:border-oe-blue shadow-[0_0_15px_rgba(0,136,255,0.2)]"
            >
              Nous appeler
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-oe-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </motion.div>

          {/* Statistiques */}
          <motion.div 
            custom={0.8} initial="hidden" animate="visible" variants={fadeInVariants}
            className="mt-14 flex flex-wrap gap-10 md:gap-14"
          >
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex items-baseline gap-0.5 text-white">
                  <span className="text-3xl md:text-4xl font-extrabold">{stat.value}</span>
                  <span className="text-oe-blue text-2xl font-bold">{stat.icon}</span>
                </div>
                <span className="text-white/70 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* COLONNE DROITE */}
        <motion.div 
          custom={0.5} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-[2rem] rounded-br-[5rem] overflow-hidden shadow-2xl border border-oe-blue/20">
            <img src={heroPhoto} alt="Installation photovoltaïque" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-oe-navy/20 mix-blend-multiply"></div>
          </div>

          {/* Cartes Flottantes */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute top-6 right-0 lg:-right-6 bg-oe-navy/80 backdrop-blur-md border border-oe-blue/30 p-4 rounded-xl shadow-[0_0_20px_rgba(0,136,255,0.15)] flex items-center gap-4 z-20"
          >
            <div className="w-12 h-12 rounded-full bg-oe-blue/20 border border-oe-blue/40 flex items-center justify-center p-1">
              <img src={mascotte} alt="Mascotte" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            <div>
              <p className="text-white text-sm font-bold">Accompagnement</p>
              <p className="text-oe-yellow text-xs font-semibold">Sur-mesure & Expert</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
            className="absolute bottom-12 -left-4 lg:-left-12 bg-oe-navy/80 backdrop-blur-md border border-oe-blue/30 p-5 rounded-xl shadow-[0_0_20px_rgba(0,136,255,0.15)] z-20"
          >
            <p className="text-white text-sm font-bold mb-1">Efficacité garantie</p>
            <div className="flex items-center gap-2">
              <span className="text-oe-yellow text-sm font-bold">+85% d'économies</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-oe-blue" viewBox="0 0 20 20" fill="currentColor">
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