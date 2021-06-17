import { Box, Center, Switch } from "@chakra-ui/react";
import React from "react";
import GrayTextBox from "./basics/GrayTextBox";
import { LikeSlider } from "./LikeSlider";

export function VoteRow({
  index,
  isVetoed,
  setVetoed,
  likeValue,
  setLikeValue,
  children,
  readOnly,
  defaultChecked,
}) {
  let isWinner = readOnly && index == 0;
  return (
    <>
      <Center
        key={`option-${index}`}
        color={isVetoed ? "gray.500" : "gray.800"}
        fontWeight={isWinner ? "bold" : ""}
      >
        {isWinner ? "🎉 " : ""}
        {children}
      </Center>
      <Center key={`slide-${index}`}>
        <LikeSlider
          index={index}
          key={index}
          isVetoed={isVetoed}
          likeValue={likeValue}
          setLikeValue={setLikeValue}
          readOnly={readOnly}
        />
      </Center>
      <Box key={`veto-${index}`}>
        <Center>
          <Switch
            id={`veto-switch-${index}`}
            key={`veto-switch-${index}`}
            colorScheme="red"
            size="lg"
            value="on"
            onChange={(_) => setVetoed(!isVetoed)}
            isReadOnly={readOnly}
            defaultChecked={defaultChecked}
          />
        </Center>
      </Box>
    </>
  );
}
