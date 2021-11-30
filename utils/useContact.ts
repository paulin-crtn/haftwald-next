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
    if (body) {
      showModalContact
        ? body.classList.add("overflowYHidden")
        : body.classList.remove("overflowYHidden");
    }
  }, [showModalContact]);

  /* --------------------------------- RETURN --------------------------------- */
  return { showModalContact, setShowModalContact };
};

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */
export default useContact;
