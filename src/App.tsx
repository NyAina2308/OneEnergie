import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/nos-solutions" element={<Solutions />} />
            <Route path="/nos-services" element={<Services />} />
            <Route path="/guide-du-pigeon" element={<Blog />} />
            <Route path="/guide-du-pigeon/:slug" element={<BlogArticle />} />
            <Route path="/equipe" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
