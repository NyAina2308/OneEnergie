import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { fadeUp, revealViewport } from '../lib/motion'

/**
 * Generic scroll-reveal wrapper: fades + slides an element up into place the
 * first time it enters the viewport. Use for section headers, paragraphs,
 * standalone blocks — anything that isn't part of a staggered grid.
 */
function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
      variants={fadeUp}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
