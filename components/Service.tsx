/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { ReactNode, useEffect } from "react";

/* -------------------------------- FUNCTION -------------------------------- */
import {
  addBodyOverflowClass,
  removeBodyOverflowClass,
} from "../utils/setBodyOverflowClass";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Service.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Service = ({
  children,
  title,
  picto,
  setShowService,
  setShowModalContact,
}: {
  children: ReactNode;
  title: string;
  picto: StaticImageData;
  setShowService: (arg: boolean) => void;
  setShowModalContact: (arg: boolean) => void;
}) => {
  /* -------------------------------------------------------------------------- */
  /*                                REACT EFFECT                                */
  /* -------------------------------------------------------------------------- */
  /**
   * Apply overflowYHidden class on body
   */
  useEffect(() => addBodyOverflowClass(), []);

  /**
   * Apply class active to serviceContainer
   */
  useEffect(() => {
    const serviceContainer =
      document.getElementsByClassName("serviceContainer")[0];
    if (serviceContainer) {
      serviceContainer.classList.add("active");
    }
  }, []);

  /**
   * Detect when user : clicks outside service or presses esc key
   */
  useEffect(() => {
    const overlay = document.getElementsByClassName("overlay")[0];
    if (overlay) {
      // Click listener
      overlay.addEventListener("click", (e: any) => {
        const target = e.target;
        if (target) {
          if (target.classList.contains("overlay")) {
            closeService();
          }
        }
      });
      // Keydown listener
      document.addEventListener("keydown", (e: any) => {
        if (e.key === "Escape") {
          closeService();
        }
      });
    }
  }, []);

  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTION                                  */
  /* -------------------------------------------------------------------------- */
  /**
   * Close service
   *
   * @param showModalContact - Option to display contact form
   */
  function closeService(showModalContact = false) {
    removeClassActive();
    setTimeout(() => {
      removeBodyOverflowClass();
      setShowService(false);
      if (showModalContact) {
        setShowModalContact(true);
      }
    }, 700); // 700ms match 0.7s transition in .serviceContainer (globals.scss)
  }

  /**
   * Remove css class "active"
   * Transition is set in styles/global.scss file
   */
  function removeClassActive() {
    const serviceContainer =
      document.getElementsByClassName("serviceContainer")[0];
    if (serviceContainer) {
      serviceContainer.classList.remove("active");
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="overlay">
      <div className="serviceContainer">
        <div className={styles.buttons}>
          <div className={styles.closeService} onClick={() => closeService()}>
            Fermer
          </div>
          <button onClick={() => closeService(true)}>Demander un devis</button>
        </div>
        <div className={styles.header}>
          <figure className={styles.pictoContainer}>
            <Image
              src={picto}
              alt={"pictogramme " + title}
              placeholder="blur" // Optional blur-up while loading
            />
          </figure>
          <h3>{title}</h3>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
