import Hero from '../components/Hero'
import SolutionsTeaser from '../components/SolutionsTeaser'
import Process from '../components/Process'
import WhyUs from '../components/WhyUs'
import OurStory from '../components/OurStory'
import TrustPromise from '../components/TrustPromise'
import Testimonials from '../components/Testimonials'
import ContactCta from '../components/ContactCta'

function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <SolutionsTeaser />
      <WhyUs />
      <OurStory />
      <TrustPromise />
      <Testimonials />
      <ContactCta />
    </main>
  )
}

export default Home
