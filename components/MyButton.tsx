import Image from "next/image";
import { Box, Button } from "@chakra-ui/react";

export default function MyButton(children, onClick) {
  return (
    <Button colorScheme="red" onClick={onClick}>
      {children}
    </Button>
  );
}
