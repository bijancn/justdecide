import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Heading, Text, VStack, Link, Center } from "@chakra-ui/layout";
import { Box, Button, ButtonGroup } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import { Icon } from "@chakra-ui/react";
import { ImTwitter } from "react-icons/im";
import { VscCommentDiscussion, VscGithub } from "react-icons/vsc";

export default function HowItWorks() {
  return (
    <>
      <VStack spacing={16} pt={8}>
        <Heading as="h1">
          <Center>
            <Text fontSize="6xl" color="#e53e3e">
              JustDecide.
            </Text>
          </Center>
          <Text fontSize="3xl" color="gray.800">
            Make decisions as a group
          </Text>
        </Heading>
        <Box width="full">
          <Heading>
            <Center>What is JustDecide?</Center>
          </Heading>
          <Text>
            JustDecide is an opinionated decision-making tool. Instead of adding
            another voter, survey-maker or poll creator with countless
            configuration options that is a pain to use, we decided to focus on
            making the best tool to form decisions in teams or small groups,
            where people trust each other.
          </Text>
        </Box>
        <Box width="full">
          <Heading>Join the community</Heading>
          <Text>
            Share your use cases, ideas and thoughts on Github or Twitter:
          </Text>
          <ButtonGroup spacing={8}>
            <Link href="github.com">
              <Button
                variant="outline"
                colorScheme="red"
                leftIcon={<VscCommentDiscussion />}
              >
                Github discussions
              </Button>
            </Link>
            <Button
              variant="outline"
              colorScheme="red"
              rightIcon={<ImTwitter />}
            >
              Twitter
            </Button>
          </ButtonGroup>
        </Box>
        <Box width="full">
          <Heading>Start contributing</Heading>
          <Text>
            You want to fix something of{" "}
            <chakra.span color="#e53e3e" fontWeight="bold">
              JustDecide
            </chakra.span>{" "}
            or discuss a new feature? The whole app is open-source on GitHub{" "}
            <VscGithub />
          </Text>
        </Box>
      </VStack>
    </>
  );
}
