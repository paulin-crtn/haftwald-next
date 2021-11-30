/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";

/* ---------------------------------- REACT --------------------------------- */
import { useState } from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import { ModalContact } from "./ModalContact";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Header.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Header = () => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTIONS                                 */
  /* -------------------------------------------------------------------------- */
  /**
   *
   */
  function toggleNavigationMobile() {
    const navigationMobile =
      document.getElementsByClassName("navigationMobile")[0];
    if (navigationMobile) {
      if (navigationMobile.classList.contains("active")) {
        navigationMobile.classList.remove("active");
      } else {
        navigationMobile.classList.add("active");
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <header>
      <div className={styles.container}>
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
                <button
                  className={styles.cta}
                  onClick={() => setShowModalContact(true)}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
          <div
            className={styles.menuBurgerIcon}
            onClick={toggleNavigationMobile}
          >
            menu
          </div>
        </div>
      </div>
      <nav className="navigationMobile">
        <ul onClick={toggleNavigationMobile}>
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
            <button
              className={styles.cta}
              onClick={() => setShowModalContact(true)}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
      {/* ------------------------------------------------------------------------- */
      /*                                MODAL CONTACT                               */
      /* -------------------------------------------------------------------------- */}
      {showModalContact && (
        <div className={styles.modalContainer}>
          <ModalContact setShowModalContact={setShowModalContact} />
        </div>
      )}
    </header>
  );
};
