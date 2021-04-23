import { Heading } from "@chakra-ui/react";
import React from "react";

export default function BiggestHeading({ children }) {
  return (
    <Heading
      as="h1"
      fontSize={{ base: "36px", sm: "48px", md: "64px" }}
      fontWeight="800"
      textAlign="center"
    >
      {children}
    </Heading>
  );
}
