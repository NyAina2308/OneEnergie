import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactFoot from '../components/ContactFoot'
import mascotte from '../assets/brand/mascotte-2.png'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import installationToit from '../assets/photos/installation-toit.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'
import solar from '../assets/photos/solarteam.jpg'

// Photos de l'équipe
import conseillerPhoto from '../assets/photos/solarworker.jpg'
import technicienPhoto from '../assets/photos/solarworker2.jpg'
import savPhoto from '../assets/photos/solarworker1.jpg'

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

const containerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const ROLES = [
  {
    title: 'Conseiller solaire',
    description:
      'Le premier visage : il écoute vos habitudes avant de parler matériel. Aucun jargon, aucune pression.',
    image: conseillerPhoto,
  },
  {
    title: 'Technicien installateur',
    description:
      'Formé et équipé, il pose votre centrale et vos batteries selon les normes anti-cycloniques de l’île.',
    image: technicienPhoto,
  },
  {
    title: 'Référent SAV',
    description:
      'Joignable après la mise en service pour le suivi de production, l’entretien et vos questions du quotidien.',
    image: savPhoto,
  },
]

function Team() {
  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="L'équipe One Énergie"
          title="Des visages, pas un numéro de dossier"
          description="On traite avec des gens. Voici les métiers qui vous accompagnent, du premier échange au suivi dans la durée."
          backgroundImage={solar}
          quoteImage={mascotte}
          quoteHighlight="« Un expert à votre table, pas un inconnu sur votre toit. »"
          quoteText="Notre équipe grandit avec l'île. Vous rencontrerez toujours un interlocuteur local, avant, pendant et après l'installation."
          quoteAuthor="Mr Pigeon"
        />

        {/* Section Rôles & Métiers (Style "Solutions Intelligentes" de la maquette) */}
        <section className="py-20 md:py-28 relative z-10">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-8 md:grid-cols-3"
            >
              {ROLES.map((role, index) => (
                <motion.div
                  key={role.title}
                  variants={fadeInUp}
                  className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-[40px] border-2 border-white/10 bg-oe-navy transition-all duration-500 hover:-translate-y-2 hover:border-oe-yellow hover:shadow-[0_20px_40px_-15px_rgba(255,220,0,0.15)]"
                >
                  {/* Image de fond plein cadre */}
                  <img
                    src={role.image}
                    alt={role.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Superposition de dégradés (sombre en bas, transparent en haut) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-oe-navy via-oe-navy/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>

                  {/* Numéro en filigrane (01, 02, 03...) */}
                  <div className="absolute top-6 right-8 font-display text-6xl font-bold text-white/10 transition-colors duration-300 group-hover:text-white/20">
                    0{index + 1}
                  </div>
                  
                  {/* Contenu textuel poussé vers le bas */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-left z-10">
                    <span className="mb-2 text-xs font-bold uppercase tracking-widest text-oe-yellow opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100">
                      Sur le terrain
                    </span>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white transition-transform duration-500 group-hover:-translate-y-1">
                      {role.title}
                    </h3>
                    <p className="mt-3 font-sans text-sm font-light leading-relaxed text-white/80 transition-transform duration-500 group-hover:-translate-y-1">
                      {role.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section Équipes sur le terrain */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-transparent to-black/20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-2xl text-center flex flex-col items-center"
            >
              {/* Point de repère jaune et surtitre */}
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-oe-yellow"></div>
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                  Galerie métier
                </span>
              </div>
              
              <h2 className="font-display mt-6 text-4xl uppercase tracking-wider text-white sm:text-5xl leading-tight">
                <span className="font-extralight">Nos équipes,</span> <span className="font-bold text-oe-yellow">en action</span>
              </h2>
              <p className="mt-6 font-sans text-lg font-light leading-relaxed text-white/70">
                Pas de photos de banque d'images figées : des chantiers, des harnais, des toits réunionnais.
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
                { src: installationToit, alt: 'Équipe installant des panneaux solaires sur un toit' },
                { src: techniciensSecurite, alt: 'Techniciens équipés pour intervenir en sécurité' },
                { src: entretienPanneaux, alt: 'Technicien assurant l’entretien des panneaux' },
              ].map((photo) => (
                <motion.div
                  key={photo.src}
                  variants={fadeInUp}
                  className="group relative overflow-hidden rounded-[40px] border-2 border-white/5 bg-white/5 shadow-xl transition-all duration-300 hover:border-white/20 hover:shadow-2xl"
                >
                  <div className="aspect-[4/5] w-full">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-oe-navy/20 transition-opacity duration-300 group-hover:bg-transparent"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <ContactFoot />
      </main>
    </div>
  )
}

export default Team