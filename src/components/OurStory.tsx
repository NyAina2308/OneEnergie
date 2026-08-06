import { motion } from 'motion/react'
import Reveal from './Reveal'
import { staggerContainer, fadeUp, revealViewport } from '../lib/motion'

function OurStory() {
  return (
    <section className="bg-oe-cream py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal className="text-center">
          <span className="font-sans text-sm font-bold tracking-wide text-oe-blue uppercase">
            Notre histoire
          </span>
          <h2 className="font-display mt-3 text-3xl text-oe-navy uppercase sm:text-4xl">
            Un café, avant un devis
          </h2>
        </Reveal>

        <motion.div
          className="mt-10 space-y-5 font-sans text-oe-navy/80"
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          variants={staggerContainer}
        >
          <motion.p variants={fadeUp}>
            Jean est propriétaire d'une petite maison à Sainte-Suzanne.
            Chaque mois, c'est la même boule au ventre quand il ouvre
            l'enveloppe bleue d'EDF. Sur sa table de cuisine, douze devis
            parlent de « rendement », de « rachat de surplus », de
            « subventions ». Jean est perdu — il a peur de l'arnaque, peur du
            prochain cyclone qui videra son frigo comme l'année dernière.
          </motion.p>
          <motion.p variants={fadeUp}>Et puis, on frappe à la porte.</motion.p>
          <motion.p variants={fadeUp}>
            Ce n'est pas un commercial en costume avec un discours rodé.
            C'est One Énergie — un expert en jeans et baskets qui ne regarde
            pas tout de suite le toit, mais qui s'assoit avec Jean pour
            prendre un café. Pendant une heure, on ne parle pas de kilowatts :
            on parle de sa vie, de son quotidien, de l'heure à laquelle il
            prend son premier café, de l'aquarium qu'il chérit tant.
          </motion.p>
          <motion.p variants={fadeUp}>
            Puis on lui explique, avec des mots simples, comment le soleil de
            La Réunion peut devenir son meilleur allié. On dessine, avec lui,
            une solution qui lui ressemble. Pour la première fois, Jean ne
            subit plus : il comprend.
          </motion.p>
          <motion.p variants={fadeUp}>
            Quelques semaines plus tard, le vent se lève. Première tempête
            tropicale de l'été. Le quartier est plongé dans le noir depuis
            deux jours. Mais chez Jean, la lumière reste allumée. Le frigo
            tourne, la clim rafraîchit sa chambre. Il vient de comprendre ce
            que signifie « consommer sans compter » : il n'est plus un simple
            contribuable, il est devenu producteur de sa propre liberté.
          </motion.p>
        </motion.div>

        <Reveal className="mt-10" delay={0.1}>
          <p className="font-display text-center text-xl text-oe-navy sm:text-2xl">
            One Énergie n'est pas venu pour son toit.
            <br />
            On est venu pour lui.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default OurStory
