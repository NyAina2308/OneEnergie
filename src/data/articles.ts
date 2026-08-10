export type Article = {
  slug: string
  imageUrl: string
  title: string
  excerpt: string
  readTime: string
  sections: { heading: string; body: string[] }[]
}

export const ARTICLES: Article[] = [
  {
    slug: 'comprendre-sa-facture-et-les-aides-a-la-reunion',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxqA5wdanDwgqGXplI_aODrULdfItlclaFkA&s',
    title: 'Comprendre sa facture et les aides à La Réunion',
    excerpt:
      'Talon de consommation, kilowattheure, aides EDF : on démonte le jargon pour vous montrer ce qui compte vraiment.',
    readTime: '5 min',
    sections: [
      {
        heading: 'Ce que votre facture ne vous dit pas',
        body: [
          "Une facture EDF liste des kilowattheures et des abonnements, mais elle ne dit jamais ce qui, chez vous, fait vraiment grimper la note : la clim de l'après-midi, le cuiseur à riz, le ballon d'eau chaude qui tourne en continu.",
          "On préfère partir de votre quotidien plutôt que de votre relevé : quels appareils, à quelles heures, pour quel usage.",
        ],
      },
      {
        heading: 'Les aides disponibles, sans en faire l’argument numéro un',
        body: [
          "EDF peut financer une partie de votre installation et racheter votre surplus de production pendant 20 ans. Ces aides existent, elles sont réelles, mais elles ne remplacent pas un dimensionnement pensé pour votre usage.",
          "On vous présente ce qui est mobilisable pour votre situation avant de parler matériel — jamais l'inverse.",
        ],
      },
      {
        heading: 'Un exemple concret',
        body: [
          "Un foyer qui payait 150€/mois peut, selon son profil de consommation, redescendre autour de 22€/mois une fois équipé — soit en moyenne 30 000€ d'économies sur 20 ans. Chaque foyer est différent : c'est justement pour ça qu'on étudie le vôtre en particulier.",
        ],
      },
    ],
  },
  {
    slug: 'comment-bien-comparer-deux-devis-solaires',
    imageUrl: 'https://www.datocms-assets.com/106226/1767978011-devis-panneau-solaire.png',
    title: 'Comment bien comparer deux devis solaires',
    excerpt:
      'Deux devis, deux prix, deux promesses différentes. Voici les questions à poser avant de signer quoi que ce soit.',
    readTime: '4 min',
    sections: [
      {
        heading: 'Le prix seul ne veut rien dire',
        body: [
          "Un devis moins cher peut cacher un dimensionnement calculé sur la surface de votre toit plutôt que sur votre consommation réelle — vous produisez, mais vous ne consommez pas ce que vous produisez.",
          "Demandez toujours : sur quelle base la puissance a-t-elle été calculée ?",
        ],
      },
      {
        heading: 'Les questions à poser systématiquement',
        body: [
          "La résistance du matériel est-elle certifiée pour la saison cyclonique ? Quelle est la durée réelle de la garantie, et que couvre-t-elle précisément ? Qui reste joignable après l'installation, et sous quel délai ?",
          "Un installateur sérieux répond à ces questions clairement, sans détourner vers « les aides de l'État » comme unique argument.",
        ],
      },
      {
        heading: 'Le bon réflexe',
        body: [
          "Mettez les deux devis côte à côte et comparez ligne par ligne : puissance installée, stockage proposé, garanties, délai d'intervention en cas de panne. Si un point reste flou, c'est le bon moment pour poser la question — pas après la signature.",
        ],
      },
    ],
  },
]

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((article) => article.slug === slug)
}