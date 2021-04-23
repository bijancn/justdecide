import { Center, Container, Heading, Text, VStack } from "@chakra-ui/layout";
import { Box, Button, Code, Stack, useColorModeValue } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import BiggestHeading from "./basics/BiggestHeading";
import BigHeading from "./basics/BigHeading";
import GrayTextBox from "./basics/GrayTextBox";
import LinkedButton from "./basics/LinkedButton";
import TextHighlight from "./basics/TextHighlight";

export default function LandingPage() {
  return (
    <>
      <VStack spacing={{ base: 8, md: 16 }} pt={{ base: 4, md: 8 }}>
        <Box>
          <BiggestHeading>
            Decision-making made <TextHighlight> simple</TextHighlight>.
          </BiggestHeading>
          <GrayTextBox pt={4}>
            JustDecide is a simple, fast and effective decision-making tool{" "}
            <chakra.span color="gray.800" fontStyle="italic">
              for groups without kings
            </chakra.span>
            . It combines the fast pace of centralized decision making with the
            diverse perspectives of a group.
          </GrayTextBox>
        </Box>
        <LinkedButton
          href="/create"
          fontSize={{ base: "18px", sm: "26px" }}
          py={{ base: "18px", sm: "26px" }}
          px={{ base: "18px", sm: "26px" }}
        >
          Start now for free
        </LinkedButton>
        <Box>
          <BigHeading>
            Better decisions. <TextHighlight>Faster</TextHighlight>.
          </BigHeading>
          <GrayTextBox pt="4">
            Start using the principles of the Internet Engineering Task Force
            (IETF) as specified in <Code background="none">RFC-7282</Code> in
            your group today.
          </GrayTextBox>
          <WithLargeQuote />
        </Box>
      </VStack>
    </>
  );
}

function WithLargeQuote() {
  return (
    <Stack
      bg="gray.50"
      mt={4}
      py={8}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        textAlign={"center"}
        maxW={"3xl"}
      >
        <chakra.span fontWeight="bold">We reject</chakra.span>: kings,
        presidents and voting.
        <p /> <chakra.span fontWeight="bold">We believe in</chakra.span>: rough
        consensus and running code.
      </Text>
      <Box textAlign={"center"}>
        <Text fontWeight={600}> Dave Clark </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Proceedings of the 24th IETF, 1992
        </Text>
      </Box>
    </Stack>
  );
}
