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
          <h1>Mentions légales</h1>
        </div>
        <div className={styles.layout}>
          <nav></nav>
          <section></section>
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
