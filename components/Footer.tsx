/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Footer.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <h6>Haftwald</h6>
      <p className={styles.presentation}>
        Paulin Caratini, a.k.a. Haftwald, est un développeur web freelance à
        Paris et ailleurs qui vous accompagne dans la conception et le
        développement de vos projets web réalisés sous React, NextJS ou Angular.
      </p>
      <p className={styles.legal}>
        <span>Mentions légales</span> |{" "}
        <span>Politique de confidentialité & Cookies</span> |{" "}
        <span>Conditions générales de vente</span>
      </p>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Haftwald
      </p>
    </footer>
  );
};
