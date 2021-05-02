import { Auth } from "@supabase/ui";
import {
  Button,
  FormControl,
  Heading,
  SimpleGrid,
  Text,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { insertVote } from "../lib/VotesDao";
import VoteCongratsModal from "./VoteCongratsModal";
import LoginModal from "./LoginModal";
import { Topic } from "../lib/TopicsDao";
import { Option } from "../lib/OptionsDao";
import { VoteHeading } from "./VoteHeading";
import { VoteRow } from "./VoteRow";

type Props = {
  topic: Topic;
  options: Array<Option>;
  title: String;
  likeTitle: String;
  vetoTitle: String;
};

export default function VetoOrLike(p: Props) {
  const [likeValues, setLikeValues] = React.useState(p.options.map((o) => 50));
  const [vetoes, setVetoes] = React.useState(p.options.map((o) => false));
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = Auth.useUser();

  return (
    <>
      <VoteCongratsModal topic={p.topic} isOpen={isOpen} />
      <LoginModal user={user} />
      <VStack spacing={14}>
        <Heading fontSize={{ base: "2xl", md: "4xl" }} mt={10}>
          <p>{p.title}</p>
          <Text color="#e53e3e">{p.topic.title}</Text>
        </Heading>
        <SimpleGrid columns={3} spacing={5}>
          <VoteHeading> Option </VoteHeading>
          <VoteHeading> {p.likeTitle} </VoteHeading>
          <VoteHeading> {p.vetoTitle} </VoteHeading>
          {p.options.map((option, i) => {
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
                readOnly={false}
                defaultChecked={false}
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
            p.options.forEach(async (option, i) => {
              insertVote(
                user.id,
                p.topic.id,
                option.id,
                likeValues[i],
                vetoes[i]
              );
            });
          }}
        >
          Submit
        </Button>
      </VStack>
    </>
  );
}
