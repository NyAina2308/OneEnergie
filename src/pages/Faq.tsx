import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import PageHeader from '../components/PageHeader'
import ContactCta from '../components/ContactCta'
import solar from '../assets/photos/solarpointing.jpg'

type FaqItem = { question: string; answer: string }

function Faq() {
  const { t } = useTranslation()
  const items = t('faq.items', { returnObjects: true }) as FaqItem[]
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <div className="min-h-screen bg-oe-navy font-sans text-white">
      <Header />
      <main>
        <PageHeader
          eyebrow={t('faq.pageEyebrow')}
          title={t('faq.pageTitle')}
          description={t('faq.pageDescription')}
          backgroundImage={solar}
        />

        <section className="border-t border-white/10 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-8">
            <div className="flex flex-col gap-3">
              {items.map((item, index) => {
                const isOpen = openIndex === index
                return (
                  <div
                    key={index}
                    className={`border transition-colors duration-300 ${
                      isOpen ? 'border-oe-yellow/40 bg-white/5' : 'border-white/10 bg-white/[0.02]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base uppercase tracking-wide text-white sm:text-lg">
                        {item.question}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 text-oe-yellow transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 font-sans text-sm leading-relaxed text-white/75 sm:text-base">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <ContactCta />
      </main>
    </div>
  )
}

export default Faq
