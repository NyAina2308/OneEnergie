const PILLARS = [
  {
    label: 'Liberté financière',
    quote: 'On transforme votre taxe en liberté financière.',
  },
  {
    label: 'Un vrai conseil',
    quote: 'Un expert à votre table, pas un inconnu sur votre toit.',
  },
  {
    label: 'Vivre sans culpabiliser',
    quote: "Allumez la clim sans remords, le soleil s'occupe de la note.",
  },
  {
    label: 'Sécurité cyclonique',
    quote: 'Dormez tranquille, votre installation est prête pour le cyclone.',
  },
]

function WhyUs() {
  return (
    <section id="apropos" className="bg-oe-yellow py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
        <span className="font-sans text-sm font-bold tracking-wide text-oe-navy/70 uppercase">
          Pourquoi One Énergie
        </span>
        <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
          On ne traite pas des dossiers,
          <br />
          on traite avec des gens.
        </h2>
        <p className="mx-auto mt-4 max-w-lg font-sans text-oe-navy/80">
          Offrir la liberté d'accéder à une énergie à profusion pour vivre
          la modernité à 100%, sans culpabilité ni contrainte — c'est notre
          mission depuis le premier jour.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.label}
              className="rounded-2xl bg-oe-cream/70 p-5 text-left ring-1 ring-oe-navy/10"
            >
              <p className="font-sans text-xs font-bold tracking-wide text-oe-blue uppercase">
                {pillar.label}
              </p>
              <p className="font-display mt-2 text-base text-oe-navy">
                « {pillar.quote} »
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
