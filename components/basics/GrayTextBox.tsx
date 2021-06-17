import { Center, Container } from "@chakra-ui/react";
import React from "react";

export default function GrayTextBox(props) {
  return (
    <Center>
      <Container
        fontSize="xl"
        textAlign="left"
        color="gray.500"
        {...props}
        maxWidth="3xl"
      >
        {props.children}
      </Container>
    </Center>
  );
}
