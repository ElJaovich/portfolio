import "../styles/globals.css";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { LazyMotion, domAnimation } from "framer-motion";

import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/rounded-avatar.png"
          type="image/x-icon"
        />

        <title>{`Elias El Jaovich Portfolio`}</title>

        <meta name="title" content="Elias El Jaovich Portfolio" />
        <meta name="description" content="Elias El Jaovich Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Elias El Jaovich Portfolio" />
        <meta
          property="og:description"
          content="Elias El Jaovich Portfolio"
        />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Elias El Jaovich Portfolio" />

        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>


    </>
  );
}

export default MyApp;
