import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoWhite from '../assets/brand/logo-blanc.png'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos solutions', to: '/nos-solutions' },
  { label: 'Décrypter et prévenir', to: '/decrypter-et-prevenir' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-20 items-center border-b border-white/10 backdrop-blur transition-colors duration-300 ${
        scrolled || open ? 'bg-oe-navy/95 shadow-md' : 'bg-oe-navy/70'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">

        {/* Logo : toujours blanc sur fond sombre, sur toutes les pages */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logoWhite}
            alt="One Énergie"
            className="h-9 w-auto object-contain md:h-10"
          />
        </Link>

        {/* Navigation Desktop : centrée entre le logo et le CTA, quelle que soit leur largeur */}
        <nav className="hidden flex-1 items-center justify-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-1.5 font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                  isActive
                    ? 'bg-oe-yellow text-oe-navy shadow-sm'
                    : 'text-white/90 hover:bg-white/10 hover:text-oe-yellow'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Bouton CTA Desktop */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="border border-oe-yellow px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow transition-all duration-300 hover:bg-oe-yellow hover:text-oe-navy"
          >
            Contact &amp; Simulation
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div className="absolute inset-x-0 top-full border-t border-white/10 bg-oe-navy/95 px-6 py-6 shadow-xl backdrop-blur-md lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                    isActive
                      ? 'bg-oe-yellow text-oe-navy'
                      : 'text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-oe-yellow px-6 py-3.5 text-center font-sans text-xs font-bold uppercase tracking-widest text-oe-navy"
            >
              Contact &amp; Simulation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
