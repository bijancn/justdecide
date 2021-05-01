import { CheckCircleIcon, CopyIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect } from "react";
import { buildBaseLink } from "../lib/utilities";
import LinkedButton from "./basics/LinkedButton";

/**
 * Could be exported when needed
 *
 * @param value The text that should be shown with a copy icon
 */
function CopyableLink({ value }) {
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <InputGroup my="2">
      <Input type="link" value={value} size="lg" variant="outline" isReadOnly />
      <InputRightElement
        children={
          <Button onClick={onCopy} mr="2" mt="2">
            {hasCopied ? (
              <CheckCircleIcon color="green" />
            ) : (
              <Tooltip label="Click to copy" openDelay={500}>
                <CopyIcon color="gray.500" />
              </Tooltip>
            )}
          </Button>
        }
      />
    </InputGroup>
  );
}

interface SubmissionCongratsModalProps {
  topicId: number;
  isOpen: boolean;
}

export default function SubmissionCongratsModal(
  props: SubmissionCongratsModalProps
) {
  const [resultLink, setResultLink] = React.useState("");
  const [joinLink, setJoinLink] = React.useState("");
  useEffect(() => {
    const baseLink = buildBaseLink(props.topicId);
    setJoinLink(`${baseLink}/join`);
    setResultLink(`${baseLink}/results`);
  }, [props.topicId]);
  return (
    <>
      <Modal isOpen={props.isOpen} isCentered onClose={() => void 0}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Heading>🥳 Great job! 🎉</Heading>
            </Center>
          </ModalHeader>
          <ModalBody>
            <p>You are one step closer to making a decision.</p>
            <p>Now send this link</p>
            <CopyableLink value={joinLink}></CopyableLink>
            <p>
              to the people you want to participate. You likely also want to
              participate yourself.
            </p>
            <Center>
              <LinkedButton href={joinLink} my="3">
                Join the action
              </LinkedButton>
            </Center>
            <p>
              Everyone has to express their views within 48 hours or until you
              stop it manually on the results page.
            </p>
            <Center>
              <LinkedButton colorScheme="gray" href={resultLink} my="3">
                See results
              </LinkedButton>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
