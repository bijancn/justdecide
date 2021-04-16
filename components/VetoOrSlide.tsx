import { CheckIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Switch,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import { BiHappy, BiHappyHeartEyes, BiMeh, BiSad } from "react-icons/bi";
import { FaSadTear, FaRegSadCry } from "react-icons/fa";
import React from "react";

function LikeSlider({ vetoed, likeValue, setLikeValue }) {
  return (
    <Slider
      aria-label="like-slider"
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

export default function RadioExample() {
  const [likeValue, setLikeValue] = React.useState(50);
  const [vetoed, setFlag] = useBoolean();
  console.log("vetoed", vetoed, "likeValue", likeValue);

  return (
    <Center>
      <FormControl display="flex" alignItems="center">
        <SimpleGrid columns={3} spacing={10}>
          <Box>
            <Center>
              <Text fontSize="xl" fontWeight="bold">
                Option
              </Text>
            </Center>
          </Box>
          <Box>
            <Center>
              <Text fontSize="xl" fontWeight="bold">
                How do you like it?
              </Text>
            </Center>
          </Box>
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              Veto this?
            </Text>
          </Box>
          <Box>
            <Center>Andronaco</Center>
          </Box>
          <Box>
            <Center>
              <LikeSlider
                vetoed={vetoed}
                likeValue={likeValue}
                setLikeValue={setLikeValue}
              />
            </Center>
          </Box>
          <Box>
            <Center>
              <Switch
                id="veto-switch"
                colorScheme="red"
                size="lg"
                onChange={setFlag.toggle}
                mr={20}
              />
            </Center>
          </Box>
        </SimpleGrid>
      </FormControl>
    </Center>
  );
}
