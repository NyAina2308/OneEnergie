import { useState } from 'react';
import client1 from '../assets/photos/woman.jpg';
import client2 from '../assets/photos/woman2.jpg';
import { motion, type Variants } from 'framer-motion';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const TESTIMONIALS = [
  {
    id: 1,
    quote: "Enfin un installateur qui m'a expliqué les choses simplement. Ma facture EDF a été divisée par presque 5.",
    author: "Mireille P.",
    location: "Saint-Pierre",
    image: client1,
  },
  {
    id: 2,
    quote: "Une équipe réactive et un travail soigné sur le toit. Le suivi de production sur l'application est un vrai plus.",
    author: "Jean-Marc T.",
    location: "Saint-Denis",
    image: client2,
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleSlideChange = (newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setFade(true);
    }, 200);
  };

  const handleNext = () => {
    handleSlideChange((activeIndex + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    handleSlideChange((activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const activeTestimonial = TESTIMONIALS[activeIndex];

  return (
    <section className="bg-oe-navy py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-0 right-0 h-px bg-white/5"></div>
        <div className="absolute bottom-[20%] left-0 right-0 h-px bg-white/5"></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 relative z-10">
        
        <motion.div 
          custom={0.2} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-oe-yellow uppercase mb-3 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-oe-yellow hidden sm:block"></span>
            Témoignages clients
            <span className="w-8 h-px bg-oe-yellow hidden sm:block"></span>
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-wider font-light">
            Ils nous font <span className="text-oe-yellow font-normal italic">confiance</span>
          </h2>
        </motion.div>

        <motion.div 
          custom={0.4} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          
          {/* Bouton Précédent */}
          <button 
            onClick={handlePrev}
            aria-label="Témoignage précédent"
            className="hidden lg:block relative w-32 h-64 overflow-hidden group cursor-pointer focus:outline-none"
          >
            <div className="absolute inset-0 bg-oe-blue/80 mix-blend-multiply group-hover:bg-oe-navy/60 transition-colors z-10"></div>
            <img 
              src={TESTIMONIALS[(activeIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length].image} 
              alt="Précédent" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="relative z-20 h-full flex items-center justify-center text-white/60 group-hover:text-oe-yellow text-2xl transition-all group-hover:-translate-x-1">
              ←
            </div>
          </button>

          {/* Carte Active */}
          <div 
            className={`bg-oe-cream flex flex-col md:flex-row w-full max-w-4xl shadow-2xl relative transition-all duration-300 ease-in-out transform ${
              fade ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-[0.99]'
            }`}
          >
            <div className="w-full md:w-5/12 relative min-h-[320px] overflow-hidden">
              <img 
                src={activeTestimonial.image} 
                alt={activeTestimonial.author}
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oe-navy/40 via-transparent to-transparent md:hidden"></div>
            </div>
            
            <div className="w-full md:w-7/12 p-8 md:p-14 flex flex-col justify-between">
              <div>
                <span className="font-display text-6xl text-oe-yellow leading-none block mb-2 select-none">“</span>
                <p className="font-sans text-base md:text-lg text-oe-navy leading-relaxed font-light">
                  {activeTestimonial.quote}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-oe-navy/10 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-oe-navy text-sm uppercase tracking-widest">
                    {activeTestimonial.author}
                  </h4>
                  <p className="font-sans text-xs text-oe-navy/60 uppercase mt-0.5">
                    {activeTestimonial.location}
                  </p>
                </div>

                {/* Indicateurs */}
                <div className="flex gap-1.5">
                  {TESTIMONIALS.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => handleSlideChange(idx)}
                      aria-label={`Aller au témoignage ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === activeIndex ? 'w-6 bg-oe-blue' : 'w-1.5 bg-oe-navy/20 hover:bg-oe-navy/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bouton Suivant */}
          <button 
            onClick={handleNext}
            aria-label="Témoignage suivant"
            className="hidden lg:block relative w-32 h-64 overflow-hidden group cursor-pointer focus:outline-none"
          >
            <div className="absolute inset-0 bg-oe-blue/80 mix-blend-multiply group-hover:bg-oe-navy/60 transition-colors z-10"></div>
            <img 
              src={TESTIMONIALS[(activeIndex + 1) % TESTIMONIALS.length].image} 
              alt="Suivant" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="relative z-20 h-full flex items-center justify-center text-white/60 group-hover:text-oe-yellow text-2xl transition-all group-hover:translate-x-1">
              →
            </div>
          </button>

        </motion.div>

        {/* Navigation Mobile */}
        <motion.div 
          custom={0.5} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInVariants}
          className="flex justify-center items-center gap-6 mt-8 lg:hidden"
        >
          <button 
            onClick={handlePrev} 
            className="text-white/70 hover:text-oe-yellow font-sans text-sm tracking-widest uppercase transition"
          >
            ← Précédent
          </button>
          <div className="flex gap-1.5">
            {TESTIMONIALS.map((_, idx) => (
              <span 
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === activeIndex ? 'w-5 bg-oe-yellow' : 'w-1.5 bg-white/30'
                }`}
              />
            ))}
          </div>
          <button 
            onClick={handleNext} 
            className="text-white/70 hover:text-oe-yellow font-sans text-sm tracking-widest uppercase transition"
          >
            Suivant →
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Testimonials;