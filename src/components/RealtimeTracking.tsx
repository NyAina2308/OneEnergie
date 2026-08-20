import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

// Illustration : maquette d'un écran de suivi de production, affichée comme une
// photo. Rien n'est branché sur de vraies données — c'est un visuel de page.
// Dessinée en SVG inline (et non en .png) pour rester nette sur tous les écrans
// et pour hériter des polices du site.

// Courbe de production d'une journée type (générée en Catmull-Rom pour rester lisse).
const CURVE =
  'M94 406C105.9 404 141.5 400.3 165.2 393.8C188.9 387.3 212.7 377.5 236.4 367C260.1 356.4 283.9 341.3 307.6 330.4C331.3 319.4 355.1 308.8 378.8 301.1C402.5 293.4 426.3 285.4 450 284C473.7 282.6 497.5 286.8 521.2 292.5C544.9 298.2 568.7 308.4 592.4 318.2C616.1 327.9 639.9 340.1 663.6 351.1C687.3 362.1 711.1 375.3 734.8 384C758.5 392.8 794.1 400.3 806 403.6'
const CURVE_AREA = `${CURVE}L806 406L94 406Z`

// Heures affichées sous le graphe (universelles, donc hors i18n).
const HOURS = [
  { x: 94, label: '06' },
  { x: 236.4, label: '09' },
  { x: 378.8, label: '12' },
  { x: 521.2, label: '15' },
  { x: 663.6, label: '18' },
  { x: 806, label: '21' },
]

const DONUT_R = 40
const DONUT_C = 2 * Math.PI * DONUT_R
const SELF_USE = 0.78

function MonitorVisual() {
  const { t } = useTranslation()

  const TILES = [
    { x: 70, label: t('realtime.dashPower'), value: t('realtime.powerValue') },
    { x: 330, label: t('realtime.dashBattery'), value: t('realtime.batteryValue'), bar: 0.92 },
    { x: 590, label: t('realtime.dashMonth'), value: t('realtime.monthValue') },
  ]

  return (
    <motion.svg
      viewBox="0 0 900 660"
      className="h-auto w-full"
      role="img"
      aria-label={t('realtime.visualAlt')}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <defs>
        <linearGradient id="rt-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1c2532" />
          <stop offset="100%" stopColor="#0c1119" />
        </linearGradient>
        <linearGradient id="rt-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0d2650" />
          <stop offset="100%" stopColor="#071a33" />
        </linearGradient>
        <linearGradient id="rt-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5de19" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f5de19" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="rt-glare" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
          <stop offset="55%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="rt-shadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="rt-halo" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f5de19" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#f5de19" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo et ombre portée : posent la tablette dans la page */}
      <motion.ellipse
        cx="450"
        cy="320"
        rx="440"
        ry="330"
        fill="url(#rt-halo)"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <ellipse cx="450" cy="638" rx="330" ry="20" fill="url(#rt-shadow)" />

      {/* Châssis */}
      <rect x="20" y="20" width="860" height="600" rx="28" fill="url(#rt-body)" />
      <rect
        x="20.5"
        y="20.5"
        width="859"
        height="599"
        rx="27.5"
        fill="none"
        stroke="#3a4759"
        strokeWidth="1"
      />
      <circle cx="32" cy="320" r="3.5" fill="#38455a" />

      {/* Écran */}
      <rect x="44" y="44" width="812" height="552" rx="10" fill="url(#rt-screen)" />

      <g className="font-sans">
        {/* --- En-tête --- */}
        <rect x="70" y="70" width="26" height="26" rx="6" fill="#f5de19" />
        <path d="M84 76l-7 9h4.5l-1.5 7 7-9h-4.5l1.5-7z" fill="#0a1f3d" />
        <text
          x="106"
          y="88"
          fill="#ffffff"
          fontSize="12.5"
          fontWeight="700"
          letterSpacing="0.14em"
        >
          ONE ÉNERGIE
        </text>

        <rect
          x="730"
          y="70"
          width="100"
          height="26"
          rx="13"
          fill="#f5de19"
          fillOpacity="0.12"
          stroke="#f5de19"
          strokeOpacity="0.4"
        />
        <motion.circle
          cx="747"
          cy="83"
          r="4"
          fill="#f5de19"
          animate={{ opacity: [1, 0.35, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <text
          x="759"
          y="87"
          fill="#f5de19"
          fontSize="9.5"
          fontWeight="700"
          letterSpacing="0.12em"
        >
          {t('realtime.live')}
        </text>

        <line x1="70" y1="116" x2="830" y2="116" stroke="#ffffff" strokeOpacity="0.1" />

        {/* --- Production du jour --- */}
        <text
          x="70"
          y="150"
          fill="#ffffff"
          fillOpacity="0.5"
          fontSize="10.5"
          fontWeight="600"
          letterSpacing="0.18em"
        >
          {t('realtime.dashToday')}
        </text>
        <text x="70" y="207" fill="#ffffff">
          <tspan className="font-display" fontSize="56">
            {t('realtime.heroValue')}
          </tspan>
          <tspan dx="10" fontSize="18" fontWeight="600" fill="#f5de19">
            kWh
          </tspan>
        </text>
        <text x="70" y="232" fill="#f5de19" fontSize="12" fontWeight="600">
          ▲ {t('realtime.heroDelta')}
        </text>

        {/* --- Autoconsommation --- */}
        <circle
          cx="772"
          cy="180"
          r={DONUT_R}
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.1"
          strokeWidth="12"
        />
        <motion.circle
          cx="772"
          cy="180"
          r={DONUT_R}
          fill="none"
          stroke="#0576e8"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={DONUT_C}
          transform="rotate(-90 772 180)"
          variants={{
            hidden: { strokeDashoffset: DONUT_C },
            visible: {
              strokeDashoffset: DONUT_C * (1 - SELF_USE),
              transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 },
            },
          }}
        />
        <text
          x="772"
          y="186"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="18"
          fontWeight="700"
        >
          {t('realtime.selfUseValue')}
        </text>
        <text
          x="772"
          y="242"
          textAnchor="middle"
          fill="#ffffff"
          fillOpacity="0.5"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="0.14em"
        >
          {t('realtime.dashSelfUse')}
        </text>

        {/* --- Courbe de la journée --- */}
        <rect
          x="70"
          y="266"
          width="760"
          height="178"
          fill="#ffffff"
          fillOpacity="0.04"
          stroke="#ffffff"
          strokeOpacity="0.08"
        />
        <text x="88" y="282" fill="#ffffff" fillOpacity="0.35" fontSize="9" fontWeight="600">
          kW
        </text>
        {[284, 325, 366, 406].map((y) => (
          <line key={y} x1="94" y1={y} x2="806" y2={y} stroke="#ffffff" strokeOpacity="0.06" />
        ))}

        <motion.path
          d={CURVE_AREA}
          fill="url(#rt-area)"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.6, delay: 1.1 } },
          }}
        />
        <motion.path
          d={CURVE}
          fill="none"
          stroke="#f5de19"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={{
            hidden: { pathLength: 0 },
            visible: { pathLength: 1, transition: { duration: 1.3, ease: 'easeOut', delay: 0.15 } },
          }}
        />

        {/* Pic de production */}
        <motion.g
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 0.4, delay: 1.3 } },
          }}
        >
          <line
            x1="450"
            y1="290"
            x2="450"
            y2="406"
            stroke="#f5de19"
            strokeOpacity="0.35"
            strokeDasharray="3 4"
          />
          <rect x="412" y="250" width="76" height="24" fill="#f5de19" />
          <text x="450" y="266" textAnchor="middle" fill="#0a1f3d" fontSize="11" fontWeight="700">
            {t('realtime.peakValue')}
          </text>
          <motion.circle
            cx="450"
            cy="284"
            r="5"
            fill="#f5de19"
            fillOpacity="0.35"
            animate={{ r: [5, 14, 5], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut', delay: 1.5 }}
          />
          <circle cx="450" cy="284" r="5" fill="#f5de19" stroke="#0a1f3d" strokeWidth="3" />
        </motion.g>

        {HOURS.map((hour) => (
          <text
            key={hour.label}
            x={hour.x}
            y="428"
            textAnchor="middle"
            fill="#ffffff"
            fillOpacity="0.4"
            fontSize="9.5"
            fontWeight="600"
          >
            {hour.label}
          </text>
        ))}

        {/* --- Indicateurs --- */}
        {TILES.map((tile) => (
          <g key={tile.label}>
            <rect
              x={tile.x}
              y="464"
              width="240"
              height="92"
              fill="#ffffff"
              fillOpacity="0.04"
              stroke="#ffffff"
              strokeOpacity="0.08"
            />
            <text
              x={tile.x + 20}
              y="492"
              fill="#ffffff"
              fillOpacity="0.45"
              fontSize="9.5"
              fontWeight="600"
              letterSpacing="0.14em"
            >
              {tile.label}
            </text>
            <text x={tile.x + 20} y="528" className="font-display" fontSize="24" fill="#ffffff">
              {tile.value}
            </text>
            {tile.bar !== undefined && (
              <>
                <rect
                  x={tile.x + 20}
                  y="538"
                  width="200"
                  height="5"
                  fill="#ffffff"
                  fillOpacity="0.12"
                />
                <motion.rect
                  x={tile.x + 20}
                  y="538"
                  height="5"
                  fill="#f5de19"
                  variants={{
                    hidden: { width: 0 },
                    visible: {
                      width: 200 * tile.bar,
                      transition: { duration: 1, ease: 'easeOut', delay: 0.5 },
                    },
                  }}
                />
              </>
            )}
          </g>
        ))}
      </g>

      {/* Reflet de la dalle */}
      <path d="M44 44h812v230L44 596z" fill="url(#rt-glare)" pointerEvents="none" />
    </motion.svg>
  )
}

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
          <MonitorVisual />
          <figcaption className="mt-2 text-center font-sans text-[11px] leading-relaxed text-white/35">
            {t('realtime.caption')}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

export default RealtimeTracking
