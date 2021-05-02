import { Center } from "@chakra-ui/react";
import React from "react";

export function VoteHeading({ children }) {
  return (
    <Center
      key={children}
      fontSize={{ base: "lg", md: "xl" }}
      fontWeight="bold"
    >
      {children}
    </Center>
  );
}
