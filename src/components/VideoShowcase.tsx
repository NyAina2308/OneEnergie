import { motion } from 'framer-motion'

function VideoShowcase() {
  return (
    <section className="border-t border-white/10 bg-oe-navy py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
            En vidéo
          </span>
          <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
            Voir l'énergie autrement
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 overflow-hidden border border-white/10 bg-black shadow-2xl"
        >
          <video
            src="/one-energie-presentation.mp4"
            controls
            muted
            loop
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          >
            Votre navigateur ne prend pas en charge la lecture vidéo.
          </video>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoShowcase
