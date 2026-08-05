import { Link } from 'react-router-dom'
import Header from './Header'
import heroPhoto from '../assets/photos/hero-installation.jpg'
import mascotte from '../assets/brand/mascotte-1.png'

const STATS = [
  { value: '85%', label: "d'économies sur la facture" },
  { value: '81%', label: 'financés par les aides EDF' },
  { value: '20 ans', label: "de revente garantie" },
]

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-oe-navy overflow-hidden flex">
      {/* Lignes de construction d'arrière-plan globales */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[65%] left-0 right-0 h-px bg-white/10"></div>
      </div>

      <Header overlay />

      {/* Barre latérale gauche (Éléments graphiques architecturaux) */}
      <aside className="hidden lg:flex w-24 h-full flex-col items-center justify-between py-24 border-r border-white/10 relative z-20 bg-oe-navy">
        <div className="flex flex-col items-center gap-5 mt-20">
          <span className="w-1.5 h-1.5 bg-oe-yellow rounded-full"></span>
          <span className="w-px h-16 bg-white/30"></span>
          <span className="w-1.5 h-1.5 bg-transparent border border-white/50 rounded-full"></span>
        </div>
        
        <div className="flex flex-col items-center gap-4">
          <span className="text-white/60 font-display text-sm">01</span>
          <div className="w-px h-24 bg-white/10 relative">
            <div className="absolute top-0 left-0 w-full h-1/3 bg-oe-yellow"></div>
          </div>
        </div>
      </aside>

      {/* Zone de contenu principal */}
      <div className="flex-1 relative z-10 flex items-center">
        
        {/* Conteneur de l'image (Limité à la droite de l'écran) */}
        <div className="absolute top-0 right-0 w-full lg:w-[85%] h-full z-0">
          <img
            src={heroPhoto}
            alt="Installation photovoltaïque"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          {/* Overlay bleuté contenu uniquement dans l'image */}
          <div className="absolute inset-0 bg-oe-navy/60 mix-blend-multiply"></div>
          {/* Dégradé pour adoucir la transition à gauche */}
          <div className="absolute inset-0 bg-gradient-to-r from-oe-navy via-oe-navy/40 to-transparent"></div>
        </div>

        {/* Bloc Texte bien délimité par dessus l'image */}
        <div className="relative z-10 pl-6 pr-6 lg:pl-24 w-full max-w-4xl mt-16 md:mt-10">
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-oe-yellow uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-px bg-oe-yellow hidden sm:block"></span>
            Le solaire, entre nous
          </p>

          <h1 className="font-display text-5xl leading-[1.05] text-white uppercase sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-wide drop-shadow-md">
            Vivez l'énergie,<br />
            <span className="text-oe-yellow font-normal">en mieux.</span>
          </h1>

          <p className="mt-8 max-w-lg font-sans text-base md:text-lg text-white/95 leading-relaxed tracking-wide drop-shadow">
            On transforme votre taxe en liberté financière — avec un expert à votre table, pas un inconnu sur votre toit.
          </p>

          {/* Call to action + Mascotte */}
          <div className="mt-12 flex items-center gap-6 md:gap-8">
            <div className="flex flex-col items-start gap-2">
              <p className="font-sans text-xs md:text-sm text-white/70 tracking-widest uppercase">
                Posez-nous vos questions
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 md:gap-6 font-sans text-sm md:text-base font-bold tracking-widest text-white uppercase group"
              >
                Demander un devis
                <span className="w-12 h-px bg-white group-hover:bg-oe-yellow group-hover:w-20 transition-all duration-300"></span>
              </Link>
            </div>
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-oe-yellow/20 rounded-full blur-md"></div>
              <img 
                src={mascotte} 
                alt="Mascotte One Énergie" 
                className="relative w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-2xl" 
              />
            </div>
          </div>

          {/* Statistiques */}
          <div className="mt-16 flex flex-wrap gap-10 md:gap-16 text-white/80 font-sans text-sm uppercase tracking-widest border-t border-white/20 pt-8 inline-flex">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-2">
                <span className="text-oe-yellow font-display text-3xl">{stat.value}</span>
                <span className="text-xs max-w-[140px] leading-snug">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero