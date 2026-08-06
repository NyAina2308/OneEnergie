import { motion } from 'motion/react'
import Reveal from './Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'

const PROMISES = [
  'Du matériel "low-cost" pour tirer les prix vers le bas',
  'Des raccourcis sur les normes de sécurité ou les démarches administratives',
  'Une simple pose de panneaux, sans étude ni dimensionnement précis',
  'Des tarifs "hors marché" ou des frais cachés',
  'Des méthodes de vente sous pression pour forcer une signature',
  'Un silence radio après la signature — on reste joignable',
]

function TrustPromise() {
  return (
    <section className="bg-oe-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <span className="font-sans text-sm font-bold tracking-wide text-oe-yellow uppercase">
            Notre engagement
          </span>
          <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
            Douze devis vous ont parlé de rendement.
            <br />
            <span className="text-oe-yellow">On préfère vous parler de vous.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-white/75">
            Le marché du solaire est saturé de promesses. Voici ce qu'on ne
            fera jamais chez One Énergie — noir sur blanc.
          </p>
        </Reveal>

        <motion.ul
          className="mx-auto mt-12 grid max-w-3xl gap-4 text-left sm:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer}
        >
          {PROMISES.map((promise) => (
            <motion.li
              key={promise}
              variants={fadeUp}
              className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 font-sans text-sm text-white/85 ring-1 ring-white/10"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-oe-yellow font-display text-xs text-oe-navy">
                ✕
              </span>
              {promise}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default TrustPromise
