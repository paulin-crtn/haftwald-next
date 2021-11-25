/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* ---------------------------------- REACT --------------------------------- */
import { FormEvent, useState } from "react";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/Contact.module.scss";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Contact = ({
  setShowModalContact,
}: {
  setShowModalContact: (boolean: boolean) => void;
}) => {
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  /**
   *
   * @param data
   * @returns
   */
  const sendMail = async (e: FormEvent<HTMLFormElement>) => {
    console.log("button clicked");
    e.preventDefault();

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify({
        email,
        fullname,
        message: "Hello world",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    console.log("done !");
  };

  function closeModal() {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    if (body && overlay) {
      body.classList.remove("overflowYHidden");
      overlay.classList.remove("active");
    }
    setShowModalContact(false);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div className={styles.filter}>
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
          <div>
            <label htmlFor="fullname">Prénom et nom</label>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email">Email professionnel</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="message">Votre besoin en quelques mots</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
          {/*<p className={styles.legal}>
            Vos données ne seront utilisées que dans le seul but de vous
            recontacter. Voir la politique de confidentialité.
          </p>*/}
        </form>
      </div>
    </div>
  );
};
