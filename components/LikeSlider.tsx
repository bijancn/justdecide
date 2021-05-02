import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React from "react";
import { BiHappy, BiHappyHeartEyes, BiMeh, BiSad } from "react-icons/bi";
import { FaRegSadCry } from "react-icons/fa";

export function LikeSlider({
  index,
  isVetoed,
  likeValue,
  setLikeValue,
  readOnly,
}) {
  return (
    <Slider
      id={`like-slider-${index}`}
      key={`like-slider-${index}`}
      aria-label={`like-slider-${index}`}
      defaultValue={likeValue}
      colorScheme={isVetoed ? "gray.500" : "red"}
      isDisabled={isVetoed}
      size="lg"
      onChange={(value) => setLikeValue(value)}
      isReadOnly={readOnly}
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
