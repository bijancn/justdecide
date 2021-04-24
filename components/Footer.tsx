import {
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import JDLink from "./basics/JDLink";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => (
  <chakra.button
    bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
    rounded={"full"}
    w={8}
    h={8}
    cursor={"pointer"}
    as={"a"}
    href={href}
    display={"inline-flex"}
    alignItems={"center"}
    justifyContent={"center"}
    transition={"background 0.3s ease"}
    _hover={{ color: "#e53e3e" }}
    color="gray.600"
  >
    <VisuallyHidden>{label}</VisuallyHidden>
    {children}
  </chakra.button>
);

export default function Footer() {
  return (
    <Center>
      <Container
        as={Stack}
        py={5}
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        width="100vw"
        maxWidth="1260px"
        color="gray.400"
      >
        <Text>© 2021 JustDecide. All rights reserved.</Text>
        <Text>
          Made by{" "}
          <JDLink href={"https://github.com/sponsors/bijancn"} color="gray.600">
            Bijan Chokoufe Nejad
          </JDLink>
        </Text>
        <JDLink href="/terms-and-privacy" color="gray.600">
          Terms & Privacy
        </JDLink>
        <Stack direction={"row"} spacing={6}>
          <SocialButton
            label={"Twitter"}
            href={"https://twitter.com/JustDecideApp"}
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href={"https://github.com/bijancn/justdecide"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href="https://www.linkedin.com/in/bijanchokoufe/"
          >
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Center>
  );
}
