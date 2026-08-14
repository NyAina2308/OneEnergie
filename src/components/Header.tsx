import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoBlue from '../assets/brand/logo-bleu.png'
import logoWhite from '../assets/brand/logo-blanc.png'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos solutions', to: '/nos-solutions' },
  { label: 'Le Blog du Pigeon', to: '/guide-du-pigeon' },
  { label: "L'équipe", to: '/equipe' },
]

function Header({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!overlay) return
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [overlay])

  const solid = !overlay || scrolled || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex h-20 items-center transition-colors duration-300 ${
        solid
          ? 'border-b border-oe-navy/10 bg-oe-cream/95 shadow-md backdrop-blur'
          : 'border-b border-white/10 bg-oe-navy'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={solid ? logoBlue : logoWhite}
            alt="One Énergie"
            className="h-9 w-auto object-contain transition-opacity duration-300 md:h-10"
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden items-center gap-2 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3.5 py-1.5 rounded-3xl font-sans text-xs font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                  isActive
                    ? 'bg-oe-yellow text-oe-navy shadow-sm'
                    : solid
                      ? 'text-oe-navy hover:bg-sky-600/5 hover:text-oe-blue'
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
            className={`px-6 py-2.5 font-sans rounded-3xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              solid
                ? 'bg-oe-navy text-oe-yellow hover:bg-oe-yellow hover:text-oe-navy'
                : 'border border-oe-yellow text-oe-yellow hover:bg-oe-yellow hover:text-oe-navy'
            }`}
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
            className={`h-0.5 w-6 transition-all duration-300 ${solid ? 'bg-sky-600' : 'bg-white'} ${
              open ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${solid ? 'bg-sky-600' : 'bg-white'} ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 transition-all duration-300 ${solid ? 'bg-sky-600' : 'bg-white'} ${
              open ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <div
          className={`absolute inset-x-0 top-full border-t px-6 py-6 shadow-xl transition-all lg:hidden ${
            overlay && !scrolled
              ? 'border-white/10 bg-sky-600/95 backdrop-blur-md'
              : 'border-oe-navy/10 bg-oe-cream'
          }`}
        >
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
                      : overlay && !scrolled
                        ? 'text-white hover:bg-white/10'
                        : 'text-oe-navy hover:bg-sky-600/5'
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