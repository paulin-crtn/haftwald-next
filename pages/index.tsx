/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { Service } from "../components/Service";
import { Footer } from "../components/Footer";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Home.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import headlinesScreenshot from "../public/img/homepage.png";
import coding from "../public/img/picto/coding.png";
import search from "../public/img/picto/search.png";
import pantone from "../public/img/picto/pantone.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* ------------------------------------------------------------------------- */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>
          Développeur Web Freelance Typescript : React, Angular, Node | Haftwald
        </title>
        <meta
          name="description"
          content="Haftwald est un développeur web freelance fullstack maîtrisant les langages Javascript et Typescript ainsi que les frameworks React, Angular et Node.js"
        />
      </Head>

      {/* ------------------------------------------------------------------------- */
      /*                                   HEADER                                   */
      /* -------------------------------------------------------------------------- */}
      <Header />

      {/* ------------------------------------------------------------------------- */
      /*                                    MAIN                                    */
      /* -------------------------------------------------------------------------- */}
      <main>
        {/* -------------------------------- HEADLINES ------------------------------- */}
        <section>
          <div className={styles.headlinesContainer}>
            <div>
              <h1>
                Conception et réalisation de site internet et de logiciel métier
              </h1>
              <h2>
                Faites vous accompagner par un{" "}
                <strong>développeur web freelance</strong> pour votre{" "}
                <strong>projet web</strong>
              </h2>
              <button>Prendre contact</button>
            </div>

            <div className={styles.headlinesScreenshotWrapper}>
              <div className={styles.headlinesScreenshotInner}>
                <figure className={styles.headlinesScreenshot}>
                  <Image
                    src={headlinesScreenshot}
                    alt="VSCode screenshot"
                    placeholder="blur"
                    quality={100}
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------- SERVICES ------------------------------- */}
        <section className={styles.servicesContainer}>
          <h3 className={styles.title}>Prestations de service</h3>
          <p className={styles.subTitle}>
            Les prestations proposées couvrent l’ensemble des besoins auxquels
            vous pourriez être confronté dans le cadre de la création ou de la
            modification d’un site.
          </p>
          <div className={styles.services}>
            <Service
              title="Développement web"
              picto={coding}
              text="Intégration et développement web fullstack pour création ou modification de site internet, d’application métier ou de solution SaaS."
              modalKey="dev"
            />
            <Service
              title="Référencement naturel"
              picto={search}
              text="Optimisation du référencement afin de faire remonter le site web dans les résultats des moteurs de recherche et faire progresser son traffic."
              modalKey="seo"
            />
            <Service
              title="Maquettes graphiques"
              picto={pantone}
              text="Conception d’interfaces et d’expériences utilisateur adaptés aux besoins de l’organisation. Elaboration ou application d’une charte graphique."
              modalKey="ui"
            />
          </div>
        </section>

        {/* -------------------------------- ORGANISATION ------------------------------- */}
        <section className={styles.organisationContainer}>
          <h3 className={styles.title}>Organisation</h3>
          <p className={styles.subTitle}>
            En fonction de la nature et de la durée de la mission, la prestation
            pourra s’exercer dans vos locaux ou à distance.
          </p>
        </section>

        {/* -------------------------------- QUESTIONS ------------------------------- */}
        <section className={styles.questionContainer}>
          <h3 className={styles.title}>Questions courantes</h3>
          <p className={styles.subTitle}>
            Trouvez les réponses à la plupart des questions que vous pourriez
            vous poser.
          </p>
        </section>

        {/* -------------------------------- COMMITMENT ------------------------------- */}
        <section className={styles.commitmentContainer}>
          <h3 className={styles.title}>Engagements</h3>
        </section>

        {/* -------------------------------- ABOUT ------------------------------- */}
        <section className={styles.aboutContainer}>
          <h3 className={styles.title}>Qui suis-je ?</h3>
          <p>
            C’est en échangeant quotidiennement avec des intégrateurs et
            développeurs web lorsque j’occupais des postes de chef de projet
            digital au sein d’agences marketing que je me suis découvert un
            intérêt prononcé pour le fonctionnement technique des applications
            web.
            <br />
            Cette curiosité m’a poussé à passer les certifications « Techniques
            de développement web » et « Techniques d’intégration web » puis à
            rejoindre tour à tour deux start-up pour les accompagner dans la
            conception de leurs applications métiers réalisées sous TypeScript,
            respectivement dans le secteur médical et de la grande distribution.
            <br />
            Ce sont ces expériences et ce parcours pluridisciplinaire qui me
            permettent aujourd’hui de proposer mes compétences à des
            organisations à la recherche d’un développeur web freelance. Que
            vous cherchiez à vous faire conseiller sur un projet en cours ou à
            venir, à faire concevoir votre application web ou bien à renforcer
            vos équipes, je vous invite à me contacter afin que nous puissions
            échanger.
          </p>
        </section>
      </main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <Footer />
    </div>
  );
};

export default Home;
