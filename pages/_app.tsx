import {
  Button,
  Center,
  ChakraProvider,
  Container,
  extendTheme,
  HStack,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import React from "react";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { supabase } from "../lib/initSupabase";

import Head from "next/head";

const theme = extendTheme({
  fonts: {
    heading: "Work Sans, system-ui, sans-serif",
    body: "Work Sans, system-ui, sans-serif",
  },
});

function InnerApp({ Component, pageProps }) {
  const { user } = Auth.useUser();
  return (
    <div>
      <ChakraProvider theme={theme}>
        <Container maxW={"3xl"}>
          <HStack justify="space-between">
            <Logo />
            <HStack spacing={5}>
              <Navbar />
              {/* TODO: https://github.com/bijancn/justdecide/issues/32
               Need login and logout button with login button opening a login modal */}
              <Button
                onClick={async () => {
                  const { error } = await supabase.auth.signOut();
                  if (error) console.log("Error logging out:", error.message);
                }}
              >
                {user ? "Logout" : "Login"}
              </Button>
            </HStack>
          </HStack>
          {!user ? (
            <div>
              <Auth
                supabaseClient={supabase}
                providers={["google", "github"]}
                socialLayout="horizontal"
                socialButtonSize="xlarge"
              />
            </div>
          ) : (
            <Center>
              <Component {...pageProps} user={supabase.auth.user()} />
            </Center>
          )}
        </Container>
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
        {/* https://counter.dev/ */}
        <script
          dangerouslySetInnerHTML={{
            __html: ` if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,user:"bijancn",utcoffset:"2"}))};sessionStorage.setItem("_swa","1"); `,
          }}
        />
        {/* https://hotjar.com */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:2362315,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          }}
        />
      </Head>
      <Auth.UserContextProvider supabaseClient={supabase}>
        <InnerApp Component={Component} pageProps={pageProps}></InnerApp>
      </Auth.UserContextProvider>
    </div>
  );
}
