import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import heroPhoto from '../assets/photos/solar1.jpg';
import { motion, type Variants } from 'framer-motion';

// Composant d'animation de texte lettre par lettre
export const ProgressiveText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  // Séparation du texte en mots pour préserver leur intégrité lors du retour à la ligne
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Cadence fluide entre chaque lettre
      },
    },
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
    <span className={className} style={{ position: 'relative', display: 'inline-block' }}>
      
      {/* Texte brut pour les lecteurs d'écran (évite l'épellation lettre par lettre) */}
      <span className="sr-only">
        {text}
      </span>

      {/* Bloc animé protégé contre la traduction automatique */}
      <motion.span
        translate="no"
        className="notranslate"
        aria-hidden="true"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: 'inline-block' }}
      >
        {words.map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            {/* Chaque mot est un bloc indivisible */}
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
            {/* Espace naturel inséré entre les mots pour autoriser le retour à la ligne */}
            {wordIndex < words.length - 1 && ' '}
          </React.Fragment>
        ))}
      </motion.span>
    </span>
  );
};

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

function Hero() {
  const { t } = useTranslation();

  const STATS = [
    { value: '85%', label: t('hero.stat1') },
    { value: '81%', label: t('hero.stat2') },
    { value: t('hero.stat3Value'), label: t('hero.stat3') },
  ];

  return (
    <section className="relative min-h-[90vh] w-full bg-oe-navy overflow-hidden flex">
      {/* Lignes de construction d'arrière-plan globales */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[65%] left-0 right-0 h-px bg-white/10"></div>
      </div>

      <Header />

      {/* Barre latérale gauche (Éléments graphiques architecturaux) */}
      <aside className="hidden lg:flex w-24 h-full flex-col items-center justify-between py-24 border-r border-white/10 relative z-20 bg-oe-navy">
        <motion.div 
          custom={0.8} initial="hidden" animate="visible" variants={fadeInVariants}
          className="flex flex-col items-center gap-5 mt-20"
        >
          <span className="w-1.5 h-1.5 bg-oe-yellow rounded-full"></span>
          <span className="w-px h-16 bg-white/30"></span>
          <span className="w-1.5 h-1.5 bg-transparent border border-white/50 rounded-full"></span>
        </motion.div>
        
        <motion.div 
          custom={1} initial="hidden" animate="visible" variants={fadeInVariants}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-white/60 font-display text-sm">01</span>
          <div className="w-px h-24 bg-white/10 relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-oe-yellow"></div>
          </div>
        </motion.div>
      </aside>

      {/* Zone de contenu principal */}
      <div className="flex-1 relative z-10 flex pt-15 items-center">
        
        {/* Conteneur de l'image */}
        <motion.div 
          custom={0.2} initial="hidden" animate="visible" variants={fadeInVariants}
          className="absolute top-0 right-0 w-full lg:w-[85%] h-full z-0"
        >
          <img
            src={heroPhoto}
            alt="Installation photovoltaïque"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-oe-navy/25 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-oe-navy/85 via-oe-navy/15 to-transparent"></div>
        </motion.div>

        {/* Bloc Texte */}
        <div className="relative z-10 pl-6 pr-6 lg:pl-24 w-full max-w-4xl mt-16 md:mt-10">
          <motion.p 
            custom={0.3} initial="hidden" animate="visible" variants={fadeInVariants}
            className="font-sans text-xs md:text-sm tracking-[0.3em] text-oe-yellow uppercase mb-6 flex items-center gap-4"
          >
            <span className="w-8 h-px bg-oe-yellow hidden sm:block"></span>
            {t('hero.eyebrow')}
          </motion.p>

          {/* Titre Principal avec ProgressiveText */}
          {/* La clé force un remount complet du composant (et de ses hooks useInView/useAnimation)
              quand le texte change, par ex. au changement de langue : sans ça, useInView "once"
              reste bloqué sur son état déclenché une seule fois lors du montage initial et
              l'animation ne se relance jamais pour le nouveau texte (rien ne s'affiche). */}
          <h1 className="font-display text-5xl leading-[1.05] text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide drop-shadow-md">
            <ProgressiveText key={t('hero.title1')} text={t('hero.title1')} />
            <br />
            <ProgressiveText key={t('hero.title2')} text={t('hero.title2')} className="text-oe-yellow font-normal" />
          </h1>

          {/* Sous-titre avec ProgressiveText */}
          <div className="mt-8 max-w-lg font-sans text-base md:text-lg text-white/95 leading-relaxed tracking-wide drop-shadow">
            <ProgressiveText key={t('hero.subtitle1')} text={t('hero.subtitle1')} />
            <ProgressiveText key={t('hero.subtitle2')} text={t('hero.subtitle2')} />
          </div>

          {/* Call to action */}
          <motion.div
            custom={0.6} initial="hidden" animate="visible" variants={fadeInVariants}
            className="mt-12 flex flex-col items-start gap-2"
          >
            <Link
              to="/faq"
              className="font-sans text-xs md:text-sm text-white/70 tracking-widest uppercase transition-colors duration-300 hover:text-oe-yellow"
            >
              {t('hero.question')}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 md:gap-6 font-sans text-sm md:text-base font-bold tracking-widest text-white uppercase group"
            >
              {t('hero.cta')}
              <span className="w-12 h-px bg-white group-hover:bg-oe-yellow group-hover:w-20 transition-all duration-300"></span>
            </Link>
          </motion.div>

          {/* Statistiques */}
          <motion.div 
            custom={0.7} initial="hidden" animate="visible" variants={fadeInVariants}
            className="mt-16 flex flex-wrap gap-10 md:gap-16 text-white/80 font-sans text-sm uppercase tracking-widest border-t border-white/20 inline-flex"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2 pt-6">
                <span className="text-oe-yellow font-display text-3xl">{stat.value}</span>
                <span className="text-xs max-w-[140px] leading-snug">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;