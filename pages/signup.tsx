import { Center } from "@chakra-ui/react";
import React from "react";
import BiggestHeading from "../components/basics/BiggestHeading";
import GrayTextBox from "../components/basics/GrayTextBox";

export default function SignUp() {
  return (
    <>
      <BiggestHeading> Thank you for your interest! </BiggestHeading>
      <Center>
        <GrayTextBox>
          Premium is under active development and we will contact you as soon as
          it's ready with a discount.
        </GrayTextBox>
      </Center>
    </>
  );
}
