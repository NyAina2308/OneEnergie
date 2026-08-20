import { useEffect, useState } from 'react'
import { animate } from 'motion/react'

/**
 * Animates a number counting up from 0 to `value` on mount.
 * `prefix`/`suffix` render as static text around the animated digits
 * (e.g. value=85 suffix="%", or value=20 suffix=" ans").
 *
 * Pas de déclenchement au scroll (useInView) : les deux usages de ce
 * composant sont toujours au-dessus de la ligne de flottaison, et le
 * scroll-triggering (testé avec useInView de motion/react, puis avec un
 * IntersectionObserver natif) provoquait un bug reproductible où le tout
 * premier chiffre de la page restait bloqué à 0 — son callback initial
 * remontait « pas encore visible », et aucun callback suivant ne venait
 * corriger l'état une fois l'élément réellement affiché. On anime donc
 * simplement au montage, ce qui est fiable et suffisant ici.
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
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [value, duration])

  return (
    <span className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default CountUp
