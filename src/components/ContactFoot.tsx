import React from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

// --- IMPORTS DES IMAGES ---
import mascotte from '../assets/brand/mascotte-1.png';
import logo from '../assets/brand/logo-light-blanc.png';

const YEAR = new Date().getFullYear();

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

export default function ContactFoot() {
  return (
    // CONTENEUR GLOBAL : Fond bleu marine
    <main className="relative w-full bg-oe-navy overflow-hidden font-sans ">
      
      {/* ==============================================================
          COUCHE 1 : HALO LUMINEUX
      ============================================================== */}
      <div className="absolute top-[20%] left-1/4 w-[500px] h-[500px] bg-oe-blue/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none z-0"></div>

      {/* ==============================================================
          COUCHE 2 : LE SÉPARATEUR SVG GÉANT ONDULÉ INVERSÉ
          Le z-index reste à 0 pour ne pas gêner la navbar au scroll.
      ============================================================== */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 text-white">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          fill="currentColor"
        >
          {/* 
            Explication du tracé (symétrique à HomeMerged) :
            - M 100,0 : Démarre en haut à droite.
            - L 50,0 : Va jusqu'au milieu en haut.
            - C 45,15 55,25 50,33 : Première ondulation.
            - C 45,45 55,55 50,66 : Deuxième ondulation.
            - C 45,80 55,90 50,100 : Troisième ondulation qui plonge EXACTEMENT 
              au milieu en bas (50,100) pour bien couper le footer en deux.
            - L 100,100 : Ferme la forme en bas à droite.
            - Z : Remonte au point de départ.
          */}
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
     
          {/* 
            Explication du tracé (entrée côté droit haut, fin milieu bas) :
            - M 100,15 : On commence sur la bordure droite (X=100), un peu plus bas que le haut (Y=15).
            - C 75,35 60,65 50,100 : Courbe qui plonge vers la gauche pour atterrir au milieu parfait en bas (50,100).
            - L 100,100 : On tire une ligne jusqu'au coin inférieur droit.
            - Z : On referme la forme jusqu'au point de départ (100,15).
          */}
          

      {/* ==============================================================
          COUCHE 3 : LE CONTENU (Au premier plan)
      ============================================================== */}
      <div className="relative z-10 flex flex-col w-full">

        {/* --- SECTION 1 : CONTACT CTA --- */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Côté Gauche (Sur fond Bleu Marine) : Mascotte */}
            <motion.div 
              custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
              className="w-full md:w-1/2 flex justify-center items-center"
            >
              <img
                src={mascotte}
                alt="Mascotte One Énergie"
                className="w-auto h-auto max-h-[350px] sm:max-h-[420px] md:max-h-[480px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-transform duration-500 hover:scale-105"
              />
            </motion.div>

            {/* Côté Droit (Sur fond Blanc) : Textes & CTA */}
            <motion.div 
              custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
              className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left bg-white/95 md:bg-transparent p-8 md:p-0 rounded-3xl md:shadow-none shadow-xl"
            >
              <p className="text-xl md:text-2xl font-bold text-oe-blue uppercase tracking-widest mb-2">
                Une question ?
              </p>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase tracking-wide text-oe-navy leading-tight mb-6">
                On s'assoit <br />
                <span className="font-light">à votre table ?</span>
              </h2>
              
              <p className="max-w-lg font-sans text-base lg:text-lg font-normal leading-relaxed text-gray-600 mb-10">
                Racontez-nous vos habitudes — clim, cuiseur à riz, piscine — et
                repartez avec une estimation claire, sans jargon ni engagement.
              </p>

              <Link
                to="/contact"
                className="group flex items-center gap-5 bg-transparent transition-all"
              >
                {/* Bouton Circulaire */}
                <div className="w-16 h-16 rounded-full bg-oe-yellow flex items-center justify-center shadow-[0_0_20px_rgba(255,222,0,0.4)] group-hover:scale-110 group-hover:bg-oe-navy transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-7 h-7 text-oe-navy group-hover:text-white transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                
                {/* Texte du CTA */}
                <span className="font-sans text-sm md:text-base font-extrabold uppercase tracking-widest text-oe-navy group-hover:text-oe-blue transition-colors text-left leading-snug">
                  Je demande conseil <br className="hidden sm:block md:hidden lg:block"/> à un expert
                </span>
              </Link>
            </motion.div>
          </div>
        </section>


        {/* --- SECTION 2 : FOOTER --- */}
        <footer className="relative pt-10 pb-6">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 md:px-8">
            
            {/* Haut du Footer */}
            <div className="flex flex-col md:flex-row items-start justify-between gap-12">
              
              {/* Logo & Description (Gauche, fond Bleu Marine) */}
              <div className="w-full md:w-5/12 lg:w-1/3 bg-oe-navy/95 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-xl md:shadow-none">
                <img src={logo} alt="One Énergie" className="h-10 w-auto" />
                <p className="mt-4 max-w-xs font-sans text-sm text-white/80 leading-relaxed">
                  Le solaire, entre nous. Panneaux photovoltaïques et batteries de
                  stockage, dimensionnés pour votre usage réel à La Réunion.
                </p>
              </div>

              {/* Navigation & Liens (Droite, fond Blanc) */}
              <div className="w-full md:w-7/12 lg:w-2/3 flex flex-wrap justify-between md:justify-end gap-10 lg:gap-20 bg-white/95 md:bg-transparent p-8 md:p-0 rounded-3xl md:rounded-none shadow-xl md:shadow-none">
                
                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase">
                    Navigation
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-gray-600">
                    <li><Link to="/" className="hover:text-oe-blue font-medium transition-colors">Accueil</Link></li>
                    <li><Link to="/nos-solutions" className="hover:text-oe-blue font-medium transition-colors">Nos solutions</Link></li>
                    <li><Link to="/guide-du-pigeon" className="hover:text-oe-blue font-medium transition-colors">Le Guide du Pigeon</Link></li>
                    <li><Link to="/equipe" className="hover:text-oe-blue font-medium transition-colors">L'équipe</Link></li>
                    <li><Link to="/contact" className="hover:text-oe-blue font-medium transition-colors">Contact &amp; Simulation</Link></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase">
                    Contact
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-gray-600 font-medium">
                    <li>02 62 26 39 40</li>
                    <li>info@oneenergie.re</li>
                    <li>La Réunion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-oe-navy uppercase">
                    Suivez-nous
                  </h4>
                  <ul className="mt-4 flex flex-col gap-3 font-sans text-sm text-gray-600">
                    <li><a href="#" className="hover:text-oe-blue font-medium transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-oe-blue font-medium transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-oe-blue font-medium transition-colors">LinkedIn</a></li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Bas du Footer : Copyright & Crédits */}
            <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-400/30 pt-6 gap-6 relative z-20">
              
              {/* Gauche (Sur le Bleu Marine) */}
              <div className="w-full md:w-1/2 flex flex-col gap-2 font-sans text-xs text-white/70 text-center md:text-left bg-oe-navy/95 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
                <p>© {YEAR} One Énergie. Tous droits réservés.</p>
                <p>Le solaire, entre nous.</p>
              </div>

              {/* Droite (Sur le Blanc) */}
              <div className="w-full md:w-1/2 font-sans text-[11px] leading-relaxed text-gray-500 text-center md:text-right bg-white/95 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none">
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
  );
}