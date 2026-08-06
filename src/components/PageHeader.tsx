import { motion } from 'motion/react'

const easeOut = [0.16, 1, 0.3, 1] as const

function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="bg-oe-blue pt-32 pb-16 md:pt-40 md:pb-20">
      <motion.div
        className="mx-auto max-w-4xl px-5 text-center md:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <span className="inline-block rounded-full bg-oe-yellow px-4 py-1.5 font-sans text-sm font-bold text-oe-navy">
          {eyebrow}
        </span>
        <h1 className="font-display mt-5 text-3xl leading-[1.1] text-white uppercase sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl font-sans text-lg text-white/90">
            {description}
          </p>
        )}
      </motion.div>
    </section>
  )
}

export default PageHeader
