import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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

      <header>Header</header>

      <main className={styles.main}>Main</main>

      <footer className={styles.footer}>Footer</footer>
    </div>
  );
};

export default Home;
