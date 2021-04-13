import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import TopicOptions from "../../components/TopicOptions";
import { fetchTopic } from "../../lib/TopicsDao";

const TopicDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [topic, setTopic] = useState({ description: "" });
  useEffect(() => {
    if (!router.isReady) return;
    fetchTopic(setTopic, id);
  }, [router.isReady]);
  return <TopicOptions topicDescription={topic.description} />;
};

export default TopicDetailPage;
