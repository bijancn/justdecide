import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  chakra,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import BigHeading from "../components/basics/BigHeading";

export default function Pricing() {
  return (
    <>
      <VStack spacing={14}>
        <BigHeading>
          JustDecide is <chakra.span color="#e53e3e">Free</chakra.span> for
          basic usage. <p />
          Teams can accelerate with{" "}
          <chakra.span color="#e53e3e">Premium</chakra.span>.
        </BigHeading>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 4, md: 16 }}
        >
          <PricingSlide
            tierName="Free"
            price={0}
            description="For everyone who wants to make decisions as a group."
            extraDescription={null}
            features={[
              "Unlimited decisions",
              "Unlimited options",
              "Unlimited participants",
              "Free forever",
            ]}
            cta="Use now"
            ctaVariant="outline"
            link="/create"
          ></PricingSlide>
          <PricingSlide
            tierName="Premium"
            price={5}
            description="For power users and teams who want to decide together and automate the busy work."
            extraDescription="Everything in Free, plus"
            features={[
              "Form teams with premium members",
              "Overview of team decisions", // Active and past decisions can be viewed
              "Automatically invite team members",
              "Schedule recurring decisions",
              "Add descriptions to decisions and options",
            ]}
            cta="Sign up"
            ctaVariant="solid"
            link="/signup"
          ></PricingSlide>
        </Stack>
      </VStack>
    </>
  );
}

function TierAndPrice({ tierName, price }) {
  return (
    <Stack
      textAlign={"center"}
      p={6}
      color={useColorModeValue("gray.800", "white")}
      align={"center"}
    >
      <Text
        bg={useColorModeValue("green.50", "green.900")}
        p={2}
        px={3}
        color={"green.500"}
        rounded={"full"}
      >
        {tierName}
      </Text>
      <Stack direction={"row"} align={"center"} justify={"center"}>
        <Text fontSize={"3xl"}>€</Text>
        <Text fontSize={"6xl"} fontWeight={800}>
          {price}
        </Text>
        <Text color={"gray.500"}>/month</Text>
      </Stack>
    </Stack>
  );
}

function PricingSlide({
  tierName,
  price,
  description,
  extraDescription,
  features,
  cta,
  ctaVariant,
  link,
}) {
  return (
    <Box
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <TierAndPrice tierName={tierName} price={price}></TierAndPrice>
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        px={6}
        py={6}
        height="full"
      >
        <Box>{description}</Box>
        <Box pt={4} pb={2}>
          <Text fontWeight="bold" color="gray.600">
            {extraDescription}
          </Text>
        </Box>
        <List spacing={2}>
          {features.map((feature) => (
            <ListItem>
              <ListIcon as={CheckIcon} color="green.500" />
              {feature}
            </ListItem>
          ))}
        </List>
        <Center pt={6}>
          <Link href={link}>
            <Button
              colorScheme="red"
              rounded={"xl"}
              shadow="lg"
              variant={ctaVariant}
              px={16}
            >
              {cta}
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
}
