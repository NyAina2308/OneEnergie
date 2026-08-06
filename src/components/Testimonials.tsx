import { motion } from 'motion/react'
import Reveal from './Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'

const TESTIMONIALS = [
  {
    name: 'Mireille P.',
    location: 'Saint-Pierre',
    quote:
      "Enfin un installateur qui m'a expliqué les choses simplement. Ma facture EDF a été divisée par presque 5.",
  },
  {
    name: 'Jean-Marc R.',
    location: 'Saint-André',
    quote:
      "L'équipe est venue étudier ma consommation réelle, pas juste la taille de mon toit. Le dimensionnement est parfait.",
  },
  {
    name: 'Sandrine L.',
    location: 'Le Tampon',
    quote:
      "Avec les batteries, on ne coupe plus rien le soir. Et l'installation a tenu le dernier épisode cyclonique sans souci.",
  },
]

function Testimonials() {
  return (
    <section id="avis" className="bg-oe-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
            Ils nous font confiance
          </span>
          <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
            La Réunion, entre nous
          </h2>
        </Reveal>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer}
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-oe-navy/5"
            >
              <span className="font-display text-4xl text-oe-yellow-dark">
                "
              </span>
              <blockquote className="mt-2 flex-1 font-sans text-oe-navy/85">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 font-sans text-sm font-bold text-oe-navy">
                {testimonial.name}
                <span className="ml-2 font-normal text-oe-navy/50">
                  {testimonial.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
