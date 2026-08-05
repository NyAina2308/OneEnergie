import { Link } from 'react-router-dom'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-1.png'
import { ARTICLES } from '../data/articles'

function Blog() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Le Guide du Pigeon"
          title="Décryptage et conseils anti-arnaques"
          description="Notre mascotte vulgarise le solaire pour vous : factures, devis, aides — sans jargon, sans langue de bois."
        />

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <div className="mb-14 flex flex-col items-center gap-6 rounded-3xl bg-oe-cream p-8 text-center ring-1 ring-oe-navy/5 sm:flex-row sm:text-left">
              <img src={mascotte} alt="Mascotte One Énergie" className="w-28 sm:w-32" />
              <p className="font-display text-lg text-oe-navy sm:text-xl">
                « On vulgarise pour libérer. » Ici, pas de champ PV ni de
                talon de consommation — juste ce qu'il faut savoir avant de
                signer.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {ARTICLES.map((article) => (
                <Link
                  key={article.slug}
                  to={`/guide-du-pigeon/${article.slug}`}
                  className="group flex flex-col rounded-3xl bg-oe-cream p-8 ring-1 ring-oe-navy/5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oe-yellow text-2xl">
                    {article.icon}
                  </div>
                  <h2 className="font-display mt-6 text-xl text-oe-navy uppercase">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 font-sans text-sm text-oe-navy/80">
                    {article.excerpt}
                  </p>
                  <span className="mt-6 font-sans text-sm font-bold text-oe-blue group-hover:underline">
                    Lire l'article · {article.readTime} →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default Blog
