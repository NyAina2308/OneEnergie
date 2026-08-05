import { useState } from 'react'
import { Link } from 'react-router-dom'
// N'oublie pas d'importer ton image de fond si besoin
// import heroPhoto from '../assets/photos/hero-installation.jpg'

const SOLUTIONS = [
  {
    icon: '01',
    title: 'Autonomie',
    tagline: 'Allumez la clim',
    description: 'Panneaux et batteries dimensionnés sur vos usages réels au quotidien.',
  },
  {
    icon: '02',
    title: 'Sécurité',
    tagline: 'Saison cyclonique',
    description: 'Matériel ultra-résistant et système anti-coupure automatique intégré.',
  },
  {
    icon: '03',
    title: 'Rentabilité',
    tagline: 'Aides de l\'état',
    description: 'Revente garantie sur 20 ans et optimisation de votre fiscalité.',
  },
]

function SolutionsTeaser() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="bg-oe-navy min-h-screen flex flex-col lg:flex-row relative overflow-hidden font-sans border-t border-white/10">
      
      {/* ------------------------------------------------ */}
      {/* CÔTÉ GAUCHE : Texte fixe fond uni                  */}
      {/* ------------------------------------------------ */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 relative z-10 border-r border-white/10">
        <div className="max-w-md">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-oe-yellow uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-oe-yellow"></span>
            Nos solutions
          </p>
          
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase leading-[1.1] font-light tracking-wide">
            Un écosystème <br />
            d'autonomie, <br />
            <span className="font-normal text-oe-yellow">pas juste des panneaux</span>
          </h2>
          
          <p className="mt-8 font-sans text-base text-white/80 leading-relaxed">
            One Énergie combine production, stockage et accompagnement humain pour que votre installation corresponde à ce que vous vivez vraiment.
          </p>
          
          <div className="mt-16 flex items-center gap-8 border-t border-white/20 pt-8">
            <Link to="/nos-solutions" className="text-xs md:text-sm font-bold tracking-widest text-white uppercase flex items-center gap-3 group hover:text-oe-yellow transition-colors">
              Voir tout
              <span className="w-8 h-px bg-white group-hover:bg-oe-yellow group-hover:w-12 transition-all duration-300"></span>
            </Link>
            <span className="w-px h-4 bg-white/20"></span>
            <Link to="/faq" className="text-xs md:text-sm font-bold tracking-widest text-white/60 uppercase hover:text-white transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* CÔTÉ DROIT : Image Background sans overlay + Cartes sans flou */}
      {/* ------------------------------------------------ */}
      <div className="w-full lg:w-7/12 relative min-h-[60vh] lg:min-h-screen flex items-end justify-center lg:justify-start">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Intérieur design" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
        </div>

        {/* Ligne horizontale directrice */}
        <div className="absolute top-[42%] left-0 right-10 h-px bg-white/20 z-10 hidden md:block"></div>

        {/* Grille des Cartes Interactives */}
        <div className="relative z-20 w-full grid grid-cols-1 md:grid-cols-3 gap-0 max-w-5xl pb-10 lg:pb-24 px-6 lg:px-0">
          {SOLUTIONS.map((solution, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={solution.title} 
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  cursor-pointer transition-all duration-300 ease-out p-6 lg:p-8 relative
                  border-t
                  ${isActive 
                    ? 'bg-oe-navy border-t-oe-yellow lg:-translate-y-8 shadow-2xl z-30' 
                    : 'bg-oe-navy/90 border-t-white/30 hover:bg-oe-navy z-10'
                  }
                `}
              >
                {/* Numéro agrandi */}
                <span className={`font-display text-lg block mb-6 transition-colors duration-300 ${isActive ? 'text-oe-yellow' : 'text-white/50'}`}>
                  {solution.icon}.
                </span>
                
                {/* Titre agrandi et plus lisible */}
                <h3 className={`font-sans text-sm md:text-base font-bold tracking-widest uppercase mb-3 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/90'}`}>
                  {solution.title}
                </h3>
                
                {/* Sous-titre */}
                <p className={`font-sans text-xs md:text-sm font-semibold mb-4 transition-colors duration-300 ${isActive ? 'text-oe-yellow/90' : 'text-white/60'}`}>
                  {solution.tagline}
                </p>
                
                {/* Description agrandie */}
                <p className={`font-sans text-xs md:text-sm leading-relaxed transition-all duration-300 ${isActive ? 'text-white/90 opacity-100' : 'text-white/70 opacity-90'}`}>
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  )
}

export default SolutionsTeaser