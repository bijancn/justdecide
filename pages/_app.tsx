import {
  Center,
  ChakraProvider,
  Container,
  extendTheme,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { supabase } from "../lib/initSupabase";
import CookieConsent from "react-cookie-consent";

const theme = extendTheme({
  fonts: {
    heading: "Work Sans, system-ui, sans-serif",
    body: "Work Sans, system-ui, sans-serif",
  },
});

function InnerApp({ Component, pageProps }) {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <VStack
          maxW={"3xl"}
          justify="space-between"
          height="100vh"
          width="100vw"
          maxWidth="100vw"
        >
          <Header />
          <Center>
            <Container as={Stack} width="100vw" maxWidth="1260px">
              <Component {...pageProps} />
            </Container>
          </Center>
          <Footer />
        </VStack>
      </ChakraProvider>
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>JustDecide</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {/* https://counter.dev/ */}
      <Script>
        {`if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0) {fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"bijancn",utcoffset:"2"}))};
            sessionStorage.setItem("_swa","1");`}
      </Script>
      {/* https://hotjar.com */}
      <Script>
        {`
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2362315,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>
      <CookieConsent
        // disableStyles={true}
        buttonStyle={{
          background: "#E53E3E",
          color: "rgb(255, 255, 255)",
        }}
        style={{ background: "#FFFFFF", color: "#1A202C" }}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <InnerApp Component={Component} pageProps={pageProps}></InnerApp>
      </Auth.UserContextProvider>
    </div>
  );
}
