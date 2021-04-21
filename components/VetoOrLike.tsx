import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Switch,
  Text,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiHappy, BiHappyHeartEyes, BiMeh, BiSad } from "react-icons/bi";
import { FaRegSadCry } from "react-icons/fa";
import { insertVote } from "../lib/VotesDao";
import VoteCongratsModal from "./VoteCongratsModal";

function LikeSlider({ index, isVetoed, likeValue, setLikeValue }) {
  return (
    <Slider
      id={`like-slider-${index}`}
      aria-label={`like-slider-${index}`}
      defaultValue={likeValue}
      colorScheme={isVetoed ? "gray.500" : "red"}
      isDisabled={isVetoed}
      size="lg"
      onChange={(value) => setLikeValue(value)}
    >
      <SliderTrack bg="red.100">
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={7}>
        <Box
          color={isVetoed ? "gray.800" : "red"}
          as={
            isVetoed
              ? FaRegSadCry
              : likeValue < 25
              ? BiSad
              : likeValue < 50
              ? BiMeh
              : likeValue < 75
              ? BiHappy
              : BiHappyHeartEyes
          }
        />
      </SliderThumb>
    </Slider>
  );
}

function VoteHeading({ children }) {
  return (
    <Box>
      <Center>
        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
          {children}
        </Text>
      </Center>
    </Box>
  );
}

function VoteRow({
  index,
  isVetoed,
  setVetoed,
  likeValue,
  setLikeValue,
  children,
}) {
  return (
    <>
      <Box key={`option-${index}`}>
        <Center>
          <Text color={isVetoed ? "gray.500" : "gray.800"}>{children}</Text>
        </Center>
      </Box>
      <Box key={`slide-${index}`}>
        <Center>
          <LikeSlider
            index={index}
            isVetoed={isVetoed}
            likeValue={likeValue}
            setLikeValue={setLikeValue}
          />
        </Center>
      </Box>
      <Box key={`veto-${index}`}>
        <Center>
          <Switch
            id={`veto-switch-${index}`}
            colorScheme="red"
            size="lg"
            value="on"
            onChange={(_) => setVetoed(!isVetoed)}
          />
        </Center>
      </Box>
    </>
  );
}

export default function VetoOrLike({ userId, topic, options }) {
  const [likeValues, setLikeValues] = React.useState(options.map((o) => 50));
  const [vetoes, setVetoes] = React.useState(options.map((o) => false));
  const [isOpen, setIsOpen] = React.useState(false);
  console.log("vetoes", vetoes, "likeValues", likeValues);

  return (
    <>
      <VoteCongratsModal topic={topic} isOpen={isOpen} />
      <VStack spacing={14}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mt={10}>
          <p>Just decide on</p>
          <Text color="#e53e3e">{topic.title}</Text>
        </Heading>
        <SimpleGrid columns={3} spacing={5}>
          <VoteHeading> Option </VoteHeading>
          <VoteHeading> How do you like it? </VoteHeading>
          <VoteHeading> Veto this? </VoteHeading>
          {options.map((option, i) => {
            return (
              <VoteRow
                index={option.id}
                isVetoed={vetoes[i]}
                likeValue={likeValues[i]}
                setLikeValue={(newVal) => {
                  var newArray = likeValues;
                  newArray[i] = newVal;
                  setLikeValues([...newArray]);
                }}
                setVetoed={(newVal) => {
                  var newArr = vetoes;
                  newArr[i] = newVal;
                  setVetoes([...newArr]);
                }}
              >
                {option.title}
              </VoteRow>
            );
          })}
        </SimpleGrid>
        <Button
          colorScheme="red"
          onClick={(e) => {
            setIsOpen(true);
            options.forEach(async (option, i) => {
              insertVote(userId, option.id, likeValues[i], vetoes[i]);
            });
          }}
        >
          Submit
        </Button>
      </VStack>
    </>
  );
}