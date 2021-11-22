/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
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
import variables from "../styles/variables.module.scss";
import styles from "../styles/Home.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import coding from "../public/img/picto/coding.png";
import search from "../public/img/picto/search.png";
import pantone from "../public/img/picto/pantone.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Développeur Web Freelance Typescript : React, Angular, Node | Haftwald
        </title>
        <meta
          name="description"
          content="Haftwald est un développeur web freelance fullstack maîtrisant les langages Javascript et Typescript ainsi que les frameworks React, Angular et Node.js"
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <section>
          <h1>
            Conception et réalisation de site internet et de logiciel métier
          </h1>
          <h2>
            Faites vous accompagner par un développeur web freelance pour votre
            projet web
          </h2>
          <button>Prendre contact</button>
        </section>

        <section>
          <h3>Prestations de service</h3>
          <p>
            Les prestations proposées couvrent l’ensemble des besoins auxquels
            vous pourriez être confronté dans le cadre de la création ou de la
            modification d’un site.
          </p>
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
