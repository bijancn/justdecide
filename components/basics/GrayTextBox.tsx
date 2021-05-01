import { Center, Container } from "@chakra-ui/react";
import React from "react";

export default function GrayTextBox(props) {
  return (
    <Center>
      <Container
        fontSize="xl"
        textAlign="center"
        color="gray.500"
        {...props}
        maxWidth="2xl"
      >
        {props.children}
      </Container>
    </Center>
  );
}
