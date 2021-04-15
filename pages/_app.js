import {
  Button,
  Center,
  ChakraProvider,
  Container,
  extendTheme,
  HStack,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import Logo from "../components/Logo";
import { supabase } from "../lib/initSupabase";

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
            <Button
              onClick={async () => {
                const { error } = await supabase.auth.signOut();
                if (error) console.log("Error logging out:", error.message);
              }}
            >
              Logout
            </Button>
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
    <Auth.UserContextProvider supabaseClient={supabase}>
      <InnerApp Component={Component} pageProps={pageProps}></InnerApp>
    </Auth.UserContextProvider>
  );
}
