import { Link } from 'react-router-dom';
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

function ContactCta() {
  return (
    <section className="relative overflow-hidden bg-oe-navy py-20 md:py-32 font-sans border-t border-white/10">
      
      {/* Halot lumineux en arrière-plan */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-oe-blue/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Côté Gauche : Mascotte intégrale (style visuel transparent/SVG) */}
          <motion.div 
            custom={0.2} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInVariants}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <img
              src={mascotte}
              alt="Mascotte One Énergie"
              className="w-auto h-auto max-h-[350px] sm:max-h-[420px] md:max-h-[480px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Côté Droit : Textes & CTA */}
          <motion.div 
            custom={0.4} 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }} 
            variants={fadeInVariants}
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
          >
            <p className="text-xl md:text-2xl font-bold text-oe-yellow uppercase tracking-widest mb-2">
              Une question ?
            </p>
            
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide text-white leading-tight mb-6">
              On s'assoit <br />
              <span className="font-light">à votre table ?</span>
            </h2>
            
            <p className="max-w-lg font-sans text-base lg:text-lg font-light leading-relaxed text-white/80 mb-10">
              Racontez-nous vos habitudes — clim, cuiseur à riz, piscine — et
              repartez avec une estimation claire, sans jargon ni engagement.
            </p>

            <Link
              to="/contact"
              className="group flex items-center gap-5 bg-transparent transition-all"
            >
              {/* Bouton Circulaire */}
              <div className="w-16 h-16 rounded-full bg-oe-yellow flex items-center justify-center shadow-[0_0_20px_rgba(255,222,0,0.3)] group-hover:scale-110 group-hover:bg-white transition-all duration-300 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7 text-oe-navy transition-colors">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
              
              {/* Texte du CTA */}
              <span className="font-sans text-sm md:text-base font-extrabold uppercase tracking-widest text-white group-hover:text-oe-yellow transition-colors text-left leading-snug">
                Je demande conseil <br className="hidden sm:block md:hidden lg:block"/> à un expert
              </span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactCta;