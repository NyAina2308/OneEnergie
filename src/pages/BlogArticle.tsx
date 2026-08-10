import { Link, Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import { ARTICLES, getArticleBySlug } from '../data/articles'

function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  if (!article) {
    return <Navigate to="/guide-du-pigeon" replace />
  }

  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug)

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={`Le Blog du Pigeon · ${article.readTime} de lecture`}
          title={article.title}
        />

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            
            {/* Bouton retour */}
            <Link
              to="/guide-du-pigeon"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow transition-colors duration-300 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au guide
            </Link>

            {/* Image principale de l'article */}
            <div className="mt-8 h-64 w-full overflow-hidden border border-white/10 shadow-xl sm:h-80 md:h-96">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Sections de l'article */}
            <div className="mt-12 flex flex-col gap-12">
              {article.sections.map((section) => (
                <div key={section.heading} className="border-l-2 border-oe-yellow pl-6 md:pl-8">
                  <h2 className="font-display text-2xl uppercase tracking-wide text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="font-sans text-base font-light leading-relaxed text-white/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Recommandations en bas de page */}
            {otherArticles.length > 0 && (
              <div className="mt-20 border border-white/10 bg-white/5 p-8 md:p-10">
                <h3 className="mb-6 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-oe-yellow">
                  <span className="h-px w-6 bg-oe-yellow"></span>
                  À lire aussi
                </h3>
                <div className="flex flex-col gap-4">
                  {otherArticles.map((a) => (
                    <Link
                      key={a.slug}
                      to={`/guide-du-pigeon/${a.slug}`}
                      className="group flex items-center justify-between border-b border-white/5 pb-3 font-sans text-sm font-semibold text-white/90 transition-colors duration-300 last:border-b-0 last:pb-0 hover:text-oe-yellow"
                    >
                      <span>{a.title}</span>
                      <svg className="h-4 w-4 text-oe-yellow transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default BlogArticle