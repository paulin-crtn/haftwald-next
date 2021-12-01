/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

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
      <main></main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <Footer />

      {/* ------------------------------------------------------------------------- */
      /*                            SCROLL TO TOP BUTTON                            */
      /* -------------------------------------------------------------------------- */}
      <div id="scrollToTopButton" className={styles.scrollToTopButton}>
        <Link href="/" passHref>
          <a>
            <div>&uarr;</div>
          </a>
        </Link>
      </div>
      <Script src="js/displayScrollTopButton.js"></Script>
    </div>
  );
};

export default MentionsLegales;
