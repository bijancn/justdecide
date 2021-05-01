import { Modal } from "@chakra-ui/modal";
import {
  Center,
  Heading,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
} from "@chakra-ui/react";
import { Auth } from "@supabase/ui";
import React from "react";
import { supabase } from "../lib/initSupabase";

export default function LoginModal(props) {
  if (props.user) {
    return <></>;
  } else {
    return (
      <Modal isOpen={true} isCentered onClose={() => void 0}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Heading textAlign="center">🙏 Please sign in to proceed</Heading>
          </ModalHeader>
          <ModalBody>{loginWindow}</ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.log("Error logging out:", error.message);
}

const loginWindow = (
  <div>
    <Auth
      supabaseClient={supabase}
      providers={["google", "github"]}
      socialLayout="horizontal"
      socialColors={true}
      socialButtonSize="xlarge"
    />
  </div>
);
