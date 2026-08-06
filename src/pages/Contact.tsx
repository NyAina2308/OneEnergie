import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Phone, Mail, MapPin, PiggyBank, FileCheck, Lock, PartyPopper } from 'lucide-react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'

const BENEFICES = [
  { icon: PiggyBank, label: "Jusqu'à 85% d'économies sur la facture EDF" },
  { icon: FileCheck, label: "Aides EDF pouvant financer jusqu'à 81% de l'installation" },
  { icon: Lock, label: 'Revente du surplus garantie à EDF pendant 20 ans' },
]

const APPAREILS = [
  'Climatisation',
  'Cuiseur à riz / cuisine électrique',
  'Chauffe-eau',
  'Piscine',
  'Frigo / congélateur',
  'Véhicule électrique',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Contact & Simulation"
          title="Regardons ça ensemble"
          description="Un formulaire simple, centré sur vos appareils du quotidien — pas sur des kilowatts-crête."
        />

        <section className="bg-oe-navy py-10">
          <motion.div
            className="mx-auto grid max-w-5xl gap-6 px-5 sm:grid-cols-3 md:px-8"
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={staggerContainer}
          >
            {BENEFICES.map((benefice) => (
              <motion.div key={benefice.label} variants={fadeUp} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-oe-yellow">
                  <benefice.icon className="h-5 w-5 text-oe-navy" strokeWidth={2.25} />
                </span>
                <p className="font-sans text-sm text-white/90">{benefice.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section className="bg-oe-cream py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2 md:px-8">
            <Reveal>
              <h2 className="font-display text-2xl text-oe-navy uppercase sm:text-3xl">
                On s'assoit à votre table
              </h2>
              <p className="mt-4 max-w-md font-sans text-oe-navy/75">
                Dites-nous ce qui consomme chez vous. Un expert local vous
                recontacte sous 48h pour en discuter — par téléphone ou de
                vive voix, sans jargon.
              </p>

              <ul className="mt-8 flex flex-col gap-4 font-sans text-oe-navy/85">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    <Phone className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  02 62 26 39 40
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    <Mail className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  info@oneenergie.re
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    <MapPin className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                  La Réunion
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
              <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <PartyPopper className="h-10 w-10 text-oe-blue" strokeWidth={1.75} />
                  <h3 className="font-display mt-4 text-xl text-oe-navy uppercase">
                    Merci !
                  </h3>
                  <p className="mt-2 font-sans text-oe-navy/70">
                    Votre demande est bien enregistrée. Un expert vous
                    recontacte très vite.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                      Nom
                      <input
                        required
                        type="text"
                        name="nom"
                        className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                      Téléphone
                      <input
                        required
                        type="tel"
                        name="telephone"
                        className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <fieldset>
                    <legend className="font-sans text-sm font-semibold text-oe-navy">
                      Qu'est-ce qui consomme le plus chez vous ?
                    </legend>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {APPAREILS.map((appareil) => (
                        <label
                          key={appareil}
                          className="flex items-center gap-2 rounded-xl border border-oe-navy/15 px-3 py-2 font-sans text-xs text-oe-navy/80"
                        >
                          <input
                            type="checkbox"
                            name="appareils"
                            value={appareil}
                            className="accent-oe-blue"
                          />
                          {appareil}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Montant approximatif de votre facture EDF (par mois)
                    <input
                      type="text"
                      name="facture"
                      placeholder="ex : 150 €"
                      className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Un mot sur votre projet
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Panneaux, batteries, les deux..."
                      className="resize-none rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-oe-navy py-4 font-sans text-base font-bold text-oe-yellow transition hover:bg-oe-blue-dark"
                  >
                    Je demande conseil à un expert
                  </button>
                </motion.form>
              )}
              </AnimatePresence>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
