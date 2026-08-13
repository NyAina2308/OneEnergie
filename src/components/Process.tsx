import React from 'react';
import { Link } from 'react-router-dom';
import heroPhoto from '../assets/photos/solarroof1.jpg';
import { motion, type Variants } from 'framer-motion';

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

function Process() {
  return (
    <section id="process" className="relative bg-oe-navy py-20 md:py-28 overflow-hidden font-sans flex items-center border-t border-oe-blue/20">
      
      {/* Halo bleu électrique */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-oe-blue/10 rounded-full blur-[140px] pointer-events-none z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        
        {/* COLONNE GAUCHE */}
        <motion.div 
          custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] mt-8 lg:mt-0 order-2 lg:order-1"
        >
          <div className="w-full h-full relative z-10 shadow-2xl rounded-[2rem] rounded-br-[6rem] overflow-hidden border border-oe-blue/20">
            <img 
              src={heroPhoto} 
              alt="Installation photovoltaïque" 
              className="w-full h-full object-cover object-center grayscale-[10%] contrast-110"
            />
            <div className="absolute inset-0 bg-oe-navy/20 mix-blend-multiply"></div>
          </div>
        </motion.div>

        {/* COLONNE DROITE */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
          
          <motion.p 
            custom={0.3} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="text-sm tracking-wider text-oe-blue font-bold uppercase mb-3"
          >
            Comment ça marche
          </motion.p>

          <motion.h2 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
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
                {/* Icône circulaire bleue électrique */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-oe-blue/10 border border-oe-blue/30 flex items-center justify-center group-hover:bg-oe-blue group-hover:border-oe-blue transition-all duration-300 shadow-[0_0_15px_rgba(0,136,255,0.15)]">
                  <span className="text-lg font-bold text-oe-yellow group-hover:text-white transition-colors">
                    {step.number}
                  </span>
                </div>
                
                <div className="flex flex-col pt-1">
                  <h3 className="text-base md:text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed max-w-md font-medium">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            custom={0.9} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInVariants}
          >
            <Link
              to="/contact"
              className="inline-block px-8 py-3.5 bg-oe-blue text-white font-bold rounded-lg transition-all hover:bg-oe-blue/90 hover:scale-105 shadow-[0_0_20px_rgba(0,136,255,0.3)]"
            >
              Démarrer mon projet
            </Link>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

export default Process;