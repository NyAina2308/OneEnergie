import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import TestimonialsAndContact from '../components/Testimonials'
import ContactCta from '../components/ContactCta'


function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <SolutionsTeaser />
      <TestimonialsAndContact />
      <ContactCta/>
    </main>
  )
}

export default Home
