import { motion } from 'framer-motion'

// Icônes simples, cohérentes avec le style du reste du site (trait carré/miter)
const ICONS: Record<string, React.ReactNode> = {
  soleil: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="4" strokeWidth={2} />
      <path strokeLinecap="square" strokeWidth={2} d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  ),
  panneaux: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" strokeWidth={2} strokeLinejoin="miter" />
      <path strokeWidth={2} d="M3 12h18M9 6v12M15 6v12" />
    </svg>
  ),
  onduleur: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="5" y="4" width="14" height="16" rx="1" strokeWidth={2} strokeLinejoin="miter" />
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M8 12h2l1.5-4 2 8 1.5-4h1" />
    </svg>
  ),
  batterie: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="7" width="16" height="10" rx="1" strokeWidth={2} strokeLinejoin="miter" />
      <path strokeLinecap="square" strokeWidth={2} d="M19 10v4" />
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M11 9l-3 4h2.5l-1 3 3.5-4H10.5l.5-3z" />
    </svg>
  ),
  maison: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 11l8-7 8 7M6 10v9h12v-9" />
    </svg>
  ),
}

const NODES = [
  { key: 'soleil', label: 'Soleil' },
  { key: 'panneaux', label: 'Panneaux' },
  { key: 'onduleur', label: 'Onduleur' },
  { key: 'batterie', label: 'Batterie' },
  { key: 'maison', label: 'Maison' },
] as const

// Durée d'un aller complet du flux (soleil → maison).
const DURATION = 2.8
const PARTICLE_COUNT = 1
const STEP = DURATION / (NODES.length - 1)
// Petite pause de la particule sur la maison avant de repartir du soleil : sans ça,
// l'arrivée (pulse) et le saut instantané de fin de boucle tombaient au même instant,
// ce qui brouillait l'œil (on avait l'impression que le pulse arrivait "après coup").
const PAUSE = 0.5
const TOTAL_CYCLE = DURATION + PAUSE
const PULSE_DURATION = Math.min(0.35, TOTAL_CYCLE * 0.3)

function EnergyFlow() {
  return (
    <section className="border-t border-white/10 bg-oe-navy py-16 md:py-20 overflow-hidden">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <p className="mb-12 text-center font-sans text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">
          Le parcours de l'énergie
        </p>

        <div className="relative flex items-start justify-between">
          {/* Ligne de fond, entre le centre du 1er et du dernier nœud */}
          <div className="absolute left-[10%] right-[10%] top-7 h-px bg-white/10" />

          {/* Particules animées qui parcourent la ligne de gauche à droite */}
          <div className="absolute left-[10%] right-[10%] top-7 h-px overflow-visible">
            {Array.from({ length: PARTICLE_COUNT }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute -top-[4px] h-[9px] w-[9px] rounded-full bg-oe-yellow shadow-[0_0_10px_3px_rgba(245,222,25,0.7)]"
                initial={{ left: '0%', opacity: 0, scale: 0.6 }}
                animate={{ left: '100%', opacity: [0, 1, 1, 0], scale: [0.6, 1, 1, 0.6] }}
                transition={{
                  // Le trajet dure DURATION, puis la particule reste posée sur la maison
                  // pendant PAUSE avant de sauter instantanément au point de départ.
                  left: {
                    duration: DURATION,
                    repeat: Infinity,
                    repeatDelay: PAUSE,
                    ease: 'linear',
                    delay: i * TOTAL_CYCLE,
                  },
                  // Fondu calé sur le cycle complet (trajet + pause) : la particule reste
                  // visible pendant l'essentiel de la pause, et ne s'efface qu'un instant
                  // avant de sauter au départ — pour que le pulse d'arrivée et la disparition
                  // ne tombent plus au même moment.
                  opacity: {
                    duration: TOTAL_CYCLE,
                    repeat: Infinity,
                    ease: 'linear',
                    times: [0, 0.05, 0.92, 1],
                    delay: i * TOTAL_CYCLE,
                  },
                  scale: {
                    duration: TOTAL_CYCLE,
                    repeat: Infinity,
                    ease: 'linear',
                    times: [0, 0.05, 0.92, 1],
                    delay: i * TOTAL_CYCLE,
                  },
                }}
              >
                {/* Halo fusionné avec la particule : plus de second élément avec sa propre
                    animation, il suit désormais exactement la même position et le même fondu. */}
                <span className="absolute -inset-2.5 rounded-full bg-oe-yellow/30 blur-md" />
              </motion.span>
            ))}
          </div>

          {NODES.map((node, i) => {
            const isSun = node.key === 'soleil'
            const arrival = i * STEP

            return (
              <div key={node.key} className="relative z-10 flex w-1/5 flex-col items-center gap-3">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  {/* Anneau qui "reçoit" l'énergie au passage de chaque particule */}
                  <motion.span
                    className="absolute inset-0 rounded-full border border-oe-yellow/60"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
                    transition={{
                      duration: PULSE_DURATION,
                      repeat: Infinity,
                      repeatDelay: TOTAL_CYCLE - PULSE_DURATION,
                      ease: 'easeOut',
                      delay: arrival,
                    }}
                  />

                  {/* Cercle du nœud : pulse exactement quand une particule le traverse */}
                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-oe-navy text-oe-yellow"
                    animate={{
                      scale: [1, 1.15, 1],
                      boxShadow: [
                        '0 0 0 rgba(245,222,25,0)',
                        '0 0 14px 2px rgba(245,222,25,0.45)',
                        '0 0 0 rgba(245,222,25,0)',
                      ],
                    }}
                    transition={{
                      duration: PULSE_DURATION,
                      repeat: Infinity,
                      repeatDelay: TOTAL_CYCLE - PULSE_DURATION,
                      ease: 'easeOut',
                      delay: arrival,
                    }}
                  >
                    {isSun ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                      >
                        {ICONS[node.key]}
                      </motion.div>
                    ) : (
                      ICONS[node.key]
                    )}
                  </motion.div>
                </div>
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-white/70 sm:text-xs">
                  {node.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default EnergyFlow
