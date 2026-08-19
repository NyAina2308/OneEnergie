import { useTranslation } from 'react-i18next'

export type Article = {
  slug: string
  imageUrl: string
  title: string
  excerpt: string
  readTime: string
  sections: { heading: string; body: string[] }[]
}

type TranslatedArticle = {
  title: string
  excerpt: string
  readTime: string
  sections: { heading: string; body: string[] }[]
}

// Le slug (utilisé dans l'URL) et l'image restent stables dans les deux langues ;
// le reste du contenu (titre, texte, sections) vient des fichiers de traduction,
// dans le même ordre, sous la clé "guide.articles".
const ARTICLE_META = [
  {
    slug: 'comprendre-sa-facture-et-les-aides-a-maurice',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqA5wdanDwgqGXplI_aODrULdfItlclaFkA&s',
  },
  {
    slug: 'comment-bien-comparer-deux-devis-solaires',
    imageUrl: 'https://www.datocms-assets.com/106226/1767978011-devis-panneau-solaire.png',
  },
]

export function useArticles(): Article[] {
  const { t } = useTranslation()
  const translated = t('guide.articles', { returnObjects: true }) as TranslatedArticle[]

  return ARTICLE_META.map((meta, index) => ({
    ...meta,
    ...translated[index],
  }))
}

export function useArticleBySlug(slug: string | undefined): Article | undefined {
  const articles = useArticles()
  return articles.find((article) => article.slug === slug)
}
