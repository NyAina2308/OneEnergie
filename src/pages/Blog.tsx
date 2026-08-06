import { Link } from 'react-router-dom'
import { motion,type Variants} from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-1.png'
import { ARTICLES } from '../data/articles'
import solar from '../assets/photos/solarpointing.jpg' 

function ArticleSvgIcon() {
  return (
    <svg 
      className="h-6 w-6 text-oe-navy" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      aria-hidden="true"
    >
      <path 
        strokeLinecap="square" 
        strokeLinejoin="miter" 
        strokeWidth={2} 
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
      />
    </svg>
  )
}

// Variantes pour l'effet Stagger (apparition en cascade)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow="Le Blog du Pigeon"
          title="Décryptage et conseils anti-arnaques"
          description="Notre mascotte vulgarise le solaire pour vous : factures, devis, aides — sans jargon, sans langue de bois."
          backgroundImage={solar}
        />

        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            
            {/* Bannière Mascotte avec Fade-In */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-14 flex flex-col items-center gap-6 border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:flex-row sm:text-left"
            >
              <img 
                src={mascotte} 
                alt="Mascotte One Énergie" 
                className="w-28 shrink-0 drop-shadow-md sm:w-32" 
              />
              <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                <span className="text-oe-yellow">« On vulgarise pour libérer. »</span> Ici, pas de champ PV ni de
                talon de consommation — juste ce qu'il faut savoir avant de signer.
              </p>
            </motion.div>

            {/* Grille d'articles avec apparition Stagger Fade-In */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {ARTICLES.map((article) => (
                <motion.div key={article.slug} variants={itemVariants}>
                  <Link
                    to={`/guide-du-pigeon/${article.slug}`}
                    className="group flex h-full flex-col justify-between border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-oe-yellow/50 hover:bg-white/10 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oe-yellow"
                  >
                    <article>
                      <div className="flex h-12 w-12 items-center justify-center bg-oe-yellow shadow-md">
                        <ArticleSvgIcon />
                      </div>
                      <h2 className="font-display mt-6 text-xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-oe-yellow">
                        {article.title}
                      </h2>
                      <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                        {article.excerpt}
                      </p>
                    </article>

                    <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4">
                      <span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow transition-transform duration-300 group-hover:translate-x-1">
                        Lire l'article · {article.readTime}
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}