import { useState, type FormEvent } from 'react'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'

const APPAREILS = [
  'Climatisation',
  'Cuiseur à riz / cuisine électrique',
  'Chauffe-eau',
  'Piscine',
  'Frigo / congélateur',
  'Véhicule électrique',
]

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="Contact & Simulation"
          title="Regardons ça ensemble"
          description="Un formulaire simple, centré sur vos appareils du quotidien — pas sur des kilowatts-crête."
        />

        <section className="bg-oe-cream py-16 md:py-20">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="font-display text-2xl text-oe-navy uppercase sm:text-3xl">
                On s'assoit à votre table
              </h2>
              <p className="mt-4 max-w-md font-sans text-oe-navy/75">
                Dites-nous ce qui consomme chez vous. Un expert local vous
                recontacte sous 48h pour en discuter — par téléphone ou de
                vive voix, sans jargon.
              </p>

              <ul className="mt-8 flex flex-col gap-4 font-sans text-oe-navy/85">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    📞
                  </span>
                  02 62 26 39 40
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    ✉️
                  </span>
                  info@oneenergie.re
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-oe-yellow text-oe-navy">
                    📍
                  </span>
                  La Réunion
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-xl sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="text-4xl">🎉</span>
                  <h3 className="font-display mt-4 text-xl text-oe-navy uppercase">
                    Merci !
                  </h3>
                  <p className="mt-2 font-sans text-oe-navy/70">
                    Votre demande est bien enregistrée. Un expert vous
                    recontacte très vite.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                      Nom
                      <input
                        required
                        type="text"
                        name="nom"
                        className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                      Téléphone
                      <input
                        required
                        type="tel"
                        name="telephone"
                        className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Email
                    <input
                      required
                      type="email"
                      name="email"
                      className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <fieldset>
                    <legend className="font-sans text-sm font-semibold text-oe-navy">
                      Qu'est-ce qui consomme le plus chez vous ?
                    </legend>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      {APPAREILS.map((appareil) => (
                        <label
                          key={appareil}
                          className="flex items-center gap-2 rounded-xl border border-oe-navy/15 px-3 py-2 font-sans text-xs text-oe-navy/80"
                        >
                          <input
                            type="checkbox"
                            name="appareils"
                            value={appareil}
                            className="accent-oe-blue"
                          />
                          {appareil}
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Montant approximatif de votre facture EDF (par mois)
                    <input
                      type="text"
                      name="facture"
                      placeholder="ex : 150 €"
                      className="rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5 font-sans text-sm font-semibold text-oe-navy">
                    Un mot sur votre projet
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Panneaux, batteries, les deux..."
                      className="resize-none rounded-xl border border-oe-navy/15 px-4 py-3 font-sans text-sm font-normal outline-none focus:border-oe-blue"
                    />
                  </label>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-oe-navy py-4 font-sans text-base font-bold text-oe-yellow transition hover:bg-oe-blue-dark"
                  >
                    Je demande conseil à un expert
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
