import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useDahProducts } from '../data/dahProducts'
import dahLogo from '../assets/brand/logo-dahsolar-blanc.svg'
import onduleurInstallationPhoto from '../assets/products/dah-solar-onduleur-installation.jpg'

// Portrait de DAH Solar dans Le Figaro, ouvert derrière le logo du fournisseur.
const FIGARO_ARTICLE_URL =
  'https://www.lefigaro.fr/economie/dah-solar-le-specialiste-des-modules-photovoltaiques-innovants-et-des-kits-solaires-tout-en-un-20250324'

function DahSolarRange() {
  const { t } = useTranslation()
  const products = useDahProducts()

  return (
    <section id="materiel-dahsolar" className="border-t border-white/10 bg-oe-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-oe-yellow">
            {t('dahsolar.eyebrow')}
          </span>
          <h2 className="font-display mt-4 text-3xl uppercase text-white sm:text-4xl">
            {t('dahsolar.title')}
          </h2>
          <p className="mt-5 font-sans font-light leading-relaxed text-white/70">
            {t('dahsolar.description')}
          </p>

          <img
            src={onduleurInstallationPhoto}
            alt={t('dahsolar.installationPhotoAlt')}
            className="mx-auto mt-8 w-full max-w-lg border border-white/10 object-cover shadow-2xl"
          />

          <a
            href={FIGARO_ARTICLE_URL}
            target="_blank"
            rel="noreferrer noopener"
            title={t('dahsolar.partnerLinkTitle')}
            className="group/logo mt-10 inline-flex flex-col items-center gap-3 border border-white/10 bg-white/5 px-8 py-5 transition-colors duration-300 hover:border-oe-yellow/40 hover:bg-white/10"
          >
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
              {t('dahsolar.partnerLabel')}
            </span>
            <img src={dahLogo} alt={t('dahsolar.logoAlt')} className="h-7 w-auto" />
            <span className="font-sans text-[10px] uppercase tracking-widest text-white/40 transition-colors duration-300 group-hover/logo:text-oe-yellow">
              {t('dahsolar.partnerLinkLabel')}
            </span>
          </a>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {products.map((product, index) => (
            <motion.article
              key={product.reference}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
              className="group flex flex-col border border-white/10 bg-white/5 transition-colors duration-500 hover:border-oe-yellow/40"
            >
              {/* Visuel produit, détouré, posé sur un halo discret */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden border-b border-white/10 bg-oe-navy">
                <div className="absolute h-56 w-56 rounded-full bg-oe-yellow/10 blur-3xl" />
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  loading="lazy"
                  className="relative h-52 w-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-8">
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-oe-yellow">
                  {product.category}
                </span>
                <h3 className="font-display mt-3 text-2xl uppercase text-white">
                  {product.name}
                </h3>
                <p className="mt-1 font-sans text-xs font-semibold tracking-wider text-white/40">
                  {product.reference}
                </p>
                <p className="mt-4 font-sans text-sm leading-relaxed text-white/70">
                  {product.description}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {product.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="border border-white/15 px-3 py-1.5 font-sans text-[11px] text-white/70"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>

                <a
                  href={product.productUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  // mt-auto : les deux cartes n'ont pas le même nombre de lignes de puces,
                  // le lien est donc collé en bas pour rester aligné d'une carte à l'autre.
                  className="mt-auto inline-flex items-center gap-3 self-start pt-8 font-sans text-xs font-bold uppercase tracking-widest text-white transition-colors hover:text-oe-yellow"
                >
                  {t('dahsolar.viewSheet')}
                  <span className="h-px w-8 bg-white transition-all duration-300 group-hover:w-12 group-hover:bg-oe-yellow" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center font-sans text-[11px] text-white/35">
          {t('dahsolar.imageCredit')}
        </p>
      </div>
    </section>
  )
}

export default DahSolarRange
