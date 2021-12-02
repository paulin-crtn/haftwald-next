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
const PolitiqueDeConfidentialite: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div>
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
          <h1>Politique de confidentialité & Cookies</h1>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.layout}>
            <nav>
              <ol>
                <li>
                  <a href="#data">Données personnelles</a>
                </li>
                <li>
                  <a href="#cookie">Cookies</a>
                </li>
              </ol>
            </nav>
            <section>
              <h2 id="data" className={styles.h2data}>
                1. Données personnelles
              </h2>
              <p>
                Les données personnelles sont notamment protégées par la loi n°
                78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
                l’article L. 226-13 du Code pénal et la Directive Européenne du
                24 octobre 1995.
              </p>

              <p>
                Sur le site haftwald.com, le propriétaire du site collecte
                certaines informations personnelles relatives à l’utilisateur
                afin de donner suite aux demandes de contact, de devis ou autres
                demandes relatives aux services proposées sur le site
                haftwald.com.
              </p>

              <p>
                Les informations nominatives requises sont notamment : le
                prénom, le nom de famille et l’adresse email de l’utilisateur.
                Sans ces informations, il sera impossible de donner suite à la
                demande de contact. L’utilisateur fournit ces informations en
                toute connaissance de cause, notamment lorsqu’il procède par
                lui-même à leur saisie.
              </p>

              <p>
                Les données sont conservées pour une durée maximale de deux ans
                dans une base de données mise à disposition par l’hébergeur du
                site haftwald.com. L’identité et les coordonnées de l’hébergeur
                sont disponibles sur la page des mentions légales.
              </p>

              <p>
                Aucune information personnelle de l’utilisateur du site
                haftwald.com n’est publiée à l’insu de l’utilisateur, échangée,
                transférée, cédée ou vendue sur un support quelconque à des
                tiers.
              </p>

              <p>
                Conformément aux dispositions des articles 38 et suivants de la
                loi 78-17 du 6 janvier 1978 relative à l’informatique, aux
                fichiers et aux libertés, tout utilisateur dispose d’un droit
                d’accès, de rectification, de suppression et d’opposition aux
                données personnelles le concernant. Pour l’exercer,
                l’utilisateur doit contacter l’éditeur du site dont les
                coordonnées sont disponibles sur la page des mentions légales.
              </p>

              <h2 id="cookie">2. Cookies</h2>

              <p>
                L’utilisateur est informé que lors de ses visites sur le site
                haftwald.com, un ou des cookies sont susceptible de s’installer
                automatiquement sur son ordinateur, sa tablette ou son
                smartphone.
              </p>

              <p>
                Un cookie est un fichier de petite taille, qui ne permet pas
                l’identification de l’utilisateur, mais qui enregistre des
                informations relatives à la navigation d’un ordinateur sur un
                site. Les données ainsi obtenues visent à faciliter la
                navigation ultérieure sur le site, et ont également vocation à
                permettre diverses mesures de fréquentation.
              </p>

              <p>
                Le site haftwald.com utilise des cookies analytiques. Ces
                cookies permettent de recueillir des données relatives à votre
                utilisation du site haftwald.com afin d’améliorer la performance
                et la conception de celui-ci. Ces cookies peuvent être fournis
                par un fournisseur d’outil analytique de tierce partie, mais ne
                sont utilisés qu’à des fins liées au site haftwald.com.
              </p>

              <p>
                Le paramétrage du logiciel de navigation permet d’informer de la
                présence de cookie et éventuellement, de le refuser de la
                manière suivante :
              </p>

              <ul className={styles.list}>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/kb/PH17191?viewlocale=fr_FR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fr-fr/windows/supprimer-et-g%C3%A9rer-les-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Edge
                  </a>
                </li>
              </ul>

              <p>
                Le refus d’installation d’un cookie peut entraîner
                l’impossibilité d’accéder à certains services. 
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

export default PolitiqueDeConfidentialite;
