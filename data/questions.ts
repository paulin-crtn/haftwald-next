/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import { IQuestion } from "../interfaces/IQuestion";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANT                                  */
/* -------------------------------------------------------------------------- */

export const questions: IQuestion[] = [
  {
    title: "Quelles sont vos disponibilités ?",
    answer:
      "Tant qu'il est possible de me joindre via le formulaire de contact c'est que je suis disponible sous moins d'un mois.",
  },
  {
    title: "Combien de temps pouvez-vous nous rejoindre ?",
    answer:
      "J'accepte des missions dont la durée s'étend de quelques jours à plusieurs mois.",
  },
  {
    title: "Quels sont les langages et frameworks que vous maîtrisez ?",
    answer:
      "Je suis spécialisé en développement front-end (Javascript, Typescript) et travaille principalement avec les frameworks React, NextJS et Angular. Je possède également des connaissances en développement back-end (Laravel) ainsi qu'en base de données (SQL et NoSQL).",
  },
  {
    title: "De combien d'années d'expérience disposez-vous ?",
    answer: "Je fais du développement web depuis plus de 2 ans.",
  },
  {
    title: "Quels sont vos tarifs ?",
    answer:
      "En fonction de la durée et de la complexité de la mission, je facture entre 320€ et 360€ HT par jour de travail.",
  },
  {
    title:
      "Pourquoi recourir à un freelance plutôt qu'à une agence web ou une ESN ?",
    answer:
      "Cela apporte un certain nombre d’avantages, dont notamment : des compétences plus adaptées à votre projet, des tarifs plus compétitifs ainsi qu’une disponibilité et une réactivité plus forte.",
  },
];
