import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function LinkedButton(props) {
  return (
    <Link href={props.href}>
      <Button colorScheme="red" {...props}>
        {props.children}
      </Button>
    </Link>
  );
}
