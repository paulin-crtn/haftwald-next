/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Organisation.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Organisation = ({
  title,
  img,
  text,
  setShowModalContact,
}: {
  title: string;
  img: StaticImageData;
  text: string;
  setShowModalContact: (arg: boolean) => void;
}) => {
  return (
    <div className={styles.organisationContainer}>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
      <div className={styles.cta}>
        <figure>
          <Image src={img} alt={"illustration " + title} />
        </figure>
        <button onClick={() => setShowModalContact(true)}>
          Prendre contact
        </button>
      </div>
    </div>
  );
};
