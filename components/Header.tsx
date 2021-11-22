/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Header.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <p className={styles.logo}>
          Haftwald<span className={styles.dot}>.</span>
        </p>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <a href="#">Prestations</a>
            </li>
            <li>
              <a href="#">Organisation</a>
            </li>
            <li>
              <a href="#">Questions</a>
            </li>
            <li>
              <a href="#">Engagements</a>
            </li>
            <li>
              <a href="#">Qui suis-je ?</a>
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
