/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import type { NextPage } from "next";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

/* ---------------------------------- REACT --------------------------------- */
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

/* -------------------------------- COMPONENT ------------------------------- */
import { Loader } from "../components/Loader";

/* -------------------------------- FUNCTIONS ------------------------------- */
import {
  validateEmail,
  validateFullname,
  validatePhoneNumber,
} from "../utils/formInputValidation";

/* ------------------------------- INTERFACES ------------------------------- */
import { IInput } from "../interfaces/IInput";

/* --------------------------------- STYLES --------------------------------- */
import styles from "../styles/LandingMain.module.scss";

/* --------------------------------- IMAGES --------------------------------- */
import logo from "../public/img/logo.png";
import check from "../public/img/check.png";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
const LandingMain: NextPage = () => {
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
  const [phoneNumber, setPhoneNumber] = useState<IInput>({
    touched: false,
    value: "",
    error: "",
  });
  const [isSending, setIsSending] = useState<boolean>(false);
  const [apiHasError, setApiHasError] = useState<boolean>(false);

  /* -------------------------------------------------------------------------- */
  /*                                 REACT MEMO                                 */
  /* -------------------------------------------------------------------------- */
  const isFormValid = useMemo(() => {
    return !fullname.error && !email.error;
  }, [fullname, email]);

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

    // Reset API has error
    setApiHasError(false);

    // API call
    await fetch("/api/contact", {
      body: JSON.stringify({
        fullname: fullname.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        message: "Non demandé (LANDING PAGE)",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((res) => {
        setIsSending(false);
        res.status === 200
          ? Router.push("/landing-confirmation")
          : setApiHasError(true);
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
   * Validate and set phone number input
   *
   * @param e
   */
  function handlePhoneNumberChange(e: ChangeEvent<HTMLInputElement>) {
    // Initialization
    const value: string = e.target.value;

    // Validation
    const error = validatePhoneNumber(value);

    // Set state
    setPhoneNumber({
      ...phoneNumber,
      value,
      error,
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */

  return (
    <div className={styles.pageBackground}>
      {/* ------------------------------------------------------------------------ */
      /*                                  HTML HEAD                                 */
      /* -------------------------------------------------------------------------- */}
      <Head>
        <title>Demande de contact | Haftwald</title>
        <meta
          name="description"
          content="Faites réaliser votre projet par un développeur web freelance Typescript et PHP."
        />
      </Head>

      {/* ------------------------------------------------------------------------- */
      /*                                    MAIN                                    */
      /* -------------------------------------------------------------------------- */}
      <main className={styles.container}>
        <section className={styles.arguments}>
          <div className={styles.logoContainer}>
            <Link href="/" passHref>
              <a>
                <figure className={styles.logo}>
                  <Image
                    src={logo}
                    alt="logo haftwald développeur web freelance"
                    quality={100}
                  />
                </figure>
              </a>
            </Link>
          </div>
          <h1>
            Faites réaliser votre projet web par un{" "}
            <span>développeur freelance</span>
          </h1>
          <ul>
            <li>
              <figure className={styles.check}>
                <Image src={check} alt="checkmark" />
              </figure>
              <span>Accompagnement personnalisé</span>
            </li>
            <li>
              <figure className={styles.check}>
                <Image src={check} alt="checkmark" />
              </figure>
              <span>Code maintenable et évolutif</span>
            </li>
            <li>
              <figure className={styles.check}>
                <Image src={check} alt="checkmark" />
              </figure>
              <span>Tarifs compétitifs</span>
            </li>
            <li>
              <figure className={styles.check}>
                <Image src={check} alt="checkmark" />
              </figure>
              <span>Garantie incluse</span>
            </li>
          </ul>
        </section>

        <form className={styles.form} onSubmit={(e) => sendMail(e)}>
          <h2>Demande de contact</h2>
          <p className={styles.subTitle}>Gratuite et sans engagement</p>

          {/* ------------------------------- API ERROR ------------------------------- */}
          {apiHasError && (
            <div className={styles.apiError}>
              <strong>Erreur serveur</strong> : vous pouvez rééssayer ou me
              contacter par téléphone au 06 51 54 25 31
            </div>
          )}

          <div className={styles.formGroupContainer}>
            {/* -------------------------------- FULLNAME -------------------------------- */}
            <div className={styles.formGroup}>
              <label htmlFor="fullname">Prénom et Nom</label>
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

            {/* ------------------------------ PHONE NUMBER ------------------------------ */}
            <div className={styles.formGroup}>
              <label htmlFor="phone">
                <div>Téléphone</div>
                <div className={styles.optional}>Facultatif</div>
              </label>
              <input
                type="text"
                id="phone"
                className={
                  phoneNumber.touched && phoneNumber.error
                    ? styles.inputError
                    : ""
                }
                value={phoneNumber.value}
                onChange={(e) => handlePhoneNumberChange(e)}
                onBlur={() => setPhoneNumber({ ...phoneNumber, touched: true })}
              />
              {phoneNumber.touched && (
                <div className={styles.textError}>{phoneNumber.error}</div>
              )}
            </div>
          </div>

          {/* ------------------------------ SUBMIT BUTTON ----------------------------- */}
          <button type="submit" disabled={isSending || !isFormValid}>
            {isSending ? <Loader /> : "Envoyer la demande"}
          </button>
        </form>
      </main>

      {/* ------------------------------------------------------------------------- */
      /*                                   FOOTER                                   */
      /* -------------------------------------------------------------------------- */}
      <footer>
        <p className={styles.legal}>
          <span>
            <Link href="/mentions-legales">Mentions légales</Link>
          </span>{" "}
          |{" "}
          <span>
            <Link href="/politique-de-confidentialite">
              Politique de confidentialité & Cookies
            </Link>
          </span>
        </p>
      </footer>
    </div>
  );
};

export default LandingMain;
