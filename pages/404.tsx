/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/HttpError.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const Custom404: NextPage = () => {
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
        <section className={styles.wrapper}>
          <h1>Page non trouvée</h1>
          <p>
            La page à laquelle vous tentez d’acceder n’existe pas ou a été
            déplacée sans redirection.
          </p>
          <button>
            <Link href="/" passHref>
              Aller à l’accueil
            </Link>
          </button>
        </section>
      </main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default Custom404;
