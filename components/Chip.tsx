/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- REACT --------------------------------- */
import { ReactNode } from "react";

/* --------------------------------- NEXT JS --------------------------------- */
import Image from "next/image";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Chip.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Chip = ({
  icon,
  children,
}: {
  icon: StaticImageData;
  children: ReactNode;
}) => {
  return (
    <div className={styles.container}>
      <Image src={icon} width={16} height={16} alt="icon" />
      <div className={styles.text}>{children}</div>
    </div>
  );
};
