import { motion } from 'motion/react'
import Reveal from './Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'

const STEPS = [
  {
    number: '01',
    title: 'Analyse des habitudes',
    description:
      'On regarde comment vous vivez vraiment : clim, cuiseur à riz, facture EDF — pas seulement la surface de votre toit.',
  },
  {
    number: '02',
    title: 'Installation sur-mesure',
    description:
      'Panneaux et batteries dimensionnés pour votre foyer, posés par une équipe locale certifiée.',
  },
  {
    number: '03',
    title: 'Suivi local',
    description:
      'Un expert reste joignable après la mise en service : production, entretien, questions du quotidien.',
  },
]

function Process() {
  return (
    <section id="process" className="bg-oe-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-sm font-bold tracking-wide text-oe-yellow uppercase">
            Comment ça marche
          </span>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Trois étapes, un seul interlocuteur
          </h2>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-8 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer}
        >
          {STEPS.map((step, index) => (
            <motion.div key={step.number} className="relative" variants={fadeUp}>
              <span className="font-display text-5xl text-white/15">
                {step.number}
              </span>
              <h3 className="font-display mt-2 text-lg text-oe-yellow uppercase">
                {step.title}
              </h3>
              <p className="mt-3 font-sans text-sm text-white/75">
                {step.description}
              </p>
              {index < STEPS.length - 1 && (
                <span className="absolute top-6 -right-4 hidden text-2xl text-white/20 md:block">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process
