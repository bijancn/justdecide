import { Container } from "@chakra-ui/react";
import React from "react";

export default function GrayTextBox(props) {
  return (
    <Container fontSize="xl" textAlign="center" color="gray.500" {...props}>
      {props.children}
    </Container>
  );
}
