import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import Reveal from '../components/Reveal'
import { staggerContainer, fadeUp } from '../lib/motion'
import { ARTICLES, getArticleBySlug } from '../data/articles'
import iconPanneaux from '../assets/icons/icon-panneaux.png'
import iconMachine from '../assets/icons/icon-machine.png'
import iconMascotte from '../assets/icons/icon-mascotte.png'
import iconSoleil from '../assets/icons/icon-soleil.png'

const SECTION_ICONS: Record<string, string> = {
  panneaux: iconPanneaux,
  machine: iconMachine,
  mascotte: iconMascotte,
  soleil: iconSoleil,
}

function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return <Navigate to="/guide-du-pigeon" replace />
  }

  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug)

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow={`Le Guide du Pigeon · ${article.readTime} de lecture`}
          title={article.title}
        />

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <Link
              to="/guide-du-pigeon"
              className="font-sans text-sm font-semibold text-oe-blue hover:underline"
            >
              ← Retour au guide
            </Link>

            <motion.div
              className="mt-8 flex flex-col gap-10"
              initial="hidden"
              animate="show"
              variants={staggerContainer}
            >
              {article.sections.map((section) => {
                const icon = section.icon ? SECTION_ICONS[section.icon] : undefined
                return (
                  <motion.div key={section.heading} variants={fadeUp}>
                    <div className="flex items-center gap-4">
                      {icon && (
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-oe-yellow p-2">
                          <img src={icon} alt="" className="h-full w-full object-contain" />
                        </div>
                      )}
                      <h2 className="font-display text-2xl text-oe-navy uppercase">
                        {section.heading}
                      </h2>
                    </div>

                    {section.body.length > 0 && (
                      <div className="mt-4 flex flex-col gap-4">
                        {section.body.map((paragraph, i) => (
                          <p key={i} className="font-sans text-oe-navy/80">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <ul className="mt-4 flex flex-col gap-2">
                        {section.list.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 font-sans text-oe-navy/80"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-oe-blue" strokeWidth={2.5} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                )
              })}
            </motion.div>

            {otherArticles.length > 0 && (
              <Reveal className="mt-16 border-t border-oe-navy/10 pt-10">
                <h3 className="font-sans text-sm font-bold tracking-wide text-oe-navy/60 uppercase">
                  À lire aussi
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  {otherArticles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/guide-du-pigeon/${a.slug}`}
                      className="font-sans font-semibold text-oe-blue hover:underline"
                    >
                      {a.title} →
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default BlogArticle
