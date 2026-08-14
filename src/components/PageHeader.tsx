import React from 'react'
import { motion, type Variants } from 'framer-motion'

export const ProgressiveText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const words = text.split(' ')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.03 } },
  }

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', damping: 12, stiffness: 100 }
    },
  }

  return (
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{ display: 'inline-block' }}
    >
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span 
                key={`${wordIndex}-${letterIndex}`} 
                variants={letterVariants}
                style={{ display: 'inline-block' }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </motion.span>
  )
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: [0.16, 1, 0.3, 1] },
  }),
}

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  backgroundImage?: string
  
  // Props dynamiques pour la section citation
  quoteHighlight?: string
  quoteText?: string
  quoteAuthor?: string
  quoteImage?: string
}

function PageHeader({
  eyebrow,
  title,
  description,
  backgroundImage,
  quoteHighlight,
  quoteText,
  quoteAuthor,
  quoteImage
}: PageHeaderProps) {
  return (
    <section className="relative bg-oe-navy pt-32 md:pt-44 overflow-hidden flex flex-col font-sans">
      
      {/* 1. Image de fond : Hauteur ajustée + dégradé vers oe-navy */}
      {backgroundImage && (
        <div className="absolute top-0 inset-x-0 h-[450px] md:h-[550px] z-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Fondu progressif vers la couleur unie oe-navy */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oe-navy/40 to-oe-navy" />
        </div>
      )}

      {/* 2. Overlays blancs continus (Version précédente rétablie) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <svg 
          className="w-full h-full min-w-[900px]" 
          viewBox="0 0 1440 1000" 
          preserveAspectRatio="none"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Couche 1 (30% opacité) */}
          <path 
            d="M0,0 L940,0 C1140,220 850,550 450,750 C220,850 0,880 0,920 Z" 
            className="fill-white/30" 
          />
          {/* Couche 2 (60% opacité) */}
          <path 
            d="M0,0 L800,0 C980,200 700,480 350,680 C150,770 0,800 0,830 Z" 
            className="fill-white/60" 
          />
          {/* Couche 3 (95% opacité) */}
          <path 
            d="M0,0 L680,0 C840,180 580,420 260,600 C100,680 0,710 0,740 Z" 
            className="fill-white/95" 
          />
        </svg>
      </div>

      {/* 3. Contenu Principal (Header / Title) */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full md:px-12 pb-16 md:pb-20">
        <div className="max-w-xl text-left py-4">
          
          <motion.p 
            custom={0.1} initial="hidden" animate="visible" variants={fadeInVariants}
            className="text-xs sm:text-sm tracking-wider text-gray-500 font-bold uppercase mb-4 flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-oe-yellow shadow-sm"></span>
            {eyebrow}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-gray-900 font-extrabold drop-shadow-sm">
            <ProgressiveText text={title} />
          </h1>

          {description && (
            <motion.p 
              custom={0.4} initial="hidden" animate="visible" variants={fadeInVariants}
              className="mt-6 max-w-lg text-base md:text-lg text-gray-600 leading-relaxed font-normal"
            >
              {description}
            </motion.p>
          )}

        </div>
      </div>

      {/* 4. Section Citation : Positionnée en z-30 au-dessus des overlays (z-10) */}
      {(quoteText || quoteHighlight) && (
        <section className="relative z-30 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative z-30 flex flex-col items-center gap-8 border border-white/15 bg-oe-navy/90 backdrop-blur-md rounded-3xl p-8 text-center shadow-2xl sm:p-10 md:flex-row md:text-left"
            >
              {quoteImage && (
                <img
                  src={quoteImage}
                  alt="Mascotte One Énergie"
                  className="w-32 shrink-0 drop-shadow-md sm:w-40"
                />
              )}
              <div>
                <p className="font-display text-lg font-medium leading-relaxed text-white sm:text-xl">
                  {quoteHighlight && (
                    <span className="text-oe-yellow">{quoteHighlight} </span>
                  )}
                  {quoteText}
                </p>
                {quoteAuthor && (
                  <p className="mt-4 font-sans text-sm font-bold uppercase tracking-widest text-white/50">
                    {quoteAuthor}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

    </section>
  )
}

export default PageHeader