import { Link } from 'react-router-dom'
import logo from '../assets/brand/logo-light-blanc.png'

const YEAR = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-oe-navy py-14 text-white/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div>
            <img src={logo} alt="One Énergie" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs font-sans text-sm">
              Le solaire, entre nous. Panneaux photovoltaïques et batteries de
              stockage, dimensionnés pour votre usage réel à l'Île Maurice.
            </p>
          </div>

          <div className="flex flex-wrap gap-10">
            <div>
              <h4 className="font-sans text-sm font-bold text-white uppercase">
                Navigation
              </h4>
              <ul className="mt-3 flex flex-col gap-2 font-sans text-sm">
                <li><Link to="/" className="hover:text-oe-yellow">Accueil</Link></li>
                <li><Link to="/nos-solutions" className="hover:text-oe-yellow">Nos solutions</Link></li>
                <li><Link to="/decrypter-et-prevenir" className="hover:text-oe-yellow">Décrypter et prévenir</Link></li>
                <li><Link to="/contact" className="hover:text-oe-yellow">Contact &amp; Simulation</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold text-white uppercase">
                Contact
              </h4>
              <ul className="mt-3 flex flex-col gap-2 font-sans text-sm">
                <li>+230 428 6063</li>
                <li>info@oneenergie.mu</li>
                <li>Île Maurice</li>
              </ul>
            </div>

            <div>
              <h4 className="font-sans text-sm font-bold text-white uppercase">
                Suivez-nous
              </h4>
              <ul className="mt-3 flex flex-col gap-2 font-sans text-sm">
                <li><a href="#" className="hover:text-oe-yellow">Facebook</a></li>
                <li><a href="#" className="hover:text-oe-yellow">Instagram</a></li>
                <li><a href="#" className="hover:text-oe-yellow">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 font-sans text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {YEAR} One Énergie. Tous droits réservés.</p>
          <p>Le solaire, entre nous.</p>
        </div>

        <p className="font-sans text-[11px] leading-relaxed text-white/40">
          Crédits photos (Wikimedia Commons) :{' '}
          <a
            className="underline hover:text-white/60"
            href="https://commons.wikimedia.org/wiki/File:Three_men_installing_solar_panels_on_a_house.jpg"
          >
            W.carter (CC0)
          </a>
          ,{' '}
          <a
            className="underline hover:text-white/60"
            href="https://commons.wikimedia.org/wiki/File:Rooftop_solar_panels,_Llanellen,_Monmouthshire_-_geograph.org.uk_-_7600146.jpg"
          >
            Jaggery (CC BY-SA 2.0)
          </a>
          ,{' '}
          <a
            className="underline hover:text-white/60"
            href="https://commons.wikimedia.org/wiki/File:Solar_technicians.jpg"
          >
            SAgbley (CC BY-SA 4.0)
          </a>
          ,{' '}
          <a
            className="underline hover:text-white/60"
            href="https://commons.wikimedia.org/wiki/File:Cleaning_solar_panel.jpg"
          >
            Deo photographer (CC BY-SA 4.0)
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
