/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { useEffect, useState } from "react";

/* ------------------------------- COMPONENTS ------------------------------- */
import { ModalContact } from "./ModalContact";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Header.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import menu from "../public/img/menu.svg";
import mark from "../public/img/mark.svg";

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
  /**
   * Toggle class active on mobile navigation element
   */
  useEffect(() => {
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
          <figure
            className={styles.menuBurgerIcon}
            onClick={() => setShowMobileNav(!showMobileNav)}
          >
            {showMobileNav ? (
              <Image src={mark} alt="VSCode screenshot" />
            ) : (
              <Image src={menu} alt="VSCode screenshot" />
            )}
          </figure>
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
