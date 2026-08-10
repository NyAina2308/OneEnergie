import { Link } from 'react-router-dom'
import pigeonBg from '../assets/photos/entretien-panneaux.jpg'
import contactBg from '../assets/photos/entretien-panneaux.jpg'

const NAV_CARDS = [
  { 
    title: 'Le Guide du Pigeon', 
    subtitle: 'Évitez les arnaques solaires', 
    to: '/guide-du-pigeon', 
    bg: pigeonBg 
  },
  { 
    title: 'Contact', 
    subtitle: 'Prendre rendez-vous', 
    to: '/contact', 
    bg: contactBg,
    highlight: true // Pour donner un style un peu différent au bouton contact si souhaité
  },
]

function NavigationCards() {
  return (
    <section className="bg-oe-navy px-5 md:px-8 pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          
          {NAV_CARDS.map((card, index) => (
            <Link
              key={index}
              to={card.to}
              className="relative h-[250px] md:h-[300px] overflow-hidden group block"
            >
              {/* Image de fond avec transition */}
              <img 
                src={card.bg} 
                alt={card.title} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Overlays */}
              <div className="absolute inset-0 bg-oe-navy/80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"></div>
              {card.highlight && (
                 <div className="absolute inset-0 bg-oe-blue/40 mix-blend-multiply"></div>
              )}
              
              {/* Contenu de la carte */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between border border-white/5 m-3">
                <div>
                  <h3 className="font-display text-3xl text-white uppercase tracking-wide">
                    {card.title}
                  </h3>
                  <span className="font-sans text-[10px] md:text-xs text-white/70 uppercase tracking-[0.2em] mt-3 block">
                    {card.subtitle}
                  </span>
                </div>
                
                <div className="inline-flex items-center gap-4 font-sans text-xs font-bold tracking-widest text-white uppercase group-hover:text-oe-yellow transition-colors">
                  {card.highlight ? 'Demander un devis' : 'Découvrir'}
                  <span className="w-12 h-px bg-white group-hover:bg-oe-yellow transition-colors"></span>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  )
}

export default NavigationCards