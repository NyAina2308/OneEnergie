import { Link } from 'react-router-dom'
import Header from './Header'
import mascotte from '../assets/brand/mascotte-1.png'
import heroPhoto from '../assets/photos/hero-installation.jpg'

const STATS = [
  { value: '85%', label: "d'économies sur la facture EDF" },
  { value: '81%', label: 'financés par les aides EDF' },
  { value: '20 ans', label: "de revente d'électricité garantie" },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-oe-blue pt-32 pb-20 md:pt-40 md:pb-28">
      <Header overlay />

      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-oe-yellow/20 blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <span className="inline-block rounded-full bg-oe-yellow px-4 py-1.5 font-sans text-sm font-bold text-oe-navy">
            Le solaire, entre nous.
          </span>

          <h1 className="font-display mt-5 text-4xl leading-[1.05] text-white uppercase sm:text-5xl md:text-6xl">
            Vivez l'énergie,
            <br />
            <span className="text-oe-yellow">en mieux.</span>
          </h1>

          <p className="mt-6 max-w-md font-sans text-lg text-white/90">
            On transforme votre taxe en liberté financière — avec un expert
            à votre table, pas un inconnu sur votre toit.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-oe-yellow px-7 py-4 font-sans text-base font-bold text-oe-navy shadow-lg transition hover:scale-105"
            >
              Demander mon devis gratuit
            </Link>
            <Link
              to="/nos-solutions"
              className="rounded-full border-2 border-white/40 px-7 py-4 font-sans text-base font-bold text-white transition hover:border-white"
            >
              Découvrir nos solutions
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-2xl text-oe-yellow sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 font-sans text-xs text-white/80 sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div className="overflow-hidden rounded-[2.5rem] shadow-2xl ring-4 ring-white/10">
            <img
              src={heroPhoto}
              alt="Une équipe installe des panneaux photovoltaïques sur une toiture, sous un grand ciel bleu"
              className="h-80 w-full object-cover sm:h-[26rem] md:h-[30rem]"
            />
          </div>

          <div className="absolute -bottom-8 -left-6 flex h-28 w-28 items-center justify-center rounded-full bg-oe-yellow shadow-xl sm:h-36 sm:w-36 md:-bottom-10 md:-left-10">
            <img
              src={mascotte}
              alt="Mascotte One Énergie, expert solaire souriant"
              className="w-24 sm:w-32"
            />
          </div>

          <div className="absolute -top-5 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-6">
            <p className="font-display text-xl text-oe-blue sm:text-2xl">
              85%
            </p>
            <p className="font-sans text-[11px] leading-tight font-semibold text-oe-navy/70">
              d'économies
              <br />
              en moyenne
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
