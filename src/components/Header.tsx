import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoBlue from '../assets/brand/logo-bleu.png'
import logoWhite from '../assets/brand/logo-blanc.png'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos solutions', to: '/nos-solutions' },
  { label: 'Le Guide du Pigeon', to: '/guide-du-pigeon' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        solid ? 'bg-oe-cream/95 shadow-md backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={solid ? logoBlue : logoWhite}
            alt="One Énergie"
            className="h-9 w-auto md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-sans text-[15px] font-semibold transition hover:text-oe-yellow ${
                  solid ? 'text-oe-navy hover:text-oe-blue' : 'text-white'
                } ${isActive ? (solid ? 'text-oe-blue' : 'text-oe-yellow') : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-oe-navy px-6 py-3 font-sans text-sm font-bold text-oe-yellow shadow-sm transition hover:bg-oe-blue hover:text-white"
          >
            Contact &amp; Simulation
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 transition ${solid ? 'bg-oe-navy' : 'bg-white'} ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 transition ${solid ? 'bg-oe-navy' : 'bg-white'} ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 transition ${solid ? 'bg-oe-navy' : 'bg-white'} ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-oe-navy/10 bg-oe-cream px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-sans text-base font-semibold text-oe-navy"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-oe-navy px-6 py-3 text-center font-sans text-sm font-bold text-oe-yellow"
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
