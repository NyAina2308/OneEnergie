import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import ContactCta from '../components/ContactCta'
import DahSolarRange from '../components/DahSolarRange'
import RealtimeTracking from '../components/RealtimeTracking'
import iconPanneaux from '../assets/icons/icon-panneaux-empiles.svg'
import iconBadge from '../assets/icons/icon-badge-eclair.svg'
import iconPouce from '../assets/icons/icon-pouce-leve.svg'
import autonomiePhoto from '../assets/photos/koera.png'

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

  // Sécurité reste la seule catégorie pilotée par le scroll-spy : Autonomie est désormais
  // un bloc d'intro statique (photo + message), sans cartes ni navigation défilante.
  const SOLUTIONS_COMBINED: SolutionItem[] = [
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

  const SECURITE_INFO = {
    label: t('solutions.categorySecurite'),
    eyebrow: t('solutions.securiteEyebrow'),
    title: t('solutions.securiteTitle'),
    description: t('solutions.securiteDesc'),
  };

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
        {/* Autonomie : bloc d'intro statique (message + photo), sans scroll-spy ni cartes
            — placée en première position de la page (retours client) */}
        <section className="relative flex flex-col border-t border-white/10 bg-oe-navy lg:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex w-full flex-col justify-center border-r border-white/10 px-6 py-16 md:px-12 lg:w-5/12 lg:px-16 lg:py-24"
          >
            <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
              {t('solutions.autonomieEyebrow')}
            </span>
            <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
              {t('solutions.autonomieTitle')}
            </h2>
            <p className="mt-6 border-l-2 border-oe-yellow bg-white/5 py-3 pl-4 font-sans text-sm font-semibold leading-relaxed text-white">
              {t('solutions.autonomieLead')}
            </p>
            <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
              {t('solutions.autonomieDesc')}
            </p>
          </motion.div>

          {/* Photo : mains en cœur devant un coucher de soleil, symbole de l'ambition du bloc */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative min-h-[320px] w-full overflow-hidden lg:w-7/12"
          >
            <img
              src={autonomiePhoto}
              alt={t('solutions.autonomiePhotoAlt')}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Fondu gauche : fond entièrement le bord de la photo dans le panneau de texte */}
            <div className="absolute inset-y-0 left-0 hidden w-1/4 bg-gradient-to-r from-oe-navy from-0% via-oe-navy/50 via-35% to-transparent to-75% lg:block" />
          </motion.div>
        </section>

        {/* --- BLOC PRINCIPAL AVEC SCROLL SPY --- */}
        <section id="autonomie-securite" className="relative flex flex-col lg:flex-row border-t border-white/10 bg-oe-navy">
          
          {/* CÔTÉ GAUCHE : Bloc fixe avec effet Drawer Global */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 lg:py-0 z-20 border-r border-white/10 bg-oe-navy">
            {/* L'espace réservé (min-h) évite les sauts de layout quand le contenu change */}
            <div className="max-w-md relative min-h-[400px]">
              <div className="absolute top-0 left-0 w-full">
                {/* Titres */}
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                  {SECURITE_INFO.eyebrow}
                </span>
                <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                  {SECURITE_INFO.title}
                </h2>
                <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
                  {SECURITE_INFO.description}
                </p>

                {/* Navigation dynamique vers chaque carte de la colonne de droite */}
                <div className="mt-12 hidden lg:flex flex-col gap-4 w-full">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">
                    {SECURITE_INFO.label}
                  </span>

                  {SOLUTIONS_COMBINED.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                      <div
                        key={idx}
                        className={`flex items-center gap-3 transition-all duration-300 ease-out ${
                          isActive ? 'opacity-100 translate-x-2' : 'opacity-60'
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
              </div>
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
                      opacity: isActive ? 1 : 0.45,
                      scale: isActive ? 1 : 0.9,
                      y: isActive ? 0 : 20
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`group w-full max-w-xl flex flex-col items-start border p-8 md:p-10 transition-all duration-500 ${
                      isActive ? 'border-oe-yellow/50 bg-white/10 shadow-2xl' : 'border-white/10 bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-6">
                      <img
                        src={item.icon}
                        alt=""
                        className={`h-16 w-16 object-contain transition-all duration-500 ${isActive ? 'scale-110 opacity-100' : 'opacity-70 grayscale'}`}
                      />
                    </div>

                    <h3 className={`font-display text-xl md:text-2xl uppercase tracking-wide transition-colors duration-500 ${isActive ? 'text-oe-yellow' : 'text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`mt-3 font-sans text-sm md:text-base leading-relaxed transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/65'}`}>
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
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
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