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
    <section className="border-t border-white/10 bg-oe-navy py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          
          {/* Côté Gauche : Titre et Description */}
          <motion.div 
            custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="font-display text-2xl uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              On s'assoit <br className="hidden lg:block" />
              à votre table ?
            </h2>
            <p className="mt-4 max-w-md font-sans text-sm font-light leading-relaxed text-white/80">
              Racontez-nous vos habitudes — clim, cuiseur à riz, piscine — et
              repartez avec une estimation claire, sans jargon ni engagement.
            </p>
          </motion.div>

          {/* Centre : Mascotte */}
          <motion.div 
            custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="flex shrink-0 justify-center"
          >
            <img
              src={mascotte}
              alt="Mascotte One Énergie"
              className="w-36 sm:w-44 md:w-52 drop-shadow-2xl"
            />
          </motion.div>

          {/* Côté Droit : Bouton CTA sans arrondi */}
          <motion.div 
            custom={0.6} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
            className="flex flex-1 justify-center md:justify-end"
          >
            <Link
              to="/contact"
              className="inline-block border border-oe-yellow bg-oe-yellow px-8 py-4 font-sans text-xs font-bold uppercase tracking-widest text-oe-navy shadow-xl transition-all duration-300 hover:bg-transparent hover:text-oe-yellow"
            >
              Je demande conseil à un expert
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactCta;