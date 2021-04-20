import { Heading, Text, VStack, Link } from "@chakra-ui/layout";
import { chakra } from "@chakra-ui/system";
import React from "react";

export default function HowItWorks() {
  return (
    <>
      <VStack spacing={4}>
        <Heading as="h1" size="4xl" color="#e53e3e">
          JustDecide
        </Heading>
        <Heading size="2xl">What is JustDecide?</Heading>
        <Text>
          JustDecide is an opinionated decision-making tool. Instead of adding
          another voter, survey-maker or poll creator with countless
          configuration options that is a pain to use, we decided to focus on
          making the best tool to form decisions in teams or small groups, where
          people trust each other.
        </Text>
        <Text>
          JustDecide allows remote teams to make decisions like a group of
          friends in a room. Nuances aren’t lost in the black-or-white of votes
          or zoom meetings where only one person talks. Show-Stoppers are
          respected.
        </Text>
        <Heading size="2xl">What JustDecide is not</Heading>
        <Text>
          <chakra.b color="gray.600">An idea collection tool.</chakra.b> You
          cannot add options while you are making a decision as people would
          have to revisit their choices all the time. We think it will help your
          decision making process to separate the idea sourcing from the actual
          decision making. For now, you have to do the former beforehand with
          whatever communication tool you usually use for this. However, we are
          thinking about adding a companion tool called{" "}
          <chakra.b color="#e53e3e">CollectIdeas</chakra.b>. If you like to see
          this happening,{" "}
          <Link
            href="https://twitter.com/intent/tweet?text=Hey%20%40JustDecideApp%20%23JustDecide.%20I%20would%20really%20like%20you%20to%20build"
            isExternal
            color="#e53e3e"
          >
            tweet us
          </Link>
          !
        </Text>
      </VStack>
    </>
  );
}
