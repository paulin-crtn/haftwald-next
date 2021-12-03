/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { useState } from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import { Header } from "../components/Header";
import { ServiceCard } from "../components/ServiceCard";
import { Service } from "../components/Service";
import { Info } from "../components/Info";
import { OrganisationCard } from "../components/OrganisationCard";
import { Commitment } from "../components/Commitment";
import { Question } from "../components/Question";
import { Footer } from "../components/Footer";
import { ModalContact } from "../components/ModalContact";
import { ScrollToTopButton } from "../components/ScrollToTopButton";

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
import commitment from "../public/img/commitment.svg";
import emoji from "../public/img/emoji.png";
import reactjs from "../public/img/techno/reactjs.svg";
import nextjs from "../public/img/techno/nextjs.svg";
import angular from "../public/img/techno/angular.svg";
import laravel from "../public/img/techno/laravel.svg";
import mysql from "../public/img/techno/mysql.svg";
import mongodb from "../public/img/techno/mongodb.svg";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const Home: NextPage = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [showModalContact, setShowModalContact] = useState<boolean>(false);
  const [showServiceDev, setShowServiceDev] = useState<boolean>(false);
  const [showServiceSeo, setShowServiceSeo] = useState<boolean>(false);
  const [showServiceUi, setShowServiceUi] = useState<boolean>(false);

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
          content="Haftwald est un développeur web freelance utilisant les frameworks React, NextJS et Angular via les languages Javascript et Typescript."
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
                <Image src={commitment} alt="commitment illustration" />
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
      <ScrollToTopButton />

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
          <div className={styles.serviceContainer}>
            <h4>Logiciel, application métier et solution SaaS</h4>

            <p>
              Pour les professionnels qui ont un besoin en lien avec leur
              activité : <strong>outil de suivi ou de gestion</strong>{" "}
              (monitoring), visualisation de données, contrôle des flux,
              détection d’anomalie, <strong>analyse décisionnelle</strong>{" "}
              (business intelligence), <strong>solution SaaS</strong>, etc.
            </p>

            <h4>Site internet statique et dynamique</h4>

            <p>
              Pour les entreprises, entrepreneurs, organisations ou associations
              qui souhaitent <strong>présenter leurs activités</strong> mais
              également <strong>administrer leurs contenus</strong> en toute
              autonomie : offre de produits et de services, activités, horaires,
              équipe, etc.
            </p>

            <Info>
              Les prestations de développement web concernent aussi bien la{" "}
              <strong>création d’un nouveau site</strong> que l’
              <strong>évolution d’un site existant</strong> : correction de
              bugs, ajout de nouvelles fonctionnalités, modifications des
              contenus ou de la présentation, mise à jour de la base de données,
              etc.
            </Info>

            <h4>Langages et outils de développement</h4>

            <p>
              Un bon développeur web doit être capable d’adapter ses compétences
              au projet, et non l’inverse. Cependant, au fur et à mesure de ses
              expériences, et en fonction de ses propres affinités, il enrichira
              son expertise sur certains{" "}
              <strong>langages et outils de développement</strong> en
              particulier. Haftwald s’applique à{" "}
              <strong>
                concevoir, développer ou refondre des applications web
              </strong>{" "}
              via les technologies modernes et évolutives suivantes :
            </p>

            <p>
              <strong>Typescript</strong> : React, NextJS, Angular
            </p>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={reactjs} alt="picto librairie react" />
              </figure>
              <figure className={styles.pictoXs}>
                <Image src={nextjs} alt="picto framework nextjs" />
              </figure>
              <figure>
                <Image src={angular} alt="picto angular 2+" />
              </figure>
            </div>

            <p>
              <strong>PHP</strong> : Laravel
            </p>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={laravel} alt="picto framework laravel" />
              </figure>
            </div>

            <p>
              <strong>Base de données</strong> : MySQL, MongoDB
            </p>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={mysql} alt="picto mysql database" />
              </figure>
              <figure>
                <Image src={mongodb} alt="picto mongodb database" />
              </figure>
            </div>

            <h4>Code source et versionning</h4>

            <p>
              Le code source produit, <strong>performant</strong>,{" "}
              <strong>commenté</strong> et <strong>évolutif</strong>, est
              enregistré sur un service de gestion de développement de logiciels
              (GitHub ou BitBucket). Cela permet de créer une{" "}
              <strong>nouvelle version</strong> du site à chaque modification
              (corrections, ajout de nouvelles fonctionnalités ou mise à jour
              par exemple) ainsi que sa <strong>réutilisation</strong> en toute
              sécurité par n’importe quel développeur web.
            </p>

            <h4>Outils d’analyse</h4>

            <p>
              En fonction du type de site développé, il sera possible
              d’installer un ou plusieurs outils de{" "}
              <strong>suivi statistiques</strong> (Google Analytics, Facebook
              Pixel…) afin de pouvoir disposer d’informations concernant la{" "}
              <strong>fréquentation</strong> du site, le <strong>profil</strong>{" "}
              et l’
              <strong>origine des visiteurs</strong>, le{" "}
              <strong>taux de conversion</strong>, etc. Ces outils pourront vous
              aider dans votre <strong>stratégie de marketing digital</strong>.
            </p>
          </div>
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
          <div className={styles.serviceContainer}>
            <p>
              Le référencement naturel, aussi connu sous l’acronyme SEO pour{" "}
              <strong>Search Engine Optimization</strong>, permet à votre site
              internet d’apparaitre dans les résultats des{" "}
              <strong>moteurs de recherche</strong> comme Google, Yahoo! ou
              Bing.
            </p>

            <p>
              La position dans les moteurs de recherche dépend de plusieurs
              facteurs, dont notamment :
            </p>

            <ul>
              <li>
                la <strong>structure HTML</strong> des pages
              </li>
              <li>
                la présence de <strong>méta-balises</strong> (title,
                description)
              </li>
              <li>
                la <strong>rapidité de chargement</strong> du site
              </li>
              <li>
                un design <strong>responsive</strong> (adaptatif)
              </li>
              <li>
                la présence d’un fichier <strong>Sitemap</strong>
              </li>
              <li>
                l’utilisation de <strong>CDN</strong> et du protocole{" "}
                <strong>HTTPS</strong>
              </li>
              <li>etc.</li>
            </ul>

            <p>
              Vous pouvez également prendre une part active dans le
              référencement de votre site en suivant certaines bonnes pratiques,
              dont notamment :
            </p>

            <ul>
              <li>
                le partage sur les <strong>réseaux sociaux</strong>
              </li>
              <li>
                le contenus de vos pages : longueur, présence de certains{" "}
                <strong>mot-clés</strong>
              </li>
              <li>
                la publication régulière de <strong>nouveaux contenus</strong>{" "}
                (via un blog par exemple)
              </li>
              <li>
                le <strong>nombre de liens</strong> pointant vers votre site
              </li>
              <li>etc.</li>
            </ul>

            <p>
              Prestataire et client ont donc tous les deux un rôle clé dans la
              réussite du référencement naturel d’un site.{" "}
            </p>

            <Info>
              En fonction de vos besoins il est possible de faire rédiger vos
              contenus par un <strong>rédacteur web</strong> de notre réseau.
            </Info>
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
          <div className={styles.serviceContainer}>
            <p>
              Les maquettes graphiques permettent de définir en amont l’
              <strong>interface</strong> du site. C’est une phase indispensable
              avant de commencer la création ou la refonte d’un site web.
            </p>

            <p>
              En effet, en plus d’appliquer la <strong>charte graphique</strong>{" "}
              de votre organisation (couleurs, typographies), la réalisation de{" "}
              <strong>maquettes fonctionnelles</strong> oblige à se poser un
              certain nombre de questions sur les éléments qui vont composer les
              pages (texte, image, icône, bouton, boite de dialogue, etc.) ainsi
              que la manière dont ces éléments seront agencés entre eux.
            </p>

            <p>
              Les choix qui seront fait impacteront directement l’
              <strong>ergonomie</strong> du site et donc sa{" "}
              <strong>facilité de compréhension et d’utilisation</strong>.
              L’objectif est de{" "}
              <strong>construire un parcours fluide et cohérent</strong> afin de
              maximiser l’<strong>expérience utilisateur</strong>.
            </p>

            <p>
              Une fois les maquettes graphiques conçues il est possible et
              souhaitable de réaliser un <strong>prototypage</strong> afin de{" "}
              <strong>simuler une navigation</strong>. Cela permet de s’assurer
              que l’<strong>arborescence</strong> du site et l’interface des
              pages sont bien comprises par l’utilisateur et permettent de
              réaliser facilement les actions voulues : recherche d’information,
              souscription, achat, etc.
            </p>

            <Info>
              En fonction de vos besoins et de l’envergure du projet cette
              prestation pourra être réalisée par un{" "}
              <strong>webdesigner</strong> de notre réseau.
            </Info>

            <Info>
              En fonction de votre budget il est également possible d’acheter
              des <strong>maquettes prête à l’emploi</strong> via une plateforme
              spécialisée.
            </Info>
          </div>
        </Service>
      )}
    </div>
  );
};

export default Home;
