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

  /**
   * Detect when user : clicks outside mobile nav or presses esc key
   */
  useEffect(() => {
    const body = document.querySelector("body");
    const header = document.getElementsByClassName("header")[0];
    if (body && header) {
      // Click listener
      body.addEventListener("click", (e: any) => {
        const target = e.target;
        if (target) {
          if (!header.contains(target)) {
            setShowMobileNav(false);
          }
        }
      });
      // Keydown listener
      document.addEventListener("keydown", (e: any) => {
        if (e.key === "Escape") {
          setShowMobileNav(false);
        }
      });
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <header className="header">
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
              <Image src={mark} alt="close menu icon" />
            ) : (
              <Image src={menu} alt="menu burger icon" />
            )}
          </figure>
        </div>
      </div>
      <nav className="mobileNav">
        <ul>
          <li>
            <a href="#services" onClick={() => setShowMobileNav(false)}>
              Prestations
            </a>
          </li>
          <li>
            <a href="#organisation" onClick={() => setShowMobileNav(false)}>
              Organisation
            </a>
          </li>
          <li>
            <a href="#questions" onClick={() => setShowMobileNav(false)}>
              Questions
            </a>
          </li>
          <li>
            <a href="#commitments" onClick={() => setShowMobileNav(false)}>
              Engagements
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setShowMobileNav(false)}>
              Qui suis-je ?
            </a>
          </li>
          <li>
            <button
              className={styles.cta}
              onClick={() => {
                setShowMobileNav(false);
                setShowModalContact(true);
              }}
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
