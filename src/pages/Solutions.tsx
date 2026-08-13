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
    eyebrow: '• Autonomie quotidienne',
    title: 'Gérez votre confort, faites baisser la facture',
    description: "On dimensionne votre installation sur vos usages réels, pas sur une moyenne : clim, cuisine, eau chaude, tout compte.",
  },
  'Sécurité': {
    eyebrow: '• Sécurité & continuité',
    title: 'Un système anti-coupure, prêt pour le cyclone',
    description: "Dormez tranquille : votre installation est pensée pour encaisser les aléas de l'île, pas seulement les beaux jours.",
  }
}

function Solutions() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const currentCategory = SOLUTIONS_COMBINED[activeIndex]?.category || 'Autonomie';
  const activeInfo = CATEGORY_INFO[currentCategory as keyof typeof CATEGORY_INFO];

  // Logique de calcul du scroll vertical converti en défilement horizontal discret
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const totalScrollableHeight = rect.height - window.innerHeight
      
      if (totalScrollableHeight <= 0) return

      const currentScroll = -rect.top
      const progress = Math.max(0, Math.min(1, currentScroll / totalScrollableHeight))

      const stepIndex = Math.min(
        SOLUTIONS_COMBINED.length - 1,
        Math.floor(progress * SOLUTIONS_COMBINED.length)
      )
      
      setActiveIndex(stepIndex)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initialisation au montage
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              // Ajout de rounded-3xl pour s'aligner sur les courbes de la maquette
              className="flex flex-col items-center gap-8 border border-white/10 bg-white/5 rounded-3xl p-8 text-center shadow-2xl sm:p-10 md:flex-row md:text-left"
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

        {/* --- BLOC PRINCIPAL : SCROLL VERTICAL -> DÉFILEMENT HORIZONTAL --- */}
        <section ref={containerRef} id="autonomie-securite" className="relative h-[350vh] border-t border-white/10 bg-oe-navy">
          
          <div className="sticky top-0 h-screen w-full flex flex-col overflow-hidden bg-oe-navy z-10">

            {/* HAUT : Bloc fixe (Titres et descriptions de la catégorie) */}
            <div className="w-full h-[45vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-8 z-20 border-b border-white/10 bg-oe-navy">
              <div className="max-w-4xl relative min-h-[180px] md:min-h-[160px] w-full mx-auto">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentCategory} 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute bottom-0 left-0 w-full"
                  >
                    <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow flex items-center gap-2">
                      {activeInfo.eyebrow}
                    </span>
                    {/* Retrait du uppercase, ajout de font-bold pour coller au style des titres de l'image */}
                    <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                      {activeInfo.title}
                    </h2>
                    <p className="mt-4 font-sans font-light leading-relaxed text-white/70 max-w-2xl text-sm md:text-base">
                      {activeInfo.description}
                    </p>

                    {/* Sous-navigation dynamique */}
                    <div className="mt-8 hidden md:flex flex-row gap-6 w-full items-center">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50">
                        {currentCategory}
                      </span>
                      <div className="flex gap-4">
                        {SOLUTIONS_COMBINED.map((item, idx) => {
                          if (item.category !== currentCategory) return null;
                          const isActive = activeIndex === idx;
                          return (
                            <div
                              key={idx}
                              className={`flex items-center gap-2 transition-all duration-300 ease-out ${
                                isActive ? 'opacity-100 translate-x-1' : 'opacity-40'
                              }`}
                            >
                              <div className={`w-1 h-3 rounded-full transition-colors duration-300 ${
                                isActive ? 'bg-oe-yellow' : 'bg-transparent border border-white/50'
                              }`}></div>
                              <span className={`font-sans font-bold text-[10px] tracking-wider uppercase transition-colors duration-300 ${
                                isActive ? 'text-oe-yellow' : 'text-white'
                              }`}>
                                {item.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* BAS : Défilement Horizontal des cartes */}
            <div className="w-full h-[55vh] relative flex items-center justify-center overflow-hidden bg-oe-navy">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" /> {/* Lueur bleutée rappelant les accents de la maquette */}

              <div className="relative w-full max-w-md h-full flex items-center justify-center z-10">
                {SOLUTIONS_COMBINED.map((item, index) => {
                  const offset = index - activeIndex
                  const isActive = offset === 0

                  const translateX = `calc(${offset} * clamp(340px, 85vw, 480px))`
                  const opacity = Math.abs(offset) > 1.5 ? 0 : isActive ? 1 : 0.3
                  const scale = isActive ? 1 : 0.85

                  return (
                    <div
                      key={index}
                      className="absolute w-[85vw] max-w-[360px] md:max-w-md transition-all duration-500 ease-out transform"
                      style={{
                        transform: `translate3d(${translateX}, 0, 0) scale(${scale})`,
                        opacity: opacity,
                        zIndex: isActive ? 20 : 10 - Math.abs(offset),
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      {/* Remplacement des angles droits par rounded-[2rem] pour reproduire les cartes du design */}
                      <div className={`group w-full flex flex-col items-start border rounded-[2rem] p-8 md:p-10 transition-all duration-500 ${
                        isActive ? 'border-oe-yellow/30 bg-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] backdrop-blur-md' : 'border-white/5 bg-white/5'
                      }`}>
                        <div className="flex items-center justify-between w-full mb-6">
                          <img
                            src={item.icon}
                            alt=""
                            className={`h-16 w-16 object-contain transition-all duration-500 ${isActive ? 'scale-110 opacity-100 drop-shadow-[0_0_15px_rgba(255,215,0,0.3)]' : 'opacity-50 grayscale'}`}
                          />
                        </div>
                        {/* Typographie de carte: Font-bold, sans l'uppercase systématique */}
                        <h3 className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-500 ${isActive ? 'text-white' : 'text-white/70'}`}>
                          {item.title}
                        </h3>
                        <p className={`mt-3 font-sans text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/50'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

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
                • En image
              </span>
              {/* Ajustement du titre ici aussi (retrait du uppercase, ajout font-bold) */}
              <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl">
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
                  // Ajout de rounded-3xl sur les images de la grille pour matcher le style "Bento" adouci de la maquette
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 min-h-[250px] md:min-h-0 ${photo.className}`}
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