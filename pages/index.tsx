/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

/* ---------------------------------- REACT --------------------------------- */
import { useEffect, useState } from "react";

/* ---------------------------- REACT CUSTOM HOOK --------------------------- */
import useContact from "../utils/useContact";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";
import { Service } from "../components/Service";
import { OrganisationCard } from "../components/OrganisationCard";
import { Commitment } from "../components/Commitment";
import { Question } from "../components/Question";
import { Footer } from "../components/Footer";
import { ModalContact } from "../components/ModalContact";

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
  /* ------------------------------- REACT STATE ------------------------------ */
  const [showServiceDev, setShowServiceDev] = useState<boolean>(false);
  const [showServiceSeo, setShowServiceSeo] = useState<boolean>(false);
  const [showServiceUi, setShowServiceUi] = useState<boolean>(false);

  /* ------------------------------ REACT EFFECT ------------------------------ */
  useEffect(() => {
    const body = document.querySelector("body");
    const serviceContainer =
      document.getElementsByClassName("serviceContainer")[0];
    if (body) {
      if (showServiceDev || showServiceSeo || showServiceUi) {
        body.classList.add("overflowYHidden");
      } else {
        body.classList.remove("overflowYHidden");
      }
    }
    if (serviceContainer) {
      if (showServiceDev || showServiceSeo || showServiceUi) {
        serviceContainer.classList.add("active");
      }
    }
  }, [showServiceDev, showServiceSeo, showServiceUi]);

  /* ---------------------------- REACT CUSTOM HOOK --------------------------- */
  const { showModalContact, setShowModalContact } = useContact();

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
              <button onClick={() => setShowModalContact(true)}>
                Prendre contact
              </button>
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
            <ServiceCard
              title="Développement web"
              picto={coding}
              text="Intégration et développement web pour création ou modification de site internet, d’application métier ou de solution SaaS réalisé sous React, NextJS ou Angular."
              setShowService={setShowServiceDev}
            />
            <ServiceCard
              title="Référencement naturel"
              picto={search}
              text="Optimisation du référencement afin de faire remonter le site dans les résultats des moteurs de recherche et faire progresser son traffic."
              setShowService={setShowServiceSeo}
            />
            <ServiceCard
              title="Maquettes graphiques"
              picto={pantone}
              text="Conception d’interfaces et d’expériences utilisateur adaptés à votre cible, à vos objectifs et en cohérence avec votre charte graphique."
              setShowService={setShowServiceUi}
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
            <OrganisationCard
              title="Présentiel"
              img={team}
              text="Certains projets nécessitent une présence totale ou partielle sur site, auquel cas cas je peux me déplacer pour intégrer vos équipes directement dans vos locaux. La mobilité est possible sur l’ensemble du territoire."
              setShowModalContact={setShowModalContact}
            />
            <OrganisationCard
              title="Distanciel"
              img={videocall}
              text="Pour les mission de plus courte durée, moins complexe ou nécessitant de collaborer avec des équipes déjà connues, le télétravail est une solution à envisager. Je suis disponible sur vos outils tout au long du projet."
              setShowModalContact={setShowModalContact}
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
            <p>Votre question n’apparait pas ?</p>
            <button onClick={() => setShowModalContact(true)}>Posez-là</button>
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
              <button onClick={() => setShowModalContact(true)}>
                Prendre contact
              </button>
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
            des postes de <strong>chef de projet digital</strong> au sein d’
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
          <button onClick={() => setShowModalContact(true)}>
            Prendre contact
          </button>
        </section>
      </main>

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

      {/* ------------------------------------------------------------------------- */
      /*                                MODAL CONTACT                               */
      /* -------------------------------------------------------------------------- */}
      {showModalContact && (
        <ModalContact setShowModalContact={setShowModalContact} />
      )}

      {/* ------------------------------------------------------------------------- */
      /*                                 SERVICE DEV                                */
      /* -------------------------------------------------------------------------- */}
      {showServiceDev && (
        <Service
          title="Développement web"
          picto={coding}
          setShowService={setShowServiceDev}
          setShowModalContact={setShowModalContact}
        >
          <div>Content dev</div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                                 SERVICE SEO                                */
      /* -------------------------------------------------------------------------- */}
      {showServiceSeo && (
        <Service
          title="Référencement naturel"
          picto={search}
          setShowService={setShowServiceSeo}
          setShowModalContact={setShowModalContact}
        >
          <div>
            <p>
              Le référencement naturel, aussi connu sous l’acronyme SEO pour
              Search Engine Optimization, permet à votre site internet
              d’apparaitre dans les résultats des moteurs de recherche comme
              Google, Yahoo! ou Bing.
            </p>

            <p>
              La position dans les moteurs de recherche dépend de plusieurs
              facteurs, dont notamment :
            </p>

            <ul>
              <li>la structure HTML des pages</li>
              <li>la présence de méta-balises (title, description)</li>
              <li>la rapidité de chargement du site</li>
              <li>un design adaptatif (responsive)</li>
              <li>la présence d’un fichier Sitemap</li>
              <li>l’utilisation de CDN et du protocole HTTPS</li>
              <li>etc.</li>
            </ul>

            <p>
              Vous pouvez également prendre une part active dans le
              référencement de votre site en suivant certaines bonnes pratiques,
              dont notamment :
            </p>

            <ul>
              <li>le partage sur les réseaux sociaux</li>
              <li>
                le contenus de vos pages (longueur, présence de certains
                mot-clés)
              </li>
              <li>
                la publication régulière de nouveaux contenus (via un blog par
                exemple)
              </li>
              <li>le nombre de liens pointant vers votre site</li>
              <li>etc.</li>
            </ul>

            <p>
              Prestataire et client ont donc tous les deux un rôle clé dans la
              réussite du référencement naturel d’un site.{" "}
            </p>
          </div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                                 SERVICE UI                                 */
      /* -------------------------------------------------------------------------- */}
      {showServiceUi && (
        <Service
          title="Maquettes graphiques"
          picto={pantone}
          setShowService={setShowServiceUi}
          setShowModalContact={setShowModalContact}
        >
          <div>Content ui</div>
        </Service>
      )}
    </div>
  );
};

export default Home;
