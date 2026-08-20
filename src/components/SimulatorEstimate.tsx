import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import solarreal from '../assets/photos/solarreal.jpg'

type Profile = 'home' | 'business'

// Points médians (en €) utilisés pour le calcul, alignés sur les tranches affichées
// (simulator.homeTiers / simulator.businessTiers). Les tranches viennent de la logique
// du simulateur de reneworld.mu, adaptées à l'euro pour rester cohérentes avec le reste
// du site (le formulaire de contact demande déjà la facture en €).
const TIER_MIDPOINTS: Record<Profile, number[]> = {
  home: [40, 75, 125, 175, 250, 350],
  business: [225, 400, 650, 1000, 1600, 2500],
}

// Hypothèses de calcul, volontairement simples et transparentes :
// - ~80% d'économie sur la facture (cohérent avec hero.stat1 "85%" et la FAQ "plus de 80%")
// - puissance recommandée ≈ facture / 30, arrondie, avec un plancher de 2 kWc
// Résultat toujours présenté comme une estimation indicative à confirmer lors d'une étude.
const SAVINGS_RATE = 0.8

function computeEstimate(billMid: number) {
  const recommendedKwc = Math.max(2, Math.round(billMid / 30))
  const newBill = Math.round(billMid * (1 - SAVINGS_RATE))
  const monthlySavings = billMid - newBill
  const twentyYearSavings = Math.round(monthlySavings * 12 * 20)
  return { recommendedKwc, newBill, twentyYearSavings }
}

export type SimulatorResult = {
  profileLabel: string
  billLabel: string
  recommendedKwc: number
  newBill: number
  twentyYearSavings: number
}

function SimulatorEstimate({ onComplete }: { onComplete: (result: SimulatorResult) => void }) {
  const { t, i18n } = useTranslation()
  const fmtEuro = (value: number) => `${value.toLocaleString(i18n.language)} €`
  const [step, setStep] = useState<0 | 1 | 2>(0)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [tierIndex, setTierIndex] = useState<number | null>(null)

  const homeTiers = t('simulator.homeTiers', { returnObjects: true }) as string[]
  const businessTiers = t('simulator.businessTiers', { returnObjects: true }) as string[]
  const tierLabels = profile === 'business' ? businessTiers : homeTiers

  const selectProfile = (value: Profile) => {
    setProfile(value)
    setTierIndex(null)
    setStep(1)
  }

  const selectTier = (index: number) => {
    setTierIndex(index)
    setStep(2)
  }

  const restart = () => {
    setProfile(null)
    setTierIndex(null)
    setStep(0)
  }

  const estimate =
    profile !== null && tierIndex !== null
      ? computeEstimate(TIER_MIDPOINTS[profile][tierIndex])
      : null

  const handleComplete = () => {
    if (!profile || tierIndex === null || !estimate) return
    onComplete({
      profileLabel: profile === 'business' ? t('simulator.profileBusinessLabel') : t('simulator.profileHomeLabel'),
      billLabel: tierLabels[tierIndex],
      recommendedKwc: estimate.recommendedKwc,
      newBill: estimate.newBill,
      twentyYearSavings: estimate.twentyYearSavings,
    })
  }

  return (
    <div className="relative overflow-hidden border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm sm:p-10">
      {/* Photo de fond du simulateur, assombrie pour rester lisible derrière le panneau vitré */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${solarreal})` }}
      />
      <div className="absolute inset-0 z-0 bg-oe-navy/85" />

      <div className="relative z-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
            {t('simulator.eyebrow')}
          </span>
          <h2 className="font-display mt-2 text-2xl uppercase tracking-wide text-white sm:text-3xl">
            {t('simulator.title')}
          </h2>
          <p className="mt-2 max-w-xl font-sans text-sm font-light text-white/70">
            {t('simulator.description')}
          </p>
        </div>

        {/* Indicateur d'étapes */}
        <div className="flex shrink-0 items-center gap-2">
          {[0, 1, 2].map((dot) => (
            <span
              key={dot}
              className={`h-1.5 w-8 rounded-full transition-colors duration-300 ${
                dot <= step ? 'bg-oe-yellow' : 'bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-8 min-h-[220px] overflow-hidden">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">
                {t('simulator.step1Label')}
              </p>
              <p className="mt-2 font-display text-lg uppercase tracking-wide text-white">
                {t('simulator.step1Question')}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => selectProfile('home')}
                  className="group flex flex-col items-start gap-1 border border-white/15 bg-white/5 p-5 text-left transition-all duration-300 hover:border-oe-yellow hover:bg-white/10"
                >
                  <svg className="h-7 w-7 text-oe-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
                  </svg>
                  <span className="mt-2 font-display text-lg uppercase tracking-wide text-white">
                    {t('simulator.profileHomeLabel')}
                  </span>
                  <span className="font-sans text-xs text-white/50">{t('simulator.profileHomeDesc')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => selectProfile('business')}
                  className="group flex flex-col items-start gap-1 border border-white/15 bg-white/5 p-5 text-left transition-all duration-300 hover:border-oe-yellow hover:bg-white/10"
                >
                  <svg className="h-7 w-7 text-oe-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M3 21h18M5 21V7l7-4 7 4v14M9 9h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1" />
                  </svg>
                  <span className="mt-2 font-display text-lg uppercase tracking-wide text-white">
                    {t('simulator.profileBusinessLabel')}
                  </span>
                  <span className="font-sans text-xs text-white/50">{t('simulator.profileBusinessDesc')}</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">
                {t('simulator.step2Label')}
              </p>
              <p className="mt-2 font-display text-lg uppercase tracking-wide text-white">
                {t('simulator.step2Question')}
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {tierLabels.map((label, index) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => selectTier(index)}
                    className="border border-white/15 bg-white/5 px-4 py-2.5 font-sans text-sm font-semibold text-white transition-all duration-300 hover:border-oe-yellow hover:bg-oe-yellow hover:text-oe-navy"
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="mt-6 font-sans text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-oe-yellow"
              >
                ← {t('simulator.back')}
              </button>
            </motion.div>
          )}

          {step === 2 && estimate && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
                {t('simulator.resultLabel')}
              </p>
              <p className="mt-2 font-display text-lg uppercase tracking-wide text-white">
                {t('simulator.resultTitle')}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div className="border border-oe-yellow/30 bg-oe-yellow/5 p-4">
                  <p className="font-display text-2xl text-oe-yellow">{estimate.recommendedKwc} kWc</p>
                  <p className="mt-1 font-sans text-xs text-white/60">{t('simulator.resultKwcLabel')}</p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl text-white">{fmtEuro(estimate.newBill)}</p>
                  <p className="mt-1 font-sans text-xs text-white/60">{t('simulator.resultNewBillLabel')}</p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-2xl text-white">{fmtEuro(estimate.twentyYearSavings)}</p>
                  <p className="mt-1 font-sans text-xs text-white/60">{t('simulator.resultSavingsLabel')}</p>
                </div>
              </div>

              <p className="mt-4 font-sans text-xs leading-relaxed text-white/40">
                {t('simulator.resultDisclaimer')}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={handleComplete}
                  className="bg-oe-yellow px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-widest text-oe-navy transition duration-300 hover:bg-white"
                >
                  {t('simulator.ctaGetStudy')}
                </button>
                <button
                  type="button"
                  onClick={restart}
                  className="font-sans text-xs font-bold uppercase tracking-widest text-white/50 transition-colors hover:text-oe-yellow"
                >
                  {t('simulator.restart')}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default SimulatorEstimate
