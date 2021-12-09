/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.scss";

/* -------------------------------------------------------------------------- */
/*                                  FUNCTION                                  */
/* -------------------------------------------------------------------------- */
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/** Meta */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/** Favicon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>

        {/*Facebook Meta Tags */}
        <meta property="og:url" content="https://www.haftwald.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Développeur Web Freelance React, NextJS, Angular | Haftwald"
        />
        <meta
          property="og:description"
          content="Haftwald est un développeur web freelance utilisant les frameworks React, NextJS et Angular via les languages Javascript et Typescript."
        />
        <meta property="og:image" content="/img/haftwald.jpg" />

        {/*Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="haftwald.vercel.app" />
        <meta property="twitter:url" content="https://www.haftwald.com/" />
        <meta
          name="twitter:title"
          content="Développeur Web Freelance React, NextJS, Angular | Haftwald"
        />
        <meta
          name="twitter:description"
          content="Haftwald est un développeur web freelance utilisant les frameworks React, NextJS et Angular via les languages Javascript et Typescript."
        />
        <meta name="twitter:image" content="/img/haftwald.jpg" />
      </Head>
      <Component {...pageProps} />
      <Script src="js/onScrollWindow.js" />
    </>
  );
}

export default MyApp;
