/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Legal.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const MentionsLegales: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className={styles.container}>
      {/* ------------------------------------------------------------------------- */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>
          Développeur Web Freelance React, NextJS, Angular | Haftwald
        </title>
        <meta
          name="description"
          content="Haftwald est un développeur web freelance maîtrisant les langages Javascript et Typescript ainsi que les frameworks React, NextJS et Angular"
        />
      </Head>

      {/* ------------------------------------------------------------------------- */
      /*                                   HEADER                                   */
      /* -------------------------------------------------------------------------- */}
      <Header />

      {/* ------------------------------------------------------------------------- */
      /*                                    MAIN                                    */
      /* -------------------------------------------------------------------------- */}
      <main className={styles.container}>
        <div className={styles.pageTitle}>
          <h1>Mentions Légales</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.layout}>
            <nav>
              <ol>
                <li>
                  <a href="#editor">Éditeur</a>
                </li>
                <li>
                  <a href="#host">Hébergement</a>
                </li>
                <li>
                  <a href="#cgu">Conditions d’utilisation</a>
                </li>
                <li>
                  <a href="#description">Description des services fournis</a>
                </li>
                <li>
                  <a href="#property">
                    Propriété intellectuelle et contrefaçon
                  </a>
                </li>
                <li>
                  <a href="#responsability">
                    Responsabilité et limitation de responsabilité
                  </a>
                </li>
                <li>
                  <a href="#law">Lois applicables</a>
                </li>
                <li>
                  <a href="#credit">Crédits</a>
                </li>
              </ol>
            </nav>
            <section>
              <p>
                Conformément aux dispositions des articles 6-III et 19 de la Loi
                n° 2004-575 du 21 juin 2004 pour la Confiance dans l’économie
                numérique, dite L.C.E.N., nous portons à la connaissance des
                utilisateurs et visiteurs du site haftwald.com les informations
                suivantes.
              </p>

              <h2 id="editor">1. Éditeur</h2>
              <p>
                Le site haftwald.com est la propriété exclusive de Paulin
                CARATINI, agissant également sous le nom commercial
                « Haftwald », qui l’édite.
              </p>
              <p>
                Haftwald est une micro-entreprise en cours d’immatriculation.
              </p>
              <button>Contacter l’éditeur</button>

              <h2 id="host">2. Hébergement</h2>
              <p>
                Le site haftwald.com est hébergé par Vercel dont le siège
                sociale est situé :
              </p>
              <p>
                1046 Kearny St.
                <br />
                San Francisco (HQ)
                <br /> CA United States
              </p>
              <button>
                <a
                  href="https://vercel.com/contact"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contacter l’hébergeur
                </a>
              </button>

              <h2 id="cgu">3. Conditions d’utilisation</h2>
              <p>
                L’utilisation du présent site implique l’acceptation pleine et
                entière des conditions générales d’utilisation décrites
                ci-après. Ces conditions d’utilisation sont susceptibles d’être
                modifiées ou complétées à tout moment.
              </p>

              <h2 id="description">4. Description des services fournis</h2>
              <p>
                Le site haftwald.com a pour objet de fournir des informations
                concernant l’ensemble des activités de la société.{" "}
              </p>
              <p>
                Le propriétaire du site s’efforce de fournir des informations
                aussi précises que possible. Toutefois, il ne pourra être tenu
                responsable des omissions, des inexactitudes et des carences
                dans la mise à jour, qu’elles soient de son fait ou du fait des
                tiers partenaires qui lui fournissent ces informations.{" "}
              </p>
              <p>
                Toutes les informations proposées sur le site haftwald.com sont
                données à titre indicatif, sont non exhaustives, et sont
                susceptibles d’évoluer. Elles sont données sous réserve de
                modifications ayant été apportées depuis leur mise en ligne.
              </p>

              <h2 id="property">5. Propriété intellectuelle et contrefaçon</h2>
              <p>
                L’éditeur du site haftwald.com est propriétaire des droits de
                propriété intellectuelle ou détient les droits d’usage sur tous
                les éléments accessibles sur le site, notamment les textes,
                images, graphismes, logo, icônes, sons, etc.{" "}
              </p>
              <p>
                Toute reproduction, représentation, modification, publication,
                adaptation totale ou partielle des éléments du site, quel que
                soit le moyen ou le procédé utilisé, est interdite, sauf
                autorisation écrite préalable.{" "}
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l’un quelconque
                de ces éléments qu’il contient sera considérée comme
                constitutive d’une contrefaçon et poursuivie conformément aux
                dispositions des articles L.335-2 et suivants du Code de
                Propriété Intellectuelle.  
              </p>

              <h2 id="responsability">
                6. Responsabilité et limitation de responsabilité
              </h2>
              <p>
                En aucun cas l’éditeur n’entend représenter ou garantir le fait
                que le site haftwald.com est fonctionnel, est sans erreur ou
                qu’il sera possible d’y accéder sans interruption ou qu’aucun
                virus ou autre élément contaminant ou destructeur ne sera
                transmis ou qu’aucun dommage ne sera occasionné à votre système
                informatique. Il est de votre responsabilité de prendre les
                précautions requises ou de vous renseigner auprès d’un
                consultant en informatique.
              </p>
              <p>
                Le site haftwald.com peut contenir des liens vers d’autres
                sites, qui sont hors du contrôle de l’éditeur. Nous n’avons
                aucun contrôle sur la nature, le contenu et la disponibilité de
                ces sites. L’ajout de ces liens n’implique pas nécessairement
                une recommandation ni une approbation des avis qui y sont
                exprimés.
              </p>
              <p>
                Le propriétaire du site autorise les liens hypertextes vers
                l’une des pages de ce site, à condition que ceux-ci ouvrent une
                nouvelle fenêtre et soient présentés de manière non équivoque
                afin d’éviter tout risque de confusion entre le site citant et
                le propriétaire du site ainsi que toute présentation
                tendancieuse, ou contraire aux lois en vigueur. Le propriétaire
                du site se réserve le droit de demander la suppression d’un lien
                s’il estime que le site source ne respecte pas les règles ainsi
                définies.
              </p>
              <p>
                Il vous est strictement interdit d’introduire dans le site
                haftwald.com ou à partir de celui-ci, de façon volontaire ou
                autrement, des informations ou des éléments qui pourraient nuire
                au fonctionnement de ce site internet ou à ses utilisateurs.
              </p>

              <h2 id="law">7. Lois applicables</h2>
              <p>
                Les termes et conditions d’accès et d’utilisation de ce site
                Internet sont régis par les lois françaises. Vous acceptez
                d’être liés par ces lois et de vous en remettre à la compétence
                des tribunaux français en ce qui a trait à l’interprétation ou à
                l’application des termes et conditions d’utilisation du présent
                site internet.
              </p>

              <h2 id="credit">8. Crédits</h2>
              <p>
                <a
                  href="https://www.flaticon.com/fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Flaticon
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <Footer />

      {/* ------------------------------------------------------------------------- */
      /*                            SCROLL TO TOP BUTTON                            */
      /* -------------------------------------------------------------------------- */}
      <ScrollToTopButton />
    </div>
  );
};

export default MentionsLegales;
