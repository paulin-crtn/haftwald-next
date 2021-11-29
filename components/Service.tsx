import { ReactNode } from "react";

export const Service = ({
  children,
  setShowService,
  setShowModalContact,
}: {
  children: ReactNode;
  setShowService: (arg: boolean) => void;
  setShowModalContact: (arg: boolean) => void;
}) => {
  return (
    <div className="overlay">
      <div className="serviceContainer">
        <button onClick={() => setShowService(false)}>Fermer</button>
        <button
          onClick={() => {
            setShowService(false);
            setShowModalContact(true);
          }}
        >
          Demande de devis
        </button>
        {children}
      </div>
    </div>
  );
};
