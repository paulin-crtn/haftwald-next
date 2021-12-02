/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Footer.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Footer = () => {
  return (
    <footer className={styles.container}>
      <h6>Haftwald</h6>
      <p className={styles.presentation}>
        Paulin Caratini, a.k.a. Haftwald, est un développeur web freelance à
        Paris et ailleurs qui vous accompagne dans la conception et le
        développement de vos projets web réalisés sous React, NextJS ou Angular.
      </p>
      <p className={styles.legal}>
        <span>
          <Link href="/mentions-legales">Mentions légales</Link>
        </span>{" "}
        |{" "}
        <span>
          <Link href="/politique-de-confidentialite">
            Politique de confidentialité & Cookies
          </Link>
        </span>{" "}
        |{" "}
        <span>
          {" "}
          <Link href="/conditions-generales-de-vente">
            Conditions générales de vente
          </Link>
        </span>
      </p>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Haftwald
      </p>
    </footer>
  );
};
