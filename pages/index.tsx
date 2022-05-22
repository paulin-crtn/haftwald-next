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
import stack from "../public/img/homepage.png";
import picture from "../public/img/picto/picture.png";
import fire from "../public/img/picto/fire.png";
import setting from "../public/img/picto/setting.png";
import team from "../public/img/team.svg";
import videocall from "../public/img/videocall.svg";
import commitment from "../public/img/commitment.svg";
import emoji from "../public/img/emoji.png";
import hour from "../public/img/hour.png";
import reactjs from "../public/img/techno/reactjs.svg";
import nextjs from "../public/img/techno/nextjs.svg";
import angular from "../public/img/techno/angular.svg";
import laravel from "../public/img/techno/laravel.svg";
import nodejs from "../public/img/techno/nodejs.svg";
import nestjs from "../public/img/techno/nestjs.svg";
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
  const [showServiceDevFront, setShowServiceDevFront] =
    useState<boolean>(false);
  const [showServiceDevBack, setShowServiceDevBack] = useState<boolean>(false);
  const [showServiceDevOps, setShowServiceDevOps] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div>
      {/* ------------------------------------------------------------------------- */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>Développeur Web Freelance Fullstack | Haftwald</title>
        <meta
          name="description"
          content="Développement d’applications web réalisées sous Javascript, Typescript ou PHP : Angular, React, NextJS, NodeJS et Laravel"
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

            <div className={styles.stackContainer}>
              <figure>
                <Image
                  src={stack}
                  alt="stack haftwald"
                  placeholder="blur"
                  quality={100}
                />
              </figure>
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
          <h3 className={styles.title}>Offres de service</h3>
          <p className={styles.subTitle}>
            Ces prestations concernent aussi bien la{" "}
            <strong>création d’un nouveau site</strong> que la{" "}
            <strong>modification d’un site existant</strong> : correction de
            bugs, ajout de nouvelles fonctionnalités, modifications des contenus
            ou de la présentation, mise à jour de la base de données, etc.
          </p>
          <div className={[styles.wrapper, styles.servicesWrapper].join(" ")}>
            <ServiceCard
              title="Front-end"
              picto={picture}
              text="Conception d’interfaces dynamiques pour offrir une expérience de navigation fluide et rapide à vos utilisateurs : intégration de maquettes responsive, consommation d’API, etc."
              setShowService={setShowServiceDevFront}
            />
            <ServiceCard
              title="Back-end"
              picto={fire}
              text="Construction d’applications métiers ou de solutions SaaS via des API pour vous permettre de répondre à un besoin spécifique : outil de suivi ou de gestion, interaction avec une base de données, business intelligence, etc."
              setShowService={setShowServiceDevBack}
            />
            <ServiceCard
              title="DevOps"
              picto={setting}
              text="Automatisation de certains processus afin de lancer de nouvelles fonctionnalités plus rapidement tout en réduisant le risque d’erreurs et de bugs : versionning, tests unitaires, pipeline CI/CD, monitoring, etc."
              setShowService={setShowServiceDevOps}
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
              text="Pour les missions de plus courte durée, moins complexes ou nécessitant de collaborer avec des équipes déjà connues, le télétravail est une solution à envisager. Je suis disponible sur vos outils tout au long du projet."
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
            <p>Besoin d’informations supplémentaires ?</p>
            <button onClick={() => setShowModalContact(true)}>
              Poser votre question
            </button>
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
            <strong>Techniques de développement web</strong>» et « 
            <strong>Techniques d’intégration web</strong>» puis à rejoindre tour
            à tour deux start-up pour les accompagner dans la conception de
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
      /*                              SERVICE FRONT-END                             */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevFront && (
        <Service
          title="Développement Front-end"
          picto={picture}
          setShowService={setShowServiceDevFront}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <p>
              Le <strong>développement front-end</strong> a beaucoup évolué au
              cours des dernières années. D’abord exclusivement concentré sur l’
              <strong>intégration de maquettes graphiques</strong> en HTML et
              CSS il a ensuite pris en charge la gestion des{" "}
              <strong>intéractions avec les utilisateurs</strong> par le biais
              de Javascript. Cela a donné naissance à un certain nombre
              d’outils, chacun permettant de répondre à un{" "}
              <strong>besoin métier spécifique</strong>.
            </p>

            <h4>Langages et outils de développement</h4>

            <p>
              Haftwald développe aussi bien des{" "}
              <strong>Single Page Application</strong> (SPA) dont le rendu
              s’effectue <strong>côté client</strong> (Client Side Rendering)
              que des applications dont le rendu s’effectue{" "}
              <strong>côté serveur</strong> (Server Side Rendering ou Static
              Site Generation) afin de proposer la{" "}
              <strong>solution la plus adaptée et performante</strong>.
            </p>

            <p>
              <strong>Typescript, Javascript</strong> : React, NextJS, Angular
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

            <h4>Maquettes graphiques</h4>

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
              Ces choix impacteront directement l’
              <strong>ergonomie</strong> du site et donc sa{" "}
              <strong>facilité de compréhension et d’utilisation</strong>.
              L’objectif est de{" "}
              <strong>construire un parcours fluide et cohérent</strong> afin de
              maximiser l’<strong>expérience utilisateur</strong>.
            </p>

            <Info>
              En fonction de l’envergure du projet cette prestation pourra être
              réalisée par un <strong>webdesigner</strong> de notre réseau.
            </Info>
            <Info>
              Dans certains cas et afin de diminuer le coût final il peut être
              suffisant d’acheter des{" "}
              <strong>maquettes prête à l’emploi</strong> via une plateforme
              spécialisée.
            </Info>

            <h4>Référencement naturel</h4>

            <p>
              Le référencement naturel, aussi connu sous l’acronyme SEO pour{" "}
              <strong>Search Engine Optimization</strong>, permet à votre site
              d’apparaitre dans les résultats des{" "}
              <strong>moteurs de recherche</strong> comme Google, Yahoo! ou
              Bing.
            </p>

            <p>
              La position dans les moteurs de recherche dépend de plusieurs
              facteurs, autant <strong>techniques</strong> que{" "}
              <strong>rédactionnels</strong>. Prestataire et client ont donc
              tous les deux un rôle clé dans la réussite du référencement
              naturel d’un site.
            </p>

            <Info>
              En fonction de vos besoins il est possible de faire rédiger vos
              contenus par un <strong>rédacteur web</strong> de notre réseau.
            </Info>
          </div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                              SERVICE BACK-END                              */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevBack && (
        <Service
          title="Développement back-end"
          picto={fire}
          setShowService={setShowServiceDevBack}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <p>
              Aujourd’hui les <strong>applications monolitiques</strong> tendent
              à laisser la place à des{" "}
              <strong>architectures plus modulaires</strong>. Sans
              nécessairement découper le projet en{" "}
              <strong>microservices</strong>, l’approche dominante est de{" "}
              <strong>séparer le front-end du back-end</strong> en utilisant des{" "}
              <strong>API</strong> (Application Programming Interface). Cela
              offre de <strong>meilleures performances</strong>, une plus{" "}
              <strong>grande évolutivité</strong> et la possibilité à d’autres
              applications de{" "}
              <strong>communiquer avec le logiciel développé</strong>.
            </p>

            <h4>Langages et outils de développement</h4>

            <p>
              Haftwald développe des <strong>applications web</strong> (site
              internet statique ou dynamqiue, logiciel métier, plateforme Saas)
              dans le respect des <strong>bonnes pratiques</strong> de
              l’industrie : principes SOLID, fonctions pures, découplage...
              autant de <strong>concepts fondamentaux</strong> pour assurer une{" "}
              <strong>architecture logicielle solide et évolutive</strong>.
            </p>

            <p>
              <strong>PHP</strong> : Laravel
            </p>

            <div className={styles.pictoContainer}>
              <figure className={styles.pictoXs}>
                <Image src={laravel} alt="picto framework laravel" />
              </figure>
            </div>

            <p>
              <strong>Typescript</strong> : NodeJS & NestJS
              <br />
              <span className="italic">Montée en compétences en cours</span>
            </p>

            <div className={styles.pictoContainer}>
              <figure>
                <Image src={nodejs} alt="picto framework nodejs" />
              </figure>
              <figure>
                <Image src={nestjs} alt="picto framework nestjs" />
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
          </div>
        </Service>
      )}

      {/* ------------------------------------------------------------------------- */
      /*                                   DEVOPS                                   */
      /* -------------------------------------------------------------------------- */}
      {showServiceDevOps && (
        <Service
          title="DevOps"
          picto={setting}
          setShowService={setShowServiceDevOps}
          setShowModalContact={setShowModalContact}
        >
          <div className={styles.serviceContainer}>
            <h4>Code source et contrôle de version</h4>

            <p>
              Le code source produit, <strong>performant</strong>,{" "}
              <strong>commenté</strong> et <strong>évolutif</strong>, est
              disponible sur un{" "}
              <strong>service d’hébergement open source</strong> comme GitHub ou
              BitBucket. Cela permet de <strong>modifier le site</strong>{" "}
              (corrections, ajout de nouvelles fonctionnalités mise à jour,
              etc.), de <strong>collaborer avec d’autres développeurs</strong>{" "}
              et d’adopter une approche d’<strong>intégration continue</strong>.
            </p>

            <h4>Tests unitaires</h4>

            <p>
              Les tests unitaires permettent de <strong>tester le code</strong>{" "}
              afin de s’assurer qu’il fait correctement ce qu’on lui demande.
              Surtout, les tests permettent de{" "}
              <strong>détecter d’éventuels problèmes ou bugs en amont</strong>,
              avant la mise en production, et{" "}
              <strong>alertent en cas d’introduction d’une régression</strong>{" "}
              lors d’un nouveau développement. Bien qu’il soit possible d’opter
              pour une <strong>approche TDD</strong> (Test Driven Development),
              le simple fait de disposer de <strong>tests automatisés</strong>{" "}
              pour les <strong>fonctions critiques</strong> est déjà une
              excellente pratique.
            </p>

            <h4>Hébergement</h4>

            <span className="italic">Montée en compétences en cours</span>

            <p>
              Héberger une application web nécessite le plus souvent de{" "}
              <strong>louer des serveurs</strong> auprès d’un prestataire
              spécialisé. Selon le type d’application le recours à un{" "}
              <strong>hébergement dans le cloud</strong> pourra s’avérer une
              solution efficace. En effet ce type d’hébergement apporte un
              certain nombre d’avantages, dont notamment :
            </p>

            <ul>
              <li>
                Possibilité d’
                <strong>adapter rapidement</strong> à la hausse ou à la baisse{" "}
                <strong>le nombre de serveurs</strong> en fonction des besoins
              </li>
              <li>
                Configurations prêtes à l’emploi, permettant une{" "}
                <strong>mise en production rapide</strong>
              </li>
              <li>
                Facturation en fonction de l’utilisation (pay as you go) pouvant
                entraîner une <strong>réduction des coûts</strong>
              </li>
            </ul>

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
    </div>
  );
};

export default Home;
