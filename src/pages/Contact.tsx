import { useState, type FormEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'
import solar from '../assets/photos/solarcontact1.jpg'

const APPAREILS = [
  'Climatisation',
  'Cuiseur à riz',
  'Chauffe-eau',
  'Piscine',
  'Frigo / congélateur',
  'Véhicule électrique',
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white flex flex-col justify-between">
      <Header />

      {/* Ajout de pt-28 (mobile) et md:pt-36 (desktop) pour dégager l'espace sous la navbar */}
      <main className="mx-auto max-w-6xl px-6 pt-28 md:pt-36 pb-12 w-full flex-1 flex flex-col justify-center gap-10 md:gap-14">
        
        {/* En-tête : Badge + Titre + Paragraphe aligné à droite */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-4"
        >
          <div>
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/80 uppercase">
              Simulation
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white">
              Regardons ça ensemble
            </h1>
            <p className="font-sans text-sm text-white/70 max-w-xs md:text-right leading-relaxed">
              Un formulaire simple, centré sur vos appareils du quotidien. Un expert vous répond sous 24h.
            </p>
          </div>
        </motion.div>

        {/* Section Principale : Formulaire (gauche) & Image verticale (droite) */}
        <section className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
          
          {/* Colonne Gauche : Formulaire dans un conteneur sombre */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl flex flex-col justify-center"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-8 text-center my-auto">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-oe-yellow text-oe-navy shadow-md">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display mt-5 text-2xl font-semibold text-white">
                  Demande reçue !
                </h3>
                <p className="mt-2 font-sans text-sm text-white/70 max-w-sm">
                  Votre demande est bien enregistrée. Notre équipe vous recontactera rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Ligne 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">Nom *</span>
                    <input
                      required
                      type="text"
                      name="nom"
                      placeholder="Votre nom complet"
                      className="w-full rounded-xl bg-white/10 border border-white/5 px-4 py-3 text-sm font-light text-white placeholder-white/40 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">Email *</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="vous@exemple.re"
                      className="w-full rounded-xl bg-white/10 border border-white/5 px-4 py-3 text-sm font-light text-white placeholder-white/40 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>
                </div>

                {/* Ligne 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">Téléphone *</span>
                    <input
                      required
                      type="tel"
                      name="telephone"
                      placeholder="06 92 ..."
                      className="w-full rounded-xl bg-white/10 border border-white/5 px-4 py-3 text-sm font-light text-white placeholder-white/40 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">Facture EDF / Mois</span>
                    <input
                      type="text"
                      name="facture"
                      placeholder="ex: 150 €"
                      className="w-full rounded-xl bg-white/10 border border-white/5 px-4 py-3 text-sm font-light text-white placeholder-white/40 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>
                </div>

                {/* Checkboxes Appareils */}
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">Appareils énergivores</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {APPAREILS.map((appareil) => (
                      <label
                        key={appareil}
                        className="flex cursor-pointer items-center gap-2.5 rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 transition hover:bg-white/10"
                      >
                        <input
                          type="checkbox"
                          name="appareils"
                          value={appareil}
                          className="h-4 w-4 rounded border-white/20 bg-white/10 accent-oe-yellow focus:ring-oe-yellow focus:ring-offset-0"
                        />
                        <span className="text-[11px] font-medium text-white/80 truncate">{appareil}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Boutons d'envoi séparés (Style "Pill" + "Cercle") */}
                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="submit"
                    className="rounded-full bg-oe-yellow px-7 py-3.5 text-xs font-bold uppercase tracking-wide text-oe-navy transition hover:bg-white focus:outline-none"
                  >
                    Demander une étude
                  </button>
                  <button
                    type="submit"
                    aria-label="Envoyer"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-oe-yellow text-oe-navy transition hover:bg-white"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          {/* Colonne Droite : Image Verticale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative min-h-[340px] w-full overflow-hidden rounded-3xl border border-white/10"
          >
            <img
              src={solar}
              alt="Installation solaire"
              className="h-full w-full object-cover"
            />
            {/* Badge sur l'image */}
            <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-4 py-1.5">
              <span className="text-[11px] font-semibold text-white tracking-wide uppercase">Votre Projet</span>
            </div>
          </motion.div>
        </section>

        {/* Section Infos de Contact : 3 colonnes centrées avec icônes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="py-6 border-t border-white/10"
        >
          <div className="grid gap-8 sm:grid-cols-3 text-center">
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-oe-yellow shadow-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="mt-4 text-sm font-semibold text-white">Téléphone</h4>
              <p className="mt-1 text-sm text-white/70 font-light">02 62 26 39 40</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-oe-yellow shadow-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="mt-4 text-sm font-semibold text-white">Horaires</h4>
              <p className="mt-1 text-sm text-white/70 font-light">Lun - Ven : 8h - 18h</p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-oe-yellow shadow-sm">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="mt-4 text-sm font-semibold text-white">Email</h4>
              <p className="mt-1 text-sm text-white/70 font-light">info@oneenergie.re</p>
            </motion.div>
            
          </div>
        </motion.div>
      </main>
    </div>
  )
}