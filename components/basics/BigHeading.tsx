import { Heading } from "@chakra-ui/react";
import React from "react";

export default function BigHeading({ children }) {
  return (
    <Heading
      fontWeight="700"
      fontSize={{ base: "32px", md: "56px" }}
      textAlign="center"
    >
      {children}
    </Heading>
  );
}
