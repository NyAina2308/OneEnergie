import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import mascotte from '../assets/brand/mascotte-2.png'
import techniciensSecurite from '../assets/photos/techniciens-securite.jpg'
import installationToit from '../assets/photos/installation-toit.jpg'
import entretienPanneaux from '../assets/photos/entretien-panneaux.jpg'

const ROLES = [
  {
    title: 'Conseiller solaire',
    description:
      'Le premier visage : il écoute vos habitudes avant de parler matériel. Aucun jargon, aucune pression.',
  },
  {
    title: 'Technicien installateur',
    description:
      'Formé et équipé, il pose votre centrale et vos batteries selon les normes anti-cycloniques de l’île.',
  },
  {
    title: 'Référent SAV',
    description:
      'Joignable après la mise en service pour le suivi de production, l’entretien et vos questions du quotidien.',
  },
]

function Team() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          eyebrow="L'équipe One Énergie"
          title="Des visages, pas un numéro de dossier"
          description="On traite avec des gens. Voici les métiers qui vous accompagnent, du premier échange au suivi dans la durée."
        />

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {ROLES.map((role) => (
                <div
                  key={role.title}
                  className="rounded-3xl bg-oe-cream p-8 ring-1 ring-oe-navy/5"
                >
                  <h3 className="font-display text-xl text-oe-navy uppercase">
                    {role.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-oe-navy/80">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-oe-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
                Sur le terrain
              </span>
              <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
                Nos équipes, en action
              </h2>
              <p className="mt-4 font-sans text-oe-navy/70">
                Pas de photos de banque d'images figées : des chantiers, des
                harnais, des toits réunionnais.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {[
                { src: installationToit, alt: 'Équipe installant des panneaux solaires sur un toit' },
                { src: techniciensSecurite, alt: 'Techniciens équipés pour intervenir en sécurité' },
                { src: entretienPanneaux, alt: 'Technicien assurant l’entretien des panneaux' },
              ].map((photo) => (
                <div key={photo.src} className="overflow-hidden rounded-3xl shadow-sm">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-oe-yellow py-16 md:py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center md:flex-row md:text-left md:px-8">
            <img src={mascotte} alt="Mascotte One Énergie" className="w-32 sm:w-40" />
            <div>
              <p className="font-display text-xl text-oe-navy sm:text-2xl">
                « Un expert à votre table, pas un inconnu sur votre toit. »
              </p>
              <p className="mt-2 font-sans text-sm text-oe-navy/70">
                Notre équipe grandit avec l'île. Vous rencontrerez toujours un
                interlocuteur local, avant, pendant et après l'installation.
              </p>
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
    </>
  )
}

export default Team
