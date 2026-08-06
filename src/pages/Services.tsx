import { motion } from 'motion/react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'
import mascotte from '../assets/brand/mascotte-1.png'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'

const SERVICES = [
  {
    number: '01',
    title: 'Étude & simulation gratuite',
    description:
      'Un expert vient chez vous et regarde comment vous vivez vraiment — clim, cuiseur à riz, facture EDF — pas seulement la surface de votre toit. Sans engagement.',
  },
  {
    number: '02',
    title: 'Dimensionnement sur-mesure',
    description:
      "Panneaux et batteries calibrés sur votre usage réel, pour éviter aussi bien le sous-dimensionnement que la course inutile aux kWc.",
  },
  {
    number: '03',
    title: 'Installation clé en main',
    description:
      'Une équipe locale certifiée pose votre centrale et gère les démarches administratives (raccordement, déclarations) à votre place.',
  },
  {
    number: '04',
    title: 'Financement & aides',
    description:
      "On vous accompagne dans le montage du dossier : aides EDF pouvant financer jusqu'à 81% de l'installation, et revente du surplus à EDF garantie pendant 20 ans.",
  },
  {
    number: '05',
    title: 'Suivi & monitoring',
    description:
      "Après la mise en service, on reste joignable : suivi de votre production, alertes en cas d'anomalie, un seul interlocuteur du début à la fin.",
  },
  {
    number: '06',
    title: 'Maintenance & entretien',
    description:
      'Contrôle périodique et nettoyage des panneaux pour préserver le rendement de votre installation dans la durée, y compris après un épisode cyclonique.',
  },
]

function Services() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Nos services"
          title="De l'étude à la maintenance, on reste à vos côtés"
          description="Une installation solaire, ce n'est pas juste un devis et des panneaux. C'est un accompagnement complet, du premier café jusqu'au suivi dans la durée."
        />

        {/* Timeline des services */}
        <section className="bg-oe-cream py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-5 md:px-8">
            <motion.div
              className="flex flex-col gap-10"
              initial="hidden"
              whileInView="show"
              viewport={revealViewport}
              variants={staggerContainer}
            >
              {SERVICES.map((service) => (
                <motion.div
                  key={service.number}
                  variants={fadeUp}
                  whileHover={{ x: 4 }}
                  className="flex gap-6 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-oe-navy/5 sm:p-8"
                >
                  <span className="font-display shrink-0 text-4xl text-oe-yellow-dark sm:text-5xl">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-oe-navy uppercase sm:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm text-oe-navy/75 sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Financement mis en avant */}
        <section className="bg-oe-blue py-16 text-white md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
            <Reveal>
              <span className="font-sans text-sm font-bold tracking-wide text-oe-yellow uppercase">
                Financement &amp; aides
              </span>
              <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
                On monte le dossier avec vous
              </h2>
              <p className="mt-4 font-sans text-white/85">
                Les démarches de financement font peur ? On s'occupe du
                dossier avec vous, en clair et sans jargon administratif.
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <dt className="font-display text-3xl text-oe-yellow">
                    <CountUp value={81} suffix="%" />
                  </dt>
                  <dd className="mt-1 font-sans text-sm text-white/80">
                    de l'installation financés par les aides EDF
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-3xl text-oe-yellow">
                    <CountUp value={20} suffix=" ans" />
                  </dt>
                  <dd className="mt-1 font-sans text-sm text-white/80">
                    de revente du surplus garantie à EDF
                  </dd>
                </div>
              </dl>
            </Reveal>
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={revealViewport}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute h-56 w-56 rounded-full bg-oe-yellow sm:h-64 sm:w-64" />
              <motion.img
                src={mascotte}
                alt="Mascotte One Énergie tenant un panneau solaire"
                className="relative w-52 drop-shadow-xl sm:w-64"
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </section>

        {/* Suivi & entretien */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
            <motion.div
              className="overflow-hidden rounded-3xl md:order-1"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={revealViewport}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={entretienPanneaux}
                alt="Technicien effectuant l'entretien de panneaux solaires"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
            </motion.div>
            <Reveal className="order-2">
              <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
                Suivi &amp; entretien
              </span>
              <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
                On ne disparaît pas après la signature
              </h2>
              <p className="mt-4 font-sans text-oe-navy/70">
                Contrairement à un simple poseur de panneaux, on reste
                joignable : contrôle du rendement, entretien préventif, et un
                interlocuteur qui connaît déjà votre dossier en cas de
                question.
              </p>
            </Reveal>
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default Services
