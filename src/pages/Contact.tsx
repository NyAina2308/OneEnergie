import { useState, type FormEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import solar from '../assets/photos/solarcontact1.jpg'

// Variantes pour les conteneurs et items en cascade (Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants : Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Contact() {
  const { t } = useTranslation()
  const [submitted, setSubmitted] = useState(false)

  const APPAREILS = [
    t('contact.device1'),
    t('contact.device2'),
    t('contact.device3'),
    t('contact.device4'),
    t('contact.device5'),
    t('contact.device6'),
  ]

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={t('nav.contactCta')}
          title={t('contact.pageTitle')}
          description={t('contact.pageDescription')}
          backgroundImage={solar}
        />

        {/* Section Principale */}
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              
              {/* Colonne Gauche : Formulaire (Fade-In latéral) */}
              <motion.div 
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="lg:col-span-5"
              >
                <div className="border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-8">
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                    {t('contact.formLabel')}
                  </span>
                  <h2 className="font-display mt-2 text-2xl uppercase tracking-wide text-white sm:text-3xl">
                    {t('contact.formTitle')}
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="flex h-16 w-16 items-center justify-center bg-oe-yellow text-oe-navy shadow-lg">
                        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-display mt-6 text-xl uppercase text-white">
                        {t('contact.successTitle')}
                      </h3>
                      <p className="mt-2 font-sans text-sm font-light text-white/70">
                        {t('contact.successDesc')}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                          {t('contact.firstName')} *
                          <input
                            required
                            type="text"
                            name="prenom"
                            placeholder={t('contact.firstNamePlaceholder')}
                            className="border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                          />
                        </label>
                        <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                          {t('contact.lastName')} *
                          <input
                            required
                            type="text"
                            name="nom"
                            placeholder={t('contact.lastNamePlaceholder')}
                            className="border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                          />
                        </label>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                          {t('contact.phone')} *
                          <input
                            required
                            type="tel"
                            name="telephone"
                            placeholder="0692..."
                            className="border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                          />
                        </label>
                        <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                          {t('contact.email')} *
                          <input
                            required
                            type="email"
                            name="email"
                            placeholder="exemple@domaine.mu"
                            className="border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                          />
                        </label>
                      </div>

                      <fieldset>
                        <legend className="font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                          {t('contact.devicesLegend')}
                        </legend>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          {APPAREILS.map((appareil) => (
                            <label
                              key={appareil}
                              className="flex cursor-pointer items-center gap-2 border border-white/10 bg-white/5 px-3 py-2.5 font-sans text-xs text-white/80 transition hover:border-oe-yellow/40 hover:bg-white/10"
                            >
                              <input
                                type="checkbox"
                                name="appareils"
                                value={appareil}
                                className="h-4 w-4 accent-oe-yellow focus-visible:ring-1 focus-visible:ring-oe-yellow"
                              />
                              <span className="truncate">{appareil}</span>
                            </label>
                          ))}
                        </div>
                      </fieldset>

                      <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                        {t('contact.billLabel')}
                        <input
                          type="text"
                          name="facture"
                          placeholder={t('contact.billPlaceholder')}
                          className="border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                        />
                      </label>

                      <label className="flex flex-col gap-2 font-sans text-xs font-bold uppercase tracking-wider text-white/80">
                        {t('contact.messageLabel')}
                        <textarea
                          name="message"
                          rows={3}
                          placeholder={t('contact.messagePlaceholder')}
                          className="resize-none border border-white/15 bg-white/5 px-4 py-3 font-sans text-sm font-normal text-white placeholder-white/30 outline-none transition focus:border-oe-yellow focus:bg-white/10 focus-visible:ring-1 focus-visible:ring-oe-yellow"
                        />
                      </label>

                      <button
                        type="submit"
                        className="mt-2 bg-oe-yellow py-4 font-sans text-sm font-bold uppercase tracking-widest text-oe-navy transition duration-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oe-yellow"
                      >
                        {t('contact.submit')}
                      </button>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Colonne Droite : Infos & Carte (Fade-In progressif) */}
              <motion.div 
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                className="flex flex-col justify-between gap-10 lg:col-span-7"
              >
                {/* Texte d'introduction */}
                <div>
                  <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                    {t('contact.introEyebrow')}
                  </span>
                  <h2 className="font-display mt-2 text-2xl uppercase tracking-wide text-white sm:text-3xl">
                    {t('contact.introTitle')}
                  </h2>
                  <p className="mt-4 font-sans text-base font-light leading-relaxed text-white/70">
                    {t('contact.introDesc')}
                  </p>
                </div>

                {/* Coordonnées */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <motion.div variants={itemVariants} className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-oe-yellow/40">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-oe-yellow text-oe-navy shadow-md">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-white/50">{t('contact.phone')}</p>
                      <p className="font-display mt-1 text-lg text-white">+230 428 6063</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-oe-yellow/40">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-oe-yellow text-oe-navy shadow-md">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-white/50">{t('contact.email')}</p>
                      <p className="font-display mt-1 text-lg text-white">info@oneenergie.mu</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-oe-yellow/40">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-oe-yellow text-oe-navy shadow-md">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-white/50">{t('contact.hours')}</p>
                      <p className="font-display mt-1 text-lg text-white">{t('contact.hoursValue')}</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start gap-4 border border-white/10 bg-white/5 p-5 transition hover:border-oe-yellow/40">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-oe-yellow text-oe-navy shadow-md">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-sans text-xs font-bold uppercase tracking-wider text-white/50">{t('contact.zone')}</p>
                      <p className="font-display mt-1 text-base text-white">{t('contact.zoneValue')}</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Carte interactive / Embed Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="relative h-64 w-full border border-white/10 bg-white/5 shadow-lg"
                >
                  <iframe
                    title={t('contact.mapTitle')}
                    src="https://www.google.com/maps?q=%C3%8Ele%20Maurice&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                    allowFullScreen={false}
                    loading="lazy"
                  />
                </motion.div>

              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}