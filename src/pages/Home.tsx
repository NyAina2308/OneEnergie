import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import TestimonialsAndContact from '../components/Testimonials'
import ContactCta from '../components/ContactCta'
import NavigationCards from '../components/NavigationCards'

function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <SolutionsTeaser />
      <TestimonialsAndContact />
      <NavigationCards/>
    </main>
  )
}

export default Home
