import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Process from '../components/Process'
import EnergyFlow from '../components/EnergyFlow'
import ContactCta from '../components/ContactCta'
import SimulatorEstimate, { type SimulatorResult } from '../components/SimulatorEstimate'


function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  // Le simulateur de l'accueil n'a pas de formulaire à pré-remplir sur place : on
  // envoie le résultat vers la page Contact (via l'état de navigation) pour que
  // l'utilisateur retrouve sa réponse déjà intégrée dans le formulaire complet.
  const handleSimulatorComplete = (result: SimulatorResult) => {
    navigate('/contact', { state: { simulatorResult: result } })
  }

  return (
    <main>
      <Hero />
      <Process />
      <EnergyFlow />

      {/* Simulateur d'estimation, accessible dès l'accueil (remplace l'ancienne
          section "Un écosystème d'autonomie", déplacée sur la page Garantie & Confiance) */}
      <section className="border-t border-white/10 bg-oe-navy py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SimulatorEstimate onComplete={handleSimulatorComplete} />
          <div className="mt-6 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-oe-yellow"
            >
              {t('simulator.homeMoreLink')}
              <span className="h-px w-8 bg-white/40"></span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCta/>
    </main>
  )
}

export default Home
