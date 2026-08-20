import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import DahSolarRange from '../components/DahSolarRange'
import RealtimeTracking from '../components/RealtimeTracking'
import iconSoleil from '../assets/icons/icon-soleil-lunettes.svg'
import iconCuiseurRiz from '../assets/icons/icon-cuiseur-riz.svg'
import iconLaveLinge from '../assets/icons/icon-lave-linge.svg'
import iconPanneaux from '../assets/icons/icon-panneaux-empiles.svg'
import iconBadge from '../assets/icons/icon-badge-eclair.svg'
import iconPouce from '../assets/icons/icon-pouce-leve.svg'
import solarguyBg from '../assets/photos/solarsolution.jpg'

interface SolutionItem {
  category: 'autonomie' | 'securite';
  icon: string;
  title: string;
  description: string;
}

function Solutions() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const SOLUTIONS_COMBINED: SolutionItem[] = [
    {
      category: 'autonomie',
      icon: iconSoleil,
      title: t('solutions.card1Title'),
      description: t('solutions.card1Desc'),
    },
    {
      category: 'autonomie',
      icon: iconCuiseurRiz,
      title: t('solutions.card2Title'),
      description: t('solutions.card2Desc'),
    },
    {
      category: 'autonomie',
      icon: iconLaveLinge,
      title: t('solutions.card3Title'),
      description: t('solutions.card3Desc'),
    },
    {
      category: 'securite',
      icon: iconPanneaux,
      title: t('solutions.card4Title'),
      description: t('solutions.card4Desc'),
    },
    {
      category: 'securite',
      icon: iconBadge,
      title: t('solutions.card5Title'),
      description: t('solutions.card5Desc'),
    },
    {
      category: 'securite',
      icon: iconPouce,
      title: t('solutions.card6Title'),
      description: t('solutions.card6Desc'),
    },
  ];

  const CATEGORY_INFO = {
    autonomie: {
      label: t('solutions.categoryAutonomie'),
      eyebrow: t('solutions.autonomieEyebrow'),
      title: t('solutions.autonomieTitle'),
      description: t('solutions.autonomieDesc'),
    },
    securite: {
      label: t('solutions.categorySecurite'),
      eyebrow: t('solutions.securiteEyebrow'),
      title: t('solutions.securiteTitle'),
      description: t('solutions.securiteDesc'),
    },
  };

  const currentCategory = SOLUTIONS_COMBINED[activeIndex]?.category || 'autonomie';
  const activeInfo = CATEGORY_INFO[currentCategory as keyof typeof CATEGORY_INFO];

  useEffect(() => {
    // Calcul direct à partir de la position de scroll plutôt qu'un IntersectionObserver :
    // en scroll rapide, une carte peut traverser toute la bande de détection entre deux
    // vérifications du navigateur et ne jamais déclencher son événement d'entrée — elle
    // est alors "sautée" (ex. le cuiseur à riz de midi, coincé entre deux autres cartes).
    // En recalculant à chaque scroll quelle carte est la plus proche du centre de l'écran,
    // aucune carte ne peut être manquée, quelle que soit la vitesse de défilement.
    let ticking = false;

    const updateActiveIndex = () => {
      ticking = false;
      const center = window.innerHeight / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;

      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - center);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateActiveIndex);
    };

    updateActiveIndex();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={t('solutions.pageEyebrow')}
          title={t('solutions.pageTitle')}
          description={t('solutions.pageDescription')}
          backgroundImage={solarguyBg}
        />

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="border border-white/10 bg-white/5 p-8 text-center shadow-2xl sm:p-10"
            >
              <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                <span className="text-oe-yellow">{t('solutions.quoteHighlight')}</span> {t('solutions.quoteRest')}
              </p>
              <p className="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-white/50">
                {t('solutions.quoteAuthor')}
              </p>
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
                      {activeInfo.label}
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

        {/* Le matériel installé : gamme DAH Solar */}
        <DahSolarRange />

        {/* Suivi de production en temps réel */}
        <RealtimeTracking />

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
                {t('solutions.qualityEyebrow')}
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                {t('solutions.qualityTitle')}
              </h2>
            </motion.div>

            {/* Grille photo retirée en attendant les vrais visuels — bloc laissé vide pour le moment */}

            {/* Vidéo de présentation, intégrée dans le même bloc "Une qualité de service premium" */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto mt-16 max-w-3xl overflow-hidden border border-white/10 bg-black shadow-2xl"
            >
              <video
                src="/one-energie-presentation.mp4"
                controls
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-video w-full"
              >
                {t('common.videoUnsupported')}
              </video>
            </motion.div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default Solutions