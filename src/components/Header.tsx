import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logoWhite from '../assets/brand/logo-blanc.png'

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

function Header() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme la liste de langues au clic en dehors
  useEffect(() => {
    if (!langOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [langOpen])

  const NAV_LINKS = [
    { label: t('nav.home'), to: '/' },
    { label: t('nav.solutions'), to: '/nos-solutions' },
    { label: t('nav.warranty'), to: '/garantie-confiance' },
    { label: t('nav.blog'), to: '/decrypter-et-prevenir' },
  ]

  const currentLang = LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0]
  const selectLang = (code: string) => {
    i18n.changeLanguage(code)
    setLangOpen(false)
  }

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

        {/* Bouton CTA + sélecteur de langue Desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="relative" ref={langMenuRef}>
            <button
              type="button"
              onClick={() => setLangOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              className="flex items-center gap-1.5 px-2.5 py-1.5 font-sans text-xs font-bold uppercase tracking-widest text-white/70 transition-all duration-200 hover:text-oe-yellow"
            >
              {currentLang.code.toUpperCase()}
              <svg
                className={`h-3 w-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <ul
                role="listbox"
                className="absolute right-0 top-full mt-2 w-36 border border-white/10 bg-oe-navy/95 py-1.5 shadow-xl backdrop-blur-md"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={lang.code === currentLang.code}
                      onClick={() => selectLang(lang.code)}
                      className={`flex w-full items-center justify-between px-4 py-2 text-left font-sans text-xs font-bold uppercase tracking-widest transition-colors ${
                        lang.code === currentLang.code
                          ? 'text-oe-yellow'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {lang.label}
                      {lang.code === currentLang.code && (
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Link
            to="/contact"
            className="border border-oe-yellow px-6 py-2.5 font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow transition-all duration-300 hover:bg-oe-yellow hover:text-oe-navy"
          >
            {t('nav.contactCta')}
          </Link>
        </div>

        {/* Bouton Hamburger Mobile */}
        <button
          type="button"
          aria-label={t('nav.openMenu')}
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

            {/* Sélecteur de langue en liste, aussi sur mobile */}
            <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-3">
              <span className="px-4 pb-1 font-sans text-[10px] font-bold uppercase tracking-widest text-white/40">
                {t('nav.language')}
              </span>
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => selectLang(lang.code)}
                  className={`flex items-center justify-between px-4 py-2 text-left font-sans text-xs font-bold uppercase tracking-widest transition-all ${
                    lang.code === currentLang.code
                      ? 'text-oe-yellow'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {lang.label}
                  {lang.code === currentLang.code && (
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 bg-oe-yellow px-6 py-3.5 text-center font-sans text-xs font-bold uppercase tracking-widest text-oe-navy"
            >
              {t('nav.contactCta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
