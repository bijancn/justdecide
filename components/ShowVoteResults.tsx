import { Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { VoteResult } from "../lib/Vote";
import GrayTextBox from "./basics/GrayTextBox";
import { VoteHeading } from "./VoteHeading";
import { VoteRow } from "./VoteRow";

interface Props {
  topic;
  options;
  voteResults: Array<VoteResult>;
  title;
  likeTitle;
  vetoTitle;
  numberOfVotes;
}

export default function ShowVoteResults(p: Props) {
  return (
    <VStack spacing={14}>
      <Heading fontSize={{ base: "2xl", md: "4xl" }} mt={10}>
        <p>{p.title}</p>
        <Text color="red.500">{p.topic.title}</Text>
        <p>is</p>
      </Heading>
      <SimpleGrid columns={3} spacing={5}>
        <VoteHeading> Option </VoteHeading>
        <VoteHeading> {p.likeTitle} </VoteHeading>
        <VoteHeading> {p.vetoTitle} </VoteHeading>
        {p.voteResults.map((result, i) => {
          return (
            <VoteRow
              index={i}
              isVetoed={result.is_vetoed}
              likeValue={result.like_value}
              readOnly={true}
              setLikeValue={(_) => void 0}
              setVetoed={(_) => void 0}
              defaultChecked={result.is_vetoed}
            >
              {p.options[i].title}
            </VoteRow>
          );
        })}
      </SimpleGrid>
      <GrayTextBox>{p.numberOfVotes} people have contributed.</GrayTextBox>
    </VStack>
  );
}
