/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- REACT --------------------------------- */
import { FormEvent, useState } from "react";

/* -------------------------------- COMPONENT ------------------------------- */
import { Spinner } from "./Spinner";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Contact.module.scss";

/* -------------------------------------------------------------------------- */
/*                                 INTERFACES                                 */
/* -------------------------------------------------------------------------- */

interface IInput {
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
  const [fullname, setFullname] = useState<IInput>({ value: "", error: "" });
  const [email, setEmail] = useState<IInput>({ value: "", error: "" });
  const [message, setMessage] = useState<IInput>({ value: "", error: "" });
  const [isSending, setIsSending] = useState<boolean>(false);

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

    checkFullname();
    checkEmail();
    checkMessage();

    if (fullname.error != "" || email.error != "" || message.error != "") {
      return;
    }

    setIsSending(true);

    //
    console.log("end");
    return;

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
    const contactOverlay = document.querySelector(".contactOverlay");
    if (body && contactOverlay) {
      body.classList.remove("overflowYHidden");
      contactOverlay.classList.remove("active");
    }
    setShowModalContact(false);
  }

  /**
   * Check fullname input
   */
  function checkFullname() {
    // Initialization
    let error: string = "";
    // Validation
    if (fullname.value.length === 0) {
      error = "Vous devez remplir ce champs";
    } else if (fullname.value.length < 3) {
      error = "Le champs doit faire au moins 3 caractères";
    } else if (fullname.value.length > 29) {
      error = "Le champs doit faire moins de 30 caractères";
    }
    // Assignation
    setFullname({
      ...fullname,
      error,
    });
  }

  /**
   * Check email input
   */
  function checkEmail() {
    // Initialization
    let error: string = "";
    // Validation
    if (email.value.length === 0) {
      error = "Vous devez remplir ce champs";
    } else if (email.value.length > 29) {
      error = "Le champs doit faire moins de 30 caractères";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    ) {
      error = "Veuillez renseigner une adresse email valide";
    }
    // Assignation
    setEmail({
      ...email,
      error,
    });
  }

  /**
   * Check message textarea
   */
  function checkMessage() {
    console.log("checked message");

    // Initialization
    let error: string = "";
    // Validation
    if (message.value.length < 15) {
      error = "Expliquez brièvement l'objet de votre demande";
    } else if (message.value.length > 9999) {
      error = "Le champs doit faire moins de 1000 caractères";
    }
    // Assignation
    setMessage({
      ...message,
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
          <h3>Demande contact</h3>
          <p>
            Vodre demande est sans engagement.
            <br />
            Tous les champs sont obligatoires.
          </p>
        </div>
        <form onSubmit={(e) => sendMail(e)}>
          {/* -------------------------------- FULLNAME -------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="fullname">Prénom et nom</label>
            <input
              type="text"
              id="fullname"
              value={fullname.value}
              onChange={(e) =>
                setFullname({
                  ...fullname,
                  value: e.target.value,
                })
              }
              onBlur={checkFullname}
            />
            <div className={styles.errors}>{fullname.error}</div>
          </div>

          {/* ---------------------------------- EMAIL --------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email professionnel</label>
            <input
              type="email"
              id="email"
              value={email.value}
              onChange={(e) =>
                setEmail({
                  ...email,
                  value: e.target.value,
                })
              }
              onBlur={checkEmail}
            />
            <div className={styles.errors}>{email.error}</div>
          </div>

          {/* --------------------------------- MESSAGE -------------------------------- */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Votre besoin en quelques mots</label>
            <textarea
              id="message"
              value={message.value}
              onChange={(e) =>
                setMessage({
                  ...message,
                  value: e.target.value,
                })
              }
              onBlur={checkMessage}
            ></textarea>
            <div className={styles.errors}>{message.error}</div>
          </div>

          {/* ------------------------------ SUBMIT BUTTON ----------------------------- */}
          <button type="submit" disabled={isSending}>
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
