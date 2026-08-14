import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import Footer from '../components/Footer'
import TestimonialsAndContact from '../components/Testimonials'
import ContactCta from '../components/ContactCta'
import HomeMerged from '../components/HomeMerged'
import ContactFoot from '../components/ContactFoot'


function Home() {
  return (
    <main>
      {/* <Hero />
      <Process />
      <SolutionsTeaser /> */}
      <HomeMerged/>

      <TestimonialsAndContact />
      <ContactFoot/>
    </main>
  )
}

export default Home
