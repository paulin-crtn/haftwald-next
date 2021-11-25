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
import { Organisation } from "../components/Organisation";
import { Commitment } from "../components/Commitment";
import { Question } from "../components/Question";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

/* ------------------------------- INTERFACES ------------------------------- */
import { IQuestion } from "../interfaces/IQuestion";

/* ---------------------------------- DATA ---------------------------------- */
import { questions } from "../data/questions";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Home.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import headlinesScreenshot from "../public/img/homepage.png";
import coding from "../public/img/picto/coding.png";
import search from "../public/img/picto/search.png";
import pantone from "../public/img/picto/pantone.png";
import team from "../public/img/team.svg";
import videocall from "../public/img/videocall.svg";
import sendingemail from "../public/img/sendingemail.svg";
import emoji from "../public/img/emoji.png";

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
        <section
          id="services"
          className={[styles.sectionContainer, styles.servicesContainer].join(
            " "
          )}
        >
          <h3 className={styles.title}>Prestations de service</h3>
          <p className={styles.subTitle}>
            Les prestations proposées couvrent l’ensemble des besoins auxquels
            vous pourriez être confronté dans le cadre de la création ou de la
            modification d’un site.
          </p>
          <div className={[styles.wrapper, styles.servicesWrapper].join(" ")}>
            <Service
              title="Développement web"
              picto={coding}
              text="Intégration et développement web pour création ou modification de site internet, d’application métier ou de solution SaaS réalisé sous React, NextJS ou Angular."
              modalKey="dev"
            />
            <Service
              title="Référencement naturel"
              picto={search}
              text="Optimisation du référencement afin de faire remonter le site dans les résultats des moteurs de recherche et faire progresser son traffic."
              modalKey="seo"
            />
            <Service
              title="Maquettes graphiques"
              picto={pantone}
              text="Conception d’interfaces et d’expériences utilisateur adaptés à votre cible, à vos objectifs et en cohérence avec votre charte graphique."
              modalKey="ui"
            />
          </div>
        </section>

        {/* -------------------------------- ORGANISATION ------------------------------- */}
        <section
          id="organisation"
          className={[
            styles.sectionContainer,
            styles.organisationsContainer,
          ].join(" ")}
        >
          <h3 className={styles.title}>Organisation</h3>
          <p className={styles.subTitle}>
            En fonction de la nature et de la durée de la mission, la prestation
            pourra s’exercer dans vos locaux ou à distance.
          </p>
          <div
            className={[styles.wrapper, styles.organisationsWrapper].join(" ")}
          >
            <Organisation
              title="Présentiel"
              img={team}
              text="Certains projets nécessitent une présence totale ou partielle sur site, auquel cas cas je peux me déplacer pour intégrer vos équipes directement dans vos locaux. La mobilité est possible sur l’ensemble du territoire."
            />
            <Organisation
              title="Distanciel"
              img={videocall}
              text="Pour les mission de plus courte durée, moins complexe ou nécessitant de collaborer avec des équipes déjà connues, le télétravail est une solution à envisager. Je suis disponible sur vos outils tout au long du projet."
            />
          </div>
        </section>

        {/* -------------------------------- QUESTIONS ------------------------------- */}
        <section
          id="questions"
          className={[styles.sectionContainer, styles.questionsContainer].join(
            " "
          )}
        >
          <h3 className={styles.title}>Questions courantes</h3>
          <p className={styles.subTitle}>
            Trouvez les réponses à la plupart des questions que vous pourriez
            vous poser.
          </p>
          <div className={[styles.wrapper, styles.questionsWrapper].join(" ")}>
            {questions.map((question: IQuestion, index) => (
              <Question
                key={index}
                question={question.title}
                answer={question.answer}
              />
            ))}
          </div>
          <div className={styles.cta}>
            <p>Votre question n'apparait pas ?</p>
            <button>Posez-là</button>
          </div>
        </section>

        {/* -------------------------------- COMMITMENTS ------------------------------ */}
        <section
          id="commitments"
          className={[
            styles.sectionContainer,
            styles.commitmentsContainer,
          ].join(" ")}
        >
          <h3 className={styles.title}>Engagements</h3>
          <div
            className={[styles.wrapper, styles.commitmentsWrapper].join(" ")}
          >
            <div>
              <Commitment
                title="Transparence"
                text="Des échanges réguliers, clairs et directs afin de favoriser la bonne avancée du projet."
              />
              <Commitment
                title="Investissement"
                text="Un engagement, une réactivité et une adaptabilité tout au long de la mission."
              />
              <Commitment
                title="Accompagnement"
                text="Des conseils adaptés pour vous permettre de comprendre les enjeux et faire les meilleurs choix à chaque étape."
              />
            </div>
            <div className={styles.cta}>
              <figure>
                <Image src={sendingemail} alt="sending email illustration" />
              </figure>
              <button>Prendre contact</button>
            </div>
          </div>
        </section>

        {/* -------------------------------- ABOUT ------------------------------- */}
        <section
          id="about"
          className={[styles.sectionContainer, styles.aboutContainer].join(" ")}
        >
          <h3 className={styles.title}>Qui suis-je ?</h3>
          <figure className={styles.emojiContainer}>
            <Image
              src={emoji}
              alt="emoji paulin caratini"
              placeholder="blur"
              quality={100}
            />
          </figure>
          <p>
            C’est en échangeant quotidiennement avec des{" "}
            <strong>intégrateurs et développeurs web</strong> lorsque j’occupais
            des postes de <strong>chef de projet digital</strong> au sein d'
            <strong>agences marketing</strong> que je me suis découvert un
            intérêt prononcé pour le <strong>fonctionnement technique</strong>{" "}
            des <strong>applications web</strong>.
            <br />
            <br />
            Cette curiosité m’a poussé à passer les certifications « 
            <strong>Techniques de développement web</strong> » et « 
            <strong>Techniques d’intégration web</strong> » puis à rejoindre
            tour à tour deux start-up pour les accompagner dans la conception de
            leurs <strong>applications métiers</strong> réalisées sous{" "}
            <strong>TypeScript</strong>, respectivement dans le secteur médical
            et de la grande distribution.
            <br />
            <br />
            Ce sont ces expériences et ce parcours pluridisciplinaire qui me
            permettent aujourd’hui de proposer mes compétences à des
            organisations à la recherche d’un{" "}
            <strong>développeur web freelance</strong>. Que vous cherchiez à
            vous faire conseiller sur un projet en cours ou à venir, à faire
            concevoir votre <strong>application web</strong> ou bien à{" "}
            <strong>renforcer vos équipes</strong>, je vous invite à me
            contacter afin que nous puissions échanger.
          </p>
          <button>Prendre contact</button>
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
