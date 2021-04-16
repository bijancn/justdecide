import {
  Box,
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

function LikeSlider({ index, vetoed, likeValue, setLikeValue }) {
  return (
    <Slider
      id={`like-slider-${index}`}
      aria-label={`like-slider-${index}`}
      defaultValue={likeValue}
      colorScheme={vetoed ? "gray.500" : "red"}
      isDisabled={vetoed}
      size="lg"
      onChange={(value) => setLikeValue(value)}
    >
      <SliderTrack bg="red.100">
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={7}>
        <Box
          color={vetoed ? "gray.800" : "red"}
          as={
            vetoed
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
  vetoed,
  setVetoed,
  likeValue,
  setLikeValue,
  children,
}) {
  console.log("vetoed", vetoed);
  return (
    <>
      <Box key={`option-${index}`}>
        <Center>{children}</Center>
      </Box>
      <Box key={`slide-${index}`}>
        <Center>
          <LikeSlider
            index={index}
            vetoed={vetoed}
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
            onChange={(_) => setVetoed(!vetoed)}
          />
        </Center>
      </Box>
    </>
  );
}

export default function VetoOrSlide({ topicTitle, options }) {
  const [likeValues, setLikeValues] = React.useState([50, 70]);
  const [vetoes, setVetoes] = React.useState([false, false]);
  console.log("vetoes", vetoes, "likeValues", likeValues);

  return (
    <>
      <VStack spacing={14}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mt={10}>
          <p>Let's decide</p>
          <Text color="#e53e3e">{topicTitle}</Text>
        </Heading>
        <SimpleGrid columns={3} spacing={5}>
          <VoteHeading> Option </VoteHeading>
          <VoteHeading> How do you like it? </VoteHeading>
          <VoteHeading> Veto this? </VoteHeading>
          {options.map((option, i) => {
            return (
              <VoteRow
                index={i}
                vetoed={vetoes[i]}
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
                {option}
              </VoteRow>
            );
          })}
        </SimpleGrid>
      </VStack>
    </>
  );
}
