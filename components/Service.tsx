/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Service.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export const Service = ({
  title,
  picto,
  text,
  modalKey,
}: {
  title: string;
  picto: StaticImageData;
  text: string;
  modalKey: string;
}) => {
  return (
    <div className={styles.serviceContainer}>
      <figure>
        <Image
          src={picto}
          alt={"pictogramme " + title}
          placeholder="blur" // Optional blur-up while loading
        />
      </figure>
      <h4>{title}</h4>
      <p>{text}</p>
      <button>Découvrir</button>
    </div>
  );
};
