import { useState } from 'react'
import { motion, type Variants, useScroll, useMotionValueEvent } from 'framer-motion'
import { useRef } from 'react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactFoot from '../components/ContactFoot'
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

const AUTONOMIE_ITEMS = SOLUTIONS_COMBINED.filter(item => item.category === 'Autonomie')
const SECURITE_ITEMS = SOLUTIONS_COMBINED.filter(item => item.category === 'Sécurité')

const PROJECTS_DATA = [
  { 
    src: panneauxToiture, 
    alt: 'Panneaux solaires posés sur une toiture, ciel dégagé', 
    caption: 'Haute performance' 
  },
  { 
    src: installationToit, 
    alt: 'Installation de panneaux photovoltaïques sur une toiture', 
    caption: 'Installation soignée' 
  },
  { 
    src: techniciensSecurite, 
    alt: 'Techniciens équipés pour une installation en sécurité', 
    caption: 'Équipes formées' 
  },
  { 
    src: entretienPanneaux, 
    alt: 'Technicien effectuant l’entretien de panneaux solaires', 
    caption: 'Suivi dans la durée' 
  },
]

function Solutions() {
  const autonomieRef = useRef<HTMLElement>(null)
  const securiteRef = useRef<HTMLElement>(null)

  const [activeAutoIndex, setActiveAutoIndex] = useState(0)
  const [activeSecIndex, setActiveSecIndex] = useState(0)
  
  // Nouvel état pour gérer le projet actif au survol
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState(0)

  // Tracking du scroll pour le bloc Autonomie
  const { scrollYProgress: autoProgress } = useScroll({
    target: autonomieRef,
    offset: ["start start", "end end"]
  })
  useMotionValueEvent(autoProgress, "change", (latest) => {
    const maxIndex = AUTONOMIE_ITEMS.length - 1;
    setActiveAutoIndex(Math.min(maxIndex, Math.round(latest * maxIndex)));
  })

  // Tracking du scroll pour le bloc Sécurité
  const { scrollYProgress: secProgress } = useScroll({
    target: securiteRef,
    offset: ["start start", "end end"]
  })
  useMotionValueEvent(secProgress, "change", (latest) => {
    const maxIndex = SECURITE_ITEMS.length - 1;
    setActiveSecIndex(Math.min(maxIndex, Math.round(latest * maxIndex)));
  })

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="Nos solutions solaire"
          title="L'offre vulgarisée par les bénéfices"
          description="Pas de kilowatts-crête ni de talon de consommation. Juste ce que le solaire change vraiment dans votre quotidien."
          backgroundImage={solarguyBg} 
          quoteImage={mascotte}
          quoteHighlight="« Tu veux faire cuire ton riz tranquillement pour 5 centimes ?"
          quoteText="Laisse le soleil s'en occuper ! »"
          quoteAuthor="— Pédagogie « café-cuisine »"
        />


        {/* --- BLOC STICKY 1 : AUTONOMIE --- */}
        <section ref={autonomieRef} className="relative h-[250vh] border-t border-white/10 bg-oe-navy">
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col overflow-hidden bg-oe-navy z-10">
            <div className="w-full h-[45vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-8 z-20 border-b border-white/10 bg-oe-navy">
              <div className="max-w-4xl w-full mx-auto">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow flex items-center gap-2">
                  {CATEGORY_INFO['Autonomie'].eyebrow}
                </span>
                <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {CATEGORY_INFO['Autonomie'].title}
                </h2>
                <p className="mt-4 font-sans font-light leading-relaxed text-white/70 max-w-2xl text-sm md:text-base">
                  {CATEGORY_INFO['Autonomie'].description}
                </p>

                <div className="mt-8 hidden md:flex flex-row gap-6 w-full items-center">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Autonomie
                  </span>
                  <div className="flex gap-4">
                    {AUTONOMIE_ITEMS.map((item, idx) => {
                      const isActive = activeAutoIndex === idx;
                      return (
                        <div key={idx} className={`flex items-center gap-2 transition-all duration-300 ease-out ${isActive ? 'opacity-100 translate-x-1' : 'opacity-40'}`}>
                          <div className={`w-1 h-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-oe-yellow' : 'bg-transparent border border-white/50'}`}></div>
                          <span className={`font-sans font-bold text-[10px] tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-oe-yellow' : 'text-white'}`}>
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[55vh] relative flex items-center justify-center overflow-hidden bg-oe-navy">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative w-full max-w-md h-full flex items-center justify-center z-10">
                {AUTONOMIE_ITEMS.map((item, index) => {
                  const offset = index - activeAutoIndex;
                  const isActive = offset === 0;

                  const translateX = `calc(${offset} * clamp(340px, 85vw, 480px))`;
                  const opacity = Math.abs(offset) > 1.5 ? 0 : isActive ? 1 : 0.4;
                  const scale = isActive ? 1 : 0.85;

                  return (
                    <div
                      key={`auto-card-${index}`}
                      className="absolute w-[85vw] max-w-[360px] md:max-w-md transition-all duration-500 ease-out transform"
                      style={{
                        transform: `translate3d(${translateX}, 0, 0) scale(${scale})`,
                        opacity: opacity,
                        zIndex: isActive ? 20 : 10 - Math.abs(offset),
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <div className={`group w-full flex flex-col items-start rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 transition-all duration-500 ${
                        isActive 
                          ? 'bg-white text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-transparent' 
                          : 'bg-white/5 border border-white/10 backdrop-blur-md text-white'
                      }`}>
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 ${
                          isActive 
                            ? 'bg-gray-50 border border-gray-100 shadow-inner scale-110' 
                            : 'bg-white/5 border border-white/10 grayscale opacity-60'
                        }`}>
                          <img
                            src={item.icon}
                            alt=""
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                        <h3 className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-500 ${
                          isActive ? 'text-gray-900' : 'text-white'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`mt-3 font-sans text-sm md:text-base leading-relaxed font-medium transition-colors duration-500 ${
                          isActive ? 'text-gray-600' : 'text-white/60'
                        }`}>
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

        {/* --- BLOC STICKY 2 : SÉCURITÉ --- */}
        <section ref={securiteRef} className="relative h-[250vh] border-t border-white/10 bg-oe-navy">
          <div className="sticky top-0 h-[100dvh] w-full flex flex-col overflow-hidden bg-oe-navy z-10">
            <div className="w-full h-[45vh] flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-8 z-20 border-b border-white/10 bg-oe-navy">
              <div className="max-w-4xl w-full mx-auto">
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow flex items-center gap-2">
                  {CATEGORY_INFO['Sécurité'].eyebrow}
                </span>
                <h2 className="font-display mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {CATEGORY_INFO['Sécurité'].title}
                </h2>
                <p className="mt-4 font-sans font-light leading-relaxed text-white/70 max-w-2xl text-sm md:text-base">
                  {CATEGORY_INFO['Sécurité'].description}
                </p>

                <div className="mt-8 hidden md:flex flex-row gap-6 w-full items-center">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50">
                    Sécurité
                  </span>
                  <div className="flex gap-4">
                    {SECURITE_ITEMS.map((item, idx) => {
                      const isActive = activeSecIndex === idx;
                      return (
                        <div key={idx} className={`flex items-center gap-2 transition-all duration-300 ease-out ${isActive ? 'opacity-100 translate-x-1' : 'opacity-40'}`}>
                          <div className={`w-1 h-3 rounded-full transition-colors duration-300 ${isActive ? 'bg-oe-yellow' : 'bg-transparent border border-white/50'}`}></div>
                          <span className={`font-sans font-bold text-[10px] tracking-wider uppercase transition-colors duration-300 ${isActive ? 'text-oe-yellow' : 'text-white'}`}>
                            {item.title}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[55vh] relative flex items-center justify-center overflow-hidden bg-oe-navy">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#0066FF]/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative w-full max-w-md h-full flex items-center justify-center z-10">
                {SECURITE_ITEMS.map((item, index) => {
                  const offset = index - activeSecIndex;
                  const isActive = offset === 0;

                  const translateX = `calc(${-offset} * clamp(340px, 85vw, 480px))`;
                  const opacity = Math.abs(offset) > 1.5 ? 0 : isActive ? 1 : 0.4;
                  const scale = isActive ? 1 : 0.85;

                  return (
                    <div
                      key={`sec-card-${index}`}
                      className="absolute w-[85vw] max-w-[360px] md:max-w-md transition-all duration-500 ease-out transform"
                      style={{
                        transform: `translate3d(${translateX}, 0, 0) scale(${scale})`,
                        opacity: opacity,
                        zIndex: isActive ? 20 : 10 - Math.abs(offset),
                        pointerEvents: isActive ? 'auto' : 'none',
                      }}
                    >
                      <div className={`group w-full flex flex-col items-start rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-10 transition-all duration-500 ${
                        isActive 
                          ? 'bg-white text-gray-900 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-transparent' 
                          : 'bg-white/5 border border-white/10 backdrop-blur-md text-white'
                      }`}>
                        <div className={`flex items-center justify-center w-16 h-16 rounded-full transition-all duration-500 ${
                          isActive 
                            ? 'bg-gray-50 border border-gray-100 shadow-inner scale-110' 
                            : 'bg-white/5 border border-white/10 grayscale opacity-60'
                        }`}>
                          <img
                            src={item.icon}
                            alt=""
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                        <h3 className={`font-display text-xl md:text-2xl font-bold tracking-wide transition-colors duration-500 ${
                          isActive ? 'text-gray-900' : 'text-white'
                        }`}>
                          {item.title}
                        </h3>
                        <p className={`mt-3 font-sans text-sm md:text-base leading-relaxed font-medium transition-colors duration-500 ${
                          isActive ? 'text-gray-600' : 'text-white/60'
                        }`}>
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

        {/* --- NOUVELLE SECTION : DECOUPES VERTICALES HOVER --- */}
{/* Conteneur d'espacement (padding haut et bas) */}
<div className="py-20 md:py-32 bg-oe-navy">
  <section className="relative h-[60vh] min-h-[500px] md:h-[80vh] md:min-h-[700px] w-full overflow-hidden border-y border-white/10 bg-oe-navy">
    
    {/* Images de fond (Fade in/out selon hoveredProjectIndex) */}
    {PROJECTS_DATA.map((project, idx) => (
      <div
        key={`bg-project-${idx}`}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          hoveredProjectIndex === idx ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <img
          src={project.src}
          alt={project.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Overlay pour l'effet "moody" et la lisibilité du texte */}
        <div className="absolute inset-0 bg-oe-navy/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/90 via-transparent to-oe-navy/40" />
      </div>
    ))}

    {/* Grand texte d'arrière-plan statique */}
    <div className="absolute top-12 left-6 md:top-20 md:left-12 z-10 pointer-events-none">
      <h2 className="font-display text-6xl md:text-[9rem] font-bold text-white/20 tracking-tighter uppercase leading-none">
        Nos Projets
      </h2>
    </div>

    {/* Lignes verticales interactives */}
    <div className="absolute inset-0 z-20 flex">
      {PROJECTS_DATA.map((project, idx) => {
        const isActive = hoveredProjectIndex === idx;
        return (
          <div
            key={`col-project-${idx}`}
            onMouseEnter={() => setHoveredProjectIndex(idx)}
            className="group relative flex-1 cursor-pointer border-r border-white/30 last:border-r-0 transition-colors duration-500 hover:bg-white/5"
          >
            {/* Contenu de la colonne (titre en bas) */}
            <div className="absolute bottom-8 left-4 md:bottom-16 md:left-8 pr-4">
              {/* Petite ligne de décoration */}
              <div className={`h-[3px] mb-4 transition-all duration-500 ${
                isActive ? 'bg-oe-yellow w-16' : 'bg-white/30 w-8'
              }`} />
              
              {/* Titre du projet */}
              <h3 className={`font-sans text-xs sm:text-sm md:text-xl font-bold uppercase tracking-widest transition-all duration-500 ${
                isActive 
                  ? 'text-white translate-y-0 opacity-100' 
                  : 'text-white/60 translate-y-2 opacity-60 group-hover:text-white/90'
              }`}>
                {project.caption}
              </h3>
            </div>
          </div>
        )
      })}
    </div>
  </section>
</div>

        <ContactFoot />
      </main>
    </div>
  )
}

export default Solutions