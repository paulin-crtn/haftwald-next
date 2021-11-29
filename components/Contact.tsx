/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- REACT --------------------------------- */
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

/* -------------------------------- COMPONENT ------------------------------- */
import { Spinner } from "./Spinner";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Contact.module.scss";

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
export const Contact = ({
  setShowModalContact,
}: {
  setShowModalContact: (arg: boolean) => void;
}) => {
  /* -------------------------------------------------------------------------- */
  /*                                 REACT STATE                                */
  /* -------------------------------------------------------------------------- */
  const [fullname, setFullname] = useState<IInput>({ touched: false, value: "", error: "Vous devez remplir ce champs" });
  const [email, setEmail] = useState<IInput>({ touched: false, value: "", error: "Vous devez remplir ce champs" });
  const [message, setMessage] = useState<IInput>({ touched: false, value: "", error: "" });
  const [isSending, setIsSending] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                 REACT MEMO                                 */
  /* -------------------------------------------------------------------------- */
  const isFormValid = useMemo(() => {
    return !fullname.error && !email.error && !message.error
  }, [fullname.value, email.value, message.value])

  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTIONS                                 */
  /* -------------------------------------------------------------------------- */
  /**
   * Send email
   *
   * @param data
   * @returns
   */
  async function sendMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSending(true);

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        fullname: fullname.value,
        email: email.value,
        message: message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      setIsSending(false);
      return;
    }
    console.log("done !");
  }

  /**
   * Close contact modal
   */
  function closeModal() {
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("overflowYHidden");
    }
    setShowModalContact(false);
  }

  /**
   * Check fullname input
   */
  function handleFullnameChange(e: ChangeEvent<HTMLInputElement>) {
    // Initialization
    const value: string = e.target.value;
    let error: string = "";
    // Validation
    if (value.length === 0) {
      error = "Vous devez remplir ce champs";
    } else if (value.length < 3) {
      error = "Le champs doit faire au moins 3 caractères";
    } else if (value.length > 29) {
      error = "Le champs doit faire moins de 30 caractères";
    }
    // Set state
    setFullname({
      ...fullname,
      value,
      error,
    });
  }

  /**
   * Check email input
   */
  function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
    // Initialization
    const value: string = e.target.value;
    let error: string = "";
    // Validation
    if (value.length === 0) {
      error = "Vous devez remplir ce champs";
    } else if (value.length > 29) {
      error = "Le champs doit faire moins de 30 caractères";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
    ) {
      error = "Veuillez renseigner une adresse email valide";
    }
    // Set state
    setEmail({
      ...email,
      value,
      error,
    });
  }

  /**
   * Check message textarea
   */
  function handleMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    // Initialization
    const value: string = e.target.value;
    let error: string = "";
    // Validation
    if (value.length > 9999) {
      error = "Le champs doit faire moins de 1000 caractères";
    }
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
          <div className={styles.closeButton} onClick={closeModal}>
            &#10005;
          </div>
          <h3>Demande de contact</h3>
        </div>
        <form onSubmit={(e) => sendMail(e)}>
          {/* -------------------------------- FULLNAME -------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Prénom et nom</label>
            <input
              type="text"
              id="fullname"
              className={fullname.touched && fullname.error ? styles.inputError : ""}
              value={fullname.value}
              onChange={(e) => handleFullnameChange(e)}
              onBlur={() => setFullname({...fullname, touched: true})}
            />
            {fullname.touched && <div className={styles.textError}>{fullname.error}</div>}
          </div>

          {/* ---------------------------------- EMAIL --------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email professionnel</label>
            <input
              type="email"
              id="email"
              className={email.touched && email.error ? styles.inputError : ""}
              value={email.value}
              onChange={(e) => handleEmailChange(e)}
              onBlur={() => setEmail({...email, touched: true})}
            />
            {email.touched && <div className={styles.textError}>{email.error}</div>}
          </div>

          {/* --------------------------------- MESSAGE -------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="message"><div>Votre besoin</div><div className={styles.optional}>Facultatif</div></label>
            <textarea
              id="message"
              className={message.touched && message.error ? styles.inputError : ""}
              value={message.value}
              onChange={(e) => handleMessageChange(e)}
              onBlur={() => setMessage({...message, touched: true})}
            ></textarea>
            {message.touched && <div className={styles.textError}>{message.error}</div>}
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
      </div>
    </div>
  );
};
