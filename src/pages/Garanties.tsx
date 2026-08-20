import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'

/**
 * Durées de garantie réelles, reprises du devis client (One Énergie — Devis #1101,
 * transmis par Sindy Lefevre le 19/08/2026) : panneaux, onduleurs, batterie, pose
 * décennale, ainsi que les garanties légale / main d'œuvre / accessoires.
 * ⚠️ Les intitulés génériques (« Modules monocristallins », « Lithium (LFP)», etc.)
 * restent à confirmer avec les fiches produit exactes si besoin de plus de précision.
 */

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
    transition: { staggerChildren: 0.1 },
  },
}

function Garanties() {
  const { t } = useTranslation()

  const STATS = [
    { value: t('garanties.stat1Value'), label: t('garanties.stat1Label') },
    { value: t('garanties.stat2Value'), label: t('garanties.stat2Label') },
    { value: t('garanties.stat3Value'), label: t('garanties.stat3Label') },
    { value: t('garanties.stat4Value'), label: t('garanties.stat4Label') },
  ]

  const COMPONENTS = [
    {
      title: t('garanties.comp1Title'),
      subtitle: t('garanties.comp1Subtitle'),
      warranty: t('garanties.comp1Warranty'),
      warrantyLabel: t('garanties.comp1WarrantyLabel'),
      lifespan: t('garanties.comp1Lifespan'),
      lifespanLabel: t('garanties.comp1LifespanLabel'),
      barWarranty: 83,
      barLifespan: 100,
    },
    {
      title: t('garanties.comp2Title'),
      subtitle: t('garanties.comp2Subtitle'),
      warranty: t('garanties.comp2Warranty'),
      warrantyLabel: t('garanties.comp2WarrantyLabel'),
      lifespan: t('garanties.comp2Lifespan'),
      lifespanLabel: t('garanties.comp2LifespanLabel'),
      barWarranty: 66,
      barLifespan: 100,
    },
    {
      title: t('garanties.comp3Title'),
      subtitle: t('garanties.comp3Subtitle'),
      warranty: t('garanties.comp3Warranty'),
      warrantyLabel: t('garanties.comp3WarrantyLabel'),
      lifespan: t('garanties.comp3Lifespan'),
      lifespanLabel: t('garanties.comp3LifespanLabel'),
      barWarranty: 70,
      barLifespan: 100,
    },
    {
      title: t('garanties.comp4Title'),
      subtitle: t('garanties.comp4Subtitle'),
      warranty: t('garanties.comp4Warranty'),
      warrantyLabel: t('garanties.comp4WarrantyLabel'),
      lifespan: t('garanties.comp4Lifespan'),
      lifespanLabel: t('garanties.comp4LifespanLabel'),
      barWarranty: 40,
      barLifespan: 100,
    },
  ]

  const EXTRAS = [
    { value: t('garanties.extra1Value'), label: t('garanties.extra1Label') },
    { value: t('garanties.extra2Value'), label: t('garanties.extra2Label') },
    { value: t('garanties.extra3Value'), label: t('garanties.extra3Label') },
  ]

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={t('nav.warranty')}
          title={t('garanties.pageTitle')}
          description={t('garanties.pageDescription')}
          backgroundImage={techniciensSecurite}
        />

        {/* Bandeau de chiffres clés */}
        <section className="border-t border-white/10 py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
            {STATS.map((stat, index) => (
              <div key={index}>
                <p className="font-display text-3xl text-oe-yellow sm:text-4xl">{stat.value}</p>
                <p className="mt-2 font-sans text-sm leading-snug text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chaque composant, couvert et durable */}
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                {t('garanties.materialEyebrow')}
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                {t('garanties.materialTitle')}
              </h2>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-12 grid gap-5 sm:grid-cols-2"
            >
              {COMPONENTS.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-oe-yellow/40 hover:bg-white/10"
                >
                  <h3 className="font-display text-lg uppercase tracking-wide text-white">{item.title}</h3>
                  <p className="mt-1 font-sans text-xs text-white/50">{item.subtitle}</p>

                  <div className="mt-6 flex items-end justify-between gap-3">
                    <div>
                      <p className="font-display text-2xl leading-none text-oe-yellow">{item.warranty}</p>
                      <p className="mt-1 font-sans text-xs text-white/50">{item.warrantyLabel}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-lg leading-none text-white">{item.lifespan}</p>
                      <p className="mt-1 font-sans text-xs text-white/50">{item.lifespanLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              
            </motion.div>

            {/* Garanties complémentaires (conformité, main d'œuvre, accessoires) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mt-8"
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">
                {t('garanties.otherLabel')}
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {EXTRAS.map((extra, index) => (
                  <div key={index} className="border border-white/10 bg-white/5 p-5">
                    <p className="font-display text-xl text-oe-yellow">{extra.value}</p>
                    <p className="mt-1 font-sans text-xs leading-snug text-white/70">{extra.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Garantie vs durée de vie */}
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="border border-white/10 bg-white/5 p-8 sm:p-10"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                {t('garanties.chartEyebrow')}
              </span>
              <p className="mt-2 font-sans text-sm text-white/50">
                {t('garanties.chartDesc')}
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {COMPONENTS.map((item, index) => (
                  <div key={index}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-sans text-sm font-medium text-white">{item.title}</span>
                      <span className="font-sans text-xs text-white/50">
                        {item.warranty} / {item.lifespan}
                      </span>
                    </div>
                    <div className="relative h-2.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-oe-yellow/25"
                        style={{ width: `${item.barLifespan}%` }}
                      />
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-oe-yellow"
                        style={{ width: `${item.barWarranty}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default Garanties
