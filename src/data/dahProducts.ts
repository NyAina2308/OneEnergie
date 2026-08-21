import { useTranslation } from 'react-i18next'
import moduleImg from '../assets/products/dah-module-v6-dhn-66z20-dg.png'
import inverterImg from '../assets/products/dah-onduleur-hybride-monophase.jpg'

export type DahProduct = {
  imageUrl: string
  productUrl: string
  reference: string
  category: string
  name: string
  description: string
  highlights: string[]
}

type TranslatedProduct = {
  category: string
  name: string
  description: string
  highlights: string[]
}

// La référence constructeur, la photo et le lien vers la fiche DAH Solar sont
// identiques dans les deux langues ; le reste vient de "dahsolar.products",
// dans le même ordre (même principe que les articles du guide).
const PRODUCT_META = [
  {
    reference: 'DHN-66Z20-DG',
    imageUrl: moduleImg,
    productUrl: 'https://en.dahsolar.com/prodetails/2011776838189260800.html',
  },
  {
    reference: 'DHN-LVEH3P8~12K-G1',
    imageUrl: inverterImg,
    productUrl: 'https://en.dahsolar.com/prodetails/1935228198408757248.html',
  },
]

export function useDahProducts(): DahProduct[] {
  const { t } = useTranslation()
  const translated = t('dahsolar.products', { returnObjects: true }) as TranslatedProduct[]

  return PRODUCT_META.map((meta, index) => ({
    ...meta,
    ...translated[index],
  }))
}
