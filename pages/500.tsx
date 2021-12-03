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
        <title>Erreur serveur | Haftwald</title>
        <meta name="description" content="Le serveur ne répond pas." />
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
          <h1>Erreur serveur</h1>
          <p>
            Le serveur semble rencontrer quelques difficultés. Nous vous
            invitons à réessayer dans quelques instants.
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