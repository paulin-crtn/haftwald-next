/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
/* --------------------------------- NEXT JS -------------------------------- */
import Link from "next/link";
import Script from "next/script";

/* -------------------------------------------------------------------------- */
/*                                  TEMPLATE                                  */
/* -------------------------------------------------------------------------- */
export const ScrollToTopButton = () => {
  return (
    <div className="scrollToTopButton">
      <div>&uarr;</div>
      <Script src="js/displayScrollTopButton.js"></Script>
    </div>
  );
};
