/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import { useState } from "react";
import styles from "../styles/Question.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [displayAnswer, setDisplayAnswer] = useState(false);
  function toggleAnswer() {
    setDisplayAnswer(!displayAnswer);
  }
  return (
    <div className={styles.questionContainer}>
      <div className={styles.question} onClick={toggleAnswer}>
        <h3>{question}</h3>
        <div>{displayAnswer ? "-" : "+"}</div>
      </div>
      {displayAnswer && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};
