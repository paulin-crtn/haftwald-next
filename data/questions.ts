/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import { IQuestion } from "../interfaces/IQuestion";

/* -------------------------------------------------------------------------- */
/*                                  CONSTANT                                  */
/* -------------------------------------------------------------------------- */

export const questions: IQuestion[] = [
  {
    title: "Quels sont les frameworks que vous utilisez ?",
    answer:
      "J'utilise les frameworks React, NextJS et Angular pour le développement front-end ainsi que les frameworks Laravel et NestJS pour le développement back-end et la communication avec les bases de données (SQL ou NoSQL).",
  },
  {
    title: "Développez-vous des sites avec des CMS comme Wordpress ?",
    answer:
      'Je peux développer des sites internet avec des CMS "headless" tel que Strapi ou Directus. Ces solutions techniques modernes et performantes, en plus de réduire le coût de développement, présentent un certain nombre d\'avantages en comparaison des CMS traditionnels comme Wordpress ou Drupal.',
  },
  {
    title: "De combien d'années d'expérience disposez-vous ?",
    answer:
      "Je développe des applications web depuis environ 3 ans, principalement sur les langages Javascript, Typescript et PHP.",
  },
  {
    title: "Quels sont vos tarifs ?",
    answer:
      "En fonction de la durée et de la complexité de la mission, je facture entre 300€ et 360€ HT par jour. Des forfaits ou des embauches en CDD (à temps plein ou temps partiel) sont possibles pour certains projets.",
  },
  {
    title:
      "Pourquoi recourir à un freelance plutôt qu'à une agence web ou une ESN ?",
    answer:
      "Un développeur freelance apporte un certain nombre d’avantages, dont notamment : des compétences plus adaptées au projet, des tarifs plus compétitifs ainsi qu’une disponibilité et une réactivité plus forte.",
  },
];
