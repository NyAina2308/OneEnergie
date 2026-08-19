import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import iconBadge from '../assets/icons/icon-badge-eclair.svg'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'

/**
 * ⚠️ Contenu FICTIF en attente des vraies données fournisseurs (marques, modèles,
 * durées de garantie réelles). À remplacer avant mise en ligne définitive —
 * voir la conversation avec le client pour le suivi de cette page.
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

const STATS = [
  { value: '25 ans', label: 'Garantie de production des panneaux' },
  { value: '20 ans', label: 'Garantie produit panneaux & structure' },
  { value: '10 ans', label: 'Garantie sur les onduleurs' },
  { value: '10 ans', label: 'Garantie décennale sur la pose' },
]

const COMPONENTS = [
  {
    title: 'Panneaux solaires',
    subtitle: 'Modules monocristallins',
    warranty: '20 ans',
    warrantyLabel: 'garantie produit',
    lifespan: '25 ans',
    lifespanLabel: 'garantie production',
    barWarranty: 80,
    barLifespan: 100,
  },
  {
    title: 'Onduleurs',
    subtitle: 'Central ou micro-onduleurs',
    warranty: '10 ans',
    warrantyLabel: 'garantie',
    lifespan: '15 ans',
    lifespanLabel: 'durée de vie estimée',
    barWarranty: 66,
    barLifespan: 100,
  },
  {
    title: 'Batterie de stockage',
    subtitle: 'Lithium (LFP)',
    warranty: '10 ans',
    warrantyLabel: 'garantie',
    lifespan: '6 000',
    lifespanLabel: 'cycles estimés',
    barWarranty: 70,
    barLifespan: 100,
  },
  {
    title: 'Structure & fixations',
    subtitle: 'Rails et pose anti-cyclonique',
    warranty: '10 ans',
    warrantyLabel: 'garantie décennale',
    lifespan: '25 ans',
    lifespanLabel: 'durée de vie estimée',
    barWarranty: 40,
    barLifespan: 100,
  },
]

function Garanties() {
  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="Garantie & Confiance"
          title="Tranquille, du premier jour au vingtième"
          description="Chaque composant de votre installation est couvert. On vous montre quoi, combien de temps, et pourquoi."
          backgroundImage={techniciensSecurite}
        />

        {/* Bandeau de chiffres clés */}
        <section className="border-t border-white/10 py-14 md:py-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
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
                Le matériel
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                Chaque composant, couvert et durable
              </h2>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-12 grid gap-5 sm:grid-cols-2"
            >
              {COMPONENTS.map((item) => (
                <motion.div
                  key={item.title}
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

              {/* Callout pose / garantie décennale */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-5 border border-oe-yellow/30 bg-white/5 p-6 sm:col-span-2"
              >
                <img src={iconBadge} alt="" className="h-14 w-14 shrink-0 object-contain" />
                <div>
                  <h3 className="font-display text-lg uppercase tracking-wide text-white">
                    Pose : garantie décennale
                  </h3>
                  <p className="mt-1 font-sans text-sm leading-relaxed text-white/70">
                    L'installation est couverte 10 ans par notre assurance décennale, posée par des
                    techniciens formés et certifiés.
                  </p>
                </div>
              </motion.div>
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
                Garantie vs durée de vie
              </span>
              <p className="mt-2 font-sans text-sm text-white/50">
                La barre pleine = garantie contractuelle. La barre claire = durée de vie estimée.
              </p>

              <div className="mt-8 flex flex-col gap-6">
                {COMPONENTS.map((item) => (
                  <div key={item.title}>
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
