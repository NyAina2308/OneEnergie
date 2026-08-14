import React from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'

// --- IMPORTS DES IMAGES ---
import mascotte from '../assets/brand/mascotte-1.png'
import logo from '../assets/brand/logo-light-blanc.png'

const YEAR = new Date().getFullYear()

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
}

export default function ContactFoot() {
  return (
    // CONTENEUR GLOBAL : Fond bleu marine
    <main className="relative w-full bg-oe-navy overflow-hidden font-sans">
      
      {/* ==============================================================
          COUCHE 1 : HALO LUMINEUX
      ============================================================== */}
      <div className="absolute top-[20%] left-1/4 w-[400px] h-[400px] bg-oe-blue/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none z-0"></div>

      {/* ==============================================================
          COUCHE 2 : LE SÉPARATEUR SVG GÉANT ONDULÉ INVERSÉ
      ============================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 text-white">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="
            M 100,0  
            C 60,5 53,7 50,20 
            C 45,45 55,55 50,66 
            C 45,80 55,90 50,100 
            L 100,100 
            Z
          " />
        </svg>
      </div>

      {/* ==============================================================
          COUCHE 3 : LE CONTENU (Au premier plan)
      ============================================================== */}
      <div className="relative z-10 flex flex-col w-full">

        {/* --- SECTION 1 : CONTACT CTA (COMPACT) --- */}
        <section className="relative pt-10 pb-8 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            
            {/* Côté Gauche (Sur fond Bleu Marine) : Mascotte */}
            <motion.div 
              custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
              className="w-full md:w-5/12 flex justify-center items-center"
            >
              <img
                src={mascotte}
                alt="Mascotte One Énergie"
                className="w-auto h-auto max-h-[220px] sm:max-h-[280px] md:max-h-[320px] object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Côté Droit (Sur fond Blanc) : Textes & CTA */}
            {/* MODIFICATION ICI : md:w-1/2 lg:w-5/12 md:pl-8 lg:pl-12 pour repousser le contenu à droite */}
            <motion.div 
              custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
              className="w-full md:w-1/2 lg:w-5/12 flex flex-col items-center md:items-start text-center md:text-left bg-white/95 md:bg-transparent p-6 md:p-0 rounded-3xl md:shadow-none shadow-xl md:pl-8 lg:pl-12"
            >
              <p className="text-xs md:text-sm font-bold text-oe-blue uppercase tracking-widest mb-1.5">
                Une question ?
              </p>
              
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl uppercase tracking-wide text-oe-navy leading-tight mb-3 font-extrabold">
                On s'assoit <br />
                <span className="font-light">à votre table ?</span>
              </h2>
              
              <p className="max-w-md font-sans text-sm md:text-base font-normal leading-relaxed text-gray-600 mb-6">
                Racontez-nous vos habitudes — clim, cuiseur à riz, piscine — et
                repartez avec une estimation claire, sans jargon ni engagement.
              </p>

              <Link
                to="/contact"
                className="group flex items-center gap-4 bg-transparent transition-all"
              >
                {/* Bouton Circulaire */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-oe-yellow flex items-center justify-center shadow-[0_0_15px_rgba(255,222,0,0.35)] group-hover:scale-110 group-hover:bg-oe-navy transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-oe-navy group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                
                {/* Texte du CTA */}
                <span className="font-sans text-xs md:text-sm font-extrabold uppercase tracking-wider text-oe-navy group-hover:text-oe-blue transition-colors text-left leading-snug">
                  Je demande conseil <br className="hidden sm:block md:hidden lg:block"/> à un expert
                </span>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* --- SECTION 2 : FOOTER COMPACT --- */}
        <footer className="relative pt-6 pb-4">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:px-8">
            
            {/* Haut du Footer */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-10">
              
              {/* Logo & Description (Gauche, fond Bleu Marine) */}
              <div className="w-full md:w-1/3 bg-oe-navy/95 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-xl md:shadow-none">
                <img src={logo} alt="One Énergie" className="h-9 w-auto" />
                <p className="mt-4 max-w-xs font-sans text-sm text-white/90 leading-relaxed font-medium">
                  Le solaire, entre nous. Panneaux photovoltaïques et batteries de
                  stockage, dimensionnés pour votre usage réel à La Réunion.
                </p>
              </div>

              {/* Navigation & Liens (Droite, fond Blanc) */}
              <div className="w-full md:w-2/3 flex flex-wrap justify-between md:justify-end gap-10 lg:gap-16 bg-white/95 md:bg-transparent p-6 md:p-0 rounded-3xl md:rounded-none shadow-xl md:shadow-none">
                
                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase tracking-wide">
                    Navigation
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5 font-sans text-sm text-gray-800 font-medium">
                    <li><Link to="/" className="hover:text-oe-blue transition-colors">Accueil</Link></li>
                    <li><Link to="/nos-solutions" className="hover:text-oe-blue transition-colors">Nos solutions</Link></li>
                    <li><Link to="/guide-du-pigeon" className="hover:text-oe-blue transition-colors">Le Guide du Pigeon</Link></li>
                    <li><Link to="/equipe" className="hover:text-oe-blue transition-colors">L'équipe</Link></li>
                    <li><Link to="/contact" className="hover:text-oe-blue transition-colors">Contact &amp; Simulation</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase tracking-wide">
                    Contact
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5 font-sans text-sm text-gray-800 font-medium">
                    <li>02 62 26 39 40</li>
                    <li>info@oneenergie.re</li>
                    <li>La Réunion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase tracking-wide">
                    Suivez-nous
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2.5 font-sans text-sm text-gray-800 font-medium">
                    <li><a href="#" className="hover:text-oe-blue transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-oe-blue transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-oe-blue transition-colors">LinkedIn</a></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Bas du Footer : Copyright & Crédits */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400/30 pt-5 gap-4 relative z-20">
              
              {/* Gauche (Sur le Bleu Marine) */}
              <div className="w-full md:w-1/2 flex flex-col gap-1 font-sans text-xs text-white/80 text-center md:text-left bg-oe-navy/95 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none">
                <p className="font-medium">© {YEAR} One Énergie. Tous droits réservés.</p>
                <p>Le solaire, entre nous.</p>
              </div>

              {/* Droite (Sur le Blanc) */}
              <div className="w-full md:w-1/2 font-sans text-[11px] leading-relaxed text-gray-600 text-center md:text-right bg-white/95 md:bg-transparent p-3 md:p-0 rounded-xl md:rounded-none">
                Crédits photos :{' '}
                <a className="underline hover:text-oe-navy transition-colors font-medium" href="https://commons.wikimedia.org/wiki/File:Three_men_installing_solar_panels_on_a_house.jpg">W.carter (CC0)</a>,{' '}
                <a className="underline hover:text-oe-navy transition-colors font-medium" href="https://commons.wikimedia.org/wiki/File:Rooftop_solar_panels,_Llanellen,_Monmouthshire_-_geograph.org.uk_-_7600146.jpg">Jaggery (CC BY-SA 2.0)</a>,{' '}
                <a className="underline hover:text-oe-navy transition-colors font-medium" href="https://commons.wikimedia.org/wiki/File:Solar_technicians.jpg">SAgbley (CC BY-SA 4.0)</a>,{' '}
                <a className="underline hover:text-oe-navy transition-colors font-medium" href="https://commons.wikimedia.org/wiki/File:Cleaning_solar_panel.jpg">Deo photographer (CC BY-SA 4.0)</a>.
              </div>
              
            </div>
          </div>
        </footer>

      </div>
    </main>
  )
}