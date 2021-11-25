/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import type { AppProps } from "next/app";
import "../styles/globals.scss";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTION                                  */
/* -------------------------------------------------------------------------- */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="overlay"></div>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
