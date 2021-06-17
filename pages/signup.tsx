import { Center } from "@chakra-ui/react";
import React from "react";
import BiggestHeading from "../components/basics/BiggestHeading";
import GrayTextBox from "../components/basics/GrayTextBox";
import { Auth } from "@supabase/ui";
import { insertSignup } from "../lib/SignupsDao";
import LoginModal from "../components/LoginModal";

export default function SignUp() {
  const { user } = Auth.useUser();
  if (user != null) {
    insertSignup(user.email);
  }
  return (
    <>
      <LoginModal user={user} />
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
