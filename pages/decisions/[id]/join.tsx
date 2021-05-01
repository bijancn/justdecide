import VetoOrLike from "../../../components/VetoOrLike";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopicOptions from "../../../components/TopicOptions";
import { fetchTopic } from "../../../lib/TopicsDao";
import { fetchOptionsOfTopic } from "../../../lib/OptionsDao";

export default function IndexPage({ user }) {
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
  useEffect(() => {
    if (!router.isReady) return;
    const fetchData = async () => {
      const [topic, options] = await Promise.all([
        fetchTopic(topicId),
        fetchOptionsOfTopic(topicId),
      ]);
      setTopic(topic);
      setOptions(options);
    };

    fetchData();
  }, [router.isReady]);
  return (
    <>{options ? <VetoOrLike topic={topic} options={options} /> : "Loading"}</>
  );
}
