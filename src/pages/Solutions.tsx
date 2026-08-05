import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-1.png'
import installationToit from '../assets/photos/installation-toit.jpg'
import panneauxToiture from '../assets/photos/panneaux-toiture.jpg'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'

const AUTONOMIE = [
  {
    icon: '❄️',
    title: 'La clim, sans remords',
    description:
      'Allumez la clim l’après-midi sans surveiller le compteur : votre production couvre le pic de consommation.',
  },
  {
    icon: '🍚',
    title: 'Le cuiseur à riz de midi',
    description:
      'Cuisinez aux heures de plein soleil et laissez vos panneaux financer la note, littéralement.',
  },
  {
    icon: '🚿',
    title: "L'eau chaude à volonté",
    description:
      'Chauffe-eau, machine à laver, frigo : dimensionnés sur vos appareils réels, pas sur une moyenne nationale.',
  },
]

const SECURITE = [
  {
    icon: '🌀',
    title: 'Résistance anti-cyclonique',
    description:
      'Fixations et matériel certifiés pour tenir face aux vents de l’île, saison après saison.',
  },
  {
    icon: '🔌',
    title: 'Système anti-coupure',
    description:
      'Vos batteries prennent le relais lors d’une coupure réseau : le frigo et l’essentiel continuent de tourner.',
  },
  {
    icon: '🛡️',
    title: 'Garanties claires',
    description:
      'Durée, couverture, conditions : expliquées noir sur blanc avant la signature, sans petites lignes.',
  },
]

function Solutions() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Nos solutions solaire"
          title="L'offre vulgarisée par les bénéfices"
          description="Pas de kilowatts-crête ni de talon de consommation. Juste ce que le solaire change vraiment dans votre quotidien."
        />

        {/* Pédagogie café-cuisine */}
        <section className="bg-oe-cream py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-[auto,1fr] md:px-8">
            <img
              src={mascotte}
              alt="Mascotte One Énergie"
              className="mx-auto w-40 sm:w-48"
            />
            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-oe-navy/5 sm:p-8">
              <p className="font-display text-xl text-oe-navy sm:text-2xl">
                « Tu veux faire cuire ton riz tranquillement pour 5 centimes ?
                Laisse le soleil s'en occuper ! »
              </p>
              <p className="mt-3 font-sans text-sm text-oe-navy/60">
                — La mascotte One Énergie, pédagogie « café-cuisine »
              </p>
            </div>
          </div>
        </section>

        {/* Autonomie quotidienne */}
        <section id="autonomie-quotidienne" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
                2.1 — Autonomie quotidienne
              </span>
              <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
                Gérez votre confort, faites baisser la facture
              </h2>
              <p className="mt-4 font-sans text-oe-navy/70">
                On dimensionne votre installation sur vos usages réels, pas
                sur une moyenne : clim, cuisine, eau chaude, tout compte.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {AUTONOMIE.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start rounded-3xl bg-oe-cream p-8 ring-1 ring-oe-navy/5 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oe-yellow text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display mt-6 text-lg text-oe-navy uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-oe-navy/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sécurité & continuité */}
        <section id="securite-continuite" className="bg-oe-navy py-20 text-white md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-sans text-sm font-bold tracking-wide text-oe-yellow uppercase">
                2.2 — Sécurité &amp; continuité
              </span>
              <h2 className="font-display mt-3 text-3xl uppercase sm:text-4xl">
                Un système anti-coupure, prêt pour le cyclone
              </h2>
              <p className="mt-4 font-sans text-white/75">
                Dormez tranquille : votre installation est pensée pour
                encaisser les aléas de l'île, pas seulement les beaux jours.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SECURITE.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start rounded-3xl bg-white/5 p-8 ring-1 ring-white/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-oe-yellow text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="font-display mt-6 text-lg text-oe-yellow uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-white/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preuve en image */}
        <section className="bg-oe-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
                En image
              </span>
              <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
                Des installations bien réelles
              </h2>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2">
              {[
                { src: panneauxToiture, alt: 'Panneaux solaires posés sur une toiture, ciel dégagé', caption: 'Panneaux haute performance', className: 'md:col-span-2 md:row-span-2' },
                { src: installationToit, alt: 'Installation de panneaux photovoltaïques sur une toiture', caption: 'Installation soignée', className: 'md:row-span-2' },
                { src: techniciensSecurite, alt: 'Techniciens équipés pour une installation en sécurité', caption: 'Des équipes formées et équipées', className: '' },
                { src: entretienPanneaux, alt: 'Technicien effectuant l’entretien de panneaux solaires', caption: 'Suivi et entretien dans la durée', className: '' },
              ].map((photo) => (
                <figure
                  key={photo.src}
                  className={`group relative overflow-hidden rounded-3xl ${photo.className}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-oe-navy/70 via-oe-navy/0 to-transparent" />
                  <figcaption className="absolute bottom-4 left-4 font-sans text-sm font-bold text-white">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default Solutions
