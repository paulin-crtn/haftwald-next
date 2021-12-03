/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- REACT --------------------------------- */
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

/* -------------------------------- COMPONENT ------------------------------- */
import { Spinner } from "./Spinner";

/* -------------------------------- FUNCTIONS ------------------------------- */
import {
  addBodyOverflowClass,
  removeBodyOverflowClass,
} from "../utils/setBodyOverflowClass";
import {
  validateFullname,
  validateEmail,
  validateMessage,
} from "../utils/formInputValidation";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/ModalContact.module.scss";

/* -------------------------------------------------------------------------- */
/*                                 INTERFACES                                 */
/* -------------------------------------------------------------------------- */

interface IInput {
  touched: boolean;
  value: string;
  error: string;
}

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const ModalContact = ({
  setShowModalContact,
}: {
  setShowModalContact: (arg: boolean) => void;
}) => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [fullname, setFullname] = useState<IInput>({
    touched: false,
    value: "",
    error: "Vous devez remplir ce champs",
  });
  const [email, setEmail] = useState<IInput>({
    touched: false,
    value: "",
    error: "Vous devez remplir ce champs",
  });
  const [message, setMessage] = useState<IInput>({
    touched: false,
    value: "",
    error: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [apiResponseStatus, setApiResponseStatus] = useState<number>();

  /* -------------------------------------------------------------------------- */
  /*                               REACT CALLBACK                               */
  /* -------------------------------------------------------------------------- */
  /**
   * Close modal contact
   */
  const closeModalContact = useCallback(() => {
    removeBodyOverflowClass();
    setShowModalContact(false);
  }, [setShowModalContact]);

  /* -------------------------------------------------------------------------- */
  /*                                 REACT MEMO                                 */
  /* -------------------------------------------------------------------------- */
  const isFormValid = useMemo(() => {
    return !fullname.error && !email.error && !message.error;
  }, [fullname, email, message]);

  /* -------------------------------------------------------------------------- */
  /*                                REACT EFFECT                                */
  /* -------------------------------------------------------------------------- */
  /**
   * Apply overflowYHidden class on body
   */
  useEffect(() => addBodyOverflowClass(), []);

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
            closeModalContact();
          }
        }
      });
      // Keydown listener
      document.addEventListener("keydown", (e: any) => {
        if (e.key === "Escape") {
          closeModalContact();
        }
      });
    }
  }, [closeModalContact]);

  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTIONS                                 */
  /* -------------------------------------------------------------------------- */
  /**
   * Send email
   *
   * @param e
   */
  async function sendMail(e: FormEvent<HTMLFormElement>) {
    // Avoid form submission
    e.preventDefault();

    // Set loader on submit button
    setIsSending(true);

    // API call
    await fetch("/api/contact", {
      body: JSON.stringify({
        fullname: fullname.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        setApiResponseStatus(res.status);
        setIsSending(false);
      })
      .catch((error) => console.log(error));
  }

  /**
   * Validate and set fullname input
   *
   * @param e
   */
  function handleFullnameChange(e: ChangeEvent<HTMLInputElement>) {
    // Initialization
    const value: string = e.target.value;

    // Validation
    const error = validateFullname(value);

    // Set state
    setFullname({
      ...fullname,
      value,
      error,
    });
  }

  /**
   * Validate and set email input
   *
   * @param e
   */
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    // Initialization
    const value: string = e.target.value;

    // Validation
    const error = validateEmail(value);

    // Set state
    setEmail({
      ...email,
      value,
      error,
    });
  }

  /**
   * Validate and set message textarea
   *
   * @param e
   */
  function handleMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    // Initialization
    const value: string = e.target.value;

    // Validation
    const error = validateMessage(value);

    // Set state
    setMessage({
      ...message,
      value,
      error,
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="overlay">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.closeButton} onClick={closeModalContact}>
            &#10005;
          </div>
          <h3>Demande de contact</h3>
        </div>

        <div className={styles.content}>
          {/* ------------------------------- API ERROR ------------------------------- */}
          {apiResponseStatus === 500 && (
            <div className={styles.apiError}>
              <strong>Erreur serveur</strong> : vous pouvez rééssayer ou me
              contacter par téléphone au 06 51 54 25 31
            </div>
          )}

          {/* ------------------------------- API SUCCESS ------------------------------ */}
          {apiResponseStatus === 200 && (
            <div className={styles.apiSuccess}>
              <div className={styles.successCheckmark}>
                <div className={styles.checkIcon}>
                  <span
                    className={[styles.iconLine, styles.lineTip].join(" ")}
                  ></span>
                  <span
                    className={[styles.iconLine, styles.lineLong].join(" ")}
                  ></span>
                  <div className={styles.iconCircle}></div>
                  <div className={styles.iconFix}></div>
                </div>
              </div>
              <h4>Demande envoyée</h4>
              <p>Une réponse vous sera apportée dans les 2 jours ouvrés</p>
              <button onClick={closeModalContact}>Fermer</button>
            </div>
          )}

          {/* -------------------------------- FULLNAME -------------------------------- */}
          {apiResponseStatus != 200 && (
            <form onSubmit={(e) => sendMail(e)}>
              <div className={styles.formGroup}>
                <label htmlFor="fullname">Prénom et nom</label>
                <input
                  type="text"
                  id="fullname"
                  className={
                    fullname.touched && fullname.error ? styles.inputError : ""
                  }
                  value={fullname.value}
                  onChange={(e) => handleFullnameChange(e)}
                  onBlur={() => setFullname({ ...fullname, touched: true })}
                />
                {fullname.touched && (
                  <div className={styles.textError}>{fullname.error}</div>
                )}
              </div>

              {/* ---------------------------------- EMAIL --------------------------------- */}
              <div className={styles.formGroup}>
                <label htmlFor="email">Email professionnel</label>
                <input
                  type="email"
                  id="email"
                  className={
                    email.touched && email.error ? styles.inputError : ""
                  }
                  value={email.value}
                  onChange={(e) => handleEmailChange(e)}
                  onBlur={() => setEmail({ ...email, touched: true })}
                />
                {email.touched && (
                  <div className={styles.textError}>{email.error}</div>
                )}
              </div>

              {/* --------------------------------- MESSAGE -------------------------------- */}
              <div className={styles.formGroup}>
                <label htmlFor="message">
                  <div>Votre besoin</div>
                  <div className={styles.optional}>Facultatif</div>
                </label>
                <textarea
                  id="message"
                  className={
                    message.touched && message.error ? styles.inputError : ""
                  }
                  value={message.value}
                  onChange={(e) => handleMessageChange(e)}
                  onBlur={() => setMessage({ ...message, touched: true })}
                ></textarea>
                {message.touched && (
                  <div className={styles.textError}>{message.error}</div>
                )}
              </div>

              {/* ------------------------------ SUBMIT BUTTON ----------------------------- */}
              <button type="submit" disabled={isSending || !isFormValid}>
                {isSending ? <Spinner /> : "Envoyer"}
              </button>
              {/*<p className={styles.legal}>
            Vos données ne seront utilisées que dans le seul but de vous
            recontacter. Voir la politique de confidentialité.
          </p>*/}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
