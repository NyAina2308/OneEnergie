import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import EnergyFlow from '../components/EnergyFlow'
import ContactCta from '../components/ContactCta'


function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <SolutionsTeaser />
      <EnergyFlow />
      <ContactCta/>
    </main>
  )
}

export default Home
