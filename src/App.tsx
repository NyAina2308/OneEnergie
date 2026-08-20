import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Guide from './pages/Guide'
import GuideArticle from './pages/GuideArticle'
import Team from './pages/Team'
import Contact from './pages/Contact'
import Garanties from './pages/Garanties'
import Faq from './pages/Faq'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-solutions" element={<Solutions />} />
        <Route path="/decrypter-et-prevenir" element={<Guide />} />
        <Route path="/decrypter-et-prevenir/:slug" element={<GuideArticle />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/garantie-confiance" element={<Garanties />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
