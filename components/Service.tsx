/* -------------------------------------------------------------------------- */
/*                                   IMPORT                                   */
/* -------------------------------------------------------------------------- */
import { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */
export const Service = ({
  children,
  setShowService,
  setShowModalContact,
}: {
  children: ReactNode;
  setShowService: (arg: boolean) => void;
  setShowModalContact: (arg: boolean) => void;
}) => {
  /* -------------------------------------------------------------------------- */
  /*                                  FUNCTION                                  */
  /* -------------------------------------------------------------------------- */
  /**
   * Remove css class "active"
   * Transition is set in styles/global.scss file
   */
  function removeClassActive() {
    const serviceContainer =
      document.getElementsByClassName("serviceContainer")[0];
    if (serviceContainer) {
      serviceContainer.classList.remove("active");
    }
  }
  /* -------------------------------------------------------------------------- */
  /*                                  TEMPLATE                                  */
  /* -------------------------------------------------------------------------- */
  return (
    <div className="overlay">
      <div className="serviceContainer">
        <button
          onClick={() => {
            removeClassActive();
            setTimeout(() => {
              setShowService(false);
            }, 800);
          }}
        >
          Fermer
        </button>
        <button
          onClick={() => {
            removeClassActive();
            setTimeout(() => {
              setShowService(false);
              setShowModalContact(true);
            }, 800);
          }}
        >
          Demande de devis
        </button>
        {children}
      </div>
    </div>
  );
};
