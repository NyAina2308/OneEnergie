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
    
    <section id="process" className="relative bg-oe-navy py-20 md:py-28 overflow-hidden font-sans flex items-center ">
      {/* MODIFICATION : bg-oe-navy au lieu de bg-white pour le fond principal */}
      {/* ARRIÈRE-PLAN SÉPARÉ (Gauche Blanc / Droite Navy) */}
      <div className="absolute inset-0 z-0 flex flex-col lg:flex-row pointer-events-none">
        {/* Desktop : Fond Blanc à gauche avec la vague de transition */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-[45%] bg-white">
          <svg
            className="absolute inset-y-0 left-full h-full w-32 lg:w-48 text-white -ml-[1px]"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Même courbe de vague, mais dessinée en blanc par-dessus le navy */}
            <path d="M0,0 L0,100 L39,100 C80,80 20,25 50,0 Z" />
          </svg>
        </div>

        {/* Mobile : Fond Blanc en bas pour couvrir uniquement l'image, avec un dégradé de transition fluide */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] md:h-[55%] bg-white lg:hidden">
           <div className="absolute inset-x-0 bottom-full h-32 bg-gradient-to-b from-transparent to-white"></div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-24 w-full">
        
        {/* COLONNE GAUCHE (Image sur fond Blanc maintenant) */}
        <motion.div 
          custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="w-full lg:w-1/2 relative h-[450px] md:h-[600px] mt-8 lg:mt-0 order-2 lg:order-1"
        >
          {/* Bordure ajustée en border-gray-200 pour s'intégrer au fond blanc */}
          <div className="w-full h-full relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-[2rem] rounded-br-[6rem] overflow-hidden border border-gray-200">
            <img 
              src={heroPhoto} 
              alt="Installation photovoltaïque" 
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </motion.div>

        {/* COLONNE DROITE (Texte et Étapes sur fond Navy maintenant) */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 flex flex-col justify-center">
          
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
  );
}

export default Process;