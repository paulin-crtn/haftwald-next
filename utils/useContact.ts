/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*                              REACT CUSTOM HOOK                             */
/* -------------------------------------------------------------------------- */

/**
 * Show contact modal
 *
 * @returns
 */
const useContact = () => {
  /* ------------------------------- REACT STATE ------------------------------ */
  const [showModalContact, setShowModalContact] = useState(false);

  /* ------------------------------ REACT EFFECT ------------------------------ */
  useEffect(() => {
    const body = document.querySelector("body");
    const contactOverlay = document.querySelector(".contactOverlay");
    if (showModalContact && body && contactOverlay) {
      body.classList.add("overflowYHidden");
      contactOverlay.classList.add("active");
    }
  }, [showModalContact]);

  /* --------------------------------- RETURN --------------------------------- */
  return { showModalContact, setShowModalContact };
};

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */
export default useContact;
