import ShowVoteResults from "../../../components/ShowVoteResults";
import VetoOrLike from "../../../components/VetoOrLike";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopicOptions from "../../../components/TopicOptions";
import { fetchTopic } from "../../../lib/TopicsDao";
import { fetchOptionsOfTopic } from "../../../lib/OptionsDao";
import { selectVotesOfTopic } from "../../../lib/VotesDao";
import { sumVotes } from "../../../lib/Vote";

export default function IndexPage() {
  const router = useRouter();
  const { id } = router.query;
  const topicId = parseInt(id as string);
  const [topic, setTopic] = useState({
    id: -1,
    title: "",
    created_at: "",
    author: "",
    start_at: "",
    end_at: "",
  });
  const [options, setOptions] = useState([]);
  const [voteResults, setVoteResults] = useState([]);
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const [topic, options, votes] = await Promise.all([
        fetchTopic(topicId),
        fetchOptionsOfTopic(topicId),
        selectVotesOfTopic(topicId),
      ]);
      setTopic(topic);
      setOptions(options);
      const result = sumVotes(votes);
      setVoteResults(result);
    };

    fetchData();
  }, [router.isReady]);
  return (
    <>
      <ShowVoteResults
        topic={topic}
        options={options}
        voteResults={voteResults}
        title="And the result for"
        likeTitle="We like it this much"
        vetoTitle="Vetoed"
      />
    </>
  );
}
