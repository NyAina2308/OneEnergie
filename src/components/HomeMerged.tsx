import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

// --- IMPORTS DES COMPOSANTS ET IMAGES ---
import Header from './Header';
import heroPhoto from '../assets/photos/solar1.jpg';
import solarRoofPhoto from '../assets/photos/solarroof1.jpg'; 
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg';
import installationToit from '../assets/photos/installation-toit.jpg';
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg';
import mascotte1 from '../assets/brand/mascotte-1.png';
import mascotte2 from '../assets/brand/mascotte-2.png';

// --- CONSTANTES ET FONCTIONS UTILITAIRES ---
// (Garde ici ton ProgressiveText, fadeInVariants, STATS, STEPS, SOLUTIONS)
/* 
export const ProgressiveText = ...
const fadeInVariants = ...
const STATS = [...]
const STEPS = [...]
const SOLUTIONS = [...]
*/
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const STEPS = [
  {
    number: '01',
    title: 'Analyse sur-mesure',
    description: 'On regarde comment vous vivez vraiment : clim, cuiseur à riz, facture EDF.',
  },
  {
    number: '02',
    title: 'Installation par nos experts',
    description: 'Panneaux et batteries dimensionnés pour votre foyer par nos équipes.',
  },
  {
    number: '03',
    title: 'Suivi quotidien garanti',
    description: 'Un expert reste joignable après la mise en service au quotidien.',
  },
];

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
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {words.map((word, index) => (
          <span key={index} className="inline-block whitespace-nowrap mr-2">
            {word.split('').map((char, charIndex) => (
              <motion.span key={charIndex} variants={letterVariants} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.span>
    );
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
const STATS = [
    { value: '85', label: "d'économies", icon: '%' },
    { value: '81', label: 'Financés (EDF)', icon: '%' },
    { value: '20', label: 'Ans garantis', icon: '+' },
  ];

export default function HomeMerged() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev === SOLUTIONS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? SOLUTIONS.length - 1 : prev - 1));

  return (
    // CONTENEUR GLOBAL : Fond bleu marine
    <main className="relative w-full bg-oe-navy overflow-hidden font-sans">

      {/* ==============================================================
          COUCHE 1 : L'IMAGE DU HERO
          Isolée ici pour passer sous le SVG blanc
      ============================================================== */}
      <div className="absolute top-0 right-0 w-full lg:w-[55%] h-screen z-0">
        <img src={heroPhoto} alt="Installation photovoltaïque" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 md:h-40 bg-gradient-to-b from-transparent to-oe-navy"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent lg:hidden"></div>
      </div>

      {/* ==============================================================
          COUCHE 2 : LE SÉPARATEUR SVG GÉANT UNIQUE
          Il dessine la zone blanche continue sur toute la hauteur
      ============================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 text-white">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* 
            Explication du tracé (path) corrigé :
            - Y de 0 à 66% : Moitié gauche blanche (Hero et Process)
            - Y de 66% à 86% : La courbe maintient une largeur généreuse (X=55) 
              et descend bien plus bas (Y=86) pour créer une vraie "poche" blanche 
              qui englobe tout ton titre, avant de revenir à gauche.
          */}
          <path d="
            M 0,0 
            L 50,0 
            C 55,15 45,25 50,33 
            C 55,45 45,55 50,66 
            C 55,78 45,86 0,86 
            Z
          " />
        </svg>
      </div>

      {/* ==============================================================
          COUCHE 3 : LE CONTENU (Au premier plan)
      ============================================================== */}
      <div className="relative z-20 flex flex-col w-full">

        {/* --- SECTION 1 : HERO --- */}
        {/* On enlève les bg-white et les SVG locaux, le fond est géré par la couche 2 */}
        <section className="relative min-h-screen w-full flex flex-col">
          <Header overlay />
          <div className="flex-1 container mx-auto px-6 lg:px-12 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-16 pt-24 pb-12 h-full">
            {/* Colonne Gauche */}
            <div className="w-full lg:w-1/2 flex flex-col items-start mt-16 lg:mt-0">
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
            
            {/* Colonne Droite (Cartes Mascotte 1) */}
<motion.div 
  custom={0.5} 
  initial={{ opacity: 0, x: 50 }} 
  animate={{ opacity: 1, x: 0 }} 
  transition={{ duration: 1, ease: "easeOut" }}
  className="w-full lg:w-1/2 lg:min-h-[450px] relative flex justify-center lg:justify-end items-center lg:items-end mt-10 lg:mt-0 z-20 pointer-events-none pb-0 lg:pb-4"
>
  {/* Conteneur flex pour aligner les deux cartes côte à côte tout en bas */}
  <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center lg:justify-end">
    
    {/* Carte 1 : Accompagnement avec Glassmorphism */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 1.2, duration: 0.8 }}
      className="bg-white/40 backdrop-blur-md border border-white/50 p-4 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] flex items-center gap-4 z-20 pointer-events-auto"
    >
      <div className="w-12 h-12 rounded-full bg-white/60 border border-white/60 flex items-center justify-center p-1 shadow-sm">
        <img src={mascotte1} alt="Mascotte" className="w-full h-full object-contain drop-shadow-sm" />
      </div>
      <div>
        <p className="text-gray-900 text-sm font-bold drop-shadow-sm">Accompagnement</p>
        <p className="text-oe-yellow text-xs font-black drop-shadow-sm">Sur-mesure & Expert</p>
      </div>
    </motion.div>

    {/* Carte 2 : Efficacité garantie avec Glassmorphism */}
    <motion.div 
      initial={{ y: 20, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ delay: 1.4, duration: 0.8 }}
      className="bg-white/40 backdrop-blur-md border border-white/50 p-5 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.1)] z-20 pointer-events-auto"
    >
      <p className="text-gray-900 text-sm font-bold mb-1 drop-shadow-sm">Efficacité garantie</p>
      <div className="flex items-center gap-2">
        <span className="text-oe-yellow text-sm font-black drop-shadow-sm">+85% d'économies</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" clipRule="evenodd" />
        </svg>
      </div>
    </motion.div>

  </div>
</motion.div>
          </div>
        </section>


        {/* --- SECTION 2 : PROCESS --- */}
        {/* On enlève le bg-oe-navy local et le fond blanc coupé */}
        <section id="process" className="relative py-20 md:py-28 flex items-center">
          <div className="mx-auto max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
            
            {/* Colonne Gauche (Image Process) */}
            <motion.div className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="w-full h-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2rem] rounded-br-[6rem] overflow-hidden border border-gray-200">
                <img src={solarRoofPhoto} alt="Installation photovoltaïque" className="w-full h-full object-cover object-center" />
                <div className="absolute inset-0 bg-black/5"></div>
              </div>
            </motion.div>

            {/* Colonne Droite (Étapes) */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
              {/* (Insère ici le titre et le map() de tes STEPS...) */}

              <motion.p 
                          custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
                          /* MODIFICATION : text-oe-blue au lieu de text-gray-500 */
                          className="text-sm tracking-wider text-oe-blue font-bold uppercase mb-4 flex items-center gap-3"
                        >
                          <span className="w-2 h-2 rounded-full bg-oe-yellow"></span>
                          Comment ça marche
                        </motion.p>
              
                        <motion.h2 
                          custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
                          /* MODIFICATION : text-white au lieu de text-gray-900 */
                          className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold leading-[1.2] mb-12 drop-shadow-sm"
                        >
                          Trois étapes simples,<br /><span className="text-oe-yellow">un seul expert.</span>
                        </motion.h2>
              
                        {/* Liste des étapes */}
                        <div className="flex flex-col gap-8 mb-12">
                          {STEPS.map((step, index) => (
                            <motion.div 
                              custom={0.5 + (index * 0.15)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
                              key={step.number} 
                              className="flex items-start gap-5 group"
                            >
                              {/* Icône circulaire : adaptée pour le fond sombre (bg-white/5) */}
                              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-oe-yellow group-hover:border-oe-yellow transition-all duration-300 shadow-sm group-hover:shadow-[0_4px_15px_rgba(255,222,0,0.4)]">
                                <span className="text-lg font-bold text-white/40 group-hover:text-oe-navy transition-colors">
                                  {step.number}
                                </span>
                              </div>
                              
                              <div className="flex flex-col pt-1">
                                {/* Titre : text-white */}
                                <h3 className="text-base md:text-lg font-bold text-white mb-1">
                                  {step.title}
                                </h3>
                                {/* Description : text-white/70 pour rester lisible sans être éblouissant */}
                                <p className="text-sm text-white/70 leading-relaxed max-w-md font-medium">
                                  {step.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
              
                        {/* Bouton d'action */}
                        <motion.div 
                          custom={0.9} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
                        >
                          <Link
                            to="/contact"
                            /* MODIFICATION : text-oe-navy (ou le garder très foncé) pour le contraste sur le bouton jaune */
                            className="inline-block px-8 py-3.5 bg-oe-yellow text-oe-navy font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_4px_15px_rgba(255,222,0,0.4)]"
                          >
                            Démarrer mon projet
                          </Link>
                        </motion.div>
            </div>

          </div>
        </section>


        {/* --- SECTION 3 : SOLUTIONS TEASER --- */}
        <section className="relative min-h-[700px] h-screen flex flex-col justify-between py-8">
          {/* Texte géant en arrière plan propre à la section */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <span className="text-[14vw] font-extrabold text-white/[0.02] tracking-tighter select-none whitespace-nowrap">
              SOLUTIONS
            </span>
          </div>

          <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col h-full justify-between">
            {/* En-tête Solutions */}
            <motion.div className="max-w-xl pt-12 md:pt-20 relative z-20">
               <motion.div
                 custom={0.2}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true }}
                 variants={fadeInVariants}
                 // Fond blanc de secours sur mobile : la forme SVG décorative ne couvre pas
                 // toujours ce texte foncé à cet endroit selon la hauteur réelle de l'écran.
                 className="bg-white/90 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-2xl -m-4 p-4 lg:m-0 lg:p-0 shadow-lg lg:shadow-none"
               >
                 <p className="text-sm tracking-wider text-oe-blue font-bold uppercase mb-2 flex items-center gap-3">
                   <span className="w-2 h-2 rounded-full bg-oe-yellow"></span>
                   Notre écosystème
                 </p>
                 <h2 className="text-3xl md:text-4xl text-oe-navy font-extrabold leading-[1.2]">
                   Explorez nos <span className="text-oe-blue">solutions intelligentes</span>
                 </h2>
               </motion.div>
            </motion.div>

            {/* Carrousel de cartes Solutions */}
            {/* Mobile/tablette : défilement horizontal au doigt (les cartes ne rentrent pas côte à côte sous lg).
                Desktop (lg+) : rangée centrée classique, comportement inchangé. */}
            <div className="flex-1 flex items-center lg:justify-center gap-6 lg:gap-10 w-full my-auto overflow-x-auto lg:overflow-visible snap-x snap-mandatory scroll-px-6 px-6 -mx-6 lg:mx-0 lg:px-0">
               {/* (Insère ici le map() de tes cartes SOLUTIONS avec Mascotte 2...) */}

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
                onClick={() => setActiveIndex(index)}
                className={`
                  relative w-full max-w-[320px] md:w-80 h-[42vh] min-h-[280px] max-h-[400px] cursor-pointer
                  transition-all duration-500 ease-out flex-shrink-0 snap-center group
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
                    src={mascotte2} 
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
            
            <div className="h-12"></div>
          </div>

          {/* Contrôles du carrousel */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-20 flex items-center gap-4">
             {/* (Insère ici tes boutons prevSlide et nextSlide...) */}

             <Link
                       to="/nos-solutions"
                       className="inline-block px-4 py-2 text-xs sm:px-6 sm:py-2.5 sm:text-sm bg-oe-yellow text-oe-navy font-bold rounded-lg transition-transform hover:scale-105 shadow-[0_0_15px_rgba(255,222,0,0.2)]"
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

      </div>
    </main>
  );
}