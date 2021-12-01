/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";

/* ---------------------------------- REACT --------------------------------- */
import { useEffect, useState } from "react";

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
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showModalContact, setShowModalContact] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                REACT EFFECT                                */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    console.log("useeffct call");

    const mobileNav = document.getElementsByClassName("mobileNav")[0];
    if (mobileNav) {
      showMobileNav
        ? mobileNav.classList.add("active")
        : mobileNav.classList.remove("active");
    }
  }, [showMobileNav]);

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/" passHref>
            <a className={styles.logo} onClick={() => setShowMobileNav(false)}>
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
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            menu
          </div>
        </div>
      </div>
      <nav className="mobileNav">
        <ul onClick={() => setShowMobileNav(false)}>
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
