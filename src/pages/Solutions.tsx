import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-1.png'
import iconSoleil from '../assets/icons/icon-soleil-lunettes.svg'
import iconMascotteSolaire from '../assets/icons/icon-mascotte-solaire.svg'
import iconLaveLinge from '../assets/icons/icon-lave-linge.svg'
import iconPanneaux from '../assets/icons/icon-panneaux-empiles.svg'
import iconBadge from '../assets/icons/icon-badge-eclair.svg'
import iconPouce from '../assets/icons/icon-pouce-leve.svg'
import installationToit from '../assets/photos/installation-toit.jpg'
import panneauxToiture from '../assets/photos/panneaux-toiture.jpg'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'
import solarguyBg from '../assets/photos/solarsolution.jpg' 

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

interface SolutionItem {
  category: 'Autonomie' | 'Sécurité';
  icon: string;
  title: string;
  description: string;
}

const SOLUTIONS_COMBINED: SolutionItem[] = [
  {
    category: 'Autonomie',
    icon: iconSoleil,
    title: 'La clim, sans remords',
    description: 'Allumez la clim l’après-midi sans surveiller le compteur : votre production couvre le pic de consommation.',
  },
  {
    category: 'Autonomie',
    icon: iconMascotteSolaire,
    title: 'Le cuiseur à riz de midi',
    description: 'Cuisinez aux heures de plein soleil et laissez vos panneaux financer la note, littéralement.',
  },
  {
    category: 'Autonomie',
    icon: iconLaveLinge,
    title: "L'eau chaude à volonté",
    description: 'Chauffe-eau, machine à laver, frigo : dimensionnés sur vos appareils réels, pas sur une moyenne nationale.',
  },
  {
    category: 'Sécurité',
    icon: iconPanneaux,
    title: 'Résistance anti-cyclonique',
    description: 'Fixations et matériel certifiés pour tenir face aux vents de l’île, saison après saison.',
  },
  {
    category: 'Sécurité',
    icon: iconBadge,
    title: 'Système anti-coupure',
    description: 'Vos batteries prennent le relais lors d’une coupure réseau : le frigo et l’essentiel continuent de tourner.',
  },
  {
    category: 'Sécurité',
    icon: iconPouce,
    title: 'Garanties claires',
    description: 'Durée, couverture, conditions : expliquées noir sur blanc avant la signature, sans petites lignes.',
  },
]

const CATEGORY_INFO = {
  'Autonomie': {
    eyebrow: '2.1 — Autonomie quotidienne',
    title: 'Gérez votre confort, faites baisser la facture',
    description: "On dimensionne votre installation sur vos usages réels, pas sur une moyenne : clim, cuisine, eau chaude, tout compte.",
  },
  'Sécurité': {
    eyebrow: '2.2 — Sécurité & continuité',
    title: 'Un système anti-coupure, prêt pour le cyclone',
    description: "Dormez tranquille : votre installation est pensée pour encaisser les aléas de l'île, pas seulement les beaux jours.",
  }
}


function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const currentCategory = SOLUTIONS_COMBINED[activeIndex]?.category || 'Autonomie';
  const activeInfo = CATEGORY_INFO[currentCategory as keyof typeof CATEGORY_INFO];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.getAttribute('data-index')));
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px' }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="Nos solutions solaire"
          title="L'offre vulgarisée par les bénéfices"
          description="Pas de kilowatts-crête ni de talon de consommation. Juste ce que le solaire change vraiment dans votre quotidien."
          backgroundImage={solarguyBg} 
        />

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center gap-8 border border-white/10 bg-white/5 p-8 text-center shadow-2xl sm:p-10 md:flex-row md:text-left"
            >
              <img
                src={mascotte}
                alt="Mascotte One Énergie"
                className="w-32 shrink-0 drop-shadow-md sm:w-40"
              />
              <div>
                <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                  <span className="text-oe-yellow">« Tu veux faire cuire ton riz tranquillement pour 5 centimes ?</span> Laisse le soleil s'en occuper ! »
                </p>
                <p className="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-white/50">
                  — Pédagogie « café-cuisine »
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BLOC PRINCIPAL AVEC SCROLL SPY --- */}
        <section id="autonomie-securite" className="relative flex flex-col lg:flex-row border-t border-white/10 bg-oe-navy">
          
          {/* CÔTÉ GAUCHE : Bloc fixe avec effet Drawer Global */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0 z-20 border-r border-white/10 bg-oe-navy">
            {/* L'espace réservé (min-h) évite les sauts de layout quand le contenu change */}
            <div className="max-w-md relative min-h-[400px]">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCategory} // Déclenche l'animation au changement de catégorie
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute top-0 left-0 w-full"
                >
                  {/* Titres */}
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                    {activeInfo.eyebrow}
                  </span>
                  <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                    {activeInfo.title}
                  </h2>
                  <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
                    {activeInfo.description}
                  </p>

                  {/* Navigation dynamique (uniquement les liens du groupe courant) */}
                  <div className="mt-12 hidden lg:flex flex-col gap-4 w-full">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                      {currentCategory}
                    </span>
                    
                    {SOLUTIONS_COMBINED.map((item, idx) => {
                      if (item.category !== currentCategory) return null;
                      const isActive = activeIndex === idx;
                      return (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 transition-all duration-300 ease-out ${
                            isActive ? 'opacity-100 translate-x-2' : 'opacity-40'
                          }`}
                        >
                          <div className={`w-1 h-5 transition-colors duration-300 ${
                            isActive ? 'bg-oe-yellow' : 'bg-transparent'
                          }`}></div>
                          <span className={`font-sans font-bold text-xs tracking-wider uppercase transition-colors duration-300 ${
                            isActive ? 'text-oe-yellow' : 'text-white'
                          }`}>
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* CÔTÉ DROIT : Cartes individuelles centrées */}
          <div className="w-full lg:w-7/12 relative px-6 md:px-12 lg:px-16 py-16 lg:py-20 flex flex-col">
            {SOLUTIONS_COMBINED.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  ref={(el) => { sectionRefs.current[index] = el; }}
                  data-index={index}
                  className="flex items-center justify-center min-h-[40vh] w-full"
                >
                  <motion.div
                    animate={{ 
                      opacity: isActive ? 1 : 0.15,
                      scale: isActive ? 1 : 0.9,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`group w-full max-w-xl flex flex-col items-start border p-8 md:p-10 transition-all duration-500 ${
                      isActive ? 'border-oe-yellow/50 bg-white/10 shadow-2xl' : 'border-white/5 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-6">
                      <img
                        src={item.icon}
                        alt=""
                        className={`h-16 w-16 object-contain transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'opacity-50 grayscale'}`}
                      />
                    </div>

                    <h3 className={`font-display text-xl md:text-2xl uppercase tracking-wide transition-colors duration-500 ${isActive ? 'text-oe-yellow' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 font-sans text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/50'}`}>
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Preuve en image : Layout Bento Grid */}
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                En image
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                Des installations bien réelles
              </h2>
            </motion.div>

            <motion.div 
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:auto-rows-[220px]"
            >
              {[
                { 
                  src: panneauxToiture, 
                  alt: 'Panneaux solaires posés sur une toiture, ciel dégagé', 
                  caption: 'Panneaux haute performance', 
                  className: 'md:col-span-2 md:row-span-2'
                },
                { 
                  src: installationToit, 
                  alt: 'Installation de panneaux photovoltaïques sur une toiture', 
                  caption: 'Installation soignée', 
                  className: 'md:col-span-2 md:row-span-1'
                },
                { 
                  src: techniciensSecurite, 
                  alt: 'Techniciens équipés pour une installation en sécurité', 
                  caption: 'Équipes formées', 
                  className: 'md:col-span-1 md:row-span-1'
                },
                { 
                  src: entretienPanneaux, 
                  alt: 'Technicien effectuant l’entretien de panneaux solaires', 
                  caption: 'Suivi dans la durée', 
                  className: 'md:col-span-1 md:row-span-1'
                },
              ].map((photo) => (
                <motion.figure
                  key={photo.src}
                  variants={fadeInUp}
                  className={`group relative overflow-hidden border border-white/10 bg-white/5 min-h-[250px] md:min-h-0 ${photo.className}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-oe-navy/90 via-oe-navy/20 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 font-sans text-sm font-bold uppercase tracking-wide text-white">
                    {photo.caption}
                  </figcaption>
                </motion.figure>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default Solutions