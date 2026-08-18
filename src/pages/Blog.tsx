import { Link } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import { ARTICLES } from '../data/articles'
import solar from '../assets/photos/solarpointing.jpg' 

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
          eyebrow="Décrypter et prévenir"
          title="Décryptage et conseils anti-arnaques"
          description="On vulgarise le solaire pour vous : factures, devis, aides — sans jargon, sans langue de bois."
          backgroundImage={solar}
        />

        <section className="border-t border-white/10 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            
            {/* Bannière d'intro avec Fade-In */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-14 border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
            >
              <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                <span className="text-oe-yellow">« On vulgarise pour libérer. »</span> Ici, pas de champ PV ni de
                talon de consommation — juste ce qu'il faut savoir avant de signer.
              </p>
            </motion.div>

            {/* Grille d'articles */}
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
                    to={`/decrypter-et-prevenir/${article.slug}`}
                    className="group flex h-full flex-col justify-between overflow-hidden border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-oe-yellow/50 hover:bg-white/10 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oe-yellow"
                  >
                    <article className="flex flex-col">
                      {/* Image plein largeur (sans padding autour) */}
                      <div className="h-52 w-full overflow-hidden border-b border-white/10">
                        <img 
                          src={article.imageUrl} 
                          alt={article.title} 
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        />
                      </div>
                      
                      {/* Contenu textuel avec padding */}
                      <div className="p-8 pb-0">
                        <h2 className="font-display text-xl uppercase tracking-wide text-white transition-colors duration-300 group-hover:text-oe-yellow">
                          {article.title}
                        </h2>
                        <p className="mt-3 font-sans text-sm leading-relaxed text-white/70">
                          {article.excerpt}
                        </p>
                      </div>
                    </article>

                    {/* Pied de carte avec padding */}
                    <div className="p-8 pt-6">
                      <div className="flex items-center justify-between border-t border-white/10 pt-4">
                        <span className="flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow transition-transform duration-300 group-hover:translate-x-1">
                          Lire l'article · {article.readTime}
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
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