import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'motion/react'

/**
 * Animates a number counting up from 0 to `value` once it scrolls into
 * view. `prefix`/`suffix` render as static text around the animated digits
 * (e.g. value=85 suffix="%", or value=20 suffix=" ans").
 */
function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1.4,
  className,
}: {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default CountUp
