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

            <div className="mt-8 flex flex-col gap-10">
              {article.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="font-display text-2xl text-oe-navy uppercase">
                    {section.heading}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {section.body.map((paragraph, i) => (
                      <p key={i} className="font-sans text-oe-navy/80">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {otherArticles.length > 0 && (
              <div className="mt-16 border-t border-oe-navy/10 pt-10">
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
              </div>
            )}
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default BlogArticle
