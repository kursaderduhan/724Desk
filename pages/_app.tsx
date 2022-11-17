import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@styles/theme";
import { useRouter } from "next/router";
import { useStorken } from "@data/storken";
import React, { useEffect, useState } from "react";
const unauthorizedPaths = ["/SignIn", "/SignUp"];

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [credentials, Credentials] = useStorken("credentials");
  if (credentials) {
    useEffect(() => {
      console.log("credentials", credentials);
      console.log("router.pathname", router.pathname);
    }, [credentials]);
  } else if (!credentials) {
    console.log("credentials2", credentials);
    useEffect(() => {
      router.push("/SignIn");
    }, [credentials]);
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
        <meta name="application-name" content="TFB BeyondStars" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TFB BeyondStars" />
        <meta name="description" content="TrueFeedBack Universal Client" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFBB00" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' /> */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://app.truefeedback.io" />
        <meta name="twitter:title" content="TFB BeyondStars" />
        <meta
          name="twitter:description"
          content="TrueFeedBack Universal Client"
        />
        <meta
          name="twitter:image"
          content="https://app.truefeedback.io/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@TrueFeedBack_io" />
        <meta property="og:type" content="https://app.truefeedback.io" />
        <meta property="og:title" content="TFB BeyondStars" />
        <meta
          property="og:description"
          content="TrueFeedBack Universal Client"
        />
        <meta property="og:site_name" content="TFB BeyondStars" />
        <meta property="og:url" content="https://app.truefeedback.io" />
        <meta
          property="og:image"
          content="https://app.truefeedback.io/icons/apple-touch-icon.png"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_2048.png"
          sizes="2048x2732"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1668.png"
          sizes="1668x2224"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1536.png"
          sizes="1536x2048"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1125.png"
          sizes="1125x2436"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_1242.png"
          sizes="1242x2208"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_750.png"
          sizes="750x1334"
        />
        <link
          rel="apple-touch-startup-image"
          href="/images/apple_splash_640.png"
          sizes="640x1136"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
