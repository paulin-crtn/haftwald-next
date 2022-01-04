/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/LandingConfirmation.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import logo from "../public/img/logo.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const LandingConfirmation: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className={styles.pageIllustration}>
      <div className={styles.pageBackground}>
        {/* ------------------------------------------------------------------------ */
        /*                                  HTML HEAD                                 */
        /* -------------------------------------------------------------------------- */}
        <Head>
          <title>Confirmation envoi demande de contact | Haftwald</title>
          <meta
            name="description"
            content="Confirmation envoi demande de contact."
          />
        </Head>

        {/* ------------------------------------------------------------------------- */
        /*                                    MAIN                                    */
        /* -------------------------------------------------------------------------- */}
        <main className={styles.container}>
          <section className={styles.wrapper}>
            <div className={styles.logoContainer}>
              <Link href="/" passHref>
                <a>
                  <figure className={styles.logo}>
                    <Image
                      src={logo}
                      alt="logo haftwald développeur web freelance"
                      quality={100}
                    />
                  </figure>
                </a>
              </Link>
            </div>
            <h1>Merci pour votre demande</h1>
            <p>
              Nous vous recontacterons sous 2 jours ouvrés afin d’échanger sur
              votre projet.
            </p>
            <div className={styles.buttons}>
              <button>
                <Link href="/" passHref>
                  Visiter le site
                </Link>
              </button>
              <button>
                <Link href="https://www.google.com" passHref>
                  Google
                </Link>
              </button>
            </div>
          </section>
        </main>

        {/* ------------------------------------------------------------------------- */
        /*                                   FOOTER                                   */
        /* -------------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default LandingConfirmation;
