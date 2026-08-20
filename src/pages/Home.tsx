import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import EnergyFlow from '../components/EnergyFlow'
import ContactCta from '../components/ContactCta'
import SimulatorEstimate, { type SimulatorResult } from '../components/SimulatorEstimate'


function Home() {
  const navigate = useNavigate()

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
      <SolutionsTeaser />
      <EnergyFlow />

      {/* Simulateur d'estimation, accessible dès l'accueil */}
      <section className="border-t border-white/10 bg-oe-navy py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <SimulatorEstimate onComplete={handleSimulatorComplete} />
        </div>
      </section>

      <ContactCta/>
    </main>
  )
}

export default Home
