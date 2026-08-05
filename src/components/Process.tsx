import { Link } from 'react-router-dom';
import heroPhoto from '../assets/photos/hero-installation.jpg';
import mascotte from '../assets/brand/mascotte-1.png';
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

const STEPS = [
  {
    number: '01',
    title: 'Analyse',
    description: 'On regarde comment vous vivez vraiment : clim, cuiseur à riz, facture EDF.',
  },
  {
    number: '02',
    title: 'Installation',
    description: 'Panneaux et batteries dimensionnés pour votre foyer par nos équipes.',
  },
  {
    number: '03',
    title: 'Suivi',
    description: 'Un expert reste joignable après la mise en service au quotidien.',
  },
];

function Process() {
  return (
    <section id="process" className="relative bg-oe-navy py-16 md:py-24 overflow-hidden border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-px bg-white/5 rotate-12 origin-left"></div>
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/10"></div>
        <div className="absolute top-[40%] left-[50%] right-0 h-px bg-white/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Colonne Gauche */}
        <motion.div 
          custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="w-full md:w-1/2 relative h-[450px] md:h-[600px] mt-8 md:mt-0"
        >
          <div className="absolute bottom-10 left-[10%] w-[35%] h-[75%] overflow-hidden border border-white/10 shadow-2xl z-10">
            <img 
              src={heroPhoto} 
              alt="Installation photovoltaïque détail" 
              className="w-full h-full object-cover object-left grayscale-[30%] contrast-125"
            />
          </div>

          <div className="absolute top-10 left-[50%] w-[35%] h-[75%] overflow-hidden border border-white/10 shadow-2xl z-0">
            <img 
              src={heroPhoto} 
              alt="Installation photovoltaïque vue d'ensemble" 
              className="w-full h-full object-cover object-center grayscale-[30%] contrast-125"
            />
            <div className="absolute top-0 left-0 w-12 h-1 bg-oe-yellow/80"></div>
          </div>

          <div className="absolute bottom-4 left-0 w-32 h-32 rounded-full border border-white/20 flex items-center justify-center bg-oe-navy/90 backdrop-blur-md z-20 shadow-xl">
            <svg className="absolute inset-0 w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
              <text className="text-[9px] fill-white/60 tracking-[0.15em] uppercase font-sans font-bold">
                <textPath href="#circlePath">One Energie - Design Solaire -</textPath>
              </text>
            </svg>
            <img src={mascotte} alt="Mascotte One Énergie" className="w-14 h-14 object-contain opacity-90" />
          </div>
        </motion.div>

        {/* Colonne Droite */}
        <div className="w-full md:w-1/2 pb-8 md:pb-0">
          <motion.p 
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="font-sans text-xs md:text-sm tracking-[0.2em] text-oe-yellow uppercase mb-4"
          >
            Comment ça marche
          </motion.p>

          <motion.h2 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white uppercase font-light tracking-wide leading-tight"
          >
            Trois étapes, <br />un expert.
          </motion.h2>

          <motion.div 
            custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/50 tracking-widest uppercase"
          >
            <span>Analyse</span>
            <span className="w-px h-3 bg-white/30"></span>
            <span>Sur-mesure</span>
            <span className="w-px h-3 bg-white/30"></span>
            <span>Suivi Local</span>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {STEPS.map((step, index) => (
              <motion.div 
                custom={0.6 + (index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
                key={step.number} className="flex flex-col"
              >
                <div className="h-14 w-14 border border-white/20 flex items-center justify-center mb-5 bg-white/5">
                  <span className="font-display text-2xl text-oe-yellow">{step.number}</span>
                </div>
                <h3 className="font-sans text-sm font-bold tracking-widest text-white uppercase mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            custom={0.9} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
            className="mt-12"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 font-sans text-sm font-bold tracking-widest text-white uppercase group"
            >
              Démarrer mon projet
              <span className="w-12 h-px bg-white group-hover:bg-oe-yellow group-hover:w-16 transition-all duration-300"></span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default Process;