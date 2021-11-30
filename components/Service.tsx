/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { ReactNode } from "react";

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
  /*                                  FUNCTION                                  */
  /* -------------------------------------------------------------------------- */
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
          <div
            className={styles.closeService}
            onClick={() => {
              removeClassActive();
              setTimeout(() => {
                setShowService(false);
              }, 700); // 700ms match 0.7s transition in .serviceContainer (globals.scss)
            }}
          >
            Fermer
          </div>
          <button
            onClick={() => {
              removeClassActive();
              setTimeout(() => {
                setShowService(false);
                setShowModalContact(true);
              }, 700); // 700ms match 0.7s transition in .serviceContainer (globals.scss)
            }}
          >
            Demande de devis
          </button>
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
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
