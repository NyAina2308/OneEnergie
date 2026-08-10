import React from "react";
import { motion, type Variants } from "framer-motion";

export const ProgressiveText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  // On découpe la phrase en mots (chaque mot restera groupé pour ne jamais être coupé en plein milieu)
  const words = text.split(' ');

  // Configuration de l'animation globale (le conteneur)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Délai entre l'apparition de chaque lettre
      },
    },
  };

  // Configuration de l'animation pour chaque lettre
  const letterVariants : Variants = {
    hidden: { opacity: 0, y: 20 }, // Part d'un peu plus bas et transparent
    visible: { 
      opacity: 1, 
      y: 0, // Remonte à sa position normale
      transition: { type: "spring", damping: 12, stiffness: 100 }
    },
  };

  return (
    // motion.span est un élément HTML "boosté" par Framer Motion
    <motion.span
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible" // Se déclenche quand ça apparaît à l'écran !
      viewport={{ once: true }} // Ne se joue qu'une seule fois
      style={{ display: "inline-block" }}
    >
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          {/* Chaque mot est un bloc insécable : les lettres qui le composent ne peuvent pas se retrouver sur deux lignes */}
          <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            {Array.from(word).map((letter, letterIndex) => (
              <motion.span
                key={letterIndex}
                variants={letterVariants}
                style={{ display: "inline-block" }}
              >
                {letter}
              </motion.span>
            ))}
          </span>
          {wordIndex < words.length - 1 && (
            <motion.span variants={letterVariants} style={{ display: "inline-block", whiteSpace: "pre" }}>
              {" "}
            </motion.span>
          )}
        </React.Fragment>
      ))}
    </motion.span>
  );
};