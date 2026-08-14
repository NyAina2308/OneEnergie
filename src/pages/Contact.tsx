import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'

// --- IMPORTS DES IMAGES ---
import solar from '../assets/photos/solarcontact1.jpg'
import mascotte from '../assets/brand/mascotte-1.png'
import logo from '../assets/brand/logo-light-blanc.png'

const YEAR = new Date().getFullYear()

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
            <span className="inline-block rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-xs font-bold tracking-wide text-white uppercase">
              Simulation
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white font-bold">
              Regardons ça ensemble
            </h1>
            <p className="font-sans text-base text-white/90 max-w-sm md:text-right leading-relaxed font-medium">
              Un formulaire simple, centré sur vos appareils du quotidien. Un expert vous répond sous 24h.
            </p>
          </div>
        </motion.div>

        {/* Section Principale : Formulaire (gauche) & Image verticale (droite) */}
        <section className="grid gap-6 lg:grid-cols-12 lg:items-stretch mb-12">
          
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
                <h3 className="font-display mt-5 text-2xl font-bold text-white">
                  Demande reçue !
                </h3>
                <p className="mt-2 font-sans text-base text-white/90 max-w-sm">
                  Votre demande est bien enregistrée. Notre équipe vous recontactera rapidement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Ligne 1 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Nom *</span>
                    <input
                      required
                      type="text"
                      name="nom"
                      placeholder="Votre nom complet"
                      className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/50 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Email *</span>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="vous@exemple.re"
                      className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/50 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>
                </div>

                {/* Ligne 2 */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Téléphone *</span>
                    <input
                      required
                      type="tel"
                      name="telephone"
                      placeholder="06 92 ..."
                      className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/50 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-white uppercase tracking-wide">Facture EDF / Mois</span>
                    <input
                      type="text"
                      name="facture"
                      placeholder="ex: 150 €"
                      className="w-full rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-sm font-medium text-white placeholder-white/50 outline-none transition focus:bg-white/15 focus:ring-1 focus:ring-oe-yellow"
                    />
                  </label>
                </div>

                {/* Checkboxes Appareils */}
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-xs font-bold text-white uppercase tracking-wide">Appareils énergivores</span>
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
                          className="h-4 w-4 rounded border-white/30 bg-white/10 accent-oe-yellow focus:ring-oe-yellow focus:ring-offset-0"
                        />
                        <span className="text-xs font-medium text-white/90 truncate">{appareil}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Boutons d'envoi */}
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
            <div className="absolute right-5 top-5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-4 py-1.5">
              <span className="text-xs font-bold text-white tracking-wide uppercase">Votre Projet</span>
            </div>
          </motion.div>
        </section>
      </main>

      {/* ==============================================================
          FOOTER FUSIONNÉ & COMPACT
      ============================================================== */}
      <div className="relative w-full bg-oe-navy overflow-hidden font-sans">
        
        {/* COUCHE 1 : HALO LUMINEUX */}
        <div className="absolute top-[20%] left-1/4 w-[400px] h-[400px] bg-oe-blue/10 rounded-full blur-3xl -translate-x-1/2 pointer-events-none z-0"></div>

        {/* COUCHE 2 : SÉPARATEUR SVG GÉANT ONDULÉ INVERSÉ */}
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

        {/* COUCHE 3 : CONTENU (Au premier plan) */}
        <div className="relative z-10 flex flex-col w-full">

          {/* --- SECTION 1 : CONTACT INFOS --- */}
          <section className="relative pt-10 pb-8 md:pt-16 md:pb-12">
            <div className="mx-auto max-w-6xl px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* Côté Gauche : Mascotte */}
              <motion.div 
                custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
                className="w-full md:w-5/12 flex justify-center md:justify-start items-center"
              >
                <img
                  src={mascotte}
                  alt="Mascotte One Énergie"
                  className="w-auto h-auto max-h-[180px] sm:max-h-[220px] md:max-h-[280px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Côté Droit : Infos de Contact avec Badges Visibles */}
              <motion.div 
                custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
                className="w-full md:w-6/12 flex flex-col gap-8 bg-white/95 md:bg-transparent p-8 md:p-0 rounded-3xl md:shadow-none shadow-xl"
              >
                {/* Téléphone */}
                <div className="flex items-center gap-5 text-left group">
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-oe-navy text-oe-yellow shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Téléphone</h4>
                    <p className="mt-0.5 text-lg text-oe-navy font-black">02 62 26 39 40</p>
                  </div>
                </div>

                {/* Horaires */}
                <div className="flex items-center gap-5 text-left group">
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-oe-navy text-oe-yellow shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Horaires</h4>
                    <p className="mt-0.5 text-lg text-oe-navy font-black">Lun - Ven : 8h - 18h</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-5 text-left group">
                  <div className="flex shrink-0 h-14 w-14 items-center justify-center rounded-full bg-oe-navy text-oe-yellow shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email</h4>
                    <p className="mt-0.5 text-lg text-oe-navy font-black">info@oneenergie.re</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* --- SECTION 2 : LIENS DU FOOTER --- */}
          <footer className="relative pt-6 pb-4">
            <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:px-8">
              
              {/* Haut du Footer */}
              <div className="flex flex-col md:flex-row items-start justify-between gap-10">
                
                {/* Logo & Description */}
                <div className="w-full md:w-1/3 bg-oe-navy/95 md:bg-transparent p-6 md:p-0 rounded-2xl md:rounded-none shadow-xl md:shadow-none">
                  <img src={logo} alt="One Énergie" className="h-9 w-auto" />
                  <p className="mt-4 max-w-xs font-sans text-sm text-white/90 leading-relaxed font-medium">
                    Le solaire, entre nous. Panneaux photovoltaïques et batteries de
                    stockage, dimensionnés pour votre usage réel à La Réunion.
                  </p>
                </div>

                {/* Navigation & Liens */}
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
      </div>
    </div>
  )
}