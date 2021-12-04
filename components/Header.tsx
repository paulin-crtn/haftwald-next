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
import logo from "../public/img/logo.png";
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
            <a>
              <figure className={styles.logo}>
                <Image
                  src={logo}
                  alt="logo haftwald développeur web freelance"
                  quality={100}
                  onClick={() => setShowMobileNav(false)}
                />
              </figure>
            </a>
          </Link>
          <nav className={styles.navigation}>
            <ul>
              <li>
                <Link href="/#services">Prestations</Link>
              </li>
              <li>
                <Link href="/#organisation">Organisation</Link>
              </li>
              <li>
                <Link href="/#questions">Questions</Link>
              </li>
              <li>
                <Link href="/#commitments">Engagements</Link>
              </li>
              <li>
                <Link href="/#about">Qui suis-je ?</Link>
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
          <li onClick={() => setShowMobileNav(false)}>
            <Link href="/#services">Prestations</Link>
          </li>
          <li onClick={() => setShowMobileNav(false)}>
            <Link href="/#organisation">Organisation</Link>
          </li>
          <li onClick={() => setShowMobileNav(false)}>
            <Link href="/#questions">Questions</Link>
          </li>
          <li onClick={() => setShowMobileNav(false)}>
            <Link href="/#commitments">Engagements</Link>
          </li>
          <li onClick={() => setShowMobileNav(false)}>
            <Link href="/#about">Qui suis-je ?</Link>
          </li>
          <li onClick={() => setShowMobileNav(false)}>
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
