import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export default function DecisionResult({ topicTitle }) {
  return (
    <VStack spacing={14}>
      <Heading fontSize={{ base: "2xl", md: "4xl" }} mt={10}>
        <p>And the decision for</p>
        <Text color="#e53e3e">{topicTitle}</Text>
        <p>is</p>
      </Heading>
    </VStack>
  );
}
