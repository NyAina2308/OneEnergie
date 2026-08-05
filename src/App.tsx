import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'
import Team from './pages/Team'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nos-solutions" element={<Solutions />} />
        <Route path="/guide-du-pigeon" element={<Blog />} />
        <Route path="/guide-du-pigeon/:slug" element={<BlogArticle />} />
        <Route path="/equipe" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
