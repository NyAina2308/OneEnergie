import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import specsPhoto from '../assets/products/dah-onduleur-specs-recompose.png'

function RealtimeTracking() {
  const { t } = useTranslation()

  return (
    <section id="suivi-temps-reel" className="border-t border-white/10 bg-oe-navy py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
            {t('realtime.eyebrow')}
          </span>
          <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
            {t('realtime.title')}
          </h2>
          <p className="mt-5 font-sans font-light leading-relaxed text-white/70">
            {t('realtime.description')}
          </p>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          className="mt-14"
        >
          <img
            src={specsPhoto}
            alt={t('realtime.visualAlt')}
            className="mx-auto w-full max-w-3xl border border-white/10 shadow-2xl"
          />
          <figcaption className="mt-2 text-center font-sans text-[11px] leading-relaxed text-white/35">
            {t('realtime.caption')}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

export default RealtimeTracking
