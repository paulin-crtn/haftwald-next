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
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <Link href="/">
          <p className={styles.logo}>
            Haftwald<span className={styles.dot}>.</span>
          </p>
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
