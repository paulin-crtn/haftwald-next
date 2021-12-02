/* -------------------------------------------------------------------------- */
/*                                   IMPORTS                                  */
/* -------------------------------------------------------------------------- */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

/* -------------------------------------------------------------------------- */
/*                               CLASS COMPONENT                              */
/* -------------------------------------------------------------------------- */
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          {/** Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Righteous&display=swap"
            rel="stylesheet"
          />

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
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>

          {/*Facebook Meta Tags */}
          <meta property="og:url" content="https://haftwald.vercel.app/" />
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
          <meta property="twitter:url" content="https://haftwald.vercel.app/" />
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
