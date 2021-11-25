/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Header.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" passHref>
          <a className={styles.logo}>
            Haftwald<span className={styles.dot}>.</span>
          </a>
        </Link>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#services">Prestations</a>
            </li>
            <li>
              <a href="#organisation">Organisation</a>
            </li>
            <li>
              <a href="#questions">Questions</a>
            </li>
            <li>
              <a href="#commitments">Engagements</a>
            </li>
            <li>
              <a href="#about">Qui suis-je ?</a>
            </li>
            <li>
              <button className={styles.cta}>Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
