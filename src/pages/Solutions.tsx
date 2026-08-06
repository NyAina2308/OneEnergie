import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-1.png'
import installationToit from '../assets/photos/installation-toit.jpg'
import panneauxToiture from '../assets/photos/panneaux-toiture.jpg'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'
// Import de l'image de fond pour le PageHeader
import solarguyBg from '../assets/photos/solarsolution.jpg' 

// Variantes typées pour Framer Motion
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

const AUTONOMIE = [
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 2v20m8-10H4m13.657-7.071L6.343 19.07m11.314 0L6.343 4.93" />
      </svg>
    ),
    title: 'La clim, sans remords',
    description:
      'Allumez la clim l’après-midi sans surveiller le compteur : votre production couvre le pic de consommation.',
  },
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 10h16v10H4V10zm4-4v2m4-4v4m4-2v2" />
      </svg>
    ),
    title: 'Le cuiseur à riz de midi',
    description:
      'Cuisinez aux heures de plein soleil et laissez vos panneaux financer la note, littéralement.',
  },
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 3v12m-4-4l4 4 4-4M6 21h12" />
      </svg>
    ),
    title: "L'eau chaude à volonté",
    description:
      'Chauffe-eau, machine à laver, frigo : dimensionnés sur vos appareils réels, pas sur une moyenne nationale.',
  },
]

const SECURITE = [
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 4a8 8 0 00-4 15 4 4 0 01-4-4m16-1a8 8 0 00-11-9m11 9a4 4 0 014 4" />
      </svg>
    ),
    title: 'Résistance anti-cyclonique',
    description:
      'Fixations et matériel certifiés pour tenir face aux vents de l’île, saison après saison.',
  },
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: 'Système anti-coupure',
    description:
      'Vos batteries prennent le relais lors d’une coupure réseau : le frigo et l’essentiel continuent de tourner.',
  },
  {
    icon: (
      <svg className="h-6 w-6 text-oe-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Garanties claires',
    description:
      'Durée, couverture, conditions : expliquées noir sur blanc avant la signature, sans petites lignes.',
  },
]

function Solutions() {
  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="Nos solutions solaire"
          title="L'offre vulgarisée par les bénéfices"
          description="Pas de kilowatts-crête ni de talon de consommation. Juste ce que le solaire change vraiment dans votre quotidien."
          backgroundImage={solarguyBg} // Utilisation de la variable importée
        />

        {/* Pédagogie café-cuisine */}
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

        {/* Autonomie quotidienne */}
        <section id="autonomie-quotidienne" className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                2.1 — Autonomie quotidienne
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                Gérez votre confort, faites baisser la facture
              </h2>
              <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
                On dimensionne votre installation sur vos usages réels, pas
                sur une moyenne : clim, cuisine, eau chaude, tout compte.
              </p>
            </motion.div>

            <motion.div 
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {AUTONOMIE.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group flex flex-col items-start border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-oe-yellow/50 hover:bg-white/10 hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-oe-yellow shadow-md transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-display mt-6 text-lg uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-oe-yellow">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Sécurité & continuité */}
        <section id="securite-continuite" className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                2.2 — Sécurité &amp; continuité
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                Un système anti-coupure, prêt pour le cyclone
              </h2>
              <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
                Dormez tranquille : votre installation est pensée pour
                encaisser les aléas de l'île, pas seulement les beaux jours.
              </p>
            </motion.div>

            <motion.div 
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {SECURITE.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="group flex flex-col items-start border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-oe-yellow/50 hover:bg-white/10 hover:shadow-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center bg-oe-yellow shadow-md transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="font-display mt-6 text-lg uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-oe-yellow">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
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