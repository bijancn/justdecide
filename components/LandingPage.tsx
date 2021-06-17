import { Center, Container, Heading, Text, VStack } from "@chakra-ui/layout";
import { Box, Button, Code, Stack, useColorModeValue } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";
import React from "react";
import BiggestHeading from "./basics/BiggestHeading";
import BigHeading from "./basics/BigHeading";
import GrayTextBox from "./basics/GrayTextBox";
import LinkedButton from "./basics/LinkedButton";
import TextHighlight from "./basics/TextHighlight";
import { SimpleGrid, Icon, HStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

const featuresPrivate = [
  { title: "Where to order lunch" },
  { title: "To which school your kids should go to" },
  { title: "Where to go for vacation" },
  { title: "Which instrument to learn" },
  { title: "Which book to read" },
];

const featuresProfessional = [
  { title: "Which technologies and apps to use" },
  { title: "Which topic to talk about next" },
  { title: "Which features to build with your product team" },
  { title: "What team event to do" },
  { title: "Which side project to pursue" },
];

function FeatureList(features) {
  return features.map((feature, index) => (
    <HStack key={index} align={"top"}>
      <Box color={"green.400"} px={2}>
        <Icon as={CheckIcon} />
      </Box>
      <VStack align={"start"}>
        <Text fontWeight={600}>{feature.title}</Text>
        {/* <Text color={"gray.600"}>{feature.text}</Text> */}
      </VStack>
    </HStack>
  ));
}

function Usecases() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <BigHeading>
          Possible <TextHighlight>Applications</TextHighlight>.
        </BigHeading>
        <GrayTextBox>
          JustDecide can be used for all kinds of group decisions. To give you
          some inspiration, here are a couple of ideas:
        </GrayTextBox>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={2}>
          <SimpleGrid columns={1} spacing={10}>
            <Text
              fontSize={{ base: "30px" }}
              fontWeight="800"
              // textAlign="center"
            >
              Private
            </Text>
            {FeatureList(featuresPrivate)}
          </SimpleGrid>
          <SimpleGrid columns={1} spacing={10}>
            <Text
              fontSize={{ base: "30px" }}
              fontWeight="800"
              // textAlign="center"
            >
              Professional
            </Text>
            {FeatureList(featuresProfessional)}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default function LandingPage() {
  return (
    <>
      <VStack spacing={{ base: 8, md: 16 }} pt={{ base: 4, md: 8 }}>
        <Box>
          <BiggestHeading>
            Decision-making made <TextHighlight> simple</TextHighlight>.
          </BiggestHeading>
          <GrayTextBox pt={4}>
            JustDecide is a simple, fast and fun decision-making tool for groups
            of equals. It combines the fast pace of centralized decision making
            with the diverse perspectives of a group.
          </GrayTextBox>
          <VStack pt={4}>
            <LinkedButton
              href="/create"
              fontSize={{ base: "18px", sm: "26px" }}
              py={{ base: "18px", sm: "26px" }}
              px={{ base: "18px", sm: "26px" }}
            >
              Start now for free
            </LinkedButton>
            <GrayTextBox fontSize="md">
              Basic usage will be free forever. No strings attached.
            </GrayTextBox>
          </VStack>
          <GrayTextBox pt={4}>
            So how does it work? Imagine you want to go for lunch. Your friend
            Alice really wants to eat pizza but your other friend Bob is gluten
            intolerant, so that's a no-go for him. Of course, you don't want Bob
            to become sick, so you respect his veto. In the end, you go to the
            Thai place. It's not the favorite option for anyone but it's viable
            for everyone. JustDecide works exactly the same.{" "}
          </GrayTextBox>
          <GrayTextBox>
            You can veto show-stoppers and show your dislike or love on a
            sliding scale to reflect your gut feeling. Then the magic happens
            and the app tells you the result. Instead of using a voting tool and
            then having to discuss if this really works for everyone, simply use
            JustDecide.
          </GrayTextBox>
        </Box>
        <Usecases />
        <JustDecideForTeams />
        <RoughConsensus />
      </VStack>
    </>
  );
}

function JustDecideForTeams() {
  return (
    <Box>
      <BigHeading>
        JustDecide for <TextHighlight>Teams</TextHighlight>.
      </BigHeading>
      <GrayTextBox pt={4}>
        Traditionally, the boss was responsible to make decisions for the team
        and he would take the blame for bad decisions and the glory for the
        successful ones. In modern companies, individual contributors are
        empowered to make decisions themselves as they are the experts and this
        allows them to move more quickly. However, they rarely work alone and
        their decisions sometimes affect the whole team.{" "}
      </GrayTextBox>
      <GrayTextBox pt={4}>
        The conflicts arising from this are tackled differently: Some try to get
        input from everyone beforehand to reach consensus in the whole group.
        However, in groups of more than five people, there are often too many
        opinions, lengthy discussions and in the end, decision-making in the
        group is too slow and cumbersome to be effective. This quickly leads to
        the second approach of ignoring the group decision-making completely and
        instead individuals or smaller groups try to fly under the radar with
        their own decision to get something done and create a fait accompli.
      </GrayTextBox>
      <GrayTextBox pt="4">
        JustDecide lets teams make a decision within 48 hours, guaranteed.
        Everyone still has the chance to veto options that are no-gos from their
        point of view but everything else is simply on a scale from dislike to
        love. Due to the veto option and scale, the resulting decisions deviate
        from a simple majority vote but they don't contain any show-stoppers
        according to your experts. Thus, they are viable and actually move the
        team forward.
      </GrayTextBox>
    </Box>
  );
}

function WithLargeQuote() {
  return (
    <Stack
      bg="gray.50"
      mt={4}
      py={4}
      px={8}
      spacing={{ base: 4, md: 8 }}
      direction={"column"}
      fontSize={{ base: "xl", md: "2xl" }}
      textAlign={"center"}
      maxW={"3xl"}
    >
      <Text>
        <chakra.span fontWeight="bold">We reject</chakra.span>: kings,
        presidents and voting.
      </Text>
      <Text>
        <chakra.span fontWeight="bold">We believe in</chakra.span>: rough
        consensus and running code.
      </Text>
      <Box textAlign={"center"}>
        <Text fontWeight={600} fontSize="md">
          Dave Clark
        </Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.400", "gray.400")}>
          Proceedings of the 24th IETF, 1992
        </Text>
      </Box>
    </Stack>
  );
}

function RoughConsensus() {
  return (
    <Box>
      <BigHeading>
        {/* Better decisions. <TextHighlight>Faster</TextHighlight>. */}
        Because it <TextHighlight>works</TextHighlight>.
      </BigHeading>
      <GrayTextBox pt="4">
        Start using the principles of the Internet Engineering Task Force (IETF)
        as specified in <Code background="none">RFC-7282</Code> in your group
        today. The IETF has a long history of providing practical solutions and
        has build many of the foundations of the modern internet. Their famous
        mantra goes like this:
      </GrayTextBox>
      <WithLargeQuote />
      <GrayTextBox pt="4">
        Thus, the so-called
        <chakra.span fontStyle="italic" color="gray.800">
          {" "}
          rough consensus{" "}
        </chakra.span>
        stands for neither a centralized decision-making nor a democratic one.
        Instead, everyone in the group can veto options that are considered
        no-gos. Furthermore, decisions rarely have clear yes or no answers.
        Instead, different options have different advantages and disadvantages.
        Thus, the <Code background="none">RFC-7282</Code> recommmends to use
        humming in meetings, which is both anonymous and allows to express your
        gut feeling more strongly than a show of hands. In JustDecide, you can
        simply use the like slider to do the same.
      </GrayTextBox>
    </Box>
  );
}
