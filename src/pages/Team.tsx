import { motion, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import installationToit from '../assets/photos/installation-toit.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'
import solar from '../assets/photos/solarteam.jpg'

// Nouveaux imports à remplacer par vos vraies photos de l'équipe
import conseillerPhoto from '../assets/photos/solarworker.jpg'
import technicienPhoto from '../assets/photos/solarworker2.jpg'
import savPhoto from '../assets/photos/solarworker1.jpg'

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

function Team() {
  const { t } = useTranslation()

  const ROLES = [
    {
      title: t('team.role1Title'),
      description: t('team.role1Desc'),
      image: conseillerPhoto,
    },
    {
      title: t('team.role2Title'),
      description: t('team.role2Desc'),
      image: technicienPhoto,
    },
    {
      title: t('team.role3Title'),
      description: t('team.role3Desc'),
      image: savPhoto,
    },
  ]

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={t('team.pageEyebrow')}
          title={t('team.pageTitle')}
          description={t('team.pageDescription')}
          backgroundImage={solar}
        />

        {/* Section Rôles & Métiers */}
        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-6 md:grid-cols-3"
            >
              {ROLES.map((role) => (
                <motion.div
                  key={role.title}
                  variants={fadeInUp}
                  className="group flex flex-col overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-oe-yellow/50 hover:bg-white/10 hover:shadow-2xl"
                >
                  {/* Conteneur Image avec overlay et effet de zoom */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                    <img
                      src={role.image}
                      alt={role.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    {/* Dégradé sombre pour fondre l'image dans le thème navy */}
                    <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/90 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-50"></div>
                  </div>
                  
                  {/* Conteneur Texte */}
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="font-display text-xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-oe-yellow">
                      {role.title}
                    </h3>
                    <p className="mt-4 font-sans text-sm font-light leading-relaxed text-white/70">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Équipes sur le terrain */}
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
                {t('team.fieldEyebrow')}
              </span>
              <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
                {t('team.fieldTitle')}
              </h2>
              <p className="mt-4 font-sans font-light leading-relaxed text-white/70">
                {t('team.fieldDesc')}
              </p>
            </motion.div>

            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {[
                { src: installationToit, alt: t('team.fieldAlt1') },
                { src: techniciensSecurite, alt: t('team.fieldAlt2') },
                { src: entretienPanneaux, alt: t('team.fieldAlt3') },
              ].map((photo) => (
                <motion.div
                  key={photo.src}
                  variants={fadeInUp}
                  className="group overflow-hidden border border-white/10 bg-white/5"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-80"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Citation */}
        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="border border-white/10 bg-white/5 p-8 text-center shadow-2xl sm:p-10"
            >
              <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                <span className="text-oe-yellow">{t('team.quoteHighlight')}</span> {t('team.quoteRest')}
              </p>
              <p className="mt-4 font-sans text-sm font-light leading-relaxed text-white/70">
                {t('team.quoteDesc')}
              </p>
            </motion.div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default Team