import {
  Button,
  Center,
  Heading,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Topic } from "../lib/TopicsDao";
import { buildBaseLink } from "../lib/utilities";
import { timeLeft } from "../lib/timeLeft";

interface VoteCongratsModalProps {
  topic: Topic;
  isOpen: boolean;
}

export default function VoteCongratsModal(props: VoteCongratsModalProps) {
  const initialRef = React.useRef();
  const [resultLink, setResultLink] = React.useState("");
  useEffect(() => {
    const baseLink = buildBaseLink(props.topic.id);
    setResultLink(`${baseLink}/results`);
  }, [props.topic.id]);
  return (
    <>
      <Modal
        isOpen={props.isOpen}
        isCentered
        initialFocusRef={initialRef}
        onClose={() => void 0}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Heading>🥳 Well done! 🎉</Heading>
            </Center>
          </ModalHeader>
          <ModalBody>
            <VStack>
              <Text>
                🧘 You carefully considered the options and expressed your
                opinion.
              </Text>
              <Text>
                💪 Now go ahead and do awesome stuff while we gather the input
                from the rest of the group.
              </Text>
              <Center>
                <Link href={resultLink}>
                  <Button colorScheme="red" my="3">
                    Check results now
                  </Button>
                </Link>
              </Center>
              {/* TODO: Compute based on end date of topic */}
              <Text>
                ⏰ The decision making process is open for{" "}
                {timeLeft(props.topic)} more hours or until the author stops it
                manually.
              </Text>
              {/* TODO: Go back button? */}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
