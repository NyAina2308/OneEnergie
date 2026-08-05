import { Link } from 'react-router-dom'

const SOLUTIONS = [
  {
    icon: '☀️',
    title: 'Autonomie quotidienne',
    tagline: 'Allumez la clim sans remords',
    description:
      'Panneaux et batteries dimensionnés sur vos usages réels, pour faire baisser la facture sans changer vos habitudes.',
  },
  {
    icon: '🌀',
    title: 'Sécurité & continuité',
    tagline: 'Prêt pour la saison cyclonique',
    description:
      'Matériel résistant, système anti-coupure et suivi local pour ne jamais être pris de court.',
  },
]

function SolutionsTeaser() {
  return (
    <section className="bg-oe-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
            Nos solutions
          </span>
          <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
            Un écosystème d'autonomie, pas juste des panneaux
          </h2>
          <p className="mt-4 font-sans text-oe-navy/70">
            One Énergie combine production, stockage et accompagnement humain
            pour que votre installation corresponde à ce que vous vivez
            vraiment — pas à une moyenne.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <div
              key={solution.title}
              className="flex flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-oe-navy/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oe-yellow text-2xl">
                {solution.icon}
              </div>
              <h3 className="font-display mt-6 text-xl text-oe-navy uppercase">
                {solution.title}
              </h3>
              <p className="mt-1 font-sans text-sm font-semibold text-oe-blue">
                {solution.tagline}
              </p>
              <p className="mt-4 font-sans text-sm text-oe-navy/80">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/nos-solutions"
            className="inline-block rounded-full bg-oe-navy px-7 py-4 font-sans text-base font-bold text-oe-yellow transition hover:bg-oe-blue"
          >
            Voir toutes nos solutions
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SolutionsTeaser
