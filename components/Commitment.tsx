/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */

/* --------------------------------- NEXT JS -------------------------------- */
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Commitment.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import accepted from "../public/img/picto/accepted.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Commitment = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => {
  return (
    <div className={styles.commitmentContainer}>
      <div className={styles.pictoContainer}>
        <Image src={accepted} alt="accepted picto" placeholder="blur" />
      </div>
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
};
