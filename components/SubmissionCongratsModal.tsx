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
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useClipboard,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

interface SubmissionCongratsModalProps {
  topicId: number;
  isOpen: boolean;
  onClose: () => void;
}

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
              <CopyIcon color="gray.500" />
            )}
          </Button>
        }
      />
    </InputGroup>
  );
}

export default function SubmissionCongratsModal(
  props: SubmissionCongratsModalProps
) {
  const initialRef = React.useRef();
  const [voteLink, setValue] = React.useState("");
  useEffect(() => {
    const num = encodeURIComponent(props.topicId);
    const topic = `https://justdecide.io/topics/${num}/join`;
    setValue(topic);
  }, [props.topicId]);
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onClose={props.onClose}
        isCentered
        initialFocusRef={initialRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Heading>🥳 Great job! 🎉</Heading>
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>You are one step closer to making a decision.</p>
            <p>Now send this link</p>
            <CopyableLink value={voteLink}></CopyableLink>
            <p>
              to the people you want to participate. You likely also want to
              participate yourself.
            </p>
            <p>
              Everyone has to express their views within 48 hours or until you
              stop it manually on the results page.
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" onClick={props.onClose} ref={initialRef}>
              Participate yourself
            </Button>
            <Button colorScheme="gray" onClick={props.onClose} mx="2">
              See results
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
