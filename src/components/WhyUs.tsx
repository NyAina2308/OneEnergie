import { motion } from 'motion/react'
import Reveal from './Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'
import mascotte from '../assets/brand/mascotte-1.png'

const PILLARS = [
  {
    label: 'Liberté financière',
    quote: 'On transforme votre taxe en liberté financière.',
  },
  {
    label: 'Un vrai conseil',
    quote: 'Un expert à votre table, pas un inconnu sur votre toit.',
  },
  {
    label: 'Vivre sans culpabiliser',
    quote: "Allumez la clim sans remords, le soleil s'occupe de la note.",
  },
  {
    label: 'Sécurité cyclonique',
    quote: 'Dormez tranquille, votre installation est prête pour le cyclone.',
  },
]

function WhyUs() {
  return (
    <section id="apropos" className="bg-oe-yellow py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1">
          <Reveal>
            <span className="font-sans text-sm font-bold tracking-wide text-oe-navy/70 uppercase">
              Pourquoi One Énergie
            </span>
            <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
              On ne traite pas des dossiers,
              <br />
              on traite avec des gens.
            </h2>
            <p className="mt-4 max-w-lg font-sans text-oe-navy/80">
              Offrir la liberté d'accéder à une énergie à profusion pour vivre
              la modernité à 100%, sans culpabilité ni contrainte — c'est notre
              mission depuis le premier jour.
            </p>
          </Reveal>

          <motion.div
            className="mt-10 grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            variants={staggerContainer}
          >
            {PILLARS.map((pillar) => (
              <motion.div
                key={pillar.label}
                variants={fadeUp}
                className="rounded-2xl bg-oe-cream/70 p-5 ring-1 ring-oe-navy/10"
              >
                <p className="font-sans text-xs font-bold tracking-wide text-oe-blue uppercase">
                  {pillar.label}
                </p>
                <p className="font-display mt-2 text-base text-oe-navy">
                  « {pillar.quote} »
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative order-1 flex justify-center md:order-2"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={revealViewport}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute h-52 w-52 rounded-full bg-oe-navy sm:h-64 sm:w-64 md:h-72 md:w-72" />
          <motion.img
            src={mascotte}
            alt="Mascotte One Énergie pouce levé"
            className="relative w-56 drop-shadow-xl sm:w-72 md:w-80"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default WhyUs
