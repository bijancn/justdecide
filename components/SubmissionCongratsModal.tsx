import { CheckCircleIcon, CopyIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useClipboard,
} from "@chakra-ui/react";
import React, { useEffect } from "react";

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
  onClose: () => void;
}

export default function SubmissionCongratsModal(
  props: SubmissionCongratsModalProps
) {
  const initialRef = React.useRef();
  const [resultLink, setResultLink] = React.useState("");
  const [joinLink, setJoinLink] = React.useState("");
  useEffect(() => {
    const num = encodeURIComponent(props.topicId);
    const host = window.location.hostname;
    const protocol = window.location.protocol;
    const port = window.location.port;
    const isCustomPort = port && !(port == "80" || port == "0");
    const baseLink = isCustomPort
      ? `${protocol}//${host}:${port}/decisions/${num}`
      : `${protocol}//${host}/decisions/${num}`;
    setJoinLink(`${baseLink}/join`);
    setResultLink(`${baseLink}/results`);
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
          {/* <ModalCloseButton /> */}
          <ModalBody>
            <p>You are one step closer to making a decision.</p>
            <p>Now send this link</p>
            <CopyableLink value={joinLink}></CopyableLink>
            <p>
              to the people you want to participate. You likely also want to
              participate yourself.
            </p>
            <Center>
              <Link href={joinLink}>
                <Button colorScheme="red" ref={initialRef} my="3">
                  Join the action
                </Button>
              </Link>
            </Center>
            <p>
              Everyone has to express their views within 48 hours or until you
              stop it manually on the results page.
            </p>
            <Center>
              <Link href={resultLink}>
                <Button colorScheme="gray" my="3">
                  See results
                </Button>
              </Link>
            </Center>
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}
