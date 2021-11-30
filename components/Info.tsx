/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { ReactNode } from "react";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Info.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import info from "../public/img/picto/info.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Info = ({ children }: { children: ReactNode }) => {
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div className={styles.container}>
      <figure className={styles.pictoContainer}>
        <Image
          src={info}
          alt="pictogramme information"
          placeholder="blur" // Optional blur-up while loading
        />
      </figure>
      <p className={styles.content}>{children}</p>
    </div>
  );
};
